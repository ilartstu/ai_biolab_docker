import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';

export function Krivorotko_teaching_En () {
  return (
        <>
    <NaviBarv2_En />
    <Container>
      <section>
        <div class="row my-4 text-center"><h1>Inverse problems: theory and practice</h1></div>
        <div class="row my-4 ps-4"><p class="lead">A course at <a rel="noopener" target="_blank" href="https://cytometry.ru/biomed/schedule.html">the Department of Biomedical Physics of Novosibirsk State University</a> for undergraduates of the 5th-6th year.</p></div>
<div class="row my-4 ps-4"><p class="lead">Authors: <a rel="noopener" target="_blank" href="https://sites.google.com/site/yurkin/home">Candidate of Physical and Mathematical Sciences M. Yurkin</a>, <a rel="noopener" target="_blank" href="/Krivorotko_info">Doctor of Physical and Mathematical Sciences O. Krivorotko</a>.</p></div>
<div class="row my-4 ps-4"><p class="lead">First, a summary is provided, below is a little more detailed description of each topic. In the detailed plan, the links on the topic title lead to presentations in PowerPoint format. A recording  <a rel="noopener" target="_blank" href="https://youtube.com/playlist?list=PLPJ7DMh8UqNP9D98Urd5D1ZIzHTxVvb7j">of lectures is available</a> (from 2023). The main literature is available at <a rel="noopener" target="_blank" href="http://cyto.kinetics.nsc.ru/yurkin/InverseProblems/Literature/">the link</a>.</p></div>
<div class="row my-4 ps-4"><h2>Introduction</h2></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_01.pptx">1. Introduction to the course</a></h4></div>
<div class="row my-2 ps-4"><p class="">1.1. Objectives and structure of the course.</p>
<p>1.2. Classification of inverse problems.</p>
<p>1.3. Examples of inverse problems.</p>
<p>1.4. Correctness of the inverse problem: existence, uniqueness and stability.</p>
<p>1.5. Discussion of specific examples of inverse problems in students' theses.</p></div>
<div class="row my-4 ps-4"><h2>Parametric description of the desired function</h2></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_02.pptx">2. The regression problem in the analysis of experimental data</a></h4></div>
<div class="row my-2 ps-4"><p>2.1.The correct formulation of the regression problem in terms of math. statistics are the key to reliable results of processing experimental data.</p>
<p>2.2. Linear and nonlinear models.</p>
<p>2.3. The standard assumptions about experimental data errors are normal distribution and independence.</p>
<p>2.4. Reduction to the least squares method. Using the expected errors of experimental data as a weight.</p>
<p>2.5. Standard probability distributions.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_03.pptx">3. Linear regression</a></h4></div>
<div class="row my-2 ps-4"><p>3.1. The simplest example: one parameter.</p>
<p>3.2. A direct solution to the minimization problem.</p>
<p>3.3. Estimation of the error in determining parameters: standard errors, correlations and confidence intervals.</p>
<p>3.4. Confidence intervals on the model (theoretical) curve.</p>
<p>3.5. Different approaches to error estimation result in the same result.</p>
<p>3.6. Complication of linear regression.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_04.pptx">4. The minimization problem in nonlinear regression</a></h4></div>
<div class="row my-2 ps-4"><p>4.1. The presence of many local minima in the general case.</p>
<p>4.2. Global minimum search algorithms: Levenberg-Marquardt, multistart, DIRECT, etc..</p>
<p>4.3. Classification of algorithms based on their use of the derivative of the objective function.</p>
<p>4.4. The need to study the objective function (the dependence of the sum of squares of deviations from the parameters) for a specific task. Checking the applicability of the algorithm used.</p>
<p>4.5. Shared parameters.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_05.pptx">5. Estimation of the error in determining the parameters</a></h4></div>
<div class="row my-2 ps-4"><p>5.1. Linear approximation.</p>
<p>5.2. Contours of plausibility.</p>
<p>5.3. The Bayesian approach.</p>
<p>5.4. Using information about the surface of the objective function obtained during minimization.</p>
<p>5.5. The Monte Carlo method.</p>
<p>5.6. The applicability of the linear approximation.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_06.pptx">6. Verification of initial assumptions and modification of the standard regression procedure</a></h4></div>
<div class="row my-2 ps-4"><p>6.1. Generalized least squares method.</p>
<p>6.2. Definition of drop-down points.</p>
<p>6.3. Abnormal error distribution.</p>
<p>6.4. The dependence of the errors of different points on each other.</p>
<p>6.5. General adequacy of the model.</p>
<p>6.6. Comparison of different models.</p>
<p>6.7. Accounting for repeated measurements.</p>
<p>6.8. Simultaneous regression of several data sets with the same values of some parameters.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_07.pptx">7. Solving the inverse problem with pre-training</a></h4></div>
<div class="row my-2 ps-4"><p>7.1. General remarks.</p>
<p>7.2. A pre-calculated table of values of the objective function.</p>
<p>7.3. Analytical appeal.</p>
<p>7.4. Automatic learning.</p>
<p>7.5. Neural networks.</p></div>
<div class="row my-4 ps-4"><h2>Restoring function</h2></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_08.pptx">8. Regularization</a></h4></div>
<div class="row my-2 ps-4"><p>8.1. Correctness of the inverse problem.</p>
<p>8.2. Singular value decomposition.</p>
<p>8.3. Infinite-dimensional linear operators.</p>
<p>8.4. Tikhonov regularization.</p>
<p>8.5. The choice of the regularization matrix.</p>
<p>8.6. Generalized singular value decomposition.</p>
<p>8.7. Choosing a regularization parameter.</p></div>
<div class="row my-2 ps-4"><h4><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/InvProb_09.pptx">9. The basics of tomography</a></h4></div>
<div class="row my-2 ps-4">
<p>9.1. Types of tomography.</p>
<p>9.2. Analytical formulas of treatment.</p>
<p>9.3. Physical problems.</p>
<p>9.4. Technical problems.</p>
<p>9.5. Numerical methods.</p>
<p>9.6. Optical diffraction tomography.</p></div>
<div class="row my-4 ps-4"><h2>Application of the acquired knowledge in students' theses</h2></div>
<div class="row my-4 ps-4"><p class="lead">As an examination paper, students must submit a chapter of the thesis (for the 5th year - preliminary), which describes the processing of experimental data. During the verification, the main attention will be paid to the statistical reliability of the results and conclusions.</p></div>
</section>
        </Container>
        

    <Footer_En />
    </>
    
    )}