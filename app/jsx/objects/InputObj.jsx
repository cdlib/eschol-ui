// ##### Input Objects ##### //

import React from 'react'

class InputObj extends React.Component {
  render() {
    return (
      <div>

        <h2>Drop-down List with Inline Label</h2>

        <div className="o-input__droplist1">
          <label htmlFor="o-input__droplist1-label">Fruit:</label>
          <select name="" id="o-input__droplist1-label">
            <option value="">Apples</option>
            <option value="">Oranges</option>
            <option value="">Pears</option>
            <option value="">Grapes</option>
            <option value="">Strawberries</option>
          </select>
        </div>

        <h2>Drop-down List with Block Label</h2>

        <div className="o-input__droplist2">
          <label htmlFor="o-input__droplist-label2">Refine media type by:</label>
          <select name="" id="o-input__droplist-label2">
            <option value="">All</option>
            <option value="">Documents</option>
            <option value="">Images</option>
            <option value="">Videos</option>
            <option value="">Others</option>
          </select>
        </div>

        <h2>Inline Inputs</h2>

        {/* Any input examples above can be used inline */}
        <div className="o-input__inline">
          <div className="o-input__droplist1">
            <label htmlFor="o-input__droplist3-label">Fruit:</label>
            <select name="" id="o-input__droplist3-label">
              <option value="">Apples</option>
              <option value="">Oranges</option>
              <option value="">Pears</option>
              <option value="">Grapes</option>
              <option value="">Strawberries</option>
            </select>
          </div>
          <div className="o-input__droplist1">
            <label htmlFor="o-input__droplist4-label">Fruit:</label>
            <select name="" id="o-input__droplist4-label">
              <option value="">Apples</option>
              <option value="">Oranges</option>
              <option value="">Pears</option>
              <option value="">Grapes</option>
              <option value="">Strawberries</option>
            </select>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = InputObj;
