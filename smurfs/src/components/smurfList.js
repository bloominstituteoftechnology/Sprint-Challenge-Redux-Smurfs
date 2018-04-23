import React from 'react';
import { render } from 'react-dom';

export const smurfList = (props) => {
        return ( 
            props.list.map( index => (
                <div>
                'Prop' + index; 
                </div>
            ) )
        );
}