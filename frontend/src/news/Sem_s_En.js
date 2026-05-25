import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_s_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On June 19, the laboratory will hold a seminar on «Comparative analysis of approaches to solving the inverse problem of image reconstruction in emission medical tomography»</h1>
        </div>
        <br></br>
        <hr />
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row my-4"><p className="lead">Quantitative estimates of the accumulation of radiopharmaceuticals in pathological foci during examination by single-photon emission computed tomography (SPECT) are of key importance for determining the stage of the disease and planning radionuclide therapy. In this paper, we compare two image reconstruction algorithms: the standard iterative Ordered Subset Expectation Maximization (OSEM) algorithm, which is equipped with most OFFSET installations, and a regularized reconstruction algorithm based on the Bayesian Maximum A Posteriori approach (MAP) with a priori information in the form of an entropy functional (MAP-Ent). The research was carried out using the in silico simulation computer simulation method using the digital twin of the NEMA IEC real phantom. The accuracy was assessed by the recovery coefficient, which is equal to the ratio of the maximum value of the obtained solution in the hearth to its exact value. The results showed that the MAP-Ent method:<br></br>
• provides higher quantitative accuracy,<br></br>
• reduces the impact of edge artifacts compared to OSEM,<br></br>
• allows you to control artifacts by selecting the regularization parameter.<br></br>
Thus, the regularized MAP-Ent algorithm demonstrates advantages over the standard OSEM and can be useful for improving the accuracy of diagnosis and therapy planning.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Angelina Nesterova.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:00 Novosibirsk time (12:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>17.06.2025</p></div>
      </Container>
      <Footer_En />
    </>
  );
}