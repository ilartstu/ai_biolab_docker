import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_d from "../images/news/conf_d.PNG"


export function Conf_d () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Сотрудники лаборатории приняли участие в конференции «Индустриальная математика: от математических методов к промышленным технологиям»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">С 7-го по 11-ое октября в международном математическом центре Сириус проходила конференция «Индустриальная математика: от математических методов к промышленным технологиям», в которой приняли участие сотрудники лаборатории.</p></div>
    <div class="row my-4"><p class="lead">Конференция собирает экспертов и молодых исследователей для обмена опытом трансляции математических методов в промышленные технологии. Промышленные технологии базируются прежде всего на технологиях математического моделирования, но также используют информационные технологии, технологии высокопроизводительных вычислений, технологии обработки больших данных, технологии искусственного интеллекта. Во всех вышеперечисленных технологиях математические методы и алгоритмы играют определяющую роль, поэтому опыт их трансляции в промышленные технологии является критически важным.</p></div>
    <div class="row my-4"><p class="lead">Более подробную информацию можно найти на <a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_048w">сайте конференции.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="Conferences">Календарь конференций</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}