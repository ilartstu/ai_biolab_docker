import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_b from "../images/news/conf_b.PNG"


export function Conf_b_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_b} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff will take part in the conference "Mathematics in Medicine"</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>

    <hr></hr>
    <div class="row my-4"><p class="lead">Laboratory staff will take part in the conference, namely:
    <br></br>
    <a rel="noopener" target="_blank" href="/Krivorotko_info/En">Olga Krivorotko</a><br></br>
    Topic: Mathematical modeling of the spread of tuberculosis of the respiratory system in the Novosibirsk region.<br></br>
    Time: October 1, 12:00 — 12:15.<hr></hr>
    <a rel="noopener" target="_blank" href="/Nestrova_info/EN">Angelina Nesterova</a><br></br>
    Topic: Problems of accurate quantitative assessment of accumulated activity in tumor foci during the examination by the method of SPECT/CT.<br></br>
    Time: October 3, 14:30 — 14:45.<hr></hr>
    <a rel="noopener" target="_blank" href="/Mikhailapov_info/En">Denis Mikhailov</a><br></br>
    Topic: Semi-controlled 3D segmentation of type "B" aortic dissection using SlimUNETTR.<br></br>
    Time: October 4, 10:30 — 10:45.<hr></hr>
</p></div>
    <div class="row my-4"><p class="lead">The conference combines the following topics: mathematical algorithms in big data processing; application of mathematical statistics methods and modern statistical packages (SPSS, ORANGE and others) in the processing and interpretation of medical information; analysis of the results of transcriptomic and/or proteomic studies; application of neural networks and artificial intelligence systems in various fields of medicine; application of mathematical methods modeling in various fields of medicine (cardiology, virology, urology, etc.).</p></div>
    <div class="row my-4"><p class="lead">The conference will be held on October 1-4, 2024 at the S.L. Sobolev Institute of Mathematics SB RAS, Akademgorodok, Novosibirsk.</p></div>
    <div class="row my-4"><p class="lead">The full program can be found at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Программа_МмедКонф-24.pdf">link.</a></p></div>
    <div class="row my-4"><p class="lead">More detailed information is available on the <a rel="noopener" target="_blank" href="http://conf.nsc.ru/mmed2024/ru/general_info">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>24.09.2024</p></div>
  
    </Container>
    <Footer_En />
    </>
    
    )}