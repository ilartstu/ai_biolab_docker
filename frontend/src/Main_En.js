import React from "react";
import {Container, Card, Row, Button, Col } from 'react-bootstrap'
import MTeamItem from './Components/TeamItem'
import Main_picture_En from './Components/Main_picture_En'
import Main_contacts_En from './Components/Main_contacts_En'
import Main_publications_En from './Components/Main_publications_En'
import Main_conferences_En from './Components/Main_conferences_En'
import Main_publications_more_detailed_En from './Components/Main_publications_more_detailed_En'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Novikov from "./images/team/Novikov.jpg"
import Koshelev from "./images/team/Koshelev.jpg"
import Footer_En from './Components/Footer_En'
import Question from "./images/conf/Question.png"
import sem_a from "./images/news/sem_a.PNG"
import sem_b from "./images/news/sem_b.PNG"
import sem_c from "./images/news/sem_c.PNG"
import life_e from "./images/news/life_e.PNG"
import Semenova from "./images/team/Semenova.jpg"
import Mikhailapov from "./images/team/Mikhailapov.png"
import conf_TheoryAndNumericalMethods from "./images/conf/conf_TheoryAndNumericalMethods.png"
import conf_ModernProblemsOfInverseProblems from "./images/conf/conf_ModernProblemsOfInverseProblems.png"
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

const itemAnimation = {
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

export function Main_En() {

  const newsItems = [
     {
          title: "The International Congress on Analysis, Applications and Computing (ISAAC-2025) is taking place from July 21 to 25, with 5 laboratory staff participating at once",
          date: "21.07.2025",
          image: life_e,
          link: "/Life_e/En"
        },
        {
          title: "On July 3, the laboratory will hold a seminar on «Simplification of Neverov»",
          date: "02.07.2025",
          image: sem_b,
          link: "/Sem_t/En"
        },
    {
      title: "On June 19, the laboratory will hold a seminar on «Comparative analysis of approaches to solving the inverse problem of image reconstruction in emission medical tomography»",
      date: "17.06.2025",
      image: sem_a,
      link: "/Sem_s/En"
    },
    
    
    
  ];

  const posts = [
    {id: 1, wid: '8rem', name: 'Olga Krivorotko', url:'/Krivorotko_info/En', institution: 'Doctor of Physical and Mathematical Sciences,Head of the laboratory',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Nikita Novikov', institution: 'Candidate of Physical and Mathematical Sciences,Senior Researcher',Phone:'',mail:'📩 novikov-1989@yandex.ru', image: Novikov},
    {id: 3, wid: '8rem', name: 'Nikolai Zyatkov',url:'/Zyatkov_info/En', institution: 'Candidate of Technical Sciences,Research Associate',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 4, wid: '8rem', name: 'Victoria Petrakova',url:'/Petrakova_info/En', institution: 'Candidate of Physical and Mathematical Sciences,Research Associate',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Tatyana Zvonareva',url:'/Zvonareva_info/En', institution: 'Junior Research Assistant',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 6, wid: '8rem', name: 'Diana Semenova',url:'/Semenova_info/En', institution: 'Junior Research Assistant',Phone:' 📞 +7(926) 189-8945',mail:'📩 dianasoulmate@yandex.ru', image: Semenova},
    {id: 7, wid: '8rem', name: 'Andrei Neverov',url:'/Neverov_info/En', institution: 'Graduate student IM SB RAS',institution2:'Research Engineer',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Angelina Nesterova',url:'/Nesterova_info/En', institution: 'Graduate student IM SB RAS',institution2:'Research Engineer',Phone:'',mail:'📩  a.v.nesterova@math.nsc.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Denis Mikhailapov',url:'/Mikhailapov_info/En', institution: 'Intern Researcher',Phone:'',mail:'📩 d.mikhailapov@math.nsc.ru', image: Mikhailapov},
    {id: 10, wid: '8rem', name: 'Sergey Strizhak', institution: 'Candidate of Technical Sciences, Senior Researcher',institution2:'',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 11, wid: '8rem', name: 'Konstantin Koshelev', institution: 'Candidate of Physical and Mathematical Sciences, Senior Researcher',Phone:'',mail:'📩 koshelevkb@mail.ru', image: Koshelev},
    {id: 12, wid: '8rem', name: 'Sergey Kabanikhin', url:'/Kabanikhin_info/En', institution: 'Doctor of Physical and Mathematical Sciences, Corresponding Member of the Russian Academy of Sciences,Chief Research Associate',Phone:' 📞 +7 (383) 330-8353',mail:'📩 ksi52@mail.ru', image: Kabanikhin}
  ]
           
  return(
      <>
      <Main_picture_En />
      <Container >
        <motion.div initial="hidden" custom={2} variants={variants} whileInView="visible" viewport={{ amount: 0.05, once: true }}>
          <Card className="text-center bg-secondary text-white my-3">
            <Card.Title>
              <h4 className="my-1">News</h4>
            </Card.Title>
          </Card>
        </motion.div>

        <Row>
          {newsItems.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4"> {/* Измените размеры колонок здесь */}
              <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="card_t">
                <div className="card_image_t">
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div className="card_content_t">
                  <h5 className="card_title_t">{item.title}</h5>
                  <p className="card_descr_t">{item.date}</p>
                </div>
              </article></a>
            </Col>
          ))}
        </Row>

        <Button href="/News/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
          <div style={{ fontSize: 16 }}><b>All news</b></div>
        </Button>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">The composition of the laboratory</h4> </Card.Title>
          </Card>
          </motion.div>
          <motion.div  initial="hidden"
            animate="visible">
          <Container>
            <Row xs={1} md={2} className="justify-content-md-center" >
              {posts.map((post, index) =>
                  <MTeamItem  initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {post.id} post = {post}/>
              )}
            </Row>
          </Container>
          </motion.div>
          <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
        </motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Contacts</h4>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_contacts_En />
          </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Publications</h4></motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_publications_En />
            </motion.div>
            <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/Main_publications_more_detailed/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>More detailed</b></div></Button>
            </motion.div>
            <motion.div initial="hidden"
custom={2}
variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
<Card className="text-center bg-secondary text-white my-3" >
<Card.Title> <h4 className="my-1 ">Conferences</h4> </Card.Title>
</Card>
</motion.div>
<div className="cards_container">
  <ul className="cards_t">
    <li className="cards_item_conf">
    <a href="/TheoryAndNumericalMethods/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="card_conf">
        <div className="card_image_conf my-4">
          <img src={conf_TheoryAndNumericalMethods} alt="Конференция" />
        </div>
        <div className="card_content_t">
          <h5 className="card_title_t">XVI International Youth Scientific School-conference «Theory and numerical methods for solving inverse and ill-posed problems».</h5>
          <p className="card_title_t">Venue: S.L. Sobolev Institute of Mathematics SB RAS</p>
          <p className="card_title_t">Date: From September 30 to October 2, 2024.</p>
        </div>
      </article>
      </a>
    </li>
    <li className="cards_item_conf">
    <a href="/ModernProblemsOfInverseProblems/En" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="card_conf">
        <div className="card_image_conf my-4">
          <img src={conf_ModernProblemsOfInverseProblems} alt="Конференция" />
        </div>
        <div className="card_content_t">
          <h5 className="card_title_t">International Scientific Conference «Modern problems of inverse problems».</h5>
          <p className="card_title_t">Venue: S.L. Sobolev Institute of Mathematics SB RAS.</p>
          <p className="card_title_t">Date: From 3 to 5 October 2024.</p>
        </div>
      </article>
      </a>
    </li>
  </ul>
  <Button href="/Conferences/En" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
          <div style={{ fontSize: 16 }}><b>All conferences</b></div>
        </Button>
</div>
      </Container>
      <Footer_En />
    </>
)
}