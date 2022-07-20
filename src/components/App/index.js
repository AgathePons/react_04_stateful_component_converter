// == Import
import './app.scss';

import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';

import currenciesList from '../../data/currencies';

// == Composant
function App() {
  return (
    <div className="app">
      <Header
        valueToConvert={1}
        currencyToConvert="euro"
      />
      <Currencies currencies={currenciesList} />
      <Result
        resultValue={1.09}
        selectedCurrency="United States Dollar"
      />
    </div>
  );
}

// == Export
export default App;
