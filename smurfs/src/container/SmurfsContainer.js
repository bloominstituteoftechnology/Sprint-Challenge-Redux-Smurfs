import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {smurfFetcher, smurfUpdater, smurfDeleter, smurfEditer} from '../actions';
import SmurfsList from '../components/SmurfsList';
import InputForm from '../components/InputForm';

class SmurfsContainer extends Component {
    constructor(){
        super();
        this.state={
            id: null,
            name: '', 
            age: null,
            height: '',
        }
    }

componentDidMount () {
    this.props.actions(); 
}

inputChangeHandler = (e) => {
   this.setState({[e.target.name]: e.target.value})
}

onSubmitAddHandler = (e) => {
    e.preventDefault(); 
    this.props.smurfUpdater(this.state)
}

smurfDeleter = (e) => {
    e.preventDefault(); 
    this.props.smurfs.map(smurf => {
        if(smurf.name === this.state.name){
            return this.props.smurfDeleter(smurf.id)
        } else return null;
    });
}

smurfEditer = (e) => {
    e.preventDefault(); 
    const editedSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    }

    this.props.smurfEditer(this.state.id, editedSmurf)
}

    render(){
        return(
            <div>
                <SmurfsList 
                    smurfs={this.props.smurfs} 
                />
                <InputForm
                    newSmurf={this.state.newSmurf}
                    onSubmitAddHandler={this.onSubmitAddHandler}
                    inputChangeHandler={this.inputChangeHandler}
                    smurfDeleter={this.smurfDeleter}
                    smurfEditer={this.smurfEditer}
                />
            </div>
        )
    }
}

const mapStatetoProps = state =>({
    smurfs: state.smurfs
});

export default connect(mapStatetoProps, {
    actions: smurfFetcher, smurfUpdater, smurfDeleter, smurfEditer
    })(SmurfsContainer);



