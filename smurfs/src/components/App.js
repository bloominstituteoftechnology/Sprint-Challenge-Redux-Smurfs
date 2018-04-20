import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SmurfsList from './Smurfs';
import SmurfEdit from './SmurfEdit'


import { fetchSmurf, deleteSmurf, updateSmurf, saveSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const mainSt = {
	// display: 'flex',
	// justifyContent: 'center',
	// width: '100%'
	marginLeft: '33%',
	width: '100%'
}
// const headSt = {
// 	marginLeft: '33%',
// 	color: 'blue',
// 	// border: '2px solid yellow',
// 	width: '30%',
// 	textAlign: 'center'
// }
const fstyle = {
	border: '2px solid black',
	listStyleType: 'none',
	width: '30%',
	// marginLeft: '33%'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      Name: '',
      Age: '',
      Height: '',
      showUpdateForm: false
    };
  }
  componentDidMount() {
    this.props.fetchSmurf();

    // this.getAJAX()
    this.setState({ lists: {...this.props.smurfs} });
  }
  getAJAX = () => {
    this.props.fetchSmurf();
  }

  // showUpdateForm = () => {
	// 	this.setState({ showUpdateForm: !this.state.showUpdateForm });
	// };


  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const list = { name: this.state.Name, height: this.state.Height, age: this.state.Age };
    this.props.saveSmurf(list);
    // this.setState({ Name: '', Email: '', Age: '' });
    this.setState({
      Name: '',
      Age: '',
      Height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App" >
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.Name}
            name="Name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.Age}
            name="Age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.Height}
            name="Height"
          />
          <button type="submit">Add to the village</button>

        </form>
        {this.props.smurfs.map((smurf, i) => (
					<div style={mainSt}>
					<ul style={fstyle}>
						<SmurfsList
							key={smurf}
							smurf={smurf}
							// saveNoteData={this.saveNoteData}
							updateSmurf={this.props.updateSmurf}
							deleteSmurf={this.props.deleteSmurf}
							getAJAX={this.getAJAX}
						/>
						<SmurfEdit
							key={smurf + i}
							smurf={smurf}
							// updateFriend={this.props.saveFriend}
							// deleteFriend={this.props.deleteFriend}
							// getAJAX={this.getAJAX}
						/>
						</ul>
					</div>
				))}
        {/* <Smurfs smurfs={this.state.lists} getAJAX={this.getAJAX} />   */}
	
      </div>
    );
  }
}
const mapDispatchToProps = (state) => {
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		smurfsFetched: state.smurfsFetched,
		smurfsSaved: state.smurfsSaved,
		savingSmurfs: state.savingSmurfs,
		updatingSmurf: state.updatingSmurf,
		smurfUpdated: state.smurfUpdated,
		deletingSmurf: state.deletingSmurf,
		smurfDeleted: state.smurfDeleted
	};
};

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapDispatchToProps, { fetchSmurf, deleteSmurf, updateSmurf, saveSmurf })(App);

// export default App;
