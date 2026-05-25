import React, {useState, useEffect, useRef} from "react";
import {Container, Tabs, Tab} from 'react-bootstrap';
import NaviBarv2_En from './Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import medicine1 from "./images/directions/medicine1.png"
import medicine2 from "./images/directions/medicine2.png"
import medicine3 from "./images/directions/medicine3.png"
import medicine4 from "./images/directions/medicine4.png"
import medicine5 from "./images/directions/medicine5.png"
import medicine6 from "./images/directions/medicine6.png"
import medicine7 from "./images/directions/medicine7.png"

import Footer_En from './Components/Footer_En'



export function Medicine_En(){


  return(
  <>
  <NaviBarv2_En />
      <Container className="my-3"   style={{
              height: "120%" }}>
        <Tabs  justify defaultActiveKey="AI" id="uncontrolled-tab-example" >
          <Tab eventKey="AI" title="AI segmentation of pathologies in the brain">
          <p class="lead my-4">Segmentation of cerebral vascular aneurysms was performed using a U-Net-like 3D segmentation model. </p>
          <p class="lead my-4">The model has 180,000 trainable parameters, weighs 0.72 mb, and the prediction time is 821 ms ± 63.6 ms. The architecture diagram is presented below.</p>
          <div class="center my-4"><img src={medicine1} align="center" width={900} /></div>
          <p class="lead my-4">200 3D CT images of the upper torso of patients with aneurysms were used. The images had a vertical size from 500 to 1100 and a horizontal size of 512x512. For analysis, the skull area was cut out and the image size was reduced to 128x128x128. The intensity of the images was set in the range of 50-450.</p>
          <div class="center my-4"><img src={medicine2} align="center" width={700} /></div>
          <p class="lead my-4">The results showed high accuracy in locating aneurysms, while the shape of the area itself remained within an acceptable margin of error. The model also noted areas similar to aneurysms that were not noted by doctors.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Container align="left">
        <div>
            <img src={medicine3} width={638} alt="Image Description" />
            <p className="lead my-2" style={{ textAlign: 'center' }}>
            Initial segmentation
            </p>
        </div>
    </Container>
    <Container align="right">
        <div>
            <img src={medicine4} width={630} alt="Image Description" />
            <p className="lead my-2" align="center">
            Segmentation by the model
            </p>
        </div>
    </Container>
</div>
          </Tab>
          <Tab eventKey="Nuclear" title="Models in nuclear medicine">
          <p class="lead my-4"><b>Single-photon emission computed tomography (SPECT) is one of the leading imaging methods in nuclear medicine used for the diagnosis of oncological, cardiological and neurological diseases. Modern research in this field is shifting from qualitative interpretation of images to an accurate quantitative assessment of the accumulation of radiopharmaceuticals</b> in pathological foci. This is necessary for the dosimetric planning and evaluation of the effectiveness of radionuclide therapy (RT), especially in patients with metastatic cancer, where RT is highly effective. </p>
          <p class="lead my-4"><b>The problems of accuracy</b> of quantitative estimation in SPECT are related to the mathematical incorrectness of reconstruction tasks, Poisson-type noise in projection data, and the appearance of <b>edge artifacts</b> in high-contrast areas (for example, tumor foci), which, as it turned out, persist over a large number of iterations of the reconstruction algorithm (Fig. 1). <b>Clinical research methods</b> are limited by the lack of reference data, radiation exposure, and the high cost of testing with physical phantoms (for example, NEMA IEC (Fig. 2A)).</p>
          <p class="lead my-4">The laboratory is developing an approach based on <b>simulation using a digital twin of the NEMA IEC phantom</b> (Fig. 2B). This method allows you to flexibly vary the protocol parameters and the characteristics of the foci, and virtual tests are performed.</p>
          <p class="lead my-4"><b>The aim</b> of the research is to determine the optimal parameters of the OSEM reconstruction algorithm to obtain an accurate quantitative assessment of the activity of RFP in pathological foci. Simulation showed that the optimal number of iterations depends on the size of the lesion. <b>The results obtained</b> can become recommendations for improving the accuracy of quantitative analysis of SPECT images, improving diagnosis and optimizing treatment planning.</p>
          <div class="center"><img src={medicine5} align="center" width={700} /><p class="lead my-4">Fig. 1. Reconstructed profiles of the NEMA IEC numerical phantom: the blue curve is the reference data; the red curve is the reconstructed activity profile. The preservation of edge artifacts is observed over a large number of n iterations.</p></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Container align="center">
        <div>
            <img src={medicine6} width={300} alt="Image Description" />
        </div>
    </Container>
    <Container align=" center">
        <div>
            <img src={medicine7} width={300} alt="Image Description" />
        </div>
    </Container>
</div>
          <p className="lead my-4 text-center" style={{ clear: 'both' }}>Fig. 2. A) An image of a physical NEMA IEC phantom, B) A cross-section of a numerical NEMA IEC phantom passing through the center of the spheres.</p>
          </Tab>
        </Tabs>
    </Container>
    <Footer_En />
  </>
)}