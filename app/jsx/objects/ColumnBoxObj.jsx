// ##### Column Box Objects ##### //

import React from 'react'

class ColumnBoxObj extends React.Component {
  render() {
    return (
      <div>
        <h2>Main Column Box</h2>
        <section className="o-columnbox-main">
          <header>
            <h2 className="o-columnbox-main__heading">About eScholarship</h2>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sed sapiente nulla debitis nobis asperiores hic est, fuga illo? Accusamus molestias pariatur nihil, libero possimus optio iusto nobis sapiente ad.
          </p>
        </section>
        <h2>Sidebar Column Box</h2>
        <section className="o-columnbox-sidebar">
          <header>
            <h2 className="o-columnbox-sidebar__heading">Placeholder Title</h2>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sed sapiente nulla debitis nobis asperiores hic est, fuga illo? Accusamus molestias pariatur nihil, libero possimus optio iusto nobis sapiente ad.
          </p>
        </section>
        <h2>Main Column Box Without Section Header</h2>
        <section className="o-columnbox-main">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tempora reiciendis odit. Ducimus similique nulla aliquam praesentium. Pariatur, accusamus deserunt, tempore voluptates ducimus vitae quod, distinctio similique tempora ipsum repellat.
          </div>
        </section>
        <h2>Sidebar Column Box Without Section Header</h2>
        <section className="o-columnbox-sidebar">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi molestiae praesentium at dignissimos inventore in, error! Temporibus, facere sed fuga sapiente expedita ab, quos ipsam obcaecati in cupiditate maxime?
          </div>
        </section>
        <h2>Stacked Sidebar Column Boxes</h2>
        <section className="o-columnbox-sidebar">
          <header>
            <h2 className="o-columnbox-sidebar__heading">Placeholder Title</h2>
          </header>
          <div>Eaque odit consequuntur voluptas quod quos voluptatum cupiditate! Veritatis fugit necessitatibus, deleniti, fuga sit earum consequuntur repellat, molestias facere illum illo laborum!
          </div>
        </section>
        <section className="o-columnbox-sidebar">
          <header>
            <h2 className="o-columnbox-sidebar__heading">Placeholder Title</h2>
          </header>
          <div>Quaerat aspernatur, commodi magni nisi, nulla aliquam iste quia, dolore consequatur nihil similique neque maxime, iure eligendi dolores repellendus numquam officiis fugit!
          </div>
        </section>
        <section className="o-columnbox-sidebar">
          <header>
            <h2 className="o-columnbox-sidebar__heading">Placeholder Title</h2>
          </header>
          <div>Obcaecati ab alias culpa mollitia porro eos itaque ipsa necessitatibus earum libero recusandae, consequuntur quos molestias, dolorum cupiditate doloremque atque possimus esse.
          </div>
        </section>
      </div>
    )
  }
}

module.exports = ColumnBoxObj;
