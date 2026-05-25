import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_b from "../images/news/life_b.PNG"


export function Life_b () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={life_b} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>В Новосибирской области проходит акция "Наука рядом"</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Герои информационных баннеров - 15 молодых новосибирских учёных, чьи научные достижения активно применяют в различных отраслях. На цифровых панелях можно увидеть не только фото исследователей, но и познакомиться с результатами их деятельности. С одной из героинь встретилась корреспондент телеканала ОТС Светлана Шевченко. Видео можно посмотреть по <a rel="noopener" target="_blank" href="https://yandex.ru/video/preview/1383508478853144806">ссылке.</a></p></div>
    <div class="row ps-4 my-4"><p>10.07.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}