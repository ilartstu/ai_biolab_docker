import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Stack, Overlay} from 'react-bootstrap';
import "./../styles.css";

function CollapseParamNSKsmall_En() {
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

          <Stack gap={16} >
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>date:</small></div>
              <div className=""><small>the current date in the format YYYY-MM-DD</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_diagnoses:</small></div>
              <div className=""><small >the number of newly identified cases of coronavirus infection</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_diagnoses:</small></div>
              <div className=""><small>the total number of detected cases of coronavirus infection during the entire pandemic</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_recoveries:</small></div>
              <div className=""><small>the number of new cases of human recovery since the beginning of the pandemic</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_recoveries:</small></div>
              <div className=""><small>total of people have recovered since the beginning of the pandemic</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_deaths:</small></div>
              <div className=""><small>the number of new deaths from coronavirus</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_deaths:</small></div>
              <div className=""><small>total deaths from coronavirus since the beginning of the pandemic</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_tests:</small></div>
              <div className=""><small>total coronavirus tests conducted in the region</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_tests:</small></div>
              <div className=""><small>the number of new coronavirus tests conducted in the region</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>n_critical:</small></div>
              <div className=""><small>the current number of people in intensive care units</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>1vac:</small></div>
              <div className=""><small>the current number of people who received one dose of the vaccine</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>2vac:</small></div>
              <div className=""><small>the current number of people who received two doses of the vaccine</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>positive_percent:</small></div>
              <div className=""><small>the proportion of infected people with IgG antibodies to SARS-CoV-2</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>yandex_index:</small></div>
              <div className=""><small>self-isolation index</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>asympt_percent:</small></div>
              <div className=""><small>the current percentage of asymptomatic cases detected</small></div>
            </Stack></div>
            </Stack>
          </div>
        )}
      </Overlay>
    </div>

     </div>
    </>
  );
}

export default CollapseParamNSKsmall_En;
