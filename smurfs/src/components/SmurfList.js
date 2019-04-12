import React from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'net';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className='smurf-list'>
             {this.props.smurfs.map(smurf =>
               <div key={smurf.id}>
                <h2>Name: {smurf.name}</h2>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
               </div> 
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs}) (SmurfList);