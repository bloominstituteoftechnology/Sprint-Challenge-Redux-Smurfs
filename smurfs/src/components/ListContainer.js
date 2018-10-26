import React from 'react'
import { fetchSmurfs } from '../actions/index'
import { connect } from "react-redux";
import Smurf from '../components/Smurf'


class ListContainer extends React.Component {

    componentDidMount(){
        this.props.fetchSmurfs();
    }
    handleDeleteSmurf = (event,id) =>{
        event.preventDefault();
    }
    render(){
        console.log('this.props',this.props)
        if(this.props.fetchingSmurfs){
            return <h1>FETCHING!!!</h1>
        } else {
            return (
                <div>
                    {
                        this.props.smurfsList.map(el=>{
                           return <Smurf key={el.id} data={el}/>
                        })
                    }
                </div>
            )
        }

    }
}


const mapStateToProps = state => {
    console.log('state = ', state)
    return {
        fetchingSmurfs:state.fetchingSmurfs,
        smurfsList:state.smurfs
    };
  };

  export default connect(mapStateToProps,{ fetchSmurfs })(ListContainer);
  
