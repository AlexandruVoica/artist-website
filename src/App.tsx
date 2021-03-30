import React from "react";

import { CompositeProvider } from "store";

import Side from "components/Side";
import Footer from "components/Footer";
import Main from "components/Main";

import "./App.scss";

function App() {
  return (
    <CompositeProvider>
      <div className="App">
        <Side />
        <Main />
        <Footer />
      </div>
    </CompositeProvider>
  );
}

export default App;
