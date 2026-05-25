import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Sirius_conference from "../images/conf/Sirius_conference.png"


export function Conf_mathematicsAI () {
  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={Sirius_conference} align="left" width={500} ></img></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row my-4 ps-4"><h2>Научная конференция «Математика искусственного интеллекта».</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Задача конференции — создание уникальной платформы для обмена мнениями и идеями между ведущими специалистами в области математики и теоретического программирования с целью
    сформировать формальный базис таких ключевых трендов в разработке интеллектуальных программных систем, как <br></br>
    - доверенный искусственный интеллект;
    - объяснимый искусственный интеллект;
    - гибридный искусственный интеллект;
    - большие языковые модели.
    </p></div>
    <div class="row ps-4 my-4"><p class="lead">Конференция посвящена новым математическим методам и подходам для систем искусственного интеллекта. Построение сильного искусственного интеллекта требует новых прорывных математических решений, особенно это касается обучения интеллектуальных систем.</p></div>
    <div class="row ps-4 my-4"><p class="lead"><h3>Организационный комитет:</h3></p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Иван Оселедец – </b> Сколтех<br></br> 
    <b>Денис Турдаков – </b> ИСП РАН <br></br> 
    <b>Андрей Нечесов – </b> НГУ & ИМ СО РАН <br></br> 
    <b>Сергей Стрижак – </b> ИСП РАН <br></br> 
    <b>Игорь Ануреев  – </b> ИСИ СО РАН & НГУ <br></br> 
    <b>Дмитрий Кондратьев – </b> ИСИ СО РАН & НГУ <br></br> 
    <b>Виталий Казаков – </b> НГУ <br></br> 
    <b>Иван Бондаренко – </b> НГУ <br></br> 
    <b>Сергей Новиков – </b> НГУ <br></br> 
    </p></div>

    <div class="row ps-4 my-4"><p class="lead"><h3>Программный комитет:</h3></p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Иван Оселедец – </b> Сколтех<br></br> 
    <b>Денис Турдаков – </b> ИСП РАН <br></br> 
    <b>Андрей Нечесов – </b> НГУ & ИМ СО РАН <br></br> 
    <b>Сергей Стрижак – </b> ИСП РАН <br></br> 
    <b>Игорь Ануреев  – </b> ИСИ СО РАН & НГУ <br></br> 
    <b>Дмитрий Кондратьев – </b> ИСИ СО РАН & НГУ <br></br> 
    <b>Сергей Гончаров – </b> ИМ СО РАН & НГУ <br></br> 
    <b>Иван Бондаренко – </b> НГУ <br></br> 
    <b>Евгений Витяев – </b> ИМ СО РАН & НГУ <br></br> 
    <b>Андрей Манцивода – </b> ИГУ <br></br> 
    <b>Денис Пономарев – </b> ИСИ СО РАН <br></br> 
    <b>Дмитрий Свириденко – </b> НГУ <br></br> 
    <b>Дмитрий Свириденко – </b> НГУ <br></br> 
    <b>Дмитрий Свириденко – </b> НГУ <br></br> 
    </p></div>
    
    <div class="row ps-4 my-4"><p class="lead">Более подробная информация указана на <a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/055w">сайте конференции</a>.</p></div>
    <div class="row ps-4 my-4"><p>13.02.2025</p></div>
    </Container>
    <Footer />
    </>
    
    )}