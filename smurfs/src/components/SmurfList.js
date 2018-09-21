import React from 'react';

const SmurfList = props => {
    return (
        <div>
            {props.fetchingSmurfs ? (
                <h3>fetching smurfs...</h3>
            ) : (
                <div>
                {props.smurfs.map(smurf => 
                    <div key={smurf.name}>
                    <h3>Name: {smurf.name}</h3>
                    <h4>Age: {smurf.age}</h4>
                    <h5>Height: {smurf.height}</h5>
                    <button onClick={() => props.deleteSmurf(smurf.id)}>Delete</button>
                    <button onClick={() => {props.history.push(`/smurf/${smurf.id}`)}}>Update Info</button>
                    </div>
                )}
                <div>
                    <h3>Add a Friend</h3>
                    <form>
                        <input type="text" name="name" placeholder="name" onChange={props.handleInput}/>
                        <input type="text" name="age" placeholder="age" onChange={props.handleInput}/>
                        <input type="text" name="height" placeholder="height" onChange={props.handleInput}/>
                        <input type="submit" onClick={props.addSmurf}/>
                    </form>
                </div>
                </div>
                )
            }
        </div>
    )
}

export default SmurfList; 