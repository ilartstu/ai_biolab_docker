import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Tab, Nav,
    OverlayTrigger, Popover, Placeholder} from 'react-bootstrap';
import Footer_En from './Components/Footer_En' ;
import NaviBarv2_En from './Components/NaviBarv2_En';


  
export function Conferences_En () {
    return (
          <>
      <NaviBarv2_En />
      <Container className="my-3" style={{
          height: "120%" },
        {  width: "100%"}}>

  <Container>
    
      <div ><h1>Conference calendar</h1></div>
      <hr/>
    
  </Container>
  <div className="row my-4 ps-3 ">
          <h3>Upcoming conferences</h3>
        </div>
        <div className="row my-4 ps-3 text-secondary">
          <h3 className="lead">2024</h3>
        </div>     
        <hr/>
        <div className="row my-4 ps-3">
          <h3>Past conferences</h3>
        </div>
        <div className="row my-4 ps-3 text-secondary">
          <h3 className="lead">2024</h3>
        </div>  

        <div className="my-3"><h4 className="row ps-3">October 29 - November 2, 2024 Moscow</h4>
<h5 className="row ps-3 text-secondary">VI International Scientific and Practical Conference POSTEGNOM’2024</h5>
<h5 className="ps-1 text-secondary lead">The results of the work were presented by the Head of the laboratory <a rel="noopener" target="_blank" href="/Krivorotko_info/En">O. Krivorotko</a>.</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the <a rel="noopener" target="_blank" href="https://www.postgenome.org/pages/aktualnaya_nauchnaya_programma">conference website.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">October 31 - November 1, 2024 Moscow</h4>
<h5 className="row ps-3 text-secondary">XVI Conference "Mathematical Models and Numerical methods in Biology and Medicine"</h5>
<h5 className="ps-1 text-secondary lead">The laboratory staff took part in the XVI conference "Mathematical models and Numerical methods in Biology and Medicine", namely: <a rel="noopener" target="_blank" href="/Nesterova_info/En">A. Nesterova</a> and <a rel="noopener" target="_blank" href="/Mikhailapov_info/En">D. Mikhailapov</a>.</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="https://dodo.inm.ras.ru/biomath/">conference website.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">October 17-21, 2024 Sirius</h4>
<h5 className="row ps-3 text-secondary">Conference "Quasi-linear equations, inverse problems and their applications»</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_050w">conference website.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">October 14-18, 2024 Sirius</h4>
<h5 className="row ps-3 text-secondary">The conference "Inverse ill-posed problems and machine learning"</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_049w">conference website.</a>
</h5></div>

<br></br>

        <div className="my-3"><h4 className="row ps-3">October 7-11, 2024 Sirius</h4>
<h5 className="row ps-3 text-secondary">Conference "Industrial Mathematics: from mathematical methods to Industrial technologies"</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="https://siriusmathcenter.ru/program_048w">conference website..</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">October 3-5, 2024 Novosibirsk IM SB RAS</h4>
<h5 className="row ps-3 text-secondary">International Scientific Conference "Modern problems of inverse problems"</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="http://conf.nsc.ru/mcip2024/general_info">conference website.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">October 1-4, 2024 Novosibirsk IM SB RAS</h4>
<h5 className="row ps-3 text-secondary">Conference "Mathematics in Medicine"</h5>
<h5 className="ps-1 text-secondary lead">On October 1, 3 and 4, the laboratory staff, namely: <a rel="noopener" target="_blank" href="/Krivorotko_info/En">O. Krivorotko</a>, <a rel="noopener" target="_blank" href="/Nestrova_info/En">A. Nesterova</a> and  <a rel="noopener" target="_blank" href="/Mikhailapov_info/En">D. Mikhailapov</a>, spoke at the conference.</h5>
<h5 className="ps-1 text-secondary lead"><a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0_%D0%9C%D0%BC%D0%B5%D0%B4%D0%9A%D0%BE%D0%BD%D1%84-24.pdf">The full program.</a></h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="http://conf.nsc.ru/mmed2024/ru/general_info">conference website.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">September 30 - October 2, 2024 Novosibirsk IM SB RAS</h4>
<h5 className="row ps-3 text-secondary">XVI International Youth Scientific School-conference "Theory and numerical methods for solving inverse and ill-posed problems"</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="http://conf.nsc.ru/tcmiip2024/general_info">conference website.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">August 6-11, 2024 Saint Petersburg</h4>
<h5 className="row ps-3 text-secondary">IV Conference of Mathematical Centers of Russia</h5>
<h5 className="row ps-3 text-secondary lead">On August 10, the staff of our laboratory took part in the conference in sections:"Applied Mathematics and Mathematical Modeling" and "Probability Theory"</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="https://mc4-conf.ru/">conference website.</a>
</h5></div>

<br></br>

<div className="my-3"><h4 className="row ps-3">August 5-10, 2024 Novosibirsk</h4>
<h5 className="row ps-3 text-secondary">14th International Multi-Conference</h5>
<h5 className="row ps-3 text-secondary">"Bioinformatics of genome regulation and structure/systems biology"</h5>
<h5 className="row ps-3 text-secondary lead" style={{ display: 'inline' }}>
More detailed information is available on the<a rel="noopener" target="_blank" href="https://bgrssb.icgbio.ru/2024/ru/schedule/">conference website.</a>
</h5></div>
      </Container>
      <Footer_En />
      </>
      
      )}