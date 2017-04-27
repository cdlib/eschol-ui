// ##### Tab Main Content Component ##### //

import React from 'react'
import ItemActionsComp from '../components/ItemActionsComp.jsx'
import AuthorListComp from '../components/AuthorListComp.jsx'
import PubLocationComp from '../components/PubLocationComp.jsx'
import PubDataComp from '../components/PubDataComp.jsx'
import ToggleContentComp from '../components/ToggleContentComp.jsx'

class TabMainComp extends React.Component {
  render() {
    return (
      <div className="c-tabcontent">
        <ItemActionsComp />
        <h1 id="c-tabcontent__main-heading" className="o-heading1" tabIndex="-1">From the New Heights: The City and Migrating Latinas in Real Women Have Curves and María Full of Grace</h1>
        <AuthorListComp />
        <PubLocationComp />
        <PubDataComp />
        <details className="c-togglecontent" open>
          <summary>Abstract</summary>
          <p>Eum nihil quidem nisi sapiente vel obcaecati esse vero placeat! Dicta fugiat quam, nemo accusamus cum, non voluptas sit eveniet. Voluptates odio consectetur eum dicta vel at rerum accusamus inventore officiis, voluptate deleniti et reiciendis aliquam illo eaque laborum neque excepturi pariatur unde obcaecati molestiae dolores voluptas non earum minima.</p>
          <p className="c-well">Libero dolores rerum nesciunt deserunt incidunt, aspernatur similique fugit beatae quis impedit corrupti, voluptate, unde facilis. Voluptatibus labore sunt maxime, accusantium animi mollitia ducimus.</p>
        </details>
        <details className="c-togglecontent" open>
          <summary>Main Content</summary>
          <p>Fugit dignissimos, laborum repudiandae consequuntur, sit iure nobis animi numquam laudantium error veniam incidunt in at, nihil doloremque labore, odio illo cumque debitis vel enim rerum possimus saepe blanditiis. Temporibus ducimus rerum quidem ipsa quas asperiores, sapiente in, delectus quae excepturi dolor officiis at quia fugit minus vitae libero. Voluptas quos nobis unde sequi laborum ipsam similique placeat, mollitia debitis provident, consequuntur, blanditiis ducimus! Blanditiis quibusdam ab aspernatur, repellendus recusandae, dolor quidem ipsa id laborum inventore illum eligendi laboriosam necessitatibus nam labore, pariatur delectus corporis suscipit amet asperiores soluta doloremque iste voluptate.</p>
          <div className="o-dividecontent2x">
            <img className="o-imagecontent" src="http://placehold.it/250x150?text=Placeholder" alt="" />
            <img className="o-imagecontent" src="http://placehold.it/250x150?text=Placeholder" alt=""/>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ratione dolorum obcaecati impedit accusantium delectus quasi quis numquam consequuntur, aspernatur! Ut, consequuntur voluptates incidunt molestiae temporibus ullam laboriosam mollitia quidem. Alias, praesentium, deserunt. Architecto eos amet vero perferendis repellendus laboriosam, cum totam aspernatur, vel, iste maiores atque eligendi autem ipsam!
          </p>
        </details>
      </div>
    )
  }
}

module.exports = TabMainComp;
