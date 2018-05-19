import React, { Component } from 'react';
import SmurfForm from './SmurfForm';

class SmurfCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            edit: false,
        }
    }
    onClickEdit = () => {
        this.setState({edit: true});
    }

    onClickCancel = () => {
        this.setState({edit: false});
    }

    render() {
        return ( 
            <div className="SmurfCard-container">
                {console.log("SmurfCard ", this.props.smurf)}
                <h1>{this.props.smurf.name}</h1>
                <p>Age: {this.props.smurf.age}</p>
                <p>Height: {this.props.smurf.height}</p>
                {!this.state.edit &&
                    <div>
                        <button className="ok-button" onClick={this.onClickEdit}>Edit</button>
                        <button className="cancel-button">Delete</button> 
                    </div>
                }
            </div>
        )
    }
}
 
export default SmurfCard;