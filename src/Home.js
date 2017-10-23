import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {userLogin,getProperties} from './redux/appStateManage.js'
import './reset.css'
import './Home.css';
import './assets/auth_logo.png'

class Home extends Component {

handleLogin = () => {
    let username = this.refs.username.value
    let password = this.refs.password.value
    let obj = {username:username, password:password}
    this.props.userLogin(obj)
        .then(response => {
            let userid = response.value
            this.props.getProperties()
        })
}

    render() {
      return (
        <div className='home-view-container'>
            <div className='home-main-content-container'>
                <img src={require('./assets/auth_logo.png')}></img>
                <div className='home-input-container'>
                    <div className='home-input-component'>
                        <div className='home-input-text-styling'>Username</div>
                        <input ref='username'></input>
                    </div>
                    <div className='home-input-component'>
                        <div className='home-input-text-styling'>Password</div>
                        <input ref='password'></input>
                    </div>
                </div> 
                <div className='home-button-container'>
                    <Link to={this.props.homeRouting} className='login-button' onClick={this.handleLogin}>Login</Link>
                    {/* <div className='login-button' onClick={this.handleLogin}>Login</div> */}
                    <Link to='/landing' className='register-button'>Register</Link>
                </div>   
            </div>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
      return {
          currentUser: state.currentUser,
          homeRouting: state.homeRouting,
          currentProperties: state.currentProperties
      }
  }
  
  export default connect(mapStateToProps, {userLogin,getProperties})(Home);