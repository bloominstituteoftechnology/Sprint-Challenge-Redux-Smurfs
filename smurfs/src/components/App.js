import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'
import AddSmurf from '../components/AddSmurf.js'
import SmurfList from '../components/SmurfList.js'
import UpdateSmurf from '../components/UpdateSmurf.js'
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {  
    console.log(this.props.smurfs)
    return (
      <div className="App">
      <div>
      <Switch>
      <Route exact path="/" component={App} />
        <Route exact path="/smurfs" render={props => <div> <SmurfList/> <AddSmurf /> </div>}/>
        {this.props.smurfs.map(smurf => {
          console.log('What smurfs live here?', this.props.smurfs)
          return (
        <Route path="/smurfs/:smurfid" key={this.props.smurfs} render={(props) => <UpdateSmurf {...props} name={smurf.name} age={smurf.age} height={smurf.height} />}/>)})}
        </Switch>
      </div>
      </div>
    )
}
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
}
export default connect(mapStateToProps, { fetchSmurfs })(App)
