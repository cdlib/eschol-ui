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
            <WizardRoleComp goForward = {()=>this.setState({wizardStep: 2, wizardDir: "fwd"})} />
          </div>

          <div className={this.state.wizardStep === 2 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardCampusComp goForward = {()=>this.setState({wizardStep: 3, wizardDir: "fwd"})} goBackward = {()=>this.setState({wizardStep: 1, wizardDir: "bkw"})} />
          </div>

          <div className={this.state.wizardStep === 3 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardTypeComp goForward = {()=>this.setState({wizardStep: 4, wizardDir: "fwd"})} goBackward = {()=>this.setState({wizardStep: 2, wizardDir: "bkw"})} />
          </div>

          <div className={this.state.wizardStep === 4 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardUnitComp goForward = {()=>this.setState({wizardStep: 5, wizardDir: "fwd"})} goBackward = {()=>this.setState({wizardStep: 3, wizardDir: "bkw"})} />
          </div>

          <div className={this.state.wizardStep === 5 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardSeriesComp goForward = {()=>this.setState({wizardStep: 6, wizardDir: "fwd"})} goBackward = {()=>this.setState({wizardStep: 4, wizardDir: "bkw"})} />
          </div>

          <div className={this.state.wizardStep === 6 ? `c-wizard__current-${this.state.wizardDir}` : `c-wizard__standby-${this.state.wizardDir}`}>
            <WizardLinkComp goBackward = {()=>this.setState({wizardStep: 5, wizardDir: "bkw"})} />
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
