import React, {forwardRef} from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';
import { motion } from "framer-motion"


const TeamItem_En = forwardRef((props, ref) => {
  return (
    <Col xs={12} md={6} lg={6} className="my-1" ref={ref}>
      <Card border="light" style={{ minHeight: '12rem', maxWidth: '40rem' }} className="mx-auto shadow1">
        <Row>
          <Col md={4}>
            <a href={props.post.url} target="_blank">
              <Container style={{ width: '10rem', height: '9rem' }} className="my-4 text-center">
                <Image
                  variant="bottom"
                  src={props.post.image}
                  fluid
                  style={{ maxWidth: '8rem' }} // Измените здесь ширину изображения
                />
              </Container>
            </a>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{props.post.name}</Card.Title>
              <Card.Text>
                <div>{props.post.institution}</div>
                <div>{props.post.institution2}</div>
                <div>{props.post.Phone}</div>
                <div>{props.post.mail}</div>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  )}
  )
const MTeamItem_En = motion(TeamItem_En);
export default MTeamItem_En;
export {TeamItem_En};