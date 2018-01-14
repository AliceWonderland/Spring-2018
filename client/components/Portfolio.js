import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component{
    render() {
        return (
            <main className="gradient">
                <div className="horizon" data-animate-in="fadein">
                    <div className="horizon-content">
                        <h1><span style={{color: 'olive'}}>PORT</span></h1>
                        <div>
                            <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                            <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>
                            <span data-animate-in="intro">
                            breakdown phases of career by era challenges lessons learned

                            hashbangs MVC Node

                            </span>
                        </div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className="stars"></div>
                    <div className="stars-lg"></div>
                </div>
            </main>

        )
    }
}