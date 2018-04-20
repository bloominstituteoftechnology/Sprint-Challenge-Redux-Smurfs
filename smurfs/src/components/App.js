import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf} from "../actions";
import SmurfList from '../components/Smurfs/SmurfList';
import SmurfFrom from '../components/Smurfs/SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

    // state = {
    //     name: '',
    //     age: '',
    //     height: '',
    //     id: '',
    // };

    // componentDidMount() {
    //     this.props.getSmurfs();
    // }

    // inputHandler = (event) => {
    //     this.setState({[event.target.name]: event.target.value});
    // };
    //
    // addSmurf = (event) => {
    //     event.preventDefault();
    //     this.props.addSmurf(this.state);
    //     this.setState({
    //         name: '',
    //         age: '',
    //         height: '',
    //     });
    // };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
          {/*<form>*/}
              {/*<input*/}
                  {/*onChange={this.inputHandler}*/}
                  {/*type="text"*/}
                  {/*name="name"*/}
                  {/*placeholder="Name"*/}
              {/*/>*/}
              {/*<input*/}
                  {/*onChange={this.inputHandler}*/}
                  {/*type="number"*/}
                  {/*name="age"*/}
                  {/*placeholder="Age"*/}
              {/*/>*/}
              {/*<input*/}
                  {/*onChange={this.inputHandler}*/}
                  {/*type="text"*/}
                  {/*name="height"*/}
                  {/*placeholder="height"*/}
              {/*/>*/}
              {/*<button type="submit" onClick={this.addSmurf}>*/}
                  {/*Add Smurf*/}
              {/*</button>*/}
          {/*</form>*/}
          <SmurfFrom/>
          <SmurfList/>
          {/*<ul>*/}
              {/*{this.props.smurfs.map((smurf) => {*/}
                  {/*return <li id={smurf.id} key={smurf.id}>{smurf.name}</li>*/}
              {/*})}*/}
          {/*</ul>*/}
      </div>
    );
  }
}

// const mapStateToProps  = state =>{
//
//     return {
//       smurfs: state.smurfs,
//         addingSmurf: state.addingSmurf,
//
//     };
// };
export default App;
// export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
