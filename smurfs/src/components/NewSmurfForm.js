import React from 'react' ;
import { connect } from 'react-redux' ;
import { getData, addSmurf } from '../actions/index' ;

class NewSmurfForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({ [e.target]: e.target.value })
    }
    handleSubmit = (newSmurf) => {
        this.props.addSmurf(newSmurf) ;
        this.props.getData() ;
    }
    render() {
        return (
            <div className="SmurfForm">
              <form onSubmit={this.addSmurf}>
                <input
                  onChange={this.handleInputChange}
                  placeholder="name"
                  value={this.state.name}
                  name="name"
                />
                <input
                  onChange={this.handleInputChange}
                  placeholder="age"
                  value={this.state.age}
                  name="age"
                />
                <input
                  onChange={this.handleInputChange}
                  placeholder="height"
                  value={this.state.height}
                  name="height"
                />
                <button type="submit">Add to the village</button>
              </form>
            </div>
          );       
    }
}
export default NewSmurfForm ;