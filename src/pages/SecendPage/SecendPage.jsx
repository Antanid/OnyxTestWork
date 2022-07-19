import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import TableComponent from './components/TableComponent';
import FormComponent from './components/FormComponent';
import SortBy from './components/SortBy';
import ButtonTable from './components/ButtonTable';
import arrow from '../../assets/img/arrow-down-sign-to-navigate.png';

import './sass/Style.scss';
import useInput from '../../hooks/useInput';
import {
  addNewTable,
  bubbleSortTable,
  dataTableSort,
  deleteTable,
  loadTableApi,
  textTableSort,
} from '../../redux/tableRedux/action';

function SecendPage() {
  const [arrays, setArray] = useState(false);
  const [arrayAlphabet, setArrayAlphabet] = useState(false);
  const handleChangeMonth = useInput('', 3);
  const handleChangeDate = useInput('', 3);
  const handleChangeYear = useInput('', 5);
  const handleChange = useInput('', 250);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTableApi());
  }, []);

  const tables = useSelector((state) => {
    return state.TableReducer.table;
  });
  useEffect(() => {
    dispatch(dataTableSort(tables, arrays));
  }, [arrays]);

  const removeItem = (items) => {
    dispatch(deleteTable(items, tables));
  };

  const bubbleSort = () => {
    dispatch(bubbleSortTable(tables, arrays));
  };

  const sortByText = () => {
    dispatch(textTableSort(tables));
  };
  const addTask = () => {
    if (handleChange.value) {
      const newItem = {
        id: uuid(),
        order: uuid(),
        text: handleChange.value,
        data: {
          year: Number(handleChangeYear.value),
          day: Number(handleChangeDate.value),
          month: Number(handleChangeMonth.value),
        },
      };
      dispatch(addNewTable(newItem));
      handleChangeYear.setValue('');
      handleChangeDate.setValue('');
      handleChangeMonth.setValue('');
      handleChange.setValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(handleChangeYear, handleChangeDate, handleChangeMonth, handleChange);
  };

  return (
    <div className="TableOur">
      <table>
        <thead>
          <SortBy
            setArray={setArray}
            arrays={arrays}
            bubbleSort={bubbleSort}
            arrow={arrow}
            setArrayAlphabet={setArrayAlphabet}
            arrayAlphabet={arrayAlphabet}
            sortByText={sortByText}
          />
        </thead>
        <TableComponent table={tables} removeItem={removeItem} />
      </table>
      <FormComponent
        handleKeyPress={handleKeyPress}
        addTask={addTask}
        handleChangeMonth={handleChangeMonth}
        handleChangeDate={handleChangeDate}
        handleChangeYear={handleChangeYear}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ButtonTable />

    </div>

  );
}

export default SecendPage;
