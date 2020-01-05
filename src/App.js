import React, { Component, Fragment } from "react";
import "./App.scss";
import InputPanel from "./components/InOutPanel/InputPanel";
import OutputPanel from "./components/InOutPanel/OutputPanel";
import ConnectedLiveRating from "./components/ConnectedLiveRating";
import InputCurrencySelector from "./components/InOutCurrencySelector/InputCurrencySelector";
import OutputCurrencySelector from "./components/InOutCurrencySelector/OutputCurrencySelector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Revolut Currency Exchange</h1>
        <div className="app-wrapper">
          <ConnectedLiveRating />
          <Fragment>
            <div className="converter">
              <InputCurrencySelector />
              <InputPanel />
            </div>
            <div className="converter">
              <OutputCurrencySelector />
              <OutputPanel />
              <div className="ex-button">
                <button onClick={() => alert("Money Recived!")}>
                  Exchange
                </button>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default App;
