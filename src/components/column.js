import React, {useState} from 'react';
import {Row} from './row';
import {AddItem} from './addItem';

export const Column = (props) => {
    const [rows, setRows] = useState([]);
    const [title, setTitle] = useState('');
    
    const addRow = (row) => setRows(row.length < 1 ? [row] : [...rows, row]);
    const handleChange = e => setTitle(e.target.value);

    const rowsList = rows.map(row => <Row key={row.id} title={row.title} />);

    return (<div className='column'>
        <div>{props.title}</div>
        <div>{rowsList}</div>
        <AddItem 
            handleChange={handleChange} 
            onClick={() => addRow({title, id: rows.length + 1})} 
            buttonName="Row" 
        />
    </div>);
}

