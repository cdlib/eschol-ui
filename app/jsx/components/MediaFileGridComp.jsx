// ##### Media File Grid Component ##### //

import React from 'react'
import $ from 'jquery'

class MediaFileGridComp extends React.Component {
  componentDidMount() {
    $('.o-mediafile__heading, .o-mediafile__description').dotdotdot({watch: 'window'});
  }
  render() {
    return (
      <div className="c-mediafilegrid">
        {/* Media File Component #1 */}
        <div className="o-mediafile--audio">
          <h2 className="o-mediafile__heading">
            Outer Space Music
          </h2>
          <div className="o-mediafile__preview" href="images/sample_audio.mp3">
            {/* No preview image for this type. To add, use:
            <img src="[image path]" alt="[alt text]" /> */}
          </div>
          <div className="o-mediafile__description">
            Architecto quo praesentium, suscipit, qui est maxime ut repellendus earum odio ab, consequuntur saepe voluptatem commodi dolorum eos adipisci, fugiat tempore ipsa. Reprehenderit corrupti quae ea, veritatis iste, perspiciatis. Ad, reiciendis praesentium!
          </div>
          <button className="o-mediafile__view"><span>View Media</span></button>
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
    )
  }
}

module.exports = MediaFileGridComp;
