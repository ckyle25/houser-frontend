import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../reset.css'
import './Wizard3.css';

class Wizard3 extends Component {
    render() {
      return (
        <div>
            <section className='wizard3-navbar'>
                <div className='wizard3-navbar-content-container'>
                    <div className='wizard3-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard3-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard3-header-text'>Logout</Link>
                </div>
            </section>
            <section className='wizard3-main-content'>
                <div className='wizard3-main-content-container'>
                    <div className='wizard3-line1-container'>
                        <div className='wizard3-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard3-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard3-plain-text-format'>Step 3</div>
                    <div className='wizard3-step-images-container'>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_active.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                    </div>
                    <div className='wizard3-input-container'>
                        <div className='wizard3-preview-box'></div>
                        <div className='wizard3-bold-text-format'>Image URL</div>
                        <input className='wizard3-input2'></input>
                    </div>
                    <div className='wizard3-button-container'>
                        <Link to='/wizard2' className='wizard3-nextstep-button'>Previous Step</Link>
                        <Link to='/wizard4' className='wizard3-nextstep-button'>Next Step</Link>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default Wizard3;