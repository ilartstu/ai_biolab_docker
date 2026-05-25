import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_j() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>28 ноября пройдёт семинар лаборатории на тему «Вероятностное прогнозирование эпидемий в регионах Российской Федерации на основе условной генеративно-состязательной сети и байесовского подхода»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В докладе будут рассмотрены: <br></br>
— Особенности построения нейронных сетей для моделирования и прогнозирования временных рядов.<br></br>
— Модель вероятностного прогнозирования распространения COVID-19 в Санкт-Петербурге на основе условной генеративно-состязательной сети (CGAN). <br></br>
 — Оценка параметров подмодели динамики туберкулеза с учетом бактериовыделения в Новосибирской области с помощью вероятностного программирования и байесовской статистики. </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Зятьков Николай Юрьевич.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/M1_семинар_2024-11-28.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>20.11.2024</p></div>

      </Container>
      <Footer />
    </>
  );
}