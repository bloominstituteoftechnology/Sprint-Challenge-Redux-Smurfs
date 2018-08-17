import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs, deleteSmurf, editSmurf } from "../actions";

import Form from './Form'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    addSmurfName: '',
    addSmurfAge: '',
    addSmurfHeight: '',
    deleteSmurfId: '',
    editSmurfId: '',
    editSmurfName: ''
  }

  componentDidMount() {
    return this.props.fetchSmurfs()
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addSmurf = (e) => {
    e.preventDefault();
    let smurfInfo = {
      name: this.state.addSmurfName,
      age: parseInt(this.state.addSmurfAge, 10),
      height: this.state.addSmurfHeight
    }
    this.props.addSmurfsHandle(smurfInfo);
    this.setState({addSmurfName: '', addSmurfAge: '', addSmurfHeight: ''});
  }

  deleteSmurf = (e) => {
    e.preventDefault();
    let smurfId = this.state.deleteSmurfId;
    this.props.deleteSmurfHandle(smurfId);
    this.setState({deleteSmurfId: ''});
  }
  
  editSmurf = (e) => {
    e.preventDefault();
    let smurfId = this.state.editSmurfId;
    let smurfInfo = this.state.editSmurfName;
    this.props.editSmurfHandle(smurfId, smurfInfo);
    this.setState({editSmurfId: '', editSmurfName: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <section>
          <Form
            onChange={this.onChange}
            addSmurf={this.addSmurf}
            addSmurfName={this.state.addSmurfName}
            addSmurfAge={this.state.addSmurfAge}
            addSmurfHeight={this.state.addSmurfHeight}
            deleteSmurf={this.deleteSmurf}
            deleteSmurfId={this.state.deleteSmurfId}
            editSmurf={this.editSmurf}
            editSmurfId={this.state.editSmurfId}
            editSmurfName={this.state.editSmurfName}
          />
        </section>
        <main>
          <h1>Smurfs</h1>
          {this.props.fetchingSmurfs ? <h2>Loading...</h2> :
            this.props.smurfs.map((item, index) => {
              return <p key={index}>{item.id}: {item.name}</p>
            })
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSmurfs: () => {
    dispatch(fetchSmurfs());
  },

  addSmurfsHandle: (smurfInfo) => {
    dispatch(addSmurfs(smurfInfo));
  },
  
  deleteSmurfHandle: (smurfId) => {
    dispatch(deleteSmurf(smurfId));
  },

  editSmurfHandle: (smurfId, smurfInfo) => {
    dispatch(editSmurf(smurfId, smurfInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
