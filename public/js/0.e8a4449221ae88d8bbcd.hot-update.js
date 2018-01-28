webpackHotUpdate(0,{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shrinkHeader = 30;
$(window).scroll(toggleHeader);

function toggleHeader() {
	var scroll = getCurrentScroll() - $('.header').height();

	if (scroll > shrinkHeader) {
		$('.header').addClass('shrink');
		$('.removable-sec').css('visibility', 'hidden');
	} else {
		$('.header').removeClass('shrink');
		$('.removable-sec').css('visibility', 'visible');
	}

	// $('.body-container').css('top', $('.header').height());
}

function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

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
				null,
				_react2.default.createElement(
					'nav',
					{ className: 'navbar navbar-fixed-top navbar-light bg-faded' },
					_react2.default.createElement(
						'div',
						{ className: 'container' },
						_react2.default.createElement('button', { className: 'navbar-toggler hidden-lg-up', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarResponsive', 'aria-controls': 'navbarResponsive',
							'aria-expanded': 'false', 'aria-label': 'Toggle navigation' }),
						_react2.default.createElement(
							'div',
							{ className: 'collapse navbar-toggleable-md', id: 'navbarResponsive' },
							_react2.default.createElement(
								'a',
								{ className: 'navbar-brand', href: '#' },
								_react2.default.createElement('img', { src: 'favicon1.png', width: '30', height: '30', className: 'd-inline-block align-top', alt: '' }),
								' Navbar'
							),
							_react2.default.createElement(
								'ul',
								{ className: 'nav navbar-nav float-md-right' },
								_react2.default.createElement(
									'li',
									{ className: 'nav-item active' },
									_react2.default.createElement(
										'a',
										{ className: 'nav-link', href: '#' },
										'Home ',
										_react2.default.createElement(
											'span',
											{ className: 'sr-only' },
											'(current)'
										)
									)
								),
								_react2.default.createElement(
									'li',
									{ className: 'nav-item' },
									_react2.default.createElement(
										'a',
										{ className: 'nav-link', href: '#' },
										'Link'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: 'nav-item' },
									_react2.default.createElement(
										'a',
										{ className: 'nav-link', href: '#' },
										'Link'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'next' },
						'Head'
					)
				)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/header.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/header.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})