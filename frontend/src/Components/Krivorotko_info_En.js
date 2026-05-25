import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Krivorotko from "../images/team/Krivorotko.png"

export function Krivorotko_info_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div><img src={Krivorotko} align="left" width={320} ></img></div>
        <div class="row my-4 ps-4"><h1>Olga Krivorotko</h1></div>
        <div class="row ps-4"><p>Doctor of Physical and Mathematical Sciences</p></div>
        <div class="row ps-4"><p>Head of the laboratory</p><hr></hr></div>
        <div class="row ps-4"><h5>📩 krivorotko.olya@mail.ru</h5>
        <h5>📩 o.i.krivorotko@math.nsc.ru</h5><hr></hr>
        </div>
        <div class="row">
        <div class="col-sm-5 col-md-6 ps-5">WOS Research ID:<a href="https://www.webofscience.com/wos/author/record/E-5775-2014">E-5775-2014</a></div>
        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 ">ID OF the RSCI:<a rel="noopener" target="_blank" href="https://www.elibrary.ru/author_profile.asp?authorid=746714">746714</a></div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto ps-5 ">Scopus Author ID:<a href="https://www.scopus.com/authid/detail.uri?authorId=57217457913">57217457913</a><hr></hr></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">ORCID: <a href="https://orcid.org/0000-0003-0125-4988">0000-0003-0125-4988</a><hr></hr></div>
        </div>
        <div class="row ps-4"><p><a href="https://ai-biolab.ru/data/Krivorotko-CV_short .pdf">CV</a></p></div>
        <div class="row ps-4"><p>03.04.1989</p></div>
        </section>
        <hr></hr>
        <div class="row">
        <div class="col-sm-5 col-md-6"><div class="my-3"><h3>Education</h3></div>
        <p>2006-2011 — Specialist student at Novosibirsk State University, Russia. Title of the thesis: solving the inverse problem of thermoacoustics. Scientific supervisor: Corresponding Member of the Russian Academy of Sciences, Professor S. Kabanikhin.</p>
        <p>2011-2014 — Postgraduate student at Novosibirsk State University, Russia. The title of the PhD thesis: Regularization of the problems of determining the sources of oscillations. Scientific supervisor: Corresponding Member of the Russian Academy of Sciences, Professor S. Kabanikhin.</p>
        <p>2015 — Candidate of Physical and Mathematical Sciences, specialty 05.13.18 - mathematical modeling, numerical methods and software packages. </p>
        <p>2023 — Doctor of Physical and Mathematical Sciences, specialty 1.2.2. - mathematical modeling, numerical methods and software packages.</p>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><div class="my-3"><h3>Professional experience</h3></div>
        <p> 2024-present — Head of the Laboratory of AI Technologies for Mathematical Modeling of Biological, Socio-economic and Environmental Processes, S. Sobolev Institute of Mathematics SB RAS</p>
        <p> 2023-present — Head of the Research Department of the International Mathematical Center, S. Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2023-present — Senior Researcher, S. Sobolev Institute of Mathematics SB RAS.</p>
        <p> 2021-present — Associate Professor of the Department of Higher Mathematics, Faculty of Physics, Novosibirsk State University, Novosibirsk, Russia.</p>
        <p> 2015-present — Associate Professor of the Department of Mathematical Methods of Geophysics, Faculty of Mechanics and Mathematics, Novosibirsk State University, Novosibirsk, Russia. Numerical methods for solving inverse and ill-posed problems, annual special course.</p>
        <p> 2015-present — Deputy Head of the NSC-NSU Joint Laboratory "Methods of Creation, Research and identification of mathematical models of Natural Science", Novosibirsk State University, Novosibirsk, Russia.</p>
        <p> 2014-present — Deputy Chairman of the Council of Scientific Youth of the Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia. </p>
        <p> 2014-present — Senior Researcher, Laboratory of Mathematical Problems of Geophysics, Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia. Researcher in the field of direct and inverse problems of mathematical physics (geophysics, acoustics, seismics), medicine and related fields of science, source problems (identification of sources of tsunamis, earthquakes, thermoacoustics problem), numerical solution of direct and inverse problems of immunology and epidemiology, digital economy.</p>
        <p> 2012-2014 — Engineer, Institute of Computational Mathematics and Mathematical Geophysics SB RAS, Novosibirsk, Russia. Researcher in the field of direct and inverse problems of mathematical physics (geophysics, acoustics, seismics), medicine and related fields of science.</p>
        <p> 2011-2021 — Senior Lecturer at the Department of Higher Mathematics, Faculty of Physics, Novosibirsk State University, Novosibirsk, Russia. Vector and tensor analysis (3rd year).</p>
        <p> 2011-2014 — Software Engineer, Geosystem LLC, Novosibirsk, Russia. One of the developers of the high-tech ITRIS software product designed for modeling natural and man-made disasters (tsunamis, earthquakes, etc.). The developer is a researcher in the field of direct and inverse problems of mathematical physics (seismics, electrical exploration), medicine, image processing.</p>
        <p> 2011-2015 — Scientific Secretary of the third, Fourth, fifth, sixth and Seventh International Youth Scientific School-conference "Theory and Numerical Methods for solving Inverse and Ill-posed problems", Novosibirsk, October 10-15, 2011, August 5-15, 2012, October 8-13, 2013, December 8-14, 2014, October 19-24, 2015, respectively.</p></div>
        </div>
        <hr></hr>
        <div class="row">
        <div class="col-sm-6 col-md-5 col-lg-6 mx-auto"><div class="my-3"><h3>Teaching</h3></div>
        <p>Numerical methods for solving inverse and incorrect problems - annual special course of the Department of Mathematical Methods of Geophysics of MMF NSU, courses 3-6.</p>
        <Button href="/Krivorotko_teaching_methods/En" className="text-white shadow4 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Materials</b></div></Button>
            <div class="row ps-4 my-3"><p class="lead"></p></div>
        <p>Vector and tensor analysis - lectures and seminars, 3rd year of the NSU Faculty of Physics.</p>
        <Button href="/Krivorotko_Zvonareva_teaching/En" className="text-white shadow4 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Materials</b></div></Button>
            <div class="row ps-4 my-3"><p class="lead"></p></div>
            <p>Inverse problems: theory and practice - a course at <a rel="noopener" target="_blank" href="https://cytometry.ru/biomed/schedule.html">the Department of Biomedical Physics of Novosibirsk State University</a> for 5th-6th year undergraduates.</p>
        <Button href="/Krivorotko_teaching/En" className="text-white shadow4 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Materials</b></div></Button>
            <div class="row ps-4 my-3"><p class="lead"></p></div>
        <p>Supervisor of 6 students (2 graduate students, 1 undergraduate, 3 bachelors).</p></div>
        <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><div class="my-3"><h3>Professional interests</h3></div>
        <p>Inverse and incorrect problems in Earth sciences and biology.</p>
        <p>Identifiability and sensitivity analysis.</p>
        <p>Optimization and regularization.</p>
        <p>Machine learning from the point of view of optimization.</p>
        <p>High-performance computing.</p>
        <p>Epidemiology, immunology and social processes.</p>
        </div>
        <hr></hr>
        <div class="row">
          <div class="my-3"><h3>Research projects and grants</h3></div>
          <p>RFBR 09-01-00746 "Creation of new numerical methods and study of known methods for solving inverse problems of mathematical physics" (2009-2011) — performer</p>
          <p>RFBR 12-01-00773 "Theory and numerical methods for solving inverse problems of mathematical physics" (2012-2014) — performer.</p>
          <p>SB RAS 14 "Inverse problems and their applications: theory, algorithms and software package" (2014) — performer.</p>
          <p>RFBR 14-01-31182 "Optimal control of the shape of thin inclusions in problems of elasticity theory" (2014-2015) — performer.</p>
          <p>RFBR 15-01-09230 "Construction and research of analogues of I.M. Gelfand, B.M. Levitan, M.G. Crane equations and numerical methods for their solution in application to multidimensional inverse problems of acoustics, electrodynamics and elasticity theory" (2015-2017) — performer.</p>
          <p>RFBR 16-31-00189 "Development of parallel algorithms for numerical solution of direct and inverse problems of wave propagation in the hydrosphere-lithosphere system" (2016-2017) — Head.</p>
          <p>RFBR 16-31-00382 "Development of numerical algorithms for solving direct and inverse problems in biology and medicine" (2016-2017) — performer.</p>
          <p>RFBR 16-01-00755 "Development of numerical methods for continuation of solutions from a part of the boundary of equations of mathematical physics" (2016-2018) — performer.</p>
          <p>Grant of the President of the Russian Federation MK-1214.2017.1 "Research and development of numerical algorithms for solving direct and inverse problems of immunology and epidemiology" (2017-2018) — Head.</p>
          <p>RFBR 17-52-14004 "Methods of reconstruction of high-quality PET and SPECT images with low gamma quantum statistics" (2017-2019) — performer.</p>
          <p>RFBR 17-51-540004 "Substantiation of existing and development of new numerical methods for solving inverse and ill-posed problems for elliptic and parabolic equations" (2017-2018) — performer.</p>
          <p>RNF 18-71-10044 "Supercomputer analysis of social, epidemiological and economic processes. Theory, algorithms and Software package" (2018-2023) — Head.</p>
          <p>RFBR 18-41-540017 "Development of computer modeling methods and a set of programs for supercomputers for the purpose of probabilistic forecasting of abnormal and dangerous natural phenomena in the Novosibirsk region" (2018-2020) - performer.</p>
          <p>RFBR 18-31-20019 "Direct and inverse problems of social processes: theory, algorithms and a set of programs" (2018-2020) — Head.</p>
          <p>Grant of the President of the Russian Federation MK-814.2019.1 "Analysis and application of machine learning methods in inverse problems using parallel computing on a supercomputer" (2019-2020) - Head.</p>
          <p>RFBR 21-51-10003 "Reverse mathematical modeling in epidemiology" (2021-2022) — Head.</p>
          <p>Grant of the President of the Russian Federation MK-4994.2021.1.1 "Agent modeling and forecasting of the spread of the coronavirus epidemic in the regions of the Russian Federation, taking into account the analysis of the effectiveness of quarantine measures" (2021-2022) — Head.</p>
          <p>RNF 23-71-10068 "Development of an intelligent software system for monitoring and modeling interrelated epidemiological and economic processes in the Russian Federation" (2023-2026) — Head.</p>
        </div>
        <hr></hr>
        <div class="row">
        <div class="my-3"><h3>Awards and achievements</h3></div>
        <p>Novosibirsk Region Government Award for outstanding scientific achievements in the nomination "Best Young Researcher" for the work "Software package for modeling and constructing scenarios for the spread of infectious diseases in the Novosibirsk region, taking into account socio-economic constraints" (2023).</p>
        <p>The G. Marchuk Prize for the work "Identifiability of mathematical models of immunology and epidemiology" (2021).</p>
        <p>Novosibirsk City Hall Award in the field of science and innovation. Nomination "The best young researcher in scientific organizations" for the development of a forecast map for the spread of socially significant diseases in the city of Novosibirsk (2020).</p>
        <p>Grant UMNIK for the project "Development of a high-tech 3D integration system for visualization and tsunami warning" (2015).</p>
        <p>The second prize of the Lavrentiev competition of student and postgraduate works in mathematics and mechanics "Study of the combined inverse problem of restoring the source of disturbance of the water surface" (2014).</p>
        <p>British Petroleum Fellowship for Graduate Students (2013-2014).</p>
        <p>The first prize of the Lavrentiev competition of student and postgraduate works in mathematics and mechanics "Research of problems of determining the sources of wave processes" (2013).</p>
        <p>Scholarship of the President of the Russian Federation (2012-2013).</p>
        <p>The second prize of the Lavrentiev competition of student and postgraduate works in mathematics and mechanics for solving the inverse problem of thermoacoustics (2011).</p>
        <p>Baker Hughes BV Award: Identification of sources of tsunamis and earthquakes (2011-2012).</p>
        <p>Baker Hughes BV Award: Research and solution of the inverse problem of thermoacoustics by the method of singular value decomposition (2010-2011).</p>
        </div>
        </div>
        </Container>
        

    <Footer_En />
    </>
    
    )}
    
    