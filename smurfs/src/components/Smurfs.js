import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class Smurfs extends React.Component {
    constructor(){
        super();
    }

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf =>
                    <div>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);