import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_c () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>18 июля пройдёт семинар лаборатории на тему «Полуконтролируемая сегментация медицинских изображений: Обзор»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Сегментация поражений на медицинских изображениях является важной задачей для лечения пациентов. Нейросетевые подходы получили широкое распространение в решении данной задачи. Однако для их успешной разработки требуется получить высококачественный набор данных с разметкой поражённых областей, что является затратным процессом, так как требует кропотливой работы высококвалифицированных медицинских работников. Для решения данной проблемы разрабатываются методы полуконтролируемого обучения, которые позволяют использовать данные без разметки. В данном докладе представлен краткий обзор основных идей лежащих в основе данных методов.</p></div>
    <div class="row my-4"><p class="lead">Докладчик: <b>Михайлапов Денис Иванович.</b></p></div>
    <div class="row my-4"><p class="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
    <div class="row my-4"><p class="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
    <div class="row my-4"><p class="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
    <div class="row my-4"><p class="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Semi-Supervised Medical Image Segmentation.pdf">ссылке</a>.</p></div>
    <div class="row my-4"><p class="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
    <div class="row my-4"><p>10.07.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}