// ##### Modal Component ##### //

// Adopted from: https://reactcommunity.org/react-modal/examples/css_classes.html

import React from 'react'
import ReactModal from 'react-modal'

class ModalComp extends React.Component {
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
      <div className="c-modal">
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="c-modal--open"
           overlayClassName="c-modal__overlay"
        >
          <p>Modal content to go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptates dignissimos, ipsam, nobis doloremque facere voluptatibus unde! Quae sint ad ipsa atque ipsam, ratione error. Aperiam, reiciendis quas voluptatum modi. Non, molestiae quibusdam est similique neque facere doloribus cupiditate eveniet!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    )
  }
}

module.exports = ModalComp;
