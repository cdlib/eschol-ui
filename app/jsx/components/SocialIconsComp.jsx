// ##### Social Icons Component ##### //

import React from 'react'
import MEDIA_PATH from '../../js/MediaPath.js'

class SocialIconsComp extends React.Component {
  render() {
    return (
      <div className="c-socialicons">
        <a href="">
          <img src={MEDIA_PATH + 'logo_facebook-circle-black.svg'} alt="Facebook"/>
        </a>
        <a href="">
          <img src={MEDIA_PATH + 'logo_twitter-circle-black.svg'} alt="Twitter"/>
        </a>
        <a href="">
          <img src={MEDIA_PATH + 'logo_rss-circle-black.svg'} alt="RSS"/>
        </a>
      </div>
    )
  }
}

module.exports = SocialIconsComp;
