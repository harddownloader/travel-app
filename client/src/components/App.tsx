import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import MainPage from './MainPage'
import CountryPage from './CountryPage'

type App = () => JSX.Element
const App: App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route path='/:id'>
        <CountryPage />
      </Route>
    </Switch>
    </>
  )
}

export default App