// ##### Filter Component ##### //

import React from 'react'

class FilterComp extends React.Component {
  render() {
    return (
      <form action="" className="c-filter">
        <h2 className="c-filter__heading">Your Search: “Open Access”</h2>
        <div className="c-filter__results">Results: 12 pages, 12,023 works</div>
      {/*}
        <div className="c-filter__inactive-note">No filters applied</div>
      {*/}
        <details open className="c-filter__active">
          <summary><span><strong>3</strong> filters applied</span></summary>
          <button className="c-filter__clear-all">clear all</button>
          <ul className="c-filter__active-list">
            <li><button>Type of work (Articles)</button></li>
            <li><button>Publication Year (All)</button></li>
            <li><button>Campus (UC Berkeley)</button></li>
          </ul>
        </details>

        <a href="" className="c-filter__tips">search tips</a>
      </form>
    )
  }
}

module.exports = FilterComp;
