// ##### Issue Component ##### //

import React from 'react'
import LazyImageComp from '../components/LazyImageComp.jsx'
import faker from 'faker/locale/en'

class IssueComp extends React.Component {
  render() {
    return (
      <div className="c-issue">
        <h3>Focus: Caribbean Studies and Literatures Lorem Ipsum Dolor Sit Amet</h3>
        <figure className="c-issue__thumbnail">
          <LazyImageComp
            src="https://escholarship.org/images/homecover_fb.png"
            alt="journal cover" />
          <figcaption><i>Cover Caption:</i> The cover image is from {faker.fake("{{lorem.paragraph}}")}.</figcaption>
        </figure>
        <div className="c-issue__description">
          <p>{faker.fake("{{lorem.paragraph}}")}
          </p>
        </div>
      </div>
    )
  }
}

module.exports = IssueComp;
