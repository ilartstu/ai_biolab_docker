import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_t_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On July 3, the laboratory will hold a seminar on «Simplification of Neverov»</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr />
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row my-4"><p className="lead">Fluctuations in the incidence have always worried epidemic researchers. But the underlying reasons are different. Fluctuations also vary in periods. The report examines the fundamental differences in the behavior of acute and chronic infections. Accordingly, there are features of solving inverse problems.
A special topic is endemias, that is, the simultaneous development of epidemics of two or more infections. One of the most devastating syndemias for humanity is the spread of HIV infection and tuberculosis.
The syndrome system is multiparametric and nonlinear, and therefore is characterized by a lack of analytical solutions. Andrey Neverov, an employee of our laboratory, proposed a simplification that allows us to obtain an analytical solution. 
The report explores the development of this approach in the field of sustainability. A provision is formulated on the asymmetry of mortality rates affecting the occurrence of bifurcations in the system.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>George Kaminsky.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>02.07.2025</p></div>
      </Container>
      <Footer_En />
    </>
  );
}