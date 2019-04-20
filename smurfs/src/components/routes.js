import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'

import Village from './village'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Village}/>
      </Router>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(Routes)