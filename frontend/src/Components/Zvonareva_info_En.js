import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Zvonareva from "../images/team/Zvonareva.png"

export function Zvonareva_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Zvonareva} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Tatiana Zvonareva</h1></div>
        <div class="row ps-4"><p>Junior Researcher</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 t.a.zvonareva@math.nsc.ru</h5>
        <h5>📩 t.zvonareva@g.nsu.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/GQP-5052-2022">GQP-5052-2022</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID RSCI:<a rel="noopener" target="_blank" href="https://www.elibrary.ru/author_profile.asp?authorid=1163527">1163527</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=57274354900">57274354900</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0002-5418-3098">0000-0002-5418-3098</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Резюме ЗвонареваТА.pdf">CV</a></p></div>
        <div class="row ps-4"><p>1997</p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2015-2019 — Bachelor's degree student of Novosibirsk State University, Russia. The title of the thesis: The particle swarm method for the numerical solution of the inverse problem of social networks.Scientific supervisors: Corresponding Member of the Russian Academy of Sciences, Professor S.I. Kabanikhin, Candidate of Physical and Mathematical Sciences O.Krivorotko.</p>
        <p>2019-2021 — Undergraduate student at Novosibirsk State University, Russia. Title of the thesis: A regularized algorithm for solving the source problem for a diffusion-logistic model.Scientific supervisor: Candidate of Physical and Mathematical Sciences O.Krivorotko.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2023-present — Junior Researcher, Laboratory of AI Technologies for Mathematical Modeling of Biological, Socio-Economic and Environmental Processes, S.L. Sobolev Institute of Mathematics SB RAS, Novosibirsk, Russia.</p>
        <p> 2023-present — Junior Researcher, International Mathematical Center, S.L. Sobolev Institute of Mathematics SB RAS, Novosibirsk, Russia.</p>
        <p> 2020-present — Assistant Professor, Department of Higher Mathematics, Faculty of Physics, Novosibirsk State University, Novosibirsk, Russia.</p>
        <p> 2021-2022 — Engineer, Laboratory of Methods of Creation, Research and Identification of Mathematical Models of Natural Science, Novosibirsk State University, Novosibirsk, Russia.</p>
        <p> 2020-2023 — Engineer, Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia.</p>
        <p> 2020 — Engineer, International Scientific and Educational Mathematical Center, Novosibirsk State University, Novosibirsk, Russia.</p>
</div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Teaching</h3></div>
        <p>Vector and Tensor analysis - seminars, 3rd year of the NSU Faculty of Physics.</p>
        <Button href="/Krivorotko_Zvonareva_teaching/En" className="text-white shadow4 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Materials</b></div></Button>
   
</div>





        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Mathematical modeling.</p>
        <p>Inverse problems.</p>
        <p>Identifiability.</p>
        <p>Optimization.</p>
        <p>Social processes.</p>
        <p>Regularization.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>RNF 18-71-10044 "Supercomputer analysis of social, epidemiological and economic processes. Theory, Algorithms and Software package" (2018-2023) — performer.</p>
          <p>RFBR 18-31-20019 "Direct and inverse problems of social processes: theory, algorithms and software package" (2018-2020) — performer.</p>
          <p>Grant of the President of the Russian Federation MK-814.2019.1 "Analysis and application of machine learning methods in inverse problems using parallel computing on a supercomputer" (2019-2020) — performer.</p>
          <p>RFBR 21-51-10003 "Reverse mathematical modeling in epidemiology" (2021-2022) — performer.</p>
          <p>Grant of the President of the Russian Federation MK-4994.2021.1.1 "Agent modeling and forecasting of the spread of the coronavirus epidemic in the regions of the Russian Federation, taking into account the analysis of the effectiveness of quarantine measures" (2021-2022) — performer.</p>
          <p>RNF 23-71-10068 "Development of an intelligent software system for monitoring and modeling interrelated epidemiological and economic processes in the Russian Federation" (2023-2026) — contractor.</p>
        </div>
        <hr></hr>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}