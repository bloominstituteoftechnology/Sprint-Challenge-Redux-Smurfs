import React from "react";

const CreateSmurfForm = props => {
  return (
      <form>
            <input
              type="text"
              name='name'
              placeholder='Smurf Name'
              onChange={props.handleNewSmurf}
            />
             <input
              type="text"
              name='age'
              placeholder='Smurf Age'
              onChange={props.handleNewSmurf}
              />
            <input
              type="text"
              name='height'
              placeholder='Smurf Height'
              onChange={props.handleNewSmurf}
            />           
            <button
               type='button'
              onClick={() => {
                props.createSmurf(props.smurf);
              
              }} >
              CrEaTe SmUrF </button>
          </form>
            );
          };

export default CreateSmurfForm

// onClick={() => {
//   this.props.createSmurf({smurf: this.state.smurf});
//   this.setState({ smurf: '' }); }}