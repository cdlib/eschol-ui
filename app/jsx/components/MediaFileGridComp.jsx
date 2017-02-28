// ##### Media File Grid Component ##### //

import React from 'react'
import $ from 'jquery'

class MediaFileGridComp extends React.Component {
  componentDidMount() {
    $('[class^="c-mediafile__heading"], .c-mediafile__description').dotdotdot({watch:
      'window'});
  }
  render() {
    return (
      <div className="c-mediafilegrid">
        {/* Media File Component #1 */}
        <div className="c-mediafile--selected">
          <h2 className="c-mediafile__heading--video">New Horizons Kuiper Belt Fly-through</h2>
          <img className="c-mediafile__image" src="images/sample_video-poster.jpg" alt="New horizons data" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, in quo libero recusandae debitis, repudiandae rem hic, ut quisquam maxime dolores? Harum expedita fugiat molestiae explicabo, qui, perspiciatis architecto numquam.
          </div>
        </div>
        {/* Media File Component #2 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--audio">Outer Space Music</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=Audio" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Corrupti delectus aut fugit labore fugiat totam odit recusandae optio dolore ipsa qui, dolores sed tempore ut molestias, numquam maxime culpa alias perspiciatis tenetur neque iusto a impedit! Assumenda praesentium iure ut!
          </div>
        </div>
        {/* Media File Component #3 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--image">New Horizons Full Trajectory - Overhead View</h2>
          <img className="c-mediafile__image" src="images/sample_overhead-view.png" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Nemo tempore sunt nihil maiores sint eveniet sequi non, unde in delectus, molestiae harum, voluptate voluptates nostrum vitae inventore veritatis. Nisi, sapiente! Impedit a, amet minima sunt nemo, consectetur accusantium dolores totam.
          </div>
        </div>
        {/* Media File Component #4 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--image">New Horizons Full Trajectory - Side View</h2>
          <img className="c-mediafile__image" src="images/temp_new-horizons-data.png" alt="New horizons data" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Accusantium corrupti doloribus quibusdam, qui eveniet tempore nobis aspernatur placeat delectus. Ad sapiente veritatis doloremque officiis, beatae in minima dolores commodi cumque, laboriosam repellendus, tempore odio accusantium. Nobis inventore, ipsam eius vel.
          </div>
        </div>
        {/* Media File Component #5 */}
        <div className="c-mediafile">
          <h2 className="c-mediafile__heading--file">New Horizons Full Trajectory File Archive</h2>
          <img className="c-mediafile__image" src="http://placehold.it/300x300?text=File" alt="" />
          <button className="c-mediafile__button o-button__7">Download</button>
          <div className="c-mediafile__description">
            Nostrum est odio iusto perspiciatis, inventore magnam. Doloremque quidem, beatae nobis explicabo, numquam ex molestias, saepe aliquam sit reiciendis eligendi quod! Modi incidunt, repudiandae quam enim ipsa tempora pariatur ducimus at debitis.
          </div>
        </div>
      </div>
    )
  }
}

module.exports = MediaFileGridComp;
