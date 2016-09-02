
// ##### Top-level React App ##### //

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import PageColumnBox from './pages/PageColumnBox.jsx'
import PageColumns from './pages/PageColumns.jsx'
import Home from './pages/Home.jsx'
import PageFooter from './pages/PageFooter.jsx'
import PageGlobalNav from './pages/PageGlobalNav.jsx'
import PageHeader from './pages/PageHeader.jsx'
import PageSearch from './pages/PageSearch.jsx'
import Test from './pages/Test.jsx'

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

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/columnbox" component={PageColumnBox} />
      <Route path="/columns" component={PageColumns} />
      <Route path="/footer" component={PageFooter} />
      <Route path="/globalnav" component={PageGlobalNav} />
      <Route path="/header" component={PageHeader} />
      <Route path="/search" component={PageSearch} />
      <Route path="/test" component={Test} />
    </Route>
  </Router>
), document.getElementById('main'))
