import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, newSmurf } from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  
  handleInput = event => {
    event.preventDefault();

    if(event.target.name === 'age') {
      this.setState({
      age: Number(event.target.value)
      })} 
    else if (event.target.name === 'name'){
      this.setState({
          name: event.target.value
    })} else {
          this.setState({
              height: event.target.value
    })}
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.newSmurf(this.state);
    
  }
  
  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? (
          <h3>fetching smurfs...</h3>
        ) : (
          <div>
            {this.props.smurfs.map(smurf => 
              <div key={smurf.name}>
                <h2>Smurf,</h2>
                <h3>Name: {smurf.name}</h3>
                <h4>Age: {smurf.age}</h4>
                <h5>Height: {smurf.height}</h5>
              </div>
            )}
            <div>
                <h3>Add a Friend</h3>
                <form>
                    <input type="text" name="name" placeholder="name" onChange={this.handleInput}/>
                    <input type="text" name="age" placeholder="age" onChange={this.handleInput}/>
                    <input type="text" name="height" placeholder="height" onChange={this.handleInput}/>
                    <input type="submit" onClick={this.addSmurf}/>
                </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  }
}

export default connect(mapStateToProps, {fetchSmurfs, newSmurf})(App);
