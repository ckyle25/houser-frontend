import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {wizard5Update,cancel,userLogout,createProperty} from '../../redux/appStateManage.js'
import * as services from '../../services/services.js'
import '../../reset.css'
import './Wizard5.css';

class Wizard5 extends Component {

handleCancel = () => {
    this.props.cancel();
}

handleSubmit = () => {
    let recRent = this.props.wizardPropMonthlyMortgage * 1.25
    let desRent = this.refs.desRent.value
    let obj = {recRent:recRent,desRent:desRent}
    this.props.wizard5Update(obj)
}

handleLogout = () => {
    this.props.userLogout()
}

handleComplete = () => {
    let curProp = this.props
    let recRent = curProp.wizardPropMonthlyMortgage * 1.25
    let desRent = this.refs.desRent.value
    let property = { property_name: curProp.wizardPropTitle,
                     property_description: curProp.wizardPropDesc,
                     address: curProp.wizardPropAddress, 
                     city: curProp.wizardPropCity, 
                     state: curProp.wizardPropState, 
                     zip: curProp.wizardPropZip,
                     url: curProp.wizardPropImgURL, 
                     loan_amount: curProp.wizardPropLoanAmt, 
                     monthly_mortgage: curProp.wizardPropMonthlyMortgage, 
                     desired_rent: desRent,
                     recommended_rent: recRent}
    console.log(property);
    curProp.createProperty(property)
        .then(response => this.props.cancel())
}

    render() {
      return (
        <div>
            <section className='wizard5-navbar'>
                <div className='wizard5-navbar-content-container'>
                    <div className='wizard5-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard5-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard5-header-text' onClick={this.handleLogout}>Logout</Link>
                </div>
            </section>
            <section className='wizard5-main-content'>
                <div className='wizard5-main-content-container'>
                    <div className='wizard5-line1-container'>
                        <div className='wizard5-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard5-cancel-button' onClick={this.handleCancel}>Cancel</Link>
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
                            <div className='wizard5-bold-text-format'>Recommended Rent: ${this.props.wizardPropMonthlyMortgage * 1.25}</div>
                        </div>
                        <div className='wizard5-bold-text-format'>Desired Rent</div>
                        <input className='wizard5-input2' ref='desRent'></input>
                    </div>
                    <div className='wizard5-button-container'>
                        <Link to='/wizard4' className='wizard5-nextstep-button' onClick={this.handleSubmit}>Previous Step</Link>
                        <Link to='/landing' className='wizard5-complete-button' onClick={this.handleComplete}>Complete</Link>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        wizardPropMonthlyMortgage: state.wizardPropMonthlyMortgage,
        wizardPropImgURL: state.wizardPropImgURL,
        wizardPropTitle: state.wizardPropTitle,
        wizardPropDesc: state.wizardPropDesc,
        wizardPropAddress: state.wizardPropAddress,
        wizardPropCity: state.wizardPropCity,
        wizardPropState: state.wizardPropState,
        wizardPropZip: state.wizardPropZip,
        wizardPropLoanAmt: state.wizardPropLoanAmt,
        wizardPropDesiredRent: state.wizardPropDesiredRent,
        wizardRecommendedRent: state.wizardRecommendedRent 
    }
}

export default connect(mapStateToProps, {wizard5Update,cancel,userLogout,createProperty})(Wizard5);