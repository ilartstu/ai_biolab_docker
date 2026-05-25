import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2_En from './Components/NaviBarv2_En';
import ModelingSEIR_HCD from './ModelingSEIR_HCD'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import social1 from "./images/directions/social1.png"

import Footer_En from './Components/Footer_En'



export function Social_processes_En(){


  return(
  <>
  <NaviBarv2_En />
      <Container className="my-3"   style={{
              height: "120%" }}>
                <p class="lead my-4">An average field model has been constructed and analyzed, which describes the process of information dissemination in online social networks, taking into account external influences. In this case, distance is understood as the minimum number of connections between the source and the user, and the model takes into account the processes of information dissemination with increasing distance to the source (content-oriented process) and with the same distance to the source (structure-oriented process).</p>
         <div class="center"><img src={social1} align="center" width={600} /></div>
         <p class="lead my-4">The optimal strategy for the behavior of users involved in the process of information dissemination has been determined, subject to restrictions on the dissemination of information. The sensitivity of the model parameters affecting the control and the initial conditions has been studied. </p>
         <p class="lead my-4">The inverse problems of determining the initial condition for additional information about the information dissemination process when adding control are formulated. The inverse problems differed in the control function and were reduced to the task of minimizing the functional inconsistencies. The solutions of the obtained inverse problems for synthetic data are numerically investigated using Bayesian optimization. </p>
    </Container>
    <Footer_En />
  </>
)}