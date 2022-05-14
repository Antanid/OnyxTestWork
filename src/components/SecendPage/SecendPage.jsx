import React, { useState } from 'react'
import TableComponent from './TableComponent/TableComponent';
import FormComponent from './FormComp/FormComponent';
import SortBy from './SortBy/SortBy';

function SecendPage() {

  const [value, setValue] = useState('');
  const [valueYear, setValueYear] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [valueMonth, setValueMonth] = useState('');


  const [arrays, setArray] = useState(false);
  const [arrayAlphabet, setArrayAlphabet] = useState(false);
  const [table, setTable] = useState([
    {
      text: 'Пошел в свой первый класс',
      id: 0,
      data: {
        year: 2012,
        day: 25,
        month: 1,
      },
    },
    {
      text: 'Поехал на чемпионат по бейсболу',
      id: 1,
      data: {
        year: 2018,
        day: 14,
        month: 3
      }
    },
    {
      text: 'Поступил в институт',
      id: 2,
      data: {
        year: 2007,
        day: 12,
        month: 4
      },
    },
  ]
  )

  const removeItem = (id) => {
    setTable(prevState => prevState.filter((el) => el.id !== id))
  }

  function sortByYear() {
    const sortItem = [...table]
    if (arrays === false) {
      setTable(
        sortItem.sort((a, b) => a.data.year - b.data.year)
      )
    } if (arrays === true) {
      setTable(
        sortItem.sort((a, b) => a.data.year - b.data.year).reverse()
      )
    }
  }

  const bubbleSort = array => {
    const arr = Array.from(array);

    if (arrays === false) {
      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j].data.year > arr[j + 1].data.year) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    } if (arrays === true) {
      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j].data.year < arr[j + 1].data.year) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          }
        }
      }
    }



    return setTable(arr);
  };



  function sortByText() {
    const sortItem = [...table];
    setTable(sortItem.sort((a, b) => a.text.toLocaleLowerCase > b.text.toLocaleLowerCase ? 1 : -1));
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
        text: value,
        data: {
          year: valueYear,
          day: valueDate,
          month: valueMonth,
        },
      }
      setTable([...table, newItem]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(value, valueYear, valueDate, valueMonth)
  }

  const deleteLastArray = () => {
    const arrayLast = [...table];
    setTable(arrayLast.slice(0, -1))
  }

  return (
    <div>
      <table>
        <thead>
          <SortBy
            setArray={setArray}
            arrays={arrays}
            sortByYear={sortByYear}
            bubbleSort={bubbleSort}
            table={table}
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
    </div>

  )
}

export default SecendPage