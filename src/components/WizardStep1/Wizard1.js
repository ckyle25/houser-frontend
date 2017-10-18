import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../reset.css'
import './Wizard1.css';

class Wizard1 extends Component {
    render() {
      return (
        <div>
            <section className='wizard1-navbar'>
                <div className='wizard1-navbar-content-container'>
                    <div className='wizard1-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard1-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard1-header-text'>Logout</Link>
                </div>
            </section>
            <section className='wizard1-main-content'>
                <div className='wizard1-main-content-container'>
                    <div className='wizard1-line1-container'>
                        <div className='wizard1-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard1-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard1-plain-text-format'>Step 1</div>
                    <div className='wizard1-step-images-container'>
                        <img src={require('../../assets/step_active.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                    </div>
                    <div className='wizard1-input-container'>
                        <div className='wizard1-bold-text-format'>Property Name</div>
                        <input className='wizard1-input1'></input>
                        <div className='wizard1-bold-text-format'>Property Description</div>
                        <input className='wizard1-input2'></input>
                    </div>
                    <Link to='/wizard2' className='wizard1-nextstep-button'>Next Step</Link>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default Wizard1;