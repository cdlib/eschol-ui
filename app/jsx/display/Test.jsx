// ##### Test Display ##### //

import React from 'react'
import $ from 'jquery'

class Test extends React.Component {
  componentDidMount() {
    $('.c-test').height($('.c-test__content').outerHeight());
  }
  render() {
    return (
      <div>
        <div className="c-test">
          <details className="c-test__details" open>
            <summary className="c-test__summary">Tab Number 1 Here</summary>
            <div className="c-test__content">
            Tab 1 Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt molestias facilis ut quibusdam totam ipsum animi. Corrupti in odit nostrum nemo praesentium tempora sit dignissimos obcaecati voluptate cumque porro, voluptatem ipsum quia illo voluptas unde culpa expedita perspiciatis ea nihil nobis reiciendis ut qui, animi assumenda? Velit repellat similique maxime, delectus libero quibusdam deleniti unde? Mollitia, dicta? Quaerat doloremque officia labore, ipsam, incidunt beatae sit voluptates aspernatur dolorem est, maxime iure! Corporis nisi enim alias velit cupiditate beatae quidem, maxime dicta sequi tenetur fugiat, illo recusandae quam quis iure. Veritatis a ipsa, deleniti eos alias optio cum libero modi, tempora.
            </div>
          </details>
          <details className="c-test__details">
            <summary className="c-test__summary">Tab Number 2 Here</summary>
            <div className="c-test__content">
            Tab 2 Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt, at minus aliquid fuga. Deleniti laboriosam explicabo, praesentium totam neque commodi pariatur amet culpa eius ullam sunt cupiditate fugit earum vero nihil nemo veritatis aut rerum esse distinctio aliquid blanditiis? Asperiores, enim, quisquam. Vero earum, voluptatem et. Corporis dolorem, ullam.
            </div>
          </details>
          <details className="c-test__details">
            <summary className="c-test__summary">Tab Number 3 Here</summary>
            <div className="c-test__content">
            Tab 3 Content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam veritatis, mollitia eos soluta molestiae! Quos quas non illo ab nobis distinctio porro odit. Omnis iusto iure consectetur saepe, corporis tempora! Molestiae voluptatem quod laudantium deserunt modi, ex temporibus illo? Quae error voluptates obcaecati eveniet nostrum nulla ad. Reiciendis veniam cupiditate nam, deserunt, nesciunt assumenda autem iusto voluptate labore perspiciatis ipsam. Fugiat nisi quisquam dignissimos error necessitatibus.
            </div>
          </details>
        </div>
        <div>Content after tabs ... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos rerum itaque eligendi temporibus. Aut dolores temporibus, et ad ex, ducimus quam iusto, esse perspiciatis, sit omnis at obcaecati. Accusantium odio sint quae molestias id a veritatis voluptatibus voluptates quis dolores fugit doloribus impedit magni aperiam ducimus atque obcaecati itaque possimus aliquid voluptatem voluptate culpa, modi minus. Provident, deserunt, aspernatur. Praesentium itaque reprehenderit debitis quos! Suscipit rem eos sapiente id alias iure ipsa necessitatibus voluptates molestiae quaerat doloremque neque sequi, molestias possimus adipisci assumenda velit, itaque impedit laboriosam nulla distinctio corporis! Placeat eaque, corrupti tempore fugiat impedit ut nostrum cumque eum.</div>
      </div>
    )
  }
}

module.exports = Test;
