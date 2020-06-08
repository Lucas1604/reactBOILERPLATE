import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopBar from "./components/TopBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
