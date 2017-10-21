import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLogout} from '../../redux/appStateManage.js'
import '../../reset.css'
import './Landing.css';

class Landing extends Component {

handleLogout = () => {
    this.props.userLogout()
}

    render() {
      return (
        <div>
            <section className='landing-navbar'>
                <div className='landing-navbar-content-container'>
                    <div className='landing-header-container'>
                        <img src={require('../../assets/header_logo.png')}></img>
                        <div className='landing-header-text'>Houser Dashboard</div>
                    </div>
                    <Link to='/' className='landing-header-text' onClick={this.handleLogout}>Logout</Link>
                </div>
            </section>
            <section className='landing-main-content'>
                <div className='landing-main-content-container'>
                    <div className='landing-line1-container'>
                        <Link to='/wizard1' className='landing-new-property-button'>Add new property</Link>
                    </div>
                    <div className='landing-line2-container'>
                        <div className='landing-plain-text-format'>List properties with "desired rent" greater than: $</div>
                        <input className='landing-price-input'></input>
                        <div className='landing-filter-button'>Filter</div>
                        <div className='landing-reset-button'>Reset</div>
                    </div>
                    <div className='landing-step-images-container'>
                        
                    </div>
                    <div className='landing-input-container'>
                        <div className='landing-house-listings-text-format'>Home Listings</div>
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
        homeRouting: state.homeRouting,
        currentProperties: state.currentProperties
    }
}

  export default connect(mapStateToProps, {userLogout})(Landing);