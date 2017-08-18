// ##### Media Feature Display ##### //

import React from 'react'
import MediaFeatureAudioObj from '../objects/MediaFeatureAudioObj.jsx'
import MediaFeatureFileObj from '../objects/MediaFeatureFileObj.jsx'
import MediaFeaturePictureObj from '../objects/MediaFeaturePictureObj.jsx'
import MediaFeatureVideoObj from '../objects/MediaFeatureVideoObj.jsx'

class MediaFeatureDisp extends React.Component {
  render() {
    return (
      <div>
        <MediaFeatureAudioObj />
        <MediaFeatureFileObj />
        <MediaFeaturePictureObj />
        <MediaFeatureVideoObj />
      </div>
    )
  }
}

module.exports = MediaFeatureDisp;
