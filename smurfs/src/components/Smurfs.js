import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class Smurfs extends React.Component {
    
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map((smurf) =>
                    <div>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                        {/* <li key={smurf.id}>{smurf.text}</li> */}
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

/* const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
); */

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);