import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_c from "../images/news/conf_c.PNG"


export function Conf_g_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_c} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff will take part in the XVI conference «Mathematical Models and Numerical methods in Biology and Medicine»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From October 31st to November 1st, the XVI conference «Mathematical Models and Numerical methods in Biology and Medicine» will be held, which will be attended by laboratory staff, namely <a rel="noopener" target="_blank" href='/Nesterova_info/En'>A. Nesterova</a> and <a rel="noopener" target="_blank" href='/Mikhailapov_info/En'>D. Mikhailapov</a>.</p></div>
    <div class="row my-4"><p class="lead">The conference is organized by: the G.I. Marchuk Institute of Computational Mathematics of the Russian Academy of Sciences (IWM RAS), the Department of the world-class Mathematical Center “Moscow Center for Fundamental and Applied Mathematics” at IWM RAS, the Department of Higher Mathematics and Mathematical Modeling of Sechenov University, the Department of Computational Physics at MIPT.</p></div>
    <div class="row my-4"><p class="lead">Topics: mathematical modeling in cardiology, immunology, oncology, epidemiology, systems biology, sports, pharmacology, diagnostic methods (ultrasound, ECG, MRI, electrical impedance), computational hemodynamics, computational biomechanics, etc.</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://dodo.inm.ras.ru/biomath/">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}