import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import './App.css';
import AddSmurfForm from './AddSmurfForm';
import SmurfList from './SmurfList';
import ModifySmurf from './ModifySmurf';

class App extends Component {
  state = {
    smurfToModify: {},
    isModifying: false,
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurfForm />
        { this.state.isModifying ? (
          <ModifySmurf doneModifying={this.setModifyingFalse}/>
        ) : (
          <SmurfList smurfs={smurfs} sendInfoToApp={this.transferModifyingInfo} />
        )
        }
      </div>
    );
  }

  setModifyingFalse() {
    this.setState({smurfToModify: {}, isModifying: false})
  }

  transferModifyingInfo(smurf) {
    this.setState({ smurfToModify: { ...smurf }, isModifying: true})
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);

/*
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
