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

var Home = require('./pages/Home.jsx');
var PageFooter = require('./pages/PageFooter.jsx');
var PageHeader = require('./pages/PageHeader.jsx');

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
          'div',
          { className: 'ui-library-header' },
          React.createElement(
            'h1',
            null,
            React.createElement(
              Link,
              { to: '/' },
              'eScholarship UI Library'
            )
          )
        ),
        this.props.children
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
    React.createElement(Route, { path: '/footer', component: PageFooter }),
    React.createElement(Route, { path: '/header', component: PageHeader })
  )
), document.getElementById('main'));

},{"./pages/Home.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/Home.jsx","./pages/PageFooter.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/PageFooter.jsx","./pages/PageHeader.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/PageHeader.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/CompFooter.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Footer Component ##### //

var CompFooter = function (_React$Component) {
	_inherits(CompFooter, _React$Component);

	function CompFooter() {
		_classCallCheck(this, CompFooter);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CompFooter).apply(this, arguments));
	}

	_createClass(CompFooter, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"p",
				null,
				"[footer component will go here]"
			);
		}
	}]);

	return CompFooter;
}(React.Component);

module.exports = CompFooter;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/CompHeader.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Header Component ##### //

var CompHeader = function (_React$Component) {
	_inherits(CompHeader, _React$Component);

	function CompHeader() {
		_classCallCheck(this, CompHeader);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CompHeader).apply(this, arguments));
	}

	_createClass(CompHeader, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"p",
				null,
				"[header component will go here]"
			);
		}
	}]);

	return CompHeader;
}(React.Component);

module.exports = CompHeader;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/Home.jsx":[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Home Page ##### //

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
          "Components"
        ),
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#footer" },
              "Footer"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#header" },
              "Header"
            )
          )
        )
      );
    }
  }]);

  return Home;
}(React.Component);

module.exports = Home;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/PageFooter.jsx":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Footer Page ##### //

var CompFooter = require('../components/CompFooter.jsx');

var PageFooter = function (_React$Component) {
	_inherits(PageFooter, _React$Component);

	function PageFooter() {
		_classCallCheck(this, PageFooter);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PageFooter).apply(this, arguments));
	}

	_createClass(PageFooter, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(CompFooter, null)
			);
		}
	}]);

	return PageFooter;
}(React.Component);

module.exports = PageFooter;

},{"../components/CompFooter.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/CompFooter.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/PageHeader.jsx":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ##### Header Page ##### //

var CompHeader = require('../components/CompHeader.jsx');

var PageHeader = function (_React$Component) {
	_inherits(PageHeader, _React$Component);

	function PageHeader() {
		_classCallCheck(this, PageHeader);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PageHeader).apply(this, arguments));
	}

	_createClass(PageHeader, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(CompHeader, null)
			);
		}
	}]);

	return PageHeader;
}(React.Component);

module.exports = PageHeader;

},{"../components/CompHeader.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/CompHeader.jsx"}]},{},["/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanN4L2FwcC5qc3giLCJhcHAvanN4L2NvbXBvbmVudHMvQ29tcEZvb3Rlci5qc3giLCJhcHAvanN4L2NvbXBvbmVudHMvQ29tcEhlYWRlci5qc3giLCJhcHAvanN4L3BhZ2VzL0hvbWUuanN4IiwiYXBwL2pzeC9wYWdlcy9QYWdlRm9vdGVyLmpzeCIsImFwcC9qc3gvcGFnZXMvUGFnZUhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FDQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLE9BQU8sUUFBUSxrQkFBUixDQUFYO0FBQ0EsSUFBSSxhQUFhLFFBQVEsd0JBQVIsQ0FBakI7QUFDQSxJQUFJLGFBQWEsUUFBUSx3QkFBUixDQUFqQjs7SUFFTSxHOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUMsa0JBQUQ7QUFBQSxnQkFBTSxJQUFHLEdBQVQ7QUFBQTtBQUFBO0FBQUo7QUFERixTQURGO0FBSUcsYUFBSyxLQUFMLENBQVc7QUFKZCxPQURGO0FBUUQ7Ozs7RUFWZSxNQUFNLFM7O21CQW9CcEIsVztJQU5GLE0sZ0JBQUEsTTtJQUNBLEssZ0JBQUEsSztJQUNBLFUsZ0JBQUEsVTtJQUNBLFEsZ0JBQUEsUTtJQUNBLEksZ0JBQUEsSTtJQUNBLFMsZ0JBQUEsUzs7O0FBR0YsU0FBUyxNQUFULENBQ0U7QUFBQyxRQUFEO0FBQUE7QUFDRTtBQUFDLFNBQUQ7QUFBQSxNQUFPLE1BQUssR0FBWixFQUFnQixXQUFXLEdBQTNCO0FBQ0Usd0JBQUMsVUFBRCxJQUFZLFdBQVcsSUFBdkIsR0FERjtBQUVFLHdCQUFDLEtBQUQsSUFBTyxNQUFLLFNBQVosRUFBc0IsV0FBVyxVQUFqQyxHQUZGO0FBR0Usd0JBQUMsS0FBRCxJQUFPLE1BQUssU0FBWixFQUFzQixXQUFXLFVBQWpDO0FBSEY7QUFERixDQURGLEVBUUcsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBUkg7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7O0lBRU0sVTs7Ozs7Ozs7Ozs7MkJBQ0s7QUFDVCxVQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQUdBOzs7O0VBTHVCLE1BQU0sUzs7QUFRL0IsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7Ozs7Ozs7Ozs7O0FDVkE7O0lBRU0sVTs7Ozs7Ozs7Ozs7MkJBQ0s7QUFDVCxVQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQUdBOzs7O0VBTHVCLE1BQU0sUzs7QUFRL0IsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7Ozs7Ozs7Ozs7O0FDVkE7O0lBRU0sSTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDVCxhQUNDO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESDtBQUVLO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBRyxNQUFLLFNBQVI7QUFBQTtBQUFBO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBRyxNQUFLLFNBQVI7QUFBQTtBQUFBO0FBQUo7QUFGRjtBQUZMLE9BREQ7QUFTQTs7OztFQVhpQixNQUFNLFM7O0FBY3pCLE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFFQSxJQUFJLGFBQWEsUUFBUSw4QkFBUixDQUFqQjs7SUFFTSxVOzs7Ozs7Ozs7OzsyQkFDSztBQUNULFVBQ0M7QUFBQTtBQUFBO0FBQ0csd0JBQUMsVUFBRDtBQURILElBREQ7QUFLQTs7OztFQVB1QixNQUFNLFM7O0FBVS9CLE9BQU8sT0FBUCxHQUFpQixVQUFqQjs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVBLElBQUksYUFBYSxRQUFRLDhCQUFSLENBQWpCOztJQUVNLFU7Ozs7Ozs7Ozs7OzJCQUNLO0FBQ1QsVUFDQztBQUFBO0FBQUE7QUFDRyx3QkFBQyxVQUFEO0FBREgsSUFERDtBQUtBOzs7O0VBUHVCLE1BQU0sUzs7QUFVL0IsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gIyMjIyMgVG9wLWxldmVsIFJlYWN0IEFwcCAjIyMjIyAvL1xuXG4vLyAqKioqKiBUaGUgdmFycyBiZWxvdyAod2hlbiB1bmNvbW1lbnRlZCkgYXJlIHB1bGxpbmcgaW4gdGhlIE5QTSBwYWNrYWdlcyBpbnRvIGJ1bmRsZS5qcyB2aWEgQnJvd3NlcmlmeSwgYnV0IHRoZXkncmUgbm90IGxvYWRpbmcgaW4gdGhlIGFwcCwgZm9yIHNvbWUgcmVhc29uLiAqKioqKiAvL1xuXG4vLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gdmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGVyXG4vLyB2YXIgUm91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZVxuLy8gdmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rXG5cbnZhciBIb21lID0gcmVxdWlyZSgnLi9wYWdlcy9Ib21lLmpzeCcpO1xudmFyIFBhZ2VGb290ZXIgPSByZXF1aXJlKCcuL3BhZ2VzL1BhZ2VGb290ZXIuanN4Jyk7XG52YXIgUGFnZUhlYWRlciA9IHJlcXVpcmUoJy4vcGFnZXMvUGFnZUhlYWRlci5qc3gnKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWxpYnJhcnktaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPjxMaW5rIHRvPVwiL1wiPmVTY2hvbGFyc2hpcCBVSSBMaWJyYXJ5PC9MaW5rPjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCB7IC8vIHNldCBSZWFjdCBSb3V0ZXIgcHJlZml4ZXM6XG4gIFJvdXRlcixcbiAgUm91dGUsXG4gIEluZGV4Um91dGUsXG4gIFJlZGlyZWN0LFxuICBMaW5rLFxuICBJbmRleExpbmtcbn0gPSBSZWFjdFJvdXRlclxuXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8Um91dGVyPlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2Zvb3RlclwiIGNvbXBvbmVudD17UGFnZUZvb3Rlcn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2hlYWRlclwiIGNvbXBvbmVudD17UGFnZUhlYWRlcn0gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpXG4iLCIvLyAjIyMjIyBGb290ZXIgQ29tcG9uZW50ICMjIyMjIC8vXG5cbmNsYXNzIENvbXBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwPltmb290ZXIgY29tcG9uZW50IHdpbGwgZ28gaGVyZV08L3A+XG5cdFx0KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcEZvb3RlcjtcbiIsIi8vICMjIyMjIEhlYWRlciBDb21wb25lbnQgIyMjIyMgLy9cblxuY2xhc3MgQ29tcEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHA+W2hlYWRlciBjb21wb25lbnQgd2lsbCBnbyBoZXJlXTwvcD5cblx0XHQpXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wSGVhZGVyO1xuIiwiLy8gIyMjIyMgSG9tZSBQYWdlICMjIyMjIC8vXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdCAgIFx0XHQ8aDI+Q29tcG9uZW50czwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNmb290ZXJcIj5Gb290ZXI8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNoZWFkZXJcIj5IZWFkZXI8L2E+PC9saT5cbiAgICAgICAgPC91bD5cblx0ICAgIDwvZGl2PlxuICBcdClcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7XG4iLCIvLyAjIyMjIyBGb290ZXIgUGFnZSAjIyMjIyAvL1xuXG52YXIgQ29tcEZvb3RlciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQ29tcEZvb3Rlci5qc3gnKTtcblxuY2xhc3MgUGFnZUZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0ICAgXHRcdDxDb21wRm9vdGVyIC8+XG5cdCAgICA8L2Rpdj5cbiAgXHQpXG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYWdlRm9vdGVyO1xuIiwiLy8gIyMjIyMgSGVhZGVyIFBhZ2UgIyMjIyMgLy9cblxudmFyIENvbXBIZWFkZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0NvbXBIZWFkZXIuanN4Jyk7XG5cbmNsYXNzIFBhZ2VIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdCAgIFx0XHQ8Q29tcEhlYWRlciAvPlxuXHQgICAgPC9kaXY+XG4gIFx0KVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnZUhlYWRlcjtcbiJdfQ==
