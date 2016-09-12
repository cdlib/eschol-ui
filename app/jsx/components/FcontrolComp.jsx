// ##### Footer Component ##### //

import React from 'react'

class FcontrolComp extends React.Component {
  render() {
		return (
			<div className="c-fcontrol">
				<h2>Droplists</h2>
				<div className="c-fcontrol__droplist">
					<label htmlFor="c-fcontrol__droplist-label">Fruit:</label>
					<select name="" id="c-fcontrol__droplist-label">
						<option value="">Apples</option>
						<option value="">Oranges</option>
						<option value="">Pears</option>
						<option value="">Grapes</option>
						<option value="">Strawberries</option>
					</select>
				</div>
			</div>
		)
	}
}

module.exports = FcontrolComp;
