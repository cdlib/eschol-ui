// ##### Deposit Wizard Component ##### //

import React from 'react'
import WizardCampusComp from './WizardCampusComp.jsx'
import WizardLinkComp from './WizardLinkComp.jsx'
import WizardRoleComp from './WizardRoleComp.jsx'
import WizardSeriesComp from './WizardSeriesComp.jsx'
import WizardTypeComp from './WizardTypeComp.jsx'
import WizardUnitComp from './WizardUnitComp.jsx'

class WizardComp extends React.Component {

  constructor(props){
    super(props)
    this.state = {wizardStep: 1}
  }

  render() {
    return (
      <div className="c-wizard">

        {/* Temporary buttons to test toggle */}
        <button onClick = {()=> this.setState({wizardStep: 1})}>Role</button>
        <button onClick = {()=> this.setState({wizardStep: 2})}>Campus</button>
        <button onClick = {()=> this.setState({wizardStep: 3})}>Type</button>
        <button onClick = {()=> this.setState({wizardStep: 4})}>Unit</button>
        <button onClick = {()=> this.setState({wizardStep: 5})}>Series</button>
        <button onClick = {()=> this.setState({wizardStep: 6})}>Link</button>
        <br/><br/>

        {this.state.wizardStep === 1 ? <WizardRoleComp /> : null}
        {this.state.wizardStep === 2 ? <WizardCampusComp /> : null}
        {this.state.wizardStep === 3 ? <WizardTypeComp /> : null}
        {this.state.wizardStep === 4 ? <WizardUnitComp /> : null}
        {this.state.wizardStep === 5 ? <WizardSeriesComp /> : null}
        {this.state.wizardStep === 6 ? <WizardLinkComp /> : null}
      </div>
    )
  }
}

module.exports = WizardComp;
