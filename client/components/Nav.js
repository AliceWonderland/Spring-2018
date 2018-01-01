import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
    render() {
        return (
          <header className="site-header">
              <div className="logo"><a href="/"><img src="assets/img/logo_astro.png" alt="puppynaut" /> Puppynaut</a></div>
              <nav className="site-navigation"><a href="/about">About</a> <a href="/bio">Bio</a> <a href="/resume">Resume</a> <a href="/portfolio">Portfolio</a> <a href="/modal">Contact</a> </nav>
              <div className="watch">GitHub</div>

              {/*<nav className="navbar navbar-inverse navbar-fixed-top">*/}
              {/*<div className="container">*/}
              {/*<div className="navbar-header">*/}
              {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">*/}
              {/*<span className="sr-only">Toggle NAV</span>*/}
              {/*<span className="icon-bar"></span>*/}
              {/*<span className="icon-bar"></span>*/}
              {/*<span className="icon-bar"></span>*/}
              {/*</button>*/}
              {/*<a className="navbar-brand" href="#">✨ Margaret Hamilton Academy</a>*/}
              {/*</div>*/}
              {/*<div id="navbar" className="navbar-collapse collapse">*/}
              {/*<ul className="nav navbar-nav">*/}
              {/*<li><Link to="/">Home</Link></li>*/}
              {/*<li><Link to="/campuses">Campuses</Link></li>*/}
              {/*<li><Link to="/students">Students</Link></li>*/}
              {/*<li><Link to="/video">Video</Link></li>*/}
              {/*<li><Link to="/readme">ReadMe</Link></li>*/}
              {/*</ul>*/}
              {/*</div>*/}
              {/*</div>*/}
              {/*</nav>*/}
          </header>
        )
    }
}