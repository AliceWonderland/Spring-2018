import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { LiftOff } from '../scripts.js';

export default class Portfolio extends Component{
	constructor(props){
		super(props);
		this.state={
			portfolio:[],
			visibilityFilter:'all'
		};

		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount () {
		// console.log('props',this.props.match.params);
		axios.get('/api/portfolio')
		.then(res => res.data)
		.then(portfolio => {
			// not sure how best to manage state
			let agency=[],
				corpo=[],
				indie=[];
			// spread oper not work need to install babel stage-3
			// console.log({...port,agency,corpo});
			console.log(portfolio);

			//setState
			this.setState({portfolio});
			LiftOff($,{});
		});
	}
	
	handleClick(filter,e){
		console.log(e,e.target,filter);
		if(this.state.visibilityFilter===filter){filter='all'}
		this.setState({visibilityFilter:filter});
    }

    render() {
		let port=this.state.portfolio;
		let visibilityFilter=this.state.visibilityFilter;
		let count=0;
		console.log(this.state);
        return (
            <main className="gradient portfolio">
				<section className="horizon" data-animate-in="fadein">
					<h3>My Work By Example</h3>
					<h2>Websites Then and Now</h2>
					<div className="stars"></div>
					<div className="stars-lg"></div>
				</section>
				<section className="galaxy" data-animate-in="fadein">
					<h3>Boop</h3>
					<div className="grid-container">
						<div className="nav">
							<nav>
								<ul>
									<li key="indie" onClick={this.handleClick.bind(this,'indie')} filter="indie">
										<h5>Independent</h5>
										<p>Freelance Development</p>
									</li>
									<li key="corpo" onClick={this.handleClick.bind(this,'corpo')} filter="corpo">
										<h5>Corporate</h5>
										<p>News/Media/Video Games</p>
									</li>
									<li key="agency" onClick={this.handleClick.bind(this,'agency')} filter="agency">
										<h5>Agency</h5>
										<p>Design/Advertising Agency</p>

									</li>
									<li>Filter</li>
								</ul>
							</nav>
						</div>
					</div>
					{
						(visibilityFilter==='corpo' || visibilityFilter==='all') ?
						  <div className="grid-container">
							  <div><h5>2013</h5></div><div className="sub-header"><h5>NBC Universal</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='NBC Universal'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>{listItem.portTitle}</div>]
									  }
									  count++;
									  return <div key={listItem.id}>{listItem.portTitle}</div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(visibilityFilter==='corpo' || visibilityFilter==='all') ?
						  <div className="grid-container">
							  <div><h5>2010</h5></div><div className="sub-header"><h5>Rockstar Games</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Rockstar Games'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>{listItem.portTitle}</div>]
									  }
									  count++;
									  return <div key={listItem.id}>{listItem.portTitle}</div>
								  }
							  })
							  }
						  </div>
						  :
						  <div></div>
					}

					{
						(visibilityFilter==='corpo' || visibilityFilter==='all') ?
						  <div className="grid-container">
							  <div><h5>2004</h5></div><div className="sub-header"><h5>Advance Internet - Conde Nast</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Advance Internet'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>{listItem.portTitle}</div>]
									  }
									  count++;
									  return <div key={listItem.id}>{listItem.portTitle}</div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(visibilityFilter==='agency' || visibilityFilter==='all') ?
						  <div className="grid-container">
							  <div><h5>2000</h5></div><div className="sub-header"><h5>Nuforia - Red Sky Interactive</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Nuforia - Red Sky Interactive'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>{listItem.portTitle}</div>]
									  }
									  count++;
									  return <div key={listItem.id}>{listItem.portTitle}</div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(visibilityFilter==='indie' || visibilityFilter==='all') ?
						  <div className="grid-container">
							  <div><h5>2000</h5></div><div className="sub-header"><h5>Freelance - Independent Work</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Independent'
									|| listItem.portEmployer==='Ideas On Purpose'
									|| listItem.portEmployer==='Bootstrap Software'
									|| listItem.portEmployer==='Principle MCD'
									|| listItem.portEmployer==='ITVR Media'
									|| listItem.portEmployer==='Princeton Information'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>{listItem.portTitle}</div>]
									  }
									  count++;
									  return <div key={listItem.id}>{listItem.portTitle}</div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					<p data-animate-in="intro">
						breakdown phases of career by era challenges lessons learned
						hashbangs MVC Node
					</p>
					<div className="stars"></div>
					<div className="stars-lg"></div>
				</section>
            </main>

        )
    }
}