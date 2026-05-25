import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_n() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>20 марта пройдёт семинар лаборатории на тему «Полу-контролируемая классификация: Основные идеи»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В рамках выступления рассматриваются методы полу-контролируеммой классификации трёх основных типов данных: Картинки, временные ряды и табличные данные. Рассматриваются основные идеи лежащие в основе современных методов.  </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Михайлапов Денис Иванович.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 16:00 новосибирского времени (12:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Полу_контролируемая_классификация_1.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>19.03.2025</p></div>

      </Container>
      <Footer />
    </>
  );
}