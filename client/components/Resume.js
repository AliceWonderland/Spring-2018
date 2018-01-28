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
		LiftOff($,{});
	}

    render() {
        return (
          <main className="gradient">
            <div className="galaxy landing">
                <div className="galaxy-content">
                    <h1><span style={{color: 'olive'}}>RESUME</span></h1>
                    <span data-animate-in="intro"><a href="#">SECTION 1 TEXT</a></span>
                    <span data-animate-in="intro"><img src="assets/img/logo_astro.png" alt="puppynaut" /></span>

                    <p className="lead">I heart where Science, Art, and Culture meet.</p>
                    <p>If only to emerge as a new invention. My science is in Web Technology.</p>
                    <p>My career has been spent pursuing these interests through <strong>Code</strong>. Never purely for coding's sake but for what it can bring, to the real world. And in my case, <strong>Commerce and Industry</strong>.</p>

                    <p>From exploiting browser bugs and bending code for highly interactive (and animated) showcase marketing sites when my career began. <a href="#" className="poplink" rel="popover" data-trigger="hover" data-content="An advanced achievement at that time given pre-Web 2.0 constraints" data-original-title="Pre-Web 2.0">Pre-Web 2.0.</a></p>
                    <p>To mastering the DOM and complete page control for sophisticated <a href="#" className="poplink" rel="popover" data-trigger="hover" data-placement="left" data-content="For highly interactive, non-refreshing pages using AJAX-loaded XML/JSON content" data-original-title="Advanced UX">User Interface experiences</a>.</p>
                    <p>Motion Tweening, Frame Rate Manipulating, and Movie Clip Loading Management for media-rich sites featuring custom built <a href="#" className="poplink" rel="popover" data-trigger="hover" data-placement="top" data-content="Custom-Built and skinned in Flash and ActionScript" data-original-title="High Bandwidth Video">high-bandwidth video players</a> based in Flash and ActionScript. And dynamically driven by XML and/or PHP!</p>
                    <p>Wrangling PHP and MySQL to RSS, XML/XSL/T, and JSON/P for <a href="#" className="poplink" rel="popover" data-trigger="hover" data-placement="left" data-content="Content-heavy and user-managed websites with custom built CMS tools" data-original-title="Dynamic Sites">dynamic data-driven</a> sites.</p>
                    <p>Down to customizing your own mobile app like BrighCove to integrating <a href="#" className="poplink" rel="popover" data-trigger="hover" data-placement="left" data-content="Like building mobile pages to be pulled into a mobile app" data-original-title="Mobile Content">mobile content</a> with 3rd parties like Verve to working with 360 turnkey solutions.</p>

                    <p>To now. The era of Progressive Web Applications. Usually based in a UI Application Framework like React sometimes referred to as Full-Stack Software Engineering. Where these development approaches are now mainstream. Somewhat frightening in their usage and maturity. Regardless of the approach, all these technologies are borne out of a need to support user experiences. Push what an application can do for a user and provide novel user interactions. A focus that I share as a developer.</p>

                    My degree is in managing development projects. However, my interests lie in engineering.

                    Business experience. While I consider this my craft what drives me is the application of these skills. What it can bring to the user experience, the product, the business.

                    My goal as a lead engineer is to provide options and solutions to meet the needs of the product. Always with the User Experience in mind driven by a respect for the Engineering behind it. Always with a comprehensive understanding of the applications we're building. Explore and discover new technologies and tools. Provide proof of concepts to illustrate viability. Set coding conventions. Fix the hard stuff, come up with emergency solutions, gauge status and progress, make some judgement calls. To work with Product, Design, and Back-End to arrive at a feasible plan.

                    As a developer, I'm interested in the technology itself. What it does. What can it do for me. How can we apply this to best meet our needs. And what the UI, Product, Business challenges may be. My goal is to make an effective and responsible contribution. By learning the codebase and development process, adhering to conventions, consideration of boundaries both in roles and coding. By having a good understanding of the deliverables. Staying upfront and transparent about my skills and status.

                    My goal in re-entering development in this new frontier is not to lead but to learn these technologies. To practically apply my skills while I connect the dots, fill in the blanks, and take stock of their usage. Form my own conclusions. So that I can once again wield these tools as effectively as possible.

                    I seek an environment that shares these values. Fosters exploration and discovery. Driven by the User Experience. Loves the innovation. Respects the code. Has the courage to make dreams a reality.

                    By learning best where to apply my skills and strengths and learning the skills and strengths, ideals, and interests of others.

                    My passion is in making the virtual a reality.

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






                        I'm a Web Developer.
I heart where Science, Art, and Culture meet.

If only to emerge as a new invention. My science is in Web Technology.

My career has been spent pursuing these interests through Code. Never purely for coding's sake but for what it can bring, to the real world. And in my case, Commerce and Industry.

From exploiting browser bugs and bending code for highly interactive (and animated) showcase marketing sites when my career began. Pre-Web 2.0.

To mastering the DOM and complete page control for sophisticated User Interface experiences. Or just efficient resource usage for advanced feature and data-rich sites.

Motion Tweening, Frame Rate Manipulating, and Movie Clip Loading Management for media-rich sites featuring custom built high-bandwidth video players based in Flash and ActionScript. And dynamically driven by XML and/or PHP!

Wrangling PHP and MySQL to RSS, XML/XSL/T, and JSON/P for dynamic data-driven sites.

Down to customizing your own mobile app to integrating mobile content with 3rd parties like Verve to working with 360 turnkey solutions.

Hashtags to Cloud Computing
It's common for a Front-End Developer, like myself, to come across a vast array of technologies.

From Facebook to Pinterest, DISQUS to Google Maps; The API or Framework of the day like Prototype, Scriptaculous, and MooTools to jQuery UI and Bootstrap. To whatever tech solutions are currently trending from Hashbangs to HTML5 History and back again to ye olde hashtag for the lowly jumplink.

Coding responsibilities can range from integrating tools and APIs to original script solutions for sliding elements, carousels, complex AJAX forms using standards like HTML, JS, CSS to integrating that code with the back-end using the required server-side scripting languages. Building a site from the ground up to working with existing site structures and legacy code.

It's ever evolving.
I believe staying agile and relevant is an on-going pursuit for any good developer. Yet the goal is not to be a jack of all trades and master of nothing. Nor is it grandmaster of a single technology fast rendering you obsolete and irrelevant.

Success is in acquiring a deep and comprehensive understanding of what's at the core. It begins with, but is not limited to, mastering skills, languages and technologies. And includes the aptitude to master sophisticated Concepts and Ideas. Perspectives and Principles. Fast and effectively. It requires not just an open mind but willingness to take chances in thinking. Courage to think differently. That ultimately culminates in how to apply this to the task at hand - the problem, goal, or context.

10+yrs - HTML-Based Web Application, Front-End, and UI Development
8+yrs - Server-Side Scripting, Database Development, Data Integration, PHP, MySQL, XML, JSON
4+yrs - Flash, Video, Audio, Animation
I spent time pursuing those core areas of development for that professional experience in the technologies, skills, and concepts that make up my overall role. I focused first on HTML-based programming in all flavors of HTML, JS, CSS, achieving highly interactive Web 2.0 features pre-Web 2.0. Then turned my interests to more media-rich pages with Flash, ActionScript, Audio, and Video to bring more animation, high-bandwidth video, and audio to the user experience. Then back to Web 2.0 and now HTML5 and Mobile Web.

Agile, Responsive, Fluid.
In that time I've had the opportunity to apply my expertise under several capacities and industries. As well as expand my role to include high-level business and industry experience. Allowing me to survey the forest beyond the trees, so to speak, rather than get lost in syntax and usage. Giving me the ability to balance slinging code while comprehending the concepts to achieve.

New Media
Interactive
Front-End UI/UX
Entertainment Media Industry - Video Game Publisher
Brand Marketing/Advertising Industry - Design Ad Agencies
News Media Industry - Publication and News Television Agencies
Fashion, Music, Art Industry - Freelance Independent
In essence, I'm a web engineer who has always strived to be agile in my responsiveness and fluid in the application of my learned technologies. As my skills and experience grew, so did my roles and responsibilities, thus my approaches. Ideals now trending on multiple levels in today's tech world. With new and wonderful interpretations of now classic technologies and languages to boot.

So, what can this do for you?
I believe my extensive and unique experience, in combination with my approach and skills, can be applied in a variety of contexts to meet specific business needs.

Through effective communication and written skills
Clear and creative thinking and problem solving skills
Close collaboration
Commitment to success of the goal
Skills and experience are nothing if they cannot be applied. I would love the opportunity to find out how my unique experience can contribute.

See here for a quick rundown of skills and experience. To request a copy of my resume or more information about me, contact me.

True to form.
As a Developer, I seek an atmosphere, not only unafraid, but that relishes the unknown. Intelligently. Embraces, interprets, then makes it a reality. What I believe is true innovation. Where talent is not simply what you know but how to go about comprehending what you do not. And most importantly, the opportunity to keep learning.

While I have been a web engineer for several years I have yet to work in the Technology Industry itself! So am currently seeking an opportunity in said industry for Web and/or Mobile Web platforms with a focus on web engineering for Web/Mobile Web applications.
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