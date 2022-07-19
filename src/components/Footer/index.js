// == Import
import PropTypes from 'prop-types';

function Footer({ resultValue, selectedCurrency }) {
  return (
    <div className="main__result">
      <span className="main__result__value">{resultValue}</span>
      <span className="main__result__currency">{selectedCurrency}</span>
    </div>
  );
}

Footer.propTypes = {
  resultValue: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Footer;
