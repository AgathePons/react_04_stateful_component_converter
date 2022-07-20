// == Import
import PropTypes from 'prop-types';
import './currencies.scss';

import Currency from './currency';

// == Composant
function Currencies({ currencies }) {
  return (
    <main className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {
          currencies.map((item) => (
            <Currency
              key={item.name}
              name={item.name}
              rate={item.rate}
            />
          ))
        }
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Currencies;