// ##### Global Navigation Component ##### //

import React from 'react'

class CompGlobalNav extends React.Component {
  render() {
		return (
			<nav className="c-globalnav">
				<details className="c-globalnav__main-items" open>
					<summary className="c-globalnav__main-button">Menu
					</summary>
					<a href="">About</a>
					<a href="">One</a>
					<a href="">Two</a>
					<a href="">Three</a>
					<details className="c-globalnav__sub-items" open>
						<summary className="c-globalnav__sub-button">
							Campuses
						</summary>
						<a href="">UC Berkeley</a>
						<a href="">UC Davis</a>
						<a href="">UC Irvine</a>
						<a href="">UCLA</a>
						<a href="">UC Merced</a>
						<a href="">UC Riverside</a>
						<a href="">UC San Diego</a>
						<a href="">UC San Francisco</a>
						<a href="">UC Santa Barbara</a>
						<a href="">UC Santa Cruz</a>
						<a href="">UC Office of the President</a>
						<a href="">UC Press</a>
					</details>
					<a href="">Open Access Policies</a>
					<a href="">Journals</a>
					<a href="">Get Started</a>
				</details>
			</nav>
		)
	}
}

module.exports = CompGlobalNav;
