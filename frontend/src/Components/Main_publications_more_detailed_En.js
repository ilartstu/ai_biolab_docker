import React from "react";
import Footer_En from './Footer_En'
import NaviBarv2_En from './NaviBarv2_En'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import { motion } from "framer-motion"
import PublicationsData from './PublicationsData'
import { FaFilePdf } from "react-icons/fa6"


export function Main_publications_more_detailed_En () {
    const postsA1 = [

    ]
    const postsA2 = [

    ]
    const postsQ1 = [
      {id: 1, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2022 </h5></a>,eventKey: "all"},
      {id: 2, name: <a href="https://arxiv.org/pdf/2112.12313.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Petrakova V., Krivorotko O. Mean field game for modeling of COVID-19 spread. Journal of Mathematical Analysis and Application, 2022, V. 514, 126271. DOI: 10.1016/j.jmaa.2022.126271 </h5></a>,eventKey: "Q1",eventKey: "all"},
      {id: 3, name: <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798?ref=pdf_download&fr=RR-2&rr=88d87946aecb0c42" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Sosnovskaia M., Vashchenko I., Kerr C., Lesnic D. Agent-based modeling of COVID-19 outbreaks for New York state and UK: parameter identification algorithm. Infectious Disease Modelling, 2022, V. 7, pp. 30-44. </h5></a>,eventKey: "Q1",eventKey: "all"}
    ]
    const postsQ2 = [
      {id: 1, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2023 </h5></a>,eventKey: "all"},
      {id: 2, name: <a href="https://ai-biolab.ru/data/S199508022307034X.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Petrakova V., Krivorotko O. Sensitivity of MFG SEIR-HCD Epidemiological Model. Lobachevskii Journal of Mathematics. 2023. Vol. 44, No. 7, pp. 2856–2869. DOI: 10.1134/S199508022307034X </h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 3, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S. On mathematical modeling of COVID-19. Siberian Electronic Mathematical News. 2023. V. 20, № 2. P. 1211-1268. DOI: 10.33048/semi.2023.20.075 </h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 4, name: <a href="https://ai-biolab.ru/data/JIIP_ident_AMB_COVID_Nsk.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O. , Sosnovskaia M., Kabanikhin S. Agent-based mathematical model of COVID-19 spread in Novosibirsk region: Identifiability, optimization and forecasting. Journal of Inverse and Ill-posed Problems. 2023. DOI: 10.1515/jiip-2021-0038 </h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 5, name: <a href="https://ai-biolab.ru/data/DAIO_2023_COVID_Kazakhstan.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Bektemesov M., Sosnovskaya M., Neverov A. Modeling scenarios for the spread of COVID-19 in the Republic of Kazakhstan based on the regularization of the agent model. Discrete analysis and operations research, 2023, V. 30, №1, 40-67. DOI: 10.33048/daio.2023.30.746 </h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 6, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2021 </h5></a>,eventKey: "all"},
      {id: 7, name: <a href="https://ai-biolab.ru/data/JIIP2020_Geo-information_system.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Krivorotko O., Takuadina A., Andornaya D., Zhang S. Geo-information system of tuberculosis spread based on inversion and prediction. Journal of Inverse and Ill-Posed Problems, 2021, V. 29 (1), pp. 65-79 </h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 8, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2020 </h5></a>,eventKey: "all"},
      {id: 9, name: <a href="https://arxiv.org/pdf/1904.10627v1.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}> Kabanikhin S., Krivorotko O., Bektemessov Z., Bektemessov M., Zhang S. Differential evolution algorithm of solving an inverse problem for the spatial Solow mathematical model. Journal of Inverse and Ill-Posed Problems, 2020, V. 28 (5), pp. 761-774</h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 10, name: <a href="https://ai-biolab.ru/data/JIIP_Global_and_local_optimization_in_identification_of_parabolic.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Zhang S., Kashtanova V. Global and local optimization in identification of parabolic systems. Journal of Inverse and Ill-Posed Problems, 2020, V. 28 (6), pp. 899-913 </h5></a>,eventKey: "Q2",eventKey: "all"},
      {id: 11, name: <a href="https://ai-biolab.ru/data/Krivorot-ko_et_al-2020-Numerical_Analysis_and_Applications.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Zyatkov N., Prikhodko A., Prokhoshin N., Shishlenin M.A. Mathematical modeling and forecasting of COVID-19 in Moscow and Novosibirsk region. Siberian Journal of Computational Mathematics, 2020, V. 23, № 4, P. 395-414 </h5></a>,eventKey: "Q2",eventKey: "all"}
    ]
    const postsQ3 = [
      {id: 1, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2023 </h5></a>,eventKey: "all"},
      {id: 2, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}> Krivorotko O., Kabanikhin S., Zyatkov N.  Neural network modeling of COVID-19 spread taking into account socio-economic processes // World Congress (June 26-30, 2023, Moscow). Systems theory, algebraic biology, artificial intelligence: mathematical foundations and applications: Abstracts. М., 2023. С. 787-789. DOI 10.18699/sblai2023-22</h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 3, name: <a href="https://ai-biolab.ru/data/_Numerical Modelling of Mean-Field .pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Neverov A., Krivorotko O. Numerical Modelling of Mean-Field Game Epidemic. Lecture Notes in Computer Science. 2023. V.14395 - Optimization and Applications: 14th International Conference, OPTIMA 2023, Petrovac, Montenegro, September 18–22, 2023. P.207-217. DOI: 10.1007/978-3-031-47859-8_15</h5></a>,eventKey: "Q3",eventKey: "all" },
      {id: 4, name: <a href="https://ai-biolab.ru/data/COVID-19_NN_eng.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Zyatkov N., Kabanikhin S. Epidemic modeling: a neural network based on data and SIR models. Journal of Computational Mathematics and Mathematical Physics. 2023. V. 63, № 10. P. 1733-1746. DOI: 10.31857/S0044466923100095 </h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 5, name: <a href="https://ai-biolab.ru/data/CMMP1654.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Zvonareva T., Kabanikhin S., Krivorotko O. Numerical algorithm for determining the source of a diffusion-logistic model based on integral type data based on tensor optimization. Journal of Computational Mathematics and Mathematical Physics. 2023. V. 63, № 9. P. 1513-1523. DOI: 10.31857/S0044466923090193 </h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 6, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Petrakova V., Krivorotko O. Several approaches to modeling the dynamics of income of the population in the context of the epidemic. The successes of cybernetics. 2023;4(1):24–32. DOI: 10.51790/2712-9942-2023-4-1-04 </h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 7, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2022 </h5></a>,eventKey: "all"},
      {id: 8, name: <a href="https://drive.google.com/file/d/11uUdZ7lUkaPN6Ghs_PQyP-ZxPMVeuuK-/view" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Zyatkov N. Data-driven regularization of inverse problem for SEIR-HCD model of COVID-19 propagation in Novosibirsk region. Eurasian Journal of Mathematical and Computer Applications, 2022, V. 10, iss. 1, pp. 51-68. DOI: 10.32523/2306-6172-2022-10-1-51-68 </h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 9, name: <a href="https://ai-biolab.ru/data/ComMat2204014Zvonareva.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Zvonareva T., Krivorotko O. Comparative analysis of gradient methods for determining the source of the diffusion-logistic model. Journal of Computational Mathematics and Mathematical Physics, 2022, V. 62, № 4, P. 694-704 </h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 10, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2020 </h5></a>,eventKey: "all"},
      {id: 11, name: <a href="https://ai-biolab.ru/data/Kabanikhin_Krivorotko2020_Article_MathematicalModelingOfTheWuhan.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Krivorotko O. Mathematical modeling of the Wuhan COVID-2019 epidemic and inverse problems. Journal of Computational Mathematics and Mathematical Physics, 2020, V. 60, № 11, P. 1950-1961 </h5></a>,eventKey: "Q3",eventKey: "all"},
      {id: 12, name: <a href="https://ai-biolab.ru/data/S0965542520040107.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Krivorotko O. Optimization methods for solving inverse problems of immunology and epidemiology. Journal of Computational Mathematics and Mathematical Physics, 2020, V. 60, № 4, P. 590-600 </h5></a>,eventKey: "Q3",eventKey: "all"}
    ]
    const postsQ4 = [
      {id: 1, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2024 </h5></a>,eventKey: "all"},
      {id: 2, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>  Akindinov G., Krivorotko O., Matyukhin V. Numerical solution of an inverse problem for a general hyperbolic heat equation // In: Olenev, N., Evtushenko, Y., Jacimovic, M., Khachay, M., Malkova, V. (eds) Advances in Optimization and Applications. OPTIMA 2023. Communications in Computer and Information Science, vol 1913. Springer, Cham. 2024. P. 47-60. </h5></a>,eventKey: "Q4",eventKey: "all"},
      {id: 3, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2023 </h5></a>,eventKey: "all"},
      {id: 4, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Petrakova V. Identifiability of mathematical models of epidemiology: tuberculosis, HIV, COVID-19. Mathematical biology and bioinformatics. 2023. V. 18, № 1. P. 177-214. DOI: 10.17537/2022.18.177 </h5></a>,eventKey: "Q4",eventKey: "all"},
      {id: 5, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Akindinov G., Matyukhin V.,  Krivorotko O. Numerical solving of an inverse problem of a hyperbolic heat equation with small parameter. Computer Research and Modeling, 2023, vol. 15, no. 2, pp. 245–258 (Russian). </h5></a>,eventKey: "Q4",eventKey: "all"},
      {id: 6, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2021 </h5></a>,eventKey: "all"},
      {id: 7, name: <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2092/1/012014/pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Bektemesov M., Krivorotko O., Bektemessov Z. Practical identifiability of mathematical models of biomedical processes. Journal of Physics: Conference Series, 2021, V. 2092(1), No. 012014 </h5></a>,eventKey: "Q4",eventKey: "all"},
      {id: 8, name: <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2092/1/012012/pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Andornaya D. Sensitivity analysis and practical identifiability of the mathematical model for partial differential equations. Journal of Physics: Conference Series, 2021, V. 2092(1), No. 012012. </h5></a>,eventKey: "Q4",eventKey: "all"},
      {id: 9, name: <a href="https://ai-biolab.ru/data/VJ_Krivorotko Engl.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Sosnovskaya M., Andornaya D. Sensitivity and identifiability analysis of mathematical models of the spread of the COVID-19 epidemic. Vavilov Journal of Genetics and Breeding, 2021, V. 25(1), P. 82-91 </h5></a>,eventKey: "Q4",eventKey: "all"},

    ]  
const postsall = [
  {id: 1, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2024 </h5></a>,eventKey: "all"},
  {id: 2, name: <a href="https://ai-biolab.ru/data/mathematics-12-03044.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>O. Krivorotko, N. Zyatkov. The Forecasting of the Spread of Infectious Diseases Based on Conditional Generative Adversarial Networks. Mathematics 2024, 12, 3044.</h5></a>,eventKey: "all"},
  {id: 3, name: <a href="https://ai-biolab.ru/data/COVID_review_10.1515_jiip-2024-0013.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>O. Krivorotko, S. Kabanikhin. Artificial intelligence for COVID-19 spread modeling. Journal of Inverse and Ill-Posed Problems. Vol. 32, No.2. DOI: 10.1515/jiip-2024-0013.</h5></a>,eventKey: "all"},
  {id: 4, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}> G. Akindinov, O. Krivorotko, V. Matyukhin. Numerical solution of an inverse problem for a general hyperbolic heat equation // In: Olenev, N., Evtushenko, Y., Jacimovic, M., Khachay, M., Malkova, V. (eds) Advances in Optimization and Applications. OPTIMA 2023. Communications in Computer and Information Science, vol 1913. Springer, Cham. 2024. P. 47-60. </h5></a>,eventKey: "Q4",eventKey: "all"},
  {id: 5, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2023 </h5></a>,eventKey: "all"},
  {id: 6, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Zyatkov N.  Neural network modeling of COVID-19 spread taking into account socio-economic processes // World Congress (June 26-30, 2023, Moscow). Systems theory, algebraic biology, artificial intelligence: mathematical foundations and applications: Abstracts. М., 2023. С. 787-789. DOI 10.18699/sblai2023-22</h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 7, name: <a href="https://ai-biolab.ru/data/Proc_Petrakova_Krivorotko_CSGB-23.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>V. Petrakova, O. Krivorotko, A. Neverov. Review of the mean field models for predicting the spread of viral infections. 2023 IEEE CSGB.2023. P. 45-50. DOI: 10.1109/CSGB60362.2023</h5></a>,eventKey: "",eventKey: "all"},
  {id: 8, name: <a href="https://ai-biolab.ru/data/_Numerical Modelling of Mean-Field .pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Neverov A., Krivorotko O. Numerical Modelling of Mean-Field Game Epidemic. Lecture Notes in Computer Science. 2023. V.14395 - Optimization and Applications: 14th International Conference, OPTIMA 2023, Petrovac, Montenegro, September 18–22, 2023. P.207-217. DOI: 10.1007/978-3-031-47859-8_15</h5></a>,eventKey: "Q3",eventKey: "all" },
  {id: 9, name: <a href="https://ai-biolab.ru/data/PCI_2023_paper_146.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>T. Zvonareva, O. Krivorotko. Identifiability analysis for source problem of quasi-hyperbolic equation // IEEE Proceedings of 5th International Conference on Problems of Cybernetics and Informatics (PCI 2023), Baku, August 28-30, 2023. P. 1-4. DOI: 10.1109/PCI60110.2023.10325964 </h5></a>,eventKey: "",eventKey: "all"},
  {id: 10, name: <a href="https://ai-biolab.ru/data/PCI_2023_paper_158.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>O. Krivorotko, N. Zyatkov. Modeling of the COVID-19 epidemic in the Russian regions based on deep learning // IEEE Proceedings of 5th International Conference on Problems of Cybernetics and Informatics (PCI 2023), Baku, August 28-30, 2023. P. 1-5. DOI: 10.1109/PCI60110.2023.10325993 </h5></a>,eventKey: "",eventKey: "all"},
  {id: 11, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>V. Petrakova, O. Krivorotko. Mean Field Optimal Control Problem for Predicting the Spread of Viral Infections. 2023 19th International Asian School-Seminar on Optimization Problems of Complex Systems (OPCS), Novosibirsk, Moscow, Russian Federation. 2023. P. 79-84. DOI: 10.1109/OPCS59592.2023.10275759 </h5></a>,eventKey: "",eventKey: "all"},
  {id: 12, name: <a href="https://ai-biolab.ru/data/COVID-19_NN_eng.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Zyatkov N., Kabanikhin S. Epidemic modeling: a neural network based on data and SIR models. Journal of Computational Mathematics and Mathematical Physics. 2023. V. 63, № 10. P. 1733-1746. DOI: 10.31857/S0044466923100095 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 13, name: <a href="https://ai-biolab.ru/data/S199508022307034X.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>V. Petrakova, O. Krivorotko. Sensitivity of MFG SEIR-HCD Epidemiological Model. Lobachevskii Journal of Mathematics. 2023. Vol. 44, No. 7, pp. 2856–2869. DOI: 10.1134/S199508022307034X </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 14, name: <a href="https://ai-biolab.ru/data/CMMP1654.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Zvonareva T., Kabanikhin S., Krivorotko O. Numerical algorithm for determining the source of a diffusion-logistic model based on integral type data based on tensor optimization. Journal of Computational Mathematics and Mathematical Physics. 2023. V. 63, № 9. P. 1513-1523. DOI: 10.31857/S0044466923090193 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 15, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Petrakova V. Identifiability of mathematical models of epidemiology: tuberculosis, HIV, COVID-19. Mathematical biology and bioinformatics. 2023. V. 18, № 1. P. 177-214. DOI: 10.17537/2022.18.177 </h5></a>,eventKey: "Q4",eventKey: "all"},
  {id: 16, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Akindinov G., Matyukhin V.,  Krivorotko O. Numerical solving of an inverse problem of a hyperbolic heat equation with small parameter. Computer Research and Modeling, 2023, vol. 15, no. 2, pp. 245–258 (Russian). </h5></a>,eventKey: "Q4",eventKey: "all"},
  {id: 17, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S. On mathematical modeling of COVID-19. Siberian Electronic Mathematical News. 2023. V. 20, № 2. P. 1211-1268. DOI: 10.33048/semi.2023.20.075 </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 18, name: <a href="https://ai-biolab.ru/data/DAIO_2023_COVID_Kazakhstan.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Bektemesov M., Sosnovskaya M., Neverov A. Modeling scenarios for the spread of COVID-19 in the Republic of Kazakhstan based on the regularization of the agent model. Discrete analysis and operations research, 2023, V. 30, №1, 40-67. DOI: 10.33048/daio.2023.30.746 </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 19, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Petrakova V., Krivorotko O. Several approaches to modeling the dynamics of income of the population in the context of the epidemic. The successes of cybernetics. 2023;4(1):24–32. DOI: 10.51790/2712-9942-2023-4-1-04 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 20, name: <a href="http://old.math.nsc.ru/publishing/DAOR/content/2023/01/746.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Криворотько О.И., Кабанихин С.И., Бектемесов М.А., Сосновская М.И., Неверов А.В. Моделирование сценариев распространения COVID-19 в Республике Казахстан на основе регуляризации агентной модели. Дискретный анализ и исследование операций, 2023, Т. 30, №1, 40-66. DOI: 10.33048/daio.2023.30.746 </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 21, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2022 </h5></a>,eventKey: "all"},
  {id: 22, name: <a href="https://arxiv.org/pdf/2112.12313.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Petrakova V., Krivorotko O. Mean field game for modeling of COVID-19 spread. Journal of Mathematical Analysis and Application, 2022, V. 514, 126271. DOI: 10.1016/j.jmaa.2022.126271 </h5></a>,eventKey: "Q1",eventKey: "all"},
  {id: 23, name: <a href="https://drive.google.com/file/d/11uUdZ7lUkaPN6Ghs_PQyP-ZxPMVeuuK-/view" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Zyatkov N. Data-driven regularization of inverse problem for SEIR-HCD model of COVID-19 propagation in Novosibirsk region. Eurasian Journal of Mathematical and Computer Applications, 2022, V. 10, iss. 1, pp. 51-68. DOI: 10.32523/2306-6172-2022-10-1-51-68 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 24, name: <a style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S. Mathematical modeling of the spread of COVID-19. Novosibirsk: Preprint of the Institute of Mathematics № 300, 2022. </h5></a>,eventKey: "",eventKey: "all"},
  {id: 25, name: <a href="https://ai-biolab.ru/data/ComMat2204014Zvonareva.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Zvonareva T., Krivorotko O. Comparative analysis of gradient methods for determining the source of the diffusion-logistic model. Journal of Computational Mathematics and Mathematical Physics, 2022, V. 62, № 4, P. 694-704 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 26, name: <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798?ref=pdf_download&fr=RR-2&rr=88d87946aecb0c42" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Sosnovskaia M., Vashchenko I., Kerr C., Lesnic D. Agent-based modeling of COVID-19 outbreaks for New York state and UK: parameter identification algorithm. Infectious Disease Modelling, 2022, V. 7, pp. 30-44. </h5></a>,eventKey: "Q1",eventKey: "all"},
  {id: 27, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2021 </h5></a>,eventKey: "all"},
  {id: 28, name: <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2092/1/012014/pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Bektemesov M., Krivorotko O., Bektemessov Z. Practical identifiability of mathematical models of biomedical processes. Journal of Physics: Conference Series, 2021, V. 2092(1), No. 012014 </h5></a>,eventKey: "Q4",eventKey: "all"},
  {id: 29, name: <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2092/1/012012/pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Andornaya D. Sensitivity analysis and practical identifiability of the mathematical model for partial differential equations. Journal of Physics: Conference Series, 2021, V. 2092(1), No. 012012. </h5></a>,eventKey: "Q4",eventKey: "all"},
  {id: 30, name: <a href="https://ai-biolab.ru/data/1216_zyatkovnykrivorotkooi.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Zyatkov N., Krivorotko O. Forecasting recessions in the US economy using machine learning methods. Proceedings – 2021 17th International Asian School-Seminar Optimization Problems of Complex Systems (OPCS), 2021, pp. 139-146 </h5></a>,eventKey: "",eventKey: "all"},
  {id: 31, name: <a href="https://link.springer.com/content/pdf/10.1007/978-3-030-86433-0_31?pdf=chapter%20toc" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Zvonareva T., Zyatkov N. Numerical solution of the inverse problem for diffusion-logistic model arising in online social networks. In: Mathematical Optimization Theory and Operations Research: Recent Trends. Publisher: Springer International Publishing, 2021, pp. 444-459 </h5></a>,eventKey: "",eventKey: "all"},
  {id: 32, name: <a href="https://ai-biolab.ru/data/VJ_Krivorotko Engl.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Sosnovskaya M., Andornaya D. Sensitivity and identifiability analysis of mathematical models of the spread of the COVID-19 epidemic. Vavilov Journal of Genetics and Breeding, 2021, V. 25(1), P. 82-91 </h5></a>,eventKey: "Q4",eventKey: "all"},
  {id: 33, name: <a href="https://ai-biolab.ru/data/JIIP2020_Geo-information_system.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Krivorotko O., Takuadina A., Andornaya D., Zhang S. Geo-information system of tuberculosis spread based on inversion and prediction. Journal of Inverse and Ill-Posed Problems, 2021, V. 29 (1), pp. 65-79 </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 34, name: <a style={{'textDecoration': 'none'}}><h5 align='left' style={{fontSize:"30px", align:"right"}}>2020 </h5></a>,eventKey: "all"},
  {id: 35, name: <a href="https://arxiv.org/pdf/1904.10627v1.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}> Kabanikhin S., Krivorotko O., Bektemessov Z., Bektemessov M., Zhang S. Differential evolution algorithm of solving an inverse problem for the spatial Solow mathematical model. Journal of Inverse and Ill-Posed Problems, 2020, V. 28 (5), pp. 761-774</h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 36, name: <a href="https://ai-biolab.ru/data/JIIP_Global_and_local_optimization_in_identification_of_parabolic.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Zhang S., Kashtanova V. Global and local optimization in identification of parabolic systems. Journal of Inverse and Ill-Posed Problems, 2020, V. 28 (6), pp. 899-913 </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 37, name: <a href="https://ai-biolab.ru/data/Krivorot-ko_et_al-2020-Numerical_Analysis_and_Applications.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Kabanikhin S., Zyatkov N., Prikhodko A., Prokhoshin N., Shishlenin M.A. Mathematical modeling and forecasting of COVID-19 in Moscow and Novosibirsk region. Siberian Journal of Computational Mathematics, 2020, V. 23, № 4, P. 395-414 </h5></a>,eventKey: "Q2",eventKey: "all"},
  {id: 38, name: <a href="https://ai-biolab.ru/data/Kabanikhin_Krivorotko2020_Article_MathematicalModelingOfTheWuhan.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Krivorotko O. Mathematical modeling of the Wuhan COVID-2019 epidemic and inverse problems. Journal of Computational Mathematics and Mathematical Physics, 2020, V. 60, № 11, P. 1950-1961 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 39, name: <a href="https://ai-biolab.ru/data/S0965542520040107.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Kabanikhin S., Krivorotko O. Optimization methods for solving inverse problems of immunology and epidemiology. Journal of Computational Mathematics and Mathematical Physics, 2020, V. 60, № 4, P. 590-600 </h5></a>,eventKey: "Q3",eventKey: "all"},
  {id: 40, name: <a href="https://ai-biolab.ru/data/S1990478920010123.pdf" style={{'textDecoration': 'none'}}><h5 className="pubcardcol my-3" align='left' style={{fontSize:"20px", align:"right"}}>Krivorotko O., Andornaya D., Kabanikhin S. Sensitivity analysis and practical identifiability of mathematical models of biology. Siberian Journal of Industrial Mathematics, 2020, V. 23, № 1, P. 107-125</h5></a>,eventKey: "",eventKey: "all"},
]  

    const items = [
        {id:1, list:postsA1, eventKey:"A1"},
        {id:2, list:postsA2, eventKey:"A2"},
        {id:3, list:postsQ1, eventKey:"Q1"},
        {id:4, list:postsQ2, eventKey:"Q2"},
        {id:5, list:postsQ3, eventKey:"Q3"},
        {id:6, list:postsQ4, eventKey:"Q4"},
        {id:7, list:postsall, eventKey:"all"}
    ]

    
  return (
        <>

        <NaviBarv2_En />
        <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h4 className="mx-5 text-secondary">Article rating</h4></div>
      <hr/>
    
  </Container>
  <Tab.Container style={{
          width: "100%" }} id="left-tabs-example" defaultActiveKey="all" >

      <Nav variant="pills" defaultActiveKey="/home" >
        <Nav.Item key={1}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 0</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  className="shadow3" size="sm" variant="outline-info"  style={{color:"#FFFFFF"}}>
      <Nav.Link  eventKey="A1">A</Nav.Link>
        </Button>
     
        </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={2}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 0</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="A2">A*</Nav.Link>
          </Button>
            
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={3}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 2</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button  size="sm" variant="outline-info" className="mx-1 shadow3">
          <Nav.Link eventKey="Q1">Q1</Nav.Link>
          </Button>
          
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={4}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 8</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="Q2">Q2</Nav.Link>
          </Button>
            
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={5}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 9</div>
               </Popover.Body>
             </Popover>
           }>
          
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="Q3">Q3</Nav.Link>
          </Button>
           
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={6}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 6</div>
               </Popover.Body>
             </Popover>
           }>
          
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="Q4">Q4</Nav.Link>
          </Button>
          
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item key={7}>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="start" className="text-black">
               Quantity: 35</div>
               </Popover.Body>
             </Popover>
           }>
           
        <Button size="sm" variant="outline-info"  className="mx-1 shadow3">
          <Nav.Link eventKey="all">All</Nav.Link>
          </Button>
           
          </OverlayTrigger>
        </Nav.Item>
      </Nav>

      <Tab.Content>
      {items.map((item) =>
          <PublicationsData key={item.id} item = {item}/>
      )}
      </Tab.Content>
  </Tab.Container>
</Container>
    <Footer_En />
    </>
    
    )}
    
    