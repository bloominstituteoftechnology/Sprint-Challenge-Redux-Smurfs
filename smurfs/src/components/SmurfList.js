import React from 'react'
import './Form.css'
const SmurfList = (props) =>{
    return(
        <div className = 'list'>
        {props.list.map(item=>{
            return <div className = 'smurf'>
                        <div>
                            <h3>{item.name}</h3>
                            <p>age: {item.age}</p>
                            <p>height:  {item.height}</p>
                        </div>
                        <p>X</p>
                    </div>
            })}
        </div>
    )
}

export default SmurfList