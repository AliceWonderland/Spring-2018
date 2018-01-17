import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component{
    render() {
        return (
        <main className="gradient about">
            <section className="horizon" data-animate-in="fadein">
                <h3>Under The Hood</h3>
                <h2>Buiding the future of software</h2>
                <div className="stars"></div>
                <div className="stars-lg"></div>
            </section>
            <section className="galaxy" data-animate-in="fadein">
                <h5>What is it?</h5>
                <p>This site is a Single-Page web app built in Facebook React.</p>


                <p>A popular JS-based UI framework for building highly-interactive websites! A great example of a highly dynamic website would be Facebook itself. The UI changes are based on both the primary user's interaction as well as an aggregate of other users' interactions. On a real-time, almost instant, basis. Consider how your Facebook News Feed updates with articles, each article with reactions and comments, each comment with content and so on. Consider how Facebook Notifications update as other users are responding to your posts, comments, and reactions. All in real-time. To achieve management and display of this complex network of interactions, developers needed a different approach to accommodate these needs.</p>

                <p>Enter frameworks like Backbone + Underscore, Angular, React, Vue.</p>

                <p>Different than UI frameworks like Bootstrap which deal only in manipulation of the UI display through CSS styles and client-side Javascript, React is a framework for manipulating page content much like a templating system on the server-side. While React and Bootstrap are not interchangeable, they have a place in your application structure. Depending on how it's structured!</p>

                <p>As a long-time developer I found it hard to grasp the differences. Terminologies used are somewhat mis-leading partly because they were being defined as these new concepts are being introduced. The term API is used in many contexts to reference a broad range of technologies or concepts. As is the term UI Framework.</p>

                <p>As a Front-End Developer, I still don't understand the difference between REST and SOAP. I am accustomed to building out an interface within an existing web application framework. React is one of those frameworks. Instead of PHP and MySQL or JSP and Oracle, I could use React and Express with any supported data source.</p>

                <p>To build something like this in a traditional fashion without a framework like React would require resource intensive calls to the server each time a user interaction or event occured.</p>

                <p>Node.js handles both React for the UI components and Express for the Restful APIs.</p>


                <p>primarily hand-coded with minimal use of 3rd-Party UI libraries like Bootstrap with exception for jQuery for cross-browser compatibility.
                </p>

                <h5>Refresh, Reinforce, Re-Up</h5>
                <p>My goal in building this site was to give myself a project where I could apply all my previous UI skills implementing HTML/CSS while tying in the new skills I just learned using React to build a new site

                Server Setup/Configuration Systems Administration Refresher Nginx vs. Apache
                Cloud Computing Digital Ocean and Heroku</p>

                  Front-End
                  React
                  Flexbox
                  Semantic HTML
                  JS
                  jQuery

                  Back-End
                  Express Sequelize Postgres

                  <p>http://app3.alicechuang.com/app3</p>

                  <p>Incorporate SPA development with JS-Based Node stack
                  Multi-Page vs Single-Page LAMP to LEMP Php/Mysql to React/PosgresSQL

                      What I'm currently working on:
                  JS Optimization - JS Auditor
                      Webpack Configs
                      Deploying

                  Redux MVC
                      All these take planning. Understanding the app I'm trying to build, Entity relationship diagrams, wireframes, understanding how the user navigates the app. All these things should be somewhat solidified before the state object is defined and the actions are set.

                  CS Fundamentals</p>

                  <p>NOTABLES
                  Audio Player
                  Video
                  FlexBox
                  SASS
                  Structural Design Patters MVC MVP MVVM?</p>

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
                    <img src="assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                    <img src="assets/img/shooting-star.svg" alt="shooting star" />
                </figure>
                <div className="stars"></div>
                <div className="stars-lg"></div>
            </section>

            <section className="infinite">
                <h3>Everything You Need to Build This Site</h3>
                <div data-animate-in="intro">
                    <h5>Cloud Server (VPS)</h5>
                    <p>This site is hosted on a LEMP server to host my LEMP sites as well as my Node apps.
                        Try DigitalOcean for free using my referreral link <a href="https://m.do.co/c/ac3f1feffe7a" target="_blank" rel="noopener">here</a>.</p>
                    <dl>
                        <dt><a href="https://m.do.co/c/ac3f1feffe7a" target="_blank" rel="noopener">Digital Ocean</a></dt><dd>VPS</dd>
                        <dt><a href="https://www.ubuntu.com/download" target="_blank" rel="noopener">Ubuntu</a></dt><dd>OS</dd>
                        <dt><a href="https://www.nginx.com/resources/admin-guide/" target="_blank" rel="noopener">Nginx</a></dt><dd>HTTP Server</dd>
                    </dl>

                    <h5>Server Admin Packages</h5>
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

                    <h5>Supporting Packages</h5>
                    <dl>
                        <dt><a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a></dt><dd>Package Manager</dd>
                        <dt><a href="https://babeljs.io/" target="_blank" rel="noopener">Babel</a></dt><dd>Transpiler</dd>
                        <dt><a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener">Webpack</a></dt><dd>Bundler</dd>
                        <dt><a href="https://nodemon.io/" target="_blank" rel="noopener">Nodemon</a></dt><dd>Watcher</dd>
                    </dl>

                </div>
                <div data-animate-in="intro">
                    <h5>UI</h5>
                    <dl>
                        <dt><a href="#https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener">HTML5+</a></dt><dd>Semantic HTML</dd>
                        <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3" target="_blank" rel="noopener">CSS3</a></dt><dd>Gradients + Animation</dd>
                        <dt><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener">FlexBox</a></dt><dd>Responsive</dd>
                        <dt><a href="http://sass-lang.com/guide" target="_blank" rel="noopener">SASS</a></dt><dd>CSS Pre-Processor</dd>
                    </dl>

                    <h5>Design Resources</h5>
                    <dl>
                        <dt><a href="https://fonts.google.com/" target="_blank" rel="noopener">Google Fonts</a></dt><dd>.</dd>
                        <dt><a href="http://fontawesome.io/" target="_blank" rel="noopener">FontAwesome</a></dt><dd>.</dd>
                        <dt><a href="#" target="_blank" rel="noopener">LogoJoy</a></dt><dd>.</dd>
                    </dl>

                    <h5>Style Guide</h5>
                    <a href="https://githubuniverse.com/" target="_blank" rel="noopener">GitHub Universe</a>
                </div>
                <div data-animate-in="intro">
                    <h5>Development Tools</h5>
                    <dl className="wide">
                        <dt><a href="https://developers.google.com/web/tools/chrome-devtools/" target="_blank" rel="noopener">Chrome Dev Tools</a></dt><dd>.</dd>
                        <dt><a href="https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution" target="_blank" rel="noopener">Chrome Dev Tools JS Profiler</a></dt><dd>.</dd>
                        <dt><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener">Chrome Lighthouse Auditor</a></dt><dd>.</dd>
                        <dt><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank" rel="noopener">React Developer Tools </a></dt><dd>.</dd>
                        <dt><a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank" rel="noopener">Redux Developer Tools</a></dt><dd>.</dd>
                        <dt><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener">Webstorm</a></dt><dd>Editor</dd>
                        <dt><a href="#" target="_blank" rel="noopener">GitHub</a></dt><dd>vcs</dd>
                    </dl>
                </div>
            </section>
        </main>
        )
    }
}