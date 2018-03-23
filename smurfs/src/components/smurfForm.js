import React, { Component } from 'react';
import { addFriends, getFriends } from '../actions';
import { connect } from 'react-redux';
import App from './App';

class SmurfsForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };
    

    handleSubmit = () => {
        this.props.addFriends(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    componentDidMount() {
        this.props.getFriends();
        
      }

    render(){
        return (
            <div>
                <form className="App" onSubmit={this.handleSubmit}>
                <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                </label>
                <label>Age: <input type="text" name="age" value={this.state.age} onChange={this.handleInput} />
                </label>
                <label>Height: <input type="text" name="height" value={this.state.height} onChange={this.handleInput} />
                </label>
                <button type="submit">Add Smurf</button>
            </form>
            
        <ul className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
            <App />
          </ul>
            </div>            
        );
    }
}

const mapStateToProps = state => {
    return {
        adding: state.adding,
        smurfs: state.smurfs,
        error: state.error,
        fetching: state.fetching,
        fetched: state.fetched
  };
};
export default connect(mapStateToProps, { addFriends, getFriends })(SmurfsForm);