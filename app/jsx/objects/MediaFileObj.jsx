// ##### Media File Object ##### //

import React from 'react'
import $ from 'jquery'
import ReactModal from 'react-modal'

class MediaFileObj extends React.Component {
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

  componentDidMount() {
    $('.o-mediafile__heading, .o-mediafile__description').dotdotdot({watch: 'window'});
  }
  render() {
    return (
      <div>

        <h2>Audio File (no preview image)</h2>

        <div className="o-mediafile--audio">
          <h2 className="o-mediafile__heading">
            <a href="">Outer Space Music</a>
          </h2>
          <div className="o-mediafile__preview" href="images/sample_audio.mp3" aria-label="play audio file">
            {/* No preview image for this type. To add, use:
            <img className="o-mediafile__image" src="[image path]" alt="[alt text]" /> */}
          </div>
          <button className="o-mediafile__button">Download</button>
          <div className="o-mediafile__description">
            Architecto quo praesentium, suscipit, qui est maxime ut repellendus earum odio ab, consequuntur saepe voluptatem commodi dolorum eos adipisci, fugiat tempore ipsa. Reprehenderit corrupti quae ea, veritatis iste, perspiciatis. Ad, reiciendis praesentium!
          </div>
        </div>

        <h2>Data or PDF File (no preview image)</h2>

        <div className="o-mediafile--data">
          <h2 className="o-mediafile__heading">
            <a href="">New Horizons File Archive</a>
          </h2>
          <div className="o-mediafile__preview" href="images/sample_audio.mp3">
            {/* No preview image for this type. To add, use:
            <img className="o-mediafile__image" src="[image path]" alt="[alt text]" /> */}
          </div>
          <button className="o-mediafile__button">Download</button>
          <div className="o-mediafile__description">
            Eaque, qui rerum fugiat sed. Error aperiam quo atque debitis doloremque. Adipisci, ab placeat! Atque vitae blanditiis, fuga necessitatibus harum libero, repudiandae quasi vero repellendus fugiat asperiores placeat tempore qui vel iusto!
          </div>
        </div>

        <h2>Image File (preview image; selected state)</h2>

        <div className="o-mediafile--image--selected">
          <h2 className="o-mediafile__heading">
            <a href="">New Horizons Full Trajectory - Side View</a>
          </h2>
          <div className="o-mediafile__preview" href="images/temp_new-horizons-data.png">
            <img className="o-mediafile__image" src="images/temp_new-horizons-data.png" alt="New horizons data" />
          </div>
          <button className="o-mediafile__button">Download</button>
          <div className="o-mediafile__description">
            Esse nulla ad veritatis dolorum, vitae maxime tenetur nemo. Quod eius corrupti provident nisi ullam, repellendus molestias, aliquam neque nulla dolorem, magnam commodi ratione enim ex, suscipit labore veniam deserunt nam exercitationem!
          </div>
        </div>

        <h2>Video File (no preview image)</h2>

        <div className="o-mediafile--video">
          <h2 className="o-mediafile__heading">
            <a href="">New Horizons Kuiper Belt Fly-through</a>
          </h2>
          <div className="o-mediafile__preview" href="images/sample_video.mp4" aria-label="play video file">
            {/* No preview image for this type. To add, use:
            <img className="o-mediafile__image" src="[image path]" alt="[alt text]" /> */}
          </div>
          <button className="o-mediafile__button">Download</button>
          <div className="o-mediafile__description">
            Veritatis veniam quidem voluptatem laborum necessitatibus iure facilis laudantium possimus sequi libero aliquid, adipisci explicabo, itaque odit ut delectus nemo quas, quia neque. Error cum porro pariatur vel ducimus aliquid quo adipisci.
          </div>
        </div>

        {/* Modal */}

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
            </div>
            <div className="c-modal__footer">
              <button className="c-modal__button-close" onClick={this.handleCloseModal}>Cancel</button>
              <button className="o-button__7">Clear All</button>
              <button className="o-button__3">Select</button>
            </div>
          </ReactModal>
        </div>

      </div>
    )
  }
}

module.exports = MediaFileObj;
