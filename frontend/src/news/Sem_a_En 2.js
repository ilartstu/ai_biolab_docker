import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG"


export function Sem_a_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={sem_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>On June 20, the laboratory will hold a seminar on "Reasoning about methods of checking time series for stationarity"</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">The report is devoted to an overview of techniques that can be used to check the stationarity of a time series. Special attention will be paid to the correctness of using the most popular tool for solving such problems — statistical tests. It will be shown that for time series of real measurements, different tests can give different results due to the peculiarities of building hypotheses. The author's procedure for checking the series for stationarity is also proposed, based on the analysis of scattering diagrams and histograms of the distribution of averages and variances of individual time series subsequences. The work of the proposed procedure on synthetic data is shown. The results of the indicated approaches are presented on real time series represented by measurements of the concentration of the pollutant PM2.5 in the boundary layer of the atmosphere of Krasnoyarsk.</p></div>
    <div class="row my-4"><p class="lead">Speaker: Candidate of Physical and Mathematical Sciences <h5>Victoria Petrakova.</h5></p></div>
    <div class="row my-4"><p class="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
    <div class="row my-4"><p class="lead">The seminar will be held in an online format in Zoom. You can join via the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
    <div class="row my-4"><p class="lead">*Before connecting, please write your first and last name.</p></div>
    <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Семинар_Мол_Лаб_2024_Нестационарность_ВР_.pdf">link</a>.</p></div>
    <div class="row my-4"><p class="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
    <div class="row my-4"><p>13.06.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}