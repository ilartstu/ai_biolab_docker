import React from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';
import { YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFillGeoAltFill} from "react-icons/bs";

const Main_contacts = () => {
    return (
      <Card border="light" className="text-center bg-secondary text-white my-3 shadow1">
      <Card.Body>
        <Row className="justify-content-md-center" style={{
                width: "100%" }}>
          <Col xs= {6} md={4}>
          <Container  className="">
          < BsFillGeoAltFill size={25} className="my-1"/>
            <h5 className="text-center"> Адрес</h5>
          </Container>
            <p className="text-center"> проспект Академика Коптюга, 4,
             ИМ СО РАН, г.Новосибирск </p>
          </Col>
          <Col xs= {6} md={4}>
          <Container  className="">
          <BsFillTelephoneFill size={25} className="my-1"/>
            <h5 className="text-center"> Телефон</h5>
            </Container>
            <p className="text-center"> +7 (383) 329-76-10 </p>
          </Col>
          <Col xs= {6} md={4}>
          <Container  className="">
          <BsFillEnvelopeFill size={25} className="my-1"/>
            <h5 className="text-center"> Email</h5>
            </Container>
            <p className="text-center"> info@ai-biolab.ru </p>
          </Col>
        </Row>
      </Card.Body>

      <YMaps >
        <div >
          <Map defaultState={{ center: [54.8463754, 83.1039456], zoom: 15, controls: []}} width='100%'>
          <ZoomControl options={{ float: 'right' }} />
          <Placemark geometry={[54.8463754, 83.1039456]} />
          </Map>

        </div>
      </YMaps>
      </Card>

    )
}

export default Main_contacts;
