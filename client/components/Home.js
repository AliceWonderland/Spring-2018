import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component{
    render() {
        return (
          <main className="landing gradient" data-animate-in="fadein">
              <div className="galaxy">
                  <div className="galaxy-content">
                      <span><img src="assets/img/logo_astro_invis.png" alt="puppynaut" /></span>
                      <h1>Greetings, Earthling</h1>
                      <h3 data-animate-in="intro">Welcome to my portfolio site</h3>
                      <h4 data-animate-in="intro">Choose Your Path</h4>

                      <div data-animate-in="intro">Lorem <a href="#">ipsum</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      <div data-animate-in="intro">blab</div>
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

              <div className="space">
                  <div data-animate-in="intro">Lorem <a href="#">ipsum</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  <div data-animate-in="intro">node projects</div>
                  <div data-animate-in="intro">blab</div>
              </div>
          </main>
        )
    }
}