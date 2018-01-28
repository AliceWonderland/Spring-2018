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
                <section className="horizon" data-animate-in="fadein">
                    {/*<h1><span style={{color: 'olive'}}>BIO</span></h1>*/}

                    <p className="lead">I once dedicated a full year to World of Warcraft.</p>
                    <p>A subject many advised not to include in my description but what I felt was important enough to devote a full paragraph to. What I consider one of the </p>
                    <blockquote>
                        <p>" ... signature artistic, technological, and sociological achievements of our time."</p>
                        <small>Edward Castronova, <cite title="Synthetic Worlds: The Business and Culture of Online Games">Synthetic Worlds: The Business and Culture of Online Games</cite></small>
                    </blockquote>
                    <p className="clearfix"></p>
                    <p>3 subjects that represent what I find most compelling about the Internet phenomenon. Each distinctly represented in exquisite execution and as a whole to form one brilliant living concept. Though a mere computer game, it is an uniquely illuminating portrayal of society today and ultimately Internet culture, technology, and trends. </p>
                    <p>I immersed myself in it and during the height of my WoW pursuits made it to #4 in my class and guild master for an almost all-girl guild with over 50 members. I found a uniquely eloquent allegory to the actual in something very virtual. I personally felt it was a rite of passage for those in my field and, like many Internet concepts, is something you must try to fully understand.</p>

                    <p className="muted"><small>Footnote: Quote taken from MIT PRESS on <a href="http://bit.ly/DsqrL" target="_blank"><cite title="The Warcraft Civilization: Social Science in a Virtual World">The Warcraft Civilization: Social Science in a Virtual World</cite></a> by William Sims Bainbridge</small></p>




                        <p className="lead">I love to Knit, Sew, and Crochet.</p>
                        <p>So much so that several years ago I decided to start my own blog. As a teenager, I taught myself to knit through books from the public library. Before the Web, Yahoo! Search, and then Google Search even hit the scene. When beepers were the norm and mobile phones were giant bricks that only day traders, drug dealers, and sports agents carried around.</p>
                        <p>In said blog I give away free patterns that I create and find on the Internet. It is a catalog of what I consider the best resources throughout the Web. And of course, lots of fiber crafty fodder. It's called <a href="http://www.omgheart.com/2011/05/13/8-bit-rpgs-amigurumis-nerd-love/" target="_blank">OMG! Heart</a> as in OMG! heart Knitting, Sewing, and Crochet.</p>

                        <p className="lead">Does it get any Nerdier?</p>
                        <p>Some friends call me "The Bomber". It's short for the nerdbomber. As in "You nerdbomber!" as quoted from DJ Tanner, Full House, circa the 90's. So probably not.</p>



                    <span data-animate-in="intro">
                        {/*current faves*/}
                        <dl>
                            <dt>Current Faves</dt><dd>Old-Fashioned Cookery, SubReddits, Doggs!</dd>
                            <dt>Amazon EVERYTHING</dt><dd>Amazon Essentials, Amazon Basics, Amazon Elements
                        Amazon Prime, Amazon Restaurants, Amazon Now, Amazon Prime Pantry</dd>
                            <dt>Current Fave Movies</dt><dd>Boss Baby, Serena</dd>
                            <dt>Current Fave Foods</dt><dd>Anything with Arugula</dd>
                            <dt>Current Fave Drinks</dt><dd>Apple Soda, Prosecco, Cava, Jameson</dd>
                            <dt>Current Fave Desserts</dt><dd>Anything eggy, custardy. Vanilla over Chocolate</dd>
                            <dt>Music</dt><dd>Sia - Don't Give Up and other songs featured in TV commercials</dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                            <dt></dt><dd></dd>
                        </dl>

						{/*current obssession*/}
                        <dl>
                            <dt>online everything</dt><dd>online everything</dd>
                            <dt></dt><dd>online shopping phlur mejuri meal kits hungry root hello fresh purple carrot sun basket
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
                            <dt>Current Fave Stores</dt><dd>H&M, Ikea, Uniqlo, Amazon</dd>
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
                        Amazon Self-Checkout Store Amazon Go

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
                            google arts and culture


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




            </main>
        )
    }
}