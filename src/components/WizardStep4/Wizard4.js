import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {wizard4Update,cancel,userLogout} from '../../redux/appStateManage.js'
import '../../reset.css'
import './Wizard4.css';

class Wizard4 extends Component {

handleCancel = () => {
    this.props.cancel();
}

handleSubmit = () => {
    let loanAmount = this.refs.loanAmount.value
    let monthlyMortgage = this.refs.monthlyMortgage.value
    let obj = {loanAmount:loanAmount,monthlyMortgage:monthlyMortgage}
    this.props.wizard4Update(obj)
}

handleLogout = () => {
    this.props.userLogout()
}

    render() {
      return (
        <div>
            <section className='wizard4-navbar'>
                <div className='wizard4-navbar-content-container'>
                    <div className='wizard4-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard4-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard4-header-text' onClick={this.handleLogout}>Logout</Link>
                </div>
            </section>
            <section className='wizard4-main-content'>
                <div className='wizard4-main-content-container'>
                    <div className='wizard4-line1-container'>
                        <div className='wizard4-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard4-cancel-button' onClick={this.handleCancel}>Cancel</Link>
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
                        <input className='wizard4-input1' ref='loanAmount'></input>
                        <div className='wizard4-bold-text-format'>Monthly Mortgage</div>
                        <input className='wizard4-input2' ref='monthlyMortgage'></input>
                    </div>
                    <div className='wizard4-button-container'>
                        <Link to='/wizard3' className='wizard4-nextstep-button' onClick={this.handleSubmit}>Previous Step</Link>
                        <Link to='/wizard5' className='wizard4-nextstep-button' onClick={this.handleSubmit}>Next Step</Link>
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
        wizardPropImgURL: state.wizardPropImgURL
    }
}

export default connect(mapStateToProps, {wizard4Update,cancel,userLogout})(Wizard4);