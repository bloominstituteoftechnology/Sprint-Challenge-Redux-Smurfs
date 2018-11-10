import React, {Component} from 'react';

import EditSmurfForm from './EditSmurfForm';

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

    render() {
        return (
            <ul>
                <li>{this.props.smurf.name}</li>
                <li>{this.props.smurf.age}</li>
                <li>{this.props.smurf.height}</li>
                <button onClick={() => this.toggleEditForm()}>Edit</button>
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

export default Smurf;