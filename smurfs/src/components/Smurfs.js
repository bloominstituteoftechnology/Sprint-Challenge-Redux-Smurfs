import React, { Component } from 'react';

export const Smurfs = (props) => {
if (!props) {
    return <h1> Finding your smurfs </h1>
} else {
    return (
        <div>
            {console.log(props)}
        </div>
    )
  }
}