import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_h_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On September 26, the laboratory will hold a seminar on the topic «Problems of obtaining an accurate quantitative assessment of accumulated activity in tumor foci during the examination by the method of SPECT/CT»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">The report examines the problems hindering the development of a quantitative method of single-photon emission computed tomography (SPECT/CT) for an accurate quantitative assessment of accumulated activity in tumor foci. The main problem lies in the mathematical limitations of iterative image reconstruction algorithms, which in practice leads to uncertainty in choosing the number of iterations. The size of the tumor lesion plays a key role: for smaller foci, more iterations are required, which increases the noise in the image. This makes it necessary to use smoothing methods, which can lead to underestimation of accumulated activity estimates. Additionally, the problem of edge artifacts that reduce the accuracy of quantitative estimates is considered.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Angelina Nesterova.</b></p></div>
        <div className="row my-4"><p className="lead">Co-authors: <b>Natalia Denisova, Pavel Ruzankin.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Семинар 26.09.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>17.09.2024</p></div>

      </Container>
      <Footer_En />
    </>
  );
}