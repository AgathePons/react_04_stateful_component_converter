// == Import
import PropTypes from 'prop-types';

function Result({ resultValue, selectedCurrency }) {
  return (
    <div className="main__result">
      <span className="main__result__value">{resultValue}</span>
      <span className="main__result__currency">{selectedCurrency}</span>
    </div>
  );
}

Result.propTypes = {
  resultValue: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Result;
