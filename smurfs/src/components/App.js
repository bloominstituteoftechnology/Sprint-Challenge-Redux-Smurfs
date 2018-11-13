import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getSmurfs} from "../actions";


class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return (
            <div className="App">
                {this.props.loading ? "LOADING" : this.props.smurfs.map(smurf => {
                    return <div>{smurf.name}</div>
                })}
            </div>
        );
    }
}

const mapStateToProps = ({loading, error, smurfs}) => {
    return {
        loading,
        error,
        smurfs
    }
};

export default connect(mapStateToProps, { getSmurfs })(App);
