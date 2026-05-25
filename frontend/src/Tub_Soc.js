import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import NaviBarv2 from './Components/NaviBarv2';
import Footer from './Components/Footer'
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import { motion } from "framer-motion"
import StaticTubDataSoc from './Components/StaticTubDataSoc'
import StaticTubData from './Components/StaticTubData'

const variants = {
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2}
  }),
  hidden: {
    opacity: 0,
    y: 30,
 },
}

export function Tub_Soc(){

  const regions = [
    {id: 1, hr: "https://server.covid19-modeling.ru/api/csvSocTub/novosibirsk", eventKey: "novosibirsk" },

    {id: 2, hr: "https://server.covid19-modeling.ru/api/csvSocTub/altay", eventKey: "altay" },
 
     {id: 3, hr: "https://server.covid19-modeling.ru/api/csvSocTub/omsk", eventKey: "omsk" },

    ]



  return (
  <>
  <NaviBarv2 />
  <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    <motion.h3 initial="hidden"
       custom={1}
      variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}} className=" my-3 text-secondary">
      <div ><h4 className="mx-5 text-secondary">Туберкулёз</h4></div>
      <hr/>
    </motion.h3>
  </Container>
  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="novosibirsk" >

      <Nav variant="pills" defaultActiveKey="/home" >
      <Nav.Item key={1}>
  <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
          <div align="start" className="text-black">
            Субъект Российской Федерации. Входит в состав Сибирского федерального округа. Административный центр — город Новосибирск.
          </div>
          <div>Население: 2 779 375 ч.</div>
          <div>Площадь: 177 756 км²</div>
          <div>Плотность: 15,64 чел./км²</div>
        </Popover.Body>
      </Popover>
    }>
    <motion.div initial="hidden" custom={1} variants={variants} whileInView="visible" viewport={{ amount: 0.1, once: true }}>
      <Button className="shadow3" size="sm" variant="outline-info" style={{ color: "#FFFFFF" }}>
        <Nav.Link eventKey="novosibirsk">Новосибирская область</Nav.Link>

      </Button>
    </motion.div>
  </OverlayTrigger>
</Nav.Item>

<Nav.Item key={2}>
  <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
          <div align="start" className="text-black">
            Субъект Российской Федерации на юго-западе Сибири, входит в состав Сибирского федерального округа.
          </div>
          <div>Население: 1 879 548 ч.</div>
          <div>Площадь: 141 140 км²</div>
          <div>Плотность: 13,32 чел./км²</div>
        </Popover.Body>
      </Popover>
    }>
    <motion.div initial="hidden" custom={2} variants={variants} whileInView="visible" viewport={{ amount: 0.2, once: true }}>
      <Button size="sm" variant="outline-info" className="mx-1 shadow3">
        <Nav.Link eventKey="omsk">Омская область</Nav.Link>
      </Button>
    </motion.div>
  </OverlayTrigger>
</Nav.Item>

<Nav.Item key={3}>
  <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
          <div align="start" className="text-black">
            Субъект Российской Федерации. Входит в Сибирский федеральный округ, является частью Западно-Сибирского экономического района.
          </div>
          <div>Население: 2 268 179 ч.</div>
          <div>Площадь: 167 996 км²</div>
          <div>Плотность: 13,5 чел./км²</div>
        </Popover.Body>
      </Popover>
    }>
    <motion.div initial="hidden" custom={3} variants={variants} whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <Button size="sm" variant="outline-info" className="mx-1 shadow3">
        <Nav.Link eventKey="altay">Алтайский край</Nav.Link>
      </Button>
    </motion.div>
  </OverlayTrigger>
</Nav.Item>
      </Nav>

    <Tab.Content>
      {regions.map((region) =>
          <StaticTubDataSoc key={region.id} region = {region}/>
       )
      }
      </Tab.Content>
  </Tab.Container>
</Container>
<Footer />

     </>
   )
}