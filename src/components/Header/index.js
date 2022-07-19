// == Import
import './header.scss';
import PropTypes from 'prop-types';

// == Composant
function Header({ valueToConvert, currencyToConvert }) {
  return (
    <header className="header">
      <h1>Converter</h1>
      <div className="value-to-convert">
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
