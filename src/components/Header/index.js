// == Import
import './header.scss';
import PropTypes from 'prop-types';

// == Composant
function Header({ valueToConvert, currencyToConvert }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__base-amount">
        {valueToConvert} {currencyToConvert}
      </div>
    </header>
  );
}

Header.propTypes = {
  valueToConvert: PropTypes.number.isRequired,
  currencyToConvert: PropTypes.string.isRequired,
};

// == Export
export default Header;
