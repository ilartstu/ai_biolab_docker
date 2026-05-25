import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_c from "../images/news/life_c.PNG"


export function Life_c () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={life_c} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>30 августа на базе Центра нейрохирургии состоится Заседание Сибирской ассоциации нейрохирургов</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">30 августа на базе Центра нейрохирургии состоится Заседание Сибирской ассоциации нейрохирургов на котором выступит сотрудник лаборатории <b>Криворотько Ольга Игоревна</b>, доктор физико-математических  наук, заведующий лабораторией Института математики им. С.Л. Соболева СО РАН, начальник научно-исследовательского отдела ММЦ ИМ СО РАН (г. Новосибирск) с докладом на тему «Математическое моделирование в медицине».</p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Председатель заседания: Антон Алексеевич Пашков</b>, медицинский психолог ФГБУ «Федеральный центр нейрохирургии» Министерства здравоохранения Российской Федерации (г. Новосибирск), старший преподаватель Кафедры нейрохирургии ФГБОУ ФО «Новосибирский государственный медицинский университет» Министерства здравоохранения Российской Федерации, старший преподаватель Кафедры систем сбора и обработки данных ФГБОУ ВО  «Новосибирский государственный технический университет».</p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Программа: </b></p></div>
    <div class="row ps-4 my-4"><p class="lead">16:00 Вступительное слово</p></div>
    <div class="row ps-4 my-4"><p class="lead">16:05 «Математическое моделирование в медицине» (О.И. Криворотько)</p></div>
    <div class="row ps-4 my-4"><p class="lead">16:45 «Искусственный интеллект в науках о мозге» (А.А. Пашков)</p></div>
    <div class="row ps-4 my-4"><p class="lead">17:30 Дискуссия</p></div>
    <div class="row ps-4 my-4"><p class="lead">17:40 Закрытие заседания</p></div>
    <div class="row ps-4 my-4"><p>26.08.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}