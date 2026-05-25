import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_a from "../images/news/conf_a.PNG"


export function Conf_a_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_a} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>14th International Multi-Conference "Bioinformatics of Genome Regulation and Structure/Systems Biology", August 5-10, 2024</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">Laboratory staff will take part in the 14th International Multi-conference "Bioinformatics of genome Regulation and Structure/Systems Biology", which will be held in Novosibirsk Akademgorodok on August 5-10, 2024.</p></div>
    <div class="row my-4"><p class="lead">Within the framework of the conference, a section "Mathematical Epidemiology" will be organized (<a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/systems-computational-biology/">Symposium "System Computer Biology"</a>).</p></div>
    <div class="row my-4"><p class="lead">More detailed information is available on the <a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/schedule/">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>13.06.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}