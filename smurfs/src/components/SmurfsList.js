import React from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class SmurfsList extends React.Component {
    
    componentDidMount(){
        
        this.props.fetchSmurfs();
    }

    render(){
        return(
            <div>
                <h2>smurfs list</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        fetchingSmurfs: state.fetchingSmurfs
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);