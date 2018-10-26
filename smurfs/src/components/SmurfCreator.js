import React from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'
import Form from './Form'

class SmurfCreator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createSmurf = () => {
    this.props.addSmurf(this.state);
  };

  render() {
      const { name, age, height } = this.state
      return (
          <Form 
          onSubmit={this.createSmurf}
          onChange={this.handleChange}
          fields={{name, age, height}}
          />
      )
  }
}

export default connect(null, { addSmurf })(SmurfCreator)