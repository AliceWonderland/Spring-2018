import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { LiftOff } from '../scripts.js';

export default class Bio extends Component{
	constructor(props){
		super(props);
		this.state={
			faves:[
                {'Current Faves': 'Old-Fashioned Cookery, SubReddits, Doggs!'},
                {0:1}
            ]
		};
		console.log(this.props.history.location.pathname);

		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount(){
	    LiftOff($,{});
    }

	handleClick(e){
		console.log(e.target);
    }

    render() {
        return (
            <main className="gradient bio">
                <section className="horizon">
                    <h1><span style={{color: 'olive'}}>BIO</span></h1>
                    <span data-animate-in="intro">
                        {/*current faves*/}
                        <dl>
                            <dt>Current Faves</dt><dd>Old-Fashioned Cookery, SubReddits, Doggs!</dd>
                            <dt>Amazon Products & Services</dt><dd>Amazon Essentials, Amazon Basics, Amazon Elements
                        Amazon Prime, Amazon Restaurants, Amazon Now, Amazon Prime Pantry</dd>
                            <dt>Current Fave Movies</dt><dd>Boss Baby, Serena</dd>
                            <dt>Current Fave Foods</dt><dd>Anything with Arugula</dd>
                            <dt>Current Fave Drinks</dt><dd>Apple Soda, Prosecco, Cava, Jameson</dd>
                            <dt>Current Fave Desserts</dt><dd>Anything eggy, custardy. Vanilla over Chocolate</dd>
                            <dt>Music</dt><dd>Sia - Don't Give Up and other songs featured in commercial</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

						{/*current obssession*/}
                        <dl>
                            <dt>online everything</dt><dd>online everything</dd>
                            <dt></dt><dd>online shopping phlur mejuri meal kits hungry root hello fresh purple        carrot sun basket
                                glossier
                                rent the runway
                                casper
                                thredup
                                warby parker
                                hubble
                                amazon now
                                amazon restaurants
                                amazon home services
                                the derth of engineering career sites online</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

                        <dl>
                            <dt>Current Fave Stores</dt><dd>H&M, Ikea, Uniqlo</dd>
                            <dt>Social Issues</dt><dd>Gender, Human, Reproductive Rights</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

                        <dl>
                            <dt>Current Fave Tech</dt><dd>Current Fave Tech
                                Javascript - Objects, Spread Operator, Promises, ES6 Notation, Arrays
                                Chrome Dev Tools Javascript Profiler, React Dev Tools, Redux Dev Tools
                                Webstorm
                                Shortcut Keys Forever</dd>
                        </dl>

                        <dl>
                            <dt>Blogs</dt><dd>http://omgheart.com/</dd>
                        </dl>


                        <p>

                        Amazon Products & Services - Amazon Essentials, Amazon Basics, Amazon Elements
                        Amazon Prime, Amazon Restaurants, Amazon Now, Amazon Prime Pantry

                        Current Fave Movies - Boss Baby, Serena
                        Current Fave Foods - Anything with Arugula
                        Current Fave Drinks - Apple Soda, Prosecco, Cava, Jameson
                        Current Fave Desserts - Anything eggy, custardy. Vanilla over Chocolate

                        Fun Fact - I don't like chocolate!

                        justin bieber
                        theme song - ???

                        Sia - Don't Give Up and other songs featured in commercial

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

                            30sec cooking videos yummly twisted


                        Current Fave Tech
                        Javascript - Objects, Spread Operator, Promises, ES6 Notation, Arrays
                        Chrome Dev Tools Javascript Profiler, React Dev Tools, Redux Dev Tools
                        Webstorm
                        Shortcut Keys Forever

                        knitting blog http://omgheart.com/

                            The most precious thing anyone can give you is the freedom to spread your wings. In work, in life, in relationships, in tech.
                        </p>
                    </span>

                    <div className="stars"></div>
                    <div className="stars-lg"></div>
                </section>

                <div className="galaxy">
                    <div className="galaxy-content">
                        <h1><span style={{color: 'olive'}}>BIO</span></h1>
                        <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                        <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>
                        <span data-animate-in="intro">
                        {/*current faves*/}
                            <dl>
                            <dt>Current Faves</dt><dd>Old-Fashioned Cookery, SubReddits, Doggs!</dd>
                            <dt>Amazon Products & Services</dt><dd>Amazon Essentials, Amazon Basics, Amazon Elements
                        Amazon Prime, Amazon Restaurants, Amazon Now, Amazon Prime Pantry</dd>
                            <dt>Current Fave Movies</dt><dd>Boss Baby, Serena</dd>
                            <dt>Current Fave Foods</dt><dd>Anything with Arugula</dd>
                            <dt>Current Fave Drinks</dt><dd>Apple Soda, Prosecco, Cava, Jameson</dd>
                            <dt>Current Fave Desserts</dt><dd>Anything eggy, custardy. Vanilla over Chocolate</dd>
                            <dt>Music</dt><dd>Sia - Don't Give Up and other songs featured in commercial</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

							{/*current obssession*/}
                            <dl>
                            <dt>online everything</dt><dd>online everything</dd>
                            <dt></dt><dd>online shopping phlur mejuri meal kits hungry root hello fresh purple        carrot sun basket
                                glossier
                                rent the runway
                                casper
                                thredup
                                warby parker
                                hubble
                                amazon now
                                amazon restaurants
                                amazon home services
                                the derth of engineering career sites online</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

                        <dl>
                            <dt>Current Fave Stores</dt><dd>H&M, Ikea, Uniqlo</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

                        <dl>
                            <dt>Current Fave Tech</dt><dd>Current Fave Tech
                                Javascript - Objects, Spread Operator, Promises, ES6 Notation, Arrays
                                Chrome Dev Tools Javascript Profiler, React Dev Tools, Redux Dev Tools
                                Webstorm
                                Shortcut Keys Forever</dd>
                        </dl>

                        <dl>
                            <dt>Blogs</dt><dd>http://omgheart.com/</dd>
                        </dl>




                        Amazon Products & Services - Amazon Essentials, Amazon Basics, Amazon Elements
                        Amazon Prime, Amazon Restaurants, Amazon Now, Amazon Prime Pantry

                        Current Fave Movies - Boss Baby, Serena
                        Current Fave Foods - Anything with Arugula
                        Current Fave Drinks - Apple Soda, Prosecco, Cava, Jameson
                        Current Fave Desserts - Anything eggy, custardy. Vanilla over Chocolate

                        Fun Fact - I don't like chocolate!

                        justin bieber
                        theme song - ???

                        Sia - Don't Give Up and other songs featured in commercial

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


                        Current Fave Tech
                        Javascript - Objects, Spread Operator, Promises, ES6 Notation, Arrays
                        Chrome Dev Tools Javascript Profiler, React Dev Tools, Redux Dev Tools
                        Webstorm
                        Shortcut Keys Forever

                        knitting blog http://omgheart.com/
                    </span>
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

            </main>
        )
    }
}