import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../reset.css'
import './Wizard5.css';

class Wizard5 extends Component {
    render() {
      return (
        <div>
            <section className='wizard5-navbar'>
                <div className='wizard5-navbar-content-container'>
                    <div className='wizard5-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard5-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard5-header-text'>Logout</Link>
                </div>
            </section>
            <section className='wizard5-main-content'>
                <div className='wizard5-main-content-container'>
                    <div className='wizard5-line1-container'>
                        <div className='wizard5-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard5-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard5-plain-text-format'>Step 5</div>
                    <div className='wizard5-step-images-container'>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_active.png')}></img>
                    </div>
                    <div className='wizard5-input-container'>
                        <div className='wizard5-rec-rent-container'>
                            <div className='wizard5-bold-text-format'>Recommended Rent: (Insert Value Here)</div>
                        </div>
                        <div className='wizard5-bold-text-format'>Desired Rent</div>
                        <input className='wizard5-input2'></input>
                    </div>
                    <div className='wizard5-button-container'>
                        <Link to='/wizard4' className='wizard5-nextstep-button'>Previous Step</Link>
                        <Link to='/landing' className='wizard5-complete-button'>Complete</Link>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default Wizard5;