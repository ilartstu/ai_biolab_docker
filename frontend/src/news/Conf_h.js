import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_e from "../images/news/conf_e.PNG"


export function Conf_h () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_e} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Cотрудники лаборатории примут участие в Международной конференции ПОСТГЕНОМ’2024, на которой с результатами работы выступит заведующий лабораторией Криворотько О.И.</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">С 29-го октября по 2-ое ноября пройдёт VI международная научно-практическая конференция ПОСТЕГНОМ’2024, на которой с результатами работы выступит заведующий лабораторией <a rel="noopener" target="_blank" href='/Krivorotko_info'>Криворотько О.И.</a> с докладом на тему «Совмещенные модели эпидемиологических, экономических и социальных процессов: IT-платформа и большие данные».</p></div>
    <div class="row my-4"><p class="lead"><b>МЕСТО ПРОВЕДЕНИЯ ФОРУМА:</b>Конгресс-центр гостиничного комплекса «ПСБ Патриот».
Адрес: 143063 Московская обл., Одинцовский городской округ, территория Военно-патриотического парка
«Патриот», дом 4.</p><p>
Открытие Российско-китайского конгресса в области наук о жизни пройдет в Институте биоорганической химии
им. академиков М.М. Шемякина и Ю.А. Овчинникова Российской академии наук (ГНЦ ИБХ РАН).
Адрес: 117997 Москва, ул. Миклухо-Маклая, 16/10</p></div>
    <div class="row my-4"><p class="lead">Более подробную информацию можно найти на <a rel="noopener" target="_blank" href="https://www.postgenome.org/pages/aktualnaya_nauchnaya_programma">сайте конференции.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="Conferences">Календарь конференций</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}