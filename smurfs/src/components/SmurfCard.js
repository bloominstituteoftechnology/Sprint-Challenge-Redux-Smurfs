import React from 'react';
import { connect } from 'react-redux';
import { editSmurf } from '../actions';

class SmurfCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    pickSmurf = () => {
        const Smurf = this.props.smurfs.find(smurf => smurf.id == this.props.match.params.id);
        this.setState({
            age: Smurf.age,
            name: Smurf.name,
            height: Smurf.height
        })
    }

    handleInput = event => {
        event.preventDefault();
    
        if(event.target.name === 'age') {
          this.setState({
          age: Number(event.target.value)
          })} 
        else if (event.target.name === 'name'){
          this.setState({
              name: event.target.value
        })} else {
              this.setState({
                  height: event.target.value
        })}
      }
    
    editSmurf = (id, event) => {
        event.preventDefault();
        this.props.editSmurf(id.id, this.state);
        console.log('editSmurf id', id.id);
        console.log('editSmurf state', this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }
    
    render() {
        return (
            <div>
               <button onClick={this.pickSmurf}>Find Smurf</button> 
                <h3>Name: {this.state.name}</h3>
                <h4>Age: {this.state.age}</h4>
                <h5>Height: {this.state.height}</h5>
                <form>
                    <input type="text" name="name" placeholder={this.state.name} onChange={this.handleInput}/>
                    <input type="text" name="age" placeholder={this.state.age} onChange={this.handleInput}/>
                    <input type="text" name="height" placeholder={this.state.height} onChange={this.handleInput}/>
                    <input type="submit" onClick={(event) => this.editSmurf(this.props.match.params, event)}/>
                </form>

            </div>
        )
    } 
}

export default connect(null, {editSmurf})(SmurfCard); 