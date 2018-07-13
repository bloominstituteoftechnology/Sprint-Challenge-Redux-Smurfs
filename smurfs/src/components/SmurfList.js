import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, killSmurf } from '../actions';

const URL = 'http://localhost:3333/smurfs/';

class SmurfList extends Component {
    componentDidMount() {
        this.props.getSmurfs(URL);
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
                            <button type="button" onClick={() => this.props.killSmurf(URL, smurf.id)}>Kill Smurf</button>
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

export default connect(mapStateToProps, { getSmurfs, killSmurf })(SmurfList);