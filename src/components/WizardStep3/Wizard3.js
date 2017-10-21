import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../reset.css'
import './Wizard3.css';
import Nav from '../Nav/Nav';


class Wizard3 extends Component {
    render() {
      return (
        <div>
            <Nav/>
            <section className='wizard3-main-content'>
                <div className='wizard3-main-content-container'>
                    <div className='wizard3-line1-container'>
                        <div className='wizard3-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard3-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard3-plain-text-format'>Step 3</div>
                    <div className='wizard3-step-images-container'>
                        <img src={require('../../assets/step_completed.png')} alt="step one completed"></img>
                        <img src={require('../../assets/step_completed.png')} alt="step two completed"></img>
                        <img src={require('../../assets/step_active.png')} alt="step three active"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step four inactive"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step five inactive"></img>
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
