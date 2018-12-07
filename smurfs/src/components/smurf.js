import React from 'react';

class Smurf extends React.Component {

    deleteSmurf = () => {
        this.props.deleteSmurf(this.props.smurf)
    }

    render() {
        return(
            <div>
                <h3>{this.props.smurf.name}</h3>
                <p>{this.props.smurf.age}</p>
                <p>{this.props.smurf.height}</p>
                <button onClick={this.deleteSmurf}>Feed to Azrael</button>
            </div>
        )
    }
}

export default Smurf;