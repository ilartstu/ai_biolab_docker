import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_d_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>On August 1, a laboratory seminar will be held on the topic «A.N. Tikhonov's regularization method for solving the problem of determining the initial condition in a parabolic equation»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">The problem of determining the initial condition for a diffusion-logistic model with a nonlinear right-hand side based on additional information about the process at fixed points in time is investigated. The inverse problem is reduced to the task of minimizing the target functionality. It is shown that the studied formulation is incorrect, therefore, the regularization method of A.N. Tikhonov is used. The results for various options for choosing the regularization parameter are discussed.</p></div>
    <div class="row my-4"><p class="lead">Speaker: <b>Tatiana Zvonareva.</b></p></div>
    <div class="row my-4"><p class="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
    <div class="row my-4"><p class="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
    <div class="row my-4"><p class="lead">*Before connecting, please write your first and last name.</p></div>
    <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Sem_01.08.2024_Zvonareva.pdf">link</a>.</p></div>
    <div class="row my-4"><p class="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
    <div class="row my-4"><p>31.07.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}