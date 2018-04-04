import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { LiftOff } from '../scripts.js';

export default class Resume extends Component{
	constructor(){
		super();
		this.state={};
	}

	componentDidMount(){
		document.title = 'AliceChuang.com > Spring 2018 > Resume';
		LiftOff($,{});
	}

    render() {
        return (
          <main className="gradient resume">
            <div className="galaxy">
                <h2 data-animate-in="intro">Coming Soon</h2>

                <span data-animate-in="intro"><img className="puppynaut-img" src="assets/img/logo_astro.png" alt="puppynaut" /></span>
				<p data-animate-in="intro" className="lead">I'm a Web Engineer.</p>
				<p data-animate-in="intro">I heart where Science, Art, and Culture meet.</p>

				<p data-animate-in="intro" className="lead">My specialty is in building UI.</p>
				<p data-animate-in="intro">My body of work spans from 2000 until today.</p>

				<p data-animate-in="intro">Check out my <a href="http://node.alicechuang.com/portfolio"><b>Portfolio</b></a> page for a full list of my work.</p>

				<p data-animate-in="intro">See my <a href="https://github.com/AliceWonderland" target="_blank" rel="noopener"><b>Github</b></a> for latest <a href="http://node.alicechuang.com/portfolio/node"><b>Node Projects</b></a></p>

				<p data-animate-in="intro">See here for my full <a href="http://alicechuang.com/site/spring2013/resume.html" target="_blank" rel="noopener"><b>Resume</b></a></p>

                <figure className="shooting-star" style={{top: '8%', transform: 'rotate(151deg)'}}>
                    <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                    <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <div className="stars"></div>
                <div className="stars-lg"></div>
            </div>
          </main>
        )
    }
}