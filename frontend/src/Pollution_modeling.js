import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2 from './Components/NaviBarv2';
import ModelingSEIR_HCD from './ModelingSEIR_HCD'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import pollution1 from "./images/directions/pollution1.png"
import pollution2 from "./images/directions/pollution2.png"
import pollution3 from "./images/directions/pollution3.png"
import Footer from './Components/Footer'



export function Pollution_modeling(){


  return(
  <>
  <NaviBarv2 />
      <Container className="my-3"   style={{
              height: "120%" }}>
                <p class="lead my-4"><u>Разработка модели прогноза значений эмиссий (СО, CO2, NOx) на российских ТЭЦ с использованием моделей машинного обучения и глубоких нейронных сетей с целью оценки региональной экологии”</u></p>
                <p class="lead my-4">Одна из актуальных тем в области энергетики связана с созданием цифровых двойников электростанций, с использованием достижений искусственного интеллекта для повышения эффективности и надежности работы теплоэнергетического оборудования (ПГУ, ГТУ). Принципиальная схема тепловой электростанции станции (ТЭЦ) показывает технологическую связь всех ее основных элементов и их роль в технологическом процессе выработки тепла и электрической энергии. На рисунке 1 представлена принципиальная тепловая схема парогазовой электростанции, мощностью 230 МВт.  </p>
                <p class="lead my-4">В области изучения работы ТЭЦ и оценки вредных выбросов за последние 5 лет можно отметить работы авторов из Турции (Namık Kemal University, Tekirdağ), Канады (Southern Alberta Institute of Technology), Китая (SJTU), Великобритании (University of Aberdeen), Siemens UK; США (Harvard University; Jet Propulsion Laboratory; California Institute of Technology, Pasadena). Данное научное направление актуально в связи с сокращением выброса вредных веществ в атмосферу, с соблюдений требований по международным нормам в области экологических стандартов.</p>
                <p class="lead my-4">Наша научная работа направлена на формирование датасетов по 3-м газотурбинным установкам (ГТУ) модели Alstom GT13E2 с номинальной мощностью P=180 МВт, которые работают в составе ТЭЦ44, в составе 3-х различных парогазовых установках (ПГУ), а также ТЭЦ11 (модели ГТУ Siemens V64.3A / SGT-1000F с номинальной мощностью P= 70 МВт и Ansaldo AE64.3А с номинальной мощностью P= 75 МВт). Значения эмиссии выбросов CO (окись углерода), CO2, NO2 (оксид азота), оцениваются в mg/m3 по историческим данным с АСУТП за 3 года (2021-2023). Кратность записи данных задается в 1 час. </p>
                <p class="lead my-4">На первом этапе для формирования датасета было выбрано 18 параметров на ТЭЦ: 
-	температура, давление, влажность окружающей среды; <br></br>
-	температура на входе и на выходе из турбины; <br></br>
-	давление газа на входе в турбину; <br></br>
-	давление газа до и после компрессора; <br></br>
-	температура в компрессоре; <br></br>
-	вырабатываемая мощность ГТУ; <br></br>
-	значения величин CO, 02, CO2, NOx (Рис.2, Рис.3).
</p>
                <p class="lead my-4">Стоит отметить, что авторы из University of Aberdeen, UK выполняют в настоящее время проект по экологическому мониторингу ГТУ SGT-400 и собирают около 174 параметров. Далее количество данных сокращается до 88, применяются методы ML.</p>
                <p class="lead my-4">В качестве исходных данных для анализа значений выброса эмиссий оксида CO,CO2, NOx с российских ТЭЦ и определения положения атмосферных струй (плюмов) от дымовых труб могут быть использованы данные со спутников Sentinel-2, Sentinel-5P/TROPOMI, Landsat 7,8,9. Необходимы будут метеоданные по скорости ветра, направлению ветра, влагосодержанию из базы данных ECMWF’s ERA5. Планируется применение моделей для инверсии гауссовского плюма, для учета влияния поперечного потока, интегрального увеличения массы и метода дивергенции.</p>
                <p class="lead my-4">В проекте планируется разработать математическую модель прогноза выброса вредных веществ и реализовать ее в виде программы на языке Python.</p>
                <p class="lead my-4">В проекте будут рассмотрены современные модели машинного обучения (eXtreme Gradient Boosting – GBDT XGBoost; LightGBM; SVGP – Sparce Variational Gaussian Processes), модели глубоких нейронных сетей: LSTM, Extreme learning machine (ELM) regressor; трансформеров (Self-Attention and Intersample Attention Transformer- SAINT; FT-Transformer, TabTransformer, MiniRocket). Планируется использовать библиотеки для фреймворка машинного обучения PyTorch: tsai, pytorch_tabular, tab-transformer-pytorch.</p>
                <div class="center my-4"><img src={pollution1} align="center" width={700} /></div>
                <div class="center"><img src={pollution2} align="center" width={850} /><p class="lead my-4">Рис. 2. Пример временного рядя для выбросов NOx в мг/м3 с российской электростанции ТЭЦ44 на основе наблюдений с кратностью записи в 1 час за 2022-2023 г.</p></div>
                <div class="center"><img src={pollution3} align="center" width={850} /><p class="lead my-4">Рис. 3. Пример временного рядя для выбросов CO2 в мг/м3 с российской электростанции ТЭЦ44 на основе наблюдений с кратностью записи в 1 час за 2022-2023 г.</p></div>
                
    </Container>
    <Footer />
  </>
)}