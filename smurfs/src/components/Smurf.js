import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteSmurfs, updateSmurf } from '../actions';


class Smurf extends Component {
     constructor(props) {
         super(props);

         this.state = {
             name: '',
             age: '',
             height:'',
             id:''
         }
     }
    
    // componentDidMount() {
    //     const { smurf } = this.props;
    //     this.setState(smurf);
    // }

     clickHandler = () => {
          this.props.deleteSmurfs(this.props.smurf.id);
     }
     inputChange= e => {
        this.setState({[e.target.name]: e.target.value, id: this.props.id})
      }
    
      submitHandler = (event) => {
        event.preventDefault();
        
        
        console.log(this.state)
        if(event.target.classList.contains("editButton")) {
            if(event.target.parentNode.previousElementSibling.style.display === '') {
                    event.target.parentNode.previousElementSibling.style.display = "block"; 
                    if(event.target.innerHTML === 'Edit') {
                        event.target.innerHTML = 'Save';
                      }  
            } else {
                   event.target.parentNode.previousElementSibling.style.display = '';
                    if(event.target.innerHTML === 'Save') {
                        event.target.innerHTML = 'Edit';
                        this.props.updateSmurf(this.state)
                      }  
            }
        }  
         this.setState({ name: "", age:"", height:""})
      
      }
    render() {  
        const { smurf } = this.props;
    //    console.log(this.state)
    return(
        <div className="cardStyle">      
           <h2>Name: {smurf.name}</h2>
           <p>Age: {smurf.age}</p>
           <p>Height: {smurf.height}</p>
           <p>Id # {smurf.id}</p>
           <form  className="update-form">
                <input type='text' name="name"
                       placeholder="Name" 
                       className="update-input" 
                       value={this.state.name} 
                       onChange={this.inputChange} /> 
                <input type='text'  name="height" 
                       placeholder="Height"
                       className= "update-input" 
                       value={this.state.height} 
                        onChange={this.inputChange} /> 
                <input  type="text" name="age" 
                        placeholder="Age"
                        className="update-input" 
                        value={this.state.age} 
                        onChange={this.inputChange} /> 
           </form>
            <div className = "update">         
                {/* <input type="button" className='button' value="Delete" onClick={this.clickHandler} />
                <input type="button" className='editButton' value="Edit" onClick={this.submitHandler} /> */}
                <span className="button" onClick={this.clickHandler}>Delete</span>
                 <span className="editButton" onClick={this.submitHandler}>Edit</span>
            </div>
          </div>
  
        
         );
    } 
}
// export default Smurf;

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {deleteSmurfs, updateSmurf})(Smurf);