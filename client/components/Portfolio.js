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