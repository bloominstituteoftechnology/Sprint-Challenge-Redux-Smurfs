import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import Loading from '../components/Loading';
import Smurfs from '../components/Smurfs';

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
    return {
        smurfs: smurfs_reducer.smurfs,
        fetching: smurfs_reducer.fetching,
    }
};

export default connect(mapStateToProps, {getSmurfs})(App);

