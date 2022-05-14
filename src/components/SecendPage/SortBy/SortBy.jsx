import React from 'react';
import arrow from '../../../assets/img/arrow-down-sign-to-navigate.png'


function SortBy({ setArray, arrays, sortByYear, bubbleSort, table, setArrayAlphabet, arrayAlphabet, sortByText }) {
    return (
        <tr>
            <th onClick={() => setArray(!arrays)}>Год<img alt='sort' className={arrays ? 'array' : 'array_active'}
                onClick={() => sortByYear()}
                src={arrow} /> <button onClick={() => bubbleSort(table)}>Bubble sort</button> </th>
            <th onClick={() => setArrayAlphabet(!arrayAlphabet)}>Событыие <img alt='sort' className={arrayAlphabet ? 'arrayAlphabet' : 'arrayAlphabet_active'} onClick={() => sortByText()} src={arrow} /></th>
        </tr>
    )
}

export default SortBy