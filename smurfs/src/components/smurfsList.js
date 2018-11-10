import React from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/index';

import Smurf from ''

class SmurfsList extends React.Component {

    componentDidMount(){
        this.props.fetchSmurfs();
    }
    render(){
        return(
            <div>
                {this.props.smurfs.map(item=> 
                    <Smurf key={item.id} smurf={item} />
                )}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
