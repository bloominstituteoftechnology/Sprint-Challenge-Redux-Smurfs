import React from 'react';
import UpdateSmurf from './UpdateSmurf';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            smurfName: '',
            smurfAge: '',
            smurfHeight: ''
        }
    }

    smurfChange = event => {
        event.preventDefault();
        const { smurfName, smurfAge, smurfHeight } = this.state;
        const changes = { id: this.props.id }
        if (smurfName.trim() !== "") changes.name = smurfName
        if (smurfAge.trim() !== "") changes.age = smurfAge
        if (smurfHeight.trim() !== "") changes.height = smurfHeight
        this.props.updateSmurf(changes);
        this.setState({ smurfName: '', smurfAge: '', smurfHeight: '', show: false });
    }

    toggleShow = () => {
        let visible = this.state.show;
        this.setState({ show: !visible })
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div key={this.props.id}>
                <h1>{this.props.name}</h1>
                <strong>{this.props.age}</strong>
                <p>{this.props.height}</p>
                {this.state.show ?
                    <UpdateSmurf
                        smurfChange={this.smurfChange}
                        handleInputChange={this.handleInputChange}
                        smurfName={this.state.smurfName}
                        smurfAge={this.state.smurfAge}
                        smurfHeight={this.state.smurfHeight}
                        show={this.state.show}
                    /> :
                    <button onClick={this.toggleShow} className="button button-update" >Update Friend</button>}
                <button className="button button-delete" onClick={() => this.props.deleteSmurf(this.props.id)} >Delete this Smurf</button>
            </div>
        )
    }
}

export default Smurf;