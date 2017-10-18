import React, { Component } from 'react';
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
                    <div className='wizard3-header-text'>Logout</div>
                </div>
            </section>
            <section className='wizard3-main-content'>
                <div className='wizard3-main-content-container'>
                    <div className='wizard3-line1-container'>
                        <div className='wizard3-add-listing-text'>Add new listing</div>
                        <div className='wizard3-cancel-button'>Cancel</div>
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
                        <div className='wizard3-nextstep-button'>Previous Step</div>
                        <div className='wizard3-nextstep-button'>Next Step</div>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  export default Wizard3;