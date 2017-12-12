// ##### Issue Component ##### //

import React from 'react'
import LazyLoadComp from '../components/LazyLoadComp.jsx'

class IssueComp extends React.Component {
  render() {
    return (
      <div className="c-issue">
        <h3>Focus: Caribbean Studies and Literatures Lorem Ipsum Dolor Sit Amet</h3>
        <figure className="c-issue__thumbnail">
          <LazyLoadComp
            src="https://escholarship.org/images/homecover_fb.png"
            alt="journal cover" />
          <figcaption><i>Cover Caption:</i> The cover image is from Multimedia artist Saya Woolfalk’s 2012 project titled The Empathics. This performance piece is set in a fictional hybrid plant/human community that Woolfalk ethnographically analyzes, documents, and displays.</figcaption>
        </figure>
        <div className="c-issue__description">
          <p>Aut vitae, ipsa magnam, voluptates cum deleniti quaerat asperiores. Repudiandae reprehenderit tempora beatae cumque nulla, molestias rem atque dolore modi deserunt veniam quod numquam voluptatibus dolor ut illo. Dolorum natus autem aliquid commodi nesciunt ducimus quis libero enim dolorem reprehenderit amet iusto labore pariatur expedita nisi sed recusandae, ullam! Quos quae accusantium incidunt repudiandae maxime cupiditate! Sequi qui sapiente neque quasi exercitationem.
          </p>
        </div>
      </div>
    )
  }
}

module.exports = IssueComp;
