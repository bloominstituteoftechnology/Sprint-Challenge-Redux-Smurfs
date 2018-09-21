import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { get,post } from '../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
constructor(props){
super(props);
this.state={
name:'',
age:'',
height:''
}
}
componentDidMount()
{
this.props.get();
}
onChange=(e)=>{
this.setState({
	[e.target.placeholder]:e.target.value
	})
}

postSmurf=(e)=>{
e.preventDefault();
if(this.state.name && this.state.age && this.state.height){
this.props.post({name:this.state.name,age:this.state.age,height:this.state.height});
}
else alert('Fill out yer smurfin\' fields! That means all of them!');
}

render(props) {
    return (
      <div className="App">
	  
	  <form>
        <input onChange={this.onChange} type="text" placeholder="name" value={this.state.name}/>
        <input onChange={this.onChange} type="text" placeholder="age" value={this.state.age}/>
        <input onChange={this.onChange} type="text" placeholder="height" value={this.state.height}/>
        <button type="submit" onClick={this.postSmurf}>Submit</button>
      </form>
	  
        <h1>SMURFS! 2.0 W/ Redux</h1>
		{this.props.fetchingSmurfs ? (
		
		<div>loading...</div>
		) : (
		<div>
		{this.props.smurfs.map(smurf => {
		return(<div key={smurf.name}>{smurf.name}: age {smurf.age}</div>)
		})}
		</div>
		)
		}
      </div>
    );
  }
}

const Map = (props) => {
return({
smurfs:props.smurfs,
fetchingSmurfs:props.fetchingSmurfs
});
}

export default connect(Map,{get,post})(App);
