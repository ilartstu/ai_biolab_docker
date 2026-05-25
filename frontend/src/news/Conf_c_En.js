import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_c from "../images/news/conf_c.PNG"


export function Conf_c_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_c} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff will take part in the IV conference of mathematical centers of Russia</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From August 6 to August 11, St. Petersburg hosts the IV Conference of Mathematical Centers of Russia dedicated to the 300th anniversary of St. Petersburg State University and the Russian Academy of Sciences.</p></div>
    <div class="row my-4"><p class="lead">The organizer is the St. Petersburg International Mathematical Institute named after Leonard Euler.</p></div>
    <div class="row my-4"><p class="lead">On August 10, our laboratory staff will take part in the conference in sections:"Applied Mathematics and Mathematical Modeling" and "Probability Theory", namely: </p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href='/Krivorotko_info'>Olga Krivorotko</a> will take part in the section <a rel="noopener" target="_blank" href="https://mc4-conf.ru/applied-mathematics#!/tab/721114977-5">«Applied Mathematics and mathematical modeling»</a> with a report on «Modeling the dynamics of epidemics depending on socio-economic processes using artificial intelligence»;</p></div>
    <div class="row my-4"><p class="lead">Andrey Neverov will take part in the section <a rel="noopener" target="_blank" href="https://mc4-conf.ru/applied-mathematics#!/tab/721114977-5">«Applied Mathematics and mathematical modeling»</a> with a report on «Application of PINN in the SIR model of the middle field game»;</p></div>
    <div class="row my-4"><p class="lead">Dmitry Dudukalov will take part in the section <a rel="noopener" target="_blank" href="https://mc4-conf.ru/probability-theory#!/tab/721114718-5">«Probability Theory»</a> with a report on «Recommendation system for microfinance organizations».</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://mc4-conf.ru/">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>08.08.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}