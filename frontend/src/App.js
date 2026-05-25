import React, {useEffect, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import Footer_En from './Components/Footer_En'
import './App.css';
import {MainTeam} from './MainTeam'
import {Main_publications_more_detailed} from './Components/Main_publications_more_detailed'
import {Krivorotko_info} from './Components/Krivorotko_info'
import {Krivorotko_info_En} from './Components/Krivorotko_info_En'
import {Kabanikhin_info} from './Components/Kabanikhin_info'
import {Kabanikhin_info_En} from './Components/Kabanikhin_info_En'
import {Mikhailapov_info} from './Components/Mikhailapov_info'
import {Mikhailapov_info_En} from './Components/Mikhailapov_info_En'
import {Petrakova_info} from './Components/Petrakova_info'
import {Petrakova_info_En} from './Components/Petrakova_info_En'
import {Semenova_info} from './Components/Semenova_info'
import {Semenova_info_En} from './Components/Semenova_info_En'
import {Nesterova_info} from './Components/Nesterova_info'
import {Nesterova_info_En} from './Components/Nesterova_info_En'
import {Zyatkov_info} from './Components/Zyatkov_info'
import {Zyatkov_info_En} from './Components/Zyatkov_info_En'
import {Zvonareva_info} from './Components/Zvonareva_info'
import {Zvonareva_info_En} from './Components/Zvonareva_info_En'
import {Neverov_info} from './Components/Neverov_info'
import {Neverov_info_En} from './Components/Neverov_info_En'
import {Krivorotko_Zvonareva_teaching} from './Components/Krivorotko_Zvonareva_teaching';
import {Krivorotko_teaching} from './Components/Krivorotko_teaching';
import {Krivorotko_Zvonareva_teaching_En} from './Components/Krivorotko_Zvonareva_teaching_En';
import {Krivorotko_teaching_En} from './Components/Krivorotko_teaching_En';
import {Krivorotko_teaching_methods} from './Components/Krivorotko_teaching_methods';
import {Krivorotko_teaching_methods_En} from './Components/Krivorotko_teaching_methods_En';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {Covid} from './Covid';
import {Tub} from './Tub';
import {Main} from './Main';
import {Modeling} from './Modeling';
import {Data} from './Data';
import axios from "axios"
import {News} from './News';
import {News_En} from './News_En';
import {Conferences} from './Conferences';
import {Sem_Compl} from './Sem_Compl';
import {Links} from './Links';
import {Data_processing_and_analysis} from './Data_processing_and_analysis';
import {The_spread_of_epidemics} from './The_spread_of_epidemics';
import {Medicine} from './Medicine';
import {Pollution_modeling} from './Pollution_modeling';
import {Social_processes} from './Social_processes';




import {Helmet} from "react-helmet";

import "./styles.css";
import { Covid_En } from "./Covid_En";
import {Tub_En} from './Tub_En';
import { Main_En } from "./Main_En";
import { Modeling_En } from "./Modeling_En";
import { Data_En } from "./Data_En";
import { MainTeam_En } from "./MainTeam_En";
import {Main_publications_more_detailed_En} from './Components/Main_publications_more_detailed_En';
import {Conferences_En} from './Conferences_En';
import {Sem_Compl_En} from './Sem_Compl_En';
import {Links_En} from './Links_En';
import {Data_processing_and_analysis_En} from './Data_processing_and_analysis_En';
import {The_spread_of_epidemics_En} from './The_spread_of_epidemics_En';
import {Medicine_En} from './Medicine_En';
import {Pollution_modeling_En} from './Pollution_modeling_En';
import {Social_processes_En} from './Social_processes_En';


import {Sem_a} from './news/Sem_a';
import {Conf_a} from './news/Conf_a';
import {Conf_b} from './news/Conf_b'
import {Conf_c} from './news/Conf_c';
import {Conf_d} from './news/Conf_d';
import {Conf_e} from './news/Conf_e';
import {Conf_f} from './news/Conf_f';
import {Conf_g} from './news/Conf_g';
import {Conf_h} from './news/Conf_h';
import {Sem_a_En} from './news/Sem_a_En';
import {Conf_a_En} from './news/Conf_a_En';
import {Conf_b_En} from './news/Conf_b_En';
import {Conf_c_En} from './news/Conf_c_En';
import {Conf_d_En} from './news/Conf_d_En';
import {Conf_e_En} from './news/Conf_e_En';
import {Conf_f_En} from './news/Conf_f_En';
import {Conf_g_En} from './news/Conf_g_En';
import {Conf_h_En} from './news/Conf_h_En';
import {Sem_b} from './news/Sem_b';
import {Sem_b_En} from './news/Sem_b_En'
import {Sem_c} from './news/Sem_c';
import {Sem_c_En} from './news/Sem_c_En'
import {Sem_d} from './news/Sem_d';
import {Sem_d_En} from './news/Sem_d_En'
import {Sem_e} from './news/Sem_e';
import {Sem_e_En} from './news/Sem_e_En'
import {Sem_f} from './news/Sem_f';
import {Sem_f_En} from './news/Sem_f_En'
import {Sem_g} from './news/Sem_g';
import {Sem_g_En} from './news/Sem_g_En'
import {Sem_h} from './news/Sem_h';
import {Sem_h_En} from './news/Sem_h_En'
import {Sem_i} from './news/Sem_i';
import {Sem_i_En} from './news/Sem_i_En'
import {Sem_j} from './news/Sem_j';
import {Sem_j_En} from './news/Sem_j_En'
import {Sem_k} from './news/Sem_k';
import {Sem_k_En} from './news/Sem_k_En'
import {Sem_l} from './news/Sem_l';
import {Sem_l_En} from './news/Sem_l_En'
import {Sem_m} from './news/Sem_m';
import {Sem_m_En} from './news/Sem_m_En'
import {Sem_n} from './news/Sem_n';
import {Sem_n_En} from './news/Sem_n_En'
import {Sem_o} from './news/Sem_o';
import {Sem_o_En} from './news/Sem_o_En'
import {Sem_p} from './news/Sem_p';
import {Sem_p_En} from './news/Sem_p_En'
import {Sem_q} from './news/Sem_q';
import {Sem_q_En} from './news/Sem_q_En'
import {Sem_r} from './news/Sem_r';
import {Sem_r_En} from './news/Sem_r_En'
import {Sem_s} from './news/Sem_s';
import {Sem_s_En} from './news/Sem_s_En'
import {Sem_t} from './news/Sem_t';
import {Sem_t_En} from './news/Sem_t_En'
import {Life_a} from './news/Life_a';
import {Life_a_En} from './news/Life_a_En'
import {Life_b} from './news/Life_b';
import {Life_b_En} from './news/Life_b_En'
import {Life_c} from './news/Life_c';
import {Life_c_En} from './news/Life_c_En'
import {Life_d} from './news/Life_d';
import {Life_d_En} from './news/Life_d_En'
import {Life_e} from './news/Life_e';
import {Life_e_En} from './news/Life_e_En'
import {TheoryAndNumericalMethods} from './conference/TheoryAndNumericalMethods';
import {TheoryAndNumericalMethods_En} from './conference/TheoryAndNumericalMethods_En';
import {ModernProblemsOfInverseProblems} from './conference/ModernProblemsOfInverseProblems';
import {ModernProblemsOfInverseProblems_En} from './conference/ModernProblemsOfInverseProblems_En';
import {Conf_Astana} from './conference/Conf_Astana';
import {Conf_dynamics} from './conference/Conf_dynamics';
import {Conf_mathematicsAI} from './conference/Conf_mathematicsAI';
import {Conf_innovativeMethods} from './conference/Conf_innovativeMethods';


function App() {

return (<>
    <>
    <div className="bg-light" >

      <Helmet>
         <meta charSet="utf-8" />
         <title></title>
         <link rel="canonical" href="http://ai-biolab.ru" />
       </Helmet>
          <Routes>
            <Route exact path="/statistics" element={<Covid />} />
            <Route exact path="/tub" element={<Tub />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/modeling" element={<Modeling />} />
            <Route exact path="/data_processing_and_analysis" element={<Data_processing_and_analysis />} />
            <Route exact path="/the_spread_of_epidemics" element={<The_spread_of_epidemics />} />
            <Route exact path="/medicine" element={<Medicine />} />
            <Route exact path="/pollution_modeling" element={<Pollution_modeling />} />
            <Route exact path="/social_processes" element={<Social_processes />} />
            <Route exact path="/data_processing_and_analysis/En" element={<Data_processing_and_analysis_En />} />
            <Route exact path="/the_spread_of_epidemics/En" element={<The_spread_of_epidemics_En />} />
            <Route exact path="/medicine/En" element={<Medicine_En />} />
            <Route exact path="/pollution_modeling/En" element={<Pollution_modeling_En />} />
            <Route exact path="/social_processes/En" element={<Social_processes_En />} />
            <Route exact path="/data" element={<Data />} />
            <Route exact path="/links" element={<Links />} />
            <Route exact path="/mainTeam" element={<MainTeam />} />
            <Route exact path="/main_publications_more_detailed" element={<Main_publications_more_detailed />} />
            <Route exact path="/statistics/En" element={<Covid_En />} />
            <Route exact path="/tub/En" element={<Tub_En />} />
            <Route exact path="/En" element={<Main_En />} />
            <Route exact path="/modeling/En" element={<Modeling_En />} />
            <Route exact path="/data/En" element={<Data_En />} />
            <Route exact path="/links/En" element={<Links_En />} />
            <Route exact path="/mainTeam/En" element={<MainTeam_En />} />
            <Route exact path="/main_publications_more_detailed/En" element={<Main_publications_more_detailed_En />} />
            <Route exact path="/krivorotko_info" element={<Krivorotko_info />} />
            <Route exact path="/krivorotko_info/En" element={<Krivorotko_info_En />} />
            <Route exact path="/kabanikhin_info" element={<Kabanikhin_info />} />
            <Route exact path="/kabanikhin_info/En" element={<Kabanikhin_info_En />} />
            <Route exact path="/mikhailapov_info" element={<Mikhailapov_info />} />
            <Route exact path="/mikhailapov_info/En" element={<Mikhailapov_info_En />} />
            <Route exact path="/petrakova_info" element={<Petrakova_info />} />
            <Route exact path="/petrakova_info/En" element={<Petrakova_info_En />} />
            <Route exact path="/semenova_info" element={<Semenova_info />} />
            <Route exact path="/semenova_info/En" element={<Semenova_info_En />} />
            <Route exact path="/nesterova_info" element={<Nesterova_info />} />
            <Route exact path="/nesterova_info/En" element={<Nesterova_info_En />} />
            <Route exact path="/zyatkov_info" element={<Zyatkov_info />} />
            <Route exact path="/zyatkov_info/En" element={<Zyatkov_info_En />} />
            <Route exact path="/zvonareva_info" element={<Zvonareva_info />} />
            <Route exact path="/zvonareva_info/En" element={<Zvonareva_info_En />} />
            <Route exact path="/neverov_info" element={<Neverov_info />} />
            <Route exact path="/neverov_info/En" element={<Neverov_info_En />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/news/En" element={<News_En />} />
            <Route exact path="/conferences" element={<Conferences />} />
            <Route exact path="/conferences/En" element={<Conferences_En />} />
            <Route exact path="/sem_compl" element={<Sem_Compl />} />
            <Route exact path="/sem_compl/EN" element={<Sem_Compl_En />} />
            <Route exact path="/sem_a" element={<Sem_a />} />
            <Route exact path="/sem_a/En" element={<Sem_a_En />} />
            <Route exact path="/sem_s" element={<Sem_s />} />
            <Route exact path="/sem_s/En" element={<Sem_s_En />} />
            <Route exact path="/sem_t" element={<Sem_t />} />
            <Route exact path="/sem_t/En" element={<Sem_t_En />} />
            <Route exact path="/conf_a" element={<Conf_a />} />
            <Route exact path="/conf_b" element={<Conf_b />} />
            <Route exact path="/conf_a/En" element={<Conf_a_En />} />
            <Route exact path="/conf_b/En" element={<Conf_b_En />} />
            <Route exact path="/conf_c" element={<Conf_c />} />
            <Route exact path="/conf_c/En" element={<Conf_c_En />} />
            <Route exact path="/conf_d" element={<Conf_d />} />
            <Route exact path="/conf_d/En" element={<Conf_d_En />} />
            <Route exact path="/conf_e" element={<Conf_e />} />
            <Route exact path="/conf_e/En" element={<Conf_e_En />} />
            <Route exact path="/conf_f" element={<Conf_f />} />
            <Route exact path="/conf_f/En" element={<Conf_f_En />} />
            <Route exact path="/conf_g" element={<Conf_g />} />
            <Route exact path="/conf_g/En" element={<Conf_g_En />} />
            <Route exact path="/conf_h" element={<Conf_h />} />
            <Route exact path="/conf_h/En" element={<Conf_h_En />} />
            <Route exact path="/sem_b" element={<Sem_b />} />
            <Route exact path="/sem_b/En" element={<Sem_b_En />} />
            <Route exact path="/sem_c" element={<Sem_c />} />
            <Route exact path="/sem_c/En" element={<Sem_c_En />} />
            <Route exact path="/sem_d" element={<Sem_d />} />
            <Route exact path="/sem_d/En" element={<Sem_d_En />} />
            <Route exact path="/sem_e" element={<Sem_e />} />
            <Route exact path="/sem_e/En" element={<Sem_e_En />} />
            <Route exact path="/sem_f" element={<Sem_f />} />
            <Route exact path="/sem_f/En" element={<Sem_f_En />} />
            <Route exact path="/sem_g" element={<Sem_g />} />
            <Route exact path="/sem_g/En" element={<Sem_g_En />} />
            <Route exact path="/sem_h" element={<Sem_h />} />
            <Route exact path="/sem_h/En" element={<Sem_h_En />} />
            <Route exact path="/sem_i" element={<Sem_i />} />
            <Route exact path="/sem_i/En" element={<Sem_i_En />} />
            <Route exact path="/sem_j" element={<Sem_j />} />
            <Route exact path="/sem_j/En" element={<Sem_j_En />} />
            <Route exact path="/sem_k" element={<Sem_k />} />
            <Route exact path="/sem_k/En" element={<Sem_k_En />} />
            <Route exact path="/sem_l" element={<Sem_l />} />
            <Route exact path="/sem_l/En" element={<Sem_l_En />} />
            <Route exact path="/sem_m" element={<Sem_m />} />
            <Route exact path="/sem_m/En" element={<Sem_m_En />} />
            <Route exact path="/sem_n" element={<Sem_n />} />
            <Route exact path="/sem_n/En" element={<Sem_n_En />} />
            <Route exact path="/sem_o" element={<Sem_o />} />
            <Route exact path="/sem_o/En" element={<Sem_o_En />} />
            <Route exact path="/sem_p" element={<Sem_p />} />
            <Route exact path="/sem_p/En" element={<Sem_p_En />} />
            <Route exact path="/sem_q" element={<Sem_q />} />
            <Route exact path="/sem_q/En" element={<Sem_q_En />} />
            <Route exact path="/sem_r" element={<Sem_r />} />
            <Route exact path="/sem_r/En" element={<Sem_r_En />} />
            <Route exact path="/life_a" element={<Life_a />} />
            <Route exact path="/life_a/En" element={<Life_a_En />} />
            <Route exact path="/life_b" element={<Life_b />} />
            <Route exact path="/life_b/En" element={<Life_b_En />} />
            <Route exact path="/life_c" element={<Life_c />} />
            <Route exact path="/life_c/En" element={<Life_c_En />} />
            <Route exact path="/life_d" element={<Life_d />} />
            <Route exact path="/life_d/En" element={<Life_d_En />} />
            <Route exact path="/life_e" element={<Life_e />} />
            <Route exact path="/life_e/En" element={<Life_e_En />} />
            <Route exact path="/theoryAndNumericalMethods" element={<TheoryAndNumericalMethods />} />
            <Route exact path="/theoryAndNumericalMethods/En" element={<TheoryAndNumericalMethods_En />} />
            <Route exact path="/modernProblemsOfInverseProblems" element={<ModernProblemsOfInverseProblems />} />
            <Route exact path="/modernProblemsOfInverseProblems/En" element={<ModernProblemsOfInverseProblems_En />} />
            <Route exact path="/conf_Astana" element={<Conf_Astana />} />
            <Route exact path="/conf_dynamics" element={<Conf_dynamics />} />
            <Route exact path="/conf_mathematicsAI" element={<Conf_mathematicsAI />} />
            <Route exact path="/conf_innovativeMethods" element={<Conf_innovativeMethods />} />
            <Route exact path="/krivorotko_zvonareva_teaching" element={<Krivorotko_Zvonareva_teaching />} />
            <Route exact path="/krivorotko_teaching" element={<Krivorotko_teaching />} />
            <Route exact path="/krivorotko_zvonareva_teaching/En" element={<Krivorotko_Zvonareva_teaching_En />} />
            <Route exact path="/krivorotko_teaching/En" element={<Krivorotko_teaching_En />} />
            <Route exact path="/krivorotko_teaching_methods" element={<Krivorotko_teaching_methods />} />
            <Route exact path="/krivorotko_teaching_methods/En" element={<Krivorotko_teaching_methods_En />} />
          </Routes>
          </div>
    </>
  </>)
}

export default App;
//<Footer />
//<Route exact path="/statistics/En" element={<Covid_En />} />
//<Route exact path="/En" element={<Main_En />} />
//<Route exact path="/modeling/En" element={<Modeling_En />} />
//<Route exact path="/data/En" element={<Data_En />} />
//<Route exact path="/mainTeam/En" element={<MainTeam_En />} />
//<Route exact path="/main_publications_more_detailed/En" element={<Main_publications_more_detailed_En />} />