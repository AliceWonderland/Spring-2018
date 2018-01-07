import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Bio extends Component{
    render() {
        return (
            <div className="galaxy landing">
                <div className="galaxy-content">
                    <h1><span style={{color: 'olive'}}>BIO</span></h1>
                    <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                    <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>
                    <span data-animate-in="intro">
                        current faves
                        cooking
                        subreddits
                        dogs

                        justin bieber
                        theme song - ???

                        current obsessions online everything
                        online shopping phlur mejuri meal kits hungry root hello fresh purple carrot sun basket
                        glossier
                        rent the runway
                        casper
                        thredup
                        warby parker
                        hubble
                        amazon now
                        amazon restaurants
                        amazon home services
                        the derth of engineering career sites online
                        h&m
                        ikea
                        uniqlo

                        knitting blog http://omgheart.com/
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