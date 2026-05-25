import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_j_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On November 28, a laboratory seminar will be held on the topic «Probabilistic forecasting of epidemics in the regions of the Russian Federation based on a conditional generative-adversarial network and a Bayesian approach»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">The report will consider:<br></br>
— Features of building neural networks for modeling and forecasting time series.<br></br>
— A model for probabilistic forecasting of the spread of COVID-19 in St. Petersburg based on a conditional generative adversarial network (CGAN). <br></br>
 — Evaluation of the parameters of the tuberculosis dynamics submodel, taking into account bacterial excretion in the Novosibirsk region using probabilistic programming and Bayesian statistics. </p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Nikolay Zyatkov</b></p></div>
        <div className="row my-4"><p className="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>20.11.2024</p></div>

      </Container>
      <Footer_En />
    </>
  );
}