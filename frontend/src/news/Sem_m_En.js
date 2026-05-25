import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_m_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On March 6, a joint meeting of the seminar "Applied Statistics" and the seminar of the Laboratory of AI technologies for mathematical modeling of biological, socio-economic and environmental processes will be held</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">The report will examine the practical side of using regression models based on Gaussian processes. This method is nonparametric, and the type of the final regression function is determined by the type of kernel that characterizes the distance between the functions. This provides greater flexibility compared to classical methods due to the greater computational complexity of the algorithm. The report will show how this method can be used to reproduce classical regression methods, as well as their modifications and combinations. In conclusion, the concept of automatic adaptive selection of the regression core depending on the initial sample and practical application examples will be considered.  </p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Andrey Neverov.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 16:30 Novosibirsk time (12:30 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us06web.zoom.us/j/82737787257?pwd=5WjMK2SAzb7MusScTpdMjtvaotfgv2.1">link.</a>Conference ID: 827 3778 7257. Access code: 498246.</p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Gaussian_process_regression_06.03.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>04.03.2025</p></div>

      </Container>
      <Footer_En />
    </>
  );
}