import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import Loading from '../components/Loading';
import Smurfs from '../components/Smurfs';
// import {Grid, Col} from 'react-bootstrap'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-Title">Smurfs App</h1>
                </header>

                {this.props.fetching ? <Loading/>: <Smurfs smurfs={this.props.smurfs}/>}

            </div>
        );
    }

}

const mapStateToProps = state => {
    const {smurfs_reducer} = state;
    console.log('State from reducers:', smurfs_reducer);
    return {
        smurfs: smurfs_reducer.smurfs,
        fetching: smurfs_reducer.fetching,
    }
};

export default connect(mapStateToProps, {getSmurfs})(App);

