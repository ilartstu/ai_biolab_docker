import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_c from "../images/news/sem_c.PNG";


export function Sem_k_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_c} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On February 6, the laboratory will hold a seminar on "Mathematical modeling of epidemic spread taking into account social, economic and environmental processes"</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">Statistical data on the dynamics of the epidemic process is a set of time series. Forecasting the spread of an epidemic (extrapolation of a time series) can be described by statistical, differential, agent-based, stochastic, machine learning models and their combinations. However, to manage the epidemic process, it is necessary to understand the mechanisms of influence of interacting socio-economic and environmental processes, as well as the dynamics of the epidemic process itself, which is characterized by the parameters of differential, agent-based, stochastic models. Methods of identifiability analysis, optimization, and inverse problems are used to identify the parameters of physically based models. As a result, the controlled parameters of the epidemic process and scenarios of the spread of the disease in the population are evaluated. </p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Olga Krivorotko.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Криворотько_лабИИ_06-02-25_full">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>04.02.2025</p></div>

      </Container>
      <Footer_En />
    </>
  );
}