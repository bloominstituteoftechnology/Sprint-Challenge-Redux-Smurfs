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
        const smurf = this.props.smurfs.map(smurf => {
            return smurf
        })
        console.log('Who is this smurf?', this.props.smurfs)
        console.log('State of Update', this.state, 'Props of Update', this.props)
        console.log(smurf, 'who is this smurf?')
        return (
    <React.Fragment>
            <React.Fragment key={smurf.id}>
                {this.props.updating ? (
                    <img src="https://media1.tenor.com/images/b8a59fdb680805a6a57d67901982365f/tenor.gif?itemid=9478117" alt="loading" />
                ) : (
                        <div className="container">
                            <div className="row">
                                        <form onSubmit={this.updateSmurf} value={this.props.match.params.smurfid}>
                                            <label> {this.props.smurfs.name} </label>
                                        <input
                                            className="row"
                                            onChange={this.handleInputChange}
                                            placeholder={this.props.smurfs.name}
                                            value={this.state.name}
                                            name="name"
                                        />
                                    <label> New Age: </label>
                                        <input
                                            className="row"
                                            onChange={this.handleInputChange}
                                            placeholder={this.props.smurfs.age}
                                            value={this.state.age}
                                            name="age"
                                        />
                                    <label> New Height: </label>
                                        <input
                                            className="row"
                                            onChange={this.handleInputChange}
                                            value={this.state.height}
                                            placeholder= {this.props.smurfs.height}
                                            name="height"
                                        />
                                <NavLink to="/smurfs"><button type="submit" value={this.props.match.params.smurfid} onClick={this.updateSmurf}>
                                    Change {this.props.smurfs.name}'s information
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