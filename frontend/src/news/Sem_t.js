import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_t() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>3 июля пройдёт семинар лаборатории на тему «Симплификация Неверова»</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr />
        <div className="row my-4"><p className="lead">
        Колебания заболеваемости всегда волновали исследователей эпидемий. Но причины, лежащие в их основе, различны. Также колебания различаются периодами. В докладе разбираются принципиальные различия поведения острых и хронических инфекций. Соответственно возникают особенности решения обратных задач.
Особая тема - синдемии, то есть одновременное развитие эпидемий двух или нескольких инфекций. Одной из губительных для человечества синдемий является распространение ВИЧ-инфекции и туберкулеза.
Система синдемии многопараметрическая и нелинейная, а следовательно, характеризуется отсутствием аналитических решений. Сотрудником нашей лаборатории Андреем Неверовым предложена симплификация, позволяющая получить аналитическое решение. 
В докладе исследуется развитие этого подхода в проблематике устойчивости. Формулируется положение об асимметричности коэффициентов смертности, влияющей на возникновение в системе бифуркаций.</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Каминский Григорий Дмитриевич.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 16:00 новосибирского времени (12:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>02.07.2025</p></div>
      </Container>
      <Footer />
    </>
  );
}