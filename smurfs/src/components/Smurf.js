import React from 'react';
import UpdateSmurfForm from './UpdateSmurfForm';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
import { Button } from 'reactstrap';

class Smurf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleEdit: false
        }
    }

    setEdit = () => {
        this.setState({ toggleEdit: false });
    }

    render() {
        return (
            <div className='smurf-container'>

                <p><strong>Name:</strong> {this.props.smurf.name}</p>
                <p><strong>Height:</strong> {this.props.smurf.height}</p>
                <p><strong>Age:</strong> {this.props.smurf.age}</p>
                <Button color='danger' className='delete-button' onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>Delete</Button>
                <Button color='info' className='edit-button' onClick={() => this.setState({ toggleEdit: !this.state.toggleEdit })}>Edit</Button>
                {
                    this.state.toggleEdit ? <UpdateSmurfForm
                        name={this.props.smurf.name}
                        height={this.props.smurf.height}
                        age={this.props.smurf.age}
                        id={this.props.smurf.id}
                        setEdit={this.setEdit}
                    /> : null
                }

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