// == Import
import './header.scss';
import PropTypes from 'prop-types';

// == Composant
function Header({ baseAmount, currencyToConvert, onInputChange }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <input
        type="number"
        className="header__input"
        placeholder="Montant"
        value={baseAmount}
        onChange={onInputChange}
      />
      <div className="header__base-amount">
        {currencyToConvert}
      </div>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  currencyToConvert: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

// == Export
export default Header;
