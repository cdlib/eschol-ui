// ##### Media File Component ##### //

import React from 'react'

class MediaFileComp extends React.Component {
  render() {
    return (
      <div className="c-mediafile">
        <h2 className="c-mediafile__heading--picture">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
        <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Image" alt="" />
        <button className="c-mediafile__button o-button__7">Download</button>
        <div className="c-mediafile__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe, quia sequi ipsum excepturi officiis perferendis, nihil omnis!
        </div>
      </div>
    )
  }
}

module.exports = MediaFileComp;
