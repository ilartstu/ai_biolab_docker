import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_d () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>1 августа пройдёт семинар лаборатории на тему «Метод регуляризации А.Н. Тихонова для решения задачи определения начального условия в параболическом уравнении»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead"> Исследуется задача определения начального условия для диффузионно-логистической модели с нелинейной правой частью по дополнительной информации о процессе в фиксированные моменты времени. Обратная задача сведена к задаче минимизации целевого функционала. Показано, что исследуемая постановка является некорректной, поэтому применяется метод регуляризации А.Н. Тихонова. Обсуждаются результаты для различных вариантов выбора параметра регуляризации.</p></div>
    <div class="row my-4"><p class="lead">Докладчик: <b>Звонарева Татьяна Александровна.</b></p></div>
    <div class="row my-4"><p class="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
    <div class="row my-4"><p class="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
    <div class="row my-4"><p class="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
    <div class="row my-4"><p class="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Sem_01.08.2024_Zvonareva.pdf">ссылке</a>.</p></div>
    <div class="row my-4"><p class="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
    <div class="row my-4"><p>31.07.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}