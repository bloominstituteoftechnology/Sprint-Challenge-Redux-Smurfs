import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { gettingSmurf, deleteSmurf, updateSmurf } from '../actions';
import SmurfForm from './SmurfForm';
import EditSmurf from './EditSmurf';

class App extends Component {
    constructor(props) {
      super(props);
      this.state ={
        showEditForm: false,
        name: '',
        age: '',
        height: '',
      }
    }
     
  componentDidMount() {
    this.props.gettingSmurf();
  }

  editChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  updateSmurf = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name, 
      age: this.state.age, 
      height: this.state.height
  }
  this.props.updateSmurf(smurf);
  this.setState({showForm: false, smurf: smurf})
  }

 toggleForm=()=> {
   this.setState({ showEditForm: !this.state.showEditForm })
 }

  deletedSmurf = (id) => {
    console.log('clicked id: ', id)
    this.props.deleteSmurf(id)
  }

  render() {
    console.log('checking props: ', this.props)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <div>
          {this.props.smurfs.map(item => {
            return ( 
               <div key={item.name} className='cardWrappers'> 
                     <p> Name: {item.name} </p>
                     <p> Age: {item.age} </p>
                     <p> Height: {item.height} </p>
                     <p> Id: {item.id} </p>
                     {this.state.showEditForm ? (
                    <EditSmurf
                    updateSmurf={this.updateSmurf}
                      smurf={item}
                      editChanges={this.editChanges}
                    />
                    ) : null}
                     <button onClick={this.toggleForm}>Update</button>
                     <button onClick={() => this.deletedSmurf(item.id)}> X </button>
               </div>)
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('our state in map: ', state)
  console.log('our smurf in map: ', state.smurfs)

  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, { gettingSmurf, deleteSmurf, updateSmurf }) (App);
