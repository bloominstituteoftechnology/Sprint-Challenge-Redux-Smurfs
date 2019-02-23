import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
import {Link} from 'react-router-dom';


class SmurfProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            smurf: []
        }
    }

    componentDidMount(){
        const smurf = this.props.smurfs.find(item => `${item.id}` === this.props.match.params.id);
        this.setState({
            smurf: smurf
        })
    }

    deleter = (e) => {
        console.log('delete them');
        console.log(this.state.smurf.id)
        this.props.deleteSmurf(this.state.smurf.id)
    }

    render(){
        if(!this.state.smurf) return null;
        console.log(this.state)
        return(
            <div>
                <h1>{this.state.smurf.name}</h1>
                <p>Age: {this.state.smurf.age}</p>
                <p>Height: {this.state.smurf.height}</p>
                <Link to={`/smurfs/${this.state.smurf.id}/update`}><button>Update Smurf</button></Link>
                <Link to="/smurfs"><button onClick={this.deleter}>Kick Out {this.state.smurf.name}</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    smurfs: state.smurfs,
    }
  };
  
export default connect(mapStateToProps, { deleteSmurf })(SmurfProfile);
