// ##### Social Icons Component ##### //

import React from 'react'
import '../../images/logo_facebook-circle-black.svg'
import '../../images/logo_twitter-circle-black.svg'
import '../../images/logo_rss-circle-black.svg'

class SocialIconsComp extends React.Component {
  render() {
    return (
      <div className="c-socialicons">
        <a href="">
          <img src="images/logo_facebook-circle-black.svg" alt="Facebook"/>
        </a>
        <a href="">
          <img src="images/logo_twitter-circle-black.svg" alt="Twitter"/>
        </a>
        <a href="">
          <img src="images/logo_rss-circle-black.svg" alt="RSS"/>
        </a>
      </div>
    )
  }
}

module.exports = SocialIconsComp;
