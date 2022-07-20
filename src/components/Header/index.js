// == Import
import './header.scss';
import PropTypes from 'prop-types';

// == Composant
function Header({ baseAmount, currencyToConvert }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__base-amount">
        {baseAmount} {currencyToConvert}
      </div>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  currencyToConvert: PropTypes.string.isRequired,
};

// == Export
export default Header;
