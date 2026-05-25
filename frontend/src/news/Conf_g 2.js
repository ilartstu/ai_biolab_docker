import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_c from "../images/news/conf_c.PNG"


export function Conf_g () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_c} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Сотрудники лаборатории примут участие в XVI конференции «Математические модели и численные методы в биологии и медицине»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">С 31-го октября по 1-ое ноября пройдёт XVI конференция «Математические модели и численные методы в биологии и медицине», в которой примут участие сотрудники лаборатории, а именно <a rel="noopener" target="_blank" href='/Nesterova_info'>Нестерова А.В.</a> и <a rel="noopener" target="_blank" href='/Mikhailapov_info'>Михайлапов Д.И.</a>.</p></div>
    <div class="row my-4"><p class="lead">Организаторами конференции являются: Институт вычислительной математики им. Г.И. Марчука Российской академии наук (ИВМ РАН), Отделение математического центра мирового уровня “Московский центр фундаментальной и прикладной математики” в ИВМ РАН, Кафедра высшей математики и математического моделирования Сеченовского университета,  Кафедра вычислительной физики МФТИ.</p></div>
    <div class="row my-4"><p class="lead">Темы: математическое моделирование в кардиологии, иммунологии, онкологии, эпидемиологии, системной биологии, спорте, фармакологии, методах диагностики (УЗИ, ЭКГ, МРТ, электроимпеданс), вычислительной гемодинамике, вычислительной биомеханике и т.п.</p></div>
    <div class="row my-4"><p class="lead">Более подробную информацию можно найти на <a rel="noopener" target="_blank" href="https://dodo.inm.ras.ru/biomath/">сайте конференции.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="Conferences">Календарь конференций</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}