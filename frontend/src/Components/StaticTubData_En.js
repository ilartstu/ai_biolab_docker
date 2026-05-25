import React, { useState, useEffect} from "react";
import axios from "axios";
import {FiDownload } from 'react-icons/fi'
import {Container, Row, Col, Card, Button,
  Image, Dropdown, OverlayTrigger, Popover, Spinner, Alert, Placeholder, Tab} from 'react-bootstrap';
import {BsZoomOut, BsInfo, BsZoomIn} from 'react-icons/bs'
import MSCDItem from './StaticCovidDataItem_En'
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

const StaticTubData_En = (props) => {

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
  const [lastData, setLastsData] = useState(0)
  const [last_ndeaths, setlast_ndeaths] = useState(0)
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  const chart = () => {
    setLoadingprosses(true)
    let tub_nd = [];
    let tub_data = [];
    let tub_last_ndeaths = [];
    let tub_last_nd = [];
    let tub_last_date = [];
    let tub_ndeaths = [];

    let url = props.region.hr
    axios
    .get(url)
    .then(res => {
      setLoadingprosses(false)
      setSomeerrors(false)
      tub_last_nd.push(parseInt(res.data[res.data.length-1].diagnoses))
      tub_last_ndeaths.push(parseInt(res.data[res.data.length-1].deaths)) //
      tub_last_date.push(res.data[res.data.length-1].date)
            for (const dataObj of res.data) {
        tub_nd.push(parseInt(dataObj.diagnoses));
        tub_data.push(dataObj.date);
        tub_ndeaths.push(parseInt(dataObj.deaths));
      }
      setChartData({
        labels: tub_data,
        datasets: [
          {
            label: "new cases, scale 1",
            data: tub_nd,
            fill: false,
            borderColor: "rgba(0, 191, 255, 1)",
            backgroundColor: "rgba(0, 191, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            yAxisID: 'quantity'
          },
          
      {
        label: "deaths, scale 1",
        data: tub_ndeaths,
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
            text: "Epidemiological data",
          },
        },
        scales: {
          quantity: {
            title: {
              display: true,
              text: 'scale 1'
            },
            position:'left',
            type: 'linear',
          },
          y: {
            title: {
              display: true,
              text: 'scale 2'
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
      setLastsData(tub_last_nd)
      setlast_ndeaths(tub_last_ndeaths)
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
    {id: 1, lastData: lastData, lastDatadate: lastDatadate, name: "cases of infection"},
    {id: 3, lastData: last_ndeaths, lastDatadate: lastDatadate, name: "deaths"},
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
            height: '350px' }}><Alert relative="true" variant="danger" className="my-5"> <Alert.Heading>Download error</Alert.Heading>
    The server is temporarily not responding, please <Alert.Link href="/modeling">refresh the page</Alert.Link> or try again later.
    <hr /> </Alert> </div> :
    <div style={{ height: '25rem' }}><Line id="chart3" data={chartData} options={chartOptions}  height="90%" /></div> }


     </div>
    </div>
    </div>
  </Tab.Pane>
  );
};
export default StaticTubData_En;