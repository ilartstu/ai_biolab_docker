import React from "react";
import {Container, Card, Image, Col, Row, Button} from 'react-bootstrap';
import NaviBar_En from './NaviBar_En';
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

const Main_picture_En = () => {
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
      <NaviBar_En />
      <div align="left" className="my-auto mx-auto">
        <b>
        <motion.div initial="hidden"
          animate="visible" custom={1}
          variants={variants}>
          <h2 className="text-white mp_info"><b>AI technologies for mathematical modeling of biological,</b></h2>
          <h2 className="text-white mp_info"><b>socio-economic and ecological processes</b></h2>
          </motion.div>
          </b>
          <Button href="/modeling/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
          <div style={{ fontSize: 16 }}><b>Modeling</b></div>
        </Button>
        
      </div>
      <Container>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="support text-white" align="center"><i><b><h6>The project is supported by the Ministry of Science and Higher Education of the Russian Federation (project FWNF-2024-0002) and the Russian Science Foundation (project № 23-71-10068)</h6></b></i></motion.div>
      </Container>
    </Card>
    )
}

export default Main_picture_En;
