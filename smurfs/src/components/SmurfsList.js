import React from "react"
import {connect} from "react-redux";


class SmurfsList extends React.Component {
    constructor(){
        super();
    }

    render() {
        console.log(this.props.smurfs)
        return (
            <div>
                <h2>SMURFS LIST</h2>
                {/* {this.props.smurfs.map(smurf => {
                    return smurf;
                })} */}
            </div>
        )
    }
  
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    {}
)(SmurfsList);
