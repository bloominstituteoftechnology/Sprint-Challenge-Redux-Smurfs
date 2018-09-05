import React from 'react';
import { connect } from 'react-redux'
import Smurf from './Smurf'
import { deleted, updated } from '../actions';


const SmurfList = (props) => {
    console.log("SL props", props)
    let values = {
        name: props.name,
        age: props.age,
        height: props.height
    }
    return (
        <div>
            {props.smurfs.map(e => {
                return (
                    < div className="smurf" >
                        <Smurf key={e.id} id={e.id} name={e.name} age={e.age} height={e.height} deleted={props.deleted} values={values} updated={props.updated} />
                    </div>
                );
            })}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfReducer.smurfs,
        fetching: state.smurfReducer.fetchingSmurfs,
        name: state.form.smurf.values.name,
        age: state.form.smurf.values.age,
        height: state.form.smurf.values.height,

    }
}


export default connect(mapStateToProps, { deleted, updated })(SmurfList);