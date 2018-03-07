// ##### Toggle Content Display ##### //

import React from 'react'
import ToggleContentComp from '../components/ToggleContentComp.jsx'

class ToggleContentDisp extends React.Component {
  render() {
    return (
      <div>
        <ToggleContentComp heading="Main Content" />
      </div>
    )
  }
}

module.exports = ToggleContentDisp;
