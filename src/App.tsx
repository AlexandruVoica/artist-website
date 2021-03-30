import React from 'react';
import './App.scss';
import Side from "./components/Side";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {CompositeProvider} from "./store";

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
