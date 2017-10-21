import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/header_logo.png';

class Nav extends Component {
  render() {
      return(
        <section className='wizard1-navbar'>
            <div className='wizard1-navbar-content-container'>
                <div className='wizard1-header-container'>
                    <img src={navLogo} alt="Houser Logo"></img>
                    <div className='wizard1-header-text'>Houser Dashboard</div>
                </div>
                <Link to='/' className='wizard1-header-text'>Logout</Link>
            </div>
        </section>
      );
  }
}

export default Nav;
