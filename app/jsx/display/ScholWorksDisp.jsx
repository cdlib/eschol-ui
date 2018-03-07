// ##### Scholarly Works Search Result Display ##### //

import React from 'react'
import ScholWorksComp from '../components/ScholWorksComp.jsx'

class ScholWorksDisp extends React.Component {
  render() {
    return (
      <div>
        {/* Possible type values: "article", "book", "thesis", "multimedia" */}
        <ScholWorksComp type="article" />
      </div>
    )
  }
}

module.exports = ScholWorksDisp;
