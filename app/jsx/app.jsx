
// ##### eScholarship UI Library ##### //

// ***** Libraries ***** //

import 'details-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// ***** Components ***** //

import AboutLayout from './layouts/AboutLayout.jsx'
import BreadcrumbPage from './pages/BreadcrumbPage.jsx'
import ButtonPage from './pages/ButtonPage.jsx'
import CheckboxPage from './pages/CheckboxPage.jsx'
import CampusSelectorPage from './pages/CampusSelectorPage.jsx'
import ColumnBoxPage from './pages/ColumnBoxPage.jsx'
import ColumnDividePage from './pages/ColumnDividePage.jsx'
import ColumnsPage from './pages/ColumnsPage.jsx'
import ExportPage from './pages/ExportPage.jsx'
import FacetBoxPage from './pages/FacetBoxPage.jsx'
import FilterPage from './pages/FilterPage.jsx'
import FrontmatterPage from './pages/FrontmatterPage.jsx'
import Home from './pages/Home.jsx'
import FooterPage from './pages/FooterPage.jsx'
import Header1Page from './pages/Header1Page.jsx'
import Header2Page from './pages/Header2Page.jsx'
import InfoPagesPage from './pages/InfoPagesPage.jsx'
import InputPage from './pages/InputPage.jsx'
import Nav1Page from './pages/Nav1Page.jsx'
import Nav2Page from './pages/Nav2Page.jsx'
import Nav3Page from './pages/Nav3Page.jsx'
import PaginationPage from './pages/PaginationPage.jsx'
import ScholWorksPage from './pages/ScholWorksPage.jsx'
import SearchLayout from './layouts/SearchLayout.jsx'
import Search1Page from './pages/Search1Page.jsx'
import Search2Page from './pages/Search2Page.jsx'
import SidebarNavPage from './pages/SidebarNavPage.jsx'
import SortPage from './pages/SortPage.jsx'
import Subheader1Page from './pages/Subheader1Page.jsx'
import Subheader2Page from './pages/Subheader2Page.jsx'
import TextlinkPage from './pages/TextlinkPage.jsx'
import Test from './pages/Test.jsx'

// ***** UI Library Home Page ***** //

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

// ***** React Router ***** //

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={AboutLayout} />
      <Route path="/breadcrumb" component={BreadcrumbPage} />
      <Route path="/campusselector" component={CampusSelectorPage} />
      <Route path="/button" component={ButtonPage} />
      <Route path="/checkbox" component={CheckboxPage} />
      <Route path="/columnbox" component={ColumnBoxPage} />
      <Route path="/columndivide" component={ColumnDividePage} />
      <Route path="/columns" component={ColumnsPage} />
      <Route path="/export" component={ExportPage} />
      <Route path="/input" component={InputPage} />
      <Route path="/facetbox" component={FacetBoxPage} />
      <Route path="/frontmatter" component={FrontmatterPage} />
      <Route path="/filter" component={FilterPage} />
      <Route path="/footer" component={FooterPage} />
      <Route path="/header1" component={Header1Page} />
      <Route path="/header2" component={Header2Page} />
      <Route path="/infopages" component={InfoPagesPage} />
      <Route path="/nav1" component={Nav1Page} />
      <Route path="/nav2" component={Nav2Page} />
      <Route path="/nav3" component={Nav3Page} />
      <Route path="/pagination" component={PaginationPage} />
      <Route path="/scholworks" component={ScholWorksPage} />
      <Route path="/search1" component={Search1Page} />
      <Route path="/search2" component={Search2Page} />
      <Route path="/searchlayout" component={SearchLayout} />
      <Route path="/sidebarnav" component={SidebarNavPage} />
      <Route path="/sort" component={SortPage} />
      <Route path="/test" component={Test} />
      <Route path="/subheader1" component={Subheader1Page} />
      <Route path="/subheader2" component={Subheader2Page} />
      <Route path="/textlink" component={TextlinkPage} />
    </Route>
  </Router>
), document.getElementById('main'))
