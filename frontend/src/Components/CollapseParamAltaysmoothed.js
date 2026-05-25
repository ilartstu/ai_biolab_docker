import React, {useState, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Collapse, Card, Nav, NavDropdown, Table, Container, Fade, Stack, Overlay} from 'react-bootstrap';
import "./../styles.css";

function CollapseParamAltaysmoothed() {
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
              <div className="mx-1"><small>new_deaths:</small></div>
              <div className=""><small>количество новых смертей от коронавируса</small></div>
            </Stack></div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_tests:</small></div>
              <div className=""><small>количество новых проведённых тестов на коронавирус в регионе</small></div>
            </Stack></div>
            </Stack>
          </div>
        )}
      </Overlay>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="my-3">
          <Stack gap={16} >
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>date:</small></div>
              <div className=""><small>текущая дата в формате YYYY-MM-DD</small></div>
            </Stack></div>
            <div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_diagnoses:</small></div>
              <div className=""><small >количество новых выявленных случаев заражения коронавирусом</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_diagnoses_article:</small></div>
              <div className=""><small>официальное общее число выявленных случаев заражения коронавирусом за всё время пандемии</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_diagnoses:</small></div>
              <div className=""><small>общее число выявленных случаев заражения коронавирусом за всё время пандемии</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_recoveries:</small></div>
              <div className=""><small>количество новых случаев выздоровления человек с начала пандемии</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_recoveries:</small></div>
              <div className=""><small>всего выздоровело человек с начала пандемии</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_deaths:</small></div>
              <div className=""><small>количество новых смертей от коронавируса</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_deaths:</small></div>
              <div className=""><small>всего умерших от коронавируса  с начала пандемии</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_tests:</small></div>
              <div className=""><small>всего проведённых тестов на коронавирус в регионе</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_tests:</small></div>
              <div className=""><small>количество новых проведённых тестов на коронавирус в регионе</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>adults:</small></div>
              <div className=""><small>текущее количество взрослых пациентов с диагнозом COVID-19 и с подозрением на него в инфекционных стационарах</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cum_children:</small></div>
              <div className=""><small>всего зафиксировано случаев заражения коронавирусом у детей с начала пандемии</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>cur_children:</small></div>
              <div className=""><small>текущее число госпитализированы детей с подозрением на коронавирус и подтвержденным диагнозом</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>new_children:</small></div>
              <div className=""><small>новое количество инфицированных детей</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>n_critical:</small></div>
              <div className=""><small>текущее количество человек, находящихся в отделениях реанимации</small></div>
            </Stack></div><div>---</div>
            <div className="">
            <Stack direction="horizontal" gap={2}>
              <div className="mx-1"><small>ventilation:</small></div>
              <div className=""><small>текущее количество человек, находящихся под аппаратом ИВЛ</small></div>
            </Stack></div>
            </Stack>
          </div>
        </div>
      </Collapse>
    </div>

     </div>
    </>
  );
}

export default CollapseParamAltaysmoothed;
