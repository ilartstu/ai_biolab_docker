import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Mikhailapov from "../images/team/Mikhailapov.png"

export function Mikhailapov_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Mikhailapov} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Denis Mikhailapov</h1></div>
        <div class="row ps-4"><p>Intern Researcher</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 d.mikhailapov@math.nsc.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/JNR-9548-2023">JNR-9548-2023</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=57899372200">57899372200</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0009-0009-1105-4358">0009-0009-1105-4358</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="">CV</a></p></div>
        <div class="row ps-4"><p>14.08.1999г</p></div>
        </section>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2017-2021 – Bachelor of MMF NSU, Applied Mathematics and Computer Science, Thesis: “Automatic Speech Recognition with Spike Neural Networks", Supervisor: Mikhail Tarkov, Ph.D., Professor.</p>
        <p>2021-2023 – Master's degree in FIT NSU, Computer Modeling and data analysis, Thesis: “Knowledge Distillation for Antialiasing effect", Head: Vladimir Berikov, Doctor of Technical Sciences, Professor. </p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2023-2024 – I1 SB RAS Data Analysis Laboratory, Research Intern.</p>
        <p> 2023 – Center for Government & Industrial Partners Relations NSU, AI Specialist.</p>
        <p> 2021-2023 – Exposoft LLC, Developer and researcher of artificial intelligence systems.</p></div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Teaching</h3></div>
        <p>Neural networks and machine learning – a six-month course of the Department of SI FIT NSU, the 2nd year of the master's degree.</p>
        <p>Machine learning methods – a six-month course of the Department of Computer Science at NSU, 3rd year. </p></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Neural networks.</p>
        <p>Medical image Analysis.</p>
        <p>Time series analysis.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>РФФИ 19-29-01175, FWNF-2022-0015 (122040800258-2) -- Compression of Deep Neural Network for Acute Ischemic Stroke Segmentation (2022г.) — performer.</p>
          <p>FWNF-2022-0015 (122040800258-2) -- Distillation of knowledge to increase the stability of convolutional networks to image shifts (2023г.) — performer.</p>
          <p>РНФ 24-21-00195 -- Mask Correction in 3-D Tomography Brain Images for Weakly Supervised Segmentation of Acute Ischemic Stroke (2024г.) — performer.</p>
        </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Awards and achievements</h3></div>
        <p>Completion of the Master's degree at FIT NSU with honors (Red Diploma).</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}