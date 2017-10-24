// ##### Media List Component ##### //

import React from 'react'

class MediaListComp extends React.Component {
  render() {
    return (
      <ul className="c-medialist">
        <li className="c-medialist__image">2 supplemental images</li>
        <li className="c-medialist__pdf">2 supplemental PDFs</li>
        <li className="c-medialist__audio">5 supplemental audio files</li>
        <li className="c-medialist__video">5 supplemental videos</li>
        <li className="c-medialist__zip">4 supplemental <abbr title="zips">ZIPs</abbr></li>
        <li className="c-medialist__other">3 supplemental files</li>
      </ul>
    )
  }
}

module.exports = MediaListComp;
