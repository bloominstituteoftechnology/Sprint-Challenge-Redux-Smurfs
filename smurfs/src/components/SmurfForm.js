import React, { Component } from 'react';

class SmurfForm extends Component {
    render() {
        return (
            <div>
              <form>
                <input type='text' placeholder="name"></input>
                <input type='text' placeholder="age"></input>
                <input type="text" placeholder='height'></input>
                <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default SmurfForm;
