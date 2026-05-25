import React from "react";
import Footer_En from '../Components/Footer_En'
import NaviBarv2_En from '../Components/NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_e from "../images/news/life_e.PNG"
import life_ea from "../images/news/life_ea.PNG"
import life_eb from "../images/news/life_eb.PNG"


export function Life_e_En () {

  return (
        <>
    <NaviBarv2_En />
    <Container>
            <div><img src={life_e} align="left" width={500} className="me-4 mb-4 rounded"></img></div>
            <div className="row my-4 ps-4"><h2>The International Congress on Analysis, Applications and Computing (ISAAC-2025) is taking place from July 21 to 25, with 5 laboratory staff participating at once.</h2></div>
            <div className="row ps-4 my-4"><p className="lead"></p></div>
            <div className="row ps-4 my-4"><p className="lead"></p></div>
            <div className="row ps-4 my-4"><p className="lead"></p></div>
            <div className="row ps-4 my-4"><p className="lead"></p></div>
            <div className="row ps-4 my-4"><p className="lead"></p></div>
            <div className="row ps-4 my-4"><p className="lead"></p></div>
            <hr></hr>
            <div className="row ps-4 my-4"><p className="lead">From July 21 to July 25, 2025, Nazarbayev University became the venue for the International Congress on Analysis, Applications and Computing (ISAAC-2025), a significant event that is taking place in Central Asia for the first time.</p></div>
            
            {/* Еще одно изображение в тексте */}
            <Row className="my-4">
              <Col className="text-center">
                <img 
                  src={life_ea} 
                  alt="" 
                  className="img-fluid rounded shadow-lg"
                  style={{maxWidth: '60%'}}
                />
              </Col>
            </Row>
            
            {/* Портретное изображение с обтеканием текста */}
            <div className="row ps-4 my-4">
              <div className="col-md-8">
                <p className="lead">The conference was attended by 5 laboratory staff at once, namely: Olga Krivorotko, Nikolay Zyatkov, Tatiana Zvonareva, Andrey Neverov and Sergey Kabanikhin.</p>
                <p className="lead">The Congress is held every few years under the auspices of the International Society for Analysis, Its Applications and Computing and gathers leading scientists from all over the world. Previously, it was held in the USA, Japan, Germany, Canada, Great Britain and other countries. This year's event is being held in Kazakhstan, Central Asia, for the first time.</p>
                <p className="lead">More than 700 participants from all over the world came to Astana. 100 young scientists were also invited as part of the event.</p>
                <p className="lead">During the week, leading mathematicians from all over the world will discuss current scientific achievements, new approaches and methods in mathematics and related disciplines at NU. The event is supported by the National Academy of Sciences under the President of the Republic of Kazakhstan and the NU Impact Foundation Social Development Fund.</p>
              </div>
              <div className="col-md-4 text-center">
                <img 
                  src={life_eb} 
                  alt="" 
                  className="img-fluid rounded shadow"
                  style={{maxHeight: '400px', width: 'auto'}}
                />
              </div>
            </div>
            <div className="row ps-4 my-4"><p>21.07.2025</p></div>
          </Container>
    <Footer_En />
    </>
    
    )}