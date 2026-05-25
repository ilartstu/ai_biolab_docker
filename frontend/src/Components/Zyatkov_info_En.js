import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Zyatkov from "../images/team/Zyatkov.png"

export function Zyatkov_info_En () {
  return (
    <>
    <NaviBarv2_En />
    <Container>
      <section>
      <div><img src={Zyatkov} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Nikolay Zyatkov</h1></div>
        <div class="row ps-4"><p>PhD in Computer Science</p></div>
        <div class="row ps-4"><p>Researcher</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 n.y.zyatkov@math.nsc.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/1137811">1137811</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID RSCI:<a rel="noopener" target="_blank" href="https://elibrary.ru/author_profile.asp?authorid=1093951">1093951</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=55151392600">55151392600</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0001-5847-4194">0000-0001-5847-4194</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Zyatkov N. - CV.pdf">CV</a></p></div>
        <div class="row ps-4"><p>12.04.1990</p></div>
        </section>
        <div class="row ps-4"><p></p></div>
        <div class="row ps-4"><p></p></div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2006-2009 — B. Sc. in Engineering and Technology, Novosibirsk State University, Department of Information Technology, Russia Thesis title: Development of a software system for multi-criteria choice on a finite set of alternatives (by example of the production planning). Scientific advisor: Galina L. Polyakova.</p>
        <p>2011-2013 — M. Sc. in Engineering and Technology, Novosibirsk State University, Department of Information Technology, Russia Thesis title: Development of highly-optimized software for diffraction modeling of seismic wavefields in layered mediums. Scientific advisor: Dr. Arkady M. Aizenberg; PhD Alexey A. Romanenko.</p>
        <p>2013-2016 — PhD student of the Novosibirsk State University, Department of Information Technology, Russia Thesis title: Development of highly-optimized software for diffraction modeling of seismic wavefields in layered mediums with adaptation on GPU. Scientific advisor: Dr. Arkady M. Aizenberg; Prof. Sergey I. Kabanikhin, Member of Russian Academy of Science.</p>
        <p>2016-2017 — Professional retraining under the program "Economics and Organization Management", Novosibirsk State University Theme of graduation work: “Using search methods for undervalued stocks when choosing an investor strategy in the Russian stock market” Scientific adviser: Ph.D., Associate Professor E. Meltenisova.</p>
        </div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2024-present — Researcher, Laboratory of AI Technologies for Mathematical Modeling of Biological, Socioeconomic and Ecological Processes, Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2023-present — Head of the Innovation Department, International Mathematical Center, Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2022-2024 — Researcher, Laboratory of Applied Inverse Problems, Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2020-2023 — Junior Researcher, Laboratory of Inverse Problems of Natural Science, Institute of Computational Mathematics and Mathematical Geophysics SB RAS.</p>
        <p> 2014-2018 - Programmer, Department of Computer Engineering, Faculty of Information Technology, Novosibirsk State University.</p>
        <p> 2010-2014 - Laboratory Assistant, Department of Computer Engineering, Faculty of Information Technology, Novosibirsk State University.</p>
</div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Computer Science.</p>
        <p>Mathematical modeling.</p>
        <p>Quantitative research.</p>
        <p>Machine learning.</p>
        <p>Deep learning.</p>
        <p>Algorithmic Trading.</p>
        <p>Financial markets.</p>
        <p>Macroeconomics.</p>
        <p>Start-ups.</p>
        <p>High performance computing.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>RFBR 18-31-20019 "Direct and inverse problems of social processes: theory, algorithms and complexes of programs" (2018-2020).</p>
          <p>RFBR 19-410-540002 "Agent-based spatial decision support systems at the regional level" (2019-2021).</p>
          <p>RFBR 14 21-51-10003 "Inverse mathematical modeling in epidemiology" (2021-2022).</p>
          <p>RNF 18-71-10044 "Supercomputer analysis of social, epidemiological and economic processes. Theory, algorithms and complex of programs" (2018-2023).</p>
          <p>RNF 23-71-10068 "Development of an intelligent software system for monitoring and modeling interrelated epidemiological and economic processes in the Russian Federation" (2023-present).</p>
         </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Awards and achievements</h3></div>
        <p>Victory in the business accelerator A:START of the Novosibirsk Technopark “Akadempark” in the IT section with the project “Manager's Panel: Cloud Service for Risk Management for Investment Accounts” (2018).</p>
        <p>1st place in nomination “Effective application” at the contest “GPU: serious accelerators for large problems”, NVIDIA Ltd., Moscow State University, Moscow, Russia (2013).</p>
        <p>The Scholarship of the Government of Russian Federation (2012-2013).</p>
        <p>2st place at the 51th International Scientific Conference for Students “Student and Scientific-Technical progress”, Novosibirsk State University, Novosibirsk, Russia (2013).</p>
        <p>1st place at the 50th International Scientific Conference for Students “Student and Scientific-Technical progress”, Novosibirsk State University, Novosibirsk, Russia (2012).</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}
    