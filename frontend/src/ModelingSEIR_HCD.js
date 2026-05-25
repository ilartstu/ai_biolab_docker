import React, { useState, useEffect} from "react";
import axios from "axios";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Form, ListGroup, FormControl, Stack,
OverlayTrigger, Popover, InputGroup, ProgressBar, Spinner, Tabs, Tab, Collapse, Carousel, Alert, Modal, ButtonGroup,
DropdownButton, Dropdown} from 'react-bootstrap';
import {FcSearch} from 'react-icons/fc'
import {FiDownload } from 'react-icons/fi'
import {BsZoomOut, BsInfo, BsZoomIn} from 'react-icons/bs'

import {BsFillFileEarmarkPdfFill, BsFillArrowUpRightSquareFill, BsFillCaretRightFill, BsFillCaretDownFill,
BsFillPersonLinesFill, BsExclamationLg} from 'react-icons/bs'
import { Formik } from "formik";
import Description_SEIRHCD from './Components/Description_SEIRHCD'
import OptionItem from './Components/OptionItem'

import { motion } from "framer-motion"

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

function ModelingSEIR_HCD() {

  const lastDate2 = () => {
    axios
    .get("https://server.ai-biolab.ru/datesSEIR")
    .then(res => {
      setLastsData(res.data.dates[res.data.dates.length-1].data)
    })
  }

  const download_chart=(e, chart) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById(chart)
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

  const dates = []
  const [dates2, setdates2] = useState(dates)
  const [lastData, setLastsData] = useState(0)

  const datesOption=()=>{
    axios
    .get("https://server.ai-biolab.ru/datesSEIR")
    .then(res => {
      for (const dataObj of res.data.dates) {
        dates.push({date: dataObj.data})
      }
      dates.reverse()
      setdates2(dates)
    })
  }

  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({})

  const [openBS, setOpenBS] = useState(true);
  const [openM, setOpenM] = useState(false);
  const [openV, setOpenV] = useState(false);

  const [chartData_bsR0, setChartData_bsR0] = useState({
    datasets: [],
  })
  const [chartOptions_bsR0, setChartOptions_bsR0] = useState({})

  const forecasts_R0=(selected)=>{
    let data = [];
    let mean = [];
    let max = [];
    let min = [];
    let tr = []
    let tr_min = []
    let tr_max = []
    let datatype = selected
    let dataT = selected
    axios({
        url:'https://server.ai-biolab.ru/api/forecasts_train/',
        method: "POST",
        data: {dataT},
      })
    .then(res => {
        for (const dataObj of res.data) {
          data.push(dataObj.Date);
          tr.push(dataObj.R0_mean)
          tr_min.push(dataObj.R0_min)
          tr_max.push(dataObj.R0_max)
          mean.push(dataObj.R0_mean)
          max.push(dataObj.R0_max)
          min.push(dataObj.R0_min)
        }
        axios({
            url:'https://server.ai-biolab.ru/api/forecasts/',
            method: "POST",
            data: {datatype},
          })
        .then(res => {
            for (const dataObj of res.data) {
              data.push(dataObj.Date);
              mean.push(dataObj.R0_mean)
              max.push(dataObj.R0_max)
              min.push(dataObj.R0_min)
            }
            setChartData_bsR0({
              labels: data,
              datasets: [
                {
                  label: "реальные данные",
                  data: tr_min,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 0.1)",
                  backgroundColor: "rgba(2, 117, 216, 0.1)",
                  tension: 0.9,
                  borderWidth: 0.1,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
                  {
                    label: "реальные данные",
                    data: tr_max,
                    fill: '-1',
                    borderColor: "rgba(2, 117, 216, 0.1)",
                    backgroundColor: "rgba(2, 117, 216, 0.1)",
                    tension: 0.9,
                    borderWidth: 0.1,
                    pointRadius: 0.3,
                    pointHoverRadius: 5,
                    pointHitRadius: 30,
                    pointBorderWidth: 0.1,
                    barPercentage: 2
                    },
                {
                  label: "реальные данные",
                  data: tr,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 1)",
                  backgroundColor: "rgba(2, 117, 216, 1)",
                  tension: 0.9,
                  borderWidth: 2,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
                  {
                    label: "модель",
                    data: min,
                    fill: false,
                    borderColor: "rgba(217, 83, 79, 0.1)",
                    backgroundColor: "rgba(217, 83, 79, 0.1)",
                    tension: 0.9,
                    borderWidth: 0.1,
                    pointRadius: 0.3,
                    pointHoverRadius: 5,
                    pointHitRadius: 30,
                    pointBorderWidth: 0.1,
                    barPercentage: 2
                    },
                    {
                      label: "модель",
                      data: max,
                      fill: '-1',
                      borderColor: "rgba(217, 83, 79, 0.1)",
                      backgroundColor: "rgba(217, 83, 79, 0.1)",
                      tension: 0.9,
                      borderWidth: 0.1,
                      pointRadius: 0.3,
                      pointHoverRadius: 5,
                      pointHitRadius: 30,
                      pointBorderWidth: 0.1,
                      barPercentage: 2
                      },
              {
                label: "модель",
                data: mean,
                fill: false,
                borderColor: "rgba(217, 83, 79, 1)",
                backgroundColor: "rgba(217, 83, 79, 1)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2
                },
            ],
            });
            setChartOptions_bsR0({
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
                  position: "right",
                },
                title: {
                  display: true,
                  align: 'start',
                  text: "",
                },
              }
            });
          })
    }).catch(err => {
        console.log(err);
      });
  }
  const [chartData_pred, setChartData_pred] = useState({
    datasets: [],
  })
  const [chartOptions_pred, setChartOptions_pred] = useState({})

  const forecasts_new = (stype, datatype)=>{
    let data = [];
    let mean = [];
    let max = [];
    let min = [];
    let tr = []
    let name = "Новые выявленные случаи";
    axios({
        url:'https://server.ai-biolab.ru/api/forecasts_true/',
        method: "POST",
        data: {datatype},
      })
    .then(res => {
        for (const dataObj of res.data) {
          data.push(dataObj.Date);
          if (stype == 1){
            name = "Новые выявленные случаи"
            tr.push(dataObj.new_diagnoses)
          } else if (stype == 2) {
            name = "Критически больные, С"
            tr.push(dataObj.ventilation)
          } else if (stype == 3) {
            name = "Умершие, D"
            tr.push(dataObj.cum_deaths)
          }
          mean.push(0)
        }
        axios({
            url:'https://server.ai-biolab.ru/api/forecasts',
            method: "POST",
            data: {datatype},
          })
        .then(res => {
            setAE(Math.round(parseFloat(res.data[res.data.length-1].alpha_e_std)*1000) / 1000)
            setAI(Math.round(parseFloat(res.data[res.data.length-1].alpha_i_std)*1000) / 1000)
            setEhc(Math.round(parseFloat(res.data[res.data.length-1].eps_hc_std)*1000) / 1000)
            setM(Math.round(parseFloat(res.data[res.data.length-1].mu_std)*1000) / 1000)
            setAE_mean(Math.round(parseFloat(res.data[res.data.length-1].alpha_e_mean)*1000) / 1000)
            setAI_mean(Math.round(parseFloat(res.data[res.data.length-1].alpha_i_mean)*1000) / 1000)
            setEhc_mean(Math.round(parseFloat(res.data[res.data.length-1].eps_hc_mean)*1000) / 1000)
            setM_mean(Math.round(parseFloat(res.data[res.data.length-1].mu_mean)*1000) / 1000)
            for (const dataObj of res.data) {
              data.push(dataObj.Date);
              if (stype == 1){
                mean.push(dataObj.fk_mean)
                max.push(dataObj.fk_max)
                min.push(dataObj.fk_min)
              } else if (stype == 2) {
                mean.push(dataObj.C_mean)
                max.push(dataObj.C_max)
                min.push(dataObj.C_min)
              } else if (stype== 3) {
                mean.push(dataObj.D_mean)
                max.push(dataObj.D_max)
                min.push(dataObj.D_min)
              }
            }
            setChartData_pred({
              labels: data,
              datasets: [
                {
                  label: "реальные данные",
                  data: tr,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 1)",
                  backgroundColor: "rgba(2, 117, 216, 1)",
                  tension: 0.9,
                  borderWidth: 0.1,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
              {
                label: "модель",
                data: mean,
                fill: false,
                borderColor: "rgba(217, 83, 79, 1)",
                backgroundColor: "rgba(217, 83, 79, 1)",
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2
                },
            ],
            });
            setChartOptions_pred({
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
                  position: "right",
                },
                title: {
                  display: true,
                  align: 'start',
                  text: name,
                },
              }
            });
          })
    }).catch(err => {
        console.log(err);
      });
  }

  let r0_mean = []
  let r0_max = []
  let r0_min = []
  const [r0_meanBS, setr0_meanDataBS] = useState(r0_mean)

  const res_validR0=()=>{
    let dataBS = [];
    axios
    .get("https://server.ai-biolab.ru/api/res_valid")
    .then(res => {
      for (const dataObj of res.data) {
        dataBS.push(dataObj.Date);
        r0_mean.push(dataObj.R0_mean)
        r0_max.push(dataObj.R0_max)
        r0_min.push(dataObj.R0_min)
      }
      setChartData({
        labels: dataBS,
        datasets: [
          {
            label: "R0 min",
            data: r0_min,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "R0 max",
            data: r0_max,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "R0 среднее",
          data: r0_mean,
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
            position: "right",
          },
          title: {
            display: true,
            align: 'start',
            text: "",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const [chartData2, setChartData2] = useState({
    datasets: [],
  })

  const [chartDataTrain, setChartDataTrain] = useState({
    datasets: [],
  })
  const [chartOptionsTrain, setChartOptionsTrain] = useState({})

  const res_trainR0=()=>{
      let dataBS = [];
    axios
    .get("https://server.ai-biolab.ru/api/res_train")
    .then(res => {
     for (const dataObj of res.data) {
        dataBS.push(dataObj.Date);
        r0_mean.push(dataObj.R0_mean)
        r0_max.push(dataObj.R0_max)
        r0_min.push(dataObj.R0_min)
      }

      setChartDataTrain({
        labels: dataBS,
        datasets: [

          {
            label: "R0 min",
            data: r0_min,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "R0 max",
            data: r0_max,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "R0 среднее",
          data: r0_mean,
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
      ],
      });
      setChartOptionsTrain({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'start',
            text: "",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }


  const [chartOptionsSEIRHCD, setChartOptionsSEIRHCD] = useState({})
  const [chartDataSEIRHCD, setChartDataSEIRHCD] = useState({
    datasets: [],
  })

  const res_train=(mean, max, min, param)=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("https://server.ai-biolab.ru/api/res_train")
    .then(res => {
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj[mean])
        max_data.push(dataObj[max])
        min_data.push(dataObj[min])
      }
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd/")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj[param]));
        }
        setChartDataSEIRHCD({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13, 110, 253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Новые выявленные случаи",
            },
          }
        });
      }).catch(err => {
          console.log(err);
        });
    }).catch(err => {
        console.log(err);
      });
  }

  const [chartOptionsSEIRHCD_v, setChartOptionsSEIRHCD_v] = useState({})
  const [chartDataSEIRHCD_v, setChartDataSEIRHCD_v] = useState({
    datasets: [],
  })

  const res_valid=(mean, max, min, param)=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("https://server.ai-biolab.ru/api/res_valid")
    .then(res => {
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj[mean])
        max_data.push(dataObj[max])
        min_data.push(dataObj[min])
      }
      axios
      .get("https://server.ai-biolab.ru/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj[param]));
        }
        setChartDataSEIRHCD_v({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13, 110, 253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD_v({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Новые выявленные случаи",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }

  const [chartOptions_p, setChartOptions_p] = useState({})
  const [chartData_p, setChartData_p] = useState({
    datasets: [],
  })
  const res_validP=()=>{
    let dataSEIRHCD = []
    let ae_data = []
    let ai_data = []
    let e_data = []
    let m_data = []
    axios
    .get("https://server.ai-biolab.ru/api/res_valid/")
    .then(res => {
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        ae_data.push(dataObj.alpha_e_mean)
        ai_data.push(dataObj.alpha_i_mean)
        e_data.push(dataObj.eps_hc_mean)
        m_data.push(dataObj.mu_mean)
      }
      setChartData_p({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: '\u03B1\u2091',
            data: ae_data,
            fill: false,
            borderColor: "rgba(0,0,255, 1)",
            backgroundColor: "rgba(0, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: '\u03B1\u1D62',
            data: ai_data,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
          label: '\u03B5\u2095\u1D9C',
          data: e_data,
          fill: false,
          borderColor: "rgba(92, 184, 92, 1)",
          backgroundColor: "rgba(92, 184, 92, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
          {
            label: '\u03BC',
            data: m_data,
            fill: false,
            borderColor: "rgba(128, 0, 255, 1)",
            backgroundColor: "rgba(128, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
      ],
      });
      setChartOptions_p({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "",
          },
        },
        scales: {
          quantity: {
            title: {
              display: true,
              text: 'вероятность'
            },
            position:'left',
            type: 'linear',
          },
        },
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const [chartOptions_pm, setChartOptions_pm] = useState({})
  const [chartData_pm, setChartData_pm] = useState({
    datasets: [],
  })
  const res_trainP=()=>{
    let dataSEIRHCD = []
    let ae_data = []
    let ai_data = []
    let e_data = []
    let m_data = []
    axios
    .get("https://server.ai-biolab.ru/api/res_train/")
    .then(res => {
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        ae_data.push(dataObj.alpha_e_mean)
        ai_data.push(dataObj.alpha_i_mean)
        e_data.push(dataObj.eps_hc_mean)
        m_data.push(dataObj.mu_mean)
      }
      setChartData_pm({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: '\u03B1\u2091',
            data: ae_data,
            fill: false,
            borderColor: "rgba(0,0,255, 1)",
            backgroundColor: "rgba(0, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: '\u03B1\u1D62',
            data: ai_data,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
          label: '\u03B5\u2095\u1D9C',
          data: e_data,
          fill: false,
          borderColor: "rgba(92, 184, 92, 1)",
          backgroundColor: "rgba(92, 184, 92, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
          {
            label: '\u03BC',
            data: m_data,
            fill: false,
            borderColor: "rgba(128, 0, 255, 1)",
            backgroundColor: "rgba(128, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
      ],
      });
      setChartOptions_pm({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "",
          },
        },
        scales: {
          quantity: {
            title: {
              display: true,
              text: 'вероятность'
            },
            position:'left',
            type: 'linear',
          },
        },
      });
    }).catch(err => {
        console.log(err);
      });
  }

  const [prognose_type, setPrognose_type] = useState(1)
  const [prognose_data, setPrognose_data] = useState(dates[0])

//1 - новые выявленные случаи
//2 - критически больные
//3 - умершие

  const [ae, setAE] = useState()
  const [ai, setAI] = useState()
  const [ehc, setEhc] = useState()
  const [m, setM] = useState()
  const [ae_mean, setAE_mean] = useState()
  const [ai_mean, setAI_mean] = useState()
  const [ehc_mean, setEhc_mean] = useState()
  const [m_mean, setM_mean] = useState()

  useEffect(() => {
     res_validR0();
  }, [])

  useEffect(() => {
     datesOption();
  }, [])

  useEffect(() => {
     res_trainR0();
  }, [])

  useEffect(() => {
    res_train("fk_mean", "fk_max", "fk_min", "new_diagnoses");
  }, [])
  useEffect(() => {
     res_valid("fk_mean", "fk_max", "fk_min", "new_diagnoses");
  }, [])
  useEffect(() => {
     res_validP();
  }, [])
  useEffect(() => {
     res_trainP();
  }, [])
  useEffect(() => {
      lastDate2();
  }, [])

  useEffect(() => {
    lastDate2();
    setPrognose_data(lastData)
     forecasts_new(1, lastData);
  }, [lastData])

  useEffect(() => {
      lastDate2();
     forecasts_R0(lastData);
  }, [lastData])

  const [openSEIRHCD, setOpenSEIRHCD] = useState(false);

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

  return (
    <>
    <Card className=" mx-auto" border="light" bg="light">
    <Row >
      <Col md={2}  className="text-center">
      <Row >
        <Col xs= {12}  lg={12}>    <Button
              variant="outline-primary"
              className="bg-white text-primary  shadow1 my-2 mx-2"
              onClick={() => setOpenSEIRHCD(!openSEIRHCD)}
            > {openSEIRHCD? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Описание модели
            </Button></Col>
        <Col xs= {12} lg={12} className="mx-2">
        <OverlayTrigger
          rootClose={true}
           placement="bottom"
           ref={(ref) => this.overlay = ref}
           overlay={
             <Popover className="shadow1">
               <Popover.Body>
               <div align="center" className="text-black">
               Математическое моделирование и прогнозирование COVID-19 в Москве и Новосибирской области</div>
               <small  align="center" className="text-success"><div>О.И. Криворотько</div>
               <div>С.И. Кабанихин</div>
                <div>Н.Ю. Зятьков</div>
                  <div>А.Ю. Приходько</div>
                    <div>Н.М. Прохошин</div>
                    <div>М.А. Шишленин</div>
                    </small>
               </Popover.Body>
             </Popover>
           }>
        <a href="https://ai-biolab.ru/data/papers/1_Krivorotko_et_al_COVID-19_in_Moscow_and_NSO.pdf"><Button variant="link" onClick={(e)=>{
        document.body.click(e)
        this.overlay.hide()
      }}><BsFillArrowUpRightSquareFill size={30}/></Button></a></OverlayTrigger>
      <OverlayTrigger
        rootClose={true}
         placement="bottom"
         ref={(ref) => this.overlay = ref}
         overlay={
           <Popover className="shadow1">
             <Popover.Body>
             <div align="center" className="text-black">
             Анализ чувствительности и идентифицируемости математических моделей распространения эпидемии COVID-19</div>
             <small  align="center" className="text-success"><div>О.И. Криворотько</div>
             <div>С.И. Кабанихин</div>
              <div>М.И. Сосновская</div>
                <div>Д.В. Андорная.</div>
                  </small>
             </Popover.Body>
           </Popover>
         }>
        <a href="https://ai-biolab.ru/data/papers/2_Krivorotko_et_al_COVID-19_Identifiability.pdf"><Button variant="link" onClick={(e)=>{
        document.body.click(e)
        this.overlay.hide()
      }}><BsFillArrowUpRightSquareFill size={30}/></Button></a></OverlayTrigger>
      <OverlayTrigger
        rootClose={true}
         placement="bottom"
         ref={(ref) => this.overlay = ref}
         overlay={
           <Popover className="shadow1">
             <Popover.Body>
             <div align="center" className="text-black">
             Forecasting Recessions in the US Economy Using Machine Learning Methods</div>
             <small  align="center" className="text-success">
             <div>Nikolay Zyatkov</div>
             <div>Olga Krivorotko</div></small>
             </Popover.Body>
           </Popover>
         }>
        <a href="https://ieeexplore.ieee.org/document/9588678/authors#authors"><Button variant="link" onClick={(e)=>{
        document.body.click(e)
        this.overlay.hide()
      }}><BsFillArrowUpRightSquareFill size={30}/></Button></a></OverlayTrigger>
                    </Col>
                    </Row>
    </Col>
    <Col md={10} >
    <Card className="my-3 shadow1"><p align="justify" className="mx-3 my-1"><small></small></p> </Card>
<div className="mx-2"><hr /></div>
</Col>
  </Row>
  <Collapse in={openSEIRHCD}>
  <div id="example-collapse-text" className="my-2">
    <Description_SEIRHCD />
    </div>
  </Collapse>
    <OverlayTrigger
       placement="bottom"
       overlay={
         <Popover>
           <Popover.Body>
           <div align="justify" className="text-black">
           <small>Cценарий распространения COVID-19 в регионе на 7 дней при условии сохранения текущих ограничений и уровня вакцинации на день моделрования.</small></div>
           </Popover.Body>
         </Popover>
       }>

    <Button variant="outline-info" className="mx-3 my-2 bg-white" onClick={() => setOpenBS(!openBS)}
      aria-controls="example-fade-text"
      aria-expanded={openBS}>
     {openBS? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Базовый сценарий</Button>
     </OverlayTrigger>
     <Collapse in={openBS}>
       <div id="example-collapse-text">

       <Row>
       <Col xs={12} md={4}>
       <motion.div initial="hidden"
          custom={2}
         variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}}>
       <ListGroup className = "mx-3 shadow1 my-1">
       <ListGroup.Item align="left" className="bg-secondary text-secondary">.
        </ListGroup.Item>
      <ListGroup.Item variant="light">
     <Row>
      <Col xs={12} md={12} sm={12} lg={4}>
      <Stack gap={0}>
    <div > <p align="left" className="my-1 text-black text-small"><small>Дата прогноза</small></p></div>
    <div > <p align="left" className="my-4 text-black text-small"><small>Прогноз</small></p></div>
      </Stack>
     </Col>
     <Col xs={12} md={12} sm={12} lg={8}>
     <Formik
         >
           {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, resetForm, setFieldValue}) => (
   <Form noValidate >
     <Stack gap={3}>
         <Form.Select key={1} aria-label="Default select example"
           type="number"
           name="data"
           onChange={(e) => {
             const selected = e.target.value;
             setPrognose_data(selected)
             forecasts_new(prognose_type, selected)
             forecasts_R0(selected)
           }}
           >
           {dates2.map((dates, index) =>
               <OptionItem key = {index} dates = {dates}/>
           )}
         </Form.Select>
         <Form.Select key={2} aria-label="Default select example"
           type="number"
           name="type"
           onChange={(e) => {
             const selectedType = e.target.value;
             let stype = Number(selectedType)
             setPrognose_type(stype, prognose_data)
             forecasts_new(stype, prognose_data)
           }}>
               <option value="1">Новые выявленные случаи</option>
               <option value="2">Критически больные, C</option>
               <option value="3">Умершие, D</option>
         </Form.Select>
     </Stack>
     </Form>
   )}

 </Formik>
     </Col>
   </Row>
   </ListGroup.Item>
   </ListGroup>
</motion.div>
   </Col>
   <Col xs={12} md={8}>
   <Row >
   <Col  xs={12} sm={12} md={12} lg={8}>
 </Col>
   <Col xs={12} sm={12} md={12} lg={4}>
   <motion.div initial="hidden"
      custom={1}
     variants={variants} whileInView="visible" viewport={{amount: 0.1, once: true}}>
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
     <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
     </OverlayTrigger>
     <Button variant="outline-secondary" size="sm" className="mx-1 align-right" onClick={(e) => {
         forecasts_new(prognose_type, prognose_data)
     }}><BsZoomOut/></Button>
     <Button variant="outline-secondary" size="sm" className="mx-1" onClick={(e)=>download_chart(e, "chart2")}><FiDownload/></Button>
     </motion.div>
   </Col>
   </Row>
<div style={{ height: '20rem' }}><Bar id="chart2" options={chartOptions_pred} data={chartData_pred} height="90%" /></div>
   </Col>
 </Row>
 <motion.div initial="hidden"
      custom={2}
     variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3"><hr />
  <h4 className="mx-5 text-secondary">Текущие параметры модели и их доверительный интервал</h4></motion.div>
 <Row className="mx-5 my-3">
 <Col xs= {12} md={6} lg={3}>
 <motion.div initial="hidden"
      custom={2}
     variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
 <Card border="light"  className="shadow1">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Параметр заражения между бессимптомной <i>E(t)</i> и восприимчивой <i>S(t)</i> группами населения</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className="text-success"><h1 align='center' style={{fontSize:"80px", align:"left"}}>{'\u03B1'}<sub style={{fontSize:"25px"}}>e</sub></h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>{ae_mean}</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>{ae}</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></motion.div></Col>
 <Col xs= {12} md={6} lg={3}>
 <motion.div initial="hidden"
      custom={3}
     variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
 <Card border="light" className="shadow1">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Параметр заражения между инфицированным <i>I(t)</i> и восприимчивым населением <i>S(t)</i>, который связан с контагиозностью вируса и социальными факторами</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className="text-success"><h1 align='center' style={{fontSize:"80px"}}>{'\u03B1'}<sub style={{fontSize:"25px"}}>i</sub></h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>{ai_mean}</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>{ai}</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></motion.div></Col>
 <Col xs= {12} md={6} lg={3}>
 <motion.div initial="hidden"
      custom={4}
     variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
 <Card border="light"  className="shadow1">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Доля госпитализированных случаев <i>H(t)</i>, находящихся в критическом состоянии и требующих подключения аппарата ИВЛ
</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className=" text-success"><h1 align='center' className="" style={{fontSize:"80px"}}>{'\u03B5'}<sub style={{fontSize:"25px"}}>hc</sub></h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>{ehc_mean}</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>{ehc}</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></motion.div></Col>
 <Col xs= {12} md={6} lg={3}>
 <motion.div initial="hidden"
      custom={4}
     variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
 <Card border="light"  className="shadow1">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Смертность в результате COVID-19</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className="text-success"><h1 align='center' style={{fontSize:"80px"}}>{'\u03BC'}</h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>{m_mean}</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>{m}</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></motion.div></Col>
</Row>
<motion.div initial="hidden"
     custom={2}
    variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}} className="mx-3"><hr />
 <h4 className="mx-5 text-secondary">Базовый индекс репродукции COVID-19 в Новосибирской области и прогноз</h4>
 </motion.div>
 <motion.div initial="hidden"
      custom={2}
     variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
 <Container className="mx-2">
 <Row >
 <Col  xs={12} sm={12} md={12} lg={8}>
</Col>
 <Col xs={12} sm={12} md={12} lg={4}>
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
   <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
   </OverlayTrigger>
   <Button variant="outline-secondary" size="sm" className="mx-1" onClick={(e)=>{forecasts_R0(prognose_data)}}><BsZoomOut/></Button>
   <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart9")}><FiDownload/></Button>
 </Col>
 </Row>
</Container>
<div>
<Container style={{ height: '20rem' }}>
  <Line id="chart9" options={chartOptions_bsR0} data={chartData_bsR0} height="75%" />
</Container></div>
</motion.div>
       </div>
     </Collapse>
     <OverlayTrigger
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Body>
            <div align="justify" className="text-black">
            <small>Результат реализации SEIR-HCD модели распространения COVID-19 в регионе при откалиброванных параметрах модели на каждому 14-дневном интервале по времени.</small></div>
            </Popover.Body>
          </Popover>
        }>
    <Button variant="outline-info" className="mx-3 my-2 bg-white" onClick={() => setOpenM(!openM)}
      aria-controls="example-fade-text"
      aria-expanded={openM}>
    {openM? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Моделирование</Button>
    </OverlayTrigger>
    <Collapse in={openM}>
      <div id="example-collapse-text">
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
      <h4 className="mx-5 my-2 text-secondary">Кривые SEIRHCD и реальные данные</h4> </motion.div>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
      <Nav variant="pills" defaultActiveKey="1"className="my-2" >
        <Nav.Item >
        <Button className="mx-3" size="sm" variant="outline-info" onClick={(e) => {
          res_train("fk_mean", "fk_max", "fk_min", "new_diagnoses")}} style={{color:"#FFFFFF"}}>
          <Nav.Link eventKey="1">Новые выявленные случаи</Nav.Link>
        </Button>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Восприимчивые</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e) => {res_train("S_mean", "S_max", "S_min", "")}} className="mx-1">
          <Nav.Link eventKey="2"><b>S</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные без симптомов</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e)=>{res_train("E_mean", "E_max", "E_min")}} className="mx-1">
          <Nav.Link eventKey="3"><b>E</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные с симптомами</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e)=>{res_train("I_mean", "I_max", "I_min")}} className="mx-1">
          <Nav.Link eventKey="4"><b>I</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Вылеченные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e)=>{res_train("R_mean", "R_max", "R_min", "cum_recoveries")}} className="mx-1">
          <Nav.Link eventKey="5"><b>R</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Госпитализированные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e)=>{res_train("H_mean", "H_max", "H_min", "hospitalised")}} className="mx-1">
          <Nav.Link eventKey="6"><b>H</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Критически больные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={(e)=>{res_train("C_mean", "C_max", "C_min", "n_critical")}} className="mx-1">
          <Nav.Link eventKey="7"><b>C</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Умершие</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={(e)=>{res_train("D_mean", "D_max", "D_min", "cum_deaths")}} className="mx-1">
          <Nav.Link eventKey="8"><b>D</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
      </Nav></motion.div>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
      <Row >
      <Col  xs={12} sm={12} md={12} lg={8}>
     </Col>
      <Col xs={12} sm={12} md={12} lg={4}>
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
        <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
        </OverlayTrigger>

        <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart4")}><FiDownload/></Button>
      </Col>
      </Row>
<Container style={{ height: '20rem' }}><Line id="chart4" options={chartOptionsSEIRHCD} data={chartDataSEIRHCD} height="90%" /></Container></motion.div>
<motion.div initial="hidden"
     custom={2}
    variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}} className="mx-3"><hr />
       <h4 className="mx-5 text-secondary">Базовый индекс репродукции COVID-19 в Новосибирской области</h4></motion.div>
       <motion.div initial="hidden"
            custom={2}
           variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
       <Row >
       <Col  xs={12} sm={12} md={12} lg={8}>
      </Col>
       <Col xs={12} sm={12} md={12} lg={4}>
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
         <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
         </OverlayTrigger>
          <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_trainR0}><BsZoomOut/></Button>
         <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart5")}><FiDownload/></Button>
       </Col>
       </Row>
       <Container style={{ height: '20rem' }}><Line id="chart5" options={chartOptionsTrain} data={chartDataTrain} height="100%" /></Container></motion.div>
       <motion.div initial="hidden"
            custom={2}
           variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
       <hr />
       <h4 className="mx-5 text-secondary">Восстановленные параметры модели COVID-19 для Новосибирской области</h4></motion.div>
       <motion.div initial="hidden"
            custom={2}
           variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
       <Row >
       <Col  xs={12} sm={12} md={12} lg={8}>
      </Col>
       <Col xs={12} sm={12} md={12} lg={4}>
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
         <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
         </OverlayTrigger>
          <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_trainP}><BsZoomOut/></Button>
         <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart8")}><FiDownload/></Button>
       </Col>
       </Row>
       <Container style={{ height: '20rem' }}><Line id="chart8" options={chartOptions_pm} data={chartData_pm} height="90%" /></Container>
       </motion.div>
      </div>
    </Collapse>
    <OverlayTrigger
       placement="bottom"
       overlay={
         <Popover>
           <Popover.Body>
           <div align="justify" className="text-black">
           <small>Результат валидации SEIR-HCD модели распространения COVID-19 в регионе: по откалиброванным параметрам за предыдущий 14-дневный период реализуется базовый сценарий на 7 дней, который сравненивается с реальными данными.</small></div>
           </Popover.Body>
         </Popover>
       }>
    <Button variant="outline-info" className="mx-3 my-2 bg-white" onClick={() => setOpenV(!openV)}
      aria-controls="example-fade-text"
      aria-expanded={openV}>
    {openV? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Валидация модели</Button>
    </OverlayTrigger>
    <Collapse in={openV}>
      <div id="example-collapse-text">
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
      <h4 className="mx-5 my-2 text-secondary">Кривые SEIRHCD и реальные данные</h4></motion.div>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
      <Nav variant="pills" defaultActiveKey="1"className="my-2" >
        <Nav.Item >
        <Button className="mx-3" size="sm" variant="outline-info" onClick={(e) => {res_valid("fk_mean", "fk_max", "fk_min", "new_diagnoses")}} style={{color:"#FFFFFF"}}>
          <Nav.Link eventKey="1">Новые выявленные случаи</Nav.Link>
        </Button>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Восприимчивые</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e) => {res_valid("S_mean", "S_max", "S_min", "")}} className="mx-1">
          <Nav.Link eventKey="2"><b>S</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные без симптомов</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e) => {res_valid("E_mean", "E_max", "E_min", "new_diagnoses")}} className="mx-1">
          <Nav.Link eventKey="3"><b>E</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные с симптомами</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e) => {res_valid("I_mean", "I_max", "I_min", "new_diagnoses")}} className="mx-1">
          <Nav.Link eventKey="4"><b>I</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Вылеченные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e) => {res_valid("R_mean", "R_max", "R_min", "cum_recoveries")}} className="mx-1">
          <Nav.Link eventKey="5"><b>R</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Госпитализированные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={(e) => {res_valid("H_mean", "H_max", "H_min", "hospitalised")}} className="mx-1">
          <Nav.Link eventKey="6"><b>H</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Критически больные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={(e) => {res_valid("C_mean", "C_max", "C_min", "n_critical")}} className="mx-1">
          <Nav.Link eventKey="7"><b>C</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Умершие</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={(e) => {res_valid("D_mean", "D_max", "D_min", "cum_deaths")}} className="mx-1">
          <Nav.Link eventKey="8"><b>D</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
      </Nav> </motion.div>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
      <Row >
      <Col  xs={12} sm={12} md={12} lg={8}>
    </Col>
      <Col xs={12} sm={12} md={12} lg={4}>
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
        <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
        </OverlayTrigger>
        <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart6")}><FiDownload/></Button>
      </Col>
      </Row>
<Container style={{ height: '20rem' }}><Line id="chart6"options={chartOptionsSEIRHCD_v} data={chartDataSEIRHCD_v} height="90%" /></Container></motion.div>
<motion.div initial="hidden"
     custom={2}
    variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}> <hr />
<h4 className="mx-5 text-secondary">Базовый индекс репродукции COVID-19 в Новосибирской области</h4></motion.div>
<motion.div initial="hidden"
     custom={2}
    variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
<Row >
<Col  xs={12} sm={12} md={12} lg={8}>
</Col>
<Col xs={12} sm={12} md={12} lg={4}><OverlayTrigger
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
  <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
  </OverlayTrigger>
   <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_validR0}><BsZoomOut/></Button>
  <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart3")}><FiDownload/></Button>
</Col>
</Row>
<Container style={{ height: '20rem' }}><Line id="chart3" options={chartOptions} data={chartData} height="90%" /></Container></motion.div>
<motion.div initial="hidden"
     custom={2}
    variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}> <hr />
<h4 className="mx-5 text-secondary">Восстановленные параметры модели COVID-19 для Новосибирской области</h4> </motion.div>
<motion.div initial="hidden"
     custom={2}
    variants={variants2} whileInView="visible" viewport={{amount: 0.05, once: true}}>
<Row >
<Col  xs={12} sm={12} md={12} lg={8}>
</Col>
<Col xs={12} sm={12} md={12} lg={4}>
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
  <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
  </OverlayTrigger>
   <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_validP}><BsZoomOut/></Button>
  <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e, "chart7")}><FiDownload/></Button>
</Col>
</Row>
<Container style={{ height: '20rem' }}><Line id="chart7" options={chartOptions_p} data={chartData_p} height="90%" /></Container></motion.div>
      </div>
    </Collapse>
    </Card>
    </>
  )
}
export default ModelingSEIR_HCD;
