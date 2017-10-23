import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {wizard2Update,cancel,userLogout} from '../../redux/appStateManage.js'
import '../../reset.css'
import './Wizard2.css';

class Wizard2 extends Component {

handleCancel = () => {
    this.props.cancel();
}

handleSubmit = () => {
    let address = this.refs.address.value;
    let city = this.refs.city.value;
    let state = this.refs.state.value;
    let zip = this.refs.zip.value;
    let obj = {address:address,city:city,state:state,zip:zip}
    this.props.wizard2Update(obj);
}

handleLogout = () => {
    this.props.userLogout()
}

    render() {
      return (
        <div>
            <section className='wizard2-navbar'>
                <div className='wizard2-navbar-content-container'>
                    <div className='wizard2-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard2-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard2-header-text' onClick={this.handleLogout}>Logout</Link>
                </div>
            </section>
            <section className='wizard2-main-content'>
                <div className='wizard2-main-content-container'>
                    <div className='wizard2-line1-container'>
                        <div className='wizard2-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard2-cancel-button' onClick={this.handleCancel}>Cancel</Link>
                    </div>
                    <div className='wizard2-plain-text-format'>Step 2</div>
                    <div className='wizard2-step-images-container'>
                        <img src={require('../../assets/step_completed.png')}></img>
                        <img src={require('../../assets/step_active.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                    </div>
                    <div className='wizard2-input-container'>
                        <div className='wizard2-bold-text-format'>Address</div>
                        <input className='wizard2-input1' ref='address'></input>
                        <div className='wizard2-input-line2'>
                            <div className='wizard2-input-line2-city'>
                                <div className='wizard2-bold-text-format'>City</div>
                                <input className='wizard2-input2' ref='city'></input>
                            </div>
                            <div className='wizard2-input-line2-state'>
                                <div className='wizard2-bold-text-format'>State</div>
                                <input className='wizard2-input2' ref='state'></input>
                            </div>
                        </div>
                        <div className='wizard2-input-line3'>
                            <div className='wizard2-input-line3-zip'>
                                <div className='wizard2-bold-text-format'>Zip</div>
                                <input className='wizard2-input2' ref='zip'></input>
                            </div>
                        </div>
                    </div>
                    <div className='wizard2-button-container'>
                        <Link to='/wizard1' className='wizard2-nextstep-button' onClick={this.handleSubmit}>Previous Step</Link>
                        <Link to='/wizard3' className='wizard2-nextstep-button' onClick={this.handleSubmit}>Next Step</Link>
                    </div>
                </div>
            </section>
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {wizard2Update,cancel,userLogout})(Wizard2);