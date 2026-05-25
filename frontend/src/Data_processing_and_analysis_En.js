import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2_En from './Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import epid1 from "./images/directions/epid1.png"
import epid2 from "./images/directions/epid2.png"
import epid3 from "./images/directions/epid3.png"
import ecol1 from "./images/directions/ecol1.png"
import ecol2 from "./images/directions/ecol2.png"
import econ1 from "./images/directions/econ1.png"
import econ2 from "./images/directions/econ2.png"
import Footer_En from './Components/Footer_En'



export function Data_processing_and_analysis_En(){


  return(
  <>
  <NaviBarv2_En />
      <Container className="my-3"   style={{
              height: "120%" }}>
                <p class="lead my-4">Data collection, processing, and analysis are an important part of research in building mathematical models of biology, epidemiology, economics, ecology, and social processes. Incorrect data processing and interpretation can lead to incorrect modeling and forecasting results for the processes under study.</p>
         
        <Tabs  justify defaultActiveKey="epid" id="uncontrolled-tab-example" >
          <Tab eventKey="epid" title="Epidemiology">
          <h5 class="my-4">COVID-19</h5>
          <p class="lead my-4">The following approaches were applied in the process of processing COVID-19 data:
             smoothing data using a 7-day exponential moving average, filling in
              missing values using linear interpolation and removing outliers in the data.</p>
                          <div class="center"><img src={epid1} align="center" width={500} /></div>
                           <p class="lead my-4">For mathematical modeling, the data is pre-normalized and reduced to a normal distribution using the Box-Cox transform or by calculating the logarithmic increment of points in the time series relative to the values of the past. For example, to simulate COVID-19, the daily number of deaths as a result of COVID-19 in St. Petersburg was transformed in such a way that the data returned to a normal and stationary form.:</p>
                           <div class="center"><img src={epid2} align="center" width={500} /></div><hr></hr>
                           <h5 class="my-4">Tuberculosis, HIV</h5>
                           <p class="lead my-4"> The data on the incidence of tuberculosis and HIV in the regions of Russia are considered.</p>
                           <img src={epid3} align="right" width={500} />
                           <p class="lead my-4">The process of collecting statistical data is not as homogeneous as we would like. For example, for tuberculosis incidence data by month, abnormal emissions were found in December and grossly underestimated data in January, which differed significantly from the rest of the months. Such behavior cannot be described by the continuous models used and is poorly explained by the slow rate of disease development.</p>
                           <p class="lead my-4">On the other hand, the latent form of tuberculosis is of interest, which is assumed to be widespread among the population (according to WHO estimates in the region of 30%). </p>
                           <p class="lead my-4">However, the definition of this form varies dramatically from source to source, and there is no consensus on this form.</p>
                           <p class="lead my-4">When epidemiological parameters were restored from among those with the active form, the number of patients with latent tuberculosis was also restored. In general, such a task has many solutions, however, with restrictions on the possible duration of the disease, it was found that, for the regions of Russia, the number of patients with latent form, if it is a mandatory intermediate stage of the disease, cannot exceed 1-5%.</p>
           </Tab>
          <Tab eventKey="econ" title="Economy">
          <p class="lead my-4">Economic and social processes are considered as indirect factors indicating the further development of epidemics. In our case, tuberculosis and HIV are considered important social diseases that are more common among the poor. For this reason, it is assumed that the economic and social indicators of the regions can act as additional markers of the nature of the epidemiological process, clarifying epidemiological parameters.</p>
          <p class="lead my-4">Our goal is to obtain this clarification regarding the average epidemiological model for the regions of Russia.</p>
          <p class="lead my-4">The following socio-economic parameters are potentially interrelated with the development of the epidemic in the region:
          - standard of living<br></br>
          - average per capita income<br></br>
- unemployment rate<br></br>
- the number of workers<br></br>
- the population is below the subsistence level<br></br>
- population density
</p>
<div class="center"><img src={econ1} align="center" width={700} /><p class="lead my-4">Figure 1. Indicator of the standard of living in the regions of Russia.</p></div>
<div class="center"><img src={econ2} align="center" width={700} /><p class="lead my-4">Figure 2. Population in the regions of Russia.</p></div>
<p class="lead my-4">Since these parameters are closely interrelated with each other, a game-theoretic approach was applied to identify the most important parameters based on the Shapley vector. As a result, although important indicators were obtained, the primary results of clarifying epidemiological parameters showed a satisfactory result of restoring epidemiological parameters in only 10% of regions.</p>

          </Tab>
          <Tab eventKey="ecol" title="Ecology and climate">
          <p class="lead my-4">The analysis and processing of data from <a rel="noopener" target="_blank" href="https://sensor.krasn.ru/sc/project/1/map.html">the geoportal of the Krasnoyarsk Territory</a>  on atmospheric air pollution by suspended particles of PM2.5 and <a rel="noopener" target="_blank" href="https://sensor.krasn.ru/sc/project/1/map.html">the system of operational monitoring of the air condition is carried out</a>. </p>
          <img src={ecol1} align="right" width={500} />
          <p class="lead my-4">PM2.5 is the smallest solid particles and droplets of liquids ranging in size from 2.5 to 10 microns (microns). They are often referred to as fine suspended particles or fine dust. PM2.5 particles are one of the most harmful pollutants. Due to their size, fine particles easily enter the bloodstream and spread throughout the body. There is no immediate reaction to small doses of PM2.5, but they accumulate in the body and can lead to serious problems over time.</p>
          <p class="lead my-4">Understanding the reasons for the development of the "black sky" in the Krasnoyarsk Territory or in other cities is inextricably linked to the analysis of data from the network of operational monitoring of atmospheric air quality. In Krasnoyarsk, such a system is represented by more than 30 sensors that record every 20 minutes for more than 4 years. The analysis of such data is complicated by the fact that there are a lot of sources of PM2.5 in nature: automobile transport with gasoline or diesel engines, industrial production, including mining enterprises, coal-fired power plants, construction sites, landfills, agricultural enterprises. This leads to the fact that the data is difficult to non-stationary, that is, they do not have pronounced trends, seasonalities and are very noisy. Another big problem is the long gaps in the data associated with equipment failures, as well as the presence of a large number of anomalies and outliers that may be related to equipment failure (and should be removed from further consideration), as well as be physically significant and have a natural origin. An example of data on the concentration of PM2.5 in Krasnoyarsk from one observation post for 2019-2023 is shown in the figure: </p>
          <div class="center"><img src={ecol2} align="center" width={1000} /></div>
          <p class="lead my-4">Our research is devoted to the analysis of such complex data and the development of methods for their analysis. It is shown that there is no single criterion for assessing the stationarity of data presented in the form of time series. Attention was paid to the correctness of using the most popular tools in solving such tasks. It is shown that for time series of real measurements, various statistical tests that are most used in practice, due to the peculiarities of hypothesis construction, can give results interpreted in different ways, while other well-known tools are limited in use. For the initial analysis, a procedure has been proposed on the basis of which primary conclusions can be drawn about the stationarity of the data.</p>

          </Tab>
        </Tabs>
    </Container>
    <Footer_En />
  </>
)}