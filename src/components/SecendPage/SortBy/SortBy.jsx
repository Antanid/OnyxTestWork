import React from 'react';
import PropTypes from 'prop-types';

function SortBy({
  arrow,
  setArray,
  arrays,
  bubbleSort,
  setArrayAlphabet,
  arrayAlphabet,
  sortByText
}) {
  return (
    <tr>
      <th onClick={() => setArray(!arrays)}>
        Год
        <img
          alt="sort"
          className={arrays ? 'array' : 'array_active'}
          src={arrow}
        />
        {' '}
        <button
          type="button"
          onClick={() => bubbleSort()}
        >
          Bubble sort
        </button>
        {' '}

      </th>
      <th onClick={() => setArrayAlphabet(!arrayAlphabet)}>
        <button
          type="button"
          onKeyDown={() => sortByText()}
          onClick={() => sortByText()}
        >
          Событыие
          <img
            alt="sort"
            className={arrayAlphabet ? 'arrayAlphabet' : 'arrayAlphabet_active'}
            src={arrow}
          />
        </button>

      </th>
    </tr>
  );
}

export default SortBy;

SortBy.propTypes = {
  arrow: PropTypes.string.isRequired,
  setArray: PropTypes.func.isRequired,
  arrays: PropTypes.bool.isRequired,
  bubbleSort: PropTypes.func.isRequired,
  setArrayAlphabet: PropTypes.func.isRequired,
  arrayAlphabet: PropTypes.bool.isRequired,
  sortByText: PropTypes.func.isRequired,
};  
