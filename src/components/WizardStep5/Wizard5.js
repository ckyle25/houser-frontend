import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../../reset.css'
import './Wizard5.css';
import Nav from '../Nav/Nav';

class Wizard5 extends Component {
    render() {
      return (
        <div>
            <Nav/>
            <section className='wizard5-main-content'>
                <div className='wizard5-main-content-container'>
                    <div className='wizard5-line1-container'>
                        <div className='wizard5-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard5-cancel-button'>Cancel</Link>
                    </div>
                    <div className='wizard5-plain-text-format'>Step 5</div>
                    <div className='wizard5-step-images-container'>
                        <img src={require('../../assets/step_completed.png')} alt="step one completed"></img>
                        <img src={require('../../assets/step_completed.png')} alt="step two completed"></img>
                        <img src={require('../../assets/step_completed.png')} alt="step three completed"></img>
                        <img src={require('../../assets/step_completed.png')} alt="step four completed"></img>
                        <img src={require('../../assets/step_active.png')} alt="step five active"></img>
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
