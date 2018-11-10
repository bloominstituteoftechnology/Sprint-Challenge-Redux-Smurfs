import React from "react"
import {connect} from "react-redux";
import {getSmurfs} from "../actions/index";
import Smurf from "./Smurf"
import AddSmurfForm from "./AddSmurfForm"
import UpdateSmurfForm from "./UpdateSmurfForm"

class SmurfList extends React.Component {
   componentDidMount() {
      this.props.getSmurfs()
   }

   render(){
      return (
         <div>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            {this.props.loading ? <h2> Loading Smurfs...</h2> : null}
            {this.props.error !== null ? <h2>{this.props.error}</h2> : null}
            {this.props.smurfs.length > 0 ? <h2>Welcome to Smurf Village!</h2> : null}
            {this.props.smurfs.map(smurf => {
               return <Smurf key={smurf.name} smurf={smurf} />
            })}
            <AddSmurfForm />
            <UpdateSmurfForm />
         </div>
      )
   }
}

const mapState = state => {
   return {
      smurfs: state.smurfs,
      loading: state.loading,
      error: state.error
   }
}

export default connect(mapState, {getSmurfs})(SmurfList)