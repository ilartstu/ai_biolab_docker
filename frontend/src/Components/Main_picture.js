import React from "react";
import {Container, Card, Image, Col, Row, Button} from 'react-bootstrap';
import NaviBar from './NaviBar';
import { motion } from "framer-motion"
import back_1 from "../images/back_1.jpg"

const variants = {
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

const Main_picture = () => {
    return (
<Card
  border="light"
  style={{
    backgroundImage: `url(${back_1})`, 
    backgroundSize: 'cover', 
    height: '500px',
    backgroundPosition: 'center', 
  }}
>
      <NaviBar />
      <div align="left" className="my-auto mx-auto">
        <b>
        <motion.div initial="hidden"
          animate="visible" custom={1}
          variants={variants}>
          <h2 className="text-white mp_info"><b>Лаборатория ИИ-технологий математического моделирования</b></h2>
          <h2 className="text-white mp_info"><b>биологических, социально-экономических и экологических процессов</b></h2>
          </motion.div>
          </b>
          <Button href="/modeling" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
          <div style={{ fontSize: 16 }}><b>Моделирование</b></div>
        </Button>
        
      </div>
      <Container>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className=" my-3 support text-white" align="center"><i><b><h6>Проект поддержан Министерством науки и высшего образования РФ (проект FWNF-2024-0002) и Российским научным фондом (проект № 23-71-10068)</h6></b></i></motion.div>
      </Container>
    </Card>
    )
}

export default Main_picture;
