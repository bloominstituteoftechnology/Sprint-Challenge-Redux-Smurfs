import React, { Component } from 'react';

class CreateSmurfForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    componentDidUpdate(prevprops){
        let editFriend= this.props.editFriend;
        console.log(editFriend);
        if(!(prevprops.editFriend === editFriend)){
        if(editFriend.name){
            this.setState({
            name: editFriend.name,
            age: editFriend.age,
            height: editFriend.height
            })
            return;
        }
    }
    }

    changeHandler = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      submitHandler = ev => {
          let newSmurf = {...this.state, age: parseInt(this.state.age)}
          ev.preventDefault();
          if(!this.props.editFriend.name){
            this.props.addSmurf(newSmurf);
          }else{
            let getSmurf = {}
            for(let key in newSmurf){
                if(!(newSmurf[key] === this.props.editFriend[key])){
                    getSmurf[key] = newSmurf[key]
                }
            }
              this.props.updateToList(this.props.editFriend.id, getSmurf);
          }
          
          this.setState({
            name: '',
            age: '',
            height: ''
          })
      }
  
    render() {
      
      return (
        
         <form onSubmit={this.submitHandler}>
            <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
          />
            <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.height}
            placeholder="height"
          />
          <button>{this.props.editFriend.name ? 'Edit Smurf' : 'Add Smurf'}</button>
             
         </form>
        
      );
    }
  }
  
export default CreateSmurfForm;