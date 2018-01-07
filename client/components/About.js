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
                  Goals Refresh, Reinforce, Re-Up
                  Server Setup/Configuration Systems Administration Refresher Nginx vs. Apache
                  Cloud Computing Digital Ocean and Heroku

                  Incorporate SPA development with JS-Based Node stack
                  Multi-Page vs Single-Page LAMP to LEMP Php/Mysql to React/PosgresSQL

                  JS Optimization - JS Auditor

                  CS Fundamentals

                  NOTABLES
                  Audio Player
                  Video
                  FlexBox
                  SASS

                  Structural Design Patters MVC MVP MVVM?

                  Resources
                  A full list of all technologies, tools, and resources used to create this site. All are Open Source and free.

                  Application Stack
                  React <a href="https://reactjs.org/" target="_blank" rel="noopener"></a>
                  React-Redux <a href="#" target="_blank" rel="noopener"></a>
                  Node <a href="https://nodejs.org/en/" target="_blank" rel="noopener"></a>
                  Express <a href="https://expressjs.com/" target="_blank" rel="noopener"></a>
                  Sequelize <a href="http://docs.sequelizejs.com/" target="_blank" rel="noopener"></a>
                  Postgres MySQL <a href="#" target="_blank" rel="noopener"></a>

                  Node Packages
                  NPM <a href="https://www.npmjs.com/" target="_blank" rel="noopener"></a>
                  Babel <a href="https://babeljs.io/" target="_blank" rel="noopener"></a> Transpiler
                  Webpack <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener"></a>
                  Nodemon <a href="https://nodemon.io/" target="_blank" rel="noopener"></a>
                  HMR <a href="https://webpack.js.org/concepts/hot-module-replacement/"></a>

                  SASS <a href="http://sass-lang.com/" target="_blank" rel="noopener"></a> CSS Compiler

                  Server Admin Packages
                  PM2 or Forever <a href="http://pm2.keymetrics.io/" target="_blank" rel="noopener"></a>
                  <a href="https://github.com/foreverjs/forever" target="_blank" rel="noopener"></a>


                  Development Tools and Libraries
                  Chrome Dev Tools <a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener"></a>
                  Dev Tools Audit <a href="#" target="_blank" rel="noopener"></a>
                  Dev Tools Javascript Profiler <a href="https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution" target="_blank" rel="noopener"></a>
                  React Chrome Dev Tools <a href="#" target="_blank" rel="noopener"></a>

                  Google Fonts <a href="https://fonts.google.com/" target="_blank" rel="noopener"></a>
                  FontAwesome <a href="http://fontawesome.io/" target="_blank" rel="noopener"></a>
                  LogoJoy <a href="#" target="_blank" rel="noopener"></a>

                  Digital Ocean instead of Heroku <a href="https://www.digitalocean.com/" target="_blank" rel="noopener"></a>
                  Ubuntu <a href="https://www.ubuntu.com/download" target="_blank" rel="noopener"></a>
                  Nginx  <a href="https://www.nginx.com/resources/admin-guide/" target="_blank" rel="noopener"></a> This site is hosted on an Nginx web server using reverse proxy installed on Linux OS.

                  Webstorm Editor (not free!) <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener"></a>
                  Mac Terminal <a href="#" target="_blank" rel="noopener"></a>
                  GitHub Source Control <a href="#" target="_blank" rel="noopener"></a>

                  Tutorials
                  ES6 <a href="http://es6-features.org/" target="_blank" rel="noopener"></a>
                  Digital Ocean Nginx Setup <a href="#" target="_blank" rel="noopener"></a>
                  React-Training - React Router <a href="https://reacttraining.com/react-router/web/guides/philosophy" target="_blank" rel="noopener"></a>

                  DO Referral Link
                  <a href="https://m.do.co/c/ac3f1feffe7a" target="_blank" rel="noopener"></a>

                  Design and Media Tools

                  Launched Spring 2018

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