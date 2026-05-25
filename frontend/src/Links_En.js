import React from "react";
import NaviBarv2_En from './Components/NaviBarv2_En';
import Footer_En from './Components/Footer_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"; // Импорт стилей
import { Container, Card, Row, Col } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';

export function Links_En() {
  const links = [
    { id: 1, title: "Laboratory logo", url: "https://ai-biolab.ru/data/logo_en.rar" },
  ];

  return (
    <>
      <NaviBarv2_En />
      <Container className="my-5">
        <h2 className="text-center mb-4 header_links">Available links</h2>
        <Row>
          {links.map(link => (
            <Col md={4} key={link.id} className="mb-4">
              <Card className="card_links shadow">
                <a href={link.url} style={{ textDecoration: 'none' }}>
                  <Card.Body className="text-center">
                    <Card.Title>
                      <h5 style={{ fontSize: "20px" }}>
                        <BsDownload /> {link.title}
                      </h5>
                    </Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          ))}
          <h2 className="text-center mb-4"></h2>
          <h2 className="text-center mb-4"></h2>
          <h2 className="text-center mb-4"></h2>
          <h2 className="text-center mb-4"></h2>
          <h2 className="text-center mb-4"></h2>
          <h2 className="text-center mb-4"></h2>
        </Row>
      </Container>
      <Footer_En />
    </>
  );
}