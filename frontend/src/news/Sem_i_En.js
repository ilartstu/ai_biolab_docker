import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_i_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On November 14, the laboratory will hold a seminar on the topic «Modeling of acute and chronic infections»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">There are a large number of classifications of infectious diseases. According to the duration of the infection, they are divided into acute and chronic. Each infectious disease has its own epidemiological characteristics, and mathematical modeling is one of the tools for studying them. The report will consider the inverse problem of determining the parameters of the epidemic process in a differential model consisting of 7 components. The differences between acute and chronic infectious diseases will be discussed. The values of the main parameters of the epidemic process and control coefficients will be presented, as well as the results of comparing model data with real ones. </p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Diana Semenova</b></p></div>
        <div className="row my-4"><p className="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Моделирование_острых_и_хронических_инфекций.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>06.11.2024</p></div>

      </Container>
      <Footer_En />
    </>
  );
}