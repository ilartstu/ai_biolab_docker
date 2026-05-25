import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_c from "../images/news/conf_c.PNG"


export function Conf_c () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_c} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Сотрудники лаборатории примут участие в IV конференции математических центров России</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">С 6-го по 11-ое августа в Санкт-Петербурге проходит IV Конференция математических центров России, посвященная 300-летию СПбГУ и РАН.</p></div>
    <div class="row my-4"><p class="lead">Организатором является Санкт-Петербургский международный математический институт имени Леонарда Эйлера.</p></div>
    <div class="row my-4"><p class="lead">10 августа сотрудники нашей лаборатории примут участие в конференции в секциях:«Прикладная математика и математическое моделирование» и «Теория вероятностей», а именно: </p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href='/Krivorotko_info'>Криворотько О.И.</a> примет участие в секции <a rel="noopener" target="_blank" href="https://mc4-conf.ru/applied-mathematics#!/tab/721114977-5">«Прикладная математика и математическое моделирование»</a> с докладом на тему «Моделирование динамики эпидемий в зависимости от социально-экономических процессов с применением искусственного интеллекта»;</p></div>
    <div class="row my-4"><p class="lead">Неверов А.В. примет участие в секции <a rel="noopener" target="_blank" href="https://mc4-conf.ru/applied-mathematics#!/tab/721114977-5">«Прикладная математика и математическое моделирование»</a> с докладом на тему «Применение PINN в SIR модели игры среднего поля»;</p></div>
    <div class="row my-4"><p class="lead">Дудукалов Д.В. примет участие в секции <a rel="noopener" target="_blank" href="https://mc4-conf.ru/probability-theory#!/tab/721114718-5">«Теория вероятностей»</a> с докладом на тему «Рекомендательная система для микрофинансовых организаций».</p></div>
    <div class="row my-4"><p class="lead">Более подробную информацию можно найти на <a rel="noopener" target="_blank" href="https://mc4-conf.ru/">сайте конференции.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="Conferences">Календарь конференций</a>.</p></div>
    <div class="row my-4"><p>08.08.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}