import React from 'react';

class Smurf extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <strong>{this.props.age}</strong>
                <p>{this.props.height}</p>
            </div>
        )
    }
}

export default Smurf;