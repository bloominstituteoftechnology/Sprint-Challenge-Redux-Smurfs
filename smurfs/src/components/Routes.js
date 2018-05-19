import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App.js'
import AddSmurf from '../components/AddSmurf.js'
import SmurfList from '../components/SmurfList.js'
import UpdateSmurf from '../components/UpdateSmurf.js'

export default () => {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/smurfs" render={props => <div> <SmurfList/> <AddSmurf /> </div>}/>
        <Route path="/smurfs/:smurfid" render={props => <UpdateSmurf/>}/>
      </Switch>
      </Router>
    )
}