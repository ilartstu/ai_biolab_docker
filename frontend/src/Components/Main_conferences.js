import React from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';
import MConferenseItem from './ConferenseItem'
import { motion } from "framer-motion"
import Question from ".././images/conf/Question.png"
import BGRS_SB_2024 from ".././images/conf/BGRS_SB_2024.png"
const Main_conferences = () => {
  const confs = [
    {id: 1, name: 'Обратные некорректные задачи и машинное обучение', image: Question, hreff: "https://kaznpu.kz/ru/6589/notice/", width: '6rem', height: '6rem', rounded: true},
    {id: 2, name: 'BGRS/SB-2024', image:  BGRS_SB_2024, hreff: "https://bgrssb.icgbio.ru/2024/ru/", width: '6rem' , height: '6rem', rounded: false},
  
  ]

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

    return (
      <>
      <Container className="my-3 mx-2">
        <Row className="justify-content-md-center" style={{
                width: "100%" }}>
              {confs.map((conf,index) =>
                  <MConferenseItem initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {conf.id} conf = {conf}/>
              )}
        </Row>
      </Container>
      <motion.div  initial="hidden"
         custom={3}
        variants={variants} whileInView="visible" viewport={{amount: 0.5, once: true}}>
      <Container className="my-2">
        <Row className="justify-xs-center">
        <Col xs= {12} md={6} className="justify-xs-center">
        <a href="">
        <Card border="light"  className="mx-auto my-2 align-center shadow1" style={{ minWidth: '20rem' }} >
        <Container  className=" text-center" style={{height: '9rem'}}>
        <Image variant="top" className="my-5" style={{ width: '6rem' }, {height: '6rem'}}
        src={Question}
        rounded
        fluid
        />
        </Container>
          <Card.Body>
              <Card.Title className="text-center"><a href="" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Eurasian scientific conference “Inverse and Ill-Posed Problems in Natural Science and Artificial Intelligence"</a></Card.Title>
          </Card.Body>
        </Card>
        </a>
        </Col >
        <Col xs= {12} md={6}>
        <a href="">
        <Card border="light" className="mx-auto my-2 shadow1" style={{ minWidth: '20rem' }}>
        <Container  className=" text-center" style={{height: '9rem'}}>
        <Image variant="top" className="my-5" style={{ width: '6rem' }, {height: '6rem'}}
        src={Question}
        rounded
        fluid
        />
        </Container>
          <Card.Body>
            <Card.Title className="text-center"><a hreff="" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">QIPA-2024 </a></Card.Title>
          </Card.Body>
        </Card>
        </a>
        </Col>
       </Row>
      </Container>
      </motion.div>
      </>
    )}

export default Main_conferences;
