import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class SmurfsList extends Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.error ? <div>GARGAMEL! There was an error.</div> : (
                    <div>
                        {this.props.fetchingSmurfs ? <div>Almost there smurfs...</div> : null}
                    </div>
                )}
                
                {this.props.addingSmurfs ? (
                    <div>Registering new smurf...</div>                    
                ) : (
                    <div>
                        {this.props.smurfs.map(smurf => {
                            return (
                                <div key={smurf+smurf.id}>
                                    <h3><strong>{smurf.name}</strong></h3>
                                    <p>{smurf.age} Smurf years old</p>
                                    <p>{smurf.height} short</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurfs: state.addingSmurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);