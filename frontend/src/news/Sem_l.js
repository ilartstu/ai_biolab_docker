import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_l() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>27 февраля пройдёт семинар лаборатории на тему «Новый метод коррекции параметров динамических эпидемиологических моделей»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В докладе будет представлен метод восстановления параметров динамической модели, если модель описывается системой обыкновенных дифференциальных уравнений с числом параметров в правой части, превышающим число искомых функций. Для определения параметров, во-первых, строится неопределенная система алгебраических уравнений с прямоугольной матрицей, которая получается в результате аппроксимации системы дифференциальных уравнений с учетом известных значений функций, заданных в два последовательных момента времени. Во-вторых, задействовано свойство плавного изменения параметров во времени для динамических моделей, описывающих реальность. Одновременная минимизация невязки для недоопределенной системы и суммы квадратов разностей параметров в два последовательных момента времени приводит к регуляризованной системе линейных алгебраических уравнений с положительно определенной матрицей и с единственным решением. Будет представлено сравнение работы метода сравнивается с другим методом решения обратной задачи восстановления параметров в рамках эпидемиологической модели SEIR-HCD.  </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Петракова Виктория Сергеевна.</b> Соавтор: Шайдуров Владимир Викторович.</p></div>
        <div className="row my-4"><p className="lead">Время: 16:00 новосибирского времени (12:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Семинар_мол_лаб_Восстановление_параметров_дифференциальной_модели.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>17.02.2025</p></div>

      </Container>
      <Footer />
    </>
  );
}