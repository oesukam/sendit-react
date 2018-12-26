import React, { Component } from 'react';
import profileFemale from '../../../images/profile-female.png';
import profileMale from '../../../images/profile-male.png';
import './Testimonies.css';

class Testimonies extends Component {
  render() { 
    return (
      <div className="container items-center">
        <div className="testimonies-area">
          <div className="testimonies">
            <div className="testimony-block">
              <div className="testimony-content">
                <img className="testimony-avatar" src={profileFemale} alt="Profile female" />
                <h3 className="testimony-content__title">First Name Last name 1</h3>
                <div className="testimony-content__text">
                  <i className="fa fa-quote-left is-white"></i>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aliquam 
                    libero exercitationem, temporibus eligendi optio expedita eius suscipit, 
                    minus, cupiditate animi officia odit ipsam ut nemo cum ducimus error neque?
                  </div>
                  <i className="fa fa-quote-right is-white"></i>
                </div>
                <div className="testimony-stars">
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="testimony-block">
              <div className="testimony-content">
                <img className="testimony-avatar" src={profileMale} />
                <h3 className="testimony-content__title">First Name Last name 2</h3>
                <div className="testimony-content__text">
                  <i className="fa fa-quote-left is-white"></i>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aliquam 
                    libero exercitationem, temporibus eligendi optio expedita eius suscipit, 
                    minus, cupiditate animi officia odit ipsam ut nemo cum ducimus error neque?
                  </div>
                  <i className="fa fa-quote-right is-white"></i>
                </div>
                <div className="testimony-stars">
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                </div>
              </div>
            </div>
            <div className="testimony-block">
              <div className="testimony-content">
                <img className="testimony-avatar" src={ profileFemale } />
                <h3 className="testimony-content__title">First Name Last name 3</h3>
                <div className="testimony-content__text">
                  <i className="fa fa-quote-left is-white"></i>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aliquam 
                    libero exercitationem, temporibus eligendi optio expedita eius suscipit, 
                    minus, cupiditate animi officia odit ipsam ut nemo cum ducimus error neque?
                  </div>
                  <i className="fa fa-quote-right is-white"></i>
                </div>
                <div className="testimony-stars">
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="testimony-block">
              <div className="testimony-content">
                <img className="testimony-avatar" src={ profileFemale } />
                <h3 className="testimony-content__title">First Name Last name 4</h3>
                <div className="testimony-content__text">
                  <i className="fa fa-quote-left is-white"></i>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aliquam 
                    libero exercitationem, temporibus eligendi optio expedita eius suscipit, 
                    minus, cupiditate animi officia odit ipsam ut nemo cum ducimus error neque?
                  </div>
                  <i className="fa fa-quote-right is-white"></i>
                </div>
                <div className="testimony-stars">
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="testimony-block">
              <div className="testimony-content">
                <img className="testimony-avatar" src={ profileFemale } />
                <h3 className="testimony-content__title">First Name Last name 5</h3>
                <div className="testimony-content__text">
                  <i className="fa fa-quote-left is-white"></i>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aliquam 
                    libero exercitationem, temporibus eligendi optio expedita eius suscipit, 
                    minus, cupiditate animi officia odit ipsam ut nemo cum ducimus error neque?
                  </div>
                  <i className="fa fa-quote-right is-white"></i>
                </div>
                <div className="testimony-stars">
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star active"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Testimonies;