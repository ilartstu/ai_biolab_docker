import React from "react";
import {Container, Card, Image, Col, Row, Table, Stack, OverlayTrigger, Popover} from 'react-bootstrap';
import sfblok from "./../images/sfblok.png"
import sfifblok from "./../images/sfifblok.png"
import firdblok from "./../images/firdblok.png"
import blokd from "./../images/blokd.png"
import { motion } from "framer-motion"
import {BsDownload} from 'react-icons/bs'


const Description_SEIRHCD_En = () => {
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
         <Card className="border shadow1 mx-3 my-1">
           <Card.Header className=" text-center text-success">The structure of the model</Card.Header>
           <Card.Body>
           <Image
           src={sfblok}
           rounded
           fluid
           />
           </Card.Body></Card></motion.div>
           <motion.div  initial="hidden" custom={1}
             variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
           <Card className="border shadow1 mx-3 my-1">
             <Card.Header className=" text-center text-white bg-success">Mathematical model</Card.Header>
             <Card.Body align="justify">
             <div><small>It is described by a system of 7 ordinary differential equations satisfying the law of mass balance:</small></div>
             <div className="my-3">
             <Image
             src={blokd}
             rounded
             fluid
             />
             </div>
             </Card.Body></Card></motion.div>
             <motion.div  initial="hidden" custom={1}
               variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
            <Card className="border shadow1 my-1 mx-3">
              <Card.Header className="text-center text-success bg-light">The algorithm of data assimilation</Card.Header>
              <Card.Body align="center">
              <Image
              src={sfifblok}
              rounded
              fluid
              />
              </Card.Body></Card></motion.div>
           </Col>
         <Col sm={12} xs={12} md={12}  lg={6}>
         <motion.div  initial="hidden" custom={1}
           variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
         <Card className="border shadow1 my-1 mx-3">
           <Card.Header className=" text-center text-white bg-success">Model Parameters</Card.Header>
           <Card.Body>
           <small>
           <Table striped bordered size="sm" responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Parameter</th>
        <th>Description</th>
        <th>The borders</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><i>{'\u03B1'}(t)</i></td>
        <td>Self-isolation index (<a href="https://yandex.ru/company/researches/2020/podomam">Yandex data</a>)</td>
        <td>(0, 5)</td>
      </tr>
      <tr>
        <td>2</td>
        <td><i>{'\u03B1'}<sub>E</sub>(t)</i></td>
        <td>Infection parameter between asymptomatic <i>E(t)</i> and receptive <i>S(t)</i> by population groups (<i>{'\u03B1'}<sub>E</sub>>>{'\u03B1'}<sub>I</sub></i>)</td>
        <td>(0, 1)</td>
      </tr>
      <tr>
        <td>3</td>
        <td><i>{'\u03B1'}<sub>I</sub>(t)</i></td>
        <td>The infection parameter between the infected <i>I(t)</i> and receptive <i>S(t)</i> by the population</td>
        <td>(0, 1)</td>
      </tr>
      <tr>
        <td>4</td>
        <td><i>{'\u03B2'}(t)</i></td>
        <td>The proportion of infected people with IgG antibodies to SARS-CoV-2</td>
        <td><a href="https://ai-biolab.ru/data/novosibirsk-invitro.csv">Invitro</a></td>
      </tr>
      <tr>
        <td>5</td>
        <td><i>{'\u03B5'}<sub>hc</sub>(t)</i></td>
        <td>Percentage of hospitalized cases <i>H(t)</i>, who need a ventilator connection</td>
        <td>(0, 1)</td>
      </tr>
      <tr>
        <td>6</td>
        <td><i>{'\u03BC'}(t)</i></td>
        <td>The proportion of deaths</td>
        <td>(0, 0.5)</td>
      </tr>
      <tr>
        <td>7</td>
        <td><i>{'\u03C4'}</i></td>
        <td>The latency period</td>
        <td>2 days</td>
      </tr>
      <tr>
        <td>8</td>
        <td><i>t<sub>inc</sub></i></td>
        <td>Duration of the incubation period</td>
        <td>2-14 days</td>
      </tr>
      <tr>
        <td>9</td>
        <td><i>t<sub>inf</sub></i></td>
        <td>Duration of the infection period</td>
        <td>2,5-14 days</td>
      </tr>
      <tr>
        <td>10</td>
        <td><i>t<sub>hosp</sub></i></td>
        <td>Duration of the hospitalization period</td>
        <td>4-5 days</td>
      </tr>
      <tr>
        <td>11</td>
        <td><i>t<sub>crit</sub></i></td>
        <td>Duration of ventilator use</td>
        <td>10-20 days</td>
      </tr>
      <tr>
        <td>12</td>
        <td><i>t<sub>imm</sub></i></td>
        <td>The average duration of humoral immunity after recovery</td>
        <td>180 days</td>
      </tr>
      </tbody>
      </Table>
      </small>
           </Card.Body></Card></motion.div>
           <motion.div  initial="hidden" custom={1}
             variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
           <Card className="border shadow1 my-1 mx-3">
             <Card.Header className="text-center text-success">The inverse problem</Card.Header>
             <Card.Body>
             <small>
             For each time interval (14 days) the task parameters are being clarified </small><div><i>q(t) = ({'\u03B1'}<sub>E</sub>(t),{'\u03B1'}<sub>I</sub>(t), {'\u03B5'}<sub>hc</sub>(t),{'\u03BC'}(t), E<sub>0</sub>, I<sub>0</sub>) </i>
             <small>
             by minimizing the target functionality </small></div>
             <Image
             src={firdblok}
             rounded
             fluid
             style={{ width: '3rem' }, {height: '3rem'}}
             />
             <small>
             the method of global optimization based on tree-like Parsen estimates <a href="https://optuna.org">OPTUNA</a>.
</small>
             </Card.Body></Card></motion.div>
             <motion.div  initial="hidden" custom={1}
               variants={variants} whileInView="visible" viewport={{amount: 0.1}}>
               <Card className="border shadow1 my-1 mx-3">
                 <Card.Header className="text-center text-white bg-success">Real data</Card.Header>
                 <Card.Body align="">
                  <Stack direction="horizontal" gap={3}>
                    <div className=""> <div><i>f<sub>k</sub></i> – the number of detected COVID-19 cases per day <i>k</i></div></div>
                    <OverlayTrigger
                     placement="left"
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                          <small className="text-muted">2 column - new_diagnoses</small>
                         </Popover.Body>
                       </Popover>
                     }
                     >
                    <div className=" ms-auto">2</div>
                    </OverlayTrigger>
                    <div className="vr" />
                      <a href="https://ai-biolab.ru/data/novosibirsk-region-data.csv" style={{'textDecoration': 'none'}}  className="">
                    <div className=""><BsDownload/></div></a>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" gap={3}>
                    <div className=""> <div><i>b<sub>k</sub></i> –the percentage of asymptomatic cases detected per day <i>k</i></div></div>
                    <OverlayTrigger
                     placement="left"
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                          <small className="text-muted">22 column - asympt_percent</small>
                         </Popover.Body>
                       </Popover>
                     }
                     >
                    <div className=" ms-auto">22</div>
                    </OverlayTrigger>
                    <div className="vr" />
                      <a href="https://ai-biolab.ru/data/novosibirsk-region-data.csv" style={{'textDecoration': 'none'}}  className="">
                    <div className=""><BsDownload/></div></a>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" gap={3}>
                    <div className=""> <div><i>C<sub>k</sub></i> – the number of critical COVID-19 cases per day <i>k</i>, those who need to connect a ventilator</div></div>
                    <OverlayTrigger
                     placement="left"
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                          <small className="text-muted">16 column - ventilation</small>
                         </Popover.Body>
                       </Popover>
                     }
                     >
                    <div className=" ms-auto">16</div>
                    </OverlayTrigger>
                    <div className="vr" />
                      <a href="https://ai-biolab.ru/data/novosibirsk-region-data.csv" style={{'textDecoration': 'none'}}  className="">
                    <div className=""><BsDownload/></div></a>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" gap={3}>
                    <div className="">  <div><i>g<sub>k</sub></i> – the number of deaths as a result of COVID-19 per day <i>k</i></div></div>
                    <OverlayTrigger
                     placement="left"
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                          <small className="text-muted">7 column - new_deaths</small>
                         </Popover.Body>
                       </Popover>
                     }
                     >
                    <div className=" ms-auto">7</div>
                    </OverlayTrigger>
                    <div className="vr" />
                      <a href="https://ai-biolab.ru/data/novosibirsk-region-data.csv" style={{'textDecoration': 'none'}}  className="">
                    <div className=""><BsDownload/></div></a>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" gap={3}>
                    <div className="">  <div><i>{'\u03B1'}(t)</i> – self-isolation index</div></div>
                    <OverlayTrigger
                     placement="left"
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                          <small className="text-muted">21 column - yandex_index</small>
                         </Popover.Body>
                       </Popover>
                     }
                     >
                    <div className=" ms-auto">21</div>
                    </OverlayTrigger>
                    <div className="vr" />
                      <a href="https://ai-biolab.ru/data/novosibirsk-region-data.csv" style={{'textDecoration': 'none'}}  className="">
                    <div className=""><BsDownload/></div></a>
                  </Stack>
                  <hr />
                  <Stack direction="horizontal" gap={3}>
                    <div className="">  <div><i>{'\u03B2'}(t)</i> – the proportion of infected people with IgG antibodies to SARS-CoV-2</div></div>
                    <OverlayTrigger
                     placement="left"
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                          <small className="text-muted">2 column - positive_percent</small>
                         </Popover.Body>
                       </Popover>
                     }
                     >
                    <div className=" ms-auto">2</div>
                    </OverlayTrigger>
                    <div className="vr" />
                      <a href="https://ai-biolab.ru/data/novosibirsk-invitro.csv" style={{'textDecoration': 'none'}}>
                    <div className=""><BsDownload/></div></a>
                  </Stack>
                 </Card.Body></Card></motion.div>
           </Col>
       </Row>
      </>
    )}

export default Description_SEIRHCD_En;