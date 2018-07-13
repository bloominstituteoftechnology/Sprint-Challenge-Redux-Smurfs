import React from 'react';
import UpdateSmurfForm from './UpdateSmurfForm';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='smurf-container'>
                <p>Name: {this.props.smurf.name}</p>
                <p>Height: {this.props.smurf.height}</p>
                <p>Age: {this.props.smurf.age}</p>
                <button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>Delete</button>
                <UpdateSmurfForm
                    name={this.props.smurf.name}
                    height={this.props.smurf.height}
                    age={this.props.smurf.age}
                    id={this.props.smurf.id}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);