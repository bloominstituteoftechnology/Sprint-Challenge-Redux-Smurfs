import React from 'react';

class Smurf extends React.Component {
    render() {
        return (
            <div key={this.props.id}>
                <h1>{this.props.name}</h1>
                <strong>{this.props.age}</strong>
                <p>{this.props.height}</p>
                <button className="button button-delete" onClick={() => this.props.deleteSmurf(this.props.id)} >Delete this Smurf</button>
            </div>
        )
    }
}

export default Smurf;