import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Stack, Overlay} from 'react-bootstrap';
import "./../styles.css";

function CollapseMSDeath_data() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
    <div className="">

    <div className="d-grid gap-2">

      <Button  size="sm" variant="outline-success" ref={target} onClick={() => setShow(!show)} className="shadow1">
        Описание данных
      </Button>

      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(192,192,192, 0.90)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
          <Container className="mx-auto">Данные по захоронениям в Новосибирске Муниципальной информационной системы "Ритуал" (Мэрия города Новосибирска), предоставленные
          директором Центра по взаимодействию с органами власти и индустриальными партнерами Новосибирского государственного университета, к.ф.-м.н. А.Н. Люлько, смещенные на 2 дня назад.
          </Container>
          </div>
        )}
      </Overlay>

    </div>
  </div>
  </>
  );
}

export default CollapseMSDeath_data;
