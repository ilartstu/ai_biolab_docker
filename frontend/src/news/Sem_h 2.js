import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_h() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>26 сентября пройдёт семинар лаборатории на тему «Проблемы получения точной количественной оценки накопленной активности в опухолевых очагах при исследовании методом ОФЭКТ/КТ»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">В докладе рассматриваются проблемы, сдерживающие развитие количественного метода однофотонной эмиссионной компьютерной томографии (ОФЭКТ/КТ) для точной количественной оценки накопленной активности в опухолевых очагах. Основная проблема заключается в математических ограничениях итерационных алгоритмов реконструкции изображений, что на практике приводит к неопределенности в выборе количества итераций. Размер опухолевого поражения играет ключевую роль: для меньших очагов требуется больше итераций, что усиливает шум на изображении. Это делает необходимым использование методов сглаживания, которые могут привести к занижению оценок накопленной активности. Дополнительно рассматривается проблема краевых артефактов, снижающих точность количественных оценок.</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Нестерова Ангелина Витальевна.</b></p></div>
        <div className="row my-4"><p className="lead">Соавторы: <b>Денисова Наталья Васильевна, Рузанкин Павел Сергеевич.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 14:00 новосибирского времени (10:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Семинар 26.09.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>17.09.2024</p></div>

      </Container>
      <Footer />
    </>
  );
}