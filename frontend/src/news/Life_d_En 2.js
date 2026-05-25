import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_d from "../images/news/life_d.PNG"


export function Life_d_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={life_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>The head of the laboratory, O. Krivorotko, will take part in the meetings of the IV Congress of Young Scientists</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From November 27th to November 29th, the IV Congress of Young Scientists will be held, which will be attended by the head of the laboratory <a rel="noopener" target="_blank" href='/Krivorotko_info/En'>O. Krivorotko</a>.</p></div>
    <div class="row my-4"><p class="lead">The IV Congress of Young Scientists is a key event in 2024 within the framework of the Decade of Science and Technology, announced by Decree of the President of the Russian Federation in order to strengthen the role of science and technology in solving the most important tasks of the development of society and the country.</p></div>
    <div class="row my-4"><p class="lead">The Congress acts as the largest platform for dialogue between advanced and fundamental science, government and the real sector of the economy and sets the main vectors of scientific and technological development in Russia.</p></div>
    <div class="row my-4"><p class="lead">The Congress program includes business, exhibition, sports, cultural and evening programs.</p></div>
    <div class="row my-4"><p class="lead">The business program traditionally consists of round tables, expert sessions, panel discussions and events in various interactive formats.</p></div>
    <div class="row my-4"><p class="lead">The Congress will also host an exhibition of scientific achievements of all subjects of the Russian Federation, including the results of the implementation of regional plans for the initiatives of the Decade of Science and Technology.</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://xn--c1aenmeoia.xn--80aa3ak5a.xn--p1ai/">congress website.</a></p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}