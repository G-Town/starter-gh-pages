import '../App.css'
import React, { useState } from "react";
import {
  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </Nav>
  );
}

export default Sidebar;