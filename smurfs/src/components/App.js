import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/index'

class App extends Component {
    state = {
        name: '',
        age: null,
        height: '',
    }
    componentDidMount() {
        this.props.getSmurfs()
    }

    render() {
        return (
            <div className="App">
                {this.props.gettingSmurfs ? (
                    <p>Getting smurfs, yo!</p>
                ) : (
                    <div>
                        <ul>
                            {this.props.smurfs.map(smurf => {
                                return (
                                    <div className="list">
                                        <li key={smurf.name}>
                                            Name:
                                            {smurf.name}
                                        </li>
                                        <li key={smurf.age}>
                                            Age:
                                            {smurf.age}
                                        </li>
                                        <li key={smurf.height}>
                                            Height:
                                            {smurf.height}
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                )}
                {this.props.error !== '' ? <p>{this.props.error}</p> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
        gettingSmurfs: state.gettingSmurfs,
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(App)
