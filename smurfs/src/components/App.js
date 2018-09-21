import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs } from '../actions';
import SmurfAddForm from './SmurfAddForm';
import { SmurfsList } from './SmurfsList';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h4>We're smurfin' comin! JEEZ... one moment</h4>
        ) : (
          <div className='App-loaded'>          
            <SmurfAddForm  />
            <SmurfsList
              smurfs={this.props.smurfs}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,   
    addingSmurf: state.addingSmurf,  
    error: state.error
  }
 }

export default connect(mapStateToProps, { fetchSmurfs })(App);
