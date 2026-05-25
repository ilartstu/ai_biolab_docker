import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_Dynamics from "../images/conf/conf_Dynamics.PNG"


export function Conf_dynamics () {
  return (
        <>
    <NaviBarv2 />
    <Container>
    <div><img src={conf_Dynamics} align="left" width={500} ></img></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row my-4 ps-4"><h2>Научная конференция «Динамика в Сибири».</h2></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row ps-4 my-4"><p class="lead">Конференция организована Институтом математики им. С.Л. Соболева РАН и Новосибирским государственным университетом.</p></div>
    <div class="row ps-4 my-4"><p class="lead">Тематика конференции будет включать динамические системы, геометрию и смежные дисциплины.</p></div>
    <div class="row ps-4 my-4"><p class="lead">Программа конференции будет включать 50-минутные пленарные доклады и 30-минутные секционные доклады.</p></div>
    <div class="row ps-4 my-4"><p class="lead"><h3>Организационный комитет:</h3></p></div>
    <div class="row ps-4 my-4"><p class="lead"><b>Дынников И. А. – </b> Математический институт им. В. А. Стеклова РАН, Москва. <br></br> 
    <b>Гузев М. А. – </b> Институт прикладной математики ДВО РАН, Владивосток. <br></br> 
    <b>Миронов А. Е. – </b> Математический институт им. С. Л. Соболева РАН, Новосибирск. <br></br> 
    <b>Тайманов И. А. – </b> Институт математики им. С. Л. Соболева РАН, Новосибирск <br></br> 
    <b>Трахинин Ю. Л. – </b> Математический институт им. С. Л. Соболева, Новосибирск <br></br> 
    <b>Маулешова Г. С. – </b> Математический институт им. С. Л. Соболева, Новосибирск <br></br> 
    <b>Ерментай М. С. – </b> Новосибирский государственный университет, Новосибирск <br></br> 
    </p></div>
    
    <div class="row ps-4 my-4"><p class="lead">Более подробная информация указана на <a rel="noopener" target="_blank" href="http://old.math.nsc.ru/conference/ds/2025/">сайте конференции</a>.</p></div>
    <div class="row ps-4 my-4"><p>05.02.2025</p></div>
    </Container>
    <Footer />
    </>
    
    )}