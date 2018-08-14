import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, updateSmurf, killSmurf, editSmurf } from '../actions';

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

    handleFormSubmit = (URL, id) => {
        const smurf = { 
            name: this.state.name,
            age: Number(this.state.age),
            height: this.state.height,
            id: id,
        }
        this.props.updateSmurf(URL, id, smurf);
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
                        return <div className='smurf' key={smurf.id}>
                            <ul>
                                <li>Name: {smurf.name}</li>
                                <li>Age: {smurf.age}</li>
                                <li>Height: {smurf.height}</li>
                            </ul>
                            {this.props.editingSmurf ? (
                                <form>
                                <input placeholder="Update Name" onChange={this.handleInputChange} name="name" value={this.state.name} />
                                <input type="number" placeholder="Update Age" onChange={this.handleInputChange} name="age" value={this.state.age} />
                                <input placeholder="Update Height" onChange={this.handleInputChange} name="height" value={this.state.height} />
                                <button type="submit" onClick={() => this.handleFormSubmit(URL, smurf.id)}>Update Smurf</button>
                            </form>
                            ) : null}
                            <button type="button" onClick={() => this.props.editSmurf(smurf.id)}>Edit Smurf</button>
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
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        editingSmurf: state.editingSmurf,
    }
}

export default connect(mapStateToProps, { getSmurfs, updateSmurf, killSmurf, editSmurf })(SmurfList);