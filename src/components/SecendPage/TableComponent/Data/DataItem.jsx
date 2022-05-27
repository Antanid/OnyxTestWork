import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Data from './Data';

function DataItem({ id, item, handleEditing, table, idItem, setIdItem }) {

    const [styleArray, setStyleArray] = useState(null);
    const [runArray, setRunArray] = useState(-1);

    const styleNone = () => {
        setStyleArray(null)
        setIdItem(null)
    }

    useEffect(() => {
        if (id === idItem) {
            setStyleArray('table_data_active');
            handleEditing(id)
        }
        return () => {
            setStyleArray(null);
        }
  
    }, [idItem, handleEditing, id])



    useEffect(() => {
        if (runArray === id) {
            setStyleArray('table_data_active')
            handleEditing(id)
        }
        return () => {
            setStyleArray(null)
        }
 
    }, [runArray, handleEditing, id])

    const keyPress = useCallback((event) => {
        if (runArray < table.length && runArray > -1) {
            if (event.keyCode === 40) {
                setRunArray(prev => prev + 1);
            }
        } if (runArray < table.length && runArray > -1) {
            if (event.keyCode === 38) {
                setRunArray(prev => prev - 1);
            }
        }
        else setRunArray(0)
    }, [runArray, table])


    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => {
            document.removeEventListener('keydown', keyPress);
        }
    }, [keyPress])


    return (
        <Data id={id} handleEditing={handleEditing} styleNone={styleNone} styleArray={styleArray} item={item} />
    )
}

export default DataItem;

DataItem.propTypes = {
    handleEditing: PropTypes.func.isRequired,
    id: PropTypes.number,
    idItem: PropTypes.number,
    table: PropTypes.array,
}