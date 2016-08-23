// ##### Global Navigation Component ##### //

import React from 'react'

class CompGlobalNav extends React.Component {
  render() {
		return (
			<nav className="c-globalnav">
				<details>
					<summary className="c-globalnav__button">Menu
					</summary>
					<div className="c-globalnav__items">
						<a href="">About</a>
						<a href="">Campuses</a>
						<a href="">Open Access Policies</a>
						<a href="">Journals</a>
						<a href="">Get Started</a>
					</div>
				</details>
			</nav>
		)
	}
}

module.exports = CompGlobalNav;
