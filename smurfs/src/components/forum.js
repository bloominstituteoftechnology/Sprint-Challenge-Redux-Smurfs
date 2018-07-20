import React, { Component } from 'react';

class InputForum extends Component {
constructor(props){
	super(props);
	this.state={
	name:'',
	age:'',
	height:''
	};
}

changeHandler = (event) => {
	this.setState({[event.target.placeholder]:event.target.value});
};

nonSubmit = (event) => {
	event.preventDefault();
};

submitHandler = (event) => {
	event.preventDefault();
	const Smurf = {name:this.state.name,age:this.state.age,height:this.state.height};
	this.props.addSmurf(Smurf);
	this.setState({name:'',age:'',height:''});
};
//takes state values, creates a 'friend' object, and passes friend in as props
//to the addFriend function.

render(){
	return(
	<div className="formGroup">
	<form>
	<div>
	name:
	<input type="text" placeholder="name" value={this.state.name} onChange={this.changeHandler} onSubmit={this.nonSubmit} />
	</div><div>
	age:
	<input type="text" placeholder="age" value={this.state.age} onChange={this.changeHandler} onSubmit={this.nonSubmit} />
	</div><div>
	height:
	<input type="text" placeholder="height" value={this.state.height} onChange={this.changeHandler} onSubmit={this.nonSubmit} />
	</div>
	<button onClick={this.submitHandler}>submit!</button>
	</form>
	</div>
	);
	}
};

export default InputForum;