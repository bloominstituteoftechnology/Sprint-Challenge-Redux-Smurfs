import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions/index'
import { addSmurf } from '../actions/index'
import { deleteSmurf } from '../actions/index'

class App extends Component {
    state = {
        name: '',
        age: null,
        height: '',
    }
    componentDidMount() {
        this.props.getSmurfs()
    }
    handleChange = e => {
        const target = e.target
        const name = target.name
        const value =
            //eslint-disable-next-line
            target.name === 'age' ? parseInt(target.value) : target.value

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        window.location.reload()
    }
    delete = id => {
        this.props.deleteSmurf(id)
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
                                        <button
                                            key={smurf.id}
                                            onClick={() =>
                                                this.delete(smurf.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )
                            })}
                        </ul>
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <label forHtml="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                                <label forHtml="age">Age:</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    onChange={this.handleChange}
                                />
                                <label forHtml="height">Height:</label>
                                <input
                                    type="text"
                                    id="height"
                                    name="height"
                                    onChange={this.handleChange}
                                />
                                <input type="submit" value="submit" />
                            </form>
                        </div>
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
        addingSmurf: state.addingSmurf,
        deletingSmurf: state.deletingSmurf,
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs, addSmurf, deleteSmurf }
)(App)
