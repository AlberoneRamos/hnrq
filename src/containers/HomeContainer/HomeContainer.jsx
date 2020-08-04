// @flow
import React from 'react';
import { Icosahedron } from 'components/Icosahedron';
import './HomeContainer.scss';

const HomeContainer = () => (
  <div className="home-container">
    <div>
      <div className="row">
        <div className="col-6 justify-content-center mt-6">
          <h1 className="reveal-text mt-0 mb-3">WORK IT</h1>
          <h1 className="reveal-text mt-0 mb-3">HRDR</h1>
          <h1 className="reveal-text mt-0 mb-3">MAKE IT </h1>
          <h1 className="reveal-text mt-0 mb-3">BTTR.</h1>
        </div>
        <div className="col-6 justify-content-center figure-container">
          <div className="figure"><Icosahedron /></div>
        </div>
      </div>
      <div className="row caption">
        <span>Coding since 2017.</span>
      </div>
    </div>
    <div className="row">
      <div className="col-12  scroll-indicator mb-5">
        <small className="mb-3">Scroll Down</small>
      <div className="mouse-wheel" />
    </div>
    </div>
  </div>
);

export default HomeContainer;