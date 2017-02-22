// ##### File Item Component ##### //

import React from 'react'

class FileItemComp extends React.Component {
  render() {
    return (
      <div className="c-fileitem">
        <h2 className="c-fileitem__heading">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
        <img className="c-fileitem__image" src="http://placehold.it/300x200?text=Image" alt="" />
        <button className="c-fileitem__button o-button__7">Download</button>
        <div className="c-fileitem__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe, quia sequi ipsum excepturi officiis perferendis, nihil omnis, voluptatem facilis explicabo maxime, fugiat repudiandae rerum? Adipisci id necessitatibus dolorem. Alias!
        </div>
      </div>
    )
  }
}

module.exports = FileItemComp;
