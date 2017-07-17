// ##### Footer Component ##### //

import React from 'react'

class FooterComp extends React.Component {
  render() {
    return (
      <footer className="c-footer">
        <nav className="c-footer__nav">
          <a href="">Home</a>
          <a href="">About eScholarship</a>
          <a href="">Campus Sites</a>
          <a href="">UC Open Access Policy</a>
          <a href="">eScholarship Publishing</a>
          <a href="">Deposit</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href=""><strong>Help</strong></a>
          <a href=""><strong>Admin Login</strong></a>
        </nav>
        <div className="c-footer__logo">
          <a href="">
            <img src="images/logo_footer-eschol.svg" alt="eScholarship, University of California"/>
          </a>
        </div>
        <div className="c-footer__icons">
          <a href="">
            <img src="images/logo_facebook-circle-white.svg" alt="Facebook"/>
          </a>
          <a href="">
            <img src="images/logo_twitter-circle-white.svg" alt="Twitter"/>
          </a>
        </div>
        <div className="c-footer__copyright">
          Powered by the<br/>
          <a href="http://www.cdlib.org">California Digital Library</a>.<br/>
          Copyright &copy; 2017<br/>
          The Regents of the University of California.
        </div>
      </footer>
    )
  }
}

module.exports = FooterComp;
