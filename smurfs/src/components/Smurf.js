import React, { Component } from 'react';
// import { connect } from 'react-redux'; 
// import { getSmurfs, updateSmurf } from '../actions';

class Smurf extends Component {
  render() {
    const { name, age, height } = this.props.smurf;  // destructure our smurf object from props 
    console.log(name, age, height);
    return (
      <div>
        {/* making a Smurf profile */}
        Name: {name} 
        Height: {height}
        Age: {age}
      </div>
    );
  }
}

export default Smurf;


// class Smurf extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       age: '',
//       height: '',
//       id: '',
//       edit: false
//     }
//   }

//   componentDidMount() {
//     const { name, age, height, id } = this.props.smurf;
//     this.setState({ name, age, height, id} )
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name] : event.target.value})
//   }

//   handleUpdate = (id, smurf) => {
//     const { name, age, height, id, edit } = this.state;
//     const newUpdate = { name, age, height, id, edit};
//     this.props.updateSmurf(newUpdate);    
//     this.setState({
//       name: '',
//       age: '',
//       height: '',
//       id: '',
//       edit: false
//     });
//   }

//   render () {
    
//     return (
//       <div>
//         {edit ? (
//           <form>
//             <input 
//               onChange={this.handleChange}
//               name="name"
//               placeholder="name"
//               value={this.state.name} 
              
//             />
//             <input 
//               onChange={this.handleChange}
//               name="age"
//               placeholder="age"
//               value={this.state.age} 
              
//             />
//             <input 
//               onChange={this.handleChange}
//               name="height"
//               placeholder="height"
//               value={this.state.height}
//             />
//             <div>
//               <button onClick={this.handleUpdate(id, { name, age, height })}>Save</button>
//             </div>
//           </form>
//         ) : (
//           <div>
//             <h3>{name}</h3>
//             <h3>{age}</h3>
//             <h3>{height}</h3>
//             <button className="edit" onClick={this.handleUpdate({ edit: true })}>Edit</button>
//           </div>
//       )}
//       </div>
//     ); 
//   }
// } 

// export default connect(null, {getSmurfs, updateSmurf })(Smurf);