import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageHome from '../PageHome'
import PageAccount from '../PageAccount'
import PageNotFound from '../PageNotFound'

import './index.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={PageHome} />
      <Route path="/account" component={PageAccount} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)

export default App
