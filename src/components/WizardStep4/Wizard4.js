import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../reset.css'
import './Wizard4.css';

class Wizard4 extends Component {
    render() {
      return (
        <div>
            <section className='wizard4-navbar'>
                <div className='wizard4-navbar-content-container'>
                    <div className='wizard4-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard4-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard4-header-text'>Logout</Link>
                </div>
            </section>
            <section className='wizard4-main-content'>
                <div className='wizard4-main-content-container'>
                    <div className='wizard4-line1-container'>
                        <div className='wizard4-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard4-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard4-plain-text-format'>Step 4</div>
                    <div className='wizard4-step-images-container'>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_active.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                    </div>
                    <div className='wizard4-input-container'>
                        <div className='wizard4-bold-text-format'>Loan Amount</div>
                        <input className='wizard4-input1'></input>
                        <div className='wizard4-bold-text-format'>Monthly Mortgage</div>
                        <input className='wizard4-input2'></input>
                    </div>
                    <div className='wizard4-button-container'>
                        <Link to='/wizard3' className='wizard4-nextstep-button'>Previous Step</Link>
                        <Link to='/wizard5' className='wizard4-nextstep-button'>Next Step</Link>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default Wizard4;