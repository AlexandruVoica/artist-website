import React from "react";

import { CompositeProvider } from "store";

import Layout from "components/Layout";
import Header from "components/Header";
import Main from "components/Main";
import Side from "components/Side";

const App = () => {
  return (
    <CompositeProvider>
      <Layout
        header={<Header />}
        main={<Main />}
        side={<Side />}
        footer={null}
      />
    </CompositeProvider>
  );
};

export default App;
