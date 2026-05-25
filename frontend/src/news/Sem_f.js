import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_f() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>29 августа пройдёт семинар лаборатории на тему «Метод Гельфанда-Левитана в коэффициентых обратных задачах»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В докладе рассматриваются обратные задачи по определению коэффициентов уравнений, связанных с распространением волн в неоднородных средах. В качестве метода для их решения выбран подход И.М.Гельфанда-Б.М.Левитана, который позволяет свести решение нелинейных обратных задач к семействам линейных интегральных уравнений. В докладе будут рассмотрены основные особенности подхода, численные алгоритмы на основе метода. Будут представлены результаты численных экспериментов.</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Новиков Никита Сергеевич.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>23.08.2024</p></div>

      </Container>
      <Footer />
    </>
  );
}