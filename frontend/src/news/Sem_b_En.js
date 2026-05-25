import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_b_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>On July 4, a laboratory seminar will be held on the topic "Application of PINN in the SIR model of the middle field game"</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">The spatial epidemiological SIR model is considered, in which people are distributed in a certain populated area and strive not to become infected. To implement the interaction of a large population in the conditions of an epidemic, the approach of medium-field games is used, characterized by the joint solution of systems of partial differential equations of the Kolmogorov-Fokker-Planck and Hamilton-Jacobi-Bellman types. For the numerical implementation of mathematical modeling of the spread of an epidemic in a population, taking into account optimal control, a machine learning method is used, namely physically informed neural networks (PINN) with various modifications. The possibility of solving coefficient inverse problems, where information is introduced in the form of additional equations, is considered.</p></div>
    <div class="row my-4"><p class="lead">Speaker: <h5>Andrey Neverov.</h5></p></div>
    <div class="row my-4"><p class="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
    <div class="row my-4"><p class="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
    <div class="row my-4"><p class="lead">*Before connecting, please write your First and Last name.</p></div>
    <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Применение_PINN_в_SIR_модели_игры_среднего_поля.pdf">link</a>.</p></div>
    <div class="row my-4"><p class="lead">All the seminars held have been <a rel="noopener" target="_blank" href="/Sem_Compl/En">archived</a>.</p></div>
    <div class="row my-4"><p>21.06.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}