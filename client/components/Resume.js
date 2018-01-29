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
		LiftOff($,{});
	}

    render() {
        return (
          <main className="gradient resume">
            <div className="galaxy">
                <h1 data-animate-in="intro">Coming Soon</h1>
                <h2 data-animate-in="intro">Resume</h2>
                <span data-animate-in="intro"><img className="puppynaut-img" src="assets/img/logo_astro.png" alt="puppynaut" /></span>


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