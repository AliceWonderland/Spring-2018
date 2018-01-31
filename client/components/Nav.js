import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component{
	constructor(props){
		super(props);
		this.state={
			modal:false
		};

		this.contactClick=this.contactClick.bind(this);
		this.handleScroll=this.handleScroll.bind(this);
	}

	componentDidMount () {
		// console.log('props',location.pathname);
		document.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll() {
		console.log('scrolling',this.state.modal);
		if(this.state.modal){
			document.getElementById('contact-modal').style.visibility='hidden';
			this.setState({modal:!this.state.modal});
		}
	}

	contactClick(e){
		console.log('contact', e, e.target, e.value,document.getElementById('contact-modal').innerHTML,this.state.modal);
		if(this.state.modal){
			document.getElementById('contact-modal').style.visibility='hidden';
		}else{
			document.getElementById('contact-modal').style.visibility='visible';
		}

		this.setState({modal:!this.state.modal});

		// if modal and click anywhere on page toggle off
	}

    render() {
	    let page=location.pathname;
		console.log('BLOBLOB',page,page.slice(0,page.indexOf('/', 1)));
        return (
          <header className="site-header">
              <div className="logo"><Link to="/"><img src="/assets/img/logo_astro.png" alt="puppynaut" /> Puppynaut</Link></div>
              <nav className="site-navigation">
                  <Link className={(page==='/about' ? 'is-active' : '')} to="/about">About</Link>
                  <Link className={(page==='/bio' ? 'is-active' : '')} to="/bio">Bio</Link>
                  <Link className={(page==='/resume' ? 'is-active' : '')} to="/resume">Resume</Link>
                  <Link className={(page.indexOf('/portfolio') > -1 ? 'is-active' : '')} to="/portfolio">Portfolio</Link>
                  <Link className={(page==='/modal' ? 'is-active' : '')} to="#"  onClick={this.contactClick}>Contact</Link>
              </nav>
              <div className="watch"><a href="https://github.com/AliceWonderland" target="_blank" rel="noopener"><i className="fa fa-github fa-2" aria-hidden="true"></i></a></div>

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