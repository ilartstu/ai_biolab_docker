import React, { useEffect, useState } from "react";
import Footer_En from '../Components/Footer_En';
import NaviBarv2_En from '../Components/NaviBarv2_En';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import { Container } from 'react-bootstrap';
import sem_a from "../images/news/sem_a.PNG";


export function Sem_g_En() {


  return (
    <>
      <NaviBarv2_En />
      <Container>
        <div><img src={sem_a} align="left" width={500}></img></div>
        <div className="row my-4 ps-4">
          <h1>On September 12, a laboratory seminar will be held on the topic «Features of using physically informed neural networks to solve problems of modeling the motion of an incompressible fluid»</h1>
        </div>
        
        <div className="row ps-4 my-4"><p className="lead"></p></div>
        <hr />
        <div className="row my-4"><p className="lead">The report considers the possibility of applying an approach
using physically informed neural networks, in the English
literature Physics Informed Neural Network (PINN), to solve direct and inverse
problems of modeling the motion of a viscous incompressible fluid using
a system of Navier-Stokes equations and equations based on the theory of shallow water. The paper
investigates the applicability of the mesh-free particle method for solving
model problems (Kovazhny flow, Taylor-Green vortex, geophysical flow
Beltrami, the flow around the cylinder for given Reynolds numbers), allowing
analytical solution for the system of Navier-Stokes equations [1,2].<br></br>
A study was also carried out to develop a thematic PINN for
studying the hydrology of rivers according to the equations of shallow water theory. As examples
, we considered the problems of collapse of a column of liquid water, the flow of water in
a rectangular channel, the flow of water in a section of a riverbed with a given profile.
To solve the selected tasks, the
bottom roughness coefficient, the value of water flow, and water surface levels were set as initial data.<br></br>
The total number of points in the computational domain was chosen to be about 2
million according to an already trained model in order to reproduce the detailed structure
of the flow at various points in time. The number of epochs for training a neural
network for different tasks was set to be from 20,000 to 300,000. The maximum
training time of the neural network was 4 hours. The result of PINN prediction
The values of the two components of the velocity and the water level were shown. To obtain an accurate
solution, when it is impossible to obtain an analytical solution, we additionally
open calculation codes for computational fluid dynamics were used
(OpenFOAM, Delft3D, NekTar++).<br></br>
In order to study the accuracy of PINN prediction
, the applicability of various neural network architectures (FN, Deepnet, FNO)
and various methods of optimizing the objective function are discussed. We evaluated
the influence of the choice of hyperparameters (the number of layers and neurons, the number of points in
the computational domain and at the boundaries, weight coefficients in the loss function) for
a neural network on the accuracy of the prediction of the MAE metric.<br></br>
Программное преобразование разработано с использованием языка Python,
библиотек DeepXDE, TensorFlow, Numpy, Matplotlib, Jupiter Notebook, друзей.
Расчеты использовались на рабочей станции c графическим процессором Nvidia Geforce RTX 3070.<br></br>
In conclusion, the report formulates the directions for further
research of PINN using transfer learning technology, with
the possibility of parameterizing the geometric properties of a streamlined body.</p></div>
        <div className="row my-4"><p className="lead">Speaker: <b>Sergey Strizhak.</b></p></div>
        <div className="row my-4"><p className="lead">Co-author: <b>Konstantin Koshelev.</b></p></div>
        <div className="row my-4"><p className="lead">Time: 14:00 Novosibirsk time (10:00 Moscow time).</p></div>
        <div className="row my-4"><p className="lead">The seminar will be held in an online format in Zoom. You can join by following the <a rel="noopener" target="_blank" href="https://us02web.zoom.us/j/8615596919">link.</a></p></div>
        <div className="row my-4"><p className="lead">*Before connecting, please write your first and last name.</p></div>
        <div class="row my-4"><p class="lead">The presentation of the report can be seen at the <a rel="noopener" target="_blank" href="https://ai-biolab.ru/data/PINN-Fluid Dynamics-SSV-12.09.2024.pdf">link</a>.</p></div>
        <div className="row my-4"><p className="lead">All the seminars held are posted in the <a rel="noopener" target="_blank" href="/Sem_Compl/En">archive</a>.</p></div>
        <div className="row my-4"><p>11.09.2024</p></div>

      </Container>
      <Footer_En />
    </>
  );
}