import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Route, Link, NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';
import Smurf from './Smurf';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import {Transition, Spring, config} from 'react-spring';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    smurfs: this.props.smurfs,
    newSmurf: {
      name: '',
      age: '',
      height: ''
        },
    prepDelete: false
  }

  handleInput = (e) => {
    this.setState({newSmurf: {
                   [e.target.name]: e.target.value 
    }})
  }

  prepDelete = () => {
    this.setState({prepDelete: !this.state.prepDelete})
  }

  
  componentDidMount(){
    this.props.getSmurfs()
  }




  render() {
    const {smurfs, deleteSmurf, addSmurf } = this.props;
    return (
      <div className="App">

      <Spring from={{height: 0, opacity: 0}}
              to={{height: 550, opacity: 1}}
              delay={500}
              config={config.molasses}>
              {(props) =>
                 <header style={props}><h1 >Smurf Village</h1></header>}
      
      </Spring>
      <nav><NavLink to='/'>Home</NavLink><NavLink to='/addSmurf'>Add Smurf</NavLink><div className="delete"onClick={this.prepDelete}>Delete Smurf</div></nav>
      
      
      <Route exact path='/' render={props =>
                      <Smurfs {...props}
                              smurfs={smurfs}
                              prepDelete={this.state.prepDelete}
                              delete={deleteSmurf} />
      } />
        
      <Route  path='/addSmurf' render={props =>
                              <SmurfForm 
                              {...props}
                              handleInput={this.handleInput} 
                              newSmurf={this.state.newSmurf}
                              addSmurf={addSmurf} />
       }/>
      <Route path='/smurfs/:id' render={props => <div className='smurfpage-container'><Smurf {...props} 
                                                  smurf={smurfs}
                                                  delete={deleteSmurf}
                                                  prepDelete={this.state.prepDelete}
                                                  smurfPage />
                                                  </div>
                                                  }/>


      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));
