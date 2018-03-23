import React from 'react';

class Smurf extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="Smurf">
                <h3>{this.props.name}</h3>
                <strong>{this.props.height} tall</strong>
                <p>{this.props.age} old</p>
            </div>
        );
    }
}

export default Smurf;
