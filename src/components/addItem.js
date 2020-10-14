import React from 'react';

export const AddItem = (props) => (
    <div>
        <input type='text' onChange={props.handleChange} />
        <button type='button' onClick={props.onClick}>{props.buttonName}</button>
    </div>
);