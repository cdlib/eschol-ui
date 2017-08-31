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
    this.state = {wizardStep: 1, wizardDir: 'fwd', setFocus: false}
  }

  goForward = (step) =>{this.setState({wizardStep: step, wizardDir: 'fwd', prevStep: this.state.wizardStep})}

  goBackward = ()=>{
    if (this.state.prevStep)
      this.setState({wizardStep: this.state.prevStep, wizardDir: 'bkw', prevStep: null})
    else
      this.setState({wizardStep: this.state.wizardStep - 1, wizardDir: 'bkw', prevStep: null})
  }

  tabFocus = ()=> {
    // focus method:
    // document.querySelector('.c-wizard__step h1').focus()
    document.querySelector(".c-wizard__step").style.backgroundColor = 'red';
    this.setState({setFocus: true})
  }

  render() {
    return (
      <div className="c-wizard">

        <div className={this.state.wizardStep === 1 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 1 ? null : true}>
          <WizardRoleComp goForward = {this.goForward} tabFocus />
        </div>

        <div className={this.state.wizardStep === 2 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 2 ? null : true}>
          <WizardCampusComp goForward = {this.goForward} goBackward = {this.goBackward} tabFocus />
        </div>

        <div className={this.state.wizardStep === 3 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 3 ? null : true}>
          <WizardTypeComp goForward = {this.goForward} goBackward = {this.goBackward} tabFocus />
        </div>

        <div className={this.state.wizardStep === 4 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 4 ? null : true}>
          <WizardUnitComp goForward = {this.goForward} goBackward = {this.goBackward} tabFocus />
        </div>

        <div className={this.state.wizardStep === 5 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 5 ? null : true}>
          <WizardSeriesComp goForward = {this.goForward} goBackward = {this.goBackward} tabFocus />
        </div>

        <div className={this.state.wizardStep === 6 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`} aria-hidden={this.state.wizardStep === 6 ? null : true}>
          <WizardLinkComp goBackward = {this.goBackward} tabFocus />
        </div>

      </div>
    )
  }
}

module.exports = WizardComp;
