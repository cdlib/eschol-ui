// ##### Footer Component ##### //

import React from 'react'

class PaginationComp extends React.Component {
  render() {
		return (
			<form className="c-pagination" action="">
				<button className="c-pagination__prevnext">Previous</button>
				<button className="c-pagination__page">1</button>
				<button className="c-pagination__page">2</button>
				<button className="c-pagination__page">3</button>
				<button className="c-pagination__page">4</button>
				<button className="c-pagination__page">5</button>
				<span>&hellip;</span>
				<button className="c-pagination__page">342</button>
				<button className="c-pagination__prevnext">Next</button>
			</form>
		)
	}
}

module.exports = PaginationComp;
