import React from 'react';

import './App.css';

class Smurf extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="smurf">
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.height}</p>
               
            </div>
        )
    }
};

export default Smurf