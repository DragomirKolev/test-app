import React, {useState} from 'react';
import {Column} from '../components/column';
import {AddItem} from '../components/addItem';

export const Container = () => {
    const [columns, setColumn] = useState([]);
    const [title, setTitle] = useState('');

    const addColumn = (column) => setColumn(columns.length < 1 ? [column] : [...columns, column]);
    const handleChange = e => setTitle(e.target.value);

    const columnList = columns.map(column => <Column key={column.id} title={column.title} />);

    return (<div className='container'>
        <div className='add-column'>
            <AddItem 
                handleChange={handleChange}
                onClick={() => addColumn({title, id: columns.length + 1})}
                buttonName='Column'
            />
        </div>
        <div className='column-list'>{columnList}</div>
    </div>);
}

