import React, {Component} from "react";
import {connect} from 'react-redux';
import deleteSmurfActionCreator from './deleteSmurf'


class  ListOfSmurfs extends Component{   
       render(){
      return (
          <div>
          {this.props.s.map( smurf =>{
              console.log('o',smurf)
               return(<div>
                   <div>{smurf.name}</div>
                   <div>{smurf.age}</div>
                   <div>{smurf.height}</div>
                   <button onClick={() => { this.props.deleteSmurfActionCreator(smurf.id) }}> Delete Smurf</button>
                     </div>)})}
          </div>)             
      }
        }
const mapStateToProps = (state)=>{
    console.log('bilal',state.smurfsReducer.smurfs)
  return {
      s: state.smurfsReducer.smurfs
  }
}
export default connect(mapStateToProps, { deleteSmurfActionCreator})(ListOfSmurfs)