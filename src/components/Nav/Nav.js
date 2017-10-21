import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/header_logo.png';
import './Nav.css';

class Nav extends Component {
  render() {
      return(
        <section className='wizard-navbar'>
            <div className='wizard-navbar-content-container'>
                <div className='wizard-header-container'>
                    <img src={navLogo} alt="Houser Logo"></img>
                    <div className='wizard-header-text'>Houser Dashboard</div>
                </div>
                <Link to='/' className='wizard-header-text'>Logout</Link>
            </div>
        </section>
      );
  }
}

export default Nav;
