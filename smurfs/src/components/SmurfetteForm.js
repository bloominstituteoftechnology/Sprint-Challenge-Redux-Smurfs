import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurfs } from '../actions';


export class SmurfetteForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        
            name: '',
            age: '',
            height: ''
            
      };
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
      this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    handleOnSubmit(event) {
        event.preventDefault();
        const newSmurfette = {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        }
        this.props.addSmurfs(newSmurfette);
        
        this.setState({ 
            name: '',
            age: '',
            height: ''
        })
    }

    handleOnChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        //let newMember = this.state.newSmurfette;
        //newMember[name] = value;
        this.setState({
            [name]: value
        })
    }
   
  
    render() {
      return (
        <div className="SmurfForm">
          <form onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}>
            <input
              placeholder="name"
              value={this.state.name}
              name='name'
            />
            <input
              placeholder="age"
              value={this.state.age}
              name='age'
            />
            <input
              placeholder="height"
              value={this.state.height}
              name='height'
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {};
}
  
export default connect(mapStateToProps, { addSmurfs })(SmurfetteForm);