import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions'
import Smurf from './Smurf';

class ListSmurfs extends Component {
    componentDidMount () {
        getSmurfs();
    };

    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <Smurf
                                name={smurf.name}
                                age={smurf.age}
                                height={smurf.height}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        smurfs: state.smurfs
    };
}

export default connect(mapStateToProps, { getSmurfs })(ListSmurfs);