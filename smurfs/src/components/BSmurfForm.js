import React from 'react';



class BSmurfForm extends Component {

        constructor(){
            super ();
            this.state = {
                    name: '',
                    age:'',
                    height: ''
            }
        }
}

//Handlers
    submitHandler =  event => {
            e.preventDefault();
            this.props.addSmurf(this.state);
            this.setState({
                    name: '',
                    age: '',
                    height: ''
            })
    }


    inputHandler = event => {
            this.setState({ [e.target.name]: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
				<input 
					type='text'
					name='name'
					value={this.state.name}
					onChange={this.inputHandler}
					placeholder="Smurf Name"
				/>
				<input 
					type='text'
					name='age'
					value={this.state.age}
					onChange={this.inputHandler}
					placeholder="Smurf Age"
				/>
				<input 
					type='text'
					name='height'
					value={this.state.height}
					onChange={this.inputHandler}
					placeholder="Smurf Height"
				/>
				<button type='submit'>Add Smurf</button>
			</form>
        )
    }

    