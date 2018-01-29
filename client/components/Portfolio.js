import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { LiftOff } from '../scripts.js';
import PortDesc from './PortDesc'

export default class Portfolio extends Component{
	constructor(props){
		super(props);
		this.state={
			portfolio:[],
			visibilityFilter:'all',
			category:''
		};

		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount () {
		console.log('props',this.props.match.params, this.props.match, this.props.match.url,this.props.match.params.cat);
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

			this.setState({portfolio});

			if(this.props.match.params.cat){
				this.setState({category:this.props.match.params.cat});
			}else{
				this.setState({category:'all'});
			}

			LiftOff($,{});
		});
	}
	
	handleClick(filter,e){
		console.log(e,e.target,filter);

		// this.setState({visibilityFilter:filter});
		let path='/portfolio/'+filter;
		this.props.history.push(path);
		if(this.state.category===filter){filter='all'}
		this.setState({category:filter});
    }

    render() {
		let port=this.state.portfolio;
		let visibilityFilter=this.state.visibilityFilter;
		let count=0;
		let category=this.state.category;
		console.log(this.state);
        return (
            <main className="gradient portfolio">
				<section className="horizon" data-animate-in="fadein">
					<h3 data-animate-in="intro">My Work By Example</h3>
					<h2 data-animate-in="intro">Websites Then and Now</h2>

					<div className="stars"></div>
					<div className="stars-lg"></div>
				</section>
				<section className="galaxy" data-animate-in="fadein">
					<div className="grid-container">
						<div className="nav">
							<nav>
								<ul>
									<li className={(category==='independent' ? 'indie' : '')} key="indie" onClick={this.handleClick.bind(this,'independent')} filter="independent">
										<h5>Independent</h5>
										<p>Freelance Development</p>
									</li>
									<li className={(category==='corporate' ? 'corpo' : '')} key="corpo" onClick={this.handleClick.bind(this,'corporate')} filter="corporate">
										<h5>Corporate</h5>
										<p>News/Media/Video Games</p>
									</li>
									<li className={(category==='agency' ? 'agency' : '')} key="agency" onClick={this.handleClick.bind(this,'agency')} filter="agency">
										<h5>Agency</h5>
										<p>Design/Advertising Agency</p>

									</li>
									<li className={(category==='node' ? 'node' : '')} onClick={this.handleClick.bind(this,'node')}><h5>Node</h5>
										<p>Projects</p></li>
								</ul>
							</nav>
						</div>
					</div>


					{
						(category==='corporate' || category==='all') ?
						  <div className="grid-container" data-animate-in="fadein">
							  <div><h5>2013</h5></div><div className="sub-header"><h5>NBC Universal</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='NBC Universal'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>
											  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
											  <h6>{listItem.portTitle}</h6>
											  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
											  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
										  </div>]
									  }
									  count++;
									  return <div key={listItem.id}>
										  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
										  <h6>{listItem.portTitle}</h6>
										  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
										  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
									  </div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(category==='corporate' || category==='all') ?
						  <div className="grid-container" data-animate-in="fadein">
							  <div><h5>2010</h5></div><div className="sub-header"><h5>Rockstar Games</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Rockstar Games'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>
											  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
											  <h6>{listItem.portTitle}</h6>
											  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
											  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
										  </div>]
									  }
									  count++;
									  return <div key={listItem.id}>
										  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
										  <h6>{listItem.portTitle}</h6>
										  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
										  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
									  </div>
								  }
							  })
							  }
						  </div>
						  :
						  <div></div>
					}

					{
						(category==='corporate' || category==='all') ?
						  <div className="grid-container" data-animate-in="fadein">
							  <div><h5>2004</h5></div><div className="sub-header"><h5>Advance Internet - Conde Nast</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Advance Internet'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>
											  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
											  <h6>{listItem.portTitle}</h6>
											  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
											  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
										  </div>]
									  }
									  count++;
									  return <div key={listItem.id}>
										  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
										  <h6>{listItem.portTitle}</h6>
										  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
										  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
									  </div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(category==='agency' || category==='all') ?
						  <div className="grid-container" data-animate-in="fadein">
							  <div><h5>2000</h5></div><div className="sub-header"><h5>Nuforia - Red Sky Interactive</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portEmployer==='Nuforia - Red Sky Interactive'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>
											  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
											  <h6>{listItem.portTitle}</h6>
											  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
											  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
										  </div>]
									  }
									  count++;
									  return <div key={listItem.id}>
										  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
										  <h6>{listItem.portTitle}</h6>
										  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
										  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
									  </div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(category==='independent' || category==='all') ?
						  <div className="grid-container" data-animate-in="fadein">
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
										  return [<div></div>,<div key={listItem.id}>
											  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
											  <h6>{listItem.portTitle}</h6>
											  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
											  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
										  </div>]
									  }
									  count++;
									  return <div key={listItem.id}>
										  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} /></a>
										  <h6>{listItem.portTitle}</h6>
										  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
										  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
									  </div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{
						(category==='node') ?
						  <div className="grid-container" data-animate-in="fadein">
							  <div><h5></h5></div><div className="sub-header"><h5>Node Projects</h5></div>
							  {port.map((listItem,ind) => {
								  if(ind===0){count=0;}
								  if(listItem.portSub==='4'){
									  if(count===3){count=0;}
									  if(count===0) {
										  count++;
										  return [<div></div>,<div key={listItem.id}>
											  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} width="210" /></a>
											  <h6>{listItem.portTitle}</h6>
											  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
											  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
										  </div>]
									  }
									  count++;
									  return <div key={listItem.id}>
										  <a href={listItem.portLink}  target="_blank" rel="noopener"><img src={`http://www.alicechuang.com/site/spring2010_v3/images_210x118/${listItem.portImg}`} width="210"  /></a>
										  <h6>{listItem.portTitle}</h6>
										  <p dangerouslySetInnerHTML={{__html: listItem.portDesc}}></p>
										  <p>{listItem.portEmployer} {listItem.portYear} <a href={listItem.portLink}  target="_blank" rel="noopener"><i className="fa fa-external-link" aria-hidden="true"></i></a></p>
									  </div>
								  }
							  })}
						  </div>
						  :
						  <div></div>
					}

					{/*<p data-animate-in="intro">*/}
						{/*breakdown phases of career by era challenges lessons learned*/}
						{/*hashbangs MVC Node*/}
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
            </main>

        )
    }
}