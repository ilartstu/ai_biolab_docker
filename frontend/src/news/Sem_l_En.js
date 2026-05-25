import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_c from "../images/news/sem_c.PNG";


export function Sem_l_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_c} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On February 27, the laboratory will hold a seminar on «A new method for correcting the parameters of dynamic epidemiological models»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">The report will present a method for restoring the parameters of a dynamic model if the model is described by a system of ordinary differential equations with the number of parameters on the right side exceeding the number of desired functions. To determine the parameters, firstly, an indefinite system of algebraic equations with a rectangular matrix is constructed, which is obtained by approximating a system of differential equations taking into account known values of functions set at two consecutive points in time. Secondly, the property of smooth parameter changes over time is involved for dynamic models describing reality. Simultaneous minimization of the discrepancy for an underdetermined system and the sum of squares of the parameter differences at two consecutive time points leads to a regularized system of linear algebraic equations with a positive definite matrix and with a single solution. A comparison of the method's operation will be presented compared with another method for solving the inverse problem of parameter recovery within the framework of the SEIR-HCD epidemiological model. </p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Petrakova Viktoria.</b> Co-author: Shaidurov Vladimir</p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Семинар_мол_лаб_Восстановление_параметров_дифференциальной_модели.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>17.02.2025</p></div>

      </Container>
      <Footer_En />
    </>
  );
}