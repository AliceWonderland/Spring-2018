import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortDesc extends Component{
	constructor(props){
		super(props);
		this.state=this.props;
	}
	render() {
		return (
		  <p>{this.state.desc}</p>
		)
	}
}

export default PortDesc;