import React, {useState, useEffect, useRef} from "react";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Form, ListGroup, FormControl, Stack,
OverlayTrigger, Popover, InputGroup, ProgressBar, Spinner, Tabs, Tab, Collapse, Carousel, Alert, Modal, ButtonGroup,
DropdownButton, Dropdown} from 'react-bootstrap';
//import { CLoadingButton } from '@coreui/react-pro'
import axios from "axios"
import FileDownload from "js-file-download"
import { Formik } from "formik";
import * as yup from "yup";
import {FiDownload } from 'react-icons/fi'
import {BsFillFileEarmarkPdfFill, BsFillArrowUpRightSquareFill, BsFillCaretRightFill, BsFillCaretDownFill,
BsFillPersonLinesFill, BsExclamationLg, BsInfo} from 'react-icons/bs'
//import {FcSearch} from 'react-icons/fc'
import NaviBarv2_En from './Components/NaviBarv2_En';
import {BsZoomIn} from 'react-icons/bs'
import { motion } from "framer-motion"

//import { DownloadCount } from 'axios-progress-bar'

import ModelingSEIR_HCD_En from './ModelingSEIR_HCD_En'
import Description_AOM_En from './Components/Description_AOM_En'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

import Footer_En from './Components/Footer_En'

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
  population: yup.number().min(1000000).max(8000000).typeError("A numeric value is required").required("required field"),
  n_future: yup.number().min(10).max(100).typeError("A numeric value is required").required("required field"),
  init_infected: yup.number().min(10).max(100).typeError("A numeric value is required").required("required field"),
});

export function Modeling_En(){

  const [population_data, setPopulation_data] = useState(2798170)
  const [region_data, setRegion_data] = useState(1)
  const [region_name, setRegion_name] = useState("Novosibirsk region")
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
            label: "data",
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
          label: "average forecast",
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
          label: "maximum forecast",
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
            label: "data",
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
            label: "average forecast",
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
            label: "maximum forecast",
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
            label: "data",
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
            label: "average forecast",
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
            label: "maximum forecast",
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
            label: "data",
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
                label: "average forecast",
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
                label: "maximum forecast",
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
            label: "data",
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
              label: "average forecast",
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
              label: "maximum forecast",
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
            label: "data",
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
          label: "average forecast",
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
          label: "maximum forecast",
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
            label: "data",
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
            label: "average forecast",
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
            label: "maximum forecast",
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
            label: "data",
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
            label: "average forecast",
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
            label: "maximum forecast",
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
            label: "data",
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
                label: "average forecast",
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
                label: "maximum forecast",
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
            label: "data",
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
              label: "average forecast",
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
              label: "maximum forecast",
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "The forecast of new infections",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Forecast of the total number of infections",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Prognosis of fatal outcomes",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Prognosis of new cases of recovery",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Prognosis of the number of patients in critical condition",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "The forecast of new cases of infection",
              },
              subtitle: {
                display: true,
                align: 'end',
                position: "top",
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Forecast of the total number of infections",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Prognosis of fatal outcomes",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Prognosis of new cases of recovery",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
              label: "average forecast",
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
              label: "maximum forecast",
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
                text: "Prognosis of the number of patients in critical condition",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Forecasting region: " + region_name, "Population size: " + population_data, "Initially infected: "+ init_inf, "Days of forecasting: " + n_future_day],
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
   <NaviBarv2_En />
      <Container className="my-3"   style={{
              height: "120%" }}>
        <Tabs  justify defaultActiveKey="AOM" id="uncontrolled-tab-example" >
          <Tab eventKey="AOM" title="The agent-based model">
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
                  >  {open? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Description of the model
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
                     Modeling scenarios for the spread of Covid-19 in the Republic of Kazakhstan based on the regularization of the agent model.</div>
                     <small  align="center" className="text-success"><div>O.I. Krivorotko</div>
                     <div>S.I. Kabanikhin</div>
                      <div>M.A. Bektemesov</div>
                        <div>M.I. Sosnovskaya</div>
                          <div>A.V.Neverov</div></small>
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
                         <div><small>Publication in the journal Modeling of Infectious Diseases.</small></div>
                         <div className="text-black">Agent-based modeling of COVID-19 outbreaks in New York State and the United Kingdom: an algorithm for identifying parameters</div>
                         <div><small>O.I. Krivorotko</small></div>
                         <div><small>M.I. Sosnovskaya</small></div>
                         <div><small>I.A. Vashchenko</small></div>
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
                             <div><small>Preprint 300 SB RAS, S.L.Sobolev Institute of Mathematics.</small></div>
                             <div className="text-black">Mathematical models of COVID-19 spread.</div>
                              <div><small>O.I. Krivorotko</small></div>
                              <div><small>S.I. Kabanikhin</small></div>
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
        <Card className="my-3 shadow1">  <p align="justify" className="mx-3 my-1"><small>Forecasting is carried out by means of an agent-based model for calculating scenarios for the dynamics of identified cases
COVID-19, which is based on the processing of incomplete epidemiological data and solving the inverse problem of restoring the parameters of the agent
model based on the totality of available epidemiological data. The main tool for building a model is an open library <a href="https://docs.idmod.org/projects/covasim/en/latest/index.html" >COVASIM</a>. </small></p></Card>
<div className="mx-2"><hr /></div>
      </Col>
        </Row>
          <Collapse in={open}>
            <div id="example-collapse-text" className="my-2">
                <Description_AOM_En />
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
                  <h6>Please do not refresh the page</h6>
                  <small>when entering parameters and after starting the model, </small>
                  <div><small>otherwise, the calculations will be interrupted</small></div>
                </Alert>

               }
               >
                <ListGroup.Item align="left" className="bg-secondary text-white">Simulation Parameters
                <BsExclamationLg />

                </ListGroup.Item>
                </OverlayTrigger>
                <ListGroup.Item variant="light">
                <Row >
                  <Col sm={12} sm={12} xs={12} md={12} lg={7} >
                  <Stack gap={0}>
                  <div>
                <Stack direction="horizontal" gap={3}>
                <div > <p align="left" className="my-3 text-black text-small"><small>Region</small></p></div>

                    <div>
                    <OverlayTrigger
                     placement="right"
                     overlay={
                       <Popover>
                         <Popover.Body>
                         The region for constructing a scenario for the development of the disease.
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
                  <div > <p align="left" className="my-2 text-black text-small"><small>Population size</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                       The number of human agents susceptible to the disease.
                         <hr />
                         <small className="text-muted">from 1,000,000 to 8,000,000</small>
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
                  <div > <p align="left" className=" text-black text-small"><small>Initially infected</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                       The number of people initially infected.
                         <hr />
                         <small className="text-muted">from 10 to 100 people</small>
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
                  <div > <p align="left" className=" my-2 text-black text-small"><small>Days of forecasting</small></p></div>
                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                       How many days in advance is the scenario for the development of the disease being built?
                        <hr />
                        <small className="text-muted">from 10 to 100 days</small>
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
                      <Col sm={6}>  <Button variant="secondary" align="end" className=" my-3 text-white shadow1" disabled={!isrunning} onClick={break_get}>Abort</Button></Col>
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
                            setRegion_name("Novosibirsk region")
                            setPopulation_data(2798170)
                            setFieldValue("population", 2798170)
                          } else if(sregion == 2) {
                            setRegion_name("Omsk region")
                            setPopulation_data(578698)
                            setFieldValue("population", 1879548)
                          } else if(sregion == 3) {
                            setRegion_name("Altai Territory")
                            setPopulation_data(2268179)
                            setFieldValue("population", 2268179)
                          }
                        }}
                        >
                            <option value="1">Novosibirsk region</option>
                            <option value="2">Omsk region</option>
                            <option value="3">Altai Territory</option>
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
                        /> : null } To run</Button>
                  </Stack>
                  </Form>
                )}

              </Formik>
                </Col>
                {withspinner ? <small className="text-muted"><small> ...expected calculation time: 1 minute </small></small> : null }
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
            {chartnum == 1 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data1(e)}>Show data</Button> : null}
            {chartnum == 2 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data2(e)}>Show data</Button> : null}
            {chartnum == 3 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data3(e)}>Show data</Button> : null}
            {chartnum == 4 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data4(e)}>Show data</Button> : null}
            {chartnum == 5 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data5(e)}>Show data</Button> : null}

            {chartnum == 6 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data6(e)}>Show data</Button> : null}
            {chartnum == 7 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data7(e)}>Show data</Button> : null}
            {chartnum == 8 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data8(e)}>Show data</Button> : null}
            {chartnum == 9 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data9(e)}>Show data</Button> : null}
            {chartnum == 10 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data10(e)}>Show data</Button> : null}
            <OverlayTrigger
             placement="left"
             overlay={
               <Popover>
                 <Popover.Body>
                  <small className="text-muted">To hide the displayed data, click on their names</small>
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
                  <small className="text-muted">To zoom in, select the desired area or scroll the mouse wheel.</small>
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
                      height: '350px' }}><Alert variant="danger" className="my-5"> <Alert.Heading>Download error</Alert.Heading>
              The server is temporarily not responding, please, <Alert.Link href="/modeling">refresh the page</Alert.Link> or try again later.
              <hr /> </Alert> </div> :

   newChart? <div style={{ height: '25rem' }}><Line id="chart" data={chartData_all} options={chartOptions} height="150%" /></div> : <div ><Line id="chart" options={chartOptions} data={initchartData_all} height="150%" /></div>}
   <motion.div initial="hidden"
      custom={2}
     variants={variants2} animate="visible" viewport={{amount: 0.1, once: true}}>
   {newChart? <Nav variant="pills" defaultActiveKey="1"className="my-2" >
     <Nav.Item >
     <Button className="shadow3" size="sm" variant="outline-info" onClick = {chart} style={{color:"#FFFFFF"}}>
       <Nav.Link className="hoverWhite"  eventKey="1">Infections</Nav.Link>
     </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {chart_cumdiag} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite" eventKey="2">Total morbidity</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info"  onClick = {chart_newdeath} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite" eventKey="3">Mortality rate</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {chart_new_rec} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="4">Recovery</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {chart_new_crit} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="5">Critical</Nav.Link>
       </Button>
     </Nav.Item>
   </Nav> : null} </motion.div>

   {newChart? null : <Nav variant="pills" defaultActiveKey="1" className="my-2 ">
     <Nav.Item >
     <Button className="shadow3" className="chart3" size="sm" variant="outline-info" onClick = {initchart} style={{color:"#FFFFFF"}}>
       <Nav.Link className="hoverWhite"  eventKey="1">Infections</Nav.Link>
     </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {initchart_cumdiag} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="2">Total morbidity</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info"  onClick = {initchart_newdeath} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="3">Mortality rate</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {initchart_new_rec} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="4">Recovery</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info" onClick = {initchart_new_crit} className="mx-1 shadow3">
       <Nav.Link className="hoverWhite"  eventKey="5">Critical</Nav.Link>
       </Button>
     </Nav.Item>
   </Nav>}
            </Container>
            </Col>
          </Row>
        </Card>
          </Tab>
          <Tab eventKey="SEIR-HCD" title="SEIR-HCD">
            <ModelingSEIR_HCD_En />
          </Tab>
        </Tabs>
    </Container>
    <Footer_En />
  </>
)}
