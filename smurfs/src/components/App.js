import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, addSmurf } from './sec/actions/index';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  componentDidMount() {
    this.props.fetchSmurfs();
    console,log(this.props);
  }
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onFormSubmit = () => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: "", age: "", height: "" })
  }
  render() {
    return (
     <form onSubmit={tihs.onFormSubmit}>
     <input
     type= 'text'
     name='name'
     placeholder="Name"
     value={this.state.name}
     onChange={this.onInputChange}
     />
     <input
     type='text'
     name='age'
     placeholder="Age"
     value={this.state.age}
     onChange={this.onInputChange}
     />
     <input
     type='text'
     name='height'
     placeholder="Height"
     value={this.state.height}
     onChange={this.onInputChange}
     />
     <button type='submit'>Add Smurf</button>
     </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfReducer.smurfs,
    fetching: state.smurfReducer.fetchingSmurfs,
    error: state.smurfReducer.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
