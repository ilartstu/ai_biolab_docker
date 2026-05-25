import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_c from "../images/news/life_c.PNG"


export function Life_c_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={life_c} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>On August 30, a meeting of the Siberian Association of Neurosurgeons will be held at the Neurosurgery Center</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">On August 30, on the basis of the Center for Neurosurgery, a meeting of the Siberian Association of Neurosurgeons will be held at which an employee of the laboratory <b>Olga Krivorotko</b>, Doctor of Physical and Mathematical Sciences, head of the laboratory of the S.L. Sobolev Institute of Mathematics SB RAS, head of the research department of the MMC SB RAS (Novosibirsk) will make a report on the topic «Mathematical modeling in medicine».</p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Chairman of the meeting: Anton Pashkov</b>, a medical psychologist at the Federal State Budgetary Institution of the Ministry of Health of the Russian Federation (Novosibirsk), Senior lecturer at the Department of Neurosurgery of the Novosibirsk State Medical University of the Ministry of Health of the Russian Federation, Senior Lecturer at the Department of Data Collection and Processing Systems Federal State Budgetary Educational Institution of Higher Education «Novosibirsk State Technical University».</p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Program: </b></p></div>
    <div class="row ps-4 my-4"><p class="lead">16:00 Opening remarks</p></div>
    <div class="row ps-4 my-4"><p class="lead">16:05 «Mathematical modeling in medicine» (O. Krivorotko)</p></div>
    <div class="row ps-4 my-4"><p class="lead">16:45 «Artificial intelligence in the sciences of the brain» (A. Pashkov)</p></div>
    <div class="row ps-4 my-4"><p class="lead">17:30 Discussion</p></div>
    <div class="row ps-4 my-4"><p class="lead">17:40 Closing of the meeting</p></div>
    <div class="row ps-4 my-4"><p>26.08.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}