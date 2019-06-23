import React, {Component} from 'react';
import './forms.css'

class SmurfForm extends Component{
    constructor(props){
    super(props);
    this.state={
        smurf:{
            name:'',
            age: '',
            height:''
        }
        
    }
    }

changeHandler = e => {
    this.setState({
        smurf: {
            ...this.state.smurf,
            [e.target.name]: e.target.value
        }
    })
}

addSmurfHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf)
}

render(){
    return(
        <div className='submit-form'>
            <input name='name' type='text' placeholder='Name' value=            {this.state.smurf.name} onChange={this.changeHandler}/>
            <input name='height' type='text' placeholder='Height' value=        {this.state.smurf.height} onChange={this.changeHandler}/>
            <input name='age' type='text' placeholder='Age' value=              {this.state.smurf.age} onChange={this.changeHandler}/>
            <button className="submit" onClick={this.addSmurfHandler}>Submit</button>
        </div>
    )
}
}

export default SmurfForm;