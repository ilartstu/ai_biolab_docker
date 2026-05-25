import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2_En from './Components/NaviBarv2_En';
import ModelingSEIR_HCD from './ModelingSEIR_HCD'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import pollution1 from "./images/directions/pollution1.png"
import pollution2 from "./images/directions/pollution2.png"
import pollution3 from "./images/directions/pollution3.png"
import Footer_En from './Components/Footer_En'



export function Pollution_modeling_En(){


  return(
  <>
  <NaviBarv2_En />
      <Container className="my-3"   style={{
              height: "120%" }}>
                <p class="lead my-4"><u>Development of a model for predicting emissions (CO, CO2, NOx) at Russian thermal power plants using machine learning models and deep neural networks to assess regional ecology”</u></p>
                <p class="lead my-4">One of the relevant topics in the field of energy is related to the creation of digital counterparts of power plants, using the achievements of artificial intelligence to improve the efficiency and reliability of thermal power equipment (CCGT, GTU). The schematic diagram of a thermal power plant (CHP) shows the technological connection of all its main elements and their role in the technological process of generating heat and electric energy. Figure 1 shows a schematic thermal diagram of a combined-cycle power plant with a capacity of 230 MW.  </p>
                <p class="lead my-4">In the field of studying the operation of thermal power plants and assessing harmful emissions over the past 5 years, we can mention the work of authors from Turkey (Namık Kemal University, Tekirdağ), Canada (Southern Alberta Institute of Technology), China (SJTU), Great Britain (University of Aberdeen), Siemens UK; USA (Harvard University; Jet Propulsion Laboratory; California Institute of Technology, Pasadena).This scientific direction is relevant in connection with the reduction of emissions of harmful substances into the atmosphere, with compliance with the requirements of international standards in the field of environmental standards.</p>
                <p class="lead my-4">Our scientific work is aimed at forming datasets for 3 gas turbine units (GTU) of the Alstom GT13E2 model with a nominal capacity of P=180 MW, which operate as part of TPP 44, as part of 3 different combined-cycle gas plants (CCGTs), as well as TPP 11 (models of Siemens V64.3A / SGT-1000F GTU with rated power of P= 70 MW and Ansaldo AE64.3A with rated power P= 75 MW). The emission values of CO (carbon monoxide), CO2, and NO2 (nitrogen oxide) are estimated in mg/m3 based on historical data from the automated process control system for 3 years (2021-2023). The data recording time is set to 1 hour. </p>
                <p class="lead my-4">At the first stage, 18 parameters were selected for the formation of the dataset at the CHPP: 
- ambient temperature, pressure, humidity; <br></br>
- temperature at the inlet and outlet of the turbine; <br></br>
- gas pressure at the turbine inlet; <br></br>
- gas pressure before and after the compressor; <br></br>
- temperature in the compressor; <br></br>
- the generated capacity of the GTU; <br></br>
- values of CO, 02, CO2, NOx (Fig.2, Fig.3).
</p>
                <p class="lead my-4">It is worth noting that the authors from the University of Aberdeen, UK are currently implementing the SGT-400 GTU environmental monitoring project and collecting about 174 parameters. Further, the amount of data is reduced to 88, ML methods are used.</p>
                <p class="lead my-4">Data from the Sentinel-2, Sentinel-5P/TROPOMI, and Landsat 7,8,9 satellites can be used as initial data for analyzing the emission values of CO,CO2, and NOx oxide emissions from Russian thermal power plants and determining the position of atmospheric jets (plumes) from chimneys. Weather data on wind speed, wind direction, and moisture content from ECMWF's ERA5 databases. It is planned to use models for the inversion of the Gaussian plume, to take into account the influence of the transverse flow, the integral increase in mass and the divergence method.</p>
                <p class="lead my-4">The project plans to develop a mathematical model for predicting emissions of harmful substances and implement it as a program in Python.</p>
                <p class="lead my-4">The project uses advanced processing methods (eXtreme Gradient Boosting – GBDT XGBoost; LightGBM; SVGP – Sparse variational Gaussian processes), models of large neural networks: LSTM, Extreme learning machine (ELM) regressor; transformer (transformer of self-exposure and impact between choices - Saint; FT-transformer, Tab-transformer, minirocket). It is suggested to use the library for PyTorch support software: tsai, pytorch_tabular, tab-transformer-pytorch.</p>
                <div class="center my-4"><img src={pollution1} align="center" width={700} /></div>
                <div class="center"><img src={pollution2} align="center" width={850} /><p class="lead my-4">Fig. 2. An example of a time series for NOx emissions in mg/m3 from the Russian CHPP 44 power plant based on observations with a recording frequency of 1 hour for 2022-2023.</p></div>
                <div class="center"><img src={pollution3} align="center" width={850} /><p class="lead my-4">Fig. 3. An example of a time series for CO2 emissions in mg/m3 from the Russian CHPP 44 power plant based on observations with a recording frequency of 1 hour for 2022-2023.</p></div>
                
    </Container>
    <Footer_En />
  </>
)}