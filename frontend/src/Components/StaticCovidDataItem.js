import React, {useState, forwardRef} from "react";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Stack, Spinner} from 'react-bootstrap';
import { motion } from "framer-motion"

const StaticCovidDataItem = forwardRef((props, ref) => {

    return (
      <Col xs= {12} md={4} ref={ref}>
      <Card border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2 my-2 shadow1">
        <Card.Body>
        <Card.Title className="text-center text-info">{props.last.lastData ? <div>{ isNaN(props.last.lastData) ? <p>нет данных</p> : <h3>{props.last.lastData}</h3> }</div> : <Spinner style={{position: 'absolute', top: '10%'}} size="sm" animation="border" variant="info" />}</Card.Title>
        <Card.Text className="text-center">
        <small>{props.last.name}</small>
        </Card.Text>
        </Card.Body>
      <Card.Footer className="bg-white shadow1 mx-3 " style={{ width: '12rem' }}>
      <small className="text-muted"><small className="text-center">По данным на {props.last.lastDatadate? props.last.lastDatadate : <div></div>}</small></small>
      </Card.Footer>
      </Card></Col>
    )
})
const MSCDItem = motion(StaticCovidDataItem);
export default MSCDItem;
export {StaticCovidDataItem}
