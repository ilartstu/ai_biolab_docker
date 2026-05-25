import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Stack, Overlay} from 'react-bootstrap';
import "./../styles.css";

function CollapseMSDeath_data_En() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
    <div className="">

    <div className="d-grid gap-2">

      <Button  size="sm" variant="outline-success" ref={target} onClick={() => setShow(!show)} className="shadow1">
      Description of the data
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
          <Container className="mx-auto">Data on burials in Novosibirsk of the Municipal information system "Ritual" (Novosibirsk City Hall), provided by
          Director of the Center for Interaction with Authorities and Industrial Partners of Novosibirsk State University, Ph.D. A.N. Lyulko, displaced 2 days ago.
          </Container>
          </div>
        )}
      </Overlay>

    </div>
  </div>
  </>
  );
}

export default CollapseMSDeath_data_En;
