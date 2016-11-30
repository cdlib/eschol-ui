// ##### About Layout ##### //

import React from 'react'
import Header2Comp from '../components/Header2Comp.jsx'
import Subheader2Comp from '../components/Subheader2Comp.jsx'
import BreadcrumbComp from '../components/BreadcrumbComp.jsx'
import FooterComp from '../components/FooterComp.jsx'

class JournalLayout extends React.Component {
  render() {
    return (
      <div className="l_about">
        <Header2Comp />
        <Subheader2Comp />
        <BreadcrumbComp />
        <div className="c-columns">
          <main>
            <section className="o-columnbox-main">
              [main content to go here]
            </section>
          </main>
          <aside>
            <section className="o-columnbox-sidebar">
              [sidebar content to go here]        
            </section>
          </aside>
        </div>
        <FooterComp />
      </div>
    )
  }
}

module.exports = JournalLayout;
