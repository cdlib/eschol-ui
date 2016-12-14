// ##### Breadcrumb Component ##### //

import React from 'react'

class TabComp extends React.Component {
  render() {
    return (
      <div className="c-tab">
        <input className="c-tab__input" id="tab-1" type="radio" name="name" defaultChecked={true} />
        <label className="c-tab__label" htmlFor="tab-1">Main Content</label>
        <div className="c-tab__content">
          Content to go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium officia aliquam accusantium magnam hic inventore at commodi velit similique qui, voluptatem, aliquid consectetur impedit. Error, maxime. Facilis, magni distinctio labore.
        </div>
        <input className="c-tab__input" id="tab-2" type="radio" name="name" />
        <label className="c-tab__label" htmlFor="tab-2">Supplemental Material</label>
        <div className="c-tab__content">
          Content to go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nemo fuga accusantium reiciendis qui aliquid placeat dolorum, obcaecati fugit necessitatibus fugiat quod at quia iste totam earum, animi iure eaque!
        </div>
        <input className="c-tab__input" id="tab-3" type="radio" name="name" />
        <label className="c-tab__label" htmlFor="tab-3">Metrics</label>
        <div className="c-tab__content">
          Content to go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consequuntur itaque non expedita, tenetur velit sit impedit illum! Placeat rem odit itaque nesciunt, nostrum in ab quae vero enim fuga.
        </div>
        <input className="c-tab__input" id="tab-4" type="radio" name="name" />
        <label className="c-tab__label" htmlFor="tab-4">Author & Article Info</label>
        <div className="c-tab__content">
          Content to go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolor enim ipsa beatae illo asperiores temporibus molestiae a? Cum soluta excepturi optio animi, adipisci quae quod eligendi eius aperiam odit.
        </div>
        <input className="c-tab__input" id="tab-5" type="radio" name="name" />
        <label className="c-tab__label" htmlFor="tab-5">Comments (2)</label>
        <div className="c-tab__content">
          Content to go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde veniam, ipsa exercitationem maxime ex libero, odit vitae vero ea, esse, assumenda! Voluptates eaque, sit, natus recusandae id est. Ad, qui.
        </div>
      </div>
    )
  }
}

module.exports = TabComp;
