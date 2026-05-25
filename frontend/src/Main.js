import React, { useState } from 'react';
import {Container, Card, Row, Button, CarouselItem, CarouselCaption, Col } from 'react-bootstrap'
import MTeamItem from './Components/TeamItem'
import Main_picture from './Components/Main_picture'
import Main_contacts from './Components/Main_contacts'
import Main_publications from './Components/Main_publications'
import Main_conferences from './Components/Main_conferences'
import Main_publications_more_detailed from './Components/Main_publications_more_detailed'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Koshelev from "./images/team/Koshelev.jpg"
import Semenova from "./images/team/Semenova.jpg"
import Mikhailapov from "./images/team/Mikhailapov.png"
import Footer from './Components/Footer'
import Question from "./images/conf/Question.png"
import Novikov from "./images/team/Novikov.jpg"
import {Carousel} from 'react-bootstrap'
import sem_a from "./images/news/sem_a.PNG"
import sem_b from "./images/news/sem_b.PNG"
import sem_c from "./images/news/sem_c.PNG"
import conf_bioresources from "./images/conf/conf_bioresources.PNG"
import conf_Dynamics from "./images/conf/conf_Dynamics.PNG"
import life_e from "./images/news/life_e.PNG"
import Sirius_conference from "./images/conf/Sirius_conference.png"
import conf_TheoryAndNumericalMethods2 from "./images/conf/conf_TheoryAndNumericalMethods2.png"
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

export function Main() {

  const newsItems = [
        {
      title: "С 21 по 25 июля проходит Международный конгресс по анализу, приложениям и вычислениям (ISAAC-2025), участниками которого станут сразу 5 сотрудников лаборатории",
      date: "21.07.2025",
      image: life_e,
      link: "/Life_e"
    },
    {
      title: "3 июля пройдёт семинар лаборатории на тему «Симплификация Неверова»",
      date: "02.07.2025",
      image: sem_b,
      link: "/Sem_t"
    },
    {
      title: "19 июня пройдёт семинар лаборатории на тему «Сравнительный анализ подходов к решению обратной задачи реконструкции изображений в эмиссионной медицинской томографии»",
      date: "17.06.2025",
      image: sem_a,
      link: "/Sem_s"
    },
    
  ];

  const posts = [
    {id: 1, wid: '8rem', name: 'Криворотько Ольга Игоревна', url:'/Krivorotko_info', institution: 'д.ф.-м.н.,заведующий лабораторией',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Новиков Никита Сергеевич ', institution: 'к.ф.-м.н.,старший научный сотрудник',Phone:'',mail:'📩 novikov-1989@yandex.ru', image: Novikov},
    {id: 3, wid: '8rem', name: 'Зятьков Николай Юрьевич', url:'/Zyatkov_info', institution: 'к.т.н.,научный сотрудник',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 4, wid: '8rem', name: 'Петракова Виктория Сергеевна ', url:'/Petrakova_info', institution: 'к.ф.-м.н., научный сотрудник',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Звонарева Татьяна Александровна ',url:'/Zvonareva_info', institution: 'младший научный сотрудник',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 6, wid: '8rem', name: 'Семёнова Диана Анзоровна ',url:'/Semenova_info', institution: 'младший научный сотрудник',Phone:'📞 +7(926) 189-8945',mail:'📩 dianasoulmate@yandex.ru', image: Semenova},
    {id: 7, wid: '8rem', name: 'Неверов Андрей Вячеславович ',url:'/Neverov_info', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Нестерова Ангелина Витальевна ',url:'/Nesterova_info', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь',Phone:'',mail:'📩 a.v.nesterova@math.nsc.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Михайлапов Денис Иванович',url:'/Mikhailapov_info', institution: 'стажер-исследователь',Phone:'',mail:'📩 d.i.mikhailapov@math.nsc.ru', image: Mikhailapov},
    {id: 10, wid: '8rem', name: 'Стрижак Сергей Владимирович ', institution: 'к.т.н., старший научный сотрудник',institution2:'',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 11, wid: '8rem', name: 'Кошелев Константин Борисович ', institution: 'к.ф.-м.н., старший научный сотрудник',Phone:'',mail:'📩 koshelevkb@mail.ru', image: Koshelev},
    {id: 12, wid: '8rem', name: 'Кабанихин Сергей Игоревич', url:'/Kabanikhin_info', institution: 'д.ф.-м.н.,член-корреспондент РАН,главный научный сотрудник',Phone:' 📞 +7 (383) 330-8353',mail:'📩 ksi52@mail.ru', image: Kabanikhin}
  ]


    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    const conferences = [
      {
        title: "Евразийская международная научная конференция «Искусственный интелект и обратные задачи в науке, технике и индустрии»",
        image: conf_TheoryAndNumericalMethods2,
        link: "/Conf_Astana",
        location: "Астана, Казахстан",
        time: "С 14 по 16 апреля 2025 года."
      },
      {
        title: "Научная конференция «Динамика в Сибири»",
        image: conf_Dynamics,
        link: "/Conf_dynamics",
        location: "Институт математики им. С.Л. Соболева СО РАН.",
        time: "С 24 февраля по 1 марта 2025 года."
      },            
    ];
    const conferencestwo = [
      {
        title: "Научная конференция «Математика искусственного интеллекта»",
        image: Sirius_conference,
        link: "/Conf_mathematicsAI",
        location: "Международный математический центр Сириус",
        time: "С 24 по 28 марта 2025 года."
      },
      {
        title: "IV Международная научно-практическая конференция «Инновационные методы математики и физики в экологических и гидрометеорологических исследованиях»",
        image: conf_ModernProblemsOfInverseProblems,
        link: "/Conf_innovativeMethods",
        location: "Российский государственный гидрометеорологический университет",
        time: "4 апреля 2025 года."
      },            
    ];

  return(
      <>
      <Main_picture />
        <Container >
        <motion.div initial="hidden" custom={2} variants={variants} whileInView="visible" viewport={{ amount: 0.05, once: true }}>
          <Card className="text-center bg-secondary text-white my-3">
            <Card.Title>
              <h4 className="my-1">Новости</h4>
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
      </article>
    </a>
            </Col>
          ))}
        </Row>

        <Button href="/News" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
          <div style={{ fontSize: 16 }}><b>Все новости</b></div>
        </Button>
          
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Состав лаборатории</h4> </Card.Title>
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
          <h4 className="text-left mx-5 text-secondary">Kонтакты</h4>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_contacts />
          </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Публикации</h4></motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_publications />
            </motion.div>
            <motion.div initial="hidden"
          animate="visible" custom={2}
          variants={variants}>
          <Button href="/Main_publications_more_detailed" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Подробнее</b></div></Button>
            </motion.div>
            <motion.div 
        initial="hidden" 
        custom={2} 
        variants={variants} 
        whileInView="visible" 
        viewport={{ amount: 0.05, once: true }}
      >
        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title>
            <h4 className="my-1">Конференции</h4>
          </Card.Title>
        </Card>
      </motion.div>

      <div className="cards_container">
        <ul className="cards_t">
          {conferences.map((conf, index) => (
            <li 
              key={index} 
              className="cards_item_conf" 
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={conf.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="card_conf">
                  <div className="card_image_conf my-4">
                    <img src={conf.image} alt="Конференция" />
                  </div>
                  <div className="card_content_t">
                    <h5 className="card_title_t">{conf.title}</h5>
                    {hoveredIndex === index && (
                      <div className="additional_info">
                        <p>{conf.title}</p>
                        <p>Место проведения: {conf.location}</p>
                        <p>Дата проведения: {conf.time}</p>
                      </div>
                    )}
                  </div>
                </article>
              </a>
            </li>
          ))}
        </ul>
        <ul className="cards_t">
          {conferencestwo.map((conf, index) => (
            <li 
              key={index} 
              className="cards_item_conf" 
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={conf.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article className="card_conf">
                  <div className="card_image_conf my-4">
                    <img src={conf.image} alt="Конференция" />
                  </div>
                  <div className="card_content_t">
                    <h5 className="card_title_t">{conf.title}</h5>
                    {hoveredIndex === index && (
                      <div className="additional_info">
                        <p>{conf.title}</p>
                        <p>Место проведения: {conf.location}</p>
                        <p>Дата проведения: {conf.time}</p>
                      </div>
                    )}
                  </div>
                </article>
              </a>
            </li>
          ))}
        </ul>
        <Button 
          href="/Conferences" 
          className="text-white shadow4 my-3 py-2 mp_info" 
          variant="info" 
          size="sm"
        >
          <div style={{ fontSize: 16 }}><b>Все конференции</b></div>
        </Button>
      </div>
            
      </Container>
      <Footer />
    </>
          
)
}
