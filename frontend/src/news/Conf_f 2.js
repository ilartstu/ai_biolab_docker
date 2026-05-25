import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_d from "../images/news/conf_d.PNG"


export function Conf_f () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Сотрудники лаборатории примут участие в конференции «Квазилинейные уравнения, обратные задачи и их приложения»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">С 17-го по 21-ое октября в международном математическом центре Сириус пройдёт конференция «Квазилинейные уравнения, обратные задачи и их приложения», в которой примут участие сотрудники лаборатории.</p></div>
    <div class="row my-4"><p class="lead">Конференция посвящена современным математическим методам анализа распространения волн и неразрушающего зондирования. Рассматриваемые математические задачи возникают в рамках различных томографий (акустическая томография, томографии с использованием элементарных частиц, электро-магнитные томографии), при анализе шумпетеровской динамики в моделях экономического роста, при анализе движения волн, в общем, и анализе динамики ударных волн, в частности.</p></div>
    <div class="row my-4"><p class="lead">В рамках конференции будут обсуждаться современное состояние теории квазилинейных уравнений и обратных задач, а также возможные приложения в медицине, геофизике, нано-физике, моделировании экономической динамики и транспортных потоков, физике дисперсивных сред.</p></div>
    <div class="row my-4"><p class="lead">Более подробную информацию можно найти на <a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_050w">сайте конференции.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="Conferences">Календарь конференций</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}