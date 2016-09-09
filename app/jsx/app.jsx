
// ##### Top-level React App ##### //

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import AboutLayout from './layouts/AboutLayout.jsx'
import BreadcrumbPage from './pages/BreadcrumbPage.jsx'
import ColumnBoxPage from './pages/ColumnBoxPage.jsx'
import ColumnsPage from './pages/ColumnsPage.jsx'
import Home from './pages/Home.jsx'
import FcontrolPage from './pages/FcontrolPage.jsx'
import FooterPage from './pages/FooterPage.jsx'
import GlobalNavPage from './pages/GlobalNavPage.jsx'
import HeaderPage from './pages/HeaderPage.jsx'
import InfoPagesPage from './pages/InfoPagesPage.jsx'
import PaginationPage from './pages/PaginationPage.jsx'
import ScholWorksPage from './pages/ScholWorksPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import SidebarNavPage from './pages/SidebarNavPage.jsx'
import SortPage from './pages/SortPage.jsx'
import TextlinkPage from './pages/TextlinkPage.jsx'
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
      <Route path="/about" component={AboutLayout} />
      <Route path="/breadcrumb" component={BreadcrumbPage} />
      <Route path="/columnbox" component={ColumnBoxPage} />
      <Route path="/columns" component={ColumnsPage} />
      <Route path="/fcontrol" component={FcontrolPage} />
      <Route path="/footer" component={FooterPage} />
      <Route path="/globalnav" component={GlobalNavPage} />
      <Route path="/header" component={HeaderPage} />
      <Route path="/infopages" component={InfoPagesPage} />
      <Route path="/pagination" component={PaginationPage} />
      <Route path="/scholworks" component={ScholWorksPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/sidebarnav" component={SidebarNavPage} />
      <Route path="/sort" component={SortPage} />
      <Route path="/test" component={Test} />
      <Route path="/textlink" component={TextlinkPage} />
    </Route>
  </Router>
), document.getElementById('main'))
