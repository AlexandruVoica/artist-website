import React from "react";

import { CompositeProvider } from "store";

import Side from "components/Side";
import Header from "components/Header";
import Main from "components/Main";

import "./App.scss";

function App() {
  return (
    <CompositeProvider>
      <div className="App">
        <Side />
        <Main />
        <Header />
      </div>
    </CompositeProvider>
  );
}

export default App;
