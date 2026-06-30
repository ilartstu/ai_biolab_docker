# Деплой ai-biolab на VPS

Рунбок по публикации проекта на сервере.

- **Сервер:** Ubuntu 22.04, IP `213.155.10.12`, Docker уже установлен.
- **Фаза 1 (сейчас):** запуск по IP через HTTP — `http://213.155.10.12`.
- **Фаза 2 (позже):** домен `ai-biolab.ru` + HTTPS (Let's Encrypt). См. конец файла.

Наружу смотрит только один контейнер — **`web` (nginx)** на порту 80.
`api` и `db` живут во внутренней docker-сети и **не публикуют порты**.
Фронт и API на одном origin: фронт ходит на `/api/...` относительным путём.

---

## Фаза 1 — запуск по IP (HTTP)

### 1. Проверить окружение сервера

```bash
docker --version            # docker есть
docker compose version      # нужен плагин compose v2
docker ps                   # что уже крутится (чтобы порт 80 был свободен)
```

Если `docker compose` не найден — поставить плагин:

```bash
apt update && apt install -y docker-compose-plugin
```

`make` на minimized-Ubuntu может отсутствовать. Можно поставить (`apt install -y make`)
и пользоваться короткими командами, либо выполнять полные `docker compose ...` команды —
ниже приведены обе формы.

### 2. Firewall (ufw): разрешить только 22 / 80 / 443

```bash
apt install -y ufw
ufw allow 22/tcp            # SSH — обязательно ДО включения, иначе потеряешь доступ
ufw allow 80/tcp            # HTTP
ufw allow 443/tcp           # HTTPS (понадобится в Фазе 2)
ufw --force enable
ufw status
```

> Нюанс: Docker публикует порты через свои iptables-правила в обход ufw. У нас
> наружу публикуется только `web:80` (это намеренно), поэтому для Фазы 1 этого
> достаточно. Главное — не публиковать порты, которые не должны быть публичными
> (в прод-compose у `db`/`api` публикации портов нет).

### 3. Получить код на сервер

```bash
git clone https://github.com/ilartstu/ai_biolab_docker.git
cd ai_biolab_docker
git checkout cgan          # или main, когда вольёшь ветку
```

### 4. Создать прод-конфиг `.env.prod`

```bash
cp .env.prod.example .env.prod
# сгенерировать пароль БД:
openssl rand -base64 24
nano .env.prod             # вставить POSTGRES_PASSWORD; SECURE_COOKIE=false; CORS_ORIGINS пусто
```

`.env.prod` в git не коммитится (он в `.gitignore`). Живёт только на сервере.

### 5. Первый запуск

```bash
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d --build
# короткая форма (если есть make):  make prod-up
```

Первая сборка фронта (`npm ci` + `npm run build`) занимает несколько минут.
Порядок старта: `db` (ждёт healthy) → `db-init` (создаёт схему и сидит данные,
идемпотентно) → `api` (ждёт healthy) → `web`.

### 6. Проверить

```bash
docker compose -f docker-compose.prod.yml --env-file .env.prod ps    # все healthy/running
curl -s http://localhost/api/health                                  # {"status":"ok"...}
# короткие формы:  make prod-ps   /   make prod-health
```

В браузере открыть **http://213.155.10.12** — должен открыться сайт, страница
`/modeling` должна дёргать API без ошибок в Network-вкладке.

---

## Обновление до новой версии (редеплой)

Безопасный цикл: **бэкап БД → `git pull` → пересборка → перезапуск**.
Данные лежат в именованном volume `ai_biolab_anna_pg18_data` и переживают пересборку.

```bash
make deploy
# то же вручную:
make backup
git pull
docker compose -f docker-compose.prod.yml --env-file .env.prod up -d --build
```

- Простой минимальный: пересобирается только изменившееся, контейнеры подменяются
  по очереди. `db` не трогается, пока не менялся её образ.
- `db-init` отрабатывает снова, но он идемпотентный (`ON CONFLICT DO NOTHING` /
  проверка SHA-256) — повтор безопасен.

### ⚠️ Правила сохранности данных

- **НИКОГДА `docker compose down -v`** и **`make clean`** на сервере — флаг `-v`
  удаляет volume вместе с БД. Останавливать только `down` / `make prod-down`.
- Перед каждым деплоем — бэкап (`make deploy` делает его сам первым шагом).

### Бэкап / восстановление

```bash
make backup                                   # → backups/ai_biolab_<дата>.sql.gz
make restore f=backups/ai_biolab_2026....sql.gz
```

Папка `backups/` в `.gitignore`. Желательно настроить регулярный бэкап по cron
и копировать дампы с сервера (например, ежедневно).

---

## Фаза 2 — домен ai-biolab.ru + HTTPS (когда будет доступ к DNS)

Сейчас не настроено намеренно (выбран запуск сперва по IP). Что нужно будет сделать:

1. **DNS:** A-запись `ai-biolab.ru` (и `www`) → `213.155.10.12`. Дождаться
   распространения (`dig ai-biolab.ru` показывает нужный IP).
2. **Сертификат Let's Encrypt** (certbot): выпуск через webroot-челлендж,
   который отдаёт текущий nginx (`/.well-known/acme-challenge/`).
3. **nginx:** добавить server-блок на `443` с сертификатом, на `80` — редирект на HTTPS.
4. **Переключить настройки:**
   - в `.env.prod`: `SECURE_COOKIE=true`, `CORS_ORIGINS=https://ai-biolab.ru,https://www.ai-biolab.ru`;
   - открыть 443 в ufw (уже сделано в шаге 2).
5. Фронт **пересобирать не нужно** — он ходит на API относительным путём `/api`,
   так что тот же билд работает и по домену.

> Когда получишь доступ к DNS — скажи, допишу 443-конфиг nginx и certbot-сервис
> в compose под этот стек.

---

## Шпаргалка команд

| Действие | make | вручную |
|----------|------|---------|
| Первый запуск | `make prod-up` | `docker compose -f docker-compose.prod.yml --env-file .env.prod up -d --build` |
| Статус | `make prod-ps` | `... ps` |
| Логи | `make prod-logs` | `... logs -f --tail=100` |
| Health | `make prod-health` | `curl -s http://localhost/api/health` |
| Редеплой | `make deploy` | бэкап + `git pull` + `up -d --build` |
| Бэкап | `make backup` | `pg_dump ... | gzip > backups/...` |
| Остановить (БД цела) | `make prod-down` | `... down` |
