import React, {Component} from "react";
import {connect} from 'react-redux';
import deleteSmurfActionCreator from './deleteSmurf'
import { updateSmurfActionCreator} from './updateSmurf'

class  ListOfSmurfs extends Component{  
        constructor(props){
        super(props) 
         
        this.state={
         update:false,
         upDatedSmurf:'',
         upDatedAge:'',
         upDatedHeight:''
        }
        }   
     upDateHandler =()=>{
         this.setState({update:!this.state.update})
        }
    smurfUpdateHandler = (event)=>{
     this.setState({[event.target.name]:event.target.value})
    }    
       render(){
       console.log('this.props',this.props)
      return (
          <div>
          {this.props.s.map( smurf =>{
              console.log('o',smurf)
               return(<div>
                   <div>{smurf.name}</div>
                   <div>{smurf.age}</div>
                   <div>{smurf.height}</div>
                   <button onClick={() => { this.props.deleteSmurfActionCreator(smurf.id) }}> Delete Smurf</button>
                   <button onClick={() =>{this.upDateHandler(this.state.update)}}>Update Smurf</button>
                    { this.state.update ? <div>
                                <input type='text'
                                    placeholder='update smurf'
                                    name="upDatedSmurf"
                                    value={this.state.upDatedSmurf}
                                    onChange={this.smurfUpdateHandler}
                                />
                                <input type='text'
                                    placeholder='update age'
                                    name="upDatedAge"
                                    value={this.state.upDatedAge}
                                    onChange={this.smurfUpdateHandler}
                                />
                                <input type='text'
                                    placeholder='update height'
                                    name="upDatedHeight"
                                    value={this.state.upDatedHeight}
                                    onChange={this.smurfUpdateHandler}
                                 />
                                
                       <button onClick={() => { this.props.updateSmurfActionCreator({ id: smurf.id, name: this.state.upDatedSmurf,
                           age: this.state.upDatedAge, height: this.state.upDatedHeight
                       }, this.setState({
                           upDatedSmurf: '', upDatedAge: '', upDatedHeight: ''
                       }) )}}>Save</button>
                    </div> : null}
                     </div>)})}                
          </div>)             
      }
        }
const mapStateToProps = (state)=>{
    console.log('bilal',state)
  return {
      s: state.smurfsReducer.smurfs
  }
}
export default connect(mapStateToProps, { deleteSmurfActionCreator, updateSmurfActionCreator})(ListOfSmurfs)