// == Import
import PropTypes from 'prop-types';

function Currency({ name }) {
  return (
    <li className="main__list__item">
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  // rate: PropTypes.number.isRequired,
};

export default Currency;
