import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfFormView from '../view/SmurfFormView.js';

import '../index.css';


class SmurfListView extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="smurfListBox">
                {this.props.grabbingSmurfs ? <h2>Grabbing as many Smurfs as we can...</h2> : null}
                { !this.props.grabbingSmurfs && this.props.smurfs.length ? 
                <ul>
                    {this.props.smurfs.map(smurf =>
                        <li key={smurf.name} className="smurfInfoBox">
                            <h2>{smurf.name}</h2>
                            <p>Smurf Height: {smurf.height}</p>
                            <p>Smurf Age: {smurf.age}</p>
                        </li>
                    )}
                </ul> : null
                } 
                <SmurfFormView />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs

});
export default connect(mapStateToProps, { getSmurfs })(SmurfListView);
//if we are fetching, render these words..if we are not grabbing smurfs and if we have smurfs in our props then we are going to...
