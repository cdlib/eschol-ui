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
    this.state = {wizardStep: 1, stepActive: null}
  }

  render() {
    return (
      <div className={this.state.stepActive ? "c-wizard--active" : "c-wizard"}>

        {/* Temporary buttons to test toggle */}
        <button onClick = {()=> this.setState({wizardStep: 1, stepActive: false})}>Role</button>
        <button onClick = {()=> this.setState({wizardStep: 2, stepActive: true})}>Campus</button>
        <button onClick = {()=> this.setState({wizardStep: 3, stepActive: false})}>Type</button>
        <button onClick = {()=> this.setState({wizardStep: 4, stepActive: false})}>Unit</button>
        <button onClick = {()=> this.setState({wizardStep: 5, stepActive: false})}>Series</button>
        <button onClick = {()=> this.setState({wizardStep: 6, stepActive: false})}>Link</button>
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
