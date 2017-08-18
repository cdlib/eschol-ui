// ##### Media File Grid Component ##### //

import React from 'react'
import $ from 'jquery'
import ReactModal from 'react-modal'
import MediaFeatureAudioObj from '../objects/MediaFeatureAudioObj.jsx'

class MediaFileGridComp extends React.Component {
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

        <div className="c-mediafilegrid">
          {/* Media File Component #1 */}
          <div className="o-mediafile--audio">
            <h2 className="o-mediafile__heading">
              Outer Space Music
            </h2>
            <div className="o-mediafile__preview" onClick={this.handleOpenModal}>
              {/* No preview image for this type. To add, use:
              <img src="[image path]" alt="[alt text]" /> */}
            </div>
            <div className="o-mediafile__description">
              Architecto quo praesentium, suscipit, qui est maxime ut repellendus earum odio ab, consequuntur saepe voluptatem commodi dolorum eos adipisci, fugiat tempore ipsa. Reprehenderit corrupti quae ea, veritatis iste, perspiciatis. Ad, reiciendis praesentium!
            </div>
            <button className="o-mediafile__view" onClick={this.handleOpenModal}><span>View Media</span></button>
            <a href="" className="o-mediafile__download" download>Download</a>
          </div>
          {/* Media File Component #2 */}
          <div className="o-mediafile--data">
            <h2 className="o-mediafile__heading">
              New Horizons File Archive
            </h2>
            <div className="o-mediafile__preview" href="images/sample_audio.mp3">
              {/* No preview image for this type. To add, use:
              <img src="[image path]" alt="[alt text]" /> */}
            </div>
            <div className="o-mediafile__description">
              Eaque, qui rerum fugiat sed. Error aperiam quo atque debitis doloremque. Adipisci, ab placeat! Atque vitae blanditiis, fuga necessitatibus harum libero, repudiandae quasi vero repellendus fugiat asperiores placeat tempore qui vel iusto!
            </div>
            <button className="o-mediafile__view"><span>View Media</span></button>
            <a href="" className="o-mediafile__download" download>Download</a>
          </div>
          {/* Media File Component #3 */}
          <div className="o-mediafile--image--selected">
            <h2 className="o-mediafile__heading">
              New Horizons Full Trajectory - Side View
            </h2>
            <div className="o-mediafile__preview" href="images/temp_new-horizons-data.png">
              <img src="images/temp_new-horizons-data.png" alt="New horizons data" />
            </div>
            <div className="o-mediafile__description">
              Esse nulla ad veritatis dolorum, vitae maxime tenetur nemo. Quod eius corrupti provident nisi ullam, repellendus molestias, aliquam neque nulla dolorem, magnam commodi ratione enim ex, suscipit labore veniam deserunt nam exercitationem!
            </div>
            <button className="o-mediafile__view"><span>View Media</span></button>
            <a href="" className="o-mediafile__download" download>Download</a>
          </div>
          {/* Media File Component #4 */}
          <div className="o-mediafile--video">
            <h2 className="o-mediafile__heading">
              New Horizons Kuiper Belt Fly-through
            </h2>
            <div className="o-mediafile__preview" href="images/sample_video.mp4">
              {/* No preview image for this type. To add, use:
              <img src="[image path]" alt="[alt text]" /> */}
            </div>
            <div className="o-mediafile__description">
              Veritatis veniam quidem voluptatem laborum necessitatibus iure facilis laudantium possimus sequi libero aliquid, adipisci explicabo, itaque odit ut delectus nemo quas, quia neque. Error cum porro pariatur vel ducimus aliquid quo adipisci.
            </div>
            <button className="o-mediafile__view"><span>View Media</span></button>
            <a href="" className="o-mediafile__download" download>Download</a>
          </div>
        </div>

        {/* Modal */}

        <div className="c-modal">
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
              <MediaFeatureAudioObj />
            </div>
            <div className="c-modal__footer">
              <button className="c-modal__button-close" onClick={this.handleCloseModal}>Cancel</button>
            </div>
          </ReactModal>
        </div>

      </div>
    )
  }
}

module.exports = MediaFileGridComp;
