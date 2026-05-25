import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_c from "../images/news/sem_c.PNG";


export function Sem_k() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_c} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>6 февраля пройдёт семинар лаборатории на тему «Математическое моделирование распространения эпидемий с учётом социальных, экономических и экологических процессов»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">Статистические данные о динамике эпидемического процесса представляют из себя набор временных рядов. Прогнозирование распространения эпидемии (экстраполяция временного ряда) можно описать статистическими, дифференциальными, агентными, стохастическими моделями, моделями машинного обучения и их комбинациями. Однако для управления эпидемическим процессом требуется понимание механизмов влияния взаимодействующих социально-экономических и экологических процессов, а также динамики самого эпидемического процесса, что характеризуется параметрами дифференциальных, агентных, стохастических моделей. Для идентификации параметров физически-обоснованных моделей применяются методы анализа идентифицируемости, оптимизации и обратных задач. В результате оцениваются управляемые параметры эпидемического процесса и сценарии распространения заболевания в популяции. </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Криворотько Ольга Игоревна.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 16:00 новосибирского времени (12:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Криворотько_лабИИ_06-02-25_full">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>04.02.2025</p></div>

      </Container>
      <Footer />
    </>
  );
}