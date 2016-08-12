
// ##### Top-level React App ##### //

// ***** The vars below (when uncommented) are pulling in the NPM packages into bundle.js via Browserify, but they're not loading in the app, for some reason. ***** //

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link

var Home = require('./pages/Home.jsx');
var PageFooter = require('./pages/PageFooter.jsx');
var PageHeader = require('./pages/PageHeader.jsx');

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
  IndexLink
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
