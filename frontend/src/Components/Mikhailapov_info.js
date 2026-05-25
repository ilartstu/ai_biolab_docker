import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Mikhailapov from "../images/team/Mikhailapov.png"

export function Mikhailapov_info () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div><img src={Mikhailapov} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Михайлапов Денис Иванович</h1></div>
        <div class="row ps-4"><p>Стажёр-исследователь</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 d.i.mikhailapov@math.nsc.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/JNR-9548-2023">JNR-9548-2023</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=57899372200">57899372200</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0009-0009-1105-4358">0009-0009-1105-4358</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="">Резюме</a></p></div>
        <div class="row ps-4"><p>14.08.1999г</p></div>
        </section>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Образование</h3></div>
        <p>2017-2021 г. –  Бакалавр ММФ НГУ, Прикладная математика и информатика, Дипломная работа: “Распознавание речевых сигналов импульсными нейронными сетями”, Руководитель: Тарков Михаил Сергеевич, к.т.н., профессор.</p>
        <p>2021-2023 г. –  Магистр ФИТ НГУ, Компьютерное моделирование и анализ данных, Дипломная работа: “Knowledge Distillation для Antialiasing эффекта”, Руководитель:  Бериков Владимир Борисович, д.т.н., профессор. </p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Профессиональный опыт</h3></div>
        <p> 2023-2024 –  И1 Лаборатория анализа данных ИМ СО РАН, Стажер-исследователь.</p>
        <p> 2023 г. –  ЦВОВИП НГУ, Специалист ИИ.</p>
        <p> 2021-2023 г. –  ООО Экспософт, Разработчик-исследователь систем искусственного интеллекта.</p></div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Преподавание</h3></div>
        <p>Нейросети и машинное обучение – полугодовой курс кафедры СИ ФИТ НГУ, 2 курс магистратуры.</p>
        <p>Методы машинного обучения – полугодовой курс кафедры СИ ФИТ НГУ, 3 курс. </p></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Профессиональные интересы</h3></div>
        <p>Нейронные сети.</p>
        <p>Анализ медицинских изображений.</p>
        <p>Анализ временных рядов.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Исследовательские проекты и гранты</h3></div>
          <p>РФФИ 19-29-01175, FWNF-2022-0015 (122040800258-2) -- Compression of Deep Neural Network for Acute Ischemic Stroke Segmentation (2022г.) — исполнитель.</p>
          <p>FWNF-2022-0015 (122040800258-2) -- Дистилляция знаний для увеличения устойчивости свёрточных сетей к сдвигам изображений (2023г.) — исполнитель.</p>
          <p>РНФ 24-21-00195 -- Mask Correction in 3-D Tomography Brain Images for Weakly Supervised Segmentation of Acute Ischemic Stroke (2024г.) — исполнитель.</p>
        </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Награды и достижения</h3></div>
        <p>Окончание магистратуры ФИТ НГУ с отличием (Красный диплом).</p>
        </div>
        </div>
        </Container>
        

    <Footer />
    </>
    
    )}