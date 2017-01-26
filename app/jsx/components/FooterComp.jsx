// ##### Footer Component ##### //

import React from 'react'

class FooterComp extends React.Component {
  render() {
    return (
      <div className="c-footer">
        <nav className="c-footer__nav" role="list">
          <a href="" role="listitem">Home</a>
          <a href="" role="listitem">About eScholarship</a>
          <a href="" role="listitem">Campuses</a>
          <a href="" role="listitem">OA Policies</a>
          <a href="" role="listitem">Journals</a>
          <a href="" role="listitem">Deposit</a>
          <a href="" role="listitem">Privacy Policy</a>
          <a href="" role="listitem">Terms & Conditions</a>
          <a href="" role="listitem">Help</a>
          <a href="" role="listitem">Admin Login</a>
        </nav>
        <div className="c-footer__logo">
          <a href="">
            <img src="images/logo_temp-footer-eschol.png" alt="eScholarship logo"/>
          </a>
        </div>
        <div className="c-footer__icons">
          <a href="">
            <img src="images/logo_facebook.svg" alt="Facebook"/>
          </a>
          <a href="">
            <img src="images/logo_twitter.svg" alt="Twitter"/>
          </a>
        </div>
        <div className="c-footer__copyright">
          Powered by the<br/>
          <a href="http://www.cdlib.org">California Digital Library</a>.<br/>
          Copyright &copy; 2017<br/>
          The Regents of the University of California.
        </div>
      </div>
    )
  }
}

module.exports = FooterComp;
