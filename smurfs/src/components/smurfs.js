import React from 'react';
import { connect } from 'react-redux';


import './smurfs.css';

class Smurfs extends React.Component {
    render() {
        return (
            <div className="Smurfs">
                {this.props.smurfs.map(smurf => 
                    <div className="Smurfs__Smurf" key={smurf.id}>
                        {smurf.name}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {})(Smurfs);