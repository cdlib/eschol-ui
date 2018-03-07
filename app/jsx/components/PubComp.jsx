// ##### Publication Component ##### //

import React from 'react'
import $ from 'jquery'
import dotdotdot from 'jquery.dotdotdot'
import AuthorListComp from '../components/AuthorListComp.jsx'
import MediaListComp from '../components/MediaListComp.jsx'
import faker from 'faker/locale/en'

class PubComp extends React.Component {
  componentDidMount() {
    $('.c-pub__heading, .c-pub__abstract').dotdotdot({watch: 'window'
    });
  }
  render() {
    return (
      <div className="c-pub">
        <h4 className="c-pub__heading">
          <a href="">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</a>
        </h4>
        <AuthorListComp />
        <div className="c-pub__abstract">
          <p>{faker.fake("{{lorem.paragraph}}")}</p>
          <p>{faker.fake("{{lorem.paragraph}}")}</p>
        </div>
        <MediaListComp />
      </div>
    )
  }
}

module.exports = PubComp;
