import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopHeader.css';
import brandImage from '../../images/logo.png';

class TopHeader extends Component {
  render() {
    return (
      <div className="top-nav">
        <div className="top-nav__header">
          <div className="container">
            <div className="col-9 align-center">
              <ul className="plain-list">
                <li><a href="#"><i className="fa fa-phone"></i> (+250)-000-000-000</a></li>
                <li><a href="#"><i className="fa fa-envelope"></i> info@sendit.com</a></li>
              </ul>
            </div>
            <div className="col-3 content-end">
              <ul className="plain-list">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
              </ul>  
            </div>
          </div>
        </div>
        <div className="top-nav__content">
          <div className="container">
            <div className="col-3">
              <div className="brand">
                <img className="brand__image" src={brandImage} alt="Brand logo"/>
              </div>
            </div>
            <div className="col-9 content-end items-center">
              <div className="toggle-menu">
                <div className="hamburger"></div>
              </div>
              <nav id="menu-nav" className="nav">
                <ul>
                  <li className="nav-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/create_parcel">
                      Add parcel
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a path="/my_parcels">
                      My Parcels
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile/:userId">
                      <i className="fa fa-user mr-5"></i> My Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="logout">
                      <i className="fa fa-sign-out mr-5"></i> Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopHeader;
