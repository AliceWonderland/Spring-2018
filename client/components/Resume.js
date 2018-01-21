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

                        My degree is in managing development projects. However, my interests lie in engineering.

                        Business experience. While I consider this my craft what drives me is the application of these skills. What it can bring to the user experience the product the business.

                        My goal as a lead engineer is to provide options and solutions to meet the needs of the product. Always with the User Experience in mind driven by a respect for the Engineering behind it.

                        My goal in re-entering development is to provide these option in a modern development environment as way to both delve into the current technologies and find ways to apply my skills in this environment.

                        As a developer, I'm interested in technology itself. What it does. What can it do for me. How can we apply this to best meet our needs. And what the UI, Product, Business challenges may be.

                        My goal as a team member is to make an effective and meaningful contribution by learning best where to apply my skills and strengths and learning the skills and strengths, ideals and interests of others.

                        My passion is in making the virtual a reality.
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