// ##### Custom Selector Display ##### //

import React from 'react'
import CustomSelectorObj from '../objects/CustomSelectorObj.jsx'
import CustomSelectorCampusObj from '../objects/CustomSelectorCampusObj.jsx'

class CustomSelectorDisp extends React.Component {
  render() {
    return (
      <div>

        <p>Custom Selector (Generic):</p>
        <ul>
          <li>Left-aligned heading</li>
          <li>Heading without link</li>
          <li>No item group sub-heading</li>
        </ul>
        <CustomSelectorObj />

        <p>Custom Selector (Campus):</p>
        <ul>
          <li>Right-aligned heading</li>
          <li>Heading with link</li>
          <li>Item group sub-heading</li>
        </ul>
        <CustomSelectorCampusObj />

      </div>
    )
  }
}

module.exports = CustomSelectorDisp;
