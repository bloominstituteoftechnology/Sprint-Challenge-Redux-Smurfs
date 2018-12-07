import React, { Component } from 'react';
import './App.css';
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';
import { fetchSmurfs, addSmurf } from './../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div className="App">
                <SmurfsList smurfs={this.props.smurfs} />
                <SmurfsForm submit={this.props.addSmurf} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: state.smurfs,
        fetching: state.fetchingSmurfs
    };
};

const mapDispatchToProps = dispatch => ({
    fetchSmurfs: () => dispatch(fetchSmurfs()),
    addSmurf: () => dispatch(addSmurf())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
