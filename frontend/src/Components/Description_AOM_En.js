import React, {useState} from "react";
import {Container, Card, Image, Col, Row, Table, Modal, Button, Popover, OverlayTrigger, Stack} from 'react-bootstrap';
import fblok from "./../images/fblok.png"
import model from "./../images/model.png"
import sblok from "./../images/sblok.png"
import { motion } from "framer-motion"
import CovidDataFiles_En from './CovidDataFiles_En'
import CollapseParamCSV_En from './CollapseParamCSV_En'
import AltayG from ".././images/gerbs/Altay_region_gerb.png"
import OmskG from ".././images/gerbs/Omsk_region_gerb.png"
import HSKG from ".././images/gerbs/Novosibirsk_region_gerb.png"


import {BsFillPersonLinesFill} from 'react-icons/bs'

const Description_AOM_En = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const files = [
    {id: 1, name: 'Novosibirsk region', hr: 'https://ai-biolab.ru/data/novosibirsk-region-data.csv', img: HSKG },
    {id: 2, name: 'Omsk region', hr: 'https://ai-biolab.ru/data/omsk-region-data.csv', img: OmskG},
    {id: 3, name: 'Altai Territory', hr: 'https://ai-biolab.ru/data/altay-region-data.csv', img: AltayG},
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
      y: -100,
   },
  }

    return (
      <>
      <Row >
         <Col sm={12} xs={12} md={12} lg={6}>
         <motion.div  initial="hidden" custom={1}
           variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
         <Card className="border mx-3 my-1 shadow1">
           <Card.Header className="text-success">1. Population initiation</Card.Header>
           <Card.Body>
           <p align="justify"><small >Four contact structures are being formed, in which agents can be located depending on the age of 0-9,10-19, ..., 80+ years.</small></p>
           <Image
           src={fblok}
           rounded
           fluid
           onClick={handleShow1}
           />
           <Modal show={show1} onHide={handleClose1} animation={true}>
           <Image
           src={fblok}
           rounded
           fluid
           />
            </Modal>
           </Card.Body></Card> </motion.div>
           <motion.div  initial="hidden" custom={1}
             variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
           <Card className="border mx-3 my-1 shadow1">
             <Card.Header className="text-white bg-success">2. Infection</Card.Header>
             <Card.Body align="justify">
             <div><small> It is assumed that the virus is transmitted between agents connected by an edge of the graph. Infection in close contact is described by a piecewise constant parameter <i className="text-danger">{'\u03B2'}</i>.</small></div>
             <div className="my-3"><Image
             src={sblok}
             rounded
             fluid

             /></div>
                <div><small><div className="text-success">Example:</div> Households are filled in by agents according to statistical data on
           the average family size in the region.</small></div>
             </Card.Body></Card></motion.div>
             <motion.div  initial="hidden" custom={1}
               variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
             <Card className="border shadow1 my-1 mx-3">
               <Card.Header className="text-center text-white bg-success">Data</Card.Header>
                 <Card.Body align="center">
                 <Stack gap={3}>
                   {files.map((file) =>
                       <CovidDataFiles_En key = {file.id} file = {file}/>
                   )}
                    <CollapseParamCSV_En/>
                  </Stack>
                 </Card.Body>
               </Card></motion.div>
           </Col>
         <Col sm={12} xs={12} md={12}  lg={6}>
         <motion.div  initial="hidden" custom={1}
           variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
         <Card className="border my-1 mx-3 shadow1">
           <Card.Header className="text-white bg-success"><BsFillPersonLinesFill size={30}/>   Agent Parameters</Card.Header>
           <Card.Body align="left">
           <Row >
            <Col><div>Do not depend on time:</div>
            <small>
            <div>• age</div>
            <div>• floor</div>
            <div>• social status</div>
            <div>• disease progression</div></small></Col>
            <Col><div>Depend on the time:</div>
            <small>
            <div>• epid. status:</div>
            <div>𝑆, 𝐸, 𝐼, 𝑅, 𝐻, 𝐶, 𝐷, 𝐴, 𝑀<OverlayTrigger
               placement="bottom"
               overlay={
                 <Popover>
                   <Popover.Body>
                   <small className="text-success">
                     <div>S – susceptible to infection</div>
                     <div>E – infected non-contagious</div>
                     <div>𝐼 – infected</div>
                     <div>R – cured</div>
                     <div>H – hospitalized</div>
                     <div>C – patients in critical condition</div>
                     <div>D – the deceased</div>
                     <div>A - asymptomatic patients</div>
                     <div>M -  patients in mild form</div> </small>
                   </Popover.Body>
                 </Popover>
               }>
              <Button size="sm" variant="link" className="text-success">?</Button>
                </OverlayTrigger>
            </div>
            <div>• a chance to be tested</div>
            </small></Col>
          </Row>
          <div align="justify"><small>Depending on the age of the agents
          they contact each other in contact networks, which are fully connected graphs.</small></div>
           </Card.Body></Card></motion.div>
           <motion.div  initial="hidden" custom={1}
             variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
           <Card className="border shadow1 my-1 mx-3">
             <Card.Header className="text-success">3. Disease progression</Card.Header>
             <Card.Body>
             <Image

             src={model}
             rounded
             fluid
             onClick={handleShow}
             />
             <Modal show={show} onHide={handleClose} animation={true}>
             <Image

             src={model}
             rounded
             fluid
             />
              </Modal>
             </Card.Body></Card></motion.div>
             <motion.div  initial="hidden" custom={1}
               variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
             <Card className="border my-1 shadow1 mx-3">
               <Card.Header className="text-success bg-light">4. Agent Testing</Card.Header>
               <Card.Body align="justify">
               <div><small>It is conducted according to daily statistics on the number of tests performed in the region. The chance to be tested
for COVID-19<i>{'\u03C1'}</i> It depends on the epidemiological status of the agent and is determined during the solution of the inverse problem. 
Agents whose status is outlined in an orange frame can receive a positive result. The model assumes that the probability
of testing agents with symptoms is higher than in asymptomatic patients.</small></div>

               </Card.Body></Card></motion.div>
               <motion.div  initial="hidden" custom={1}
                 variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
               <Card className="border shadow1 my-1 mx-3">
                 <Card.Header className="text-white bg-success">5. Introduction of epidemic containment measures</Card.Header>
                 <Card.Body align="justify">
                   <div><small>In the model, it is possible to introduce quarantine measures for all contact layers, as well as for each one individually.
    This can be done in two ways: either by changing the value of the virus contagiousness parameter <i className="text-danger">{'\u03B2'}</i> (in the case of the introduction of a mandatory measure of wearing masks or social distancing), or by removing edges in the graphs of contact networks (in the case of self-isolation
    and remote work).</small></div>

                 </Card.Body></Card></motion.div>
           </Col>
       </Row>
      </>
    )
}

export default Description_AOM_En;
