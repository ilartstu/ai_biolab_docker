import React, {useState, useEffect, useRef} from "react";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Form, ListGroup, FormControl, Stack,
OverlayTrigger, Popover, InputGroup, ProgressBar, Spinner, Tabs, Tab, Collapse, Carousel, Alert, Modal, ButtonGroup,
DropdownButton, Dropdown} from 'react-bootstrap';
import { CLoadingButton } from '@coreui/react-pro'
import axios from "axios"
import FileDownload from "js-file-download"
import { Formik } from "formik";
import * as yup from "yup";
import {FiDownload } from 'react-icons/fi'
import {BsFillFileEarmarkPdfFill, BsFillArrowUpRightSquareFill, BsFillCaretRightFill, BsFillCaretDownFill,
BsFillPersonLinesFill, BsExclamationLg, BsInfo} from 'react-icons/bs'
import {FcSearch} from 'react-icons/fc'
import NaviBarv2 from './Components/NaviBarv2';
import {BsZoomIn} from 'react-icons/bs'
import { motion } from "framer-motion"
import field1 from "./images/directions/field1.png"
import field2 from "./images/directions/field2.png"
import field3 from "./images/directions/field3.png"
import seir1 from "./images/directions/seir1.png"
import seir2_ru from "./images/directions/seir2_ru.jpg"
import seir3 from "./images/directions/seir3.png"
import seir4 from "./images/directions/seir4.png"
import seir5 from "./images/directions/seir5.png"
import seir6 from "./images/directions/seir6.png"
import machine1 from "./images/directions/machine1.png"
import machine2 from "./images/directions/machine2.png"
import machine3 from "./images/directions/machine3.png"
import machine4 from "./images/directions/machine4.png"
import machine5 from "./images/directions/machine5.png"
import machine6 from "./images/directions/machine6.png"
import machine7 from "./images/directions/machine7.png"
import machine8 from "./images/directions/machine8.png"
import machine9 from "./images/directions/machine9.png"
import { DownloadCount } from 'axios-progress-bar'


import ModelingSEIR_HCD from './ModelingSEIR_HCD'
import Description_AOM from './Components/Description_AOM'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

import Footer from './Components/Footer'

import {
  Chart as ChartJS,
  PointElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from 'chart.js';

import {Bar, Line} from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
  PointElement,
  Filler,
);

ChartJS.register(zoomPlugin);



const download_article=(e)=>{
   e.preventDefault()
   axios({
     url:"https://server.ai-biolab.ru/article",
     method: "GET",
     responseType:"blob"
   }).then((resA)=>{
     FileDownload(resA.data, "article.pdf")
   })
}

const schema = yup.object().shape({
  population: yup.number().min(1000000).max(8000000).typeError("требуется числовое значение").required("обязательное поле"),
  n_future: yup.number().min(10).max(100).typeError("требуется числовое значение").required("обязательное поле"),
  init_infected: yup.number().min(10).max(100).typeError("требуется числовое значение").required("обязательное поле"),
});

export function The_spread_of_epidemics(){

  const [population_data, setPopulation_data] = useState(2798170)
  const [region_data, setRegion_data] = useState(1)
  const [region_name, setRegion_name] = useState("Новосибирская область")
  const [n_future_day, setN_future_day] = useState(45)
  const [init_inf, setInit_inf] = useState(20)

  const download_chart=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }

  const zoom_chart=(e) => {
    e.preventDefault()
    const img = document.getElementById('chart')
    img.plugins.scales.y.min = 80;
    img.plugins.scales.y.max = 100;
    img.update()
  }

  const cancelToken = useRef();

  const run_msim_ = (e) => {
    e.preventDefault()
    var now = new Date().toLocaleDateString();
    setWithspinner(true)
    setIsrunning(true)
    cancelToken.current = axios.CancelToken.source();
  axios({
      url:'https://server.ai-biolab.ru/data',
      method: "POST",
      responseType:"blob",
      data: {population_data, region_data, n_future_day, init_inf},
      cancelToken: cancelToken.current.token
    }).then((res)=>{
         setWithspinner(false)
         setIsrunning(false)
         initchart()
      })
  }

   const break_get = () => {
     setWithspinner(false)
     setIsrunning(false)
     cancelToken.current.cancel();
   }

    const [chartData_all, setChartData_all] = useState({
      datasets: [],
    })
    const [initchartData_all, setINITChartData_all] = useState({
      datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})
    const [isrunning, setIsrunning] = useState(false)

    let cov_data = [];
    let cov_nd = [];
    let cov_nd_high = []
    let cov_nd_state=[];
    let cov_data_state=[];
    const [data, setData] = useState(cov_data)
    const [data_cov_nd_high, setData_cov_nd_high] = useState(cov_nd_high)
    const [data_cov_nd, setData_cov_nd] = useState(cov_nd)

    let cov_cum_diag = [];
    let cov_cum_diag_high = [];
    const [data_cov_cum_diag_high, setData_cov_cum_diag_high] = useState(cov_cum_diag_high)
    const [data_cov_cum_diag, setData_cov_cum_diag] = useState(cov_cum_diag)

    let cov_new_death= [];
    let cov_new_death_high = [];
    const [data_cov_new_death_high, setData_cov_new_death_high] = useState(cov_new_death_high)
    const [data_new_death, setData_cov_new_death] = useState(cov_new_death)

    let cov_new_rec= [];
    let cov_new_rec_high = [];
    const [data_cov_new_rec_high, setData_cov_new_rec_high] = useState(cov_new_rec_high)
    const [data_new_rec, setData_cov_new_rec] = useState(cov_new_rec)

    let cov_new_crit= [];
    let cov_new_crit_high = [];
    const [data_cov_new_crit_high, setData_cov_new_crit_high] = useState(cov_new_crit_high)
    const [data_new_crit, setData_cov_new_crit] = useState(cov_new_crit)


    const [someerrors, setSomeerrors] = useState(false)
    const [loadingprosses, setLoadingprosses] = useState(true)
    const [chartnum, setChartnum] = useState(1)
    //1-5 - chart
    //6-10 - init chart

    const real_data1=(e)=>{
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_diagnoses));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
          label: "cредний прогноз",
          data: data_cov_nd,
          fill: false,
          borderColor: "rgba(0, 191, 255, 1)",
          backgroundColor: "rgba(0, 191, 255, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1
        },
          {
          label: "максимальный прогноз",
          data: data_cov_nd_high,
          fill: true,
          backgroundColor: "rgba(135, 206, 250, 0.2)",
          borderColor: "rgba(135, 206, 250, 0.8)",
          tension: 0.9,
          borderWidth: 0.5,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
        },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data2=(e)=>{
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.cum_diagnoses));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.001,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_cov_cum_diag,
            fill: false,
            borderColor: "rgba(0, 0, 0, 1)",
            backgroundColor: "rgba(0, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_cum_diag_high,
            fill: true,
            borderColor: "rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data3=(e)=>{
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_deaths));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_new_death,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_new_death_high,
            fill: true,
            borderColor: "rgba(255, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data4=(e)=>{
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_recoveries));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
                label: "cредний прогноз",
                data: data_new_rec,
                fill: false,
                borderColor: "rgba(252,141,214, 1)",
                backgroundColor: "rgba(252,141,214, 1)",
                tension: 0.9,
                borderWidth: 4,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
                {
                label: "максимальный прогноз",
                data: data_cov_new_rec_high,
                fill: true,
                borderColor: "rgba(252,141,214, 0.3)",
                backgroundColor: "rgba(252,141,214, 0.3)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data5=(e)=>{
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.n_critical));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
              label: "cредний прогноз",
              data: data_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: data_cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }

    const real_data6=(e)=>{
      axios({
          url:'https://server.ai-biolab.ru/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_diagnoses));
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
          label: "cредний прогноз",
          data: data_cov_nd,
          fill: false,
          borderColor: "rgba(0, 191, 255, 1)",
          backgroundColor: "rgba(0, 191, 255, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1
        },
          {
          label: "максимальный прогноз",
          data: data_cov_nd_high,
          fill: true,
          backgroundColor: "rgba(135, 206, 250, 0.2)",
          borderColor: "rgba(135, 206, 250, 0.8)",
          tension: 0.9,
          borderWidth: 0.5,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
        },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data7=(e)=>{
      axios({
          url:'https://server.ai-biolab.ru/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.cum_diagnoses));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_cov_cum_diag,
            fill: false,
            borderColor: "rgba(0, 0, 0, 1)",
            backgroundColor: "rgba(0, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_cum_diag_high,
            fill: true,
            borderColor: "rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data8=(e)=>{
      axios({
          url:'https://server.ai-biolab.ru/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_deaths));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_new_death,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_new_death_high,
            fill: true,
            borderColor: "rgba(255, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data9=(e)=>{
      axios({
          url:'https://server.ai-biolab.ru/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_recoveries));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
                label: "cредний прогноз",
                data: data_new_rec,
                fill: false,
                borderColor: "rgba(252,141,214, 1)",
                backgroundColor: "rgba(252,141,214, 1)",
                tension: 0.9,
                borderWidth: 4,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
                {
                label: "максимальный прогноз",
                data: data_cov_new_rec_high,
                fill: true,
                borderColor: "rgba(252,141,214, 0.3)",
                backgroundColor: "rgba(252,141,214, 0.3)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data10=(e)=>{
      axios({
          url:'https://server.ai-biolab.ru/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.n_critical));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
              label: "cредний прогноз",
              data: data_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: data_cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }


    const initchart = () => {
      setChartnum(6)
      axios({
          url:'https://server.ai-biolab.ru/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_diagnoses) {
            cov_nd.push(parseInt(dataObj));
            setData_cov_nd(cov_nd)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_diagnoses_high) {
            cov_nd_high.push(dataObj);
            setData_cov_nd_high(cov_nd_high)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_nd,
              fill: false,
              borderColor: "rgba(0, 191, 255, 1)",
              backgroundColor: "rgba(0, 191, 255, 1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
            },
              {
              label: "максимальный прогноз",
              data: cov_nd_high,
              fill: true,
              backgroundColor: "rgba(135, 206, 250, 0.2)",
              borderColor: "rgba(135, 206, 250, 0.8)",
              tension: 0.9,
              borderWidth: 0.5,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
            },
          ],
          });
          setChartOptions({
             maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев заражений",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
          setnewChart(false)
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const initchart_cumdiag = () => {
      setChartnum(7)
      axios({
          url:'https://server.ai-biolab.ru/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.cum_diagnoses) {
            cov_cum_diag.push(parseInt(dataObj));
            setData_cov_cum_diag(cov_cum_diag)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.cum_diagnoses_high) {
            cov_cum_diag_high.push(dataObj);
            setData_cov_cum_diag_high(cov_cum_diag)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_cum_diag,
              fill: false,
              borderColor: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_cum_diag_high,
              fill: true,
              borderColor: "rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз суммарного количества заражений",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const initchart_newdeath = () => {
      setChartnum(8)
      axios({
          url:'https://server.ai-biolab.ru/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_deaths) {
            cov_new_death.push(parseInt(dataObj));
            setData_cov_new_death(cov_new_death)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_deaths_high) {
            cov_new_death_high.push(dataObj);
            setData_cov_new_death_high(cov_new_death)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_death,
              fill: false,
              borderColor: "rgba(255,0,0, 1)",
              backgroundColor: "rgba(255, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_death_high,
              fill: true,
              borderColor: "rgba(255, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз летальных исходов",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const initchart_new_rec = () => {
      setChartnum(9)
      axios({
          url:'https://server.ai-biolab.ru/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_recoveries) {
            cov_new_rec.push(parseInt(dataObj));
            setData_cov_new_rec(cov_new_rec)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_recoveries_high) {
            cov_new_rec_high.push(dataObj);
            setData_cov_new_rec_high(cov_new_rec_high)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_rec,
              fill: false,
              borderColor: "rgba(252,141,214, 1)",
              backgroundColor: "rgba(252,141,214, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_rec_high,
              fill: true,
              borderColor: "rgba(252,141,214, 0.3)",
              backgroundColor: "rgba(252,141,214, 0.3)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев выздоровления",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const initchart_new_crit = () => {
      setChartnum(10)
      axios({
          url:'https://server.ai-biolab.ru/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_critical) {
            cov_new_crit.push(parseInt(dataObj));
            setData_cov_new_crit(cov_new_crit)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_critical_high) {
            cov_new_crit_high.push(dataObj);
            setData_cov_new_crit_high(cov_new_crit_high)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз количества больных в критическом состоянии",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const chart = () => {
      setChartnum(1)
      axios
        .get("https://server.ai-biolab.ru/getMsim")
        .then(res => {
          setLoadingprosses(false)
          setSomeerrors(false)
          for (const dataObj of res.data.results.new_diagnoses) {
            cov_nd.push(parseInt(dataObj));
            setData_cov_nd(cov_nd)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_diagnoses_high) {
            cov_nd_high.push(dataObj);
            setData_cov_nd_high(cov_nd_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_nd,
              fill: false,
              borderColor: "rgba(0, 191, 255, 1)",
              backgroundColor: "rgba(0, 191, 255, 1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_nd_high,
              fill: true,
              backgroundColor: "rgba(135, 206, 250, 0.2)",
              borderColor: "rgba(135, 206, 250, 0.8)",
              tension: 0.9,
              borderWidth: 0.5,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
            },],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                pan: {
                  enabled: true,
                  mode: 'xy',
                },
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {
                     enabled: true
                   },
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев заражения",
              },
              subtitle: {
                display: true,
                align: 'end',
                position: "top",
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          setLoadingprosses(false)
          setSomeerrors(true)
          console.log(err);
        });
    };
    const chart_cumdiag = () => {
      setChartnum(2)
      axios
        .get("https://server.ai-biolab.ru/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.cum_diagnoses) {
            cov_cum_diag.push(parseInt(dataObj));
            setData_cov_cum_diag(cov_cum_diag)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.cum_diagnoses_high) {
            cov_cum_diag_high.push(dataObj);
            setData_cov_cum_diag_high(cov_cum_diag_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_cum_diag,
              fill: false,
              borderColor: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_cum_diag_high,
              fill: true,
              borderColor: "rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз суммарного количества заражений",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const chart_newdeath = () => {
      setChartnum(3)
      axios
        .get("https://server.ai-biolab.ru/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.new_deaths) {
            cov_new_death.push(parseInt(dataObj));
            setData_cov_new_death(cov_new_death)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_deaths_high) {
            cov_new_death_high.push(dataObj);
            setData_cov_new_death_high(cov_new_death)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_death,
              fill: false,
              borderColor: "rgba(255,0,0, 1)",
              backgroundColor: "rgba(255, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_death_high,
              fill: true,
              borderColor: "rgba(255, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз летальных исходов",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const chart_new_rec = () => {
      setChartnum(4)
      axios
        .get("https://server.ai-biolab.ru/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.new_recoveries) {
            cov_new_rec.push(parseInt(dataObj));
            setData_cov_new_rec(cov_new_rec)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_recoveries_high) {
            cov_new_rec_high.push(dataObj);
            setData_cov_new_rec_high(cov_new_rec_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_rec,
              fill: false,
              borderColor: "rgba(252,141,214, 1)",
              backgroundColor: "rgba(252,141,214, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_rec_high,
              fill: true,
              borderColor: "rgba(252,141,214, 0.3)",
              backgroundColor: "rgba(252,141,214, 0.3)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев выздоровления",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };
    const chart_new_crit = () => {
      setChartnum(5)
      axios
        .get("https://server.ai-biolab.ru/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.new_critical) {
            cov_new_crit.push(parseInt(dataObj));
            setData_cov_new_crit(cov_new_crit)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_critical_high) {
            cov_new_crit_high.push(dataObj);
            setData_cov_new_crit_high(cov_new_crit_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          ],
          });
          setChartOptions({
            maintainAspectRatio : false,
            responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                  },
                 zoom: {
                   wheel: {
                     enabled: true,
                     speed: 0.1,
                   },
                   drag: {
                    enabled: true,
                  },
                   pan: {enabled: true},
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз количества больных в критическом состоянии",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    useEffect(() => {
      real_data1();
    }, [])

    useEffect(() => {
      chart();
    }, [])

  const [withspinner, setWithspinner] = useState(false)
  const [newChart, setnewChart] = useState(true) /////true
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(true);

  const variants = {
    visible: custom => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.2}
    }),
    hidden: {
      opacity: 0,
      x: -100,
   },
  }

  const variants2 = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2}
    }),
    hidden: {
      opacity: 0,
      y: 100,
   },
  }


  return(
  <>
  <div style={{ backgroundColor: 'white'}}>
  <NaviBarv2 />
      <Container className=""   style={{ backgroundColor: 'white',
              height: "120%" }}>
                <p className="lead my-4">В лаборатории исследуются математические модели распространения инфекционных заболеваний в популяции (эпидемии), основанные на дифференциальных уравнениях (обыкновенные, уравнения в частных производных, стохастические), агентно-ориентированных, моделях машинного обучения и их комбинации. Основная идея, объединяющая все математические модели, состоит в построении алгоритмов анализа и идентификации неизвестных параметров моделей (коэффициенты, начальные и граничные условия), которые характеризуют особенности распространения эпидемии в исследуемом регионе: контагиозность вируса, скорость развития тяжелых форм заболевания, количество бессимптомных инфицированных, уровень изоляции больных, смертность и др.</p>
        <Tabs  justify defaultActiveKey="AOM" id="uncontrolled-tab-example" style={{ backgroundColor: 'white'}}>
          <Tab eventKey="AOM" title="Агентная модель">
          <Card className="text-center mx-auto" border="light" bg="light">
          <Row >
            <Col md={2} >
            <Row >
              <Col xs= {12}  lg={12}>    <Button
                    variant="outline-primary"
                    className="bg-white shadow1 text-primary my-2 mx-2"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                  >  {open? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Описание модели
                  </Button></Col>
              <Col xs= {12} lg={12}>

              <OverlayTrigger
                rootClose={true}
                 placement="bottom"
                 ref={(ref) => this.overlay = ref}
                 overlay={
                   <Popover className="shadow1">
                     <Popover.Body>
                     <div align="center" className="text-black">
                     Моделирование сценариев распространения Covid-19 в Республике Казахстан на основе регуляризации агентной модели.</div>
                     <small  align="center" className="text-success"><div>О.И. Криворотько</div>
                     <div>С.И. Кабанихин</div>
                      <div>М.А. Бектемесов</div>
                        <div>М.И. Сосновская</div>
                          <div>А.В.Неверов</div></small>
                     </Popover.Body>
                   </Popover>
                 }>
                <Button variant="link" onClick={(e)=>{
                download_article(e)
                document.body.click(e)
                this.overlay.hide()
                }}><BsFillFileEarmarkPdfFill size={30}/></Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                  rootClose={true}
                     placement="bottom"
                     ref={(ref) => this.overlay = ref}
                     overlay={
                       <Popover className="shadow1">
                         <Popover.Body>
                         <div align="center" className="text-success">
                         <div><small>Публикация в журнале Моделирование инфекционных заболеваний.</small></div>
                         <div className="text-black">Агентное моделирование вспышек COVID-19 в штате Нью-Йорк и Великобритании: алгоритм идентификации параметров</div>
                         <div><small>О.И. Криворотько</small></div>
                         <div><small>М.И. Сосновская</small></div>
                         <div><small>И.А. Ващенко</small></div>
                         <div><small>CliffKerr</small></div>
                         <div><small>DanielLesnic</small></div>
                    </div>
                         </Popover.Body>
                       </Popover>
                     }>
                    <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798"><Button variant="link" onClick={(e)=>{
                    document.body.click(e)
                    this.overlay.hide()
                    }}><BsFillArrowUpRightSquareFill size={30}/></Button></a>
                      </OverlayTrigger>
                      <OverlayTrigger
                      rootClose={true}
                      ref={(ref) => this.overlay = ref}
                         placement="bottom"
                         overlay={
                           <Popover className="shadow1">
                             <Popover.Body>
                             <div align="center" className="text-success">
                             <div><small>Препринт 300 СО РАН, института математики им. С.Л.Соболева.</small></div>
                             <div className="text-black">Математические модели распространения COVID-19.</div>
                              <div><small>О.И. Криворотько</small></div>
                              <div><small>С.И. Кабанихин</small></div>
                        </div>
                             </Popover.Body>
                           </Popover>
                         }>
                          <a href="https://arxiv.org/pdf/2112.05315.pdf"><Button variant="link" onClick={(e)=>{
                          document.body.click(e)
                          this.overlay.hide()
                          }}><BsFillArrowUpRightSquareFill size={30}/></Button></a>
                          </OverlayTrigger>
                          </Col>
                          </Row>
          </Col>
          <Col md={10} >
        <Card className="my-3 shadow1">  <p align="justify" className="mx-3 my-1"><small>Прогнозирование производится посредством агентной модели расчета сценариев динамики выявленных случаев
COVID-19, в основе которой лежат обработка неполных эпидемиологических данных и решение обратной задачи восстановления параметров агентной
модели по совокупности доступных эпидемиологических данных. Основным инструментом построения модели является открытая библиотека <a href="https://docs.idmod.org/projects/covasim/en/latest/index.html" >COVASIM</a>. </small></p></Card>
<div className="mx-2"><hr /></div>
      </Col>
        </Row>
          <Collapse in={open}>
            <div id="example-collapse-text" className="my-2">
                <Description_AOM />
            </div>
          </Collapse>
          <Row >
            <Col sm={12} xs={12} md={12} lg={4}>
            <motion.div initial="hidden"
               custom={1}
              variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}}>
              <ListGroup className = "mx-3 my-1 shadow1">
              <OverlayTrigger
               placement="right"
               overlay={
                <Alert variant="danger">
                  <h6>Пожалуйста, не обновляйте станицу</h6>
                  <small>при введении параметров и после запуска модели, </small>
                  <div><small>в противном случае расчёты будут прерваны</small></div>
                </Alert>

               }
               >
                <ListGroup.Item align="left" className="bg-secondary text-white">Параметры моделирования
                <BsExclamationLg />

                </ListGroup.Item>
                </OverlayTrigger>
                <ListGroup.Item variant="light">
                <Row >
                  <Col sm={12} sm={12} xs={12} md={12} lg={7} >
                  <Stack gap={0}>
                  <div>
                <Stack direction="horizontal" gap={3}>
                <div > <p align="left" className="my-3 text-black text-small"><small>Регион</small></p></div>

                    <div>
                    <OverlayTrigger
                     placement="right"
                     overlay={
                       <Popover>
                         <Popover.Body>
                           Регион для построения сценария развития заболевания.
                         </Popover.Body>
                       </Popover>
                     }
                     >
                        <Button size="sm" variant="link" className="text-success">?</Button>
                      </OverlayTrigger>
                    </div>
              </Stack>
                  </div>
                    <div>
                    <Stack direction="horizontal" gap={2}>
                  <div > <p align="left" className="my-2 text-black text-small"><small>Численность популяции</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                         Количество агентов - людей, восприимчивых к заболеванию.
                         <hr />
                         <small className="text-muted">от 1 000 000 до 8 000 000</small>
                       </Popover.Body>
                     </Popover>
                   }
                   >
                      <Button size="sm" variant="link" className="text-success">?</Button>
                    </OverlayTrigger>
                  </div>

                </Stack>
                    </div>
                    <div>
                    <Stack direction="horizontal" gap={0}>
                  <div > <p align="left" className=" text-black text-small"><small>Начально инфицированных</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                         Количество начально инфицированных человек.
                         <hr />
                         <small className="text-muted">от 10 до 100 человек</small>
                       </Popover.Body>
                     </Popover>
                   }
                   >
                      <Button size="sm" variant="link" className="text-success">?</Button>
                    </OverlayTrigger>
                  </div>
                </Stack>
                    </div>
                    <div>
                    <Stack direction="horizontal" gap={3}>
                  <div > <p align="left" className=" my-2 text-black text-small"><small>Дней прогнозирования</small></p></div>
                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                        На сколько дней вперед строится сценарий развития заболевания.
                        <hr />
                        <small className="text-muted">от 10 до 100 дней</small>
                       </Popover.Body>
                     </Popover>
                   }
                   >
                      <Button size="sm" variant="link" className="text-success">?</Button>
                    </OverlayTrigger>
                  </div>
                </Stack>
                <Row >
                      <Col sm={6}></Col>
                      <Col sm={6}>  <Button variant="secondary" align="end" className=" my-3 text-white shadow1" disabled={!isrunning} onClick={break_get}>Прервать</Button></Col>
                </Row>
                    </div>
                  </Stack>
              </Col>
                  <Col sm={12} sm={12} xs={12} md={12} lg={5}>
                  <Formik
                        validationSchema={schema}
                        onChange={(e) => setPopulation_data(e.target.values.population)}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           actions.setSubmitting(false);
                         }, 1000);
                       }}
                        initialValues={{
                          population:  population_data,
                          init_infected: init_inf,
                          n_future: n_future_day,
                          lastName: '3',
                        }}
                      >
                        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, resetForm, setFieldValue}) => (
                <Form noValidate>
                  <Stack gap={3}>
                      <Form.Select aria-label="Default select example"
                        type="number"
                        name="region"
                        isValid={true}
                        onChange={(e) => {
                          const selectedRegion = e.target.value;
                          let sregion = Number(selectedRegion)
                          setRegion_data(sregion)
                          if(sregion == 1){
                            setRegion_name("Новосибирская область")
                            setPopulation_data(2798170)
                            setFieldValue("population", 2798170)
                          } else if(sregion == 2) {
                            setRegion_name("Омская область")
                            setPopulation_data(578698)
                            setFieldValue("population", 1879548)
                          } else if(sregion == 3) {
                            setRegion_name("Алтайский край")
                            setPopulation_data(2268179)
                            setFieldValue("population", 2268179)
                          }
                        }}
                        >
                            <option value="1">Новосибирская область</option>
                            <option value="2">Омская область</option>
                            <option value="3">Алтайский край</option>
                      </Form.Select>
                      <Form.Group key={1} as={Col} controlId="validationFormik01">
                        <Form.Control
                          type="number"
                          name="population"
                          value={values.population}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={!errors.population}
                          isInvalid={!!errors.population}
                          onSubmit={setPopulation_data(values.population)}
                        />
                      </Form.Group>
                      <Form.Group key={2} as={Col} controlId="validationFormik04">
                        <Form.Control
                          type="number"
                          name="init_infected"
                          value={values.init_infected}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={!errors.init_infected}
                          isInvalid={!!errors.init_infected}
                          onSubmit={setInit_inf(values.init_infected)}
                        />
                      </Form.Group>
                      <Form.Group key={3} as={Col} controlId="validationFormik02">
                        <Form.Control
                          type="number"
                          name="n_future"
                          value={values.n_future}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={!errors.n_future}
                          isInvalid={!!errors.n_future}
                          onSubmit={setN_future_day(values.n_future)}
                        />
                      </Form.Group>

                        <Button  type="submit"  variant="success" className="shadow1"
                          disabled={!isValid || isrunning}
                          onSubmit={handleSubmit}
                          onClick={(e) => run_msim_(e)}
                        >
                        {withspinner ? <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        /> : null } Запустить</Button>
                  </Stack>
                  </Form>
                )}

              </Formik>
                </Col>
                {withspinner ? <small className="text-muted"><small> ...ожидаемое время расчёта: 1 минута </small></small> : null }
            </Row>
            </ListGroup.Item>
        </ListGroup>
         </motion.div>
            </Col>
            <Col sm={12} xs={12} md={12} lg={8}>
            <Container>
            <Stack>
      <div className="ms-auto">
              <motion.div initial="hidden"
                 custom={1}
                variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}}>
            {chartnum == 1 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data1(e)}>Показать данные</Button> : null}
            {chartnum == 2 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data2(e)}>Показать данные</Button> : null}
            {chartnum == 3 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data3(e)}>Показать данные</Button> : null}
            {chartnum == 4 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data4(e)}>Показать данные</Button> : null}
            {chartnum == 5 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data5(e)}>Показать данные</Button> : null}

            {chartnum == 6 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data6(e)}>Показать данные</Button> : null}
            {chartnum == 7 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data7(e)}>Показать данные</Button> : null}
            {chartnum == 8 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data8(e)}>Показать данные</Button> : null}
            {chartnum == 9 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data9(e)}>Показать данные</Button> : null}
            {chartnum == 10 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data10(e)}>Показать данные</Button> : null}
            <OverlayTrigger
             placement="left"
             overlay={
               <Popover>
                 <Popover.Body>
                  <small className="text-muted">Чтобы скрыть отображаемые данные - кликните по их названиям</small>
                 </Popover.Body>
               </Popover>
             }
             >
              <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsInfo size = {18} /></Button>
              </OverlayTrigger>
            <OverlayTrigger
             placement="left"
             overlay={
               <Popover>
                 <Popover.Body>
                  <small className="text-muted">Для приближения - выделите необходимую область или прокрутите колесо мыши.</small>
                 </Popover.Body>
               </Popover>
             }
             >
              <Button variant="outline-secondary" size="sm"  className=" mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
              </OverlayTrigger>
              <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e)}><FiDownload/></Button>
              </motion.div>
              </div></Stack>
              {loadingprosses ? <div style={{
                      height: '400px'}}><Spinner style={{position: 'absolute', top: '50%'}} animation="border" variant="info"  /></div> :
              someerrors ?   <div style={{
                      height: '350px' }}><Alert variant="danger" className="my-5"> <Alert.Heading>Ошибка загрузки</Alert.Heading>
              Сервер временно не отвечает, пожалуйста, <Alert.Link href="/modeling">обновите страницу</Alert.Link> или повторите попытку позже.
              <hr /> </Alert> </div> :

   newChart? <div style={{ height: '25rem' }}><Line id="chart" data={chartData_all} options={chartOptions} height="150%" /></div> : <div ><Line id="chart" options={chartOptions} data={initchartData_all} height="150%" /></div>}
   <motion.div initial="hidden"
      custom={2}
     variants={variants2} animate="visible" viewport={{amount: 0.1, once: true}}>
   {newChart? <Nav variant="pills" defaultActiveKey="1"className="my-2" >
     <Nav.Item >
     <Button className="shadow3" size="sm" variant="outline-info" onClick = {chart} style={{color:"#FFFFFF"}}>
       <Nav.Link className="hoverWhite"  eventKey="1">Заражения</Nav.Link>
     </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {chart_cumdiag} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite" eventKey="2">Суммарная заболеваемость</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info"  onClick = {chart_newdeath} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite" eventKey="3">Смертность</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {chart_new_rec} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="4">Выздоровления</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {chart_new_crit} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="5">Критические</Nav.Link>
       </Button>
     </Nav.Item>
   </Nav> : null} </motion.div>

   {newChart? null : <Nav variant="pills" defaultActiveKey="1" className="my-2 ">
     <Nav.Item >
     <Button className="shadow3" className="chart3" size="sm" variant="outline-info" onClick = {initchart} style={{color:"#FFFFFF"}}>
       <Nav.Link className="hoverWhite"  eventKey="1">Заражения</Nav.Link>
     </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {initchart_cumdiag} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="2">Суммарная заболеваемость</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info"  onClick = {initchart_newdeath} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="3">Смертность</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {initchart_new_rec} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="4">Выздоровления</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {initchart_new_crit} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="5">Критические</Nav.Link>
       </Button>
     </Nav.Item>
   </Nav>}
            </Container>
            </Col>
          </Row>
        </Card>
          </Tab>
          <Tab eventKey="SEIR-HCD" title="SEIR-HCD">
          <p class="lead my-4">Построена и проанализирована <b><u>дифференциальная SEIR-HCD модель распространения COVID-19 в регионах Российской Федерации</u></b>, описываемая 7 нелинейными обыкновенными дифференциальными уравнениями, объединенными законом действующих масс. Суть модели заключается в исследовании распространения инфекционного заболевания в замкнутой популяции, разделенной на 7 групп, связанные между собой коэффициентами (часто, вероятностями) перехода: восприимчивые (S), бессимптомные носители (E), симптомные инфицированные (I), вылеченные или имеющие иммунитет (R), госпитализированные (H), критические случаи, подключенные к аппарату искусственной вентиляции легких (ИВЛ) (C) и умершие (D). Внутри каждой группы индивидуумы однородно перемешаны. Коэффициенты перехода между состояниями характеризуются средним временем пребывания в инкубационном состоянии (t<sub>inc</sub>), среднее время инфицирования (t<sub>inf</sub>), госпитализации (t<sub>hosp</sub>), пребывания в критическом состоянии (t<sub>crit</sub>) и продолжительность иммунитета к вирусу (t<sub>imm</sub>), которые определяются из статистических оценок и распределены по лог-нормальному закону с заданными средним и дисперсией. Вектор параметров q=(<span>&alpha;</span>(t), <span>&beta;</span>(t), <span>&epsilon;</span>(t), <span>&mu;</span>(t), E<sub>0</sub>, I<sub>0</sub>) определяется в ходе решения обратной задачи, состоящей в минимизации целевого функционала, описывающего отклонение модельных данных от реальных:</p>
          <div className="center"><img src={seir1} align="center" width={800} /></div>
          <p class="lead my-4">Здесь h<sub>k</sub><sup>real</sup> – количество выявленных инфицированных COVID-19 в день k, b<sub>k</sub><sup>real</sup> – доля бессимптомных носителей из числа выявленных в день k, C<sub>k</sub><sup>real</sup> – количество критических больных в день k, g<sub>k</sub><sup>real</sup> – кумулятивное количество смертей в результате COVID-19 в день k. Параметры q кусочно-постоянны по времени, согласованные с принятыми ограничительными мерами в Новосибирской области (вертикальные пунктирные линии). Анализ чувствительности показал, что скорость формирования иммунитета <span>&beta;</span>(t) не чувствителен к измерениям, что делает обратную задачу некорректной (серая линия на рисунке). При добавлении дополнительной информации о проценте населения с поздними антителами к вирусу Sars-CoV-2 (сайт Инвитро), решение обратной задачи (красная линия) лучше описывает реальные данные с 22.05.2020 по 17.10.2021 (черные точки).</p>
          <div class="center"><img src={seir2_ru} align="center" width={600} /></div>
          <div class="center"><img src={seir3} align="center" width={600} /></div>
          <p class="lead my-4">Построена и проанализирована дифференциальная математическая модель распространения ко-инфекции туберкулеза и ВИЧ в регионах Российской Федерации, описываемая системой 8 нелинейных обыкновенных дифференциальных уравнений, связанных между собой законом действующих масс (Рис. 1). Принцип построения модели основан на разделении замкнутой популяции на 8 групп: восприимчивые (S), носители латентного туберкулеза (L), больных активной формой туберкулеза (I), вылеченные от туберкулеза (T), больные ВИЧ (J<sub>1</sub>), инфицированные ВИЧ и латентным туберкулезом (J<sub>2</sub>), больные активным туберкулезом и ВИЧ (J<sub>3</sub>), СПИД больные (A). Параметры модели q = ( βc, <lambda>σ</lambda>, k, k<sup>*</sup>, r<sub>1</sub>, r<sub>2</sub>, r<sub>3</sub>, r<sub>4</sub>, J<sub>1</sub>, 0) определялись как решение обратной задачи по дополнительной информации о количестве больных активной формой туберкулеза, ВИЧ-инфицированных и больных активной формой туберкулеза и ВИЧ с 2009 по 2023 гг. Наиболее неблагоприятные регионы по эпидемиологической ситуации туберкулеза в РФ на 2023 год (высокий уровень контагиозности вируса и низкий уровень лечения активной формы туберкулеза): Челябинск, Новосибирск, Тула и Удмуртия (Рис. 2 и 3).</p>
          <div class="center"><img src={seir4} align="center" width={600} /><p class="lead my-4">Рис. 1. Схема дифференциальной математической модели динамики ко-инфекции туберкулеза и ВИЧ в популяции.</p></div>
          <div class="center"><img src={seir5} align="center" width={600} /><p class="lead my-4">Рис. 2. Параметр контагиозности туберкулеза в РФ, вычисленный в рамках решения обратной задачи.</p></div>
          <div class="center"><img src={seir6} align="center" width={600} /><p class="lead my-4">Рис. 3. Коэффициент лечения активной формы туберкулеза в регионах РФ.</p></div>
          <p class="lead my-4"></p>
          <p class="lead my-4"></p>
          <p class="lead my-4"></p>
         
            <ModelingSEIR_HCD />
          </Tab>
          <Tab eventKey="field" title="Модели среднего поля">
          <p class="lead my-4"> Проведено сравнение нескольких подходов к моделированию эпидемий. Первый подход основан на известных компартментальных моделях типа SIR, представленных в виде системы обыкновенных дифференциальных уравнений. Второй и третий подходы основаны на моделях среднего поля, отличающихся между собой выбором популяцией стратегии изоляции. Сравнение проводилось с нескольких точек зрения: аналитический анализ, анализ чувствительности относительно параметров модели, численное сравнение с использованием синтетических и реальных данных, собранных во время пандемии Covid-19. Были получены ограничения на существование и единственность решения эпидемиологических задач среднего поля в разных формулировках. Проведен анализ чувствительности моделей. Решена обратная коэффициентная эпидемиологическая задача среднего поля. Проведены вычислительные эксперименты по восстановлению параметров модели на синтетических данных, зашумленных синтетических данных, реальных данных, неполных реальных данных.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Container align="left">
        <div>
            <img src={field1} width={600} alt="Описание изображения" />
            <p className="lead my-2" style={{ textAlign: 'left' }}>
                Рисунок 1. Численное сравнение прогнозов численности асимптотических больных в г. Новосибирске в 2020 г., полученных (а) с помощью дифференциальной модели SEIR-HCD (синяя линия); (б) с помощью двух постановок среднего поля (красная и черные линии) со статическими данными (черные точки)
            </p>
        </div>
    </Container>
    <Container align="right">
        <div>
            <img src={field2} width={650} alt="Описание изображения" />
            <p className="lead my-2" align="left">
                Рисунок 2. Сравнение качества восстановления параметра контагиозности вируса в зависимости от полноты используемых реальных измерений численности населения в разных эпидемиологических группах
            </p>
        </div>
    </Container>
</div>
<div class="center"><img src={field3} align="center" width={1000} /><p class="lead my-4">Рисунок 3. Анализ чувствительности прогноза числа инфицированных, полученного по эпидемиологической модели среднего поля, к параметрам модели. Показана временная динамика изменения индексов чувствительности (1,3,7,15,30,90,150 дней).</p></div>
          <h5 class="my-4">Публикации:</h5>
          <p class="lead my-4">1.	V. Petrakova, O. Krivorotko. Comparison of two mean field approaches to modeling. JOTA. </p>
          <h5 class="my-4">Принята к печати. WoS, Scopus, Q1-SJR</h5>
          <p class="lead my-4">2.	V. Petrakova. Inverse coefficient problem for epidemiological mean field formulation. Mathematics. 2024, 12(22), 3581. </p>
          <h5 class="my-1">WoS, Scopus Q2-SJR</h5>
          </Tab>
          <Tab eventKey="machine" title="Машинное обучение">
          <p className="lead my-4"><u>Модель прогнозирования для временных рядов с использованием байесовского подхода и гауссовских процессов для оценки мощности группы ветроэлектрических установок</u></p>
          <p className="lead my-4">Прогнозирование временных рядов является актуальной задачей в авиации, в энергетике, в климатологии, в экономике. Временные ряды характеризуют ряд физических и экономических процессов. Методы прогнозирования бывают краткосрочные, среднесрочные, долгосрочные. Статистические модели обычно предсказывают величины на 1-3 точки вперед, что является недостаточным для многих прикладных задач. Для гарантированной точности прогноза на большое количество точек вперед целесообразно применять вероятностные модели прогноза во времени, так как они содержат доверительный интервал. Неопределенность прогнозируемых величин может быть выражена с помощью разных мер вероятности (PDF, CDF, квантили, интервалы, дисперсия, другие). </p>
          <p className="lead my-4">Во многих странах (Китай, Дания, Германия, Великобритания, США) активно ведутся работы по разработке новых ML/AI моделей для оценки работы ветроэлектрических станций (ВЭС). Существует потребность в разработке ML/AI моделей прогноза мощности и стоимости единицы электроэнергии. Как правило, краткосрочные модели нацелены на прогноз на 10-30 минут; долгосрочные модели (рынок) на 24-72 часа вперед. Для тестирования моделей имеются открытые данные по метеопараметрам и выработке мощности с различных соревнований (хакатоны): GEFCom2014, Baidu KDD Cup 2022, Zendoo UK 2022, IEEE Power and Energy Society Working Group on Energy Forecasting and Analytics 2024 </p>
          <p className="lead my-4">В проекте рассматривается постановка задачи предсказания выработки мощности электроэнергии для группы ветроэлектрических установок (ВЭУ), оснащенных системой сбора данных. Использованы исторические данные (скорость ветра, направление ветра, температура воздуха, вырабатываемая мощность P, угол поворота лопастей, угол поворота гондолы, другие параметры) за 2 года с кратностью записи в 1 час. Общее количество записей N=17250. Необходимо разработать вероятностную модель прогноза электроэнергии на 24 часа вперед с доверительным интервалом в 80%, 90%, 95%. </p>
          <p className="lead my-4">После изучения исходных данных потребовалось устранить выбросы и пропуски в данных. </p>
          <p className="lead my-4">Для построения модели прогноза использована модель гауссовской регрессии для функции мощности ВЭУ в зависимости от погодных данных при наличии величины шума.</p>
          <p className="lead my-4">Планируется использовать байесовскую теория для вычисления апостериорного распределения мощности ВЭУ, т.е. полученное значение после наблюдений, которое представляет собой произведение априорной вероятности и правдоподобия. Для удобства распределение вероятности прогноза мощности можно нормировать с помощью логит-нормаль преобразования и изменялось в диапазоне [0-1].</p>
          <p className="lead my-4">Вероятностная разреженная вариационная модель на основе гауссовского процесса включает в себя модель полносвязанной нейронной сети для нахождения средней функции и функцию ковариации. Для представления модели нейронной сети использована конечная функция, которая представляла собой композицию аффинных функций и функций активации. Функция ковариации имела квадратичное экспоненциальное ядро.</p>
          <p className="lead my-4">В процессе решения подобных задач на вычислительном сервере всегда необходимо оценивать ресурсы оперативной памяти и доступное дисковое пространство. Для понижения размерности модели задаются специальные точки модели в количестве М, которые удовлетворяют соотношению M≪N. В итоге формируется вектор набора точек Z. Апостериорное распределение мощности ВЭУ записывается относительно новых переменных. Для нахождения параметров модели решается задача о нахождении максимума целевой функции правдоподобия. Модель нейронной сети включает в себя входной слой [1,512], 2 скрытых слоя [512,512], один выходной слой [512,1]. Функция активации задается ReLu.  </p>
          <p className="lead my-4">В результате обработки исходных данных отрицательные значения и пиковые значения мощности исключаются из датасета. Для значения температуры имеется годовой тренд (Рис 1). Модель обучается на части исторических данных. Далее на вход модели подаются тестовые данные и делается прогноз значения P для одной ВЭУ. По результатам обучения и прогнозирования вычисляется среднее значение функции мощности и величина дисперсии. Модель обучается с помощью Adam оптимизатора, lr=1e-3, количество эпох 200. Количество точек модели варьируется от 600 до 1000.</p>
          <p className="lead my-4">В результате прогнозирования получены графики для значения мощности P значения метрик MAE, RMSE, CRPS для одиночной ВЭУ. Далее значения прогноза мощности P складывались для всей группы из 8 ВЭУ. Значение ошибки не превышало 6%.</p>
          <img src={machine1} align="left" width={640} />
          <img src={machine2} align="right" width={638} />
          <p className="lead my-4 text-center" style={{ clear: 'both' }}>Рис. 1 Значение скорости ветра, направления ветра, температуры, мощности ВЭУ.</p>
          <img src={machine3} align="left" width={640} />
          <img src={machine4} align="right" width={640} />
          <br></br>
          <p className="lead my-4 text-center" style={{ clear: 'both' }}>Рис. 2. Результаты предсказания мощности на 24 и 48 часов вперед для ВЭУ в КВт</p>
          <p className="lead my-4">В проекте планируется доработать вероятностную модель прогноза электроэнергии на 24 часа вперед с доверительным интервалом в 90%, 95%. </p>
          <p className="lead my-4"><u>Модели прогнозирования временных рядов для описания процессов распространения эпидемий</u></p>
          <p className="lead my-4">Построены модели машинного обучения краткосрочного прогнозирования временных рядов, описывающие процессы распространения эпидемий в случае достаточного количества данных (эпидемия COVID-19). На рисунке приведена архитектура нейронной сети, состоящая из рекуррентных и полносвязных слоев. Рекуррентные слои нейронной сети в дополнение к анализу пространства признаков способны анализировать пространство времени в данных.</p>
          <img src={machine5} align="left" width={604} />
          <img src={machine6} align="right" width={690} />
          <p className="lead my-4 text-center" style={{ clear: 'both' }}>Для построения доверительных байесовских интервалов была построена математическая модель, основанная на условной генеративно-состязательной нейронной сети, архитектура которой приведена на рисунке ниже [ссылка на последнюю статью].</p>
          <div class="center"> <img src={machine7} align="center" width={630} /></div>
          <p className="lead my-4">В результаты были получены прогнозы распространения эпидемии COVID-19 в г. Санкт-Петербург в 2024 году на 1, 3 и 5 дней вперед (красная линия) в сравнении с реальными данными количества выявленных случаев заражения (черные точки), доверительный интервал (красная полоса) и погрешность модели (правые столбчатые графики).</p>
          <div class="center"><img src={machine8} align="center" width={630} /></div>
          <p className="lead my-4">Построенные модели нейронных сетей: полносвязная (фиолетовая линия), генеративно-состязательная (синяя линия, среднее) – были сравнены с дифференциальной SEIR-HCD моделью (красная линия) на реальных данных количества инфицированных в г. Санкт-Петербург в 2022-2024 гг. (черные точки). Полученные модели хорошо согласуются с реальными данными и с друг другом в том числе на краткосрочных прогнозах до 5ти дней.</p>
          <div class="center"><img src={machine9} align="center" width={900} /></div>
          </Tab>
        </Tabs>
    </Container>
    </div>
    <Footer />
  </>
)}

