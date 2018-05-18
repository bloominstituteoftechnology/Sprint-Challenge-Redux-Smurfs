import React, { Component } from 'react'
import { addSmurfs } from '../actions'
import { connect } from 'react-redux'

class AddSmurf extends Component {
   constructor(props) {
       super(props);
       this.state = {
           name: '',
           age: '',
           height: ''
       };
   }
handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
};
addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
    }
    this.props.addSmurfs(newSmurf)
    this.cleanState()
}
cleanState () {
    this.setState({
        name: '',
        age: '',
        height: ''
    })
}

render() {
    console.log(this.state)
    return (
        <div>
            <form onSubmit={this.addSmurf}>
                    <input type="name" name="name" id="smurfName" value={this.state.name} placeholder="Enter Smurf Name" onChange={this.handleInputChange}/>
                    <input type="age" name="age" id="smurfAge" value={this.state.age} placeholder="Enter Smurf Age" onChange={this.handleInputChange}/>
                    <input type="height" name="height" id="smurfHeight" value={this.state.height} placeholder="Enter Smurf Height" onChange={this.handleInputChange}/>
                <button onClick={()=> this.addSmurf}>Add To Village</button>
            </form>
        </div>
        )
    }
}

export default connect(null, { addSmurfs })(AddSmurf)

