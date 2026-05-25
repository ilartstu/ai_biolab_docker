import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";

export function Sem_e() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>15 августа пройдёт семинар лаборатории на тему «Рекомендательная система для микрофинансовых организаций»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">На данный момент работа большинства микрофинансовых организаций (МФО) в России происходит через интернет...</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Дудукалов Дмитрий Витальевич.</b></p></div>
        <div className="row my-4"><p className="lead">Соавторы: <b>Прокопенко Евгений Игоревич, Савинкина Екатерина Николаевна.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Ранжирование мфо.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>31.07.2024</p></div>
      </Container>
      <Footer />
    </>
  );
}