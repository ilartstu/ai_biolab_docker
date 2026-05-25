import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Stack, Overlay} from 'react-bootstrap';
import "./../styles.css";

function CollapseParamInvitro() {
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
          <Stack gap={16} >
          Данные предоставлены компанией Инвитро:
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>date:</small></div>
              <div className=""><small>текущая дата в формате YYYY-MM-DD</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>positive_percent:</small></div>
              <div className=""><small >доля инфицированных, имеющая антитела IgG к SARS-CoV-2</small></div>
            </Stack></div>
          </Stack>
          </div>
        )}
      </Overlay>

      <Collapse in={open}>
        <div id="example-collapse-text">
        </div>
      </Collapse>
    </div>

     </div>
    </>
  );
}

export default CollapseParamInvitro;
