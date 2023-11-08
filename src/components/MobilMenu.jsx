import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const MobileMenu = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Open Menu</button>

      <Offcanvas show={show} {...props}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>
            <NavLink to="/"><img src={logo} alt="the logo for the company Crito" /></NavLink>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileMenu;