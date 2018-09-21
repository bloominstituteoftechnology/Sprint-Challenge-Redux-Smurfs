import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';

function Smurf(props) {
    if (!props.smurfs || !props.smurfs.length) {
        return <h1>Gargamel has stolen your smurfs! :( Go fetch them!</h1>
    }
    return <div className="smurfs-list-wrapper">
            <div className="smurf-card" key={props.smurf.id}>
                {props.smurf.name}
                {props.smurf.age}
                {props.smurf.email}
                <div>X</div>
            </div>
        ))}
    </div>;
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(Smurf);