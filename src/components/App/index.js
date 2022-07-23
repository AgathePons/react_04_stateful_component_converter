// == Import
import React from 'react';

import './app.scss';

import Header from '../Header';
import Toggler from '../Toggler';
import Currencies from '../Currencies';
import Result from '../Result';

import currenciesList from '../../data/currencies';

// == Composant
// class component (old way, but useful to understand, and can be found in old project)
class App extends React.Component {
  // the constructor takes the props in parameters
  constructor(props) {
    // the props are given to the parent constructor (React.Component)
    super(props);
    // in the constructor, we define an internal state with this.state
    // it is always an object
    this.state = {
      baseAmount: 1,
      selectedCurrency: 'Chinese Renminbi Yuan',
      isListOpen: true,
    };
    // to be able to get the context of handleButtonClic, we bind it to this
    // it means we explicitly associate the context to the function to avoid an undefined
    // now, when we call the function, we get the context (this) with it
    this.handleButtonClic = this.handleButtonClic.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCurrencyClic = this.handleCurrencyClic.bind(this);
  }

  handleButtonClic() {
    // setState(), method to modify the state and re-render
    this.setState({
      isListOpen: !this.state.isListOpen,
    });
  }

  handleInputChange(e) {
    this.setState({
      baseAmount: Number(e.target.value),
    });
  }

  handleCurrencyClic(itemName) {
    this.setState({
      selectedCurrency: itemName,
    });
  }

  makeConversion() {
    const foundCurrency = currenciesList.find((c) => c.name === this.state.selectedCurrency);
    const convertedAmount = foundCurrency.rate * this.state.baseAmount;
    return Math.round(convertedAmount * 100) / 100;
    // we can also round it this way: parseFloat(convertedAmount.toFixed(2))
  }

  render() {
    return (
      <div className="app">
        <Header
          baseAmount={this.state.baseAmount}
          currencyToConvert="euro"
          onInputChange={this.handleInputChange}
        />
        <Toggler
          isOpen={this.state.isListOpen}
          onButtonClick={this.handleButtonClic}
        />
        {/* we can use this.state to take something from the state */}
        {this.state.isListOpen && (
          <Currencies currencies={currenciesList} onCurrencyClick={this.handleCurrencyClic} />
        )}
        <Result
          resultValue={this.makeConversion()}
          selectedCurrency={this.state.selectedCurrency}
        />
      </div>
    );
  }
}

// ok for stateless component, but not for stateful component
/* function App() {
  return (
    <div className="app">
      <Header
        valueToConvert={1}
        currencyToConvert="euro"
      />
      <button type="button" onClick={(event) => console.log('clic', event.target)}>
        Afficher / masquer
      </button>
      <Currencies currencies={currenciesList} />
      <Result
        resultValue={1.09}
        selectedCurrency="United States Dollar"
      />
    </div>
  );
} */

// == Export
export default App;
