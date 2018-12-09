import React, { Component } from 'react';
import axios from 'axios';


class Smurfs extends Component {
	/*
	componentDidMount() {
	    axios
	      .get(
	        `http://localhost:3333/itemById/${
	          this.props.match.params.itemId
	        }`
	      )
	      .then(response => {
	        console.log(response);
	        this.setState({
	          item: response.data
	        });
	      })
	      .catch(err => console.log(err));
	  }*/

	render() {
    	return (
			<div>
				smurfs
			</div>
		);

	}
}

export default Smurfs;

//add br tags for spacing
//
/*
{props.smurfs.map(smurf => {
					{smurf.name}
				})}
 
<div >{smurf.name}</div>
<div>{smurf.age}</div>
<div>{smurf.height}</div>
 */