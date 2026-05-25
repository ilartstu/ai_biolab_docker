import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Kabanikhin from "../images/team/Kabanikhin.jpg"

export function Kabanikhin_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Kabanikhin} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Sergey Kabanikhin</h1></div>
        <div class="row ps-4"><p>Doctor of Physical and Mathematical Sciences, Corresponding Member of the Russian Academy of Sciences</p></div>
        <div class="row ps-4"><p>Chief Research Associate</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 ksi52@mail.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/A-8104-2011">A-8104-2011</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID OF the RSCI:<a rel="noopener" target="_blank" href="https://www.elibrary.ru/author_items.asp?authorid=3945">3945</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=6602773229">57217457913</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0003-4772-1481">0000-0003-4772-1481</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/_CV-Kabanikhin.pdf">CV</a></p></div>
        <div class="row ps-4"><p>27.12.1952</p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>1975 — Faculty of Mechanics and Mathematics of Novosibirsk State University.</p>
        <p>1978 — Postgraduate study at the Computing Center of the Siberian Branch of the USSR Academy of Sciences.</p>
        <p>1978 — Candidate of Physical and Mathematical Sciences, dissertation topic: "Some inverse problems for hyperbolic equations and finite difference methods of their study", supervisor: Corresponding member V. Romanov.</p>
        <p>1990 — Doctor of Physical and Mathematical Sciences, thesis topic: "Projection-difference methods for determining the coefficients of hyperbolic equations".</p>
        <p>1993 — Professor.</p>
        <p>2011 — Corresponding Member of the Russian Academy of Sciences.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2024 - present — Chief Research Associate, Laboratory of I-technologies for Mathematical Modeling of Biological, Socio-economic and Environmental Processes, S.L.Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2023 - present — Director of the International Mathematical Center of the S.L. Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2018 - present — Chief Researcher, Laboratory of Inverse Problems of Natural Science.</p>
        <p> 2015 - 2018 г. — Director of the IVMiMG SB RAS.</p>
        <p> 2014 - present — Head of the Department of Mathematical Methods of Geophysics at MMF NSU, Chief Researcher at the Laboratory of Applied Inverse Problems named after SB RAS.</p>
        <p> 2014 — Acting Director of the IVMiMG SB RAS.</p>
        <p> 2014 - present — Chief Researcher, Laboratory of Mathematical Problems of Geophysics, IVMiMG, Siberian Branch of the Russian Academy of Sciences. </p>
        <p> 2014 — Deputy Director for Scientific Work at IVMiMG SB RAS.</p>
        <p> 2009 - 2014 — Head of the Laboratory of Mathematical Problems of Geophysics of the Siberian Branch of the Russian Academy of Sciences.</p>
        <p> 1990 - 2009 — Leading Researcher at the Institute of Mathematics of the Siberian Branch of the Russian Academy of Sciences.</p>
        <p> 1978 - 1987 — Junior Researcher, senior researcher, Head of the research group, leading researcher at the Computing Center of the SB Academy of Sciences of the USSR.</p>
        <p> 1978 - present — Assistant, Associate Professor, Professor, since 2014 – Head of the Department of Mathematical Methods of Geophysics at MMF NSU.</p></div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Teaching</h3></div>
        <p>2017 — Teacher of mathematics, School of Physics and Mathematics, Novosibirsk.</p>
        <p>1990 - present — Professor, Novosibirsk State University.</p>
        <p>1978 - 1990 — Associate Professor, Novosibirsk State University.</p>
        <p>1977 - 1978 — Teacher of mathematics, School of Physics and Mathematics, Novosibirsk.</p></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Computational mathematics.</p>
        <p>Development, research and application of numerical methods for solving inverse problems of mathematical physics.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>17-01-20243 - Project of international conference on “Computational and Applied Mathematics 2017”.</p>
          <p>17-51-540004 - Justification of existing numerical methods for solving inverse and ill-posed problems for elliptic and parabolic equations and development of new ones.</p>
          <p>16-51-77011 - Project of Russian-British Seminar on “Quantitative Indefiniteness in Inverse Modeling”.</p>
          <p>16-31-10314 - Project of eighth international school-conference for young scientists on “Theory and Numerical Methods for Solving Inverse and Ill-Posed Problems”.</p>
          <p>16-01-20522 - Project of second international school-conference on “Mathematical Simulation and High Performance Computing in Bioinformatics, Biomedicine, and Biotechnology”.</p>
          <p>16-29-15120 - Development of algorithms and software of multiscale simulation of hydrocarbon deposits using supercomputers.</p>
          <p>15-31-10413 - Project of seventh international school-conference for young scientists on “Theory and Numerical Methods for Solving Inverse and Ill-Posed Problems” devoted to the 90th anniversary of Gury I. Marchuk.</p>
          <p>15-01-20772 - Project of international conference on “Important Problems of Computational and Applied Mathematics 2015” (IPCAM-2015) devoted to the 90th anniversary of Gury I. Marchuk.</p>
          <p>15-01-09230 - Construction and investigation of analogs of Gelfand, Levitan, and Krein equations and numerical methods of their solution as applied to multidimensional inverse problems of acoustics, electrodynamics, and elasticity theory.</p>
          <p>14-01-06035 - Project of international conference on “Mathematical Simulation and High Performance Computing in Bioinformatics, Biomedicine, and Biotechnology”.</p>
          <p>14-01-06815 - Project of international school-conference for young scientists on "Modern Problems of Applied Mathematics and Informatics" devoted to the 50th anniversary of ICM&MG SB RAS (former Computing Center).</p>
          <p>13-01-06834 - Organization of fifth international school-conference for young scientists on "Theory and Numerical Methods for Solving Inverse and Ill-Posed Problems".</p>
        </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Awards and achievements</h3></div>
        <p>Honorary diploma, 60th Anniversary of the Siberian Branch, Russian Academy of Sciences (2017).</p>
        <p>Commemorative silver medal, 60th Anniversary of the Siberian Branch, Russian Academy of Sciences. (2017).</p>
        <p>Prize of the Eurasian Association on Inverse Problems (ASAP) for an outstanding contribution to the development of inverse problems and enhancement of cooperation between scientists of Eurasian countries (2016).</p>
        <p>Certificate of Honor from the Ministry of Education, Science and Innovation Policy of the Novosibirsk Region (2013).</p>
        <p>Certificate of Honor of NSU (2012).</p>
        <p>Commemorative medal "For contribution to the development of the Novosibirsk region" (2012).</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}
    
    