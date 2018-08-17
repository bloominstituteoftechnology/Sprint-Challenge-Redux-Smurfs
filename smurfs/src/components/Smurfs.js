import React from 'react';
import { connect } from "react-redux";
import { deleteSmurf } from '../actions';

class Smurf extends React.Component{
    render() {
        // console.log(this.props.smurf)
        let smurf = this.props.smurf;
        return (
            <div className="Smurf">
                <div className="info">
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
                <button onClick={()=>this.props.deleteSmurf(smurf.id)}>delete</button>
            </div>
        )
    }    
    
    
}

const mapStateToProps = state => {
    // console.log(state);
    return ({
    })    
}

export default connect(
    mapStateToProps,
    { deleteSmurf } 
  )(Smurf);
