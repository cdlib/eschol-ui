// ##### Footer Component ##### //

import React from 'react'

class InputComp extends React.Component {
  render() {
		return (
			<div>
				<h2>Droplists</h2>
				<div className="c-input__droplist">
					<label htmlFor="c-input__droplist-label">Fruit:</label>
					<select name="" id="c-input__droplist-label">
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

module.exports = InputComp;
