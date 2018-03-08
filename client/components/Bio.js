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
		document.title = 'AliceChuang.com > Spring 2018 > Bio';
	    LiftOff($,{});
    }

	handleClick(e){
		console.log(e.target);
    }

    render() {
        return (
            <main className="gradient bio">
                <section className="horizon">

                    <div className="bio-headline">
                        <h2 data-animate-in="intro">About Me</h2>
                        <h3 data-animate-in="intro">There is no Data. There is only XUL.</h3>
                    </div>
                    <div className="bio-intro">

                        <p className="lead">I grew up in one of the most immigrant-rich, diverse cities in the world.</p>
                        <p>There were no queen bees in my high school. No in or out. Cool or not cool. Rather there were cliques of Greek American kids, Italian American, Korean American, Chinese American, Southeast Asian American, Indian American, and a myriad more obscure ethnicity cliques. Each with their own hierarchy. The Thais and Indonesians tended to be artsy, goth, think The Cure. The Greeks and Italians were the roughest, think Jersey Shore. Koreans tended to be gangsters or snotty. The Indians were typical math nerds. The Chinese, were into their sports cars and customizations, usually attended church. Motley crews of cliques also formed themselves. We grew up in an already wordly world. By default we knew there was a much bigger world out there than our puny little lives. Our parents were ambitious hard-working immigrants taking every opportunity they had to make a better lives for themselves and us. We grew up with this drive and that hard-working ethic. The courage to dream and also proof that if you work hard enough you can make it. In New York. In America.</p>

                        {/*<p className="lead">My grade school classmates were all children of immigrants.</p>*/}
                        {/*<p>From Greece to Armenia. Who brought their exotic ethnic foods to lunch instead of sandwiches. They were from far flung places, second or third world countries. We all had one thing in common, we were first generation kids, our parents were immigrants from Eastern Europe to the Middle East. I remember my classmate Jessica Blotzke's parents who were hair metal enthusiasts drove me to school in their thunderbird with zebra print upholstery, Miranda Busillo's Italian dad was a city bus driver, Linda Kwok's Korean family who made their own homemade kimchi, to my Taiwanese family where church was a community and support network.</p>*/}

                        {/*<p className="lead">My mom was a single parent building her own business.</p>*/}
                        {/*<p>As a real estate broker, her clients themselves were mostly immigrants who would take her to the best hidden ethnic gems of their homeland to eat or gift smuggled cheeses and delicacies straight out of their luggage. I grew up on bagels, gefilte fish, pork chop rice, kebab, kalbi, and couscous. Beef noodle soup and Italian Heros. Gyros and Hot Pot. Each neighborhood was its own pocket of culture, its own mini replica of the old world.</p>*/}


                        <p className="lead">The village my family is from is in southern Taiwan.</p>
                        <p>It used to take a full day to get from the airport to our village and a family friend with a car would have to make the drive up to get us and back. It used to be called Tiger's Tail. Now it's part of Yunlin County and noone recognizes its name. There are now street signs in English, high-speed bullet trains that go from Chiang Kai Shek Airport to our village in about 3 hours, and now you can run across German Tourists deep in the Alishan Mountains. Our uncle's house was one of few that had indoor plumbing. Most abodes were tin-covered stalls. We talk politics and business with our family. American culture. We speak in Taiwanese or Mainan-Hwa, not Mandarin, which is now the national language. Big Uncle, a Taoist Buddhist, would take us up the mountain to his temple to attend religious drumming ceremonies. Where Taiwan's aborigines would be going about their daily lives. It was wild and beautiful. Ancient and ethereal. While in the 80's, Run DMC and Aerosmith were crashing through walls on MTV.
                        </p>
                        <p>Now Taiwan has its second democratically elected and first female president and is the first Asian country to recognize and legalize Gay marriage. It is a quiet leader in technology. A place where both old and new are revered.</p>

                        <p>I come from both these worlds. As does my brother. As do many of those today in New York City. We all have our own customs and cultural values, biases and opinions. But we know tolerance. And we know humanity. What connects us all.</p>

                        <p>From worlds that no longer exists or too obscure to notice, each of these immigrants bring with them a precious insight that no other can. Something any country can benefit from. I look not only to pursue my interests but to make as much of a positive impact as possible throughout my journey.</p>


                        {/*<p className="lead">I live in East Harlem</p>*/}
                        {/*<p>Predominantly Hispanic usually Puerto Rican, Carribean, or Mexican. I get the latest news of Syria and the Middle East from my deli guy who is from Yemen. Across the street is a quaint bed and breakfast run by a Gay couple from the Midwest. My building is filled with creatives, professionals, educators. All within a single block radius.</p>*/}
                    </div>

                    {/*<div className="list-section">*/}

                    <div className="list">
                        <h4>Current Vitals</h4>
                        <dl>
                            <dt>Shopping</dt><dd><a href="http://www.hm.com/" target="_blank" rel="noopener">H&M</a>, <a href="http://www.ikea.com/" target="_blank" rel="noopener">Ikea</a>, <a href="https://www.uniqlo.com" target="_blank" rel="noopener">Uniqlo</a>, <a href="https://smile.amazon.com/about" target="_blank" rel="noopener">Amazon Smile</a>, Anything Online</dd>
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
                            <dt>Music</dt><dd>Rich Brian, Dua Lippa, Rihanna, Bieber</dd>
                        </dl>
                        <dl>
                            <dl>
                                <dt>Beauty</dt><dd>100% Cruelty Free Beauty, Skin, Health Products</dd>
                            </dl>
                        </dl>
                        <dl>
                            <dt>Religions</dt><dd>No thanks.</dd>
                        </dl>
                        <dl>
                            <dt>Style Icons</dt><dd>Amber Heard, Lisa Bonet in a Different World, Lupita Nyongo</dd>
                        </dl>
                        <dl>
                            <dt>Clothing of Choice</dt><dd>Anything Sweatshirt Material</dd>
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
                            <dt>Amazon Everything</dt><dd>Smile, Essentials, Basics, Elements, Prime, Restaurants, Now, Pantry, Video, Go, Home Services</dd>
                        </dl>
						<dl>
							<dt>Other</dt><dd>
								Vanilla over Chocolate<br/>
								Tea over Coffee<br/>
								Beer over Wine<br/>
								Lyft over Uber<br/>
							</dd>
						</dl>
                    </div>

                    <div className="list">
                        <h4>Current Fave Tech</h4>
                        <dl>
                            <dt>Tech</dt><dd><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener">CSS for everything animated</a> <br/>
							<a href="http://es6-features.org/">JS Objects, Spread/Rest, ES6 Notation, Arrays</a> <br/>
							<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">MDN JS Reference</a> <br/>
							<a href="https://developer.chrome.com/devtools">Chrome Dev Tools</a> <br/>
							<a href="https://www.jetbrains.com/webstorm/">Webstorm</a> <br/>
                            Shortcut Keys Forever</dd>
                        </dl>
                        <dl>
                            <dt>Google Everything</dt>
                            <dd>Chrome - Chromecast - Project Fi</dd>
                        </dl>
                        <dl>
                            <dt>Apps</dt>
                            <dd>Google Arts & Culture -
                                Reddit
                            </dd>
                        </dl>
                        <dl>
                            <dt>Tech Contributors</dt>
                            <dd>Google, GitHub, Chrome over Firefox, JS over Python!</dd>
                        </dl>
                    </div>

                    <div className="list wide">
                        <h4>Hobbies</h4>
						<dl>
							<dt>Blogs</dt>
							<dd><a href="http://www.omgheart.com/" target="_blank" rel="noopener">OMG! Heart</a>, <a href="http://omgfoodie.wordpress.com/" target="_blank" rel="noopener">OMG! Foodie</a>
							</dd>
						</dl>
                        <dl>
                            <dt>Offline</dt><dd>Home Decorating, Needle Arts, Old-Fashioned Cookery</dd>
                        </dl>
                        <dl>
                            <dt>Online</dt><dd>SubReddits, Doggs, Gif Recipes, Meal Prep Kits, Meal Prep Sundays!</dd>
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