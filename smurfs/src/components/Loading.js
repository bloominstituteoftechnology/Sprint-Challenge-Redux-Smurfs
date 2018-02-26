import React, {Component} from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="App">
                <img alt={"gargamel"} src={"https://vignette.wikia.nocookie.net/smurfs/images/e/ee/Gargamel_Comic_Book.jpg/revision/latest/scale-to-width-down/200?cb=20111101140813"}/>
                <h1>Fetching Smurfs...</h1>
            </div>
        );
    }

}

export default Loading;

