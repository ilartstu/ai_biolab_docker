import React, { useState, useEffect} from "react";
import axios from "axios";
import {FiDownload } from 'react-icons/fi'
import {Container, Row, Col, Card, Button,
  Image, Dropdown, OverlayTrigger, Popover, Spinner, Alert, Placeholder, Tab,ListGroup} from 'react-bootstrap';
import {BsZoomOut, BsInfo, BsZoomIn} from 'react-icons/bs'
import MSCDItem from './StaticCovidDataItem'
import { motion } from "framer-motion"

import {
    Chart as ChartJS,
    PointElement,
    Filler,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    SubTitle,
    Tooltip,
    Legend,
  } from 'chart.js';
import {Bar, Line} from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom';
import scales from 'chartjs-plugin-zoom';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    SubTitle,
    Tooltip,
    Legend,
    PointElement,
    Filler,
  );

  ChartJS.register(zoomPlugin,  scales);

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

const NewsData = (props) => {

  

  return (
    <Tab.Pane eventKey={props.item.eventKey}>
      <div className="mx-3 my-3">
      
    </div>
    <ListGroup className="justify-content-md-center" align='center' as="ol" variant="flush" style={{width:"100%"}} >
   
   <Row xs={1} md={3} > { props.item.list.map((item) =>
                  <ListGroup as="li">
                  <a  style={{'textDecoration': 'none'}}>
                          <Card.Body className="pubcardcol my-3">
                          <Card.Title ><h5 align='left' style={{fontSize:"30px", align:"right"}}>{item.name} </h5></Card.Title>
                          </Card.Body></a>
                          </ListGroup> 
              )} 
              </Row>
    </ListGroup>
  </Tab.Pane>
  
  );
};
export default NewsData;