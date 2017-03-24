// ##### Media Feature Objects ##### //

import React from 'react'

class MediaFeatureObj extends React.Component {
  render() {
    return (
      <div>

        <h2>Audio Example</h2>
        <div className="o-mediafeature">
          <div className="o-mediafeature__item--audio">
            <audio src="images/sample_audio.mp3" controls></audio>
          </div>
          <div className="o-mediafeature__title-bar">
            <h2>Outer Space Music</h2>
            <button>Download</button>
          </div>
          <div className="o-mediafeature__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis optio numquam aut facere odio et accusantium eius quo harum, quis ab molestias illum totam earum nemo voluptatum eligendi nobis. Molestiae reprehenderit et neque nisi nam corporis totam exercitationem, numquam fuga. Sint minima quisquam, velit quod ratione. Vero, libero, accusantium. Rem.
          </div>
        </div>

        <h2>Video Example</h2>
        <div className="o-mediafeature">
          <div className="o-mediafeature__item--video">
            <video src="images/sample_video.mp4" controls poster="images/sample_video-poster.jpg"></video>
          </div>
          <div className="o-mediafeature__title-bar">
            <h2>New Horizons Kuiper Belt Fly-Through</h2>
            <button>Download</button>
          </div>
          <div className="o-mediafeature__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis optio numquam aut facere odio et accusantium eius quo harum, quis ab molestias illum totam earum nemo voluptatum eligendi nobis. Molestiae reprehenderit et neque nisi nam corporis totam exercitationem, numquam fuga. Sint minima quisquam, velit quod ratione. Vero, libero, accusantium. Rem.
          </div>
        </div>
        
      </div>
    )
  }
}

module.exports = MediaFeatureObj;
