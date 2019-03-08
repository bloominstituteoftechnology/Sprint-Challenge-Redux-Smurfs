import React from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs, deleteSmurf } from '../actions';

class SmurfsList extends React.Component {
    
    componentDidMount(){
        
        this.props.fetchSmurfs();
    }

    render(){
        return(
            <div>

                {console.log(this.props.smurfs)}
                {this.props.smurfs.map(smurf => {
                    return(
                        <div className="indiv-smurf" key={smurf.id}>
                            <h2>name: {smurf.name}</h2>
                            <p>age: {smurf.age}</p>
                            <p>height: {smurf.height}</p>

                            <button 
                            id={smurf.id}
                            onClick={e => {
                                e.preventDefault();
                                console.log(e.target.id);
                                this.props.deleteSmurf(e.target.id);
                            }}
                            type="text">x</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return{
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(SmurfsList);