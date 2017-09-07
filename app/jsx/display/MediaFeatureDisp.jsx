// ##### Media Feature Display ##### //

import React from 'react'
import MediaFeatureAudioObj from '../objects/MediaFeatureAudioObj.jsx'
import MediaFeatureDataObj from '../objects/MediaFeatureDataObj.jsx'
import MediaFeatureImageObj from '../objects/MediaFeatureImageObj.jsx'
import MediaFeatureVideoObj from '../objects/MediaFeatureVideoObj.jsx'

class MediaFeatureDisp extends React.Component {
  render() {
    return (
      <div>
        <MediaFeatureAudioObj />
        <MediaFeatureDataObj />
        <MediaFeatureImageObj />
        <MediaFeatureVideoObj />
      </div>
    )
  }
}

module.exports = MediaFeatureDisp;
