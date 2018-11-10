import React from 'react';

import UpdateForm from './UpdateForm';
import './App.css';

class Smurf extends React.Component {
    constructor(props){
        super(props);

    }

    deleteHandler = () => {
        this.props.deleteSmurf(this.props.id);
    }

    render() {
        return(
            <div className="smurf">
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.height}</p>
                <p>{this.props.id}</p>
                <UpdateForm id={this.props.id} />
                <p style={{cursor: 'pointer'}} onClick={this.deleteHandler}>Delete Smurf</p>
               
            </div>
        )
    }
};

export default Smurf