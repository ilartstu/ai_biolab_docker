import React from "react";
import Footer from './Footer'
import NaviBarv2 from './NaviBarv2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';

export function Krivorotko_teaching_methods () {
  return (
        <>
    <NaviBarv2 />
    <Container>
      <section>
        <div class="row my-4 text-center"><h1>Численные методы решения обратных и некорректных задач - годовой спецкурс кафедры математических методов геофизики ММФ НГУ, 3-6 курсы.</h1></div>
        <div class="row my-4 ps-4"><p class="lead">27 февраля стартует спецкурс для студентов 4-6 курсов ММФ «Численные методы решения обратных и некорректных задач»</p></div>
        <div class="row my-4 ps-4"><p class="lead">Руководитель: <b>Криворотько О.И.</b></p></div>
        <div class="row my-4 ps-4"><p class="lead">Место проведения: дистанционно Zoom</p></div>
        <div class="row my-4 ps-4"><p class="lead">Присоединиться можно по <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">ссылке.</a></p></div>
        <div class="row my-4 ps-4"><p class="lead">Время проведения: четверг 10:30-12:00 (первое занятие - 27.02.2025)</p></div>
        <div class="row my-4 ps-4"><p class="lead">Изучаются численные методы решения обратных и некорректных задач биологии (иммунологии, эпидемиологии, фармакокинетики), медицины (термоакустика, биостатистика), математической физики (геофизики, цунами, акустики), экономики и социальных процессов. Особое внимание уделяется численной регуляризации обратных задач, оценкам условной устойчивости решений обратных задач, идентифицируемости.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 1. Введение в обратные задачи. Пример Адамара некорректности некоторых обратных задач. Сингулярное разложение.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/-amZKrP0bQF5UxQZ7RTq37fPfZzsN5kc-F6o2apDhRwXWJ4NIgunXhRaSEFsC_II.hzb974X2B49fJ9Gn?startTime=1741226931000">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 1.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: YK*2o^j9.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 2. Некорректность обратной задачи термоакустики, Дирихле для волнового уравнения.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/-TXKyI0vYyuCE7wR18BdGBDKEnaF95r2atHtTLgM5ULHa43kXZG0pu_f-zJycS-W.CxkopbCWTm5s82_x">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 2.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: H=Po7#pA.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 3. Метод регуляризации М.М. Лаврентьева. Метод регуляризации А.Н. Тихонова.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/_zJWjUOe45ECfsam3GqtfIQtF1KVg-lDLuE3S1ACaQu3U87qfyJ6isYJp4Ey_y2H.0yvXYletbWaWRlyt">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 3.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: *sewC5D5.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 4. Метод регуляризации А.Н. Тихонова (продолжение).</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/qyA31kCP-xFvDhsm5qoRvCQAJhCmz4SCJZjgSoX-6WoZgB-VaNdFGvv7BqRoDUyn.XgLQUQiLLEiOmN4N">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 4.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: qcGnLt4..</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 5. Некорректность задачи дифференцирования. Введение в градиентные методы.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/fhccpXT_gw1B4vRXWpTqgzcc2qD0UNpgH1xMFABGZuGAfiWRTnMW-tJCqgproGOe.OV3w3E_c8UgH3Zjl">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 5.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: g4v.U9B?.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 6. Сходимость метода наискорейшего спуска к точному решению. Сходимость по функционалу.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/x0E6__2HFowgi3-ip7guMjAEefCl-UBDMVm1sytCKpUH-VXwijrCGX-cJ0iMip4z.3s01OPDYVeWMolLE">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 6.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: u^6cLjE..</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 7. Пример вывода градиента целевого функционала.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/1yPPajEsNqwARJcMgu2R-8q8sPgSRG6W-Wu7iLEN0qlMZIuJgadK2-js9xH3HrFA.ELYp3Tm9CUmaa7W8 ">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 7.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: 1^f$00tj. Также к данной лекции прилагаются <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Krivorotko_gradODE_2020.pdf">дополнительные материалы.</a></p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 8. Идентифицируемость математических моделей (введение).</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/1s8GdaZzUmBfyd0lGAAEYDquY2JWmuaKOElvZxmFbUOlrTsfIAdbsPz3AjNu3JUc.FbgK1alBtWTEUPnF">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 8.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: cx@eiry4.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 9. Анализ чувствительности математических моделей.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/E02nJ1aCwmpaRmcOVo6goYgaEVZbSWOdbyn4x8w4u2w8aAHn59CVEnm42Ya1ryAf.l2leF7Uf1uCUizjC ">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 9.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: W^UtU5v^. Также к данной лекции прилагаются <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/Анализ_чувствительности_Соболя.pptx">дополнительные материалы.</a></p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 10. Регуляризирующие свойства градиентных методов. Учет априорной информации в градиентных алгоритмах.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/2cVSY8in6OeN5g2GJlaaYB81vQqekeGkichb0Hcc7QFzubThtrHqdXkfSym1dtpn.Y8IzChzE7RP_3uhe ">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 10.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: 21Vv#mGD.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 11. Фундаментальные решения уравнений математической физики. Примеры вывода амплитуды фронта для приближения мелкой воды и задачи акустики.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/TCkRvM1kGFYDwGGFRicx80OyEJPF20R045KMGj5gT_zxUNbtrtzdG45Kmrv2i2FK.e87mMhJa24AZw9hF ">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 11.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: QmUkX3B#.</p></div>
        <div class="row ps-4 my-4"><p class="lead"></p></div>
        <div class="row ps-4"><p class="lead"><h4>Лекция 12. Задача Радона.</h4></p></div>
        <div class="row ps-4"><p class="lead"><a rel="noopener" target="_blank" href="https://us02web.zoom.us/rec/share/N1qPYBoR0mm5K9RLd0_LB7B4LFDFvzUY5IuZHMbiO34nJE6KjVRS_9xyYE5CPAe_.vVf4PyuinaX2Cw47 ">Запись лекции</a> и <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/СК-25_Семинар 12.pdf">материалы</a> можно найти по ссылкам. Код доступа к записи: z7YVe?6P.</p></div>

</section>
        </Container>
        

    <Footer />
    </>
    
    )}