import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Magazine from './pages/Magazine';
import About from './pages/About';
import Board from './pages/Board';
import Detail from './pages/Detail';

import './App.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="logo">
        <Link to="/" style={{ display: 'inline-block' }}>
          <img className="logo_img" src={process.env.PUBLIC_URL + '/images/logo.png'} alt='slobagel_logo' />
        </Link>
      </div>

      <Navbar style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#4a4a4a' }}>
        <Container>
          <Nav className="nav_wrap">
            <NavLink to="/" className="nav_link">HOME</NavLink>
            <NavLink to="/shop" className="nav_link">SHOP</NavLink>
            <NavLink to="/magazine" className="nav_link">MAGAZINE</NavLink>
            <NavLink to="/about" className="nav_link">ABOUT</NavLink>
            <NavLink to="/board" className="nav_link">BOARD</NavLink>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Container>

      <footer className="footer">
        <div>
          {/* Follow Us */}
          <div className="follow">
            <p>Follow Us</p>
            <p>
              <a href="#">Instagram</a>
              <a href="#">kakao channel</a>
            </p>
          </div>

          <hr style={{ borderTop: '2px solid #fff', marginBottom: '40px' }} />

          <div className="info_contact">
            {/* Information */}
            <div className="information">
              <p>Information</p>
              <p>Company: 주식회사 영광산업</p>
              <p>Ceo: 이은영</p>
              <p>Personal info manager: 조윤진</p>
              <p>Company Reg.No: 1078673695
                <a href="#" style={{ fontWeight: 'bold' }}> [사업자정보확인]</a>
              </p>
              <p>Network Reg.No: 2023-경기안성-0677</p>
              <p>Copyright &copy; slobagel. All rights reserved. <br />Designed by Showdesign</p>
            </div>

            {/* Contact Us */}
            <div className="contact">
              <p>Contact Us</p>
              <p>53282 경남 거제시 거제면 거제남서로 3955-2 (,6-1,7-3)</p>
              <p>010-7149-4491</p>
              <p>slowsorang_@naver.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
