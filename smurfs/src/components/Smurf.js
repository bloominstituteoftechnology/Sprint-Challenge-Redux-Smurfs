import React from "react";
import Form from "./Form";
import { connect } from "react-redux";

class Smurf extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            editing: false,
        }
    }

    render() {
        return(
            <div className='Smurf'>
                <h2>{`${this.props.smurf.name} Smurf`}</h2>
                <h3>{`${this.props.smurf.age} smurf years old`}</h3>
                <h3>{`${this.props.smurf.height} cm`}</h3>
                {this.state.editing && <Form smurf={this.props.smurf} submit={this.props.editSmurf} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        editing: state.editing
    }
}

export default connect(mapStateToProps)(Smurf);