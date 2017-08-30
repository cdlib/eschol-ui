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
    this.state = {wizardStep: 1, wizardDir: "fwd"}
  }

  goForward = (step) =>{this.setState({wizardStep: step, wizardDir: "fwd", prevStep: this.state.wizardStep})}

  goBackward = ()=>{
    if (this.state.prevStep)
      this.setState({wizardStep: this.state.prevStep, wizardDir: "bkw", prevStep: null})
    else
      this.setState({wizardStep: this.state.wizardStep - 1, wizardDir: "bkw", prevStep: null})
  }

  render() {
    return (
      <div>

      {/* Temporary buttons to test toggle */}
        <button onClick = {()=> this.setState({wizardStep: 1})}>Role</button>
        <button onClick = {()=> this.setState({wizardStep: 2})}>Campus</button>
        <button onClick = {()=> this.setState({wizardStep: 3})}>Type</button>
        <button onClick = {()=> this.setState({wizardStep: 4})}>Unit</button>
        <button onClick = {()=> this.setState({wizardStep: 5})}>Series</button>
        <button onClick = {()=> this.setState({wizardStep: 6})}>Link</button>
        <br/><br/>

        <div className="c-wizard">

          <div className={this.state.wizardStep === 1 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardRoleComp goForward = {this.goForward} />
          </div>

          <div className={this.state.wizardStep === 2 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardCampusComp goForward = {this.goForward} goBackward = {this.goBackward} />
          </div>

          <div className={this.state.wizardStep === 3 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardTypeComp goForward = {this.goForward} goBackward = {this.goBackward} />
          </div>

          <div className={this.state.wizardStep === 4 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardUnitComp goForward = {this.goForward} goBackward = {this.goBackward} />
          </div>

          <div className={this.state.wizardStep === 5 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardSeriesComp goForward = {this.goForward} goBackward = {this.goBackward} />
          </div>

          <div className={this.state.wizardStep === 6 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardLinkComp goBackward = {this.goBackward} />
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
