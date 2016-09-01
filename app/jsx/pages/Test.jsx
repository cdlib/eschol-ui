// ##### Test Page ##### //

import React from 'react'
import joelMQ from '../../js/mediaqueries.js'

joelMQ();

class Test extends React.Component {
  render() {
		return (
			<div>
	   		<h2>Media Query Test</h2>
        <div id="mqdiv">empty</div>
	    </div>
  	)
	}
}

module.exports = Test;
