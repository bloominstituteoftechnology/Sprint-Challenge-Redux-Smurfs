import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from "../actions";
import AddSmurf from "./AddSmurf";
import SmurfsList from "./SmurfsList";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor( props )
  {
    super( props );
    this.state = 
    {
      name: "",
      age: "",
      height: "",

    }
  }

  componentDidMount()
  {
    this.props.fetchSmurfs();
  }

  onChange = ( event ) =>
  {
    this.setState( { [ event.target.name ]: event.target.value } );
  }

  addSmurf = ( smurf ) =>
  {
    this.props.addSmurf( smurf );
    this.setState
    ( { 
        name: "",
        age: "",
        height: ""
    } )
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf
          name = { this.state.name }
          age = { this.state.age }
          height = { this.state.height }
          onChange = { this.onChange }
          addSmurf = { this.addSmurf }
        />
        <SmurfsList smurfs = { this.props.smurfs }/>
      </div>
    );
  }
}

const mapStateToProps = ( state ) =>
{
  return {
    smurfs: state.smurfs,
    fetchSmurfs: state.fetchSmurfs
  };
}

export default connect( mapStateToProps, { fetchSmurfs, addSmurf } )( App );
