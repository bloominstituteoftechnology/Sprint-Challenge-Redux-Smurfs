import React from 'react';
import './App.css';

class EditSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height:'',
    }
  }

  editHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  updateSmurf = (e) => {
    const name = this.state.name;
    const age = this.state.age;
    const height = this.state.height;
    e.preventDefault();
    this.props.handleUpdate(name, age, height, this.props.smurfID);
    this.setState({name: '', age:'', height:''})
    this.props.toggleEditForm();
  }

  render() {
    return (
      <div>
        <form>
        Name: <input placeholder="Name" type="text"
        onChange={this.editHandler} name="name" />
        <button onClick={this.updateSmurf} value={this.state.name}>Save</button>
        </form>

        <form>
        Age: <input placeholder="Age" type="number"
        onChange={this.editHandler} name="age" />
        <button onClick={this.updateSmurf} value={this.state.age}>Save</button>
        </form>

        <form>
        Height: <input placeholder="Height" type="number"
        onChange={this.editHandler} value={this.state.height} name="height" />
        <button onClick={this.updateSmurf}>Save</button>
        </form>
      </div>
    )
  }
}

export default EditSmurf
