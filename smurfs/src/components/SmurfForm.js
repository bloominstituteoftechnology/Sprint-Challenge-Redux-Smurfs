import React from 'react';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    };

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
};

newSmurfHandler = event => {
    event.preventDefault();
    const {name, age, height} = this.state;
    this.props.createSmurf({name, age, height});
    this.setState({ name: '', age: '', height: '' })
};

render() {
    return (
        <div>
        <h1 className="form-title">Register a New Smurf:</h1>

        <Form onSubmit = { this.newSmurfHandler } className="smurf-form">
        <FormGroup>
          <Label for="name">Smurf Name:</Label>
          <Input 
            type='text'
            value={ this.state.name }
            name='name'
            placeholder='name'
            onChange={ this.changeHandler } />
        </FormGroup>
        <FormGroup>
          <Label for="age">Smurf Age:</Label>
          <Input
            type='text'
            value={ this.state.age }
            name='age'
            placeholder='age'
            onChange={ this.changeHandler }
          />
        </FormGroup>
        <FormGroup>
          <Label for="height">Smurf Height:</Label>
          <Input
            type='text'
            value={ this.state.height }
            name='height'
            placeholder='height'
            onChange={ this.changeHandler }
          />
        </FormGroup>
        <Button onClick = { this.newSmurfHandler }>Submit</Button>
      </Form>
      </div>
        // <form onSubmit = { this.newSmurfHandler }>
        
        // <input
        //     type='text'
        //     value={ this.state.name }
        //     name='name'
        //     placeholder='smurf name'
        //     onChange={ this.changeHandler }
        // />

        // <input
        // type='text'
        // value={ this.state.age }
        // name='age'
        // placeholder='age'
        // onChange={ this.changeHandler }
        // />

        // <input
        // type='text'
        // value={ this.state.height }
        // name='height'
        // placeholder='height'
        // onChange={ this.changeHandler }
        // />

        // <button onClick = { this.newSmurfHandler }>Add Smurf</button>
        // </form>
    )
}
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingSmurf: state.smurfReducer.creatingSmurf
    };
};

export default connect(mapStateToProps, { createSmurf })(SmurfForm);