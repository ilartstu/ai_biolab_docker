import React from "react";
import {Container, Card, Row } from 'react-bootstrap';
import MTeamItem from './Components/TeamItem'
import { motion } from "framer-motion"
import Zvonareva from "./images/team/Zvonareva.png"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import Khrushchev from "./images/team/Khrushchev.jpg"
import Kabanikhin from "./images/team/Kabanikhin.jpg"
import Question from "./images/conf/Question.png"
import Footer from './Components/Footer'
import NaviBarv2 from './Components/NaviBarv2'

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

export function MainTeam() {

  const posts = [
    {id: 1, wid: '9rem', name: 'Криворотько Ольга Игоревна', url:'https://icmmg.nsc.ru/ru/content/employees/krivorotko-olga-igorevna', institution: 'д.ф.-м.н.,  начальник научно-исследовательского отдела ММЦ ИМ СО РАН',Phone:' 📞 +7(383) 329-7610',mail:'📩 o.i.krivorotko@math.nsc.ru', image: Krivorotko},
    {id: 2, wid: '8rem', name: 'Зятьков Николай Юрьевич', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000390', institution: 'к.т.н., начальник инновационного отдела ММЦ ИМ СО РАН',Phone:' 📞 +7(383) 329-7610',mail:'📩 n.y.zyatkov@math.nsc.ru ', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Кабанихин Сергей Игоревич', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=0000000635', institution: 'Директор ММЦ ИМ СО РАН',Phone:' 📞 +7(383) 329-7526',mail:'📩 kabanikh@math.nsc.ru', image: Kabanikhin},
    {id: 4, wid: '9rem', name: 'Петракова Виктория Сергеевна ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000543', institution: 'к.ф.-м.н., научный сотрудник ИМ СО РАН',Phone:'📞 +7(923) 267-3748',mail:'📩 vika-svetlakova@yandex.ru', image: Petrakova},
    {id: 5, wid: '8rem', name: 'Хрущев Сергей Евгеньевич ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000048', institution: 'к.ф.-м.н., старший научный сотрудник ИМ СО РАН',Phone:' 📞 +7(383) 329-7659',mail:'📩 s.e.khrushchev@math.nsc.ru', image: Question},
    {id: 6, wid: '8rem', name: 'Звонарева Татьяна Александровна ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000514', institution: 'инженер ИМ СО РАН',Phone:' 📞 +7(383) 329-7611',mail:'📩 t.a.zvonareva@math.nsc.ru', image: Zvonareva},
    {id: 7, wid: '9rem', name: 'Неверов Андрей Вячеславович ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000504', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь ИМ СО РАН',Phone:' 📞 +7(383) 3297611',mail:'📩 a.neverov@g.nsu.ru', image: Neverov},
    {id: 8, wid: '8rem', name: 'Нестерова Ангелина Витальевна ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000529', institution: 'аспирант ИМ СО РАН',institution2:'инженер-исследователь ИМ СО РАН',Phone:'',mail:'📩 angelka.nesterova.99@mail.ru' , image: Question},
    {id: 9, wid: '8rem', name: 'Стрижак Сергей Владимирович ', url:'https://istina.cemi-ras.ru/workers/291766341/', institution: 'к.т.н., старший научный сотрудник ИСП',institution2:'РАН',Phone:'',mail:'📩 strijhak@yandex.ru', image: Question},
    {id: 10, wid: '8rem', name: 'Кошелев Константин Борисович ', url:'https://istina.msu.ru/workers/263119504/', institution: 'к.ф.-м.н., старший научный сотрудник ИСП РАН',Phone:'',mail:'📩 koshelev@iwep.ru', image: Question},
    {id: 11, wid: '8rem', name: 'Шефер Евгений Игоревич ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000389', institution: 'к.ф.-м.н., научный сотрудник ИМ СО РАН',Phone:' 📞 +7(383) 329-7659',mail:'📩 e.i.shefer@math.nsc.ru', image: Question},
    {id: 12, wid: '8rem', name: 'Глухов Антон Иосифович ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000509', institution: 'стажер-исследователь ИМ СО ',institution2:'РАН',Phone:'',mail:'📩 a.glukhov@g.nsu.ru', image: Question},
    {id: 13, wid: '8rem', name: 'Сурнин Павел Сергеевич ', url:'http://a-server.math.nsc.ru/IM/sotrudl.asp?CodID=%C7%CA-0000516', institution: 'аспирант НГУ',institution2:'стажер-исследователь ИМ СО РАН',Phone:'',mail:'📩 p.surnin@g.nsu.ru', image: Question}
  ]
  return(
      <>
      <NaviBarv2 />
    <Container className="my-3"   style={{height: "120%" }}></Container>

        <Container >
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
      </Container>
      <Footer />
      </>
)
}
 //<Main_picture>
//</Main_picture><Main_picture />