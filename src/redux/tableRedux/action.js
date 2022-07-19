/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  LOAD_TABLE_API,
  ADD_NEW_TABLE,
  DELETE_TABLE,
  BUBBLE_SORT,
  TABLE_YEAR_SORT,
  TABLE_TEXT_SORT,
  EDIT_TABLE_TEXT,
  DRAG_AND_DROP
} from './type';

export function loadTableApi() {
  return async (dispatch) => {
    const res = await axios('http://localhost:3004/item');
    const dataJson = await res.data;
    dispatch({
      type: LOAD_TABLE_API,
      data: dataJson
    });
  };
}

export function addNewTable(newItem) {
  return (dispatch) => {
    axios.post('http://localhost:3004/item', newItem).then(() => {
      dispatch({
        type: ADD_NEW_TABLE,
        data: newItem
      });
    });
  };
}

export function deleteTable(items, tables) {
  return (dispatch) => {
    axios.delete(`http://localhost:3004/item/${items.id}`)
      .then(() => {
        const del = tables.filter((e) => e.id !== items.id);
        dispatch({
          type: DELETE_TABLE,
          data: del
        });
      });
  };
}

export function bubbleSortTable(tables, arrays) {
  return (dispatch) => {
    const arr = tables;
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
    dispatch({
      type: BUBBLE_SORT,
      data: arr
    });
  };
}

export function dataTableSort(tables, arrays) {
  return (dispatch) => {
    const array = tables;
    array.sort((a, b) => (!arrays ? a.data.year - b.data.year
      || a.month - b.month : b.data.year - a.data.year || b.month - a.month));
    dispatch({
      type: TABLE_YEAR_SORT,
      data: array
    });
  };
}

export function textTableSort(tables) {
  return (dispatch) => {
    const array = tables;
    array.sort((a, b) => (a.text.toLocaleLowerCase > b.text.toLocaleLowerCase ? 1 : -1));
    dispatch({
      type: TABLE_TEXT_SORT,
      data: array
    });
  };
}

export function editTextTable(item, editingText) {
  return async (dispatch) => {
    const res = await axios.patch(`http://localhost:3004/item/${item.id}`, { text: editingText });
    dispatch({
      type: EDIT_TABLE_TEXT,
      data: res.data,
      id: item.id
    });
  };
}

export function dragAndDropTable(table) {
  return (dispatch) => {
    const SortItems = (a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      return -1;
    };
    const sortArray = table;
    sortArray.sort(SortItems);
    dispatch({
      type: DRAG_AND_DROP,
      data: sortArray
    });
  };
}
