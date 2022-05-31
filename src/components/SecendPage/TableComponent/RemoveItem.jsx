import React, { Fragment } from 'react';
import close from '../../../assets/img/free-icon-recycling-bin-73806.png';
import PropTypes from 'prop-types';



function RemoveItem({ removeItem, items}) {
  return (
    <Fragment>
      <th><img onClick={() => removeItem(items)} src={close} alt="close" /></th>
    </Fragment>
  )
}

export default RemoveItem;


RemoveItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
}