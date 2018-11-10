import React from "react";
import { connect } from "react-redux";
import { FETCHING, SUCCESS, FAILURE, fetchSmurfs } from '../actions';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        if (this.props.fetching) {
            return (<h3>Loading Smurfs...</h3>)
        }
        return (
            <div className="SmurfList">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <ul>
                    {this.props.smurfs.map(smurf => {
                        return <p>{smurf.name} is {smurf.age} years old, and {smurf.height} tall!</p>;
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetching
    }
}

export default connect(mapStateToProps, { FETCHING, SUCCESS, FAILURE, fetchSmurfs })(SmurfList);