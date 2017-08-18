// ##### Media File Grid Component ##### //

import React from 'react'
import MediaModalComp from '../components/MediaModalComp.jsx'
import MediaFileAudioObj from '../objects/MediaFileAudioObj.jsx'
import MediaFileDataObj from '../objects/MediaFileDataObj.jsx'
import MediaFileImageObj from '../objects/MediaFileImageObj.jsx'
import MediaFileVideoObj from '../objects/MediaFileVideoObj.jsx'

class MediaFileGridComp extends React.Component {
  
  render() {
    return (
      <div>
        
        <div className="c-mediafilegrid">
          <MediaFileAudioObj />
          <MediaFileDataObj />
          <MediaFileImageObj />
          <MediaFileVideoObj />
        </div>

        <MediaModalComp />

      </div>
      
    )
  }
}

module.exports = MediaFileGridComp;
