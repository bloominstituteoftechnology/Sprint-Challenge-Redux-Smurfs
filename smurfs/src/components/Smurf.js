import React from 'react';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.smurf.name}</p>
                <p>Height: {this.props.smurf.height}</p>
                <p>Age: {this.props.smurf.age}</p>
            </div>
        );
    }
}

export default Smurf;