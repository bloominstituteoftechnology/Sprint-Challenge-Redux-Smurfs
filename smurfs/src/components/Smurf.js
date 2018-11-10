import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
    const { smurf, deleteSmurf } = props;

    const clickHandler = () => {
        deleteSmurf(smurf.id)
    }
    
    return (
        <div className="friend-container-outside">
            <div className="friend-container-inside" key={smurf.id}>
                <h2>{smurf.name}</h2>
                <h4>{smurf.age}</h4>
                <p>{smurf.height}</p>
                <div className="action-row">
                    {/* <Link to={`/update/${div.id}`}><button className="button button-outline">Update</button></Link> */}
                    <button className="button button-clear" onClick={clickHandler}>Delete</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, { deleteSmurf })(Smurf)