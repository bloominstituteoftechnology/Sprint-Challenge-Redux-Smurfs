import React, {Component} from 'react';
import { add } from '../actions';
import { connect } from 'react-redux';


class Addform extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            age: null,
            height: null, 
        }
    }
   
    saveSmurf = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {

        return (
            <div>
                {this.props.adding ? (
          <div className="formy2">Traveling..<i className="fas fa-spinner fa-pulse"></i></div>
        ) : (
                <form className="formy" onSubmit=
                {(event)=> {
                event.preventDefault(); 
                this.props.add(this.state);
                }}>
                    <h2>Join da Village</h2>
                    <input name="name" onChange={this.saveSmurf} placeholder="Name" />
                    <input name="age" onChange={this.saveSmurf} placeholder="Age" />
                    <input name="height" onChange={this.saveSmurf} placeholder="Height" />
                    <button type="submit">Enter!</button>
        </form>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        adding: state.adding,
        error: state.error

    };
  };
  
  export default connect(mapStateToProps, {add})(Addform);

