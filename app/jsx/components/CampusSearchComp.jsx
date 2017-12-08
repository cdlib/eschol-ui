// ##### Campus Search Component ##### //

import React from 'react'

class CampusSearchComp extends React.Component {
  render() {
    return (
      <div className="c-campussearch">
        <label htmlFor="c-campussearch__search" className="c-campussearch__label">Discover Lawrence Berkeley National Laboratory scholarship</label>
        <div className="c-campussearch__search">
          <input type="search" className="c-campussearch__input" id="c-campussearch__search"/>
          <button className="c-campussearch__button" aria-label="Search"></button>
        </div>
      </div>
    )
  }
}

module.exports = CampusSearchComp;
