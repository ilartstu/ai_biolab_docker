import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Petrakova from "../images/team/Petrakova.jpg"

export function Petrakova_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Petrakova} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Victoria Petrakova</h1></div>
        <div class="row ps-4"><p>Candidate of Physical and Mathematical Sciences</p></div>
        <div class="row ps-4"><p>Researcher</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 vika-svetlakova@yandex.ru</h5>
        <h5>📩 rikka@icm.krasn.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/641682">C-4300-2016</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID RSCI:<a rel="noopener" target="_blank" href="https://elibrary.ru/author_profile.asp?authorid=1182060">1182060</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=57192186292">57192186292</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0003-1126-2148">0000-0003-1126-2148</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Резюме-Петракова_2024.pdf">CV</a></p></div>
        <div class="row ps-4"><p>1994</p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2010-2016 – Student of the Siberian Federal University, Scientific supervisor: Ph.D., Associate Professor E. Karepova (Bachelor's degree); Corresponding member of the Russian Academy of Sciences, Professor V. Shaidurov.</p>
        <p>2016–2022 – Postgraduate student of the Siberian Federal University, Scientific supervisor: Corresponding Member of the Russian Academy of Sciences, Professor V. Shaidurov.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2016 – present Associate Professor of the Basic Department of Computing and Information Technologies, Siberian Federal University, Krasnoyarsk, Russia.</p>
        <p> 2014 – present Researcher, Institute of Computational Modeling SB RAS.</p>
        </div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Teaching</h3></div>
        <p>Parallel programming, 4th year of Bachelor's degree, seminars, SFU.</p>
        <p>High-performance computing, 1st year of Master's degree, seminars, SFU.</p>
        <p>Optional course "Introduction to Data Mining", SIBFU.</p>
        <p>Supervisor of 5 students (4 bachelors, 1 undergraduate)</p></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Mathematical modeling.</p>
        <p>Mathematical epidemiology.</p>
        <p>Data analysis.</p>
        <p>Computational mathematics.</p>
        <p>Mathematical statistics.</p>
        <p>High-performance computing.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>RFBR No. 18-47-242005 «Creation of efficient distributed networks of temperature sensors for on-board satellite equipment» (2018-2020) — performer.</p>
          <p>RNF No. 18-72-10005 «Formation of stable complex nanostructures due to self—assembly from an ensemble of resonant nanoparticles in the field of laser radiation» (2018-2021) - performer.</p>
          <p>RNF No. 20-61-46017 «Development of dynamic mathematical models for forecasting critical socio-economic situations and creation of effective numerical methods for solving such models» (2020-2021) — performer.</p>
          <p>RFBR No. 20-01-00090 «Eulerian-Lagrangian (semi-Lagrangian) finite difference and finite element methods with special properties» (2020-2022) — performer.</p>
          <p>RNF No. 18-71-10044 «Supercomputer analysis of social, epidemiological and economic processes. Theory, algorithms and software package» (2021-2023) — performer.</p>
          <p>KKFN No. 2022110809055 «Assessment of the effectiveness of using a network of inexpensive sensor sensors to collect data on pollution in the boundary layers of the atmosphere based on the analysis of observations of the dynamics of the concentration of suspended particles PM2.5» (2022-2023) — head.</p>
          <p>RPF No. 23-71-10068 «Development of an intelligent software system for monitoring and modeling interrelated epidemiological and economic processes in the Russian Federation» (2023-2026) — head.</p>
          <p>RSF No. 24-71-10022 «Joint analysis of a system of time series of meteorological factors and concenration levels of PM2.5 pollution in the surface layer of the city's atmoshere. Theory, algorithms and software packages» (2024-2027) — head.</p>
        </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Awards and achievements</h3></div>
        <p>The first prize of the Lavrentiev competition of student and postgraduate works in mathematics and mechanics «Numerical methods for solving problems of the «average field»». (2020).</p>
        <p>Diploma of the finalist of the competition for the best work of students of federal universities of Russia 2014 in the field of natural sciences (2014).</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}
    