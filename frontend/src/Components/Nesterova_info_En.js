import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Question from "../images/conf/Question.png"

export function Nesterova_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Question} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Angelina Nesterova</h1></div>
        <div class="row ps-4"><p>Research Engineer</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 a.v.nesterova@math.nsc.ru</h5><hr></hr>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Резюме_НестероваАВ.pdf">CV</a></p></div>
        </section>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2017-2021 – Bachelor's degree, Novosibirsk State University, Faculty of Mechanics and Mathematics, Specialty: Mechanics and Mathematical Modeling.The title of the thesis: The study of boundary artifacts on reconstructed images in emission tomography. Scientific supervisors: Doctor of Ph.D., Professor N. Denisova, Doctor of Ph.D. O.Krivorotko.</p>
        <p>2021–2023 - Master's degree, Novosibirsk State University, Faculty of Mechanics and Mathematics, Specialty: Applied Mathematics and Computer Science. Title of the thesis: Statistical approaches to solving the inverse ill-posed problem of image reconstruction in emission medical tomography. Scientific supervisor: Doctor of Ph.D., Professor N.Denisova.</p>
        <p>2023–present - Postgraduate course, S. L. Sobolev Institute of Mathematics SB RAS. Scientific supervisor: Ph.D., P.Ruzankin.</p>
        </div>
        
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2024 – present - Research Engineer, Laboratory of AI-Technologies for Mathematical Modeling of Biological, Socio-economic and Environmental Processes, S.L. Sobolev Institute of Mathematics SB RAS, Novosibirsk, Russia.</p>
        <p> 2024 – present - Research Engineer, International Mathematical Center, S.L. Sobolev Institute of Mathematics SB RAS, Novosibirsk, Russia.</p>
        <p> 2023 – Intern Researcher, International Mathematical Center, S.L. Sobolev Institute of Mathematics SB RAS, Novosibirsk, Russia.</p>
        <p>2022 – 2023 - Laboratory assistant, S. A. Khristianovich Institute of Theoretical and Applied Mechanics SB RAS, Novosibirsk, Russia.</p>
        <p>2022 – 2024 - Laboratory Assistant, Laboratory of Modeling in Nuclear Medicine, Novosibirsk State University, Novosibirsk, Russia.</p>
        <p>2021 – 2022 - Laboratory assistant, S. A. Khristianovich Institute of Theoretical and Applied Mechanics SB RAS, Novosibirsk, Russia.</p>
        </div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Nuclear medicine.</p>
        <p>Single-photon emission computed tomography.</p>
        <p>Statistical algorithms for image reconstruction in emission tomography.</p>
        <p>Inverse problems.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>2024 - New approaches to image improvement and analysis in nuclear medicine and computed tomography based on virtual clinical trials (supported by of the Mathematical Center in Akademgorodok under Agreement No. 075-15-2022-281 with the Ministry of Science and Higher Education of the Russian Federation) - performer.</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}
    
    