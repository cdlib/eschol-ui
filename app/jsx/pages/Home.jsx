// ##### Home Page ##### //

import React from 'react'

class Home extends React.Component {
  render() {
		return (
			<div>
	   		<h2>Layouts</h2>
        <ul>
          <li><a href="#about">About</a></li>
        </ul>
        <h2>Components</h2>
        <ul>
          <li><a href="#breadcrumb">Breadcrumb Navigation</a></li>
          <li><a href="#columnbox">Column Box</a></li>
          <li><a href="#columns">Columns</a></li>
          <li><a href="#footer">Footer</a></li>
          <li><a href="#globalnav">Global Navigation</a></li>
          <li><a href="#header">Header</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#sidebarnav">Sidebar Navigation</a></li>
          <li><a href="#textlink">Text Links</a></li>
        </ul>
	    </div>
  	)
	}
}

module.exports = Home;
