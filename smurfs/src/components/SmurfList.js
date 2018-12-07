import React from 'react'

const SmurfList = (props) =>{
    return(
        props.list.map(item=>{
            return <div>
                        <h3>{item.name}</h3>
                        <p>age: {item.age}</p>
                        <p>height:  {item.height}</p>
                    </div>
            }))
}

export default SmurfList