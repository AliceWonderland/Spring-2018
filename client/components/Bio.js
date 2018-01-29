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

                    <div className="bio-headline">
                        <h2 data-animate-in="intro">About Me</h2>
                        <h3 data-animate-in="intro">There is no Data. There is only XUL.</h3>
                    </div>
                    <div className="bio-intro">
                        <p className="lead">I once dedicated a full year to World of Warcraft.</p>
                        <p>A subject many advised not to include in my description but what I felt was important enough to devote a full paragraph to. What I consider one of the </p>
                        <blockquote>
                            <p>" ... signature artistic, technological, and sociological achievements of our time."</p>
                            <small>Edward Castronova, <cite title="Synthetic Worlds: The Business and Culture of Online Games">Synthetic Worlds: The Business and Culture of Online Games</cite></small>
                        </blockquote>
                        <p className="clearfix"></p>
                        <p>3 subjects that represent what I find most compelling about the Internet phenomenon. Each distinctly represented in exquisite execution and as a whole to form one brilliant living concept. Though a mere computer game, it is an uniquely illuminating portrayal of society today and ultimately Internet culture, technology, and trends. </p>
                        <p>I immersed myself in it and during the height of my WoW pursuits made it to #4 in my class and guild master for an almost all-girl guild with over 50 members. I found a uniquely eloquent allegory to the actual in something very virtual. I personally felt it was a rite of passage for those in my field and, like many Internet concepts, is something you must try to fully understand.</p>

                        <p className="muted"><small>Footnote: Quote taken from MIT PRESS on <a href="http://bit.ly/DsqrL" target="_blank" rel="noopener"><cite title="The Warcraft Civilization: Social Science in a Virtual World">The Warcraft Civilization: Social Science in a Virtual World</cite></a> by William Sims Bainbridge</small></p>

                        <p className="lead">I love to Knit, Sew, and Crochet.</p>
                        <p>So much so that several years ago I decided to start my own blog. As a teenager, I taught myself to knit through books from the public library. Before the Web, Yahoo! Search, and then Google Search even hit the scene. When beepers were the norm and mobile phones were giant bricks that only day traders, drug dealers, and sports agents carried around.</p>
                        <p>In said blog I give away free patterns that I create and find on the Internet. It is a catalog of what I consider the best resources throughout the Web. And of course, lots of fiber crafty fodder. It's called <a href="http://www.omgheart.com/2011/05/13/8-bit-rpgs-amigurumis-nerd-love/" target="_blank" rel="noopener">OMG! Heart</a> as in OMG! heart Knitting, Sewing, and Crochet.</p>

                        <p className="lead">Does it get any Nerdier?</p>
                        <p>Some friends call me "The Bomber". It's short for the nerdbomber. As in "You nerdbomber!" as quoted from DJ Tanner, Full House, circa the 90's. So probably not.</p>
                    </div>

                    {/*<div className="list-section">*/}
                        <div className="list">
                            <h4>Current Faves</h4>
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}
							{/*<a href="WWW" target="_blank" rel="noopener">WWWW</a>*/}


                            <dl>
                                <dt>Shopping</dt><dd><a href="http://www.hm.com/" target="_blank" rel="noopener">H&M</a>, <a href="http://www.ikea.com/" target="_blank" rel="noopener">Ikea</a>, <a href="https://www.uniqlo.com" target="_blank" rel="noopener">Uniqlo</a>, <a href="https://smile.amazon.com/about" target="_blank" rel="noopener">Amazon Smile</a></dd>
                            </dl>
                            <dl>
                                <dt>Movies</dt><dd>Boss Baby, Serena, Vacation</dd>
                            </dl>
                            <dl>
                                <dt>Foods</dt><dd>Soup Dumplings, Seafood Pancake, Hot Pot</dd>
                            </dl>
                            <dl>
                                <dt>Drinks</dt><dd>Apple Soda, Prosecco, Cava, Jameson</dd>
                            </dl>
                            <dl>
                                <dt>Desserts</dt><dd>Vanilla over Chocolate</dd>
                            </dl>
                            <dl>
                                <dt>Music</dt><dd>Rihanna over Beyonce FOREVER (except for Lemonade + Destiny's Child)</dd>
                            </dl>
                            <dl>
                                <dt>Beauty</dt><dd>100% Cruelty Free Beauty, Skin, Health Products</dd>
                            </dl>
                        </div>

                        <div className="list subreddits">
                            <h4>Current Fave SubReddits</h4>
                            <dl>
                                <dt></dt>
                                <dd>
                                    <a href="https://www.reddit.com/r/aww/" target="_blank" rel="noopener">https://www.reddit.com/r/aww/</a>
                                    <a href="https://www.reddit.com/r/GifRecipes/" target="_blank" rel="noopener">https://www.reddit.com/r/GifRecipes/</a>
                                    <a href="https://www.reddit.com/r/interestingasfuck/" target="_blank" rel="noopener">https://www.reddit.com/r/interestingasfuck/</a>
                                    <a href="https://www.reddit.com/r/oldpeoplefacebook/" target="_blank" rel="noopener">https://www.reddit.com/r/oldpeoplefacebook/</a>
                                    <a href="https://www.reddit.com/r/NatureIsFuckingLit/" target="_blank" rel="noopener">https://www.reddit.com/r/NatureIsFuckingLit/</a>
                                    <a href="https://www.reddit.com/r/worldnews/" target="_blank" rel="noopener">https://www.reddit.com/r/worldnews/</a>
                                    <a href="https://www.reddit.com/r/UpliftingNews/" target="_blank" rel="noopener">https://www.reddit.com/r/UpliftingNews/</a>
                                    <a href="https://www.reddit.com/r/Wellthatsucks/" target="_blank" rel="noopener">https://www.reddit.com/r/Wellthatsucks/</a>
                                </dd>
                            </dl>
                        </div>

                        <div className="list">
                            <h4>Current Obsessions</h4>
                            <dl>
                                <dt>Online Everything</dt><dd>online shopping - phlur - mejuri - meal kits - hungry root - hello fresh - purple carrot  - sun basket -
                                glossier -
                                rent the runway -
                                le tote -
                                casper -
                                thredup -
                                hubble -
                                the deluge of engineering job site platforms
                            </dd>
                            </dl>
                            <dl>
                                <dt>Amazon Everything</dt><dd>Smile, Essentials, Basics, Elements, Prime, Restaurants, Now, Pantry, Go, Home Services</dd>
                            </dl>
                        </div>

                        <div className="list">
                            <h4>Current Fave Tech</h4>
                            <dl>
                                <dt>Tech</dt><dd>CSS for everything animated -
                                Javascript Objects, Spread Operator, Promises, ES6 Notation, Arrays -
                                Chrome Dev Tools -
                                Webstorm -
                                Shortcut Keys Forever</dd>
                            </dl>
                            <dl>
                                <dt>Apps</dt>
                                <dd>Google Arts & Culture -
                                    Reddit
                                </dd>
                            </dl>

                            <dl>
                                <dt>Blogs</dt><dd><a href="http://omgheart.com/" target="_blank" rel="noopener">OMG! Heart</a></dd>
                            </dl>
                        </div>

                        <div className="list wide">
                            <h4>Hobbies</h4>
                            <dl>
                                <dt></dt><dd>Home Decorating, Needle Arts, Old-Fashioned Cookery</dd>
                            </dl>
                            <dl>
                                <dt></dt><dd>SubReddits, Doggs, Gif Recipes, Meal Prep Kits, Meal Prep Sundays!</dd>
                            </dl>
                            <dl>
                                <dt></dt><dd>Social Awareness, Social Resposibility</dd>
                            </dl>
                        </div>

                        <div className="list wide">
                            <h4>Social Issues</h4>
                            <dl>
                                <dt></dt><dd>Human, Gender, Reproductive Rights</dd>
                            </dl>
                            <dl>
                                <dt></dt><dd>Healtchare, Gun Control, Voting Rights, <br />
                                Net Neutrality</dd>
                            </dl>
                            <dl>
                                <dt></dt><dd>Animal Welfare, Animal Rights, <br />
                                Animal Adoption Advocate</dd>
                            </dl>
                            <dl>
                                <dt></dt><dd>Global Warming, Climate Change, Recycling</dd>
                            </dl>
                        </div>



						{/*<span data-animate-in="intro">*/}
						{/*<p>*/}

						{/*Amazon Products & Services - Amazon Essentials, Amazon Basics, Amazon Elements*/}
						{/*Amazon Prime, Amazon Restaurants, Amazon Now, Amazon Prime Pantry*/}
						{/*Amazon Self-Checkout Store Amazon Go*/}

						{/*Current Fave Movies - Boss Baby, Serena*/}
						{/*Current Fave Foods - Anything with Arugula*/}
						{/*Current Fave Drinks - Apple Soda, Prosecco, Cava, Jameson*/}
						{/*Current Fave Desserts - Anything eggy, custardy. Vanilla over Chocolate*/}

						{/*Fun Fact - I don't like chocolate!*/}

						{/*justin bieber*/}
						{/*theme song - ???*/}

						{/*Sia - Don't Give Up and other songs featured in commercial*/}

						{/*current obsessions online everything*/}
						{/*online shopping phlur mejuri meal kits hungry root hello fresh purple carrot sun basket*/}
						{/*glossier*/}
						{/*rent the runway*/}
						{/*casper*/}
						{/*thredup*/}
						{/*warby parker*/}
						{/*hubble*/}
						{/*amazon now*/}
						{/*amazon restaurants*/}
						{/*amazon home services*/}
						{/*the derth of engineering career sites online*/}
						{/*h&m*/}
						{/*ikea*/}
						{/*uniqlo*/}

						{/*30sec cooking videos yummly twisted*/}
						{/*google arts and culture*/}


						{/*Current Fave Tech*/}
						{/*Javascript - Objects, Spread Operator, Promises, ES6 Notation, Arrays*/}
						{/*Chrome Dev Tools Javascript Profiler, React Dev Tools, Redux Dev Tools*/}
						{/*Webstorm*/}
						{/*Shortcut Keys Forever*/}

						{/*knitting blog http://omgheart.com/*/}

						{/*The most precious thing anyone can give you is the freedom to spread your wings. In work, in life, in relationships, in tech.*/}
						{/*</p>*/}
						{/*</span>*/}
                    {/*</div>*/}



                    <div className="stars"></div>
                    <div className="stars-lg"></div>
                </section>




            </main>
        )
    }
}