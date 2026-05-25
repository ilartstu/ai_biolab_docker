import React, {useState} from "react";
import axios from "axios";
import NaviBarv2 from './Components/NaviBarv2';
import {Container, Row, Col, Card, Stack, Popover, OverlayTrigger, Image, Button } from 'react-bootstrap';
import { motion } from "framer-motion"
import CollapseParamCSV from './Components/CollapseParamCSV'
import CollapseParamInvitro from './Components/CollapseParamInvitro'
import CollapseParamOmsk from './Components/CollapseParamOmsk'
import CollapseParamAltay from './Components/CollapseParamAltay'
import CollapseParamNSKsmall from './Components/CollapseParamNSKsmall'
import CollapseParamAltaysmoothed from './Components/CollapseParamAltaysmoothed'
import CollapseMSDeath_data from './Components/CollapseMSDeath_data'
import RussiaG from "./images/gerbs/Russia_gerb.png"
import MoscowG from "./images/gerbs/Moscow_gerb.png"
import SpbG from "./images/gerbs/Spb_gerb.png"
import AltayG from "./images/gerbs/Altay_region_gerb.png"
import OmskG from "./images/gerbs/Omsk_region_gerb.png"
import HSKG from "./images/gerbs/Novosibirsk_region_gerb.png"
import {BsDownload} from 'react-icons/bs'


export function Data (){
  const [open, setOpen] = useState(false);
  const variants2 = {
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

  return(    
    <>
    <NaviBarv2 />
    <Container className="my-3"   style={{height: "120%" }}>


      <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3 my-3">
        <Row>
          <Col xs={8} md={10} lg={10}>
            <div ><h4 className="mx-5 text-secondary">������ �� ������</h4></div>
          </Col>
          <Col xs={4} md={2} lg={2}>
            <div>
              <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
              src={RussiaG}
              rounded
              fluid/>
            </div>
          </Col>
        </Row>
      </motion.div>
      <Row className="mx-5 my-3">
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/rus-data.csv" style={{'textDecoration': 'none'}}  className="">
              <Card.Body className="datacardcol">
                <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  ������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamCSV/></Card.Footer>
            </Card>
          </motion.div>
        </Col>
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={4} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/rus-invitro.csv" style={{'textDecoration': 'none'}}>
              <Card.Body className="datacardcol">
              <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  IgG-��������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamInvitro /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
      </Row>

      <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3 my-3"><hr />
        <Row>
          <Col xs={8} md={10} lg={10}>
            <div ><h4 className="mx-5 text-secondary">������ �� ������������� �������</h4></div>
          </Col>
          <Col xs={4} md={2} lg={2}>
            <div>
              <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
              src={HSKG}
              rounded
              fluid/>
            </div>
          </Col>
        </Row>
      </motion.div>
      <Row className="mx-5 my-3">
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/novosibirsk-region-data.csv" style={{'textDecoration': 'none'}}  className="">
              <Card.Body className="datacardcol">
                <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  ������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamCSV/></Card.Footer>
            </Card>
          </motion.div>
        </Col>
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={3} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/novosibirsk-region-data-small.csv" style={{'textDecoration': 'none'}}  className="">
              <Card.Body className="datacardcol">
              <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  �����������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamNSKsmall /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={4} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/novosibirsk-invitro.csv" style={{'textDecoration': 'none'}}>
              <Card.Body className="datacardcol">
              <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  IgG-��������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamInvitro /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={4} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/new_deaths_Nsk_form_burial_statistics.csv" style={{'textDecoration': 'none'}}>
              <Card.Body className="datacardcol">
              <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  �����������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer> <CollapseMSDeath_data /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
      </Row>


      <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3 my-3"><hr />
        <Row>
          <Col xs={8} md={10} lg={10}>
            <div ><h4 className="mx-5 text-secondary">������ �� �������</h4></div>
          </Col>
          <Col xs={4} md={2} lg={2}>
            <div>
              <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
              src={MoscowG}
              rounded
              fluid/>
            </div>
          </Col>
        </Row>
      </motion.div>
      <Row className="mx-5 my-3">
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/mos_data.csv" style={{'textDecoration': 'none'}}  className="">
              <Card.Body className="datacardcol">
                <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  ������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamCSV/></Card.Footer>
            </Card>
          </motion.div>
        </Col>
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={4} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/mos-invitro.csv" style={{'textDecoration': 'none'}}>
              <Card.Body className="datacardcol">
              <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  IgG-��������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamInvitro /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
      </Row>



      <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3 my-3"><hr />
        <Row>
          <Col xs={8} md={10} lg={10}>
            <div ><h4 className="mx-5 text-secondary">������ �� �����-����������</h4></div>
          </Col>
          <Col xs={4} md={2} lg={2}>
            <div>
              <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
              src={SpbG}
              rounded
              fluid/>
            </div>
          </Col>
        </Row>
      </motion.div>
      <Row className="mx-5 my-3">
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/spb_data.csv" style={{'textDecoration': 'none'}}  className="">
              <Card.Body className="datacardcol">
                <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  ������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamCSV/></Card.Footer>
            </Card>
          </motion.div>
        </Col>
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={4} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1">
              <a href="https://ai-biolab.ru/data/spb-invitro.csv" style={{'textDecoration': 'none'}}>
              <Card.Body className="datacardcol">
              <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  IgG-��������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamInvitro /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
      </Row>



      <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3"><hr />
        <Row>
          <Col xs={8} md={10} lg={10}>
            <div ><h4 className="mx-5 text-secondary">������ �� ������ �������</h4></div>
          </Col>
          <Col xs={4} md={2} lg={2}>
          <div className="">
            <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
            src={OmskG}
            rounded
            fluid/>
         </div>
         </Col>
        </Row>
      </motion.div>
      <Row className="mx-5 my-3">
        <Col xs= {12} md={6} lg={3}>
          <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            <Card className="shadow1 my-1 ">
              <a href="https://ai-biolab.ru/data/omsk-region-data.csv" style={{'textDecoration': 'none'}}  >
              <Card.Body className="datacardcol">
                <Card.Title><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  ������</h5></Card.Title>
              </Card.Body></a>
              <Card.Footer><CollapseParamOmsk /></Card.Footer>
            </Card>
          </motion.div>
        </Col>
      </Row>
     
     
     
      <motion.div initial="hidden" custom={2} variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3"><hr />
         <Row>
         <Col xs={8} md={10} lg={10}>
          <div><h4 className="mx-5 text-secondary">������ �� ���������� ����</h4></div>
         </Col>
         <Col xs={4} md={2} lg={2}>
           <div className="">
           <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
           src={AltayG}
           rounded
           fluid
           />
           </div>
         </Col>
         </Row>
      </motion.div>
      <Row className="mx-5 my-3">
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
          <Card className="shadow1 my-1">
        <a href="https://ai-biolab.ru/data/altay-region-data.csv" style={{'textDecoration': 'none'}} >
        <Card.Body className="datacardcol">
<Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  ������</h5></Card.Title>
        </Card.Body></a>
        <Card.Footer><CollapseParamAltay /></Card.Footer>
      </Card></motion.div></Col>
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={3}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1">
      <a href="https://ai-biolab.ru/data/altay-region-data-smoothed.csv" style={{'textDecoration': 'none'}} >
        <Card.Body className="datacardcol">
<Card.Title><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  IgG-��������</h5></Card.Title>
        </Card.Body></a>
        <Card.Footer><CollapseParamAltaysmoothed /></Card.Footer>
      </Card></motion.div></Col>
     </Row>

     <motion.div initial="hidden"
          custom={2}
         variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-auto my-5">
         </motion.div>
      </Container>

    </>
  )
}
