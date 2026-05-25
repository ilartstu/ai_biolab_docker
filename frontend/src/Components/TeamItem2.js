import React, { forwardRef } from "react";
import { Container, Card, Image, Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion";

const TeamItem2 = forwardRef((props, ref) => {
    return (
        <Col xs={12} md={6} lg={4} className="my-1" ref={ref}>
            <Card border="light" style={{ height: '11rem' }} className="mx-auto shadow1">
                <Row>
                    <Col md={5}>
                        <Container style={{ width: '10rem', height: '10rem' }} className="my-1 text-center">
                            <Image variant="bottom"
                                src={props.post.image}
                                fluid
                                style={{ maxWidth: props.post.wid }}
                            />
                        </Container>
                    </Col>
                    <Col md={7}>
                        <Card.Body>
                            <Card.Title>{props.post.name}</Card.Title>
                            <Card.Text>
                                {props.post.institution}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
});

const STeamItem = motion(TeamItem2);
export default STeamItem;
export { TeamItem2 };
//variant="bottom"