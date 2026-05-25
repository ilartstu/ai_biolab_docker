import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_d from "../images/news/life_d.PNG"


export function Life_d () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={life_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>Заведующий лабораторией Криворотько О.И. примет участие в заседаниях IV Конгресса молодых учёных</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">С 27-го по 29-ое ноября пройдёт IV Конгресс молодых учёных, в котором примет участие заведующий лабораторией <a rel="noopener" target="_blank" href='/Krivorotko_info'>Криворотько О.И.</a>.</p></div>
    <div class="row ps-4 my-4"><p class="lead">IV Конгресс молодых ученых – ключевое событие 2024 года в рамках Десятилетия науки и технологий, объявленного Указом Президента Российской Федерации в целях усиления роли науки и технологий в решении важнейших задач развития общества и страны.</p></div>
    <div class="row ps-4 my-4"><p class="lead">Конгресс выступает крупнейшей площадкой для диалога передовой и фундаментальной науки, государственной власти и реального сектора экономики и задает основные векторы научно-технологического развития России.</p></div>
    <div class="row ps-4 my-4"><p class="lead">В программу Конгресса входят деловая, выставочная, спортивная, культурная и вечерняя программы.</p></div>
    <div class="row ps-4 my-4"><p class="lead">Деловая программа традиционно состоит из круглых столов, экспертных сессий, панельных дискуссий и мероприятий в различных интерактивных форматах.</p></div>
    <div class="row ps-4 my-4"><p class="lead">На Конгрессе также состоится выставка научных достижений всех субъектов РФ, в том числе результаты реализации региональных планов по инициативам Десятилетия науки и технологий.</p></div>
    <div class="row my-4"><p class="lead">Более подробную информацию можно найти на <a rel="noopener" target="_blank" href="https://xn--c1aenmeoia.xn--80aa3ak5a.xn--p1ai/">сайте конгресса.</a></p></div>
    <div class="row ps-4 my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}