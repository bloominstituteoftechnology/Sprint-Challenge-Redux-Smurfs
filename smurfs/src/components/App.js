import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from "../actions"
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  componentDidMount() {
   this.props.getSmurfs();
 }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form>
          <div>
            Name:
            <input type="text" name="smurfName" onChange={this.onChange} value={this.props.smurfName}></input>
          </div>
          <div>
            Age:
            <input type="text" name="smurfAge" onChange={this.onChange} value={this.props.smurfAge}></input>
        </div>
        <div>
            Height:
            <input type="text" name ="smurfHeight" onChange={this.onChange} value={this.props.smurfHeight}></input>
        </div>
        <input type="submit" value="Submit"></input>
        </form>
          {this.props.fetchingsmurf ? (<div>Hello</div>) : (
            <div >
              {this.props.smurfs.map(smurf => {
                return <div key={smurf.name}>{smurf.name}
                        <div>
                          {smurf.age}
                          <div>
                            {smurf.height}
                          </div>
                        </div>
                      </div>;
              })}
            </div>
          )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.data,
    fetchingsmurf: state.fetchingsmurf,
    smurfAge: state.smurfage,
    smurfName: state.smurfname,
    smurfHeight: state.smurfheight
  }
}
export default connect(mapStateToProps, { getSmurfs })(App);
