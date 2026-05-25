import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
    OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Footer from './Components/Footer' ;
import NaviBarv2 from './Components/NaviBarv2';
import sem_a from "./images/news/sem_a.PNG"
import sem_b from "./images/news/sem_b.PNG"
import sem_c from "./images/news/sem_c.PNG"
import conf_a from "./images/news/conf_a.PNG"
import NewsData from './Components/NewsData'
import conf_b from "./images/news/conf_b.PNG"
import life_a from "./images/news/life_a.PNG"
import life_b from "./images/news/life_b.PNG"
import life_c from "./images/news/life_c.PNG"
import life_e from "./images/news/life_e.PNG"
import conf_c from "./images/news/conf_c.PNG"
import conf_e from "./images/news/conf_e.PNG"
import conf_d from "./images/news/conf_d.PNG"
import life_d from "./images/news/life_d.PNG"
  
export function News () {

    const postsA1 = [
  {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_h" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_e} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Cотрудники лаборатории примут участие в Международной конференции ПОСТГЕНОМ’2024, на которой с результатами работы выступит заведующий лабораторией Криворотько О.И.</h5>
    <p class="card_descr_t lead">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_g" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-3">Сотрудники лаборатории примут участие в XVI конференции «Математические модели и численные методы в биологии и медицине»</h5>
    <p class="card_descr_t lead my-4">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_f" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_d} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-3">Сотрудники лаборатории примут участие в конференции «Квазилинейные уравнения, обратные задачи и их приложения»</h5>
    <p class="card_descr_t lead my-4">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_e" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={conf_d} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-1">Сотрудники лаборатории примут участие в конференции «Обратные некорректные задачи и машинное обучение»</h5>
        <p class=" card_descr_t lead my-4">17.10.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_d" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_d} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Сотрудники лаборатории примут участие в конференции «Индустриальная математика: от математических методов к промышленным технологиям»</h5>
    <p class="card_descr_t lead">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Conf_b" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={conf_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="my-3 card_title_t">Сотрудники лаборатории примут участие в конференции «Математика в медицине»</h5>
        <h5 class="my-4 card_descr_t lead">24.09.2024 </h5>
        </div>
      </article>
      </a>
    </li></ul>,eventKey: "A1",eventKey: "all"},
      {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Conf_c" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-2">Сотрудники лаборатории примут участие в IV конференции математических центров России</h5>
    <p class="card_descr_t lead my-3">08.08.2024</p>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 8, name: <ul class="cards_t ">
      <li class="cards_item_t">
      <a href="/Conf_a" style={{ textDecoration: 'none', color: 'inherit' }}>
        <article class="card_t">
          <div class="card_image_t">
            <img src={conf_a} alt="Конференция"></img>
          </div>
          <div class="card_content_t">
          <h5 class="card_title_t">14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024</h5>
          <h5 class="card_descr_t lead my-1">13.06.2024</h5>
          </div>
        </article></a>
      </li></ul>,eventKey: "A1",eventKey: "all"},
      
     
    ]
    const postsA2 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_t" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-3">
        <h5 class="card_title_t my-4">3 июля пройдёт семинар лаборатории на тему «Симплификация Неверова»</h5>
        <h5 class="card_descr_t lead my-4">02.07.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_s" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">19 июня пройдёт семинар лаборатории на тему «Сравнительный анализ подходов к решению обратной задачи реконструкции изображений в эмиссионной медицинской томографии»</h5>
        <h5 class="card_descr_t lead">17.06.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_r" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-3">
        <h5 class="card_title_t my-4">20 мая пройдёт семинар лаборатории, на котором планируется 3 доклада-</h5>
        <h5 class="card_descr_t lead my-4">19.05.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_q" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t">15 мая пройдёт семинар лаборатории на тему «Прогнозирование распространения социально-значимых заболеваний, основанных на методах глубокого обучения в случае недостаточных данных»</h5>
        <h5 class="card_descr_t lead my-3">14.05.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_p" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t">17 апреля пройдёт семинар лаборатории на тему «Суперкомпьютерный анализ и регуляризация задач идентификации и управления социальными процессами»</h5>
        <h5 class="card_descr_t lead my-3">11.04.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_o" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-2">
        <h5 class="card_title_t">3 апреля пройдёт семинар лаборатории на тему «Почему живое плохо подходит для дифференциального и вероятностного моделирования»</h5>
        <h5 class="card_descr_t lead my-4">29.03.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_n" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-4">
        <h5 class="card_title_t my-1">20 марта пройдёт семинар лаборатории на тему «Полу-контролируемая классификация: Основные идеи»</h5>
        <h5 class="card_descr_t lead my-4">19.03.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 8, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_m" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t my-1">6 марта состоится совместное заседание семинара «Прикладная статистика»  и семинара лаборатории ИИ-технологий математического моделирования биологических, социально-экономических и экологических процессов</h5>
        <h5 class="card_descr_t lead">04.03.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 9, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_l" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t my-4">27 февраля пройдёт семинар лаборатории на тему «Новый метод коррекции параметров динамических эпидемиологических моделей»</h5>
        <h5 class="card_descr_t lead my-4">17.02.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 10, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_k" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_c} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-1">6 февраля пройдёт семинар лаборатории на тему «Математическое моделирование распространения эпидемий с учётом социальных, экономических и экологических процессов»</h5>
        <h5 class="card_descr_t lead my-1">04.02.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 11, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_j" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">28 ноября пройдёт семинар лаборатории на тему «Вероятностное прогнозирование эпидемий в регионах Российской Федерации на основе условной генеративно-состязательной сети и байесовского подхода»</h5>
    <h5 class="card_descr_t lead my-1">20.11.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 12, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_i" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-3">
    <h5 class="card_title_t my-1">14 ноября пройдёт семинар лаборатории на тему «Моделирование острых и хронических инфекций»</h5>
    <h5 class="card_descr_t lead my-4">07.11.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 13, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_h" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-2">26 сентября пройдёт семинар лаборатории на тему «Проблемы получения точной количественной оценки накопленной активности в опухолевых очагах при исследовании методом ОФЭКТ/КТ»</h5>
        <p class="card_descr_t lead my-2">17.09.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 14, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_g" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-2">12 сентября пройдёт семинар лаборатории на тему «Особенности использования физически-информированных нейронных сетей для решения задач моделирования движения несжимаемой жидкости»</h5>
    <p class="card_descr_t lead my-2">11.09.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 15, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_f" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="my-3 card_content_t">
        <h5 class="my-2 card_title_t">29 августа пройдёт семинар лаборатории на тему «Метод Гельфанда-Левитана в коэффициентых обратных задачах»</h5>
        <p class="my-3 card_descr_t lead">23.08.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 16, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_e" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="my-3 card_content_t">
        <h5 class="my-2 card_title_t">15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h5>
        <p class="my-3 card_descr_t lead">31.07.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 17, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_d" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h5>
        <p class="card_descr_t lead">31.07.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 18, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_c" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t my-3">
    <h5 class="card_title_t my-2">18 июля пройдёт семинар лаборатории на тему «Полуконтролируемая сегментация медицинских изображений: Обзор»</h5>
    <p class="card_descr_t lead my-3">10.07.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 19, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_b" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="my-4 card_content_t">
    <h5 class="my-1 card_title_t">4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h5>
    <h5 class="my-4 card_descr_t lead">21.06.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 20, name: <ul class="cards_t"><li class="cards_item_t">
        <a href="/Sem_a" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t my-3">
        <h5 class="card_title_t my-2">20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h5>
        <h5 class="card_descr_t lead my-3">13.06.2024</h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"}
    ]



    const postsQ1 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_e" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_e} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">С 21 по 25 июля проходит Международный конгресс по анализу, приложениям и вычислениям (ISAAC-2025), участниками которого станут сразу 5 сотрудников лаборатории</h5>
    <h5 class="card_descr_t lead my-1">21.07.2025 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_d" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_d} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-2">Заведующий лабораторией Криворотько О.И. примет участие в заседаниях IV Конгресса молодых учённых</h5>
    <h5 class="card_descr_t lead my-2">17.10.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Life_c" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={life_c} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-2">30 августа на базе Центра нейрохирургии состоится Заседание Сибирской ассоциации нейрохирургов</h5>
        <p class="card_descr_t lead my-4">26.08.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Life_b" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-3 card_title_t">В Новосибирской области проходит акция "Наука рядом"</h5>
    <p class="my-4 card_descr_t lead">10.07.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Life_a" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
    <h5 class=" card_descr_t lead">08.07.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "Q1",eventKey: "all"},

      
    ]
    
      
     

     
const postsall  = [
        {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_t" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-3">
        <h5 class="card_title_t my-4">3 июля пройдёт семинар лаборатории на тему «Симплификация Неверова»</h5>
        <h5 class="card_descr_t lead my-4">02.07.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_s" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">19 июня пройдёт семинар лаборатории на тему «Сравнительный анализ подходов к решению обратной задачи реконструкции изображений в эмиссионной медицинской томографии»</h5>
        <h5 class="card_descr_t lead">17.06.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_r" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-3">
        <h5 class="card_title_t my-4">20 мая пройдёт семинар лаборатории, на котором планируется 3 доклада-</h5>
        <h5 class="card_descr_t lead my-4">19.05.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_q" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t">15 мая пройдёт семинар лаборатории на тему «Прогнозирование распространения социально-значимых заболеваний, основанных на методах глубокого обучения в случае недостаточных данных»</h5>
        <h5 class="card_descr_t lead my-3">14.05.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_p" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t">17 апреля пройдёт семинар лаборатории на тему «Суперкомпьютерный анализ и регуляризация задач идентификации и управления социальными процессами»</h5>
    <h5 class="card_descr_t lead my-3">11.04.2025 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_o" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-3">3 апреля пройдёт семинар лаборатории на тему «Почему живое плохо подходит для дифференциального и вероятностного моделирования»</h5>
    <h5 class="card_descr_t lead my-4">29.03.2025 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_n" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-4">20 марта пройдёт семинар лаборатории на тему «Полу-контролируемая классификация: Основные идеи»</h5>
    <h5 class="card_descr_t lead my-3">19.03.2025 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 8, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_m" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">6 марта состоится совместное заседание семинара «Прикладная статистика»  и семинара лаборатории ИИ-технологий математического моделирования биологических, социально-экономических и экологических процессов</h5>
    <h5 class="card_descr_t lead my-1">04.03.2025 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 9, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_l" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t my-4">27 февраля пройдёт семинар лаборатории на тему «Новый метод коррекции параметров динамических эпидемиологических моделей»</h5>
        <h5 class="card_descr_t lead my-3">17.02.2025 </h5>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 10, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_k" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">6 февраля пройдёт семинар лаборатории на тему «Математическое моделирование распространения эпидемий с учётом социальных, экономических и экологических процессов»</h5>
    <h5 class="card_descr_t lead my-1">04.02.2025 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 11, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_j" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">28 ноября пройдёт семинар лаборатории на тему «Вероятностное прогнозирование эпидемий в регионах Российской Федерации на основе условной генеративно-состязательной сети и байесовского подхода»</h5>
    <h5 class="card_descr_t lead my-1">20.11.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 12, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_i" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-2">
    <h5 class="card_title_t my-3">14 ноября пройдёт семинар лаборатории на тему «Моделирование острых и хронических инфекций»</h5>
    <h5 class="card_descr_t lead my-4">07.11.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 13, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_d" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_d} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-2">Заведующий лабораторией Криворотько О.И. примет участие в заседаниях IV Конгресса молодых учённых</h5>
    <h5 class="card_descr_t lead my-4">17.10.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 14, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_h" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_e} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Cотрудники лаборатории примут участие в Международной конференции ПОСТГЕНОМ’2024, на которой с результатами работы выступит заведующий лабораторией Криворотько О.И.</h5>
    <p class="card_descr_t lead my-1">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 15, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_g" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-2">Сотрудники лаборатории примут участие в XVI конференции «Математические модели и численные методы в биологии и медицине»</h5>
    <p class="card_descr_t lead my-4">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 16, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_f" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_d} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-2">Сотрудники лаборатории примут участие в конференции «Квазилинейные уравнения, обратные задачи и их приложения»</h5>
    <p class="card_descr_t lead my-4">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 17, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_e" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={conf_d} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t my-2">Сотрудники лаборатории примут участие в конференции «Обратные некорректные задачи и машинное обучение»</h5>
        <p class=" card_descr_t lead my-4">17.10.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 18, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_d" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_d} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-2">Сотрудники лаборатории примут участие в конференции «Индустриальная математика: от математических методов к промышленным технологиям»</h5>
    <p class="card_descr_t lead my-3">17.10.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 19, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_b" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-4 card_title_t">Сотрудники лаборатории примут участие в конференции «Математика в медицине»</h5>
    <h5 class="my-4 card_descr_t lead">24.09.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 20, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_h" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">26 сентября пройдёт семинар лаборатории на тему «Проблемы получения точной количественной оценки накопленной активности в опухолевых очагах при исследовании методом ОФЭКТ/КТ»</h5>
    <p class="card_descr_t lead my-2">17.09.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 21, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_g" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">12 сентября пройдёт семинар лаборатории на тему «Особенности использования физически-информированных нейронных сетей для решения задач моделирования движения несжимаемой жидкости»</h5>
    <p class="card_descr_t lead my-2">11.09.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 22, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_c" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-3">30 августа на базе Центра нейрохирургии состоится Заседание Сибирской ассоциации нейрохирургов</h5>
    <p class="card_descr_t lead my-4">26.08.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 23, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_f" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-3">29 августа пройдёт семинар лаборатории на тему «Метод Гельфанда-Левитана в коэффициентых обратных задачах»</h5>
        <p class=" card_descr_t lead my-3">23.08.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 24, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Conf_c" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-3">Сотрудники лаборатории примут участие в IV конференции математических центров России</h5>
    <p class="card_descr_t lead my-4">08.08.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 25, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_e" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class=" my-3 card_title_t">15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h5>
        <p class="my-3 card_descr_t lead">31.07.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 26, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_d" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-1">1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h5>
        <p class="card_descr_t lead my-1">31.07.2024</p>
        </div>
      </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 27, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_b" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_b} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-3 card_title_t">В Новосибирской области проходит акция "Наука рядом"</h5>
    <h5 class="my-3 card_title_t"></h5>
    <p class="my-4 card_descr_t lead">10.07.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 28, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_c" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Семинар"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">18 июля пройдёт семинар лаборатории на тему «Полуконтролируемая сегментация медицинских изображений: Обзор»</h5>
    <p class="my-3 card_descr_t lead">10.07.2024</p>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 29, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_a" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_a} alt="Конференция"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">Ученые НГУ разрабатывают модель для прогнозирования развития осложнений инфекционных заболеваний</h5>
    <h5 class="my-3 card_descr_t lead">08.07.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 30, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_b" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Конференция"></img>
    </div>
    <div class="my-1 card_content_t">
    <h5 class="my-3 card_title_t">4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h5>
    <h5 class="my-3 card_descr_t lead">21.06.2024 </h5>
    </div>
  </article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 31, name: <ul class="cards_t ">
  <li class="cards_item_t">
  <a href="/Conf_a" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_a} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">14-я Международная мультиконференция «Биоинформатика регуляции и структуры геномов/системная биология», 5-10 августа 2024</h5>
      <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
      </div>
    </article></a>
  </li></ul>,eventKey: "A1",eventKey: "all"},
{id: 32, name: <ul class="cards_t"><li class="cards_item_t">
<a href="/Sem_a" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={sem_a} alt="Семинар"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t">20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h5>
  <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
  </div>
</article></a>
</li></ul>,eventKey: "A1",eventKey: "all"},

  
  
]  

    const items = [
        {id:1, list:postsA1, eventKey:"A1"},
        {id:2, list:postsA2, eventKey:"A2"},
        {id:3, list:postsQ1, eventKey:"Q1"},
        {id:4, list:postsall, eventKey:"all"}
    ]
    return (
          <>
      <NaviBarv2 />
      <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h4 className="mx-5 text-secondary">Новости</h4></div>
      <hr/>
    
  </Container>
  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="all" >

      <Nav variant="pills" defaultActiveKey="/home" >
        <Nav.Item key={1}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="left" className="text-black">
               Количество: 8</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  className="shadow3" size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
      <Nav.Link  eventKey="A1">Конференции</Nav.Link>
        </Button>
     
        </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={2}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Количество: 20</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="A2">Семинары</Nav.Link>
          </Button>
            
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={3}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Количество: 5</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  size="sm" variant="outline-info" className="mx-1 shadow3">
          <Nav.Link eventKey="Q1">Научная жизнь</Nav.Link>
          </Button>
          
          </OverlayTrigger>
        </Nav.Item>
        
        <Nav.Item key={4}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Количество: 32</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="all">Все</Nav.Link>
          </Button>
           
          </OverlayTrigger>
        </Nav.Item>
      </Nav>

      <Tab.Content>
      {items.map((item) =>
          <NewsData key={item.id} item = {item}/>
      )}
      </Tab.Content>
  </Tab.Container>
      </Container>
      <Footer />
      </>
      
      )}