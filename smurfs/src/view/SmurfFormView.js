import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions';
import '../index.css';

class SmurfFormView extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: '',
        }
    };

    handleChange = event => {this.setState({
        [event.target.name]: event.target.value});
    }

    render() {
        const { name, age, height } = this.state; //building precise names for state, so we dont have to use this.state.name etc
        return (
            <div>
            <form>
                <div className="smurfBoxes">
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={this.handleChange}
                        placeholder="smurfs name..."
                    />
                </div>
                <div className="smurfBoxes">
                    <input
                        type="number"
                        value={age}
                        name="age"
                        onChange={this.handleChange}
                        placeholder="smurfs age..."
                    />
                </div>
                <div className="smurfBoxes">
                    <input
                        type="text"
                        value={height}
                        name="height"
                        onChange={this.handleChange}
                        placeholder="smurfs height..."
                    />
                </div>
                <button className="submitButton" onClick={() => 
                    this.props.addNewSmurf({ name, age, height })}>Submit New Smurf</button>
            </form>
        </div>
        );
    }
}
const mapStateToProps = state => ({
    addNewSmurf: state.addNewSmurf
});
export default connect(mapStateToProps, { addNewSmurf })(SmurfFormView);