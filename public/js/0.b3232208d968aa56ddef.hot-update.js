webpackHotUpdate(0,{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import SearchBar from './search-bar.jsx'


var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'header row justify-content-center row-eq-height' },
				_react2.default.createElement(
					'div',
					{ className: 'col-6 border' },
					_react2.default.createElement(
						'p',
						{ className: '' },
						_react2.default.createElement(
							'span',
							{ id: 'title' },
							'DANIEL HUI'
						),
						' \xA0 \xA0 \xA0 Proin a erat nec augue pharetra fringilla. In hac habitasse platea dictumst. Vivamus augue nisi, accumsan non mollis a, interdum a velit.  Nulla tincidunt nisl nisi, porta consectetur nisi sodales ut. Maecenas venenatis arcu eu tellus convallis eleifend. Donec eget odio vel elit pretium convallis. Nullam mi quam, congue ullamcorper imperdiet eget, posuere nec velit. Nunc sed fermentum purus. Etiam sed ante nunc.In hac habitasse platea dictumst. Vivamus augue nisi.'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-4 border' },
					_react2.default.createElement(
						'h6',
						null,
						'Location'
					),
					_react2.default.createElement('br', null),
					'Fairfax, VA ',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'h6',
						null,
						'Location'
					),
					_react2.default.createElement('br', null),
					'Fairfax, VA ',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'h6',
						null,
						'Location'
					),
					_react2.default.createElement('br', null),
					'Fairfax, VA ',
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col-2 border' },
					_react2.default.createElement('img', { className: 'img-cir  img-fluid align-middle', src: 'images/dan.gif', alt: 'picture of Daniel Hui' })
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(Header, null);
		}
	}]);

	return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('react-app'));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/entry.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/entry.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})