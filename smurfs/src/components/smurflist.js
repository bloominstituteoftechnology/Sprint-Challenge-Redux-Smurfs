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
                {this.props.error ? <div>Sorry, there is an error.</div> : (
                    <div>
                        {this.props.fetching? <div>Fetching Smurfs..</div> : null}
                    </div>
                )}
                
                {this.props.adding ? (
                    <div>Adding new smurf...</div>                    
                ) : (
                    <div>
                        {this.props.smurfs.map(smurf => {
                            return (
                                <div key={smurf+smurf.id}>
                                    <h3><strong>{smurf.name}</strong></h3>
                                    <p>{smurf.age} Smurf years old</p>
                                    <p>{smurf.height} tall</p>
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
        fetching: state.fetching,
        adding: state.adding,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);