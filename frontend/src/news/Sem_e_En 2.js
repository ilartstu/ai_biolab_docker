import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_e_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>On August 15, the laboratory will hold a seminar on the topic «Recommendation system for microfinance organizations»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">At the moment, the work of most microfinance organizations (MFOs) in Russia takes place via the Internet. Through the aggregator site, users can search for suitable MFIs for themselves. The task arises of correctly, in a sense, ranking all the MFIs presented on this aggregator site in order to improve the user experience. The report will talk about the MFIs ranking model developed by us based on Markov chains and the method of comparing two ranking models.</p></div>
    <div class="row my-4"><p class="lead">Speaker: <b>Dmitry Dudukalov.</b></p></div>
    <div class="row my-4"><p class="lead">Co-authors: <b>Evgeny Prokopenko, Ekaterina Savinkina.</b></p></div>
    <div class="row my-4"><p class="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
    <div class="row my-4"><p class="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
    <div class="row my-4"><p class="lead">*Before connecting, please write your first and last name.</p></div>
    <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Ранжирование мфо.pdf">link</a>.</p></div>
    <div class="row my-4"><p class="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
    <div class="row my-4"><p>31.07.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}