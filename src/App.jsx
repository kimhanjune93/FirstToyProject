import React from "react";
import './App.css';
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router";
import { history } from "./redux/configStore";

import Header from "./shared/Header";
import Footer from "./shared/Footer";

// Components
import ItemList from "./pages/ItemList";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header/>
      <Switch>
        <Route component={ItemList} path ="/" exact />
      </Switch>
      <Footer/>
    </ConnectedRouter>
  );
}

export default App;
