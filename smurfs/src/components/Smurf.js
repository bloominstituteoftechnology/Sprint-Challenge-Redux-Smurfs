import React from 'react';

import UpdateForm from './UpdateForm';
import './App.css';

class Smurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updating: false
        }
    }

    deleteHandler = () => {
        this.props.deleteSmurf(this.props.id);
    }

    openUpdateHandler = (e) => {
        this.setState({ updating: !this.state.updating })
    }

    


    render() {
        return(
            <div className="smurf">
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.height}</p>
                <p>{this.props.id}</p>
                <p style={{cursor: 'pointer'}} onClick={this.openUpdateHandler}>Update Smurf</p>
                {this.state.updating ? <UpdateForm id={this.props.id} closeUpdateForm={this.openUpdateHandler} /> : null}
                <p style={{cursor: 'pointer'}} onClick={this.deleteHandler}>Delete Smurf</p>
               
            </div>
        )
    }
};

export default Smurf