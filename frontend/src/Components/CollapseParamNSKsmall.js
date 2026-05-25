import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Stack, Overlay} from 'react-bootstrap';
import "./../styles.css";

function CollapseParamNSKsmall() {
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
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>date:</small></div>
              <div className=""><small>текущая дата в формате YYYY-MM-DD</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_diagnoses:</small></div>
              <div className=""><small >количество новых выявленных случаев заражения коронавирусом</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_diagnoses:</small></div>
              <div className=""><small>общее число выявленных случаев заражения коронавирусом за всё время пандемии</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_recoveries:</small></div>
              <div className=""><small>количество новых случаев выздоровления человек с начала пандемии</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_recoveries:</small></div>
              <div className=""><small>всего выздоровело человек с начала пандемии</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_deaths:</small></div>
              <div className=""><small>количество новых смертей от коронавируса</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_deaths:</small></div>
              <div className=""><small>всего умерших от коронавируса  с начала пандемии</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_tests:</small></div>
              <div className=""><small>всего проведённых тестов на коронавирус в регионе</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_tests:</small></div>
              <div className=""><small>количество новых проведённых тестов на коронавирус в регионе</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>n_critical:</small></div>
              <div className=""><small>текущее количество человек, находящихся в отделениях реанимации</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>1vac:</small></div>
              <div className=""><small>текущее количество человек, получивших одну дозу вакцины</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>2vac:</small></div>
              <div className=""><small>текущее количество человек, получивших две дозы вакцины</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>positive_percent:</small></div>
              <div className=""><small>доля инфицированных, имеющая антитела IgG к SARS-CoV-2</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>yandex_index:</small></div>
              <div className=""><small>индекс самоизоляции</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>asympt_percent:</small></div>
              <div className=""><small>текущий процент бессимптомных выявленных случаев</small></div>
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

export default CollapseParamNSKsmall;
