import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {wizard3Update,cancel,userLogout} from '../../redux/appStateManage.js'
import '../../reset.css'
import './Wizard3.css';

class Wizard3 extends Component {

handleCancel = () => {
    this.props.cancel();
}

handleSubmit = () => {
    let urlString = this.refs.urlString.value
    this.props.wizard3Update(urlString)
}

handleLogout = () => {
    this.props.userLogout()
}

    render() {
      return (
        <div>
            <section className='wizard3-navbar'>
                <div className='wizard3-navbar-content-container'>
                    <div className='wizard3-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard3-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard3-header-text' onClick={this.handleLogout}>Logout</Link>
                </div>
            </section>
            <section className='wizard3-main-content'>
                <div className='wizard3-main-content-container'>
                    <div className='wizard3-line1-container'>
                        <div className='wizard3-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard3-cancel-button' onClick={this.handleCancel}>Cancel</Link>
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
                        <img src={this.props.wizardPropImgURL} className='wizard3-preview-box'></img>
                        <div className='wizard3-bold-text-format'>Image URL</div>
                        <input className='wizard3-input2' ref='urlString' onChange={this.handleSubmit}></input>
                    </div>
                    <div className='wizard3-button-container'>
                        <Link to='/wizard2' className='wizard3-nextstep-button' onClick={this.handleSubmit}>Previous Step</Link>
                        <Link to='/wizard4' className='wizard3-nextstep-button' onClick={this.handleSubmit}>Next Step</Link>
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

export default connect(mapStateToProps, {wizard3Update,cancel,userLogout})(Wizard3);