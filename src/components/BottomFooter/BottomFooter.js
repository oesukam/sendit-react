import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BottomFooter.css';
import LogoBrand from '../../images/logo.png'

class BottomFooter extends Component {
  render() { 
    return (
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img className="footer-logo" src={ LogoBrand } alt="Brand logo" />
            </div>
            <div className="col-3">
              <h3 className="footer-title">Site Map</h3>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quote">Get A Quote</Link></li>
              </ul>
            </div>
            <div className="col-3">
              <h3 className="footer-title">Partners</h3>
              <ul className="footer-list">
                <li><a href="#">DHL</a></li>
                <li><a href="#">Postal</a></li>
              </ul>
            </div>
            <div className="col-3">
              <h3 className="footer-title">Social</h3>
              <ul className="footer-list">
                <li>
                  <a href="#"><i className="fa fa-facebook is-white"></i> Facebook</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter is-white"></i> Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomFooter;
