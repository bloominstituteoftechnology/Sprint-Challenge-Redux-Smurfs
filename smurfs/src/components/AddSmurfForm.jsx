import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/actions';


class AddSmurfForm extends Component {
    nameRef = React.createRef();

    ageRef = React.createRef();

    heightRef = React.createRef();

    handleClick = event => {
        event.preventDefault();
        this.props.postSmurf({
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            height: this.heightRef.current.value +'cm',
        });
        this.nameRef.current.value = '';
        this.ageRef.current.value = '';
        this.heightRef.current.value= '';
    }

    render() {
        return (
          <form>
            <h5>Name</h5>
            <input type="text" ref={this.nameRef} />
            <h5>Age</h5>
            <input type="number" ref={this.ageRef} />
            <h5>Height</h5>
            <input type="number" ref={this.heightRef} />
            <br />
            <br />
            <button type="submit" onClick={this.handleClick}>
              Add smurf to village
            </button>
          </form>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { postSmurf })(AddSmurfForm);