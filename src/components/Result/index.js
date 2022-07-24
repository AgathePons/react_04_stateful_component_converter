// == Import
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import './result.scss';

function Result({ resultValue, selectedCurrency }) {
  return (
    <div className="result">
      <CountUp
        className="result__value"
        end={resultValue}
        decimals={2}
        duration={0.3}
      >
        {resultValue}
      </CountUp>
      <span className="result__currency">{selectedCurrency}</span>
    </div>
  );
}

Result.propTypes = {
  resultValue: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
};

export default Result;
