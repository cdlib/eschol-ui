// ##### Deposit Wizard Component ##### //

import React from 'react'
import WizardCampusComp from './WizardCampusComp.jsx'
import WizardLinkComp from './WizardLinkComp.jsx'
import WizardRoleComp from './WizardRoleComp.jsx'
import WizardSeriesComp from './WizardSeriesComp.jsx'
import WizardTypeComp from './WizardTypeComp.jsx'
import WizardUnitComp from './WizardUnitComp.jsx'

class WizardComp extends React.Component {
  render() {
    return (
      <div className="c-wizard">
        <WizardRoleComp />
        <WizardCampusComp />
        <WizardTypeComp />
        <WizardUnitComp />
        <WizardSeriesComp />
        <WizardLinkComp />
      </div>
    )
  }
}

module.exports = WizardComp;
