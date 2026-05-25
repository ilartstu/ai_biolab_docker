import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_b from "../images/news/life_b.PNG"


export function Life_b_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={life_b} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h2>The action "Science is near" is taking place in the Novosibirsk region</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">The heroes of the information banners are 15 young Novosibirsk scientists whose scientific achievements are actively used in various industries. On the digital panels, you can see not only photos of researchers, but also get acquainted with the results of their activities. Svetlana Shevchenko, a correspondent of the OTS TV channel, met with one of the heroines. The video can be <a rel="noopener" target="_blank" href="https://yandex.ru/video/preview/1383508478853144806">viewed here.</a></p></div>
    <div class="row ps-4 my-4"><p>10.07.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}