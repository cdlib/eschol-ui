// ##### Facet Box Component ##### //

import React from 'react'

class FacetBoxComp extends React.Component {
  render() {
    return (
      <details open className="c-facetbox">
        {/* Each facetbox needs a distinct <span id> and <fieldset aria-labelledby> matching value, like facetbox1, facetbox2, etc. */}
        <summary className="c-facetbox__summary"><span id="c-facetbox1">Refine By</span></summary>
        <fieldset aria-labelledby="c-facetbox1">
          <p>(sample fields below):</p>
          <label htmlFor="label1">Fruit:</label>
          <select name="test" id="label1">
            <option value="">Apples</option>
            <option value="">Oranges</option>
            <option value="">Pears</option>
            <option value="">Grapes</option>
            <option value="">Strawberries</option>
          </select>
          <label htmlFor="label2">Search Fruit</label>
          <input type="text" id="label2" />
          <button>Search</button>
          <button className="c-facetbox__show-more">Show more</button>
        </fieldset>
      </details>
    )
  }
}

module.exports = FacetBoxComp;
