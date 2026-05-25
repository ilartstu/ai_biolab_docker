import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_o_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On April 3, the laboratory will hold a seminar on «Why living things are poorly suited for differential and probabilistic modeling»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row my-4"><p className="lead">Using the example of gene networks, the report will substantiate the need to use the concept of switching from state to state when modeling living systems.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Augustinovich Sergey.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held at the IM SB RAS in auditorium 305, as well as in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>29.03.2025</p></div>
      </Container>
      <Footer_En />
    </>
  );
}