import React from "react";
import {Container, Card, Row, Button, CarouselItem, CarouselCaption } from 'react-bootstrap'
import { motion } from "framer-motion"
import Footer_En from './Components/Footer_En'
import NaviBarv2_En from './Components/NaviBarv2_En'
import sem_a from "./images/news/sem_a.PNG"
import sem_b from "./images/news/sem_b.PNG"



const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 100,
 },
}

const itemAnimation = {
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    x: -100,
 },
}

export function Sem_Compl_En() {


  return(
      <>
      <NaviBarv2_En />
        <Container >
        <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Archival seminars</h4> </Card.Title>
          </Card>
          </motion.div>
          <ul class="cards_t">
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_b} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On November 28, a laboratory seminar will be held on the topic «Probabilistic forecasting of epidemics in the regions of the Russian Federation based on a conditional generative-adversarial network and a Bayesian approach»</h5>
                <p class="card_descr_t">07.01.2025</p>
                <span class="card_btn_t "><a href="/Sem_j/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On November 14, the laboratory will hold a seminar on the topic «Modeling of acute and chronic infections»</h5>
                <p class="card_descr_t">15.11.2024</p>
                <span class="card_btn_t "><a href="/Sem_i/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Seminar"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On September 26, the laboratory will hold a seminar on the topic «Problems of obtaining an accurate quantitative assessment of accumulated activity in tumor foci during the examination by the method of SPECT/CT»</h5>
                <p class="card_descr_t">27.09.2024</p>
                <span class="card_btn_t "><a href="/Sem_h/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
            </ul>

            <ul class="cards_t ">
            <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Seminar"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On September 12, a laboratory seminar will be held on the topic «Features of using physically informed neural networks to solve problems of modeling the motion of an incompressible fluid»</h5>
                <p class="card_descr_t">11.09.2024</p>
                <span class="card_btn_t "><a href="/Sem_g/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
            <li class="cards_item_t">
      <article class="card_t">
        <div class="card_image_t">
          <img src={sem_a} alt="Семинар"></img>
        </div>
        <div class="card_content_t">
        <h5 class="card_title_t">On August 29, the laboratory will hold a seminar on the topic «The Gelfand-Levitan method in coefficient inverse problems»</h5>
        <p class="card_descr_t my-3">23.08.2024</p>
        <span class="card_btn_t my-1"><a href="/Sem_f/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
        </div>
      </article>
    </li>
            <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On August 15, the laboratory will hold a seminar on the topic «Recommendation system for microfinance organizations»</h5>
                <p class="my-3 card_descr_t">15.08.2024</p>
                <span class="my-1 card_btn_t "><a href="/Sem_e/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          </ul>

          <ul class="cards_t ">
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On August 1, a laboratory seminar will be held on the topic «A.N. Tikhonov's regularization method for solving the problem of determining the initial condition in a parabolic equation»</h5>
                <p class="my-3 card_descr_t">02.08.2024</p>
                <span class="my-1 card_btn_t "><a href="/Sem_d/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On July 18, the laboratory will hold a seminar on the topic "Semi-controlled segmentation of medical images: An overview"</h5>
                <p class="my-3 card_descr_t">19.07.2024</p>
                <span class="my-1 card_btn_t "><a href="/Sem_c/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On July 4, a laboratory seminar will be held on the topic "Application of PINN in the SIR model of the middle field game"</h5>
                <p class="my-3 card_descr_t">05.07.2024</p>
                <span class="my-1 card_btn_t "><a href="/Sem_b/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
          
       </ul>
       <ul class="cards_t ">
       <li class="cards_item_t">
              <article class="card_t">
                <div class="card_image_t">
                  <img src={sem_a} alt="Семинар"></img>
                </div>
                <div class="card_content_t">
                <h5 class="card_title_t">On June 20, the laboratory will hold a seminar on "Reasoning about methods of checking time series for stationarity"</h5>
                <p class="card_descr_t">13.06.2024</p>
                <span class="card_btn_t "><a href="/Sem_a/En" class="lead" style={{'textDecoration': 'none'}}>Read completely > </a></span>
                </div>
              </article>
            </li>
       </ul>
            
      </Container>
      <Footer_En />
    </>
          
)
}