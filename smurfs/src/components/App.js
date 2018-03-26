import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import List from './List'
import { addSmurf, getSmurfs } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    const { addSmurf, state: { main: { data }}} = this.props
    return (
      <Fragment>
        <Form onSubmit={addSmurf} />
        <List data={data} />
      </Fragment>
    );
  }
}

const mapState = state => ({ state })
const actions = { addSmurf, getSmurfs }

export default connect(mapState, actions)(App)
