import React, { Component } from 'react';
import './App.css';
import { connect  } from 'react-redux';
import { fetch_smurfs } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
componentDidMount() {
  this.props.fetch_smurfs();
}
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div>
        <ul className='smurfList'>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
            <li className='listing'>{smurf.name}</li>
            </div>
          )
        })}
        </ul>
        </div>
        </div>

/*{         <div>
        {this.props.pending} ? (
          <h1>Finding Smurfs</h1>
        ) : (
          <div>
          <ul className ='smurfList'>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.name}>
              <li className='listing'>{smurf.name}</li>
              </div>
            )
          })}
            </ul>
              </div>
        )}
          </div>
    </div> 
    ) }*/
   
    )
  }
}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    success: state.success,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetch_smurfs } )(App);
