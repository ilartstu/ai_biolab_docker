import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image, Stack} from 'react-bootstrap';
import MMA from "./../images/MMA.png"
import RNF6 from "./../images/RNF6.png"
import MCA2 from "./../images/MCA2.png"
import RFFI from "./../images/RFFI.png"
import RF2 from "./../images/RF2.png"
import mmf6 from "./../images/mmf6.png"
import logo_nav from "../images/logo_nav.png"
import ".././styles.css";

function Footer() {
  return (

    <footer className="py-4 my-6 bg-dark navbar-fixed-bottom">
      <Container>
        <Row className="align-items-center" style={{ width: "100%" }}>
          {/* Левый столбец с логотипом */}
          <Col xs={12} md={4} lg={4} className="d-flex align-items-center">
            <Image src={logo_nav} fluid style={{ width: '130px', height: '130px', marginRight: '10px' }} />
          </Col>

          {/* Центральный столбец с текстом */}
          <Col xs={12} md={4} lg={4} className="text-center">
            <h3 className="text-white">ИМ СО РАН</h3>
            <div className="text-white">630090, Новосибирск, Проспект Академика Коптюга, 4</div>
            <div className="text-white">контакты: info@ai-biolab.ru, +7 (383) 329-7610</div>
            <hr className="text-white mx-auto" />
            <small className="text-white">© 2025 COVID-19 в Новосибирской области</small>
          </Col>

          {/* Правый столбец с изображениями */}
          <Col xs={12} md={4} lg={4} className="d-flex justify-content-end">

  <div align="center">
        <Image variant="bottom" className = "mx-4"
        src={RF2}
        fluid
        style={{ width: '2.7rem' }, {height: '2.7rem'}}
        />
        </div>

        <div align="center">
        <Image variant="bottom" className = "my-1 mx-4"
        src={RNF6}
        fluid
        style={{ width: '2.5rem' }, {height: '2.5rem'}}
        />
        </div> 
</Col>
        </Row>
      </Container>
    </footer>

  )
}
export default Footer;
