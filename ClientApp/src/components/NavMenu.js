import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header >
        <Navbar
          className=" mb-3 "
          container="fluid"
          dark
          color="primary" >
          <NavbarBrand tag={Link} to="/">
            <img src="/media/water-glass.png" alt='Glass of water' height={30} width={30} className='me-2' />
            <span className='fw-bolder'>WaterReminder</span>
          </NavbarBrand>

        </Navbar>
      </header>
    );
  }
}
