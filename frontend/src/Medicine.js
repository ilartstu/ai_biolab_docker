import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2 from './Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import medicine1 from "./images/directions/medicine1.png"
import medicine2 from "./images/directions/medicine2.png"
import medicine3 from "./images/directions/medicine3.png"
import medicine4 from "./images/directions/medicine4.png"
import medicine5 from "./images/directions/medicine5.png"
import medicine6 from "./images/directions/medicine6.png"
import medicine7 from "./images/directions/medicine7.png"

import Footer from './Components/Footer'



export function Medicine(){


  return(
  <>
  <NaviBarv2 />
      <Container className="my-3"   style={{
              height: "120%" }}>
        <Tabs  justify defaultActiveKey="AI" id="uncontrolled-tab-example" >
          <Tab eventKey="AI" title="ИИ сегментации патологий в головном мозге">
          <p class="lead my-4">Была проведена сегментация аневризм сосудов головного мозга с помощью U-Net подобной модели 3D сегментации. </p>
          <p class="lead my-4">Модель имеет 180.000 обучаемых параметров, весит 0.72mb, время получения предсказания 821 ms ± 63.6 ms. Схема архитектуры представлена ниже.</p>
          <div class="center my-4"><img src={medicine1} align="center" width={900} /></div>
          <p class="lead my-4">Использовалось 200 3D КТ изображений верхней части туловища пациентов с аневризмами. Изображения имели вертикальный размер от 500 до 1100 и размер 512x512 по горизонтали. Для анализа вырезали область черепа и уменьшили размер изображений до 128x128x128. Интенсивность изображений была установлена в диапазоне 50-450.</p>
          <div class="center my-4"><img src={medicine2} align="center" width={700} /></div>
          <p class="lead my-4">Результаты показали высокую точность в локализации аневризм, при этом форма самой области оставалась в рамках приемлемой погрешности. Так же модель отмечала области похожие на аневризмы, которые не были отмечены врачами.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Container align="left">
        <div>
            <img src={medicine3} width={638} alt="Описание изображения" />
            <p className="lead my-2" style={{ textAlign: 'center' }}>
            Исходная сегментация
            </p>
        </div>
    </Container>
    <Container align="right">
        <div>
            <img src={medicine4} width={630} alt="Описание изображения" />
            <p className="lead my-2" align="center">
            Сегментация моделью
            </p>
        </div>
    </Container>
</div>
          </Tab>
          <Tab eventKey="Nuclear" title="Модели в ядерной медицине">
          <p class="lead my-4"><b>Однофотонная эмиссионная компьютерная томография</b> (ОФЭКТ) — один из ведущих методов визуализации в ядерной медицине, применяемый для диагностики онкологических, кардиологических и неврологических заболеваний. Современные исследования в этой области смещаются от качественной интерпретации изображений к <b>точной количественной оценке накопления радиофармпрепаратов (РФП)</b> в патологических очагах. Это необходимо для дозиметрического планирования и оценки эффективности радионуклидной терапии (РТ), особенно у пациентов с метастатическим раком, где РТ демонстрирует высокую результативность. </p>
          <p class="lead my-4"><b>Проблемы точности</b> количественной оценки в ОФЭКТ связаны с математической некорректностью задач реконструкции, шумами пуассоновской природы в проекционных данных, появлением <b>краевых артефактов</b> на высококонтрастных участках (например, опухолевых очагах), которые, как выяснено, сохраняются на протяжении большого числа итераций алгоритма реконструкции (рис. 1). <b>Клинические методы</b> исследований ограничены отсутствием эталонных данных, лучевой нагрузкой и высокой стоимостью испытаний с физическими фантомами (например, NEMA IEC (рис. 2А)).</p>
          <p class="lead my-4">В лаборатории разрабатывается подход на основе <b>имитационного моделирования с использованием цифрового двойника фантома NEMA IEC</b> (рис. 2Б). Такой метод позволяет гибко варьировать параметры протокола и характеристики очагов, проводя виртуальные испытания.</p>
          <p class="lead my-4"><b>Цель</b> исследований — определение оптимальных параметров алгоритма реконструкции OSEM для получения точной количественной оценки активности РФП в патологических очагах. Имитационное моделирование показало, что оптимальное число итераций зависит от размера очага. <b>Полученные результаты</b> могут стать рекомендациями для повышения точности количественного анализа ОФЭКТ-изображений, улучшения диагностики и оптимизации планирования лечения.</p>
          <div class="center"><img src={medicine5} align="center" width={700} /><p class="lead my-4">Рис. 1. Реконструированные профили численного фантома NEMA IEC: синяя кривая — эталонные данные; красная — реконструированный профиль активности. Наблюдается сохранение краевых артефактов на протяжении большого числа итераций n.</p></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Container align="center">
        <div>
            <img src={medicine6} width={300} alt="Описание изображения" />
        </div>
    </Container>
    <Container align=" center">
        <div>
            <img src={medicine7} width={300} alt="Описание изображения" />
        </div>
    </Container>
</div>
          <p className="lead my-4 text-center" style={{ clear: 'both' }}>Рис. 2. А) Изображение физического фантома NEMA IEC, Б) Поперечное сечение численного фантома NEMA IEC, проходящее через центр сфер.</p>
          </Tab>
        </Tabs>
    </Container>
    <Footer />
  </>
)}