// ##### Deposit Wizard Component ##### //

import React from 'react'

class WizardTypeComp extends React.Component {
  render() {
    return (
      <div className="c-wizard__step" id="c-wizard__type">
        <header>
          <h1>eScholarship Deposit</h1>
          <a href=""><span>Go back</span></a>
          <button><span>Close</span></button>
        </header>
        <div className="c-wizard__heading">
          [3] What kind of material are you depositing?
        </div>
        <ul className="c-wizard__list">
          <li>
            <a href="">A published (or accepted) scholarly article</a>
          </li>
          <li>
            <a href="">Data (independent or associated with a publication)</a>
          </li>
          <li>
            <a href="">Any other material (e.g., working paper, book, multimedia)</a>
          </li>
        </ul>
        <footer>
          We use these questions to direct you to the right place to deposit your materials.
        </footer>
      </div>
    )
  }
}

module.exports = WizardTypeComp;
