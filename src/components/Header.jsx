import React, { Component } from 'react';
import { FaHome, FaInfo, FaList } from 'react-icons/fa';
import {
  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" className="bg-black">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src={process.env.PUBLIC_URL + '/logo192.png'} height="40" width="40" alt='Logo Here' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <IconContext.Provider value={{ className: "shared-icon" }}>
                  <NavItem>
                    <NavLink className="nav-link text-white" to='/home'>
                      <FaHome /> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link text-white" to='/about'>
                      <FaInfo /> About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link text-white" to='/list'>
                      <FaList /> List
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                  <NavLink className="nav-link" to='/contactus'>
                    <span className="fa fa-address-card fa-lg"></span> Contact
                  </NavLink>
                </NavItem> */}
                </IconContext.Provider>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;