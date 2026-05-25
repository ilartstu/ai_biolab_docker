import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_m() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>6 марта состоится совместное заседание семинара «Прикладная статистика»  и семинара лаборатории ИИ-технологий математического моделирования биологических, социально-экономических и экологических процессов</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В докладе будет рассмотрена практическая сторона применения регрессионных моделей на основе гауссовских процессов. Этот метод является непараметрическим, а вид итоговой регрессионной функции определяется видом ядра, характеризующего расстояние между функциями. Это даёт большую гибкость по сравнению с классическими методами за счёт большей вычислительной сложности алгоритма. В докладе будет показано, как можно воспроизводить этим методом классические регрессионные методы, а также их модификации и комбинации. В заключение будет рассмотрена концепция автоматического адаптивного подбора ядра регрессии в зависимости от исходной выборки и практические примеры применения.  </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Неверов Андрей Вячеславович.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 16:30 новосибирского времени (12:30 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us06web.zoom.us/j/82737787257?pwd=5WjMK2SAzb7MusScTpdMjtvaotfgv2.1">ссылке.</a> Идентификатор конференции: 827 3778 7257. Код доступа: 498246</p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Gaussian_process_regression_06.03.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>04.03.2025</p></div>

      </Container>
      <Footer />
    </>
  );
}