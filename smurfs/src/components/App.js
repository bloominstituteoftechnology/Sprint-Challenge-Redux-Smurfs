import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { smfFth } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.smfFth();
  }
  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        {this.props.smf_fthg ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {this.props.smf_arr.map(smf => {
              return <div key={smf.id}>{smf.name}</div>
            })}
            {/* <form>
              <input type="text" name="nme" placeholder="Name" value={this.state.frd_idv.nme} hdliptchg={this.hdliptchg} />
              <input type="number" name="age" placeholder="Age" value={this.state.frd_idv.age} hdliptchg={this.hdliptchg} />
              <input type="email" name="eml" placeholder="Email" value={this.state.frd_idv.eml} hdliptchg={this.hdliptchg} />
              <button onClick={() => this.hdlnwfrd}>Add New</button>
            </form> */}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smf_fthg: state.smf_fthg,
    smf_fthd: state.smf_fthd,
    smf_svd: state.smf_svd,
    smf_svg: state.smf_svg,
    smf_updtg: state.smf_updtg,
    smf_updtd: state.smf_pdtd,
    smf_dltg: state.smf_dltg,
    smf_dltd: state.smf_dltd,
    smf_arr: state.smf_arr,
    // frd_idv: state.frd_idv,
    err: state.err
  }
}

export default connect(mapStateToProps, { smfFth })(App);
