import React from 'react';

class SmurfCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    pickSmurf = () => {
        const Smurf = this.props.smurfs.find(smurf => smurf.id == this.props.match.params.id);
        this.setState({
            age: Smurf.age,
            name: Smurf.name,
            height: Smurf.height
        })
    }
    
    render() {
        return (
            <div>
               <button onClick={this.pickSmurf}>Find Smurf</button> 
                <h3>Name: {this.state.name}</h3>
                <h4>Age: {this.state.age}</h4>
                <h5>Height: {this.state.height}</h5>
                <form>
                    <input type="text" name="name" placeholder={this.state.name} onChange={this.props.handleInput}/>
                    <input type="text" name="age" placeholder={this.state.age} onChange={this.props.handleInput}/>
                    <input type="text" name="height" placeholder={this.state.height} onChange={this.props.handleInput}/>
                    <input type="submit" onClick={(event) => this.props.editSmurf(this.props.match.params, event)}/>
                </form>

            </div>
        )
    } 
}

export default SmurfCard; 