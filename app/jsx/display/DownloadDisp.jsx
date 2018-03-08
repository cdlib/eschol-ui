// ##### Download Display ##### //

import React from 'react'
import DownloadObj from '../objects/DownloadObj.jsx'
import faker from 'faker/locale/en'

class DownloadDisp extends React.Component {
  render() {
    return (
      <div>
         <DownloadObj />
         <p>{faker.fake("{{lorem.paragraphs}}")}</p>
      </div>
    )
  }
}

module.exports = DownloadDisp;
