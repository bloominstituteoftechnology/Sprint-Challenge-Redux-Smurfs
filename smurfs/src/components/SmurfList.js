import React from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
         <div>
            <div className='smurf-list'>
             {this.props.smurfs.map(smurf => (
               <div key={smurf.id}>
                <h2>Name: {smurf.name}</h2>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
               </div> 
              ))}
            </div>
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

export default connect(mapStateToProps, {getSmurfs})(SmurfList);