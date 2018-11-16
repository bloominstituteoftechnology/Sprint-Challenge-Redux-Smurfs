import React from 'react';

import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions/index';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import Smurf from './smurf';

class SmurfsList extends React.Component {
    constructor(props){
        super(props);
            this.state={
                name: '',
                age: '',
                height: ''
            }
    }
    componentDidMount(){
        this.props.fetchSmurfs();
    }
    
    inputHandler=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitSmurf = (e) =>{
        e.preventDefault();
        const newSmurf = { name: this.state.name,
             age: this.state.age,
              height: this.state.height }
        this.props.addSmurf(newSmurf)
        this.setState({
            name:'',
            age: '',
            height: ''
        })
    }

    
    render(){
        return(
            <div>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="name"  placeholder="Smurf Name" value={this.state.name} onChange={this.inputHandler} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="age"  placeholder="Age" value={this.state.age} onChange={this.inputHandler}/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="height"  placeholder="Height" value={this.state.height} onChange={this.inputHandler} />
                    </FormGroup>
                    <Button onClick={this.submitSmurf}>Add Smurf</Button>
                </Form>
 
                {this.props.smurfs.map(item => 
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
export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(SmurfsList);
