
// ##### Top-level React App ##### //

// ***** The vars below (when uncommented) are pulling in the NPM packages into bundle.js via Browserify, but they're not loading in the app, for some reason. ***** //

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link
// window.ReactRouter = Router;

import Home from './pages/Home.jsx'
import PageFooter from './pages/PageFooter.jsx'
import PageHeader from './pages/PageHeader.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui-library-header">
          <h1><Link to="/">eScholarship UI Library</Link></h1>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const { // set React Router prefixes:
  Router,
  Route,
  IndexRoute,
  Redirect,
  Link,
  IndexLink,
  browserHistory
} = ReactRouter

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/footer" component={PageFooter} />
      <Route path="/header" component={PageHeader} />
    </Route>
  </Router>
), document.getElementById('main'))
