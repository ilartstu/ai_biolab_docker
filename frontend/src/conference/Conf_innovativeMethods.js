import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_ModernProblemsOfInverseProblems from "../images/conf/conf_ModernProblemsOfInverseProblems.png"


export function Conf_innovativeMethods () {
  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_ModernProblemsOfInverseProblems} align="left" width={500} ></img></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row my-4 ps-4"><h2>IV Международная научно-практическая конференция «Инновационные методы математики и физики в экологических и гидрометеорологических исследованиях».</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Конференция призвана поддерживать высокий уровень научной дискуссии о современных видах энергии и тенденциях в информатике, методах их изучения и развития с привлечением к этому процессу квалифицированных экспертов – представителей науки, бизнеса и власти.</p></div>
    <div class="row ps-4 my-4"><p class="lead">Обсуждение и обмен результатами и перспективами использования инновационных методов, достижений, тенденций математики и физики в гидрометеорологических и экологических исследованиях.</p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Секции конференции</b><br></br> Секция 1. Фундаментальные и прикладные аспекты высшей математики в современных исследованиях.<br></br>
Секция 2. Физические исследования природных процессов.<br></br>
Секция 3. Современные прикладные информационные системы и геоинформационные технологии.<br></br>
Секция 4. Развитие исследований в гидрометеорологии и экологии.<br></br>
Секция 5. (для школьников). Конкурс научно-исследовательских работ «МИФы в Природе (математика, информатика, физика в природе)». <br></br></p></div>
    
    <div class="row ps-4 my-4"><p class="lead">Более подробная информация указана на <a rel="noopener" target="_blank" href="https://immfegi.rshu.ru/home">сайте конференции</a>.</p></div>
    <div class="row ps-4 my-4"><p>13.02.2025</p></div>
    </Container>
    <Footer />
    </>
    
    )}