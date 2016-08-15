// ##### Footer Component ##### //

class CompFooter extends React.Component {
  render() {
		return (
			<div className="c-footer">
				<div className="c-footer__logologin">
					<div className="c-footer__logo">
						[logo goes here]
					</div>
					<div className="c-footer__login">Account login
					</div>
				</div>
				<nav className="c-footer__nav">
					<a href="">Home</a>
					<a href="">Campuses</a>
					<a href="">OA Policies</a>
					<a href="">Journals</a>
					<a href="">About eScholarship</a>
					<a href="">Deposit</a>
					<a href="">Help</a>
					<a href="">Contact Us</a>
					<a href="">Privacy Policy</a>
					<a href="">Terms & Conditions</a>
				</nav>
				<div className="c-footer__social-icons">
					<a href="" className="c-footer__social-icon-link">[facebook]</a>
					<a href="" className="c-footer__social-icon-link">[twitter]</a>
					<a href="" className="c-footer__social-icon-link">[google]</a>
				</div>
				<div className="c-footer__copyright">
					Powered by <a href="">The California Digital Library</a>.<br/>Copyright &copy; 2016 The Regents of the University of California.
				</div>
			</div>
		)
	}
}

module.exports = CompFooter;
