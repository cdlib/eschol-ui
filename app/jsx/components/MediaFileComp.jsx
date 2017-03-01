// ##### Media File Component ##### //

import React from 'react'
import $ from 'jquery'

class MediaFileComp extends React.Component {
  componentDidMount() {
    $('[class^="c-mediafile__heading"], .c-mediafile__description').dotdotdot({watch:
      'window'});
  }
  render() {
    return (
      <div className="c-mediafile--image">
      {/* Append above class with media type: --audio, --file, --image, and --video */}
        <h2 className="c-mediafile__heading">New Horizons Full Trajectory - Side View</h2>
        <a className="c-mediafile__link" href="">
          <img className="c-mediafile__image" src="images/temp_new-horizons-data.png" alt="New horizons data" />
        </a>
        <button className="c-mediafile__button o-button__7">Download</button>
        <div className="c-mediafile__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
        </div>
      </div>
    )
  }
}

module.exports = MediaFileComp;
