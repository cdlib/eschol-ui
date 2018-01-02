// ##### Media Viewer Component ##### //

import React from 'react'
import MediaFileGridComp from '../components/MediaFileGridComp.jsx'

class MediaViewerComp extends React.Component {
  render() {
    return (
      <div className="c-mediaviewer">
        <div className="o-mediafeature--video">
          <h3>New Horizons Kuiper Belt Fly-Through</h3>
          <div className="o-mediafeature__item">
            <video src="images/sample_video.mp4" controls poster="images/sample_video-poster.jpg"></video>
          </div>
          <div className="o-mediafeature__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis optio numquam aut facere odio et accusantium eius quo harum, quis ab molestias illum totam earum nemo voluptatum eligendi nobis. Molestiae reprehenderit et neque nisi nam corporis totam exercitationem, numquam fuga. Sint minima quisquam, velit quod ratione. Vero, libero, accusantium. Rem.
          </div>
        </div>
        <div className="c-itemactions">
          <div className="o-input__droplist2">
            <label htmlFor="o-input__droplist-label2">Refine media type by:</label>
            <select name="" id="o-input__droplist-label2">
              <option value="">All</option>
              <option value="">Documents</option>
              <option value="">Images</option>
              <option value="">Videos</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className="o-download">
            <a href="" className="o-download__button" download>Download All Files</a>
            <details className="o-download__formats">
              <summary aria-label="formats"></summary>
              <ul className="o-download__single-menu">
                <li><a href="">Image</a></li>
                <li><a href="">Audio</a></li>
                <li><a href="">Video</a></li>
                <li><a href="">Zip</a></li>
                <li><a href="">File</a></li>
              </ul>
            </details>
          </div>
        </div>
        <MediaFileGridComp />
      </div>
    )
  }
}

module.exports = MediaViewerComp;
