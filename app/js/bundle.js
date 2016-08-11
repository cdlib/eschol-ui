(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/app.jsx":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Top-level React App ##### //

// ***** The vars below (when uncommented) are pulling in the NPM packages into bundle.js via Browserify, but they're not loading in the app, for some reason. ***** //

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link

var Home = require('./pages/home.jsx');
var Apples = require('./pages/apples.jsx');
var Oranges = require('./pages/oranges.jsx');
var Pears = require('./pages/pears.jsx');

// var App = React.createClass({
// render: function() {

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'Header'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            Link,
            { to: '/' },
            'Home'
          ),
          ' | ',
          React.createElement(
            Link,
            { to: '/apples' },
            'Page 1'
          ),
          ' | ',
          React.createElement(
            Link,
            { to: '/oranges' },
            'Page 2'
          ),
          ' | ',
          React.createElement(
            Link,
            { to: '/pears' },
            'Page 3'
          )
        ),
        React.createElement('hr', null),
        this.props.children,
        React.createElement('hr', null),
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'Footer'
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Redirect = _ReactRouter.Redirect;
var Link = _ReactRouter.Link;
var IndexLink = _ReactRouter.IndexLink;


ReactDOM.render(React.createElement(
  Router,
  null,
  React.createElement(
    Route,
    { path: '/', component: App },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: '/apples', component: Apples }),
    React.createElement(Route, { path: '/oranges', component: Oranges }),
    React.createElement(Route, { path: '/pears', component: Pears })
  )
), document.getElementById('main'));

},{"./pages/apples.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/apples.jsx","./pages/home.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/home.jsx","./pages/oranges.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/oranges.jsx","./pages/pears.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/pears.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component1.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Component 1 ##### //

var Component1 = function (_React$Component) {
	_inherits(Component1, _React$Component);

	function Component1() {
		_classCallCheck(this, Component1);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Component1).apply(this, arguments));
	}

	_createClass(Component1, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"p",
				null,
				"Component 1"
			);
		}
	}]);

	return Component1;
}(React.Component);

module.exports = Component1;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component2.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Component 2 ##### //

var Component2 = function (_React$Component) {
	_inherits(Component2, _React$Component);

	function Component2() {
		_classCallCheck(this, Component2);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Component2).apply(this, arguments));
	}

	_createClass(Component2, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"p",
				null,
				"Component 2"
			);
		}
	}]);

	return Component2;
}(React.Component);

module.exports = Component2;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component3.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Component 3 ##### //

var Component3 = function (_React$Component) {
	_inherits(Component3, _React$Component);

	function Component3() {
		_classCallCheck(this, Component3);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Component3).apply(this, arguments));
	}

	_createClass(Component3, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"p",
				null,
				"Component 3"
			);
		}
	}]);

	return Component3;
}(React.Component);

module.exports = Component3;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/apples.jsx":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Page 1 ##### //

var Component1 = require('../components/component1.jsx');
var Component2 = require('../components/component2.jsx');

var Apples = function (_React$Component) {
		_inherits(Apples, _React$Component);

		function Apples() {
				_classCallCheck(this, Apples);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(Apples).apply(this, arguments));
		}

		_createClass(Apples, [{
				key: 'render',
				value: function render() {
						return React.createElement(
								'div',
								null,
								React.createElement(
										'h2',
										null,
										'Apples'
								),
								React.createElement(Component1, null),
								React.createElement(Component2, null),
								React.createElement(
										'p',
										null,
										'[apple content]'
								)
						);
				}
		}]);

		return Apples;
}(React.Component);

module.exports = Apples;

},{"../components/component1.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component1.jsx","../components/component2.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component2.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/home.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Home ##### //

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Home"
        ),
        React.createElement(
          "p",
          null,
          "[home content]"
        )
      );
    }
  }]);

  return Home;
}(React.Component);

module.exports = Home;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/oranges.jsx":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Page 2 ##### //

var Component1 = require('../components/component1.jsx');
var Component3 = require('../components/component3.jsx');

var Oranges = function (_React$Component) {
	_inherits(Oranges, _React$Component);

	function Oranges() {
		_classCallCheck(this, Oranges);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Oranges).apply(this, arguments));
	}

	_createClass(Oranges, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'Oranges'
				),
				React.createElement(Component1, null),
				React.createElement(Component3, null),
				React.createElement(
					'p',
					null,
					'[orange content]'
				)
			);
		}
	}]);

	return Oranges;
}(React.Component);

module.exports = Oranges;

},{"../components/component1.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component1.jsx","../components/component3.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component3.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/pears.jsx":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Page 3 ##### //

var Component2 = require('../components/component2.jsx');
var Component3 = require('../components/component3.jsx');

var Pears = function (_React$Component) {
	_inherits(Pears, _React$Component);

	function Pears() {
		_classCallCheck(this, Pears);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Pears).apply(this, arguments));
	}

	_createClass(Pears, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					'Pears'
				),
				React.createElement(Component3, null),
				React.createElement(Component2, null),
				React.createElement(
					'p',
					null,
					'[pear content]'
				)
			);
		}
	}]);

	return Pears;
}(React.Component);

module.exports = Pears;

},{"../components/component2.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component2.jsx","../components/component3.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component3.jsx"}]},{},["/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanN4L2FwcC5qc3giLCJhcHAvanN4L2NvbXBvbmVudHMvY29tcG9uZW50MS5qc3giLCJhcHAvanN4L2NvbXBvbmVudHMvY29tcG9uZW50Mi5qc3giLCJhcHAvanN4L2NvbXBvbmVudHMvY29tcG9uZW50My5qc3giLCJhcHAvanN4L3BhZ2VzL2FwcGxlcy5qc3giLCJhcHAvanN4L3BhZ2VzL2hvbWUuanN4IiwiYXBwL2pzeC9wYWdlcy9vcmFuZ2VzLmpzeCIsImFwcC9qc3gvcGFnZXMvcGVhcnMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0NBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxPQUFPLFFBQVEsa0JBQVIsQ0FBWDtBQUNBLElBQUksU0FBUyxRQUFRLG9CQUFSLENBQWI7QUFDQSxJQUFJLFVBQVUsUUFBUSxxQkFBUixDQUFkO0FBQ0EsSUFBSSxRQUFRLFFBQVEsbUJBQVIsQ0FBWjs7QUFFQTtBQUNBOztJQUVNLEc7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FEQTtBQUlBO0FBQUE7QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxjQUFNLElBQUcsR0FBVDtBQUFBO0FBQUEsV0FERjtBQUFBO0FBRUU7QUFBQyxnQkFBRDtBQUFBLGNBQU0sSUFBRyxTQUFUO0FBQUE7QUFBQSxXQUZGO0FBQUE7QUFHRTtBQUFDLGdCQUFEO0FBQUEsY0FBTSxJQUFHLFVBQVQ7QUFBQTtBQUFBLFdBSEY7QUFBQTtBQUlFO0FBQUMsZ0JBQUQ7QUFBQSxjQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFKRixTQUpBO0FBVUUsdUNBVkY7QUFXRyxhQUFLLEtBQUwsQ0FBVyxRQVhk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LHdCQUFDLFVBQUQsT0FGRDtBQUdDLHdCQUFDLFVBQUQsT0FIRDtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixJQURIO0FBUUE7Ozs7RUFWa0IsTUFBTSxTOztBQWExQixPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vLyAjIyMjIyBUb3AtbGV2ZWwgUmVhY3QgQXBwICMjIyMjIC8vXG5cbi8vICoqKioqIFRoZSB2YXJzIGJlbG93ICh3aGVuIHVuY29tbWVudGVkKSBhcmUgcHVsbGluZyBpbiB0aGUgTlBNIHBhY2thZ2VzIGludG8gYnVuZGxlLmpzIHZpYSBCcm93c2VyaWZ5LCBidXQgdGhleSdyZSBub3QgbG9hZGluZyBpbiB0aGUgYXBwLCBmb3Igc29tZSByZWFzb24uICoqKioqIC8vXG5cbi8vIHZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG4vLyB2YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbi8vIHZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZXJcbi8vIHZhciBSb3V0ZSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlXG4vLyB2YXIgTGluayA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLkxpbmtcblxudmFyIEhvbWUgPSByZXF1aXJlKCcuL3BhZ2VzL2hvbWUuanN4Jyk7XG52YXIgQXBwbGVzID0gcmVxdWlyZSgnLi9wYWdlcy9hcHBsZXMuanN4Jyk7XG52YXIgT3JhbmdlcyA9IHJlcXVpcmUoJy4vcGFnZXMvb3Jhbmdlcy5qc3gnKTtcbnZhciBQZWFycyA9IHJlcXVpcmUoJy4vcGFnZXMvcGVhcnMuanN4Jyk7XG5cbi8vIHZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4vLyByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5IZWFkZXI8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+Jm5ic3A7fCZuYnNwO1xuICAgICAgICA8TGluayB0bz1cIi9hcHBsZXNcIj5QYWdlIDE8L0xpbms+Jm5ic3A7fCZuYnNwO1xuICAgICAgICA8TGluayB0bz1cIi9vcmFuZ2VzXCI+UGFnZSAyPC9MaW5rPiZuYnNwO3wmbmJzcDtcbiAgICAgICAgPExpbmsgdG89XCIvcGVhcnNcIj5QYWdlIDM8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxociAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Ryb25nPkZvb3Rlcjwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgeyAvLyBzZXQgUmVhY3QgUm91dGVyIHByZWZpeGVzOlxuICBSb3V0ZXIsXG4gIFJvdXRlLFxuICBJbmRleFJvdXRlLFxuICBSZWRpcmVjdCxcbiAgTGluayxcbiAgSW5kZXhMaW5rXG59ID0gUmVhY3RSb3V0ZXJcblxuUmVhY3RET00ucmVuZGVyKChcbiAgPFJvdXRlcj5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcGxlc1wiIGNvbXBvbmVudD17QXBwbGVzfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvb3Jhbmdlc1wiIGNvbXBvbmVudD17T3Jhbmdlc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BlYXJzXCIgY29tcG9uZW50PXtQZWFyc30gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpXG4iLCIvLyAjIyMjIyBDb21wb25lbnQgMSAjIyMjIyAvL1xuXG5jbGFzcyBDb21wb25lbnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cD5Db21wb25lbnQgMTwvcD5cblx0XHQpXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQxO1xuIiwiLy8gIyMjIyMgQ29tcG9uZW50IDIgIyMjIyMgLy9cblxuY2xhc3MgQ29tcG9uZW50MiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHA+Q29tcG9uZW50IDI8L3A+XG5cdFx0KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50MjtcbiIsIi8vICMjIyMjIENvbXBvbmVudCAzICMjIyMjIC8vXG5cbmNsYXNzIENvbXBvbmVudDMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwPkNvbXBvbmVudCAzPC9wPlxuXHRcdClcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDM7XG4iLCIvLyAjIyMjIyBQYWdlIDEgIyMjIyMgLy9cblxudmFyIENvbXBvbmVudDEgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2NvbXBvbmVudDEuanN4Jyk7XG52YXIgQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50Mi5qc3gnKTtcblxuY2xhc3MgQXBwbGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdCAgIFx0PGRpdj5cblx0ICAgXHRcdDxoMj5BcHBsZXM8L2gyPlxuXHQgICBcdFx0PENvbXBvbmVudDEgLz5cblx0ICAgXHRcdDxDb21wb25lbnQyIC8+XG5cdCAgICAgXHQ8cD5bYXBwbGUgY29udGVudF08L3A+XG5cdCAgICA8L2Rpdj5cbiBcdFx0KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwbGVzO1xuIiwiLy8gIyMjIyMgSG9tZSAjIyMjIyAvL1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG4gIFx0XHQ8ZGl2PlxuICAgIFx0XHQ8aDI+SG9tZTwvaDI+XG4gICAgXHRcdDxwPltob21lIGNvbnRlbnRdPC9wPlxuICBcdFx0PC9kaXY+XG4gIFx0KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTtcbiIsIi8vICMjIyMjIFBhZ2UgMiAjIyMjIyAvL1xuXG52YXIgQ29tcG9uZW50MSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50MS5qc3gnKTtcbnZhciBDb21wb25lbnQzID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jb21wb25lbnQzLmpzeCcpO1xuXG5jbGFzcyBPcmFuZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDI+T3JhbmdlczwvaDI+XG5cdCAgIFx0XHQ8Q29tcG9uZW50MSAvPlxuXHQgICBcdFx0PENvbXBvbmVudDMgLz5cblx0ICAgICBcdDxwPltvcmFuZ2UgY29udGVudF08L3A+XG5cdCAgICA8L2Rpdj5cbiAgXHQpXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcmFuZ2VzO1xuIiwiLy8gIyMjIyMgUGFnZSAzICMjIyMjIC8vXG5cbnZhciBDb21wb25lbnQyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jb21wb25lbnQyLmpzeCcpO1xudmFyIENvbXBvbmVudDMgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2NvbXBvbmVudDMuanN4Jyk7XG5cbmNsYXNzIFBlYXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdCAgIFx0PGRpdj5cblx0ICAgXHRcdDxoMj5QZWFyczwvaDI+XG5cdCAgIFx0XHQ8Q29tcG9uZW50MyAvPlxuXHQgICBcdFx0PENvbXBvbmVudDIgLz5cblx0ICAgICBcdDxwPltwZWFyIGNvbnRlbnRdPC9wPlxuXHQgICAgPC9kaXY+XG4gIFx0KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVhcnM7XG4iXX0=
