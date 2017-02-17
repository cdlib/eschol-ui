
// ##### eScholarship UI Library ##### //

// ***** Libraries ***** //

import 'babel-polyfill'
import 'details-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// ***** Components ***** //

import AboutLayout from './layouts/AboutLayout.jsx'
import AuthorListDisp from './display/AuthorListDisp.jsx'
import BreadcrumbDisp from './display/BreadcrumbDisp.jsx'
import BrowseDepartmentsLayout from './layouts/BrowseDepartmentsLayout.jsx'
import ButtonDisp from './display/ButtonDisp.jsx'
import CampusSelectorDisp from './display/CampusSelectorDisp.jsx'
import MarqueeDisp from './display/MarqueeDisp.jsx'
import ColumnBoxDisp from './display/ColumnBoxDisp.jsx'
import ColumnsDisp from './display/ColumnsDisp.jsx'
import ImageContentDisp from './display/ImageContentDisp.jsx'
import CheckboxDisp from './display/CheckboxDisp.jsx'
import DivideContentDisp from './display/DivideContentDisp.jsx'
import DownloadDisp from './display/DownloadDisp.jsx'
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
import ItemActionsDisp from './display/ItemActionsDisp.jsx'
import JournalItemLayout from './layouts/JournalItemLayout.jsx'
import JournalInfoDisp from './display/JournalInfoDisp.jsx'
import JournalHomeLayout from './layouts/JournalHomeLayout.jsx'
import JumpDisp from './display/JumpDisp.jsx'
import LanguageDisp from './display/LanguageDisp.jsx'
import NavDisp from './display/NavDisp.jsx'
import Nav1Disp from './display/Nav1Disp.jsx'
import Nav2Disp from './display/Nav2Disp.jsx'
import NavBarDisp from './display/NavBarDisp.jsx'
import PaginationDisp from './display/PaginationDisp.jsx'
import PubDataDisp from './display/PubDataDisp.jsx'
import PublishedLocationDisp from './display/PublishedLocationDisp.jsx'
import ScholWorksDisp from './display/ScholWorksDisp.jsx'
import SearchLayout from './layouts/SearchLayout.jsx'
import Search1Disp from './display/Search1Disp.jsx'
import Search2Disp from './display/Search2Disp.jsx'
import ShareDisp from './display/ShareDisp.jsx'
import SidebarNavDisp from './display/SidebarNavDisp.jsx'
import SocialIconsDisp from './display/SocialIconsDisp.jsx'
import SortDisp from './display/SortDisp.jsx'
import Subheader1Disp from './display/Subheader1Disp.jsx'
import Subheader2Disp from './display/Subheader2Disp.jsx'
import TabContent1Disp from './display/TabContent1Disp.jsx'
import TabContent2Disp from './display/TabContent2Disp.jsx'
import TabContent3Disp from './display/TabContent3Disp.jsx'
import TabContent4Disp from './display/TabContent4Disp.jsx'
import TabContent5Disp from './display/TabContent5Disp.jsx'
import TableDisp from './display/TableDisp.jsx'
import TabsDisp from './display/TabsDisp.jsx'
import TextlinkDisp from './display/TextlinkDisp.jsx'
import Test from './display/Test.jsx'
import ToggleContentDisp from './display/ToggleContentDisp.jsx'
import ToggleListDisp from './display/ToggleListDisp.jsx'
import WellDisp from './display/WellDisp.jsx'

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
      <Route path="/authorlist" component={AuthorListDisp} />
      <Route path="/breadcrumb" component={BreadcrumbDisp} />
      <Route path="/browsedepartments" component={BrowseDepartmentsLayout} />
      <Route path="/campusselector" component={CampusSelectorDisp} />
      <Route path="/button" component={ButtonDisp} />
      <Route path="/checkbox" component={CheckboxDisp} />
      <Route path="/columnbox" component={ColumnBoxDisp} />
      <Route path="/columns" component={ColumnsDisp} />
      <Route path="/dividecontent" component={DivideContentDisp} />
      <Route path="/download" component={DownloadDisp} />
      <Route path="/export" component={ExportDisp} />
      <Route path="/imagecontent" component={ImageContentDisp} />
      <Route path="/input" component={InputDisp} />
      <Route path="/facetbox" component={FacetBoxDisp} />
      <Route path="/frontmatter" component={FrontmatterDisp} />
      <Route path="/filter" component={FilterDisp} />
      <Route path="/footer" component={FooterDisp} />
      <Route path="/header1" component={Header1Disp} />
      <Route path="/header2" component={Header2Disp} />
      <Route path="/infopages" component={InfoPagesDisp} />
      <Route path="/itemactions" component={ItemActionsDisp} />
      <Route path="/journalhome" component={JournalHomeLayout} />
      <Route path="/journalinfo" component={JournalInfoDisp} />
      <Route path="/journalitem" component={JournalItemLayout} />
      <Route path="/jump" component={JumpDisp} />
      <Route path="/language" component={LanguageDisp} />
      <Route path="/marquee" component={MarqueeDisp} />
      <Route path="/nav" component={NavDisp} />
      <Route path="/nav1" component={Nav1Disp} />
      <Route path="/nav2" component={Nav2Disp} />
      <Route path="/navbar" component={NavBarDisp} />
      <Route path="/pagination" component={PaginationDisp} />
      <Route path="/pubdata" component={PubDataDisp} />
      <Route path="/publishedlocation" component={PublishedLocationDisp} />
      <Route path="/scholworks" component={ScholWorksDisp} />
      <Route path="/search1" component={Search1Disp} />
      <Route path="/search2" component={Search2Disp} />
      <Route path="/searchlayout" component={SearchLayout} />
      <Route path="/sidebarnav" component={SidebarNavDisp} />
      <Route path="/socialicons" component={SocialIconsDisp} />
      <Route path="/sort" component={SortDisp} />
      <Route path="/test" component={Test} />
      <Route path="/share" component={ShareDisp} />
      <Route path="/subheader1" component={Subheader1Disp} />
      <Route path="/subheader2" component={Subheader2Disp} />
      <Route path="/table" component={TableDisp} />
      <Route path="/tabcontent1" component={TabContent1Disp} />
      <Route path="/tabcontent2" component={TabContent2Disp} />
      <Route path="/tabcontent3" component={TabContent3Disp} />
      <Route path="/tabcontent4" component={TabContent4Disp} />
      <Route path="/tabcontent5" component={TabContent5Disp} />
      <Route path="/tabs" component={TabsDisp} />
      <Route path="/textlink" component={TextlinkDisp} />
      <Route path="/togglecontent" component={ToggleContentDisp} />
      <Route path="/togglelist" component={ToggleListDisp} />
      <Route path="/well" component={WellDisp} />
    </Route>
  </Router>
), document.getElementById('main'))
