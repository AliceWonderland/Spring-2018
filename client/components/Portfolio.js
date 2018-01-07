import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component{
    render() {
        return (
          <div className="galaxy landing">
              <div className="galaxy-content">
                  <h1><span style={{color: 'olive'}}>PORT</span></h1>
                  <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                  <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>
                  <span data-animate-in="intro">
                          breakdown phases of career by era challenges lessons learned

                      hashbangs MVC Node

                    </span>
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
        )
    }
}