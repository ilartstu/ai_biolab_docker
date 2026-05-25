import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NaviBarv2 from '../Components/NaviBarv2';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_b from "../images/news/sem_b.PNG";


export function Sem_r() {


  return (
    <>
      <NaviBarv2 />
      <Container>
        <div><img src={sem_b} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>20 мая пройдёт семинар лаборатории, на котором планируется 3 доклада</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr />
        <div className="row my-4"><p className="lead">20.05.2025 (вторник) в 16:00 Мск (20:00 Нск) планируется 3 доклада.</p></div>
        <div className="row my-4"><p className="lead">Предварительная программа:</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Чубатов А.А. (Научно-технологический университет "Сириус" (Сочи)).</b> "FnLPDEs_FBSNNs — расширение  возможностей фреймворка FBSNN (Forward-Backward SDEs and Neural Networks) (М. Raissi) для решения полностью нелинейных УРЧП".</p></div>
        <div className="row my-4"><p className="lead">Докладчики: <b>Стрижак С.В. (ИСП РАН) и Кошелев К.Б.(ИВЭП СО РАН).</b> Физически-информированная нейронная сеть для изучения гидрологических процессов рек. Время доклада: 16:45-17:10 мск.</p></div>
        <div className="row my-4"><p className="lead">Докладчик: <b>Мальцев И.С. (ИСП РАН, МАИ) и Стрижак С.В. (ИСП РАН, МАИ).</b> Физически-информированная нейронная сеть для решения уравнения Ричардса и изучения почвенных процессов. Время доклада: 17:10-17:30 мск.</p></div>
        <div className="row my-4"><p className="lead">Время: 20:00 новосибирского времени (16:00 Мск).</p></div>
        <div className="row my-4"><p className="lead">Семинар будет проходить в онлайн формате в Zoom. Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div className="row my-4"><p className="lead">*Перед подключением просьба написать свои Имя и Фамилию.</p></div>
        <div className="row my-4"><p className="lead">Запись доклада можно увидеть по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/d35RUjed5DW_69BwgGMIVxNLWE27Um5e7Ud0mnUqj7g68R0odu4aKy22SfX0zJwC.xRWSROYf86k55v4f ">ссылке</a>. Код доступа: QSAe2#+z.</p></div>
        <div className="row my-4"><p className="lead">Все проведённые семинары выложены в <a rel="noopener" target="_blank" href="Sem_Compl">архиве</a>.</p></div>
        <div className="row my-4"><p>19.05.2025</p></div>
      </Container>
      <Footer />
    </>
  );
}