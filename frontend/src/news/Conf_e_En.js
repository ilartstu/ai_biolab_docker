import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import conf_d from "../images/news/conf_d.PNG"


export function Conf_e_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
    <div><img src={conf_d} align="left" width={500} ></img></div>
    <div class="row my-4 ps-4"><h1>Laboratory staff will take part in the conference «Inverse incorrect tasks and machine learning»</h1></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <div class="row ps-4 my-4"><p class="lead"></p></div>
    <hr></hr>
    <div class="row my-4"><p class="lead">From October 14th to 18th, the Sirius International Mathematical Center hosts the conference «Inverse Ill-posed Problems and Machine Learning», which is attended by laboratory staff.</p></div>
    <div class="row my-4"><p class="lead">The conference is designed to bring together leading Russian and foreign experts who are actively working in the development of classical ideas of inverse and incorrect problems in application to AI problems: machine learning, neural networks, stochastic optimization. It is planned to discuss the mathematical foundations of AI, Physics-Informed Neural Networks (Inc) and stochastic optimization, their theoretical justification and practical applications.</p></div>
    <div class="row my-4"><p class="lead">The main idea of the conference is to summarize the results of the mathematical substantiation of AI and outline the most promising areas of the theory of inverse problems and machine learning. Among the main objectives of the conference: training and advanced training of young scientists and specialists in the use of the latest algorithms for solving inverse and incorrect problems arising in the natural sciences, using neural networks, machine learning; exchange of experience in the application of methods for solving inverse and incorrect problems, analysis and processing of big data based on artificial intelligence methods, including industry, medicine, bioinformatics, epidemiology, economics, ecology, Earth sciences and society; discussion of the most important achievements of the theory and numerical methods for solving inverse and incorrect problems and their applications based on machine learning; presentation of the main methods of stochastic optimization in the implementation of machine learning algorithms, in particular, randomized K-means methods, which make it possible to effectively train filters and radically improve classical convolutional levels in deep neural networks.</p></div>
    <div class="row my-4"><p class="lead">The main objective of the conference is to attract scientists and specialists to substantiate and effectively use machine learning algorithms based on mutual enrichment of the theory and practice of using neural networks on the one hand, and theory, methods of solving and practical application of inverse and incorrect problems on the other hand.</p></div>
    <div class="row my-4"><p class="lead">More detailed information can be found on the <a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_049w">conference website.</a></p></div>
    <div class="row my-4"><p class="lead"><a rel="noopener" target="_blank" href="/Conferences/En">Conference calendar</a>.</p></div>
    <div class="row my-4"><p>17.10.2024</p></div>

    </Container>
    <Footer_En />
    </>
    
    )}