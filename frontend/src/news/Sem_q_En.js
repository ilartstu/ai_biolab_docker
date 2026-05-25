import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_q_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On May 15, the laboratory will hold a seminar on «Prediction of the spread of socially significant diseases based on deep learning methods in case of insufficient data»</h1>
        </div>
        <br></br>
        <hr />
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row my-4"><p className="lead">Although tuberculosis without HIV infection is on the decline in Russia, the Russian Federation is one of the countries with a high incidence and mortality from tuberculosis combined with HIV infection. Annual statistical data on the prevalence of tuberculosis and HIV (risk groups) in the regions of the Russian Federation have been known since 2009. The paper considers deep learning algorithms for describing and probabilistically predicting the short-term dynamics (for 3 years) of a socially significant disease using the example of tuberculosis in the regions of the Russian Federation with insufficient quantity and quality of statistical information.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Nikolai Zyatkov.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Ц1.2_Семинар_ТБ_ЗятьковНЮ.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>14.05.2025</p></div>
      </Container>
      <Footer_En />
    </>
  );
}