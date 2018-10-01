import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs, addSmurfs } from "../actions";
import SmurfList from '../presentational/SmurfsList';
import SmurfForm from "../presentational/SmurfForm";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
      name: '',
      age: '',
      height: ''
    };


    handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }


     handleAddSmurfChange = event => {
      event.preventDefault();
      const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      };
      this.props.addSmurfs(newSmurf);
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }

  componentDidMount() {
    this.props.getSmurfs();
    //console.log(this.props.getSmurfs());
  };

  render() {
    return (
      <React.Fragment>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm 
          state={this.state}
          handleInput={this.handleInputChange}
          handleAddSmurf={this.handleAddSmurfChange}
        /> 
         <SmurfList smurfs={this.props.smurfs} />
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs 
});



export default connect(
  mapStateToProps,
  {getSmurfs, addSmurfs},
)(App);