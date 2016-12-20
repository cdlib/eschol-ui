
// ##### eScholarship UI Library ##### //

// ***** Libraries ***** //

import 'details-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// ***** Components ***** //

import AboutLayout from './layouts/AboutLayout.jsx'
import BreadcrumbDisp from './display/BreadcrumbDisp.jsx'
import ButtonDisp from './display/ButtonDisp.jsx'
import CampusSelectorDisp from './display/CampusSelectorDisp.jsx'
import CarouselDisp from './display/CarouselDisp.jsx'
import ColumnBoxDisp from './display/ColumnBoxDisp.jsx'
import ColumnsDisp from './display/ColumnsDisp.jsx'
import CheckboxDisp from './display/CheckboxDisp.jsx'
import ExportDisp from './display/ExportDisp.jsx'
import FacetBoxDisp from './display/FacetBoxDisp.jsx'
import FilterDisp from './display/FilterDisp.jsx'
import FrontmatterDisp from './display/FrontmatterDisp.jsx'
import Home from './display/Home.jsx'
import FooterDisp from './display/FooterDisp.jsx'
import Header1Disp from './display/Header1Disp.jsx'
import Header2Disp from './display/Header2Disp.jsx'
import InfoPagesDisp from './display/InfoPagesDisp.jsx'
import InputDisp from './display/InputDisp.jsx'
import JournalInfoDisp from './display/JournalInfoDisp.jsx'
import JournalLayout from './layouts/JournalLayout.jsx'
import Nav1Disp from './display/Nav1Disp.jsx'
import Nav2Disp from './display/Nav2Disp.jsx'
import Nav3Disp from './display/Nav3Disp.jsx'
import PaginationDisp from './display/PaginationDisp.jsx'
import ScholWorksDisp from './display/ScholWorksDisp.jsx'
import SearchLayout from './layouts/SearchLayout.jsx'
import Search1Disp from './display/Search1Disp.jsx'
import Search2Disp from './display/Search2Disp.jsx'
import SidebarNavDisp from './display/SidebarNavDisp.jsx'
import SortDisp from './display/SortDisp.jsx'
import Subheader1Disp from './display/Subheader1Disp.jsx'
import Subheader2Disp from './display/Subheader2Disp.jsx'
import Tab1Disp from './display/Tab1Disp.jsx'
import Tab2Disp from './display/Tab2Disp.jsx'
import Tab3Disp from './display/Tab3Disp.jsx'
import Tab4Disp from './display/Tab4Disp.jsx'
import Tab5Disp from './display/Tab5Disp.jsx'
import TabsDisp from './display/TabsDisp.jsx'
import TextlinkDisp from './display/TextlinkDisp.jsx'
import Test from './display/Test.jsx'

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
      <Route path="/breadcrumb" component={BreadcrumbDisp} />
      <Route path="/campusselector" component={CampusSelectorDisp} />
      <Route path="/carousel" component={CarouselDisp} />
      <Route path="/button" component={ButtonDisp} />
      <Route path="/checkbox" component={CheckboxDisp} />
      <Route path="/columnbox" component={ColumnBoxDisp} />
      <Route path="/columns" component={ColumnsDisp} />
      <Route path="/export" component={ExportDisp} />
      <Route path="/input" component={InputDisp} />
      <Route path="/facetbox" component={FacetBoxDisp} />
      <Route path="/frontmatter" component={FrontmatterDisp} />
      <Route path="/filter" component={FilterDisp} />
      <Route path="/footer" component={FooterDisp} />
      <Route path="/header1" component={Header1Disp} />
      <Route path="/header2" component={Header2Disp} />
      <Route path="/infodisplay" component={InfoPagesDisp} />
      <Route path="/journalinfo" component={JournalInfoDisp} />
      <Route path="/journal" component={JournalLayout} />
      <Route path="/nav1" component={Nav1Disp} />
      <Route path="/nav2" component={Nav2Disp} />
      <Route path="/nav3" component={Nav3Disp} />
      <Route path="/pagination" component={PaginationDisp} />
      <Route path="/scholworks" component={ScholWorksDisp} />
      <Route path="/search1" component={Search1Disp} />
      <Route path="/search2" component={Search2Disp} />
      <Route path="/searchlayout" component={SearchLayout} />
      <Route path="/sidebarnav" component={SidebarNavDisp} />
      <Route path="/sort" component={SortDisp} />
      <Route path="/test" component={Test} />
      <Route path="/subheader1" component={Subheader1Disp} />
      <Route path="/subheader2" component={Subheader2Disp} />
      <Route path="/tab1" component={Tab1Disp} />
      <Route path="/tab2" component={Tab2Disp} />
      <Route path="/tab3" component={Tab3Disp} />
      <Route path="/tab4" component={Tab4Disp} />
      <Route path="/tab5" component={Tab5Disp} />
      <Route path="/tabs" component={TabsDisp} />
      <Route path="/textlink" component={TextlinkDisp} />
    </Route>
  </Router>
), document.getElementById('main'))
