import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_d from "../images/news/conf_d.PNG"


export function Conf_d_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff took part in the conference «Industrial Mathematics: from mathematical methods to industrial technologies»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From October 7 to October 11, the Sirius International Mathematical Center hosted the conference «Industrial Mathematics: from Mathematical Methods to Industrial Technologies», which was attended by laboratory staff.</p></div>
    <div class="row my-4"><p class="lead">The conference gathers experts and young researchers to share their experience in translating mathematical methods into industrial technologies. Industrial technologies are based primarily on mathematical modeling technologies, but also use information technologies, high-performance computing technologies, big data processing technologies, and artificial intelligence technologies. In all of the above technologies, mathematical methods and algorithms play a crucial role, so the experience of translating them into industrial technologies is critically important.</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_048w">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}