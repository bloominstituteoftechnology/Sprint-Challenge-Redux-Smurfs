import React from 'react';

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          age: '',
          height: ''
        };
    }

    render() {
        return (
          <div className="SmurfForm">
            <form onSubmit={this.addSmurf}>
              <input
                onChange={this.updateName}
                placeholder="name"
                value={this.state.name}
              />
              <input
                onChange={this.updateAge}
                placeholder="age"
                value={this.state.age}
              />
              <input
                onChange={this.updateHeight}
                placeholder="height"
                value={this.state.height}
              />
              <button type="submit">Add to the village</button>
            </form>
          </div>
        );
    }

    
    
      // Add a post request here
      addSmurf(event) {
        event.preventDefault();
        console.log('here');
        // add code to create the smurf using the api
    
        // Make a copy of the added smurf
        const smurf = this.state;
    
        this.addSmurf(smurf);
      }
    
      addSmurf = (smurf) => {
          console.log(smurf);
        //  // do a post request, sending the smurf object
        //  axios.post(`http://localhost:3333/smurfs`, smurf).then(response => {
        //   console.log(response.data);
        //   // reset the state to empty smurf
        //   this.setState({
        //     name: '',
        //     age: '',
        //     height: ''
        //   });
        // }).catch(error => {
        //   // TBD erro handling
        // });
      }
    
      updateName = (event) => {
        this.setState({
          name: event.target.value
        });
      }
    
      updateAge = (event) => {
        this.setState({
          age: event.target.value
        });
      }
    
      updateHeight = (event) => {
        this.setState({
          height: event.target.value
        });
      }
};
export default SmurfForm;