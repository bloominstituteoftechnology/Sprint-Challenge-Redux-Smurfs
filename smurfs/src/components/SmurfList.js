import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfList extends Component {
    componentDidMount() {
        this.props.getSmurfs('http://localhost:3333/smurfs/');
    }

    render() {
        return (
            <React.Fragment>
                {this.props.fetchingSmurfs ? (
                    <h1>... loading smurfs ...</h1>
                ) : (
                <React.Fragment>
                    {this.props.smurfs.map(smurf => {
                        return <div className='smurf' key={smurf.name}>
                            <ul>
                                <li>Name: {smurf.name}</li>
                                <li>Age: {smurf.age}</li>
                                <li>Height: {smurf.height}</li>
                            </ul>
                        </div>
                    })}
                </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);