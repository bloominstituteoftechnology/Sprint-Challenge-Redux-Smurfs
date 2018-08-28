import React, { Component } from 'react';
import './App.css';
import {smurfsFetching, smurfsAdding} from '../actions/index';
import {connect} from 'react-redux';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    
    this.state = {
      smurfs: [] ,
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmitItem = () => {
    // console.log('submiting items' + this.state)
    const newSmurf = {name: this.state.name, age: this.state.age, height: this.state.height}
    this.props.smurfsAdding(newSmurf)
              this.setState({smurfs: ''})
  }

    componentDidMount () {
      this.props.smurfsFetching()
    }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
        <img src="https://images.all-free-download.com/images/graphicthumb/smurfs_0_110902.jpg" alt="Smiley face" height="200" width="600"/>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <h3>
                <ul key={smurf.name}> Name: {smurf.name}</ul>
              </h3>
                <li > Age: {smurf.age}</li>
                <li > Height: {smurf.height}</li>
              </div>
          )})}
        </div>
        <div>
            <input type= 'text' placeholder = 'Enter Smurfs name' name= 'name' value = {this.state.name} onChange = {e => this.setState({ [e.target.name]: e.target.value})}/>
            <input type= 'number' placeholder = 'Enter Smurfs age'  name= 'age' value = {this.state.age} onChange = {e => this.setState({ [e.target.name]: e.target.value})}/>
            <input type= 'number' placeholder = 'Enter Smurfs height'  name= 'height' value = {this.state.height} onChange = {e => this.setState({ [e.target.name]: e.target.value})}/>
        </div>
        <div>
            <button onClick={this.handleSubmitItem}> 
              Add Smurfs Here!
            </button>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    smurfs: state.smurfs,
    smurfsPending: state.smurfsPending,
    smurfsAdding: state.smurfsAdding
  }
}

export default connect(mapStateToProps, {smurfsFetching, smurfsAdding})(App);
