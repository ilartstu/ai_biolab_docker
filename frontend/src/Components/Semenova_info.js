import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Semenova from "../images/team/Semenova.jpg"

export function Semenova_info () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div><img src={Semenova} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Семенова Диана Анзоровна</h1></div>
        <div class="row ps-4"><p>Младший научный сотрудник</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 dianasoulmate@yandex.ru</h5><hr></hr>
        </div>
        <div class="row">
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Резюме_Семенова_Диана.pdf">Резюме</a></p></div>
        <div class="row ps-4"><p>1995</p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Образование</h3></div>
        <p>2013-2019 г. – Студент ФГАОУ ВО Первый МГМУ им. И.М. Сеченова Минздрава России (Сеченовский Университет), медико-профилактическое дело.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Профессиональный опыт</h3></div>
        <p> 2024 – н.вр. Младший научный сотрудник лаборатории ИИ-технологий математического моделирования биологических, социально-экономических и экологических процессов, Институт математики им. С.Л. Соболева СО РАН.</p>
        <p> 2021 – н.вр. Младший научный сотрудник научного отдела инфекционной патологии ФГБУ «НМИЦ ФПИ» Минздрава России.</p>
        <p> 2019 – н.вр. Врач-эпидемиолог центра общей инфектологии ФГБУ «НМИЦ ФПИ» Минздрава России.</p>
        </div>
        </div>
        </Container>
        

    <Footer />
    </>
    
    )}