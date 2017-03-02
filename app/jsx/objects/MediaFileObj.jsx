// ##### Media File Object ##### //

import React from 'react'
import $ from 'jquery'

class MediaFileObj extends React.Component {
  componentDidMount() {
    $('[class^="o-mediafile__heading"], .o-mediafile__description').dotdotdot({watch:
      'window'});
  }
  render() {
    return (
      <div className="o-mediafile--image">
      {/* Append above class with media type: --audio, --file, --image, and --video */}
        <h2 className="o-mediafile__heading">New Horizons Full Trajectory - Side View</h2>
        <a className="o-mediafile__link" href="">
          <img className="o-mediafile__image" src="images/temp_new-horizons-data.png" alt="New horizons data" />
        </a>
        <button className="o-mediafile__button o-button__7">Download</button>
        <div className="o-mediafile__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
        </div>
      </div>
    )
  }
}

module.exports = MediaFileObj;
