// == Import
import PropTypes from 'prop-types';
import './result.scss';

function Result({ resultValue, selectedCurrency }) {
  return (
    <div className="result">
      <span className="result__value">{resultValue}</span>
      <span className="result__currency">{selectedCurrency}</span>
    </div>
  );
}

Result.propTypes = {
  resultValue: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Result;
