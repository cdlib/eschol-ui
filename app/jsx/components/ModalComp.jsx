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
        {/* onClick element below can be a button or link */}
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="c-modal--open"
           overlayClassName="c-modal__overlay"
        >
          <div className="modal__header">
            <h2>Modal Heading</h2>
          </div>
          <div className="modal__content">
            <p>Modal content goes here.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sapiente possimus architecto id, incidunt velit earum, quidem repellendus sit officiis, consequatur vero provident molestiae dolores odit temporibus! Temporibus tenetur at, sapiente commodi neque repellat unde illum voluptatem mollitia laudantium quod facere nemo rem totam ducimus quo. Sed eum, ut eos.
            </p>
            <p>Repellendus eos consequuntur ex eveniet, quidem dolore maiores voluptatibus dolor, odit ea impedit esse sequi et ipsa saepe, fuga hic magnam eius eaque sapiente est. Labore aperiam molestiae quia repellendus dolorum saepe obcaecati numquam harum delectus tempore nisi nihil eius facere dolores minima voluptatem ab quasi, amet esse? Aperiam, ducimus.
            </p>
            <p>Non temporibus necessitatibus eveniet vero ipsum voluptatem, ullam earum veniam quisquam, reprehenderit repellendus veritatis a maxime itaque unde doloribus, odit, sapiente quae laudantium pariatur enim nulla velit labore. Velit eos possimus voluptas alias vel ea, harum, totam dolorem dolor nemo repudiandae id fugiat ducimus fugit temporibus fuga, assumenda deserunt sint.
            </p>
            <p>Expedita nesciunt accusamus autem sit laborum, molestias maiores ex totam exercitationem, inventore culpa perspiciatis, eius impedit temporibus! Cumque incidunt vero, possimus voluptatem, totam reprehenderit neque fugiat, nulla id ipsam officiis aliquam hic provident voluptate rem ab eius deserunt debitis! Vero alias asperiores voluptas doloremque quasi cumque, distinctio debitis blanditiis officiis!
            </p>
            <p>Nisi harum, ab deserunt suscipit ratione nostrum mollitia expedita quisquam accusantium neque, a asperiores reprehenderit eius voluptate labore ea, laborum assumenda atque alias facilis impedit ad. Dolorum eligendi esse a atque corporis excepturi sapiente! Itaque, porro sed, ratione cumque laborum ab ad molestias, temporibus deleniti inventore sit, repudiandae eos. Assumenda?
            </p>
            <p>Quam beatae a nesciunt totam. Non incidunt voluptas atque hic similique blanditiis odio deleniti velit suscipit provident, ipsa vel, at! Quibusdam esse sit accusamus suscipit enim ex maiores, odit deserunt? Ab quas officiis eaque qui odit accusantium, vitae porro nam labore assumenda asperiores repellat, laudantium, similique praesentium voluptate distinctio explicabo.
            </p>
            <p>Eos quas ducimus minima ipsa sapiente dicta enim ab odio qui, laborum eveniet quae harum dolore facilis sint magni mollitia dolor, deserunt quos iusto cumque ipsam possimus obcaecati. Eos impedit optio officia, quasi tempore labore laboriosam dicta rem sed doloribus in voluptate, est fugiat molestias sapiente alias nostrum molestiae. Consequatur.
            </p>
            <p>Tenetur provident inventore possimus voluptate iusto, mollitia architecto consectetur illo quae iste dolorum tempora dolor adipisci, commodi aut. Distinctio sint, veritatis aliquam repudiandae magnam ea est. Minima dolorem perferendis, ipsam accusamus? Et, quasi repudiandae aspernatur rem praesentium labore amet officiis earum, temporibus illum magnam ex corrupti facere, aperiam necessitatibus obcaecati.
            </p>
          </div>
          <div className="c-modal__footer">
            <button className="c-modal__button-close" onClick={this.handleCloseModal}>Cancel</button>
            <button className="o-button__7">Clear All</button>
            <button className="o-button__3">Select</button>
          </div>
        </ReactModal>
      </div>
    )
  }
}

module.exports = ModalComp;
