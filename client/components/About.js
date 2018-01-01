import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component{
    render() {
        return (
          <main className="gradient">
              <div className="galaxy landing">
                  <div className="galaxy-content">
                      <h1>ABOUT 1</h1>
                      <h2>Heading 2</h2>
                      <h3>Heading 3</h3>
                      <h4>Heading 4</h4>
                      <h5>Heading 5</h5>
                      <h6>Heading 6</h6>
                      <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                      <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>
                      <span data-animate-in="intro">Lorem <a href="#">ipsum</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
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

              <div className="horizon" data-animate-in="intro" style={{height: '400px'}}>
                  blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah
                  <div className="stars"></div>
                  <div className="stars-lg"></div>
              </div>

              <div className="space" style={{height: '400px'}}>
                  <div data-animate-in="intro">blab</div>
                  <div data-animate-in="intro">blab</div>
                  <div data-animate-in="intro">blab</div>
              </div>
          </main>
        )
    }
}