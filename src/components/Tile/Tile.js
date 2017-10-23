import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteProperty} from '../../redux/appStateManage.js'
import * as services from '../../services/services.js'
import '../../assets/delete_icon.png';
import '../../reset.css'
import './Tile.css';

class Tile extends Component {

handleDelete = () => {
  console.log(this.props.propPropertyID)
  let propertyID = this.props.propPropertyID
  this.props.deleteProperty(propertyID)
    .then(window.location.reload())
}

    render() {
      return (
        <div className='tile-container'>
            <div className='tile-left-container'>
                <img src={this.props.imgText}></img>
                <div className='tile-description-container'>
                  <div className='tile-bold-text'>{this.props.propTitle}</div><br></br>
                  {this.props.propDesc}
                </div>
            </div>
            <div className='tile-right-container'>
              <div className='tile-dividing-line'></div>
              <div className='tile-property-info'>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>Loan: </div>
                  <div> ${this.props.propLoanAmt}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>Monthly Mortgage: </div>
                  <div> ${this.props.propMonthlyMortgage}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>Recommended Rent: </div>
                  <div> ${this.props.propRecommendedRent}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>Desired Rent: </div>
                  <div> ${this.props.propDesiredRent}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>Address: </div>
                  <div>{this.props.propAddress}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>City: </div>
                  <div>{this.props.propCity}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>State: </div>
                  <div>{this.props.propState}</div>
                </div>
                <div className='tile-property-line-item'>
                  <div className='tile-bold-text'>Zip: </div>
                  <div>{this.props.propZip}</div>
                </div>
              </div>
              <img src={require('../../assets/delete_icon.png')} onClick={this.handleDelete}></img>
            </div>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps, {deleteProperty})(Tile);