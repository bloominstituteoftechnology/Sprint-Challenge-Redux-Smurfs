import React from "react";
import { Link } from "react-router-dom"

class Smurf extends React.Component {
    render() {
        return <Link
            to={`/smurfs/${this.props.id}`}
            style={{
                textDecoration: 'none',
                color: 'black',
                cursor: 'unset'
            }} >
            <p>{this.props.name} is {this.props.age} years old, and {this.props.height} tall!</p>
            {/* <button onClick={this.props.onDeleteClick(this.props.id)}>delete me</button> */}
        </Link>
    }
};

export default Smurf;