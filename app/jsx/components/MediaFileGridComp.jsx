// ##### Media File Grid Component ##### //

import React from 'react'
import $ from 'jquery'

class MediaFileGridComp extends React.Component {
  componentDidMount() {
    $('.c-mediafile__description').dotdotdot({watch:
      'window'});
  }
  render() {
    return (
      <div className="c-mediafilegrid">
        {/* Media File Component #1 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--picture">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Image" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
          </div>
        </div>
        {/* Media File Component #2 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--picture">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Image" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
          </div>
        </div>
        {/* Media File Component #3 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--picture">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Image" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
          </div>
        </div>
        {/* Media File Component #4 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--picture">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Image" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
          </div>
        </div>
        {/* Media File Component #5 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--picture">New Horizons Full Trajectory Blitzkrieg Bonanza</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Image" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
          </div>
        </div>
      </div>
    )
  }
}

module.exports = MediaFileGridComp;
