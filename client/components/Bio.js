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


					  <p className="lead">The village my family is from is in southern Taiwan.</p>
					  <p>It used to take a full day to get from the airport to our village and a family friend with a car would have to make the drive up to get us and back. It used to be called Tiger's Tail. Now it's part of Yunlin County and noone recognizes its name. There are now street signs in English, high-speed bullet trains that go from Chiang Kai Shek Airport to our village in about 3 hours, and now you can run across German Tourists deep in the Alishan Mountains. Our uncle's house was one of few that had indoor plumbing. Most abodes were tin-covered stalls. We talk politics and business with our family. American culture. We speak in Taiwanese or Mainan-Hwa, not Mandarin, which is now the national language. Big Uncle, a Taoist Buddhist, would take us up the mountain to his temple to attend religious drumming ceremonies. Where Taiwan's aborigines would be going about their daily lives. It was wild and beautiful. Ancient and ethereal. While in the 80's, Run DMC and Aerosmith were crashing through walls on MTV.
					  </p>
					  <p>Now Taiwan has its second democratically elected and first female president and is the first Asian country to recognize and legalize Gay marriage. It is a quiet leader in technology. A place where both old and new are revered.</p>

					  <p>I come from both these worlds. As does my brother. As do many of those today in New York City. We all have our own customs and cultural values, biases and opinions. But we know tolerance. And we know humanity. What connects us all.</p>

					  <p>From worlds that no longer exists or too obscure to notice, each of these immigrants bring with them a precious insight that no other can. Something any country can benefit from. I look not only to pursue my interests but to make as much of a positive impact as possible throughout my journey.</p>

				  </div>



				  <div className="stars"></div>
				  <div className="stars-lg"></div>
			  </section>




		  </main>
		)
	}
}