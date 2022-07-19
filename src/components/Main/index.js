// == Import
import PropTypes from 'prop-types';
import './main.scss';

import Currency from './currency';

// == Composant
function Main({ currencies }) {
  return (
    <main className="main">
      <h2 className="main__title">Currencies</h2>
      <ul className="main__list">
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

Main.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Main;
