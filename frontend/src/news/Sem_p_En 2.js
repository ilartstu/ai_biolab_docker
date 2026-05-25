import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_p_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On April 17, the laboratory will hold a seminar on «Supercomputer analysis and regularization of tasks of identification and management of social processes»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row my-4"><p className="lead">The processes of information dissemination in online social networks can be described by continuous mathematical models, the coefficients of which and the initial data are often unknown or set with a large error, which can lead to an incorrect description of the user's reaction to specific information and incorrect management of this reaction. Therefore, an important step in solving this problem is the analysis and solution of the corresponding inverse problems, which consist in identifying unknown parameters based on additional information about the processes under study. The report will consider the direct and inverse problems of determining the initial condition for a diffusion-logistic model with a nonlinear right-hand side and a medium-field model based on additional information about the process at fixed points in time. The inverse problem is reduced to the problem of minimizing the target functional and is solved by local gradient methods, global particle swarm and tensor optimization methods, as well as combinations of methods using regularization.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Tatyana Zvonareva.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Выступление 17.04.2025 ЗвонареваТА.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>11.04.2025</p></div>
      </Container>
      <Footer_En />
    </>
  );
}