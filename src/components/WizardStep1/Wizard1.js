import React, { Component } from 'react';
import {connect} from 'react-redux'
import {wizard1Update,cancel,userLogout} from '../../redux/appStateManage.js'
import {Link} from 'react-router-dom';
import '../../reset.css'
import './Wizard1.css';

class Wizard1 extends Component {

handleSubmit = () => {
    let title = this.refs.title.value
    let description = this.refs.description.value
    let obj = {title:title,description:description}
    this.props.wizard1Update(obj);
}

handleCancel = () => {
    this.props.cancel();
}

handleLogout = () => {
    this.props.userLogout()
}

    render() {
      return (
        <div>
            <section className='wizard1-navbar'>
                <div className='wizard1-navbar-content-container'>
                    <div className='wizard1-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='wizard1-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='wizard1-header-text' onClick={this.handleLogout}>Logout</Link>
                </div>
            </section>
            <section className='wizard1-main-content'>
                <div className='wizard1-main-content-container'>
                    <div className='wizard1-line1-container'>
                        <div className='wizard1-add-listing-text'>Add new listing</div>
                        <Link to='/landing' className='wizard1-cancel-button' onClick={this.handleCancel}>Cancel</Link>
                    </div>
                    <div className='wizard1-plain-text-format'>Step 1</div>
                    <div className='wizard1-step-images-container'>
                        <img src={require('../../assets/step_active.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                        <img src={require('../../assets/step_inactive.png')}></img>
                    </div>
                    <div className='wizard1-input-container'>
                        <div className='wizard1-bold-text-format'>Property Name</div>
                        <input className='wizard1-input1'  ref='title'></input>
                        <div className='wizard1-bold-text-format'>Property Description</div>
                        <input className='wizard1-input2' ref='description'></input>
                    </div>
                    <Link to='/wizard2' className='wizard1-nextstep-button' onClick={this.handleSubmit}>Next Step</Link>
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
  
  export default connect(mapStateToProps, {wizard1Update,cancel,userLogout})(Wizard1);