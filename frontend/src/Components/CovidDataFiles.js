import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Stack} from 'react-bootstrap';


function CovidDataFiles(files) {

  const [isActive, setIsActive] = useState(true)

  return (
      <a href={files.file.hr} style={{'textDecoration': 'none'}}>
        <div className={isActive ? '' : 'bg-light '}  onMouseEnter = {()=>{setIsActive(false)}}
          onMouseLeave={()=>{setIsActive(true)}}>
          <Row>
            <Stack direction="horizontal" gap={3}>
              <Col lg={8} md={8} xs={8} sm={8}>
                <Stack direction="horizontal" gap={3}>
                  <div>
                    <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
                    src={files.file.img}
                    rounded
                    fluid/>
                  </div>
                  <div><small>{files.file.name}</small></div>
                </Stack>
              </Col>
              <Col lg={4} md={4} xs={4} sm={4}>
                <div>
                  <Button variant="link" className="text-secondary">
                    <small>Скачать csv</small>
                  </Button>
                </div>
              </Col>
            </Stack>
          </Row>
      </div>
      </a>
  )
}
export default CovidDataFiles;
