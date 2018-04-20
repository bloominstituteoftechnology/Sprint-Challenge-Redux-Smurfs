import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    const { addSmurf, state: { main: { data }}} = this.props
    return (
      <div>
        <Form onSubmit={addSmurf} />
        <List data={data} />
      </div>
    );
  }
}

const mapState = state => ({ state });
const actions = { addSmurf, getSmurfs };

export default connect(mapState, actions)(App);
