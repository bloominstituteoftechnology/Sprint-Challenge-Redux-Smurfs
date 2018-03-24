import React, {Component} from 'react';


export default class Post extends Component{
  constructor(props){
    super(props);
    this.handleName = this.handleName.bind(this);
    this.handleAge= this.handleAge.bind(this);
    this.handleHeight= this.handleHeight.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.state = {
      name:'name',
      age:'age',
      height:'height'
    }
  }
  handleName(event){
    if(event.target.value.slice(0,4) === 'name'){
      let temp = event.target.value.slice(4,5);
      this.setState({name:temp});
    }
    else{
      this.setState({name:event.target.value});
    }
  }
  handleAge(event){
    if(event.target.value.slice(0,3) === 'age'){
      let temp = event.target.value.slice(3,4);
      this.setState({age:temp});
    }
    else{
      this.setState({age:event.target.value});
    }
  }
  handleHeight(event){
    if(event.target.value.slice(0,6) === 'height'){
      let temp = event.target.value.slice(5,6);
      this.setState({height:temp});
    }
    else{
      this.setState({height:event.target.value});
    }
  }
  handleSubmit(event){
    this.props.smurfs.addSmurf(this.state.name,this.state.age,this.state.height);
    event.preventDefault();
  }
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleName} type="text" value={this.state.name}/>
        <input onChange={this.handleAge} type="text" value={this.state.age}/>
        <input onChange={this.handleHeight} type="text" value={this.state.height}/>
        <input type="submit" value = "submit" />
      </form>
    </div>
    )
  }

}

