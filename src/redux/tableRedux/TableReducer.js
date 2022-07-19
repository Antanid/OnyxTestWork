/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
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

const initianalState = {
  table: [],
};

export const TableReducer = (state = initianalState, action) => {
  console.log('TABLE >>>', action);
  switch (action.type) {
    case LOAD_TABLE_API: {
      return {
        ...state,
        table: action.data
      };
    }
    case ADD_NEW_TABLE: {
      return {
        ...state,
        table: [...state.table, action.data]
      };
    }
    case DELETE_TABLE: {
      return {
        ...state,
        table: action.data
      };
    }
    case BUBBLE_SORT: {
      return {
        ...state,
        table: action.data
      };
    }
    case TABLE_YEAR_SORT: {
      return {
        ...state,
        table: action.data
      };
    }
    case TABLE_TEXT_SORT: {
      return {
        ...state,
        table: action.data
      };
    }
    case EDIT_TABLE_TEXT: {
      const itemIndex = state.table.findIndex((res) => res.id === action.id);
      const nextComments = [
        ...state.table.slice(0, itemIndex),
        action.data,
        ...state.table.slice(itemIndex + 1)
      ];
      return {
        ...state,
        table: nextComments
      };
    }
    case DRAG_AND_DROP: {
      return {
        ...state,
        table: action.data
      };
    }
    default: return state;
  }
};
