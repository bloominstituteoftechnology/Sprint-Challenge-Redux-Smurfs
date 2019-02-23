import React, {Component} from 'react';
import { connect } from 'react-redux';

import EditSmurfForm from './EditSmurfForm';
import { deleteSmurf } from '../actions';

class Smurf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatingSmurf: false
        }
    }

    toggleEditForm = () => {
        this.setState(prevState => ({
            updatingSmurf: !prevState.updatingSmurf
        }));
    }

    deleteSmurfButton = (id) => {
        this.props.deleteSmurf(id);
    }

    render() {
        return (
            <ul>
                <li>{this.props.smurf.name}</li>
                <li>{this.props.smurf.age}</li>
                <li>{this.props.smurf.height}</li>
                <button onClick={() => this.toggleEditForm()}>Edit</button>
                <button onClick={() => this.deleteSmurfButton(this.props.smurf.id)}>Delete</button>
                { 
                    this.state.updatingSmurf ? 
                        <EditSmurfForm 
                            name={this.props.smurf.name} 
                            age={this.props.smurf.age} 
                            height={this.props.smurf.height} 
                            id={this.props.smurf.id}
                        /> 
                        : 
                        null 
                }
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);