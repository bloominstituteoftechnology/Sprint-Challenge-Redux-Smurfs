import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSmurfs } from '../actions'
import { NavLink } from 'react-router-dom'


class UpdateSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editSmurf: false,
            name: '',
            age: '',
            height: '',
        }
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    updateSmurf = event => {
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }
        console.log('NewSmurf', newSmurf)
        let id = event.target.value
        this.props.updateSmurfs(newSmurf, id);
        this.cleanState()
    }
    cleanState () {
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }
    render() {
        return (
    <React.Fragment>
            <React.Fragment>
                {this.props.updating ? (
                    <img src="https://media1.tenor.com/images/b8a59fdb680805a6a57d67901982365f/tenor.gif?itemid=9478117" alt="loading" />
                ) : (
                        <div className="container">
                            <div className="row mw-100 d-flex">
                                <form onSubmit={this.updateSmurf} value={this.props.match.params.smurfid}>
                                            <label className="row"> Change Name: </label>
                                        <input
                                            className="row"
                                            onChange={this.handleInputChange}
                                            placeholder={this.props.name}
                                            value={this.state.name}
                                            name="name">
                                        </input>
                                    <label className="row"> Change Age: </label>
                                        <input
                                            className="row"
                                            onChange={this.handleInputChange}
                                            placeholder={this.props.age}
                                            value={this.state.age}
                                            name="age">
                                        </input>
                                    <label className="row"> Change Height: </label>
                                        <input
                                            className="row"
                                            onChange={this.handleInputChange}
                                            value={this.state.height}
                                            placeholder= {this.props.height}
                                            name="height">
                                        </input>
                                <NavLink to="/smurfs"><button type="submit" value={this.props.match.params.smurfid} onClick={this.updateSmurf}>
                                    Change {this.props.name}'s information
                        </button></NavLink>                                
                        </form>
                            </div>
                        </div>
                    )}
            </React.Fragment>
    </React.Fragment>
)
}
}
const mapStateToProps = state => {
    return {
        updating: state.updatingSmurf,
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, { updateSmurfs })(UpdateSmurf)