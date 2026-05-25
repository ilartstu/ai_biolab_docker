import React from "react";
import Footer from '../Components/Footer'
import NaviBarv2 from '../Components/NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import life_e from "../images/news/life_e.PNG"
import life_ea from "../images/news/life_ea.PNG" // 1280x853
import life_eb from "../images/news/life_eb.PNG"  // 853x1280

export function Life_e () {

  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={life_e} align="left" width={500} className="me-4 mb-4 rounded"></img></div>
        <div className="row my-4 ps-4"><h2>С 21 по 25 июля проходит Международный конгресс по анализу, приложениям и вычислениям (ISAAC-2025), участниками которого станут сразу 5 сотрудников лаборатории.</h2></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr></hr>
        <div className="row ps-4 my-4"><p className="lead">С 21 по 25 июля 2025 года Nazarbayev University стал местом проведения Международного конгресса по анализу, приложениям и вычислениям (ISAAC-2025) — знаменательного события, которое впервые проходит в Центральной Азии.</p></div>
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
        <div className="row ps-4 my-4">
          <div className="col-md-8">
            <p className="lead">Участниками конференции стали сразу 5 сотрудников лаборатории, а именно: Криворотько Ольга Игоревна, Зятьков Николай Юрьевич, Звонарева Татьяна Александровна, Неверов Андрей Вячеславович и Кабанихин Сергей Игоревич.</p>
            <p className="lead">Конгресс проводится раз в несколько лет под эгидой Международного общества анализа, его приложений и вычислений и собирает ведущих ученых со всего мира. Ранее он проходил в США, Японии, Германии, Канаде, Великобритании и других странах. В этом году мероприятие впервые проходит в Центральной Азии — в Казахстане.</p>
            <p className="lead">В Астану приехали более 700 участников со всего мира. Также в рамках мероприятия были приглашены 100 молодых ученых.</p>
            <p className="lead">В течение недели ведущие математики со всего мира в стенах NU будут обсуждать актуальные научные достижения, новые подходы и методы в математике и смежных дисциплинах. Мероприятие проходит при поддержке Национальной академии наук при Президенте РК и социального Фонда развития "NU Impact Foundation".</p>
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
      <Footer />
    </>
  )
}