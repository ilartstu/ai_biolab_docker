import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_p() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>17 апреля пройдёт семинар лаборатории на тему «Суперкомпьютерный анализ и регуляризация задач идентификации и управления социальными процессами»</h1>
        </div>
        <br></br>
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">
        Процессы распространения информации в онлайн социальных сетях могут быть описаны непрерывными математическими моделями, коэффициенты которых и начальные данные зачастую неизвестны или заданы с большой погрешностью, что может привести к неверному описанию реакции пользователей на конкретную информацию и неверному управлению этой реакцией. Поэтому важным этапом в решении данной проблемы является анализ и решение соответствующих обратных задач, состоящих в идентификации неизвестных параметров по дополнительной информации об исследуемых процессах. В докладе будут рассмотрены прямые и обратные задачи определения начального условия для диффузионно-логистической модели с нелинейной правой частью и модели среднего поля по дополнительной информации о процессе в фиксированные моменты времени. Обратная задача сводится к задаче минимизации целевого функционала и решается локальными градиентными методами, глобальными методами роя частиц и тензорной оптимизации, а также комбинациями методов с использованием регуляризации. </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Звонарёва Татьяна Александровна.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 16:00 новосибирского времени (12:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Выступление 17.04.2025 ЗвонареваТА.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>11.04.2025</p></div>
      </Container>
      <Footer />
    </>
  );
}