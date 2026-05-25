import React from "react";
import {Navbar, Nav, Button, Container, NavDropdown, OverlayTrigger, Tooltip, Modal, Image, Stack} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ".././styles.css";
import ip_head from "../images/ip_head.png"
import logo_nav from "../images/logo_nav.png"

const setActive=({isActive}) => isActive ? 'active-link' : 'non-active';
export default function NaviBar() {

  return (

    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="" >
        <Container className="py-1">
        <Navbar.Brand className="text-white">
        <Stack direction="both" gap={3}>
        <Image variant="bottom" className = ""
        src={logo_nav}
        fluid
        style={{ width: '9rem' }, {height: '9rem'}}
        />{''}
      <h3></h3></Stack></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" className="justify-content-end flex-grow-1 pe-4">
        <Nav.Link><NavLink to="/news" className={setActive} ><h5>Новости</h5></NavLink></Nav.Link>
          
          <h5><NavDropdown title={<span className="fdrop">Научные направления</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item> <NavLink to="/data_processing_and_analysis" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Обработка и анализ данных</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to="/the_spread_of_epidemics" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Моделирование и сценарии распространения эпидемий</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to="/social_processes" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Моделирование социальных процессов</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to="/pollution_modeling" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Моделирование загрязнений в регионах РФ</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to="/medicine" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Моделирование в медицине</NavLink></NavDropdown.Item>
          </NavDropdown></h5>
          <h5><NavDropdown title={<span className="fdrop">Данные</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item> <NavLink to="/data" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Данные для скачивания</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to="/links" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Полезные ссылки</NavLink></NavDropdown.Item>
          </NavDropdown></h5>
          <h5><NavDropdown title={<span className="fdrop">Статистика</span>} id="collasible-nav-dropdown">
            <NavDropdown.Item> <NavLink to="/statistics" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Коронавирус</NavLink></NavDropdown.Item>
            <NavDropdown.Item> <NavLink to="/tub" className={({isActive}) => isActive ? 'active-dropdown' : 'non-active-dropdown'} >Туберкулёз</NavLink></NavDropdown.Item>
          </NavDropdown></h5>
          
          <div class="header__lang">
                    <a href="/" class="header__lang-link active">RU</a>
                    <span>|</span>
                    <a href="/EN/" class="header__lang-link">EN</a>
                </div>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
//<Nav.Link><NavLink to="/data"
//className={setActive}><h5>Данные</h5></NavLink></Nav.Link>
