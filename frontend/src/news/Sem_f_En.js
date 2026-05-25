import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_f_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On August 29, the laboratory will hold a seminar on the topic «The Gelfand-Levitan method in coefficient inverse problems»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">The paper discusses inverse problems of determining the coefficients of equations related to wave propagation in inhomogeneous media. The I.M.Gelfand-B.M.Levitan approach has been chosen as a method for solving them, which makes it possible to reduce the solution of nonlinear inverse problems to families of linear integral equations. The report will consider the main features of the approach, numerical algorithms based on the method. The results of numerical experiments will be presented.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Nikita Novikov.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>23.08.2024</p></div>
      </Container>
      <Footer_En />
    </>
  );
}