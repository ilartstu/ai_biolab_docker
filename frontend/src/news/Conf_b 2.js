import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_b from "../images/news/conf_b.PNG"


export function Conf_b () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_b} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Сотрудники лаборатории примут участие в конференции «Математика в медицине»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Сотрудники лаборатории примут участие в конференции, а именно:
    <br></br>
    <a rel="noopener" target="_blank" href="/Krivorotko_info">Криворотько О.И.</a><br></br>
    Тема: Математическое моделирование распространения туберкулеза органов дыхания в Новосибирской области.<br></br>
    Время: 1 октября, 12:00 — 12:15.<hr></hr>
    <a rel="noopener" target="_blank" href="/Nestrova_info">Нестерова А. В.</a><br></br>
    Тема: Проблемы точной количественной оценки накопленной активности в опухолевых очагах при исследовании методом ОФЭКТ/КТ.<br></br>
    Время: 3 октября, 14:30 — 14:45.<hr></hr>
    <a rel="noopener" target="_blank" href="/Mikhailapov_info">Михайлапов Д.И.</a><br></br>
    Тема: Полу-контролируемая 3D сегментация расслоения аорты типа "B" с помощью SlimUNETTR.<br></br>
    Время: 4 октября, 10:30 — 10:45.<hr></hr>
</p></div>
    <div class="row my-4"><p class="lead">Конференция объединяет в себе следующий темы: математические алгоритмы в обработке больших данных; применение методов математической статистики и современных статистических пакетов (SPSS, ORANGE и другие) при обработке и интерпретации медицинской информации; анализ результатов транскриптомных и/или протеомных исследований; применение нейронных сетей и систем искусственного интеллекта в различных областях медицины; применение методов математического моделирования в различных областях медицины (кардиологии, вирусологии, урологии и т.д.).</p></div>
    <div class="row my-4"><p class="lead">Конференция пройдёт 1-4 октября 2024 года в институте математики им. С.Л. Соболева СО РАН, Академгородок, Новосибирск.</p></div>
    <div class="row my-4"><p class="lead">С полной программой можно ознакомиться по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Программа_МмедКонф-24.pdf">ссылке.</a></p></div>
    <div class="row my-4"><p class="lead">Более подробная информация приведена на <a rel="noopener" target="_blank" href="http://conf.nsc.ru/mmed2024/ru/general_info">сайте конференции.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="Conferences">Календарь конференций</a>.</p></div>
    <div class="row my-4"><p>24.09.2024</p></div>
  
    </Container>
    <Footer />
    </>
    
    )}