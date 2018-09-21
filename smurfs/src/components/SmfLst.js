import React from 'react'

const SmfLst = (props) => {
  return (
    <div>
      <ul>
          {props.smflst.map((smf, i) => (<li key={i}>{smf.name}</li>))}
      </ul>
      <input type="text" name="name" value={props.smfnme} onChange={props.hdlchg} />
      <input type="number" name="age" value={props.smfage} onChange={props.hdlchg} />
      <input type="text" name="height" value={props.smfhgt} onChange={props.hdlchg} />
      <button onClick={props.smfAd}>Add Smurf</button>
    </div>
  )
}

export default SmfLst;