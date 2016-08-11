(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/app.jsx":[function(require,module,exports){

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./pages/home.jsx');
var Apples = require('./pages/apples.jsx');
var Oranges = require('./pages/oranges.jsx');
var Pears = require('./pages/pears.jsx');

var App = React.createClass({displayName: "App",
render: function() {
 return (
   React.createElement("div", null, 
     React.createElement("p", null, 
       React.createElement("strong", null, "Header")
     ), 
     React.createElement("div", null, 
      React.createElement(Link, {to: "/"}, "Home"), " | ", 
      React.createElement(Link, {to: "/apples"}, "Page 1"), " | ", 
      React.createElement(Link, {to: "/oranges"}, "Page 2"), " | ", 
      React.createElement(Link, {to: "/pears"}, "Page 3")
      ), 
      React.createElement("hr", null), 
      this.props.children, 
      React.createElement("hr", null), 
     React.createElement("p", null, 
       React.createElement("strong", null, "Footer")
     )
   )
  )
 }
});

const { // set React Router prefixes:
  Router,
  Route,
  IndexRoute,
  Redirect,
  Link,
  IndexLink
} = ReactRouter

ReactDOM.render((
  React.createElement(Router, null, 
    React.createElement(Route, {path: "/", component: App}, 
      React.createElement(IndexRoute, {component: Home}), 
      React.createElement(Route, {path: "/apples", component: Apples}), 
      React.createElement(Route, {path: "/oranges", component: Oranges}), 
      React.createElement(Route, {path: "/pears", component: Pears})
    )
  )
), document.getElementById('main'))

},{"./footer.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/footer.jsx","./header.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/header.jsx","./pages/apples.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/apples.jsx","./pages/home.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/home.jsx","./pages/oranges.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/oranges.jsx","./pages/pears.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/pears.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component1.jsx":[function(require,module,exports){
// ##### Component 1 ##### //

var Component1 = React.createClass({displayName: "Component1",
	render: function() {
		return (
			React.createElement("p", null, "Component 1")
		)
	}
});

module.exports = Component1;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component2.jsx":[function(require,module,exports){
// ##### Component 2 ##### //

var Component2 = React.createClass({displayName: "Component2",
	render: function() {
		return (
			React.createElement("p", null, "Component 2")
		)
	}
});

module.exports = Component2;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component3.jsx":[function(require,module,exports){
// ##### Component 3 ##### //

var Component3 = React.createClass({displayName: "Component3",
	render: function() {
		return (
			React.createElement("p", null, "Component 3")
		)
	}
});

module.exports = Component3;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/footer.jsx":[function(require,module,exports){
// ##### Footer ##### //

var Footer = React.createClass({displayName: "Footer",
	render: function() {
		return (
			React.createElement("p", null, "Footer")
		)
	}
});

module.exports = Footer;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/header.jsx":[function(require,module,exports){
// ##### Header ##### //

var Header = React.createClass({displayName: "Header",
	render: function() {
		return (
			React.createElement("p", null, "Header")
		)
	}
});

module.exports = Header;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/apples.jsx":[function(require,module,exports){
// ##### Page 1 ##### //

var Component1 = require('../components/component1.jsx');
var Component2 = require('../components/component2.jsx');

var Apples = React.createClass({displayName: "Apples",
render: function() {
 return (
   	React.createElement("div", null, 
   		React.createElement("h2", null, "Apples"), 
   		React.createElement(Component1, null), 
   		React.createElement(Component2, null), 
     	React.createElement("p", null, "[apple content]")
    )
  )
 }
});

module.exports = Apples;

},{"../components/component1.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component1.jsx","../components/component2.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component2.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/home.jsx":[function(require,module,exports){
// ##### Home ##### //

var Home = React.createClass({displayName: "Home",
render: function() {
 return (
   React.createElement("div", null, 
     React.createElement("h2", null, "Home"), 
     React.createElement("p", null, "[home content]")
   )
  )
 }
});

module.exports = Home;

},{}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/oranges.jsx":[function(require,module,exports){
// ##### Page 2 ##### //

var Component1 = require('../components/component1.jsx');
var Component3 = require('../components/component3.jsx');

var Oranges = React.createClass({displayName: "Oranges",
render: function() {
 return (
		React.createElement("div", null, 
			React.createElement("h2", null, "Oranges"), 
   		React.createElement(Component1, null), 
   		React.createElement(Component3, null), 
     	React.createElement("p", null, "[orange content]")
    )
  )
 }
});

module.exports = Oranges;

},{"../components/component1.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component1.jsx","../components/component3.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component3.jsx"}],"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/pages/pears.jsx":[function(require,module,exports){
// ##### Page 3 ##### //

var Component2 = require('../components/component2.jsx');
var Component3 = require('../components/component3.jsx');

var Pears = React.createClass({displayName: "Pears",
render: function() {
 return (
   	React.createElement("div", null, 
   		React.createElement("h2", null, "Pears"), 
   		React.createElement(Component3, null), 
   		React.createElement(Component2, null), 
     	React.createElement("p", null, "[pear content]")
    )
  )
 }
});

module.exports = Pears;

},{"../components/component2.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component2.jsx","../components/component3.jsx":"/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/components/component3.jsx"}]},{},["/Users/jhagedorn/Documents/repos/eschol-ui/app/jsx/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamhhZ2Vkb3JuL0RvY3VtZW50cy9yZXBvcy9lc2Nob2wtdWkvYXBwL2pzeC9hcHAuanN4IiwiL1VzZXJzL2poYWdlZG9ybi9Eb2N1bWVudHMvcmVwb3MvZXNjaG9sLXVpL2FwcC9qc3gvY29tcG9uZW50cy9jb21wb25lbnQxLmpzeCIsIi9Vc2Vycy9qaGFnZWRvcm4vRG9jdW1lbnRzL3JlcG9zL2VzY2hvbC11aS9hcHAvanN4L2NvbXBvbmVudHMvY29tcG9uZW50Mi5qc3giLCIvVXNlcnMvamhhZ2Vkb3JuL0RvY3VtZW50cy9yZXBvcy9lc2Nob2wtdWkvYXBwL2pzeC9jb21wb25lbnRzL2NvbXBvbmVudDMuanN4IiwiL1VzZXJzL2poYWdlZG9ybi9Eb2N1bWVudHMvcmVwb3MvZXNjaG9sLXVpL2FwcC9qc3gvZm9vdGVyLmpzeCIsIi9Vc2Vycy9qaGFnZWRvcm4vRG9jdW1lbnRzL3JlcG9zL2VzY2hvbC11aS9hcHAvanN4L2hlYWRlci5qc3giLCIvVXNlcnMvamhhZ2Vkb3JuL0RvY3VtZW50cy9yZXBvcy9lc2Nob2wtdWkvYXBwL2pzeC9wYWdlcy9hcHBsZXMuanN4IiwiL1VzZXJzL2poYWdlZG9ybi9Eb2N1bWVudHMvcmVwb3MvZXNjaG9sLXVpL2FwcC9qc3gvcGFnZXMvaG9tZS5qc3giLCIvVXNlcnMvamhhZ2Vkb3JuL0RvY3VtZW50cy9yZXBvcy9lc2Nob2wtdWkvYXBwL2pzeC9wYWdlcy9vcmFuZ2VzLmpzeCIsIi9Vc2Vycy9qaGFnZWRvcm4vRG9jdW1lbnRzL3JlcG9zL2VzY2hvbC11aS9hcHAvanN4L3BhZ2VzL3BlYXJzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVDQUF1QztBQUN2Qyw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLDBDQUEwQzs7QUFFMUMsSUFB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QUEsRUFBQTtLQUNkLG9CQUFDLFVBQVUsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBO01BQ2Isb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQSxrQkFBb0IsQ0FBQTtJQUNuQixDQUFBO0dBQ1A7RUFDRDtBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7QUNsQnpCLHdCQUF3Qjs7QUFFeEIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O0FBRXpELElBQUksMkJBQTJCLHFCQUFBO0FBQy9CLE1BQU0sRUFBRSxXQUFXO0NBQ2xCO0lBQ0csb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtLQUNKLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsT0FBVSxDQUFBLEVBQUE7S0FDZCxvQkFBQyxVQUFVLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBQTtLQUNkLG9CQUFDLFVBQVUsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFBO01BQ2Isb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQSxnQkFBa0IsQ0FBQTtJQUNqQixDQUFBO0dBQ1A7RUFDRDtBQUNGLENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuLy8gdmFyIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLlJvdXRlclxuLy8gdmFyIFJvdXRlID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGVcbi8vIHZhciBMaW5rID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuTGlua1xuXG52YXIgSGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXIuanN4Jyk7XG52YXIgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXIuanN4Jyk7XG52YXIgSG9tZSA9IHJlcXVpcmUoJy4vcGFnZXMvaG9tZS5qc3gnKTtcbnZhciBBcHBsZXMgPSByZXF1aXJlKCcuL3BhZ2VzL2FwcGxlcy5qc3gnKTtcbnZhciBPcmFuZ2VzID0gcmVxdWlyZSgnLi9wYWdlcy9vcmFuZ2VzLmpzeCcpO1xudmFyIFBlYXJzID0gcmVxdWlyZSgnLi9wYWdlcy9wZWFycy5qc3gnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbnJlbmRlcjogZnVuY3Rpb24oKSB7XG4gcmV0dXJuIChcbiAgIDxkaXY+XG4gICAgIDxwPlxuICAgICAgIDxzdHJvbmc+SGVhZGVyPC9zdHJvbmc+XG4gICAgIDwvcD5cbiAgICAgPGRpdj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+Jm5ic3A7fCZuYnNwO1xuICAgICAgPExpbmsgdG89XCIvYXBwbGVzXCI+UGFnZSAxPC9MaW5rPiZuYnNwO3wmbmJzcDtcbiAgICAgIDxMaW5rIHRvPVwiL29yYW5nZXNcIj5QYWdlIDI8L0xpbms+Jm5ic3A7fCZuYnNwO1xuICAgICAgPExpbmsgdG89XCIvcGVhcnNcIj5QYWdlIDM8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociAvPlxuICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8aHIgLz5cbiAgICAgPHA+XG4gICAgICAgPHN0cm9uZz5Gb290ZXI8L3N0cm9uZz5cbiAgICAgPC9wPlxuICAgPC9kaXY+XG4gIClcbiB9XG59KTtcblxuY29uc3QgeyAvLyBzZXQgUmVhY3QgUm91dGVyIHByZWZpeGVzOlxuICBSb3V0ZXIsXG4gIFJvdXRlLFxuICBJbmRleFJvdXRlLFxuICBSZWRpcmVjdCxcbiAgTGluayxcbiAgSW5kZXhMaW5rXG59ID0gUmVhY3RSb3V0ZXJcblxuUmVhY3RET00ucmVuZGVyKChcbiAgPFJvdXRlcj5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcGxlc1wiIGNvbXBvbmVudD17QXBwbGVzfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvb3Jhbmdlc1wiIGNvbXBvbmVudD17T3Jhbmdlc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BlYXJzXCIgY29tcG9uZW50PXtQZWFyc30gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpXG4iLCIvLyAjIyMjIyBDb21wb25lbnQgMSAjIyMjIyAvL1xuXG52YXIgQ29tcG9uZW50MSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHA+Q29tcG9uZW50IDE8L3A+XG5cdFx0KVxuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQxO1xuIiwiLy8gIyMjIyMgQ29tcG9uZW50IDIgIyMjIyMgLy9cblxudmFyIENvbXBvbmVudDIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwPkNvbXBvbmVudCAyPC9wPlxuXHRcdClcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50MjtcbiIsIi8vICMjIyMjIENvbXBvbmVudCAzICMjIyMjIC8vXG5cbnZhciBDb21wb25lbnQzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cD5Db21wb25lbnQgMzwvcD5cblx0XHQpXG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDM7XG4iLCIvLyAjIyMjIyBGb290ZXIgIyMjIyMgLy9cblxudmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHA+Rm9vdGVyPC9wPlxuXHRcdClcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiLy8gIyMjIyMgSGVhZGVyICMjIyMjIC8vXG5cbnZhciBIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxwPkhlYWRlcjwvcD5cblx0XHQpXG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcbiIsIi8vICMjIyMjIFBhZ2UgMSAjIyMjIyAvL1xuXG52YXIgQ29tcG9uZW50MSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50MS5qc3gnKTtcbnZhciBDb21wb25lbnQyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jb21wb25lbnQyLmpzeCcpO1xuXG52YXIgQXBwbGVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xucmVuZGVyOiBmdW5jdGlvbigpIHtcbiByZXR1cm4gKFxuICAgXHQ8ZGl2PlxuICAgXHRcdDxoMj5BcHBsZXM8L2gyPlxuICAgXHRcdDxDb21wb25lbnQxIC8+XG4gICBcdFx0PENvbXBvbmVudDIgLz5cbiAgICAgXHQ8cD5bYXBwbGUgY29udGVudF08L3A+XG4gICAgPC9kaXY+XG4gIClcbiB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBsZXM7XG4iLCIvLyAjIyMjIyBIb21lICMjIyMjIC8vXG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xucmVuZGVyOiBmdW5jdGlvbigpIHtcbiByZXR1cm4gKFxuICAgPGRpdj5cbiAgICAgPGgyPkhvbWU8L2gyPlxuICAgICA8cD5baG9tZSBjb250ZW50XTwvcD5cbiAgIDwvZGl2PlxuICApXG4gfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTtcbiIsIi8vICMjIyMjIFBhZ2UgMiAjIyMjIyAvL1xuXG52YXIgQ29tcG9uZW50MSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50MS5qc3gnKTtcbnZhciBDb21wb25lbnQzID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jb21wb25lbnQzLmpzeCcpO1xuXG52YXIgT3JhbmdlcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbnJlbmRlcjogZnVuY3Rpb24oKSB7XG4gcmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgyPk9yYW5nZXM8L2gyPlxuICAgXHRcdDxDb21wb25lbnQxIC8+XG4gICBcdFx0PENvbXBvbmVudDMgLz5cbiAgICAgXHQ8cD5bb3JhbmdlIGNvbnRlbnRdPC9wPlxuICAgIDwvZGl2PlxuICApXG4gfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3JhbmdlcztcbiIsIi8vICMjIyMjIFBhZ2UgMyAjIyMjIyAvL1xuXG52YXIgQ29tcG9uZW50MiA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50Mi5qc3gnKTtcbnZhciBDb21wb25lbnQzID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jb21wb25lbnQzLmpzeCcpO1xuXG52YXIgUGVhcnMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5yZW5kZXI6IGZ1bmN0aW9uKCkge1xuIHJldHVybiAoXG4gICBcdDxkaXY+XG4gICBcdFx0PGgyPlBlYXJzPC9oMj5cbiAgIFx0XHQ8Q29tcG9uZW50MyAvPlxuICAgXHRcdDxDb21wb25lbnQyIC8+XG4gICAgIFx0PHA+W3BlYXIgY29udGVudF08L3A+XG4gICAgPC9kaXY+XG4gIClcbiB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQZWFycztcbiJdfQ==
