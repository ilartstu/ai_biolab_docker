import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Semenova from "../images/team/Semenova.jpg"

export function Semenova_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Semenova} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Diana Semenova</h1></div>
        <div class="row ps-4"><p>Junior Researcher</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 dianasoulmate@yandex.ru</h5><hr></hr>
        </div>
        <div class="row">
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Резюме_Семенова_Диана.pdf">CV</a></p></div>
        <div class="row ps-4"><p>1995</p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2013-2019 –Student of the Sechenov First Moscow State Medical University of the Ministry of Health of the Russian Federation (Sechenov University), medical and preventive medicine.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2024 – present. Junior Researcher at the Laboratory of AI Technologies for Mathematical Modeling of Biological, socio-economic and Environmental Processes, S.L. Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2021 – present. Junior Researcher at the Scientific Department of Infectious Pathology of the Federal State Budgetary Institution «NMRC for phthisiopulmonology and infectious diseases» of the Ministry of Health of the Russian Federation.</p>
        <p> 2019 – present Epidemiologist of the Center for General Infectology of the Federal State Budgetary Institution «NMRC for phthisiopulmonology and infectious diseases» of the Ministry of Health of the Russian Federation.</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}