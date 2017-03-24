// ##### Media Feature Objects ##### //

import React from 'react'

class MediaFeatureObj extends React.Component {
  render() {
    return (
      <div className="o-mediafeature">
        <div className="o-mediafeature__item">
          [media item to go here]
        </div>
        <div className="o-mediafeature__title-bar">
          <h2>New Horizons Kuiper Belt Fly-Through</h2>
          <button>Download</button>
        </div>
        <div className="o-mediafeature__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis optio numquam aut facere odio et accusantium eius quo harum, quis ab molestias illum totam earum nemo voluptatum eligendi nobis. Molestiae reprehenderit et neque nisi nam corporis totam exercitationem, numquam fuga. Sint minima quisquam, velit quod ratione. Vero, libero, accusantium. Rem.
        </div>
      </div>
    )
  }
}

module.exports = MediaFeatureObj;
