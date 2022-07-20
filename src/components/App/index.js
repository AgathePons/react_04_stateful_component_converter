// == Import
import React from 'react';

import './app.scss';

import Header from '../Header';
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
      isListOpen: false,
    };
  }

  render() {
    return (
      <div className="app">
        <Header
          valueToConvert={1}
          currencyToConvert="euro"
        />
        <button
          type="button"
          onClick={() => {
            this.setState({
              isListOpen: true,
            });
          }}
        >
          Afficher / masquer
        </button>
        {/* we can use this.state to take something from the state */}
        {this.state.isListOpen && <Currencies currencies={currenciesList} />}
        <Result
          resultValue={1.09}
          selectedCurrency="United States Dollar"
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
