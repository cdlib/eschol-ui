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
      <div>

      {/* Temporary buttons to test toggle */}
        <button onClick = {()=> this.setState({wizardStep: 1, stepActive: true})}>Role</button>
        <button onClick = {()=> this.setState({wizardStep: 2, stepActive: true})}>Campus</button>
        <button onClick = {()=> this.setState({wizardStep: 3, stepActive: true})}>Type</button>
        <button onClick = {()=> this.setState({wizardStep: 4, stepActive: true})}>Unit</button>
        <button onClick = {()=> this.setState({wizardStep: 5, stepActive: true})}>Series</button>
        <button onClick = {()=> this.setState({wizardStep: 6, stepActive: true})}>Link</button>
        <br/><br/>

        <div className="c-wizard">

          <div className={this.state.wizardStep === 1 ? "c-wizard__current" : "c-wizard__standby"}>
            <WizardRoleComp />
          </div>

          <div className={this.state.wizardStep === 2 ? "c-wizard__current" : "c-wizard__standby"}>
            <WizardCampusComp />
          </div>

          <div className={this.state.wizardStep === 3 ? "c-wizard__current" : "c-wizard__standby"}>
            <WizardTypeComp />
          </div>

          <div className={this.state.wizardStep === 4 ? "c-wizard__current" : "c-wizard__standby"}>
            <WizardUnitComp />
          </div>

          <div className={this.state.wizardStep === 5 ? "c-wizard__current" : "c-wizard__standby"}>
            <WizardSeriesComp />
          </div>

          <div className={this.state.wizardStep === 6 ? "c-wizard__current" : "c-wizard__standby"}>
            <WizardLinkComp />
          </div>

        </div>


          {/*}
          <div className={this.state.stepActive ? "c-wizard--active" : "c-wizard"}>

          {this.state.wizardStep === 1 ? <WizardRoleComp /> : null}
          {this.state.wizardStep === 2 ? <WizardCampusComp /> : null}
          {this.state.wizardStep === 3 ? <WizardTypeComp /> : null}
          {this.state.wizardStep === 4 ? <WizardUnitComp /> : null}
          {this.state.wizardStep === 5 ? <WizardSeriesComp /> : null}
          {this.state.wizardStep === 6 ? <WizardLinkComp /> : null}

          </div>
          {*/}

      </div>
    )
  }
}

module.exports = WizardComp;
