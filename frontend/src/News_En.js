import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
    OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Footer_En from './Components/Footer_En' ;
import NaviBarv2_En from './Components/NaviBarv2_En';
import sem_a from "./images/news/sem_a.PNG"
import sem_b from "./images/news/sem_b.PNG"
import sem_c from "./images/news/sem_c.PNG"
import conf_a from "./images/news/conf_a.PNG"
import NewsData from './Components/NewsData'
import conf_b from "./images/news/conf_b.PNG"
import life_a from "./images/news/life_a.PNG"
import life_b from "./images/news/life_b.PNG"
import life_c from "./images/news/life_c.PNG"
import life_d from "./images/news/life_d.PNG"
import life_e from "./images/news/life_e.PNG"
import conf_c from "./images/news/conf_c.PNG"
import conf_e from "./images/news/conf_e.PNG"
import conf_d from "./images/news/conf_d.PNG"
  
export function News_En () {

    const postsA1 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Conf_h/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_e} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">Laboratory staff will take part in the International Conference POSTGENOM’2024, at which the head of the laboratory O. Krivorotko will present the results of the work</h5>
      <p class="card_descr_t lead">17.10.2024</p>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
    {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Conf_g/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_c} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t my-1">Laboratory staff will take part in the XVI conference «Mathematical Models and Numerical methods in Biology and Medicine»</h5>
      <p class="card_descr_t lead my-4">17.10.2024</p>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
    {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Conf_f/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_d} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t my-3">Laboratory staff will take part in the conference «Quasi-linear equations, inverse problems and their applications»</h5>
      <p class="card_descr_t lead my-4">17.10.2024</p>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
    {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Conf_e/En" style={{ textDecoration: 'none', color: 'inherit' }}>
        <article class="card_t">
          <div class="card_image_t">
            <img src={conf_d} alt="Конференция"></img>
          </div>
          <div class="card_content_t">
          <h5 class="card_title_t my-1">Laboratory staff will take part in the conference «Inverse incorrect tasks and machine learning»</h5>
          <p class=" card_descr_t lead my-4">17.10.2024</p>
          </div>
        </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},
    {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Conf_d/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_d} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">Laboratory staff will take part in the conference «Industrial Mathematics: from mathematical methods to Industrial technologies»</h5>
      <p class="card_descr_t lead">17.10.2024</p>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Conf_b/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={conf_b} alt="Conference"></img>
        </div>
        <div class="card_content_t">
        <h5 class="my-3 card_title_t">Laboratory staff will take part in the conference "Mathematics in Medicine"</h5>
        <h5 class="my-4 card_descr_t lead">24.09.2024 </h5>
        </div>
      </article>
      </a>
    </li></ul>,eventKey: "A1",eventKey: "all"},
      {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Conf_c/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Conference"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-4">Laboratory staff will take part in the IV conference of mathematical centers of Russia</h5>
    <p class="card_descr_t lead my-1">08.08.2024</p>
    </div>
  </article>
  </a>
</li>
  </ul>,eventKey: "A2",eventKey: "all"},
      {id: 8, name: <ul class="cards_t ">
      <li class="cards_item_t">
      <a href="/Conf_a/En" style={{ textDecoration: 'none', color: 'inherit' }}>
        <article class="card_t">
          <div class="card_image_t">
            <img src={conf_a} alt="Conference"></img>
          </div>
          <div class="card_content_t">
          <h5 class="card_title_t">14th International Multi-Conference "Bioinformatics of genome regulation and Structure/Systems Biology", August 5-10, 2024</h5>
          <h5 class="card_descr_t lead">13.06.2024</h5>
          </div>
        </article>
        </a>
      </li></ul>,eventKey: "A1",eventKey: "all"}
      
     
    ]
    const postsA2 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Sem_t_En" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article class="card_t">
              <div class="card_image_t">
                <img src={sem_b} alt="Конференция"></img>
              </div>
              <div class="card_content_t my-3">
              <h5 class="card_title_t my-3">On July 3, the laboratory will hold a seminar on «Simplification of Neverov»</h5>
              <h5 class="card_descr_t lead my-3">02.07.2025 </h5>
              </div>
            </article></a>
          </li></ul>,eventKey: "A2",eventKey: "all"},
            {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Sem_s_En" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article class="card_t">
              <div class="card_image_t">
                <img src={sem_a} alt="Конференция"></img>
              </div>
              <div class="card_content_t">
              <h5 class="card_title_t my-1">On June 19, the laboratory will hold a seminar on «Comparative analysis of approaches to solving the inverse problem of image reconstruction in emission medical tomography»</h5>
              <h5 class="card_descr_t lead">17.06.2025 </h5>
              </div>
            </article></a>
          </li></ul>,eventKey: "A2",eventKey: "all"},
            {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Sem_r_En" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article class="card_t">
              <div class="card_image_t">
                <img src={sem_b} alt="Конференция"></img>
              </div>
              <div class="card_content_t my-3">
              <h5 class="card_title_t my-3">On May 20, a laboratory workshop will be held, at which 3 reports are planned</h5>
              <h5 class="card_descr_t lead my-3">19.05.2025 </h5>
              </div>
            </article></a>
          </li></ul>,eventKey: "A2",eventKey: "all"},
        {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_q/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On May 15, the laboratory will hold a seminar on «Prediction of the spread of socially significant diseases based on deep learning methods in case of insufficient data»</h5>
        <h5 class="card_descr_t lead my-1">14.05.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_p/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On April 17, the laboratory will hold a seminar on «Supercomputer analysis and regularization of tasks of identification and management of social processes»</h5>
        <h5 class="card_descr_t lead my-3">11.04.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_o/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On April 3, the laboratory will hold a seminar on «Why living things are poorly suited for differential and probabilistic modeling»</h5>
        <h5 class="card_descr_t lead my-3">29.03.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_n/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t my-3">On March 20, the laboratory will hold a seminar on «Semi-supervised classification: Basic Ideas»</h5>
        <h5 class="card_descr_t lead my-4">19.03.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 8, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_m/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On March 6, a joint meeting of the seminar "Applied Statistics" and the seminar of the Laboratory of AI technologies for mathematical modeling of biological, socio-economic and environmental processes will be held</h5>
        <h5 class="card_descr_t lead my-1">04.03.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 9, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_l/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_c} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-3">On February 27, the laboratory will hold a seminar on «A new method for correcting the parameters of dynamic epidemiological models»</h5>
        <h5 class="card_descr_t lead my-3">17.02.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},


      {id: 10, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_k/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_c} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On February 6, the laboratory will hold a seminar on «Mathematical modeling of epidemic spread taking into account social, economic and environmental processes»</h5>
        <h5 class="card_descr_t lead my-3">04.02.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 11, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_j/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_b} alt="Конференция"></img>
      </div>
      <div class="card_content_t ">
      <h5 class="card_title_t my-1">On November 28, a laboratory seminar will be held on the topic «Probabilistic forecasting of epidemics in the regions of the Russian Federation based on a conditional generative-adversarial network and a Bayesian approach»</h5>
      <h5 class="card_descr_t lead my-1">20.11.2024 </h5>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 12, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_i/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_a} alt="Конференция"></img>
      </div>
      <div class="card_content_t my-1">
      <h5 class="card_title_t my-3">On November 14, the laboratory will hold a seminar on the topic «Modeling of acute and chronic infections»</h5>
      <h5 class="card_descr_t lead my-4">07.11.2024 </h5>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 13, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_h/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">On September 26, the laboratory will hold a seminar on the topic «Problems of obtaining an accurate quantitative assessment of accumulated activity in tumor foci during the examination by the method of SPECT/CT»</h5>
    <p class="card_descr_t lead my-1">17.09.2024</p>
    </div>
  </article>
  </a>
</li>
</ul>,eventKey: "A2",eventKey: "all"},
      {id: 14, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_g/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-2">On September 12, a laboratory seminar will be held on the topic «Features of using physically informed neural networks to solve problems of modeling the motion of an incompressible fluid»</h5>
    <p class="card_descr_t lead my-2">11.09.2024</p>
    </div>
  </article>
  </a>
</li>
</ul>,eventKey: "A2",eventKey: "all"},
      {id: 15, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_f/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Seminar"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-2">On August 29, the laboratory will hold a seminar on the topic «The Gelfand-Levitan method in coefficient inverse problems»</h5>
        <p class="card_descr_t lead my-4">23.08.2024</p>
        </div>
      </article>
      </a>
    </li>
  </ul>,eventKey: "A2",eventKey: "all"},
      {id: 16, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_e/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Seminar"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-3">On August 15, the laboratory will hold a seminar on the topic «Recommendation system for microfinance organizations»</h5>
        <p class="card_descr_t lead my-3">31.07.2024</p>
        </div>
      </article>
      </a>
    </li>
  </ul>,eventKey: "A2",eventKey: "all"},
    {id: 17, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_d/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_a} alt="Seminar"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t my-1">On August 1, a laboratory seminar will be held on the topic «A.N. Tikhonov's regularization method for solving the problem of determining the initial condition in a parabolic equation»</h5>
      <p class="card_descr_t lead my-1">31.07.2024</p>
      </div>
    </article>
    </a>
  </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 18, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_c/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Seminar"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-1">On July 18, the laboratory will hold a seminar on the topic "Semi-controlled segmentation of medical images: An overview"</h5>
        <p class="card_descr_t lead my-3">10.07.2024</p>
        </div>
      </article>
      </a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 19, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_b/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">On July 4, a laboratory seminar will be held on the topic "Application of PINN in the SIR model of the middle field game"</h5>
    <p class="my-3 card_descr_t lead">21.06.2024</p>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 20, name: <ul class="cards_t"><li class="cards_item_t">
      <a href="/Sem_a/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Seminar"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">On June 20, the laboratory will hold a seminar on "Reasoning about methods of checking time series for stationarity"</h5>
        <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
        </div>
      </article>
      </a>
    </li></ul>,eventKey: "A2",eventKey: "all"}
    ]



    const postsQ1 = [
      {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Life_e/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={life_e} alt="Конференция"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t my-1">The International Congress on Analysis, Applications and Computing (ISAAC-2025) is taking place from July 21 to 25, with 5 laboratory staff participating at once</h5>
  <h5 class="card_descr_t lead my-1">21.07.2025 </h5>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Life_d/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={life_d} alt="Конференция"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t my-3">O. Krivorotko will take part in the meetings of the IV Congress of Young Scientists</h5>
  <h5 class="card_descr_t lead my-3">17.10.2024 </h5>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
      {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Life_c/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={life_c} alt="Scientific life"></img>
         </div>
         <div class="card_content_t">
         <h5 class="card_title_t my-3">On August 30, a meeting of the Siberian Association of Neurosurgeons will be held at the Neurosurgery Center</h5>
         <p class="card_descr_t lead my-3">26.08.2024</p>
         </div>
      </article>
      </a>
    </li>
    </ul>,eventKey: "A2",eventKey: "all"},
      {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Life_b/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={life_b} alt="Scientific life"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-3">The action "Science is near" is taking place in the Novosibirsk region</h5>
        <p class="card_descr_t lead my-3">10.07.2024</p>
        </div>
      </article>
      </a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
    {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Life_a/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={life_a} alt="Scientific life"></img>
      </div>
      <div class="card_content_t">
      <h5 class="my-1 card_title_t">NSU scientists are developing a model for predicting the development of complications of infectious diseases</h5>
      <p class="my-3 card_descr_t lead">08.07.2024</p>
      </div>
    </article>
    </a>
  </li></ul>,eventKey: "A2",eventKey: "all"}


      
     

    ]  
const postsall  = [ 
  {id: 1, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Sem_t_En" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article class="card_t">
              <div class="card_image_t">
                <img src={sem_b} alt="Конференция"></img>
              </div>
              <div class="card_content_t my-3">
              <h5 class="card_title_t my-3">On July 3, the laboratory will hold a seminar on «Simplification of Neverov»</h5>
              <h5 class="card_descr_t lead my-3">02.07.2025 </h5>
              </div>
            </article></a>
          </li></ul>,eventKey: "A2",eventKey: "all"},
            {id: 2, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Sem_s_En" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article class="card_t">
              <div class="card_image_t">
                <img src={sem_a} alt="Конференция"></img>
              </div>
              <div class="card_content_t">
              <h5 class="card_title_t my-1">On June 19, the laboratory will hold a seminar on «Comparative analysis of approaches to solving the inverse problem of image reconstruction in emission medical tomography»</h5>
              <h5 class="card_descr_t lead">17.06.2025 </h5>
              </div>
            </article></a>
          </li></ul>,eventKey: "A2",eventKey: "all"},
            {id: 3, name: <ul class="cards_t "><li class="cards_item_t">
              <a href="/Sem_r_En" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article class="card_t">
              <div class="card_image_t">
                <img src={sem_b} alt="Конференция"></img>
              </div>
              <div class="card_content_t my-3">
              <h5 class="card_title_t my-3">On May 20, a laboratory workshop will be held, at which 3 reports are planned</h5>
              <h5 class="card_descr_t lead my-3">19.05.2025 </h5>
              </div>
            </article></a>
          </li></ul>,eventKey: "A2",eventKey: "all"},
   {id: 4, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_q/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On May 15, the laboratory will hold a seminar on «Prediction of the spread of socially significant diseases based on deep learning methods in case of insufficient data»</h5>
        <h5 class="card_descr_t lead my-1">14.05.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 5, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_p/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On April 17, the laboratory will hold a seminar on «Supercomputer analysis and regularization of tasks of identification and management of social processes»</h5>
        <h5 class="card_descr_t lead my-3">11.04.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 6, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_o/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On April 3, the laboratory will hold a seminar on «Why living things are poorly suited for differential and probabilistic modeling»</h5>
        <h5 class="card_descr_t lead my-3">29.03.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 7, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_n/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_b} alt="Конференция"></img>
        </div>
        <div class="card_content_t my-1">
        <h5 class="card_title_t my-3">On March 20, the laboratory will hold a seminar on «Semi-supervised classification: Basic Ideas»</h5>
        <h5 class="card_descr_t lead my-4">19.03.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 8, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_m/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-1">On March 6, a joint meeting of the seminar "Applied Statistics" and the seminar of the Laboratory of AI technologies for mathematical modeling of biological, socio-economic and environmental processes will be held</h5>
        <h5 class="card_descr_t lead my-1">04.03.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},

       {id: 9, name: <ul class="cards_t "><li class="cards_item_t">
        <a href="/Sem_l/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_c} alt="Конференция"></img>
        </div>
        <div class="card_content_t ">
        <h5 class="card_title_t my-3">On February 27, the laboratory will hold a seminar on «A new method for correcting the parameters of dynamic epidemiological models»</h5>
        <h5 class="card_descr_t lead my-3">17.02.2025 </h5>
        </div>
      </article></a>
      </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 10, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_k/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_c} alt="Конференция"></img>
    </div>
    <div class="card_content_t ">
    <h5 class="card_title_t my-1">On February 6, the laboratory will hold a seminar on «Mathematical modeling of epidemic spread taking into account social, economic and environmental processes»</h5>
    <h5 class="card_descr_t lead my-3">04.02.2025 </h5>
    </div>
  </article></a>
  </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 11, name: <ul class="cards_t "><li class="cards_item_t">
      <a href="/Sem_j/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_b} alt="Конференция"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t my-1">On November 28, a laboratory seminar will be held on the topic «Probabilistic forecasting of epidemics in the regions of the Russian Federation based on a conditional generative-adversarial network and a Bayesian approach»</h5>
      <h5 class="card_descr_t lead my-1">20.11.2024 </h5>
      </div>
    </article></a>
    </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 12, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_i/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={sem_a} alt="Конференция"></img>
  </div>
  <div class="card_content_t my-1">
  <h5 class="card_title_t my-3">On November 14, the laboratory will hold a seminar on the topic «Modeling of acute and chronic infections»</h5>
  <h5 class="card_descr_t lead my-4">07.11.2024 </h5>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 13, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Life_d/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={life_d} alt="Конференция"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t my-3">O. Krivorotko will take part in the meetings of the IV Congress of Young Scientists</h5>
  <h5 class="card_descr_t lead my-3">17.10.2024 </h5>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
{id: 14, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_h/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={conf_e} alt="Конференция"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t my-1">Laboratory staff will take part in the International Conference POSTGENOM’2024, at which the head of the laboratory O. Krivorotko will present the results of the work</h5>
  <p class="card_descr_t lead my-1">17.10.2024</p>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
{id: 15, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_g/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={conf_c} alt="Конференция"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t my-1">Laboratory staff will take part in the XVI conference «Mathematical Models and Numerical methods in Biology and Medicine»</h5>
  <p class="card_descr_t lead my-3">17.10.2024</p>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
{id: 16, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_f/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={conf_d} alt="Конференция"></img>
  </div>
  <div class="card_content_t my-1">
  <h5 class="card_title_t my-3">Laboratory staff will take part in the conference «Quasi-linear equations, inverse problems and their applications»</h5>
  <p class="card_descr_t lead my-4">17.10.2024</p>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
{id: 17, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_e/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_d} alt="Конференция"></img>
      </div>
      <div class="card_content_t my-1">
      <h5 class="card_title_t my-3">Laboratory staff will take part in the conference «Inverse incorrect tasks and machine learning»</h5>
      <p class=" card_descr_t lead my-4">17.10.2024</p>
      </div>
    </article></a>
  </li></ul>,eventKey: "A2",eventKey: "all"},
{id: 18, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_d/En" style={{ textDecoration: 'none', color: 'inherit' }}>
<article class="card_t">
  <div class="card_image_t">
    <img src={conf_d} alt="Конференция"></img>
  </div>
  <div class="card_content_t">
  <h5 class="card_title_t my-2">Laboratory staff will take part in the conference «Industrial Mathematics: from mathematical methods to Industrial technologies»</h5>
  <p class="card_descr_t lead my-4">17.10.2024</p>
  </div>
</article></a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 19, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_b/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_b} alt="Conference"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-2 card_title_t">Laboratory staff will take part in the conference "Mathematics in Medicine"</h5>
    <h5 class="my-4 card_descr_t lead"></h5>
    <h5 class="my-4 card_descr_t lead">24.09.2024 </h5>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 20, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_h/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">On September 26, the laboratory will hold a seminar on the topic «Problems of obtaining an accurate quantitative assessment of accumulated activity in tumor foci during the examination by the method of SPECT/CT»</h5>
    <p class="card_descr_t lead my-1">17.09.2024</p>
    </div>
  </article>
  </a>
</li>
</ul>,eventKey: "A2",eventKey: "all"},
  {id: 21, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_g/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t my-1">
    <h5 class="card_title_t my-2">On September 12, a laboratory seminar will be held on the topic «Features of using physically informed neural networks to solve problems of modeling the motion of an incompressible fluid»</h5>
    <p class="card_descr_t lead my-2">11.09.2024</p>
    </div>
  </article>
  </a>
</li>
</ul>,eventKey: "A2",eventKey: "all"},
  {id: 22, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Life_c/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_c} alt="Seminar"></img>
     </div>
     <div class="card_content_t">
     <h5 class="card_title_t my-3">On August 30, a meeting of the Siberian Association of Neurosurgeons will be held at the Neurosurgery Center</h5>
     <p class="card_descr_t lead my-3">26.08.2024</p>
     </div>
  </article>
  </a>
</li>
</ul>,eventKey: "A2",eventKey: "all"},
  {id: 23, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_f/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">On August 29, the laboratory will hold a seminar on the topic «The Gelfand-Levitan method in coefficient inverse problems»</h5>
    <p class="card_descr_t lead my-3">23.08.2024</p>

    </div>
  </article>
  </a>
</li>
</ul>,eventKey: "A2",eventKey: "all"},
  {id: 24, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Conf_c/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={conf_c} alt="Conference"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-3">Laboratory staff will take part in the IV conference of mathematical centers of Russia</h5>
    <p class="card_descr_t lead my-3">08.08.2024</p>
    </div>
  </article>
  </a>
</li>
  </ul>,eventKey: "A2",eventKey: "all"},
  {id: 25, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_e/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Seminar"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t my-3">On August 15, the laboratory will hold a seminar on the topic «Recommendation system for microfinance organizations»</h5>
        <p class="card_descr_t lead my-3">31.07.2024</p>
        </div>
      </article>
      </a>
    </li>
  </ul>,eventKey: "A2",eventKey: "all"},
    {id: 26, name: <ul class="cards_t "><li class="cards_item_t">
    <a href="/Sem_d/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={sem_a} alt="Seminar"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t my-1">On August 1, a laboratory seminar will be held on the topic «A.N. Tikhonov's regularization method for solving the problem of determining the initial condition in a parabolic equation»</h5>
      <p class="card_descr_t lead my-1">31.07.2024</p>
      </div>
    </article>
    </a>
  </li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 27, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Life_b/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_b} alt="Life"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t my-1">The action "Science is near" is taking place in the Novosibirsk region</h5>
    <p class="card_descr_t lead my-3"></p>
    <p class="card_descr_t lead my-4">10.07.2024</p>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 28, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_c/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-1 card_title_t ">On July 18, the laboratory will hold a seminar on the topic "Semi-controlled segmentation of medical images: An overview"</h5>
    <p class="card_descr_t lead my-2">10.07.2024</p>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 29, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Life_a/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={life_a} alt="Life"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-2 card_title_t">NSU scientists are developing a model for predicting the development of complications of infectious diseases</h5>
    <p class="my-3 card_descr_t lead">08.07.2024</p>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 30, name: <ul class="cards_t "><li class="cards_item_t">
  <a href="/Sem_b/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="my-2 card_title_t">On July 4, a laboratory seminar will be held on the topic "Application of PINN in the SIR model of the middle field game"</h5>
    <p class="my-3 card_descr_t lead">21.06.2024</p>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A2",eventKey: "all"},
  {id: 31, name: <ul class="cards_t ">
  <li class="cards_item_t">
  <a href="/Conf_a/En" style={{ textDecoration: 'none', color: 'inherit' }}>
    <article class="card_t">
      <div class="card_image_t">
        <img src={conf_a} alt="Conference"></img>
      </div>
      <div class="card_content_t">
      <h5 class="card_title_t">14th International Multi-Conference "Bioinformatics of genome regulation and Structure/Systems Biology", August 5-10, 2024</h5>
      <h5 class="my-1 card_descr_t lead">13.06.2024</h5>
      </div>
    </article>
    </a>
  </li></ul>,eventKey: "A1",eventKey: "all"},
  {id: 32, name: <ul class="cards_t"><li class="cards_item_t">
  <a href="/Sem_a/En" style={{ textDecoration: 'none', color: 'inherit' }}>
  <article class="card_t">
    <div class="card_image_t">
      <img src={sem_a} alt="Seminar"></img>
    </div>
    <div class="card_content_t">
    <h5 class="card_title_t">On June 20, the laboratory will hold a seminar on "Reasoning about methods of checking time series for stationarity"</h5>
    <h5 class="my-3 card_descr_t lead">13.06.2024</h5>
    </div>
  </article>
  </a>
</li></ul>,eventKey: "A1",eventKey: "all"},
  

  
  
]  

    const items = [
        {id:1, list:postsA1, eventKey:"A1"},
        {id:2, list:postsA2, eventKey:"A2"},
        {id:3, list:postsQ1, eventKey:"Q1"},
        {id:4, list:postsall, eventKey:"all"}
    ]
    return (
          <>
      <NaviBarv2_En />
      <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h4 className="mx-5 text-secondary">News</h4></div>
      <hr/>
    
  </Container>
  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="all" >

      <Nav variant="pills" defaultActiveKey="/home" >
        <Nav.Item key={1}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="left" className="text-black">
               Quantity: 8 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  className="shadow3" size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
      <Nav.Link  eventKey="A1">Conferences</Nav.Link>
        </Button>
     
        </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={2}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 20 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="A2">Seminars</Nav.Link>
          </Button>
            
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={3}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 5 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  size="sm" variant="outline-info" className="mx-1 shadow3">
          <Nav.Link eventKey="Q1">Scientific life</Nav.Link>
          </Button>
          
          </OverlayTrigger>
        </Nav.Item>
        
        <Nav.Item key={4}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 32 </div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="all">All</Nav.Link>
          </Button>
           
          </OverlayTrigger>
        </Nav.Item>
      </Nav>

      <Tab.Content>
      {items.map((item) =>
          <NewsData key={item.id} item = {item}/>
      )}
      </Tab.Content>
  </Tab.Container>
      </Container>
      <Footer_En />
      </>
      
      )}