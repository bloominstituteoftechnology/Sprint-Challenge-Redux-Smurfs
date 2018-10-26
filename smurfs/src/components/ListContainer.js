import React from 'react'
import { fetchSmurfs } from '../actions/index'
import { connect } from "react-redux";
// import styled from 'styled-components';

// const Loading = styled.h1`
//     font-size:4rem;
// `

class ListContainer extends React.Component {

    componentDidMount(){
        this.props.fetchSmurfs();
    }
    handleDeleteSmurf = (event,id) =>{
        event.preventDefault();
    }
    render(){
        if(this.props.fetchingSmurfs){
            return <h1>FETCHING!!!</h1>
        } else {
            return (
                <div>
                    {
                        this.props.smurfsList.map(el=>{
                            <div></div>
                        })
                    }
                </div>
            )
        }

    }
}


const mapStateToProps = state => {
    return {
        fetchingSmurfs:state.fetchingSmurfs,
        smurfsList:state.smurfs
    };
  };

  export default connect(mapStateToProps,{ fetchSmurfs })(ListContainer);
  
