// ##### Deposit Wizard Component ##### //

import React from 'react'
import ReactModal from 'react-modal'

class DepositWizardComp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="c-depositwizard">
        {/* onClick element below can be a button or link */}
        <button onClick={this.handleOpenModal}>Trigger Deposit Wizard</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="c-depositwizard--open"
           overlayClassName="c-depositwizard__overlay"
        >
          <div className="c-depositwizard__header">
            <h2>Deposit Wizard</h2>
          </div>
          <div className="c-depositwizard__content">
            Content goes here.
          </div>
          <div className="c-depositwizard__footer">
            <button className="c-depositwizard__button-close" onClick={this.handleCloseModal}>Cancel</button>
            <button className="o-button__7">Clear All</button>
            <button className="o-button__3">Select</button>
          </div>
        </ReactModal>
      </div>
    )
  }
}

module.exports = DepositWizardComp;
