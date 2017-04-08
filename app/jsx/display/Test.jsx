// ##### Test Display ##### //

import React from 'react'

class Test extends React.Component {
  render() {
    return (
      <div className="c-test">
        <details className="c-test__details">
          <summary className="c-test__summary">Tab Number One Here</summary>
          <div className="c-test__tabpanel">
          Cumque itaque numquam atque at nam in, cum nostrum sint dolorum quis assumenda. Voluptatem eaque sit neque eveniet aliquid aperiam voluptatum quia.
          </div>
        </details>
        <details className="c-test__details">
          <summary className="c-test__summary">Tab Number Two Here</summary>
          <div className="c-test__tabpanel">
          Quidem nemo accusantium nisi, rem cupiditate et doloribus itaque voluptatum quae officia excepturi vero veritatis eligendi consequuntur, voluptatibus deleniti corporis voluptatem dolores facere quaerat repellendus reprehenderit alias dolor possimus. Non quos corrupti totam placeat, deserunt quidem magnam laborum qui dignissimos repellat nam.
          </div>
        </details>
        <details className="c-test__details" open>
          <summary className="c-test__summary">Tab Number Three Here</summary>
          <div className="c-test__tabpanel">
          Fugit dignissimos debitis inventore maxime quasi sit est et! Consequuntur error aut repellat praesentium ipsum obcaecati quia harum provident, odio, ad vitae?
          </div>
        </details>
      </div>
    )
  }
}

module.exports = Test;
