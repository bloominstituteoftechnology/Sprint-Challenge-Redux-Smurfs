import React, { Component } from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfForm from './SmurfForm';


class SmurfsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getSmurfs();
    }
    render() { 
        return (
            <div>
                {this.props.smurfs.map((smurf) => {
                    return (
                        <div key={smurf.id}>
                            <SmurfCard smurf={smurf} />
                            {this.props.edit && <SmurfForm smurf={smurf}/>}
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    console.log("mapStateToProps List", state);
    const props = state;
    return props;
} 

export default connect(mapStateToProps, { getSmurfs })(SmurfsList);