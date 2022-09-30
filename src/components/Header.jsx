import React, { Component } from 'react';
import {
  Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
  Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
        <Navbar dark expand="md" className="bg-dark">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src={process.env.PUBLIC_URL + '/logo192.png'} height="40" width="40" alt='Logo Here' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to='/home'>
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/aboutus'>
                    <span className="fa fa-info fa-lg"></span> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/menu'>
                    <span className="fa fa-list fa-lg"></span> List
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contactus'>
                    <span className="fa fa-address-card fa-lg"></span> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;