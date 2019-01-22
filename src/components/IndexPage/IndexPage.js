import React, { Component } from 'react';
import './IndexPage.css';

class IndexPage extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <div className="intro-area">
          <div className="container">
            <div className="row">
              <div className="col-8 content-center items-center is-column">
                <h3 className="intro-area__title">SendIT</h3>
                <p className="intro-area__text">
                  We deliver all size of parcels accros the whole Rwanda and
                  keep you updated on the location of your parcel.
                </p>
              </div>
              <div className="col-4">
                <div className="country-map"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default IndexPage;