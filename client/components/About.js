import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { LiftOff } from '../scripts.js';


export default class About extends Component{
	constructor(){
		super();
		this.state={};
	}

	componentDidMount(){
		LiftOff($,{});
	}

    render() {
        return (
        <main className="gradient about">
            <section className="horizon" data-animate-in="fadein">
                <h3 data-animate-in="intro">Under The Hood</h3>
                <h2 data-animate-in="intro">Buiding the future of software</h2>
                <div className="stars"></div>
                <div className="stars-lg"></div>
            </section>
            <section className="galaxy" data-animate-in="fadein">

                <section data-animate-in="intro">

                <h3>What is it?</h3>
                <p>This site is a Single-Page Web App built in Facebook React.</p>

                <p>In short, this site is a single HTML page that uses React to manipulate the elements within a page to display different content rather than make a request to the server for a new page. Traditional websites may incorporate requests to the server and use AJAX for instant responses to avoid having the user wait for an entire page to reload. It achieved this by making a request based on a user action or browser event, like a click, after the page loads, asynchronously, and then only modifies a portion of the page, or the DOM, to change the content. While all this is achievable without React, it's far more limited.</p>

                <h4>Frameworks</h4>
                <p>Different than a UI CSS Framework like Bootstrap, which is entirely browser-based and primarily for styling, React is a UI Application Framework used to both build web apps and provide an efficient way to manipulate the DOM. It's a templating system based on a modern application design with some very handy features built in.</p>

                <p>Both are for Responsive experiences. As is the jQuery library, a Javascript API used to manipulate the DOM. All provide responsiveness through different aspects. While Bootstrap and jQuery are primarily page-level and entirely browser-based or client-side, React is on the application level. Built using Javascript on the server-side. It requires that page data be represented as objects in code, that when changed, trigger a change to the DOM thus what the user sees. React's <a href="https://reactjs.org/docs/faq-internals.html" target="_blank" rel="noopener">Virtual DOM</a> is akin to the jQuery API and is one those handy built-in features mentioned above.</p>

                <h4>Packages</h4>
                <p>There are other technologies, or packages, required in conjunction with React to provide instantaneous responses as they happen in real-time. But this is a platform for those technologies. A lightweight (ish), entirely Javascript-based platform that serves to merge the divide between client-side and server-side and minimize the challenges that may bring.</p>

                <p>This site also uses Express Server for web routes, Redux for managing the 'state' or data objects, Postgres for the database, SASS for fun, and a few other supporting packages required to develop a React Web App.</p>

                <p>On the DevOps or SysAdmin side, this site runs on a LEMP server on the cloud! A modern form of virtual private server that hosts both my PHP/MySql sites and my Node-based applications. Nginx is used in place of Apache to handle the requests for my traditional sites and as well my Node-based apps.</p>

                <p>It is a study in application tools and technologies for UI engineering but not UI styling.</p>
                </section>





                {/*<p>The time it takes for a user to see a response to their actions is critical. Not only for an enjoyable experience but also to provide more sophisticated customized experiences. Requesting and reloading these pages take precious time and impact that response. It relies on the server, bandwidth, the user's system, and the browser to determine how fast a user can access what they want. All of which severely limits what kind of user experience a web application can provide. Consider users on mobile where data is paid for by usage and speed is throttled. Or streaming an entire movie where content is heavy and updating frame by frame. Consider the Google Search Bar that autocompletes suggestions as you type where inputs are processed and then returned at each keystroke. Consider Facebook itself. Just the notifications. Just the comments. Just the emojis flying by on a live video. The Facebook News Feed page alone is managing hundreds of interactions, responses, display changes at once. Than consider that an infinite number of users could be interacting with that page concurrently. Handling all these reponses, processing, and then redrawing them takes time and resources. Which is how frameworks like Backbone + Underscore, Angular, and React were born. Out of a need to support more sophisticated function and feature-rich web user interfaces within the current limitations of the universe it resides in.</p>*/}







                {/*<p>Values in Engineering</p>*/}



                {/*<p>As a long-time developer I found it hard to grasp the differences. Terminologies used are somewhat mis-leading partly because they were being defined as these new concepts are being introduced. The term API is used in many contexts to reference a broad range of technologies or concepts. As is the term UI Framework.</p>*/}

                {/*<p>As a Front-End Developer, I still don't understand the difference between REST and SOAP. I am accustomed to building out an interface within an existing web application framework. React is one of those frameworks. Instead of PHP and MySQL or JSP and Oracle, I could use React and Express with any supported data source.</p>*/}

                {/*<p>To build something like this in a traditional fashion without a framework like React would require resource intensive calls to the server each time a user interaction or event occured.</p>*/}

                {/*<p>Node.js handles both React for the UI components and Express for the Restful APIs.</p>*/}


                {/*<p>primarily hand-coded with minimal use of 3rd-Party UI libraries like Bootstrap with exception for jQuery for cross-browser compatibility.*/}
                {/*</p>*/}

                <section data-animate-in="intro">

                <h3>Why? Refresh, Reinforce, Re-Up</h3>
                <p>To apply my previous skills in a new environment. Give myself a project where I could both utilize and explore these new technologies while providing some background on me. Also, my personal website needed an update!</p>

                <h4>Study</h4>
                <p>While the MV* design concepts behind building applications and technologies like Angular have existed for quite some time, they are now what's defining modern web development. Fast becoming the standard. I chose Node + React as my entry point because it was both newer than Angular and more popular. The support, documentation, and popularity in the Open Source community all contribute to make it more accessible and far more useful.</p>

                <h4>Practice</h4>
                <p>Apply my core skills in HTML, CSS, and Javascript while extending them to include exploring ES6. A version of Javascript that gives it greater functionality akin to making it more of a legitimate programming language rather than a mere scripting language used only within a web browser.</p>

                <h4>Extend</h4>
                <p>A way to incorporate all the above in a practical fashion to begin connecting how these technologies can truly be harnessed.</p>

                <h4>Explore</h4>
                <p>For more exploration into Responsiveness. An age-old challenge in web development especially UI/Front-End Engineering. What used to be called Dynamic or Highly-Interactive. What now drives modern web engineering.</p>

                <p>The time it takes for a user to see a response to their actions is critical. Not only for an enjoyable experience but also to provide more sophisticated customized experiences. Requesting and reloading these pages take precious time and impact that response. It relies on the server, bandwidth, the user's system, and the browser to determine how fast a user can access what they want. All of which severely limits what kind of experience a web application can provide.</p>

                <p>Consider users on mobile where data is paid for by usage and speed is throttled. Or streaming an entire movie where content is heavy and updating frame by frame. Consider the Google Search Bar that autocompletes suggestions as you type where inputs are processed and then returned at each keystroke. Consider Facebook itself. Just the notifications. Just the comments. Just the emojis flying by on a live video. The Facebook News Feed page alone is managing hundreds of interactions, responses, display changes at once. Then consider that an infinite number of users could be interacting with that page concurrently. Handling all these reponses, processing, and then redrawing them takes time and resources. Which is how frameworks like Backbone + Underscore, Angular, and React were born. Out of a need to support more sophisticated function and feature-rich web user interfaces within the current limitations of the universe it resides in.</p>

                <h4>Drive</h4>
                <p>User Experiences and Interfaces are not only what I find most compelling, personally. But what happen to drive the most notable engineering innovations to date. It is what connects the user to the application, what gives technology context and meaning, relevance. From Backbone to Bootstrap to Angular to GitHub. Companies like Twitter, Google, Facebook, GitHub have made some of the most major contributions to my field of engineering. As did many other aspects of engineering from Cloud Computing to Deep Learning. Whether it be in the Distributed System or in the Algorithm. All are driven by a need to satisfy a user's desires and the search for the next innovation. All boil down to the experience and today that is through responsiveness.</p>

                </section>

                <section data-animate-in="intro">
                    <h3>Puppynaut Universe</h3>

                    <h4>Theme</h4>
                    <p>This website represents both an aesthetic I find beautiful and an allegory for a new frontier. Time, Space, and Dimension are what I felt were a fitting representation.</p>

                    <h4>Time</h4>
                    <p>The eras of the web world that I've grown up in and the future beyond.</p>

                    <h4>Space</h4>
                    <p>The infinite new frontiers to discover and the journey I'm embarking on.</p>

                    <h4>Dimension</h4>
                    <p>The modern web stack and the Progressive Web App as yet another aspect of the kind of engineering I inhabit.</p>

                    <h4>Worlds</h4>
                    <p>The different worlds all of us may inhabit while residing on the same space time continuum.</p>
                    <p>The rainbow a nod to intersectional unity and cross-functional approaches to development. The myriad of technologies that form the current landscape.</p>
                    <p>A nod to the importance of Science, Technology, Medicine.</p>
                    <p>Plus, I love gradients and 2018 is the Year of the Dog. And I love dogs.</p>
                </section>

                <section data-animate-in="intro">
                    <h3>Do I Like It?</h3>
                    <p>Not yet. While being introduced to these technologies in a fullstack engineering program, I was able to begin to use these technologies, get a sense of its usage, find out what's out there, but not a complete understanding of its context. As with most concepts in technology, that takes time working with the environment and experience in real-world situations. But with React especially, it seemed moreso. Less intuitive, more abstracted. Prone to be mis-used. It's easily accessible but not easily mastered. The usage is clear but its efficacy changes based on context and how it's applied. Best practices are hard to nail down as they vary with context. Open Source is its own beast. There are few senior/lead fullstack devs out there with the knowledge and experience to help set those. Partly because things like React are newly mainstream. Partly because things like React are overcomplicated. Partly because there is a pandemic of misinformation authored by enthusiastic yet inexperienced devs. And as always, the terminology is often loosely (and mis-) used and highly based on the context.</p>

                    <p>I do love that this is an entirely new dimension for me to explore. While concepts may not be new, the technologies and approaches are newer and new to me! A brand new world.</p>

                    <p>This site is currently an extremely rough beta. Just presentable enough so that I can convey an current reflection of myself. From an animated logo to transitions, the organization of my components to when/if I should use Redux. It mixes both vanilla React for State Lifting and Redux. Down to the copy content. DO NOT LOOK AT THIS SITE ON YOUR PHONE. It is not built to support all platforms and browsers yet!</p>
                </section>


                {/*<p>Server Setup/Configuration Systems Administration Refresher Nginx vs. Apache*/}
                {/*Cloud Computing Digital Ocean and Heroku</p>*/}

            {/*Front-End*/}
            {/*React*/}
            {/*Flexbox*/}
            {/*Semantic HTML*/}
            {/*JS*/}
            {/*jQuery*/}

            {/*Back-End*/}
            {/*Express Sequelize Postgres*/}

            {/*<p>http://app3.alicechuang.com/app3</p>*/}

            {/*<p>Incorporate SPA development with JS-Based Node stack*/}
                {/*Multi-Page vs Single-Page LAMP to LEMP Php/Mysql to React/PosgresSQL*/}

                {/*What I'm currently working on:*/}
                {/*JS Optimization - JS Auditor*/}
                {/*Webpack Configs*/}
                {/*Deploying*/}

                {/*Redux MVC*/}
                {/*All these take planning. Understanding the app I'm trying to build, Entity relationship diagrams, wireframes, understanding how the user navigates the app. All these things should be somewhat solidified before the state object is defined and the actions are set.*/}

                {/*CS Fundamentals</p>*/}

                {/*<p>NOTABLES*/}
                    {/*Audio Player*/}
                    {/*Video*/}
                    {/*FlexBox*/}
                    {/*SASS*/}
                    {/*Structural Design Patters MVC MVP MVVM?</p>*/}

                {/*<h5>UI + Design</h5>*/}
                {/*<p>*/}
                    {/*CSS Flexbox vs. CSS Grid Layout*/}
                    {/*Theme Unity Rainbow Intersectional*/}

                {/*</p>*/}



                <figure className="shooting-star" style={{top: '8%', transform: 'rotate(151deg)'}}>
                    <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                    <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <div className="stars"></div>
                <div className="stars-lg"></div>
            </section>





            <section className="infinite">
                <h3>Everything You Need to Build This Site</h3>
                <div data-animate-in="intro">
                    <h5>Cloud Server (VPS)</h5>
                    <p>LEMP server hosts both LEMP sites as well as Node apps.</p>
                    <dl>
                        <dt><a href="https://m.do.co/c/ac3f1feffe7a" target="_blank" rel="noopener">Digital Ocean</a></dt><dd>VPS</dd>
                        <dt><a href="https://www.ubuntu.com/download" target="_blank" rel="noopener">Ubuntu</a></dt><dd>OS</dd>
                        <dt><a href="https://www.nginx.com/resources/admin-guide/" target="_blank" rel="noopener">Nginx</a></dt><dd>HTTP Server</dd>
                    </dl>

                    <h5>Admin Tools</h5>
                    <p><a href="http://pm2.keymetrics.io/" target="_blank" rel="noopener">PM2</a> or <a href="https://github.com/foreverjs/forever" target="_blank" rel="noopener">Forever</a></p>
                </div>
                <div data-animate-in="intro">
                    <h5>Application Stack</h5>
                    <p>PERN Stack</p>
                    <dl>
                        <dt><a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node</a></dt><dd>Runtime Env</dd>
                        <dt><a href="https://expressjs.com/" target="_blank" rel="noopener">Express</a></dt><dd>Rest API Server</dd>
                        <dt><a href="https://reactjs.org/" target="_blank" rel="noopener">React</a></dt><dd>UI</dd>
                        <dt><a href="https://github.com/reactjs/react-redux" target="_blank" rel="noopener">React-Redux</a></dt><dd>State Manager</dd>
                        <dt><a href="https://www.postgresql.org/" target="_blank" rel="noopener">Postgres</a></dt><dd>Database</dd>
                        <dt><a href="http://docs.sequelizejs.com/" target="_blank" rel="noopener">Sequelize</a></dt><dd>ORM</dd>
                    </dl>

                    <h5>Build Tools</h5>
                    <dl>
                        <dt><a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a></dt><dd>Pkg Manager</dd>
                        <dt><a href="https://babeljs.io/" target="_blank" rel="noopener">Babel</a></dt><dd>Transpiler</dd>
                        <dt><a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener">Webpack</a></dt><dd>Bundler</dd>
                        <dt><a href="https://nodemon.io/" target="_blank" rel="noopener">Nodemon</a></dt><dd>Watcher</dd>
                    </dl>

                </div>
                <div data-animate-in="intro">
                    <h5>UI + Layout</h5>
                    <p>Flexbox and SASS</p>
                    <dl>
                        <dt><a href="#https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener">HTML5</a></dt><dd>Semantic HTML</dd>
                        <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener">CSS3</a></dt><dd>Gradients + Animation</dd>
                        <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener">CSS FlexBox</a></dt><dd>Responsive Page Layout</dd>
                        <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener">CSS Grid</a></dt><dd>Table and Data Display</dd>
                        <dt><a href="http://sass-lang.com/guide" target="_blank" rel="noopener">SASS</a></dt><dd>CSS Pre-Processor</dd>
                    </dl>

                    <h5>Design Resources</h5>
                    <dl>
                        <dt><a href="https://fonts.google.com/" target="_blank" rel="noopener">Google Fonts</a></dt><dd>&nbsp;</dd>
                        <dt><a href="http://fontawesome.io/" target="_blank" rel="noopener">FontAwesome</a></dt><dd>&nbsp;</dd>
                        <dt><a href="#" target="_blank" rel="noopener">LogoJoy</a></dt><dd>&nbsp;</dd>
                    </dl>

                    <h5>Style Guide</h5>
                    <a href="https://githubuniverse.com/" target="_blank" rel="noopener">GitHub Universe</a>
                </div>
                <div data-animate-in="intro">
                    <h5>Development Tools</h5>
                    <dl className="wide">
                        <dt><a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener">Chrome Dev Tools</a></dt><dd>&nbsp;</dd>
                        <dt><a href="https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution" target="_blank" rel="noopener">Chrome Dev Tools JS Profiler</a></dt><dd>&nbsp;</dd>
                        <dt><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener">Chrome Lighthouse Auditor</a></dt><dd>&nbsp;</dd>
                        <dt><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank" rel="noopener">React Developer Tools </a></dt><dd>&nbsp;</dd>
                        <dt><a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank" rel="noopener">Redux Developer Tools</a></dt><dd>&nbsp;</dd>
                        <dt><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener">Webstorm</a></dt><dd>Editor</dd>
                        <dt><a href="#" target="_blank" rel="noopener">GitHub</a></dt><dd>vcs</dd>
                    </dl>
                </div>
            </section>



            <section className="galaxy" data-animate-in="fadein">
                <h5>Application Stack</h5>
                React <a href="https://reactjs.org/" target="_blank" rel="noopener"></a>
                React-Redux <a href="https://github.com/reactjs/react-redux" target="_blank" rel="noopener"></a>
                Node <a href="https://nodejs.org/en/" target="_blank" rel="noopener"></a>
                Express <a href="https://expressjs.com/" target="_blank" rel="noopener"></a>
                Sequelize <a href="http://docs.sequelizejs.com/" target="_blank" rel="noopener"></a>
                Postgres or MySQL <a href="https://www.postgresql.org/" target="_blank" rel="noopener"></a>

                <h5>Other Resources</h5>
                <p>A full list of all technologies, tools, and resources used to create this site. All are Open Source and free.

                    Node Packages
                    NPM <a href="https://www.npmjs.com/" target="_blank" rel="noopener"></a>
                    Babel <a href="https://babeljs.io/" target="_blank" rel="noopener"></a> Transpiler
                    Webpack <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener"></a>
                    Nodemon <a href="https://nodemon.io/" target="_blank" rel="noopener"></a>
                    HMR <a href="https://webpack.js.org/concepts/hot-module-replacement/"></a>
                    SASS <a href="http://sass-lang.com/" target="_blank" rel="noopener"></a> CSS Compiler

                    Cloud Server (VPS)
                    Digital Ocean <a href="https://www.digitalocean.com/" target="_blank" rel="noopener"></a>
                    Ubuntu <a href="https://www.ubuntu.com/download" target="_blank" rel="noopener"></a>
                    Nginx  <a href="https://www.nginx.com/resources/admin-guide/" target="_blank" rel="noopener"></a>
                    This site is hosted on an Nginx web server using reverse proxy installed on Linux OS. Try DigitalOcean for free using my referreral link <a href="https://m.do.co/c/ac3f1feffe7a" target="_blank" rel="noopener">here</a>.

                    Server Admin Packages
                    PM2 or Forever <a href="http://pm2.keymetrics.io/" target="_blank" rel="noopener"></a>
                    <a href="https://github.com/foreverjs/forever" target="_blank" rel="noopener"></a>

                    Development Tools and Libraries
                    Chrome Dev Tools <a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener"></a>
                    Chrome Dev Tools Audit <a href="#" target="_blank" rel="noopener"></a>
                    Chrome Dev Tools Javascript Profiler <a href="https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution" target="_blank" rel="noopener"></a>
                    React Developer Tools for Chrome <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank" rel="noopener"></a>
                    Webstorm Editor (not free!) <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener"></a>
                    Mac Terminal <a href="#" target="_blank" rel="noopener"></a>
                    GitHub Source Control <a href="#" target="_blank" rel="noopener"></a>
                    https://travis-ci.org/

                    Design Resources
                    Google Fonts <a href="https://fonts.google.com/" target="_blank" rel="noopener"></a>
                    FontAwesome <a href="http://fontawesome.io/" target="_blank" rel="noopener"></a>
                    LogoJoy <a href="#" target="_blank" rel="noopener"></a>
                    FlexBox

                    Tutorials
                    ES6 <a href="http://es6-features.org/" target="_blank" rel="noopener"></a>
                    Digital Ocean Nginx Setup <a href="#" target="_blank" rel="noopener"></a>
                    React-Training - React Router <a href="https://reacttraining.com/react-router/web/guides/philosophy" target="_blank" rel="noopener"></a>
                </p>
                <p>Design and Style Guide</p>
                GitHub Universe

                <p>Launched Spring 2018</p>

                <figure className="shooting-star" style={{top: '8%', transform: 'rotate(151deg)'}}>
                    <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                    <img src="/assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <div className="stars"></div>
                <div className="stars-lg"></div>
            </section>

        </main>
        )
    }
}