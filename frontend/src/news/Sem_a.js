import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_a () {

  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>20 июня пройдёт семинар лаборатории на тему «Рассуждения о методах проверки временных рядов на стационарность»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Доклад посвящен обзору методик, с помощью которых можно проверить стационарность временного ряда. Особое внимание будет уделено корректности использования самого популярного инструмента при решении подобных задач — статистических тестов. Будет показано, что для временных рядов реальных измерений разные тесты из-за особенностей построения гипотез могут давать разные результаты. Также предлагается авторская процедура проверки ряда на стационарность, основанная на анализе диаграмм рассеяния и гистограмм распределения средних и дисперсий отдельных подпоследовательностей временного ряда. Показана работа предложенной процедуры на синтетических данных. Представлены результаты обозначенных подходов на реальных временных рядах, представленных измерениями концентрации загрязняющего вещества PM2.5 в пограничном слое атмосферы Красноярска.</p></div>
    <div class="row my-4"><p class="lead">Докладчик: кандидат физико-математических наук <h5>Петракова Виктория Сергеевна.</h5></p></div>
    <div class="row my-4"><p class="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
    <div class="row my-4"><p class="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
    <div class="row my-4"><p class="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
    <div class="row my-4"><p class="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Семинар_Мол_Лаб_2024_Нестационарность_ВР_.pdf">ссылке</a>.</p></div>
    <div class="row my-4"><p class="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
    <div class="row my-4"><p>13.06.2024</p></div>

    </Container>
    <Footer />
    </>
    
    )}