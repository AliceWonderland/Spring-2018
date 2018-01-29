import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { LiftOff } from '../scripts.js';

export default class Home extends Component{
	constructor(){
		super();
		this.state={};
	}

	componentDidMount(){
		LiftOff($,{});
	}

    render() {
        return (
          <main className="gradient landing" data-animate-in="fadein">
              <div className="galaxy">
                  <div className="galaxy-content">
                      <span data-animate-in="intro"><img src="/assets/img/logo_astro_invis.png" alt="puppynaut" /></span>
                      <h1 data-animate-in="intro">Greetings, Earthling</h1>
                      <h3 data-animate-in="intro">Welcome to my portfolio site</h3>
                      <h4 data-animate-in="intro">Choose Your Path</h4>
                  </div>

                  <figure className="shooting-star" style={{top: '8%', transform: 'rotate(151deg)'}}>
                      <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                  </figure>
                  <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                      <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                  </figure>
                  <div className="stars"></div>
                  <div className="stars-lg"></div>
              </div>

              <div className="infinite">
				  <div data-animate-in="intro"><a href="http://alicechuang.com/site/spring2013"><img src="http://www.alicechuang.com/site/spring2010_v3/images_210x118/mpa.png" /></a>
				  	<h6>MPA</h6>
				  	<p>A study in Responsive Design built to work across all platforms + browsers</p>
				  </div>
				  <div data-animate-in="intro"><Link to="about"><img src="http://www.alicechuang.com/site/spring2010_v3/images_210x118/spa.png" /></Link>
					  <h6>SPA</h6>
					  <p>A study in SPAs built on a modern web stack using React (beta)</p></div>
				  <div data-animate-in="intro"><a href="https://github.com/AliceWonderland"><img src="http://www.alicechuang.com/site/spring2010_v3/images_210x118/github.png" /></a>
					  <h6>GIT</h6>
					  <p>My source code can be found on the quintessential respository of the world</p></div>
              </div>
          </main>
        )
    }
}