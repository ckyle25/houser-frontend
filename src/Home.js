import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './reset.css'
import './Home.css';
import './assets/auth_logo.png'

class Home extends Component {
    render() {
      return (
        <div className='home-view-container'>
            <div className='home-main-content-container'>
                <img src={require('./assets/auth_logo.png')}></img>
                <div className='home-input-container'>
                    <div className='home-input-component'>
                        <div className='home-input-text-styling'>Username</div>
                        <input></input>
                    </div>
                    <div className='home-input-component'>
                        <div className='home-input-text-styling'>Password</div>
                        <input></input>
                    </div>
                </div> 
                <div className='home-button-container'>
                    <Link to='/landing' className='login-button'>Login</Link>
                    <Link to='/landing' className='register-button'>Register</Link>
                </div>   
            </div>
        </div>
      );
    }
  }
  
  export default Home;