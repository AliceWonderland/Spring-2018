import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component{
    render() {
        return (
          <footer className="site-footer">
              <div className="galaxy">
                  <ul>
                      <li>GitHub</li>
                      <li>Twitter</li>
                      <li>Contact</li>
                  </ul>
                  <div className="galaxy-content" data-animate-in="intro">
                      Embed Facebook Like
                  </div>

                  <figure className="shooting-star" style={{top: '8%', transform: 'rotate(151deg)'}}>
                      <img src="assets/img/shooting-star.svg" alt="shooting star" />
                  </figure>
                  <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                      <img src="assets/img/shooting-star.svg" alt="shooting star" />
                  </figure>
                  <div className="stars"></div>
                  <div className="stars-lg"></div>
              </div>
              <div className="footer-bar">
                  <div><small>Chrome xxx and above on Mac</small></div>
                  <div><small>&copy; AliceChuang.com 2001-2017</small></div>
              </div>
          </footer>
        )
    }
}