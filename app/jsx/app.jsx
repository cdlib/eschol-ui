
// ##### Top-level React App ##### //

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import AboutLayout from './layouts/AboutLayout.jsx'
import BreadcrumbPage from './pages/BreadcrumbPage.jsx'
import ButtonPage from './pages/ButtonPage.jsx'
import CheckboxPage from './pages/CheckboxPage.jsx'
import ColumnBoxPage from './pages/ColumnBoxPage.jsx'
import ColumnsPage from './pages/ColumnsPage.jsx'
import ExportPage from './pages/ExportPage.jsx'
import FacetBoxPage from './pages/FacetBoxPage.jsx'
import FilterPage from './pages/FilterPage.jsx'
import Home from './pages/Home.jsx'
import FooterPage from './pages/FooterPage.jsx'
import GlobalNavPage from './pages/GlobalNavPage.jsx'
import HeaderPage1 from './pages/HeaderPage1.jsx'
import HeaderPage2 from './pages/HeaderPage2.jsx'
import HeaderPage3 from './pages/HeaderPage3.jsx'
import HeaderPage4 from './pages/HeaderPage4.jsx'
import InfoPagesPage from './pages/InfoPagesPage.jsx'
import InputPage from './pages/InputPage.jsx'
import PaginationPage from './pages/PaginationPage.jsx'
import ScholWorksPage from './pages/ScholWorksPage.jsx'
import SearchLayout from './layouts/SearchLayout.jsx'
import SearchPage1 from './pages/SearchPage1.jsx'
import SearchPage2 from './pages/SearchPage2.jsx'
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
          <h2>{this.props.children.type.name.replace("Page", "")}</h2>
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
      <Route path="/button" component={ButtonPage} />
      <Route path="/checkbox" component={CheckboxPage} />
      <Route path="/columnbox" component={ColumnBoxPage} />
      <Route path="/columns" component={ColumnsPage} />
      <Route path="/export" component={ExportPage} />
      <Route path="/input" component={InputPage} />
      <Route path="/facetbox" component={FacetBoxPage} />
      <Route path="/filter" component={FilterPage} />
      <Route path="/footer" component={FooterPage} />
      <Route path="/globalnav" component={GlobalNavPage} />
      <Route path="/header1" component={HeaderPage1} />
      <Route path="/header2" component={HeaderPage2} />
      <Route path="/header3" component={HeaderPage3} />
      <Route path="/header4" component={HeaderPage4} />
      <Route path="/infopages" component={InfoPagesPage} />
      <Route path="/pagination" component={PaginationPage} />
      <Route path="/scholworks" component={ScholWorksPage} />
      <Route path="/search1" component={SearchPage1} />
      <Route path="/search2" component={SearchPage2} />
      <Route path="/searchlayout" component={SearchLayout} />
      <Route path="/sidebarnav" component={SidebarNavPage} />
      <Route path="/sort" component={SortPage} />
      <Route path="/test" component={Test} />
      <Route path="/textlink" component={TextlinkPage} />
    </Route>
  </Router>
), document.getElementById('main'))
