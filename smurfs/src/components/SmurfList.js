import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, updateSmurf, killSmurf } from '../actions';

const URL = 'http://localhost:3333/smurfs/';

class SmurfList extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    componentDidMount() {
        this.props.getSmurfs(URL);
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if(!this.state.name || !this.state.age || !this.state.height) {
            return;
        }
        const smurf = { 
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
        }
        this.props.updateSmurf(URL, smurf);
        this.setState({ name: '', age: '', height: ''})
    }

    render() {
        return (
            <React.Fragment>
                {this.props.fetchingSmurfs ? (
                    <h1>... loading smurfs ...</h1>
                ) : (
                <React.Fragment>
                    {this.props.smurfs.map(smurf => {
                        return <div className='smurf' key={smurf.name}>
                            <ul>
                                <li>Name: {smurf.name}</li>
                                <li>Age: {smurf.age}</li>
                                <li>Height: {smurf.height}</li>
                            </ul>
                            <form>
                                <input placeholder="Update Name" onChange={this.handleInputChange} name="name" value={this.state.name} />
                                <input type="number" placeholder="Update Age" onChange={this.handleInputChange} name="age" value={this.state.age} />
                                <input placeholder="Update Height" onChange={this.handleInputChange} name="height" value={this.state.height} />
                                <button type="submit" onClick={() => this.handleFormSubmit(URL, smurf.id)}>Update Smurf</button>
                            </form>
                            <button type="button" onClick={() => this.props.killSmurf(URL, smurf.id)}>Kill Smurf</button>
                        </div>
                    })}
                </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs, updateSmurf, killSmurf })(SmurfList);