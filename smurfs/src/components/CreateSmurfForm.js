import React from 'react';
// Redux
import { connect } from 'react-redux';
// Redux--Actions
import { addSmurf } from '../actions';

class CreateSmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
      height: '',
      edit: false,
    }
  }

  handleTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  goPostFriend = (e) => {
    e.preventDefault();

    if (this.state.edit === false) this.setState({
      ...this.state,
      edit: true, 
    });

    if (this.state.edit === true) {
      
      const newFriend = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      };
      this.props.addSmurf(newFriend);
      this.setState({
        name: '',
        age: '',
        email: '',
        height: '',
        edit: false,
      })
    }
  }

  render() {
    const { name, id, age, email, height } = this.props;
    const inputField = property => <input 
      name={property}
      type="text"
      value={this.state[property]}
      size={this.state[property].toString().length - 1}
      onChange={(e) => this.handleTextChange(e)}
    />;
    return (
      <form onSubmit={this.goPostFriend} className="friend flex justify-between ph2 pt2 ma3">
        { this.state.edit ? 
          <span>I'm {inputField(`name`)} Smurf
            and I'm {inputField(`age`)} 
            years old. I am{` `} 
            {inputField(`height`)} tall!
          </span> :
          <span>Wanna add a new <del>friend</del> SMURF?! Click on the pencil.</span>
        }
        <div className="button-div">
          <i type="submit" onClick={this.goPostFriend} className="fas fa-pencil-alt mh2"></i>
        </div>
      </form>
    );
  }
}

export default connect(null, { addSmurf })(CreateSmurfForm);