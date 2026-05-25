import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_e from "../images/news/conf_e.PNG"


export function Conf_h_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_e} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff will take part in the International Conference POSTGENOM’2024, at which the head of the laboratory O.Krivorotko will present the results of the work</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From October 29 to November 2, the VI International scientific and practical conference POSTEGNOM'2024 will be held, at which the head of the laboratory <a rel="noopener" target="_blank" href='/Krivorotko_info/En'>O. Krivorotko</a> will make a presentation on the topic «Combined models of epidemiological, economic and social processes: IT platform and big data».</p></div>
    <div class="row my-4"><p class="lead"><b>THE VENUE OF THE FORUM:</b>The Congress center of the hotel complex «PSB Patriot».
    Address: 143063 Moscow region, Odintsovo city district, territory of the Military-Patriotic Park
"Patriot", house 4.</p><p>
The opening of the Russian-Chinese Congress in the field of life sciences will be held at the Institute of Bioorganic Chemistry
named after Academicians M.M. Shemyakin and Yu.A. Ovchinnikov of the Russian Academy of Sciences (SSC IBH RAS).
Address: 16/10 Miklukho-Maklaya str., Moscow, 117997</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://www.postgenome.org/pages/aktualnaya_nauchnaya_programma">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}