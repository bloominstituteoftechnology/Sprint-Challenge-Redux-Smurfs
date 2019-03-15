import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf } from '../actions';
import Smurf from './Smurf'

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
                        return <Smurf
                        key={smurf.id}
                        id={smurf.id}
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                        onDeleteClick={this.props.onDeleteClick}
                        />
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetchingSmurfs
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         onDeleteClick: id => dispatch(deleteSmurf(id)),
//         fetchSmurfs: dispatch(fetchSmurfs())
//     })
// }

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);