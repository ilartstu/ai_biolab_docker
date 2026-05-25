import React, { useState, useEffect} from "react";
import axios from "axios";
import {FiDownload } from 'react-icons/fi'
import {Container, Row, Col, Card, Button,
  Image, Dropdown, OverlayTrigger, Popover, Spinner, Alert, Placeholder, Tab} from 'react-bootstrap';
import {BsZoomOut, BsInfo, BsZoomIn} from 'react-icons/bs'
import MSCDItem from './StaticCovidDataItem'
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
import scales from 'chartjs-plugin-zoom';


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

  ChartJS.register(zoomPlugin,  scales);

  const variants = {
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

const StaticTubDataSoc = (props) => {

  const zoom_chart=(e) => {
    e.preventDefault()
    const img = document.getElementById('chart')
    img.plugins.scales.y.min = 80;
    img.plugins.scales.y.max = 100;
    img.update()
  }

  const download_chart3=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart3')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }

  const [lastDatadate, setLastsDatadate] = useState(0)
  const [last_unemployment, setlast_unemployment] = useState(0)
  const [last_poverty, setlast_poverty] = useState(0)
  const [last_income, setlast_income] = useState(0)
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  const chart = () => {
    setLoadingprosses(true)
    let soc_data = [];
    let soc_unempl = [];
    let soc_pov = [];
    let soc_income = [];
    let soc_last_unempl = [];
    let soc_last_pov = [];
    let soc_last_income = [];
    let tub_last_date = [];

    let url = props.region.hr
    axios
    .get(url)
    .then(res => {
      setLoadingprosses(false)
      setSomeerrors(false)
      soc_last_unempl.push(parseInt(res.data[res.data.length-1].unemployment))
      soc_last_pov.push(parseInt(res.data[res.data.length-1].poverty)) 
      soc_last_income.push(res.data[res.data.length-1].income)
      tub_last_date.push(res.data[res.data.length-1].date)

      for (const dataObj of res.data) {
        soc_unempl.push(parseInt(dataObj.unemployment));
        soc_pov.push(parseInt(dataObj.poverty));
        soc_income.push(parseInt(dataObj.income));
        soc_data.push(dataObj.date);
      }
      setChartData({
        labels: soc_data,
        datasets: [
            {
                label: "безработица , шк.2 (%)",
                data: soc_unempl,
                fill: false,
                borderColor: "rgba(0, 191, 255, 1)",
                backgroundColor: "rgba(0, 191, 255, 1)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                yAxisID: 'y'
              },
              
          {
            label: "доля населения с доходами ниже прожиточного минимума , шк.2 (%)",
            data: soc_pov,
            borderColor: "rgb(255,0,0)",
            backgroundColor: "rgb(255,0,0, 1)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            yAxisID: 'y'
          },
          {
            label: "среднедушевые доходы населения , шк.1",
            data: soc_income,
            borderColor: "rgb(128, 0, 255)",
            backgroundColor: "rgb(128,0,255)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            yAxisID: 'quantity'
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
           text: "Социально-экономические данные",
         },
       },
       scales: {
         quantity: {
           title: {
             display: true,
             text: 'шкала 1'
           },
           position:'left',
           type: 'linear',
         },
         y: {
           title: {
             display: true,
             text: 'шкала 2'
           },
           position:'right',
           beginAtZero: true,
           type: 'linear',
           grid: {
             drawOnChartArea: false
           }
         }
       }
     });
     setlast_unemployment(soc_last_unempl)
     setlast_poverty(soc_last_pov)
     setlast_income(soc_last_income)
     setLastsDatadate(tub_last_date)
    })
    .catch(err => {
      setLoadingprosses(false)
      setSomeerrors(true)
      console.log(err);
    });
  };

  useEffect(() => {
    chart();
  }, [])

  const [loadingprosses, setLoadingprosses] = useState(true)
  const [someerrors, setSomeerrors] = useState(false)

  const lasts = [
    {id: 1, lastData: last_unemployment, lastDatadate: lastDatadate, name: "безработица"},
    {id: 2, lastData: last_poverty, lastDatadate: lastDatadate, name: "доля населения с доходами ниже прожиточного минимума"},
    {id: 3, lastData: last_income, lastDatadate: lastDatadate, name: "среднедушевые доходы населения"},
  ]


  return (
    <Tab.Pane eventKey={props.region.eventKey}>
      <div className="mx-3 my-3">
      <div>
      <Container>
        <Row style={{
                width: "100%" }}>
                {lasts.map((last,index) =>
                    <MSCDItem initial="hidden" whileInView="visible" viewport={{amount: 0.05}}
                       custom={index + 1}
                      variants={variants} key = {last.id} last = {last}/>
                )}
        </Row>
      </Container>
    <div  align="center" className ="my-4">
    <Row className="my-2">
      <Col  xs={12} sm={9}>
     </Col>
    <Col xs={12} sm={3}>
    <motion.div initial="hidden"
         custom={2}
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
       <Button variant="outline-secondary" size="sm" className="mx-1" onClick={chart}><BsZoomOut/></Button>
      <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart3(e)}><FiDownload/></Button>
      </motion.div>
    </Col>
    </Row>
    {loadingprosses ? <div style={{
            height: '400px'}}><Spinner relative="true" style={{position: 'absolute', top: '50%'}} animation="border" variant="info"  /></div> :
    someerrors ?  <div style={{
            height: '350px' }}><Alert relative="true" variant="danger" className="my-5"> <Alert.Heading>Ошибка загрузки</Alert.Heading>
    Сервер временно не отвечает, пожалуйста, <Alert.Link href="/modeling">обновите страницу</Alert.Link> или повторите попытку позже.
    <hr /> </Alert> </div> :
    <div style={{ height: '25rem' }}><Line id="chart3" data={chartData} options={chartOptions}  height="90%" /></div> }


     </div>
    </div>
    </div>
  </Tab.Pane>
  );
};
export default StaticTubDataSoc;

