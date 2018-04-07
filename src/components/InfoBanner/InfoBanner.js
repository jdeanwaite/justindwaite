import React, { Component } from 'react';
import './InfoBanner.scss';

export default class InfoBanner extends Component {
  render() {
    return (
      <div id="info-banner">
        <div className="container-fluid">
          <div className="banner-contents">
            <p>Available for hire. Let's talk!</p>
          </div>
        </div>
      </div>
    );
  }
}
