// == Import
import PropTypes from 'prop-types';

function Currency({ name, onCurrencyClick }) {
  return (
    <li className="currencies__list__item" onClick={onCurrencyClick}>
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
};

export default Currency;
