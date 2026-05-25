import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_b () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>4 июля пройдёт семинар лаборатории на тему «Применение PINN в SIR модели игры среднего поля»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Рассматривается пространственная эпидемиологическая SIR модель, в которой люди распределены в некотором населенном пукнте и стремятся не стать инфицированными. Для реализации взаимодействия большого населения в условиях эпидемии применен подход игр среднего поля, характеризующийся совместным решением систем уравнений в частных производных типа Колмогорова-Фоккера-Планка и Гамильтона-Якоби-Беллмана. Для численной реализации математического моделирования распространения эпидемии в популяции с учетом оптимального управления применяется метод машинного обучения, а именно физически информированные нейронные сети (PINN) с различными модификациями. Рассматривается возможность решения коэффициентных обратных задач, где информация вводится в виде дополнительных уравнений.</p></div>
    <div class="row my-4"><p class="lead">Докладчик: <h5>Неверов Андрей Вячеславович.</h5></p></div>
    <div class="row my-4"><p class="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
    <div class="row my-4"><p class="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
    <div class="row my-4"><p class="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
    <div class="row my-4"><p class="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Применение_PINN_в_SIR_модели_игры_среднего_поля.pdf">ссылке</a>.</p></div>
    <div class="row my-4"><p class="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
    <div class="row my-4"><p>21.06.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}