import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editSmurf, deleteSmurf } from '../actions';

class SmurfCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            edit: false,
        }
    }
    onClickEdit = () => {
        this.setState({edit: true});
        this.props.editSmurf();
    }

    onClickCancel = () => {
        this.setState({edit: false});
    }

    onClickDelete = () => {
        this.props.deleteSmurf(this.props.smurf);
    }

    render() {
        return (
            <div className="SmurfCard-container">
                {console.log("SmurfCard ", this.props.smurf)}
                <h1>{this.props.smurf.name}</h1>
                <p>Age: {this.props.smurf.age}</p>
                <p>Height: {this.props.smurf.height}</p>
                    <div>
                        <button className="ok-button" onClick={this.onClickEdit}>Edit</button>
                        <button className="cancel-button" onClick={this.onClickDelete}>Delete</button> 
                    </div>
            </div>
        )
    }
}
 

const mapStateToProps = state => {
    console.log("mapStateToProps Card", state);
    const props = state;
    return props;
} 

export default connect(mapStateToProps, { editSmurf, deleteSmurf })(SmurfCard);