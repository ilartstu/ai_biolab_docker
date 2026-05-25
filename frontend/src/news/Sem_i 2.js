import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_i() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>14 ноября пройдёт семинар лаборатории на тему «Моделирование острых и хронических инфекций»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">Существует большое количество классификаций инфекционных болезней. По продолжительности течения инфекции делятся на острые и хронические. Каждое инфекционное заболевание имеет свои эпидемиологические особенности, и математическое моделирование является одним из инструментов для их изучения. В докладе будет рассмотрена обратная задача определения параметров эпидемического процесса в дифференциальной модели, состоящей из 7 компонентов. Будут обсуждены различия острых и хронических инфекционных заболеваний. Будут представлены значения основных параметров эпидемического процесса и коэффициентов управления, а также результаты сопоставления модельных данных с реальными. </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Семенова Диана Анзоровна.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Моделирование_острых_и_хронических_инфекций.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>06.11.2024</p></div>

      </Container>
      <Footer />
    </>
  );
}