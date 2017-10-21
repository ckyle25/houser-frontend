import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../reset.css'
import './Wizard1.css';
import Nav from '../Nav/Nav';

class Wizard1 extends Component {
    render() {
      return (
        <div>
            <Nav/>
            <section className='wizard1-main-content'>
                <div className='wizard1-main-content-container'>
                    <div className='wizard1-line1-container'>
                        <div className='wizard1-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard1-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard1-plain-text-format'>Step 1</div>
                    <div className='wizard1-step-images-container'>
                        <img src={require('../../assets/step_active.png')} alt="step one active"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step two inactive"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step three inactive"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step four inactive"></img>
                        <img src={require('../../assets/step_inactive.png')} alt="step five inactive"></img>
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
