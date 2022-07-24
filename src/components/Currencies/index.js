// == Import
import PropTypes from 'prop-types';
import './currencies.scss';

import Currency from './currency';

// == Composant
function Currencies({
  currencies,
  searchedText,
  onSearchChange,
  onCurrencyClick,
}) {
  return (
    <main className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <input
        type="text"
        className="currencies__input"
        placeholder="Search currency"
        value={searchedText}
        onChange={onSearchChange}
      />
      <ul className="currencies__list">
        {
          currencies
            .filter((currency) => currency.name.toLowerCase().includes(searchedText.toLowerCase()))
            .map((item) => (
              <Currency
                key={item.name}
                name={item.name}
                rate={item.rate}
                onCurrencyClick={() => onCurrencyClick(item.name)}
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
  searchedText: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
};

// == Export
export default Currencies;
