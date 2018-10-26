import React from 'react'

const SmurfList= props => {
  return (
      <div>
      {props.smurfs.map(item => {
return(
<div key={item.name}>
<p>{item.name}</p>
<p>{item.age}</p>
<p>{item.height}</p>
</div>
)
})}
</div>

);
}

export default SmurfList;
