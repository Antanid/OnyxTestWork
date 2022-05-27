import React, { useEffect, useState } from 'react'
import TableComponent from './TableComponent/TableComponent';
import FormComponent from './FormComp/FormComponent';
import SortBy from './SortBy/SortBy';
import axios from 'axios';
import ButtonTable from './ButtonImg/ButtonTable';
import arrow from '../../assets/img/arrow-down-sign-to-navigate.png'

function SecendPage() {

  const [arrays, setArray] = useState(false);
  const [arrayAlphabet, setArrayAlphabet] = useState(false);

  const [value, setValue] = useState('');
  const [valueYear, setValueYear] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [valueMonth, setValueMonth] = useState('');

  const [table, setTable] = useState([]);




  useEffect(() => {
    axios.get("http://localhost:3004/item").then(({ data }) => {
      setTable(data);
    })
  }, [])

  useEffect(() => {
    setTable((table) =>
    ([...table].sort((a, b) =>
      !arrays ? a.data.year - b.data.year || a.month - b.month : b.data.year - a.data.year || b.month - a.month)))
  }, [arrays])

  const removeItem = (items) => {
    axios.delete(`http://localhost:3004/item/${items.id}`).then(() => {
      const del = table.filter(e => e.id !== items.id);
      setTable(del)
    })
  }

  const bubbleSort = () => {
    const arr = [...table];
    if (!arrays) {
      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j].data.year < arr[j + 1].data.year) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          }
        }
      }
    } else {
      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j].data.year > arr[j + 1].data.year) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    }
    return setTable(arr);
  };

  const sortByText = () => {
    setTable((table) =>
      ([...table].sort((a, b) => a.text.toLocaleLowerCase > b.text.toLocaleLowerCase ? 1 : -1)))
  }

  const handleChangeMonth = (e) => {
    if (e.currentTarget.value.length < 3) {
      setValueMonth(e.currentTarget.value)
    };
  }
  const handleChangeDate = (e) => {
    if (e.currentTarget.value.length < 3) {
      setValueDate(e.currentTarget.value);
    }
  }
  const handleChangeYear = (e) => {
    if (e.currentTarget.value.length < 5) {
      setValueYear(e.currentTarget.value);
    }

  }
  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  }



  const addTask = (value, valueYear, valueDate, valueMonth) => {
    if (value) {
      const newItem = {
        id: table.length,
        order: table.length + 1,
        text: value,
        data: {
          year: Number(valueYear),
          day: Number(valueDate),
          month: Number(valueMonth),
        },
      }
      axios.post('http://localhost:3004/item', newItem).then(() => {
        setTable([...table, newItem]);
      });
      setValueYear('');
      setValueDate('');
      setValueMonth('');
      setValue('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(value, valueYear, valueDate, valueMonth)
  }

  const deleteLastArray = () => {
    setTable((table) => ([...table].slice(0, -1)))
  }

  return (
    <div>
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
        deleteLastArray={deleteLastArray}
        addTask={addTask}
        handleChangeMonth={handleChangeMonth}
        valueMonth={valueMonth}
        handleChangeDate={handleChangeDate}
        valueDate={valueDate}
        handleChangeYear={handleChangeYear}
        valueYear={valueYear}
        handleChange={handleChange}
        value={value}
        handleSubmit={handleSubmit} />
      <ButtonTable />

    </div>

  )
}

export default SecendPage