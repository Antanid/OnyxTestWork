import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableComponent from './components/TableComponent';
import FormComponent from './components/FormComponent';
import SortBy from './components/SortBy';
import ButtonTable from './components/ButtonTable';
import arrow from '../../assets/img/arrow-down-sign-to-navigate.png';

import './sass/Style.scss';
import useInput from '../../hooks/useInput';

function SecendPage() {
  const [arrays, setArray] = useState(false);
  const [arrayAlphabet, setArrayAlphabet] = useState(false);
  const handleChangeMonth = useInput('', 3);
  const handleChangeDate = useInput('', 3);
  const handleChangeYear = useInput('', 5);
  const handleChange = useInput('', 250);

  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/item')
      .then(({ data }) => {
        setTable(data)
          .catch((error) => {
            console.log(error);
          });
      });
  }, []);

  useEffect(() => {
    setTable((prevTable) => ([...prevTable].sort((a, b) => (!arrays ? a.data.year - b.data.year
      || a.month - b.month : b.data.year - a.data.year || b.month - a.month))));
  }, [arrays]);

  const removeItem = (items) => {
    axios.delete(`http://localhost:3004/item/${items.id}`)
      .then(() => {
        const del = table.filter((e) => e.id !== items.id);
        setTable(del);
      }).catch((error) => {
        console.log(error);
      });
  };

  const bubbleSort = () => {
    const arr = [...table];
    if (!arrays) {
      for (let i = 1; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - i; j += 1) {
          if (arr[j].data.year < arr[j + 1].data.year) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          }
        }
      }
    } else {
      for (let i = 1; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length - i; j += 1) {
          if (arr[j].data.year > arr[j + 1].data.year) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    }
    return setTable(arr);
  };

  const sortByText = () => {
    setTable((prevTable) => ([...prevTable]
      .sort((a, b) => (a.text.toLocaleLowerCase > b.text.toLocaleLowerCase ? 1 : -1))));
  };

  const addTask = () => {
    if (handleChange.value) {
      const newItem = {
        id: table.length,
        order: table.length + 1,
        text: handleChange.value,
        data: {
          year: Number(handleChangeYear.value),
          day: Number(handleChangeDate.value),
          month: Number(handleChangeMonth.value),
        },
      };
      axios.post('http://localhost:3004/item', newItem)
        .then(() => {
          setTable([...table, newItem]);
        }).catch((error) => {
          console.log(error);
        });
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

  const deleteLastArray = () => {
    setTable((prevTable) => ([...prevTable].slice(0, -1)));
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
        <TableComponent setTable={setTable} table={table} removeItem={removeItem} />
      </table>
      <FormComponent
        handleKeyPress={handleKeyPress}
        deleteLastArray={deleteLastArray}
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
