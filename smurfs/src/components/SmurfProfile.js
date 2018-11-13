/*import React,{ Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux'

import Smurf from './Smurf';
import UpdateForm from './updateForm';

class SmurfProfile extends Component {
    constructor(props){
      super (props)
    }
      
    render() {
        let friends = this.props.smurfs.filter(item => {
          console.log(item)
            return item.id === parseInt(this.props.match.params.id)
          })[0];
        
        return (
           
     <div className='smurfcard'> 
     <UpdateForm />
     <Smurf />
     </div>
    )
        
}}

const mapStateToProps = state =>{
  return{
    smurfs : state.smurfs
  }
  
}

export default connect(mapStateToProps)(SmurfProfile) 
*/