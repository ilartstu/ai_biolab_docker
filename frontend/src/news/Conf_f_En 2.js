import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_d from "../images/news/conf_d.PNG"


export function Conf_f_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff will take part in the conference «Quasi-linear equations, inverse problems and their applications»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From October 17th to 21st, the Sirius International Mathematical Center will host the conference «Quasi-linear equations, inverse problems and their applications», which will be attended by laboratory staff.</p></div>
    <div class="row my-4"><p class="lead">The conference is devoted to modern mathematical methods of wave propagation analysis and non-destructive sensing. The mathematical problems under consideration arise in the framework of various tomographs (acoustic tomography, tomography using elementary particles, electro-magnetic tomography), in the analysis of Schumpeter dynamics in economic growth models, in the analysis of wave motion, in general, and in the analysis of shock wave dynamics, in particular.</p></div>
    <div class="row my-4"><p class="lead">The conference will discuss the current state of the theory of quasi-linear equations and inverse problems, as well as possible applications in medicine, geophysics, nano-physics, modeling of economic dynamics and traffic flows, physics of dispersive media.</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_050w">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}