import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';
import AddSmurfButton from './AddSmurfButton';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';



class App extends Component {
  constructor() {
    super();
    this.state = {
      edit: true
    };
  }

  onClick = () => {
    this.setState({edit:  true});
  }

  render() {
    return (
      <div className="App">
        {console.log("refresh app")}
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.state.edit && <SmurfForm />}
        {this.state.edit && <SmurfsList />}
        {this.state.edit && !this.props.fetching &&
        <div className="Smurf-button fixed" onClick={this.onClick}>
          <img src="https://www.shareicon.net/data/24x24/2015/08/07/81652_green_48x48.png" alt="img"/>
        </div>}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps App ", state);
  const props = state;
  return props;
}

export default connect(mapStateToProps, {  })(App);