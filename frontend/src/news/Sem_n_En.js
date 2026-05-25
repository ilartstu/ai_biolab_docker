import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_n_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On March 20, the laboratory will hold a seminar on «Semi-supervised classification: Basic Ideas»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">In the framework of the presentation, methods of semi-controlled classification of three main types of data are considered: Images, time series and tabular data. The main ideas underlying modern methods are considered.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Mikhailapov Denis.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Полу_контролируемая_классификация_1.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>19.03.2025</p></div>

      </Container>
      <Footer_En />
    </>
  );
}