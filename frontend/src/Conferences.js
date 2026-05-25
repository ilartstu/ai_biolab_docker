import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
    OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Footer from './Components/Footer' ;
import NaviBarv2 from './Components/NaviBarv2';
import NewsData from './Components/NewsData'

  
export function Conferences () {
    return (
          <>
      <NaviBarv2 />
      <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h1>Календарь конференций</h1></div>
      <hr/>
    
  </Container>
  <div className="row my-4 ps-3 ">
          <h3>Предстоящие конференции</h3>
        </div>
        <div className="row my-4 ps-3 text-secondary">
          <h3 className="lead">2024</h3>
        </div>     
        <hr/>
        <div className="row my-4 ps-3">
          <h3>Прошедшие конференции</h3>
        </div>
        <div className="row my-4 ps-3 text-secondary">
          <h3 className="lead">2024</h3>
        </div>  

        <div className="my-3"><h4 className="row ps-3">29 октября - 2 ноября 2024 Москва</h4>
<h5 className="row ps-3 text-secondary">VI международная научно-практическая конференция ПОСТЕГНОМ’2024</h5>
<h5 className="ps-1 text-secondary lead">С результатами работы выступила Заведующий лабораторией <a rel="noopener" target="_blank" href="/Krivorotko_info">Криворотько О.И.</a>.</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://www.postgenome.org/pages/aktualnaya_nauchnaya_programma">сайте конференции.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">31 октября - 1 ноября 2024 Москва</h4>
<h5 className="row ps-3 text-secondary">XVI конференция «Математические модели и численные методы в биологии и медицине»</h5>
<h5 className="ps-1 text-secondary lead">Сотрудники лаборатории приняли участие в XVI конференции «Математические модели и численные методы в биологии и медицине», а именно: <a rel="noopener" target="_blank" href="/Nesterova_info">Нестерова А.В.</a> и <a rel="noopener" target="_blank" href="/Mikhailapov_info">Михайлапов Д.И.</a>.</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://dodo.inm.ras.ru/biomath/">сайте конференции.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">17-21 октября 2024 Сириус</h4>
<h5 className="row ps-3 text-secondary">Конференция «Квазилинейные уравнения, обратные задачи и их приложения»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_050w">сайте конференции.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">14-18 октября 2024 Сириус</h4>
<h5 className="row ps-3 text-secondary">Конференция «Обратные некорректные задачи и машинное обучение»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_049w">сайте конференции.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">7-11 октября 2024 Сириус</h4>
<h5 className="row ps-3 text-secondary">Конференция «Индустриальная математика: от математических методов к промышленным технологиям»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_048w">сайте конференции.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">3-5 октября 2024 Новосибирск ИМ СО РАН</h4>
<h5 className="row ps-3 text-secondary">Международная научная конференция «Современные проблемы обратных задач»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="http://conf.nsc.ru/mcip2024/general_info">сайте конференции.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">1-4 октября 2024 Новосибирск ИМ СО РАН</h4>
<h5 className="row ps-3 text-secondary">Конференция «Математика в медицине»</h5>
<h5 className="ps-1 text-secondary lead">1, 3 и 4 октября сотрудники лаборатории, а именно: <a rel="noopener" target="_blank" href="/Krivorotko_info">Криворотько О.И.</a>, <a rel="noopener" target="_blank" href="/Nestrova_info">Нестерова А. В.</a> и  <a rel="noopener" target="_blank" href="/Mikhailapov_info">Михайлапов Д.И.</a>, выступили на конференции.</h5>
<h5 className="ps-1 text-secondary lead"><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%9C%D0%BC%D0%B5%D0%B4%D0%9A%D0%BE%D0%BD%D1%84-24.pdf">Полная программа.</a></h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="http://conf.nsc.ru/mmed2024/ru/general_info">сайте конференции.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">30 сентября - 2 октября 2024 Новосибирск ИМ СО РАН</h4>
<h5 className="row ps-3 text-secondary">XVI международная молодежная научная школа-конференция «Теория и численные методы решения обратных и некорректных задач»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="http://conf.nsc.ru/tcmiip2024/general_info">сайте конференции.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">6-11 августа 2024 Санкт-Петербург</h4>
<h5 className="row ps-3 text-secondary">IV Конференция математических центров России</h5>
<h5 className="row ps-3 text-secondary lead">10 августа сотрудники нашей лаборатории приняли участие в конференции в секциях:«Прикладная математика и математическое моделирование» и «Теория вероятностей»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://mc4-conf.ru/">сайте конференции.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">5-10 августа 2024 Новосибирск</h4>
<h5 className="row ps-3 text-secondary">14-я Международная мультиконференция</h5>
<h5 className="row ps-3 text-secondary">«Биоинформатика регуляции и структуры геномов/системная биология»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
  Более подробная информация приведена на<a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/schedule/">сайте конференции.</a>
</h5></div>
      </Container>
      <Footer />
      </>
      
      )}