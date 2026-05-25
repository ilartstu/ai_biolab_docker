import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_q() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>15 мая пройдёт семинар лаборатории на тему «Прогнозирование распространения социально-значимых заболеваний, основанных на методах глубокого обучения в случае недостаточных данных»</h1>
        </div>
        <br></br>
        <hr />
        <div className="row my-4"><p className="lead">
        Хотя в России туберкулез без ВИЧ-инфекции идет на спад, РФ входит в группу стран с высокой заболеваемостью и смертностью от туберкулеза, сочетанного с ВИЧ-инфекцией. Ежегодные статистические данные о распространенности туберкулеза и ВИЧ (группы риска) в регионах Российской Федерации известны с 2009 года. В работе рассмотрены алгоритмы глубокого обучения для описания и вероятностного прогнозирования краткосрочной динамики (на 3 года) социально-значимого заболевания на примере туберкулеза в регионах Российской Федерации при недостаточном количестве и качестве статистической информации. </p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Зятьков Николай Юрьевич.</b></p></div>
        <div className="row my-4"><p className="lead">Время: 16:00 новосибирского времени (12:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Презентацию доклада можно увидеть по <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Ц1.2_Семинар_ТБ_ЗятьковНЮ.pdf">ссылке</a>.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>14.05.2025</p></div>
      </Container>
      <Footer />
    </>
  );
}