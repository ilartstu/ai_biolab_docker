import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_c_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>On July 18, the laboratory will hold a seminar on the topic "Semi-controlled segmentation of medical images: An overview"</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Segmentation of lesions in medical images is an important task for the treatment of patients. Neural network approaches have become widespread in solving this problem. However, for their successful development, it is necessary to obtain a high-quality data set with the marking of the affected areas, which is a costly process, since it requires the painstaking work of highly qualified medical professionals. To solve this problem, semi-supervised learning methods are being developed that allow the use of data without markup. This report provides a brief overview of the main ideas underlying these methods.</p></div>
    <div class="row my-4"><p class="lead">Speaker: <b>Denis Mikhailapov.</b></p></div>
    <div class="row my-4"><p class="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
    <div class="row my-4"><p class="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
    <div class="row my-4"><p class="lead">*Before connecting, please write your first and last name.</p></div>
    <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Semi-Supervised Medical Image Segmentation.pdf">link</a>.</p></div>
    <div class="row my-4"><p class="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
    <div class="row my-4"><p>10.07.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}