import React from 'react';

export default function List (props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  )
}

// broken because data is in form of object. We need it in an array
// worked around by passing List {[this.props.smurfs]} from the Smurfs component, but not sure if correct way to handle?

