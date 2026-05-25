import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Neverov from "../images/team/Neverov.png"

export function Neverov_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Neverov} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Andrei Neverov</h1></div>
        <div class="row ps-4"><p>Research Engineer</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 a.v.neverov@math.nsc.ru</h5>
        <h5>📩 a.neverov@g.nsu.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5 ">ID RSCI:<a rel="noopener" target="_blank" href="https://elibrary.ru/author_profile.asp?authorid=1152944">1152944</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0002-0698-0578">0000-0002-0698-0578</a><hr></hr></div>
        </div>
 

        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Неверов_Резюме.pdf">CV</a></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2017-2021 – Bachelor's degree, Novosibirsk State University, Faculty of Mechanics and Mathematics, Specialty: Mechanics and Mathematical Modeling.Title of the thesis: A new approach to solving inverse problems for stochastic differential equations arising in economics and finance. Scientific supervisor: Ph.D. O.Krivorotko.</p>
        <p>2021–2023 - Master's degree, Novosibirsk State University, Faculty of Mechanics and Mathematics, Specialty: Applied Mathematics and Computer Science. Title of the thesis: Numerical implementation of the middle field game model in epidemiology. Scientific supervisor: Ph.D. O.Krivorotko.</p>
        <p>2023–present - Postgraduate course, S. L. Sobolev Institute of Mathematics SB RAS. Scientific supervisor: Ph.D. O.Krivorotko.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2023 – present Research Engineer, S.L.Sobolev Institute of Mathematics SB RAS, Novosibirsk, Russia.</p>
        <p> 2021 – present Assistant, Department of Mathematics, Faculty of Physics, Novosibirsk State University, Novosibirsk, Russia.</p>
        <p> 2021 – 2024 – Engineer. Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia.</p>
        <p> 2020 – Laboratory Assistant, International Mathematical Center, Novosibirsk State University, Novosibirsk, Russia.</p>
</div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Teaching</h3></div>
        <p>2021 – 2024, conducting seminars at the Department of Higher Mathematics of the FF NSU.</p>
   
</div>





        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Inverse problems.</p>
        <p>Numerical methods for solving differential equations.</p>
        <p>Mean field Games.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Исследовательские проекты и гранты</h3></div>
          <p>RNF 18-71-10044 «Supercomputer analysis of social, epidemiological and economic processes. Theory, Algorithms and Software package» (2018-2023) — performer.</p>
          <p>RFBR 21-51-10003 «Reverse mathematical modeling in epidemiology» (2021-2022) — performer.</p>
          <p>RNF 23-71-10068 «Development of an intelligent software system for monitoring and modeling interrelated epidemiological and economic processes in the Russian Federation» (2023-2026) — performer.</p>
        </div>
        <hr></hr>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}