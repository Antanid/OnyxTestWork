import PropTypes from 'prop-types';
import close from '../../../assets/img/free-icon-recycling-bin-73806.png';

function RemoveItem({ removeItem, items }) {
  return (
    <th>
      <button
        type="button"
        onKeyDown={() => removeItem(items)}
        onClick={() => removeItem(items)}
      >
        <img
          src={close}
          alt="close"
        />
      </button>
    </th>
  );
}

export default RemoveItem;

RemoveItem.propTypes = {
  items: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};
