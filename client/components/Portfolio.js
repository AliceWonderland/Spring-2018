import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Portfolio extends Component{
	constructor(){
		super();
		this.state={
			portfolio:[]
		};

		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount () {
		axios.get('/api/portfolio')
		.then(res => res.data)
		.then(portfolio => this.setState({ portfolio }));
	}
	
	handleClick(e){
		console.log(e.target);
    }

    render() {
	    console.log(this.state);
        return (
            <main className="gradient portfolio">
				<section className="horizon" data-animate-in="fadein">
					<h3>My Work By Example</h3>
					<h2>Websites Then and Now</h2>
					<div className="stars"></div>
					<div className="stars-lg"></div>
				</section>
				<section className="galaxy" data-animate-in="fadein">
					<h3>Boop</h3>
					<div className="grid-container">
						<div className="nav">
							<nav>
								<ul>
									<li>
										<h5>Independent</h5>
										<p>Freelance Development</p>
									</li>
									<li>
										<h5>Corporate</h5>
										<p>News/Media/Video Games</p>
									</li>
									<li>
										<h5>Agency</h5>
										<p>Design/Advertising Agency</p>

									</li>
									<li>Filter</li>
								</ul>
							</nav>
						</div>
					</div>
					<div className="grid-container">
						<div><h5>2014</h5></div><div className="sub-header"><h5>sub-header</h5></div>
						<div>p</div><div>p</div><div>p</div><div>p</div>
						<div>p</div><div>p</div><div>p</div>
					</div>
					<div className="grid-container">
						<div><h5>2008</h5></div><div className="sub-header"><h5>sub-header</h5></div>
						<div>p</div><div>p</div><div>p</div>
						<div>p</div><div>p</div><div>p</div><div>p</div>
						<div>p</div><div>p</div><div>p</div>
					</div>
					<span data-animate-in="intro">
						breakdown phases of career by era challenges lessons learned
						hashbangs MVC Node
					</span>
					<div className="stars"></div>
					<div className="stars-lg"></div>
				</section>
            </main>

        )
    }
}