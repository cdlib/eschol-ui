// ##### Publication Year Facet Component ##### //

import React from 'react'

class PubYearComp extends React.Component {
  render() {
    return (
      <div className="c-pubyear">
        {/* placeholder attributes below should be set to the current year via scripting */}
        <label htmlFor="c-pubyear__textfield1">From:</label>
        <input id="c-pubyear__textfield1" type="text" maxLength="4" placeholder="2017"/>
        <label htmlFor="c-pubyear__textfield2">To:</label>
        <input id="c-pubyear__textfield2" type="text" maxLength="4" placeholder="2017"/>
      </div>
    )
  }
}

module.exports = PubYearComp;
