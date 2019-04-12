import React from 'react';
// import { runInThisContext } from 'vm';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [event.target.name]: event.target.value
            }
        });
    };

    addSmurf = event => {
        event.preventDefault();
        this.props.addSmurf(this.state.newSmurf);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        value={this.state.newSmurf.name}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.handleChange}
                        value={this.state.newSmurf.age}
                    />
                    <input
                        type='text'
                        name='height'
                        placeholder='Height'
                        onChange={this.handleChange}
                        value={this.state.newSmurf.height}
                    />
                    {this.props.addError ? <h3>There was an uh-oh</h3> : null}
                    {this.props.postSuccessMessage ? <h3>There's a new smurf in the village!</h3> : null}
                    <button type='submit'>{this.props.addingSmurf ? <h5>Adding to village...</h5> : 'Add Smurf'}</button> 
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      addingSmurf: state.addingSmurf,
      postSuccessMessage: state.postSuccessMessage,
      postError: state.postError
    }
  }
  

  export default connect(mapStateToProps,
    {addSmurf})(SmurfForm);