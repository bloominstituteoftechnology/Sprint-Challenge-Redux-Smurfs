import React, {Component} from 'react';

class Smurf extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <li>Name: {this.props.smurf.name}</li>
                <li>Age: {this.props.smurf.age}</li>
                <li>Height: {this.props.smurf.height}</li>
            </div>
        );
    }
}

export default Smurf;