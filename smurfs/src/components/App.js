import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurfs } from '../actions';
import SmurfForm from './SmurfForm';
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
    deleteSmurfId: ''
  }

  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
                <section>
          <SmurfForm
            onChange={this.onChange}
            addSmurf={this.addSmurf}
            addSmurfName={this.state.addSmurfName}
            addSmurfAge={this.state.addSmurfAge}
            addSmurfHeight={this.state.addSmurfHeight}
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

let mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};


export default connect(mapStateToProps, { fetchingSmurfs })(App);
