// ##### Deposit Wizard Component ##### //

import React from 'react'

class WizardComp extends React.Component {
  render() {
    return (
      <div className="c-wizard">

        <div className="c-wizard__step" id="c-wizard__role">
          <header>
            <h1>eScholarship Deposit</h1>
            <button><span>Close</span></button>
          </header>
          <div className="c-wizard__heading">
            How are you affiliated with [campus]?
          </div>
          <ul className="c-wizard__list">
            <li>
              <a href="">Academic Senate-represented faculy</a>
            </li>
            <li>
              <a href="">Other faculty, student, or staff</a>
            </li>
            <li>
              <a href="">Not affiliated</a>
            </li>
          </ul>
          <footer>
            We use these questions to direct you to the right place to deposit your materials.
          </footer>
        </div>

        <div className="c-wizard__step" id="c-wizard__campus">
          <header>
            <h1>eScholarship Deposit</h1>
            <a href=""><span>Go back</span></a>
            <button><span>Close</span></button>
          </header>
          <div className="c-wizard__heading">
            Which UC Campus are you affiliated with?
          </div>
          <ul className="c-wizard__list">
            <li>
              <a href="">UC Berkeley</a>
            </li>
            <li>
              <a href="">UC Davis</a>
            </li>
            <li>
              <a href="">UC Irvine</a>
            </li>
            <li>
              <a href="">UCLA</a>
            </li>
            <li>
              <a href="">UC Merced</a>
            </li>
            <li>
              <a href="">UC Riverside</a>
            </li>
            <li>
              <a href="">UC San Diego</a>
            </li>
            <li>
              <a href="">UC San Francisco</a>
            </li>
            <li>
              <a href="">UC Santa Barbara</a>
            </li>
            <li>
              <a href="">UC Santa Cruz</a>
            </li>
            <li>
              <a href="">UC Office of the President</a>
            </li>
            <li>
              <a href="">Lawrence Berkeley National Lab</a>
            </li>
            <li>
              <a href="">UC Agriculture and Natural Resources</a>
            </li>
          </ul>
          <footer>
            We use these questions to direct you to the right place to deposit your materials.
          </footer>
        </div>

        <div className="c-wizard__step" id="c-wizard__type">
          <header>
            <h1>eScholarship Deposit</h1>
            <a href=""><span>Go back</span></a>
            <button><span>Close</span></button>
          </header>
          <div className="c-wizard__heading">
            What kind of material are you depositing?
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

        <div className="c-wizard__step" id="c-wizard__unit">
          <header>
            <h1>eScholarship Deposit</h1>
            <a href=""><span>Go back</span></a>
            <button><span>Close</span></button>
          </header>
          <div className="c-wizard__heading">
            What is your departmental affiliation?
          </div>
          <ul className="c-wizard__list">
            <li>
              <a href="">American Cultures Center</a>
            </li>
            <li>
              <a href="">Archaeological Research Facility</a>
            </li>
            <li>
              <a href="">Bay Area International Group</a>
            </li>
            <li>
              <a href="">Berkeley Graduate School of Journalism</a>
            </li>
            <li>
              <a href="">Berkeley Natural History Museum</a>
            </li>
            <li>
              <a href="">Berkeley Program in Law and Economics</a>
            </li>
            <li>
              <a href="">[etc.]</a>
            </li>
          </ul>
          <footer>
            Don't see your department? <a href="">Add it to eScholarship here</a>.
          </footer>
        </div>

        <div className="c-wizard__step" id="c-wizard__series">
          <header>
            <h1>eScholarship Deposit</h1>
            <a href=""><span>Go back</span></a>
            <button><span>Close</span></button>
          </header>
          <div className="c-wizard__heading">
            What [title] series would you like to deposit your work in?
          </div>
          <ul className="c-wizard__list">
            <li>
              <a href="">Disability Law Society</a>
            </li>
            <li>
              <a href="">The Docket</a>
            </li>
            <li>
              <a href="">UCLA Law & Economics Series</a>
            </li>
            <li>
              <a href="">UCLA Public Law & Legal Theory Series</a>
            </li>
            <li>
              <a href="">Experimental Legal Scholarship Research Paper Series</a>
            </li>
          </ul>
          <footer>
            We use these questions to direct you to the right place to deposit your materials.
          </footer>
        </div>

        <div className="c-wizard__step" id="c-wizard__link">
          <header>
            <h1>eScholarship Deposit</h1>
            <a href=""><span>Go back</span></a>
            <button><span>Close</span></button>
          </header>
          <div className="c-wizard__heading">
            UC Publication Management
          </div>
          <div className="c-wizard__message">
            <p>Faculty use the UC Publication Management system for all eScholarship deposits– including to claim and deposit publications in compliance with the <a href="">UC Academic Senate faculty Open Acces Policy</a>.</p>
            <button>Go to UC Publication Management</button>
          </div>
          <footer>
            Alternately, you may choose to wait for the system to automatically detect your new publication and send you a deposit link via email.
          </footer>
        </div>

      </div>
    )
  }
}

module.exports = WizardComp;
