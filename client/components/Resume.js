import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Resume extends Component{
    render() {
        return (
          <main className="gradient">
            <div className="galaxy landing">
                <div className="galaxy-content">
                    <h1><span style={{color: 'olive'}}>RESUME</span></h1>
                    <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                    <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>
                    <span data-animate-in="intro">
                        Intro
                        Breakdown phases of career by
                        era
                        challenges
                        lessons learned
                        type of industry culture company size

                        3rd party integration
                        dynamic html cross browser solutions animations
                        flash actionscript audio/video web 2.0
                        node stack

                        Years working and technologies
                        Achievements

                        Business experience. While I consider this my craft what drives me is the application. What it can bring to the user experience the product the business.
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
          </main>
        )
    }
}