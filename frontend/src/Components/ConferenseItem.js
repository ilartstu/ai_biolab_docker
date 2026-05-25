import React, {forwardRef} from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';
import { motion } from "framer-motion"


const ConferenseItem = forwardRef((props, ref) => {
    return (
      <Col className="my-3" ref={ref}>
      <a href={props.conf.hreff}>
        <Card border="light" style={{ width: '24rem' }, { minWidth: '20rem' }} className="mx-auto shadow1 align-center"  >
        <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
        <Image variant="top"  className="my-5" style={{ width:  props.conf.width}, {height: props.conf.height}}
        src={props.conf.image}
        roundedCircle={props.conf.rounded}
        fluid
        />
        </Container>
          <Card.Body>
            <Card.Title className="text-center"><a href={props.conf.hreff} className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">{props.conf.name}</a></Card.Title>
          </Card.Body>
        </Card>
        </a>
      </Col>
    )})

const MConferenseItem = motion(ConferenseItem);
export default MConferenseItem;
export {ConferenseItem}
