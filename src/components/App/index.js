// == Import
import './app.scss';
import currencies from '../../data/currencies';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import data from '../../data/currencies';

// == Composant
function App() {
  return (
    <div className="app">
      <Header
        valueToConvert={1}
        currencyToConvert="euro"
      />
      <Main currencies={data} />
      <Footer
        resultValue={1.09}
        selectedCurrency="United States Dollar"
      />
    </div>
  );
}

// == Export
export default App;
