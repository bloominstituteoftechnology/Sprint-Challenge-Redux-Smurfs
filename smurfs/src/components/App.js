import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchSmurfs, captureSmurfs, crushSmurfs, morphSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
     name: '',
     age: '',
     height: '',
     changeName: '',
     changeAge: '',
     changeHeight: '',
     toggleForm: false
  };

  updateHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  toggleHandler = () => {
    this.setState({ toggleForm: !this.state.toggleForm });
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }
    
  render() {
    return (
      <div className='App'>
        <h1 className= 'title'>Smurf Playground</h1>
        {this.props.fetching ? (
          <div>Subliminal Message</div>
        ) : (
          <ul className='Smurfs'>
            {this.props.smurfs.map(smurf => {
              return (
                <div>
                  <div className='SmurfId'>
                    <div>{smurf.name}</div>
                    <div>{smurf.age}</div>
                    <div>{smurf.height}</div>
                  </div>
                  <button onClick={() => this.props.crushSmurfs(smurf.id)}>
                    Crush Smurf{' '}
                  </button>
                  <button onClick={this.toggleHandler}>Morph Smurf</button>
                  {this.state.toggleForm ? (
                    <form className='Input' onSubmit={e => {
                        e.preventDefault();
                        this.props.morphSmurfs(smurf.id, {
                          name: this.state.changeName,
                          age: this.state.changeAge,
                          height: this.state.changeHeight
                        });
                        this.setState({ name: '' });
                      }}>
                      <input type='text' placeholder='name' name='changeName' value={this.state.changeName} onChange={this.updateHandler} />
                      <input type='text' placeholder='age' name='changeAge' value={this.state.changeAge} onChange={this.updateHandler} />
                      <input type='text' placeholder='height' name='changeHeight' value={this.state.changeHeight} onChange={this.updateHandler} />
                      <button type='submit'>MORPH</button>
                    </form>
                  ) : null}
                  <hr />
                </div>
              );
            })}
          </ul>
        )}
        <form onSubmit={e => {
            e.preventDefault();
            this.props.captureSmurfs({
              name: this.state.name,
              age: this.state.age,
              height: this.state.height
            });
            this.setState({ name: '', height: '', age: '' });
          }}>
          <input type='text' placeholder='name'  name='name' value={this.state.name} onChange={this.updateHandler} />
          <input type='text' placeholder='age' name='age' value={this.state.age} onChange={this.updateHandler} />
          <input type='text' placeholder='height' name='height' value={this.state.height} onChange={this.updateHandler} />
          <p><button type='submit'> Capture Smurf </button></p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error
  };
};


export default connect ( mapDispatchToProps, { fetchSmurfs, captureSmurfs, crushSmurfs, morphSmurfs }) (App);
