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

				{/*<p>My background is in Front-End Development building multi-page applications with a variety of technologies. Primarily based around PHP and JSP related technologies and a vast arrays of data stores and endpoints.</p>*/}

				{/*<p>This can vary by project and among companies. But in general it involves building UIs that are cross-browser/platform compatible and optimized using the templating engine of choice and data integration using anything from AJAX to PHP. It has also grown to include what is called fullstack engineering. That may require anything from me querying my own data to designing the database itself.</p>*/}

				{/*<p>I am now looking to move from traditional MPA development into more modern application development that usually implies Single Page Applications on a Node-based or similar architecture. While still focusing on UI development. To me this can include anything from building the templates and modules themselves to querying my own data or even designing the database and how each communicate with each other.</p>*/}

				{/*<p>There's an avalanche of stuff out there. All make for a wonderfully diverse idea world. A great way to see how people choose to apply something and how it's executed. But the key is in making it relevant. And relevant to current needs. The industry has gone from severely limited options and non-standardized contraints. To more standardized constraints like browser support for the latest CSS and JS and a deluge of tech options out there. All of which can be combined in a myriad of ways to either make for an effectively designed application or a frankenstein of technical debt. The potential is out there to make the most elegant of applications in both form and function. But the*/}
				{/*</p>*/}


				{/*<p>While I love exploring and prototyping and am always looking for the next best tech solution to fit my needs, my utlimate goal is to be able to make the best strategic decisions and approaches not only at the code-level but at the application architecture level. Within this current incarnation of application engineering. I not only consider how best to code up a template and how the page loads to how to best write the javascript but also what constraints current site and application have.</p>*/}

				{/*<p>I have my own opinions. But always prefer to first learn and understand the current situation. In order to make the best informed decision possible. Which means everything is always up for debate. As long as it is relevant and has clearly defined reasoning. I value transparency and continuous re-assessment. With that being said, I have a deep respect for the technology behind the code but always as a way to provide the best possible product and User Experience in mind to help drive the business.</p>*/}

				{/*<p>Values in Engineering. Respect for the code behind the scenes. Includes collaborating with all groups when necessary to come up with the most feasible and ideal plan. To being transparent about solutions and alternatives and their benefits, drawbacks, and impact on the current codebase, the site, and future expansions.</p>*/}

				{/*<p>I look for these values to align as an ideal. I prefer to establish roots rather than bounce around.*/}
				{/*</p>*/}

				{/*<p>Everything's Up For Debate</p>*/}
				{/*<p>As long as it is relevant and is supported by solid evidence!</p>*/}

				{/*<p>Values in Engineering</p>*/}

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