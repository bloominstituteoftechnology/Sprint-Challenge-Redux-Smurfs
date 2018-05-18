import React from "react";
import { connect } from "react-redux";
import { getSmurfs, deleteSmurf, editSmurf} from "../actions";

class SmurfsList extends React.Component {
  constructor() {
    super();
    this.state = {
      updateName: "",
      updateAge: "",
      updateHeight: ""
    };
  }
  componentDidMount() {
    this.props.getSmurfs();
  }

   handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleEdit = (id) => {
    return (e) => {
      e.preventDefault();
      let updateSmurf = {
        name: this.state.updateName,
        age: this.state.updateAge,
        height: this.state.updateHeight,
        id: id
      };
      this.props.editSmurf(updateSmurf);
      this.setState({updateName:"", updateAge: "", updateHeight: ""});
    }
  }

  render() {
    return (
      <div >
        {this.props.error ? <div>{this.props.error}</div> : null}
        {this.props.gettingSmurfs ? <div>{this.props.gettingSmurfs}</div> : null}
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
              <form onSubmit={this.handleEdit(smurf.id) }>
                <input
                  placeholder="Edit Name"
                  name="updateName"
                  required
                  onChange={this.handleInputChange}
                />
                <input
                  placeholder="Edit Age"
                  name="updateAge"
                  type="number"
                  required
                  onChange={this.handleInputChange}
                />
                <input
                  placeholder="Edit Height"
                  name="updateHeight"
                  required
                  onChange={this.handleInputChange}
                />
                <button>Update Smurf</button>
              </form>
              <button onClick={()=>this.props.deleteSmurf(smurf)}>Delete</button>
            </div>
          )
        })}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps,{getSmurfs, deleteSmurf, editSmurf})(SmurfsList);