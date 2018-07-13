import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class Smurfs extends React.Component {
    handleDelete = (e) => {
        console.log(e.target.id);
        this.props.deleteSmurf(e.target.id)
    }
    render() {
        return (
            <ul className='smurfs-list'>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div key={smurf.name} className='smurf-card'>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                            <button id={smurf.id} onClick={this.handleDelete}>X</button>
                        </div>    
                    )
                })}
            </ul>
        );    
    }
}

const mapStateToProps = state => {
    return {

    }
}
 
export default connect(mapStateToProps, { deleteSmurf })(Smurfs);