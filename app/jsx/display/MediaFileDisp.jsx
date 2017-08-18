// ##### Media File Display ##### //

import React from 'react'
import MediaFileAudioObj from '../objects/MediaFileAudioObj.jsx'
import MediaFileDataObj from '../objects/MediaFileDataObj.jsx'
import MediaFileImageObj from '../objects/MediaFileImageObj.jsx'
import MediaFileVideoObj from '../objects/MediaFileVideoObj.jsx'

class MediaFileDisp extends React.Component {
  render() {
    return (
      <div>
        <MediaFileAudioObj />
        <MediaFileDataObj />
        <MediaFileImageObj />
        <MediaFileVideoObj />
      </div>
    )
  }
}

module.exports = MediaFileDisp;
