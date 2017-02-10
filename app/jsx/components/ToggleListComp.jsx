// ##### Toggle List Component ##### //

import React from 'react'

class ToggleListComp extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="">Bourns College of Engineering</a></li>
        <li><a href="">Center for Environmental Design Research</a></li>
        <li><a href="">California Academic Partnership Program</a></li>
        <li>
          <details className="c-togglelist">
            <summary>California Center for Population Research</summary>
            <ul>
              <li><a href="">Safe Transportation Research & Education Center</a></li>
              <li><a href="">UC Berkeley Center for Future Urban Transport: A Volvo Center of Excellence</a></li>
              <li>
                <details className="c-togglelist">
                  <summary>UC Berkeley Transportation Sustainability Research Center</summary>
                  <ul>
                    <li><a href="">Center for Latino Policy Research</a></li>
                    <li><a href="">Center for Research on Native American Issues</a></li>
                    <li><a href="">Center for Right-Wing Studies</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li><a href="">California Community College Collaborative (C4)</a></li>
        <li><a href="">California Digital Library</a></li>
        <li><a href="">California Health Benefits Review Program</a></li>
      </ul>
    )
  }
}

module.exports = ToggleListComp;
