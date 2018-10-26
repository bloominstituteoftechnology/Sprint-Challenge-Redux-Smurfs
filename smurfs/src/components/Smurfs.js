import React, {Fragment} from 'react';
import { connect } from "react-redux"
import { updateSingleSmurf, toggleShowUpdate } from "../actions"
import UpdateSmurfForm  from  "../components/UpdateSmurfForm"

class Smurfs extends React.Component {
    constructor(props) {
        super(props);
    }
    handleShowSmurf = smurf => {
        this.props.updateSingleSmurf(smurf)
    }

    toggleShowUpdate = () => {
        this.props.toggleShowUpdate();
      };

    render() {
    return (
        <Fragment>
            {this.props.smurfs.map(smurf => (
                <ul>
                    <h4>{smurf.name}</h4>
                    <h4>{smurf.age}</h4>
                    <h4>{smurf.height}</h4>
                </ul>
            ))}
            {this.props.showUpdate ? (
          <UpdateSmurfForm smurf={this.props.smurfSelected} />
        ) : null}
        </Fragment>
    )
}
}

const mapStateToProps = state => {
    return {
        smurfSelected: state.singleSmurfReducer.smurfSelected,
        showUpdate: state.singleSmurfReducer.showUpdate
    }
}

export default connect(mapStateToProps, { updateSingleSmurf, toggleShowUpdate })(Smurfs)

