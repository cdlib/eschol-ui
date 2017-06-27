// ##### Media List Component ##### //

import React from 'react'

class MediaListComp extends React.Component {
  render() {
    return (
      <ul className="c-medialist">
        <li className="c-medialist__image">Contains 2 images</li>
        <li className="c-medialist__pdf">Contains 2 PDFs</li>
        <li className="c-medialist__audio">Contains 5 audio files</li>
        <li className="c-medialist__video">Contains 5 videos</li>
        <li className="c-medialist__zip">Contains 4 <abbr title="zip">ZIP</abbr> files</li>
        <li className="c-medialist__other">Contains 3 additional files</li>
      </ul>
    )
  }
}

module.exports = MediaListComp;
