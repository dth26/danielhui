webpackHotUpdate(0,{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

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

	$('.body-container').css('top', $('.header').height());
}

function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

$(document).ready(function () {
	var headerHeight = $('#navbar-fixed-top-override').height();
	$('.body-container ').css('top');

	$('#navbar-fixed-top-override').width($('#bootstrap-override').width());
});

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
				{ className: 'container fixed-top ', id: 'navbar-fixed-top-override' },
				_react2.default.createElement(
					'nav',
					{ className: 'navbar header navbar-light bg-faded' },
					_react2.default.createElement(
						'div',
						{ className: 'container padding-zero' },
						_react2.default.createElement(
							'div',
							{ className: 'row row-eq-height' },
							_react2.default.createElement(
								'div',
								{ className: 'col-md-5 col-sm-12' },
								_react2.default.createElement(
									'div',
									{ className: 'row' },
									_react2.default.createElement(
										'div',
										{ className: 'col-12' },
										_react2.default.createElement(
											'p',
											{ className: '' },
											_react2.default.createElement(
												'span',
												{ id: 'title' },
												'DANIEL HUI'
											),
											' \xA0 \xA0 \xA0',
											_react2.default.createElement(
												'span',
												{ className: 'removable-sec' },
												'Proin a erat nec augue pharetra fringilla. In hac habitasse platea dictumst. Vivamus augue nisi, accumsan non mollis a, interdum a velit.  Nulla tincidunt nisl nisi, porta consectetur nisi sodales u. Donec eget odio vel elit pretium convallis. Nullam mi quam, congue ullamcorper imperdiet eget, posuere nec velit. Nunc sed fermentum purus. Etiam sed ante nunc.In hac habitasse platea dictumst. Vivamus augue nisi.'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'col-12 bottom-bar removable-sec' },
										_react2.default.createElement('i', { className: 'fa fa-location-arrow', 'aria-hidden': 'true' }),
										_react2.default.createElement(
											'span',
											{ className: 'icon-caption' },
											'Fairfax, VA'
										)
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-md-3 col-sm-4 img-container' },
								_react2.default.createElement('img', { className: 'img-cir  img-fluid center-content-v removable-sec', src: 'images/dan.gif', alt: 'picture of Daniel Hui' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-md-4 col-sm-8' },
								_react2.default.createElement(
									'div',
									{ className: 'row removable-sec' },
									_react2.default.createElement(
										'div',
										{ className: 'col-12' },
										_react2.default.createElement(
											'p',
											null,
											_react2.default.createElement(
												'span',
												{ className: 'heading-med' },
												'Location'
											),
											_react2.default.createElement('br', null),
											_react2.default.createElement(
												'span',
												{ className: 'desc-text' },
												'Fairfax, VA'
											)
										),
										'\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0',
										_react2.default.createElement(
											'p',
											null,
											_react2.default.createElement(
												'span',
												{ className: 'heading-med' },
												'Age'
											),
											_react2.default.createElement('br', null),
											_react2.default.createElement(
												'span',
												{ className: 'desc-text' },
												'24'
											)
										),
										_react2.default.createElement('br', null),
										_react2.default.createElement(
											'p',
											null,
											_react2.default.createElement(
												'span',
												{ className: 'heading-med' },
												'Employer'
											),
											_react2.default.createElement('br', null),
											_react2.default.createElement(
												'span',
												{ className: 'desc-text' },
												'Booz Allen Hamilton, Software Engineer'
											)
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'col-12 bottom-bar' },
										_react2.default.createElement('i', { className: 'fa fa-envelope', 'aria-hidden': 'true' }),
										_react2.default.createElement(
											'span',
											{ className: 'icon-caption' },
											'danielhui123@gmail.com'
										),
										_react2.default.createElement('i', { className: 'down fa fa-phone', 'aria-hidden': 'true' }),
										_react2.default.createElement(
											'span',
											{ className: 'icon-caption' },
											'267-234-8911'
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'nav',
					{ 'class': 'navbar navbar-toggleable-md navbar-light bg-faded', id: 'body-navbar' },
					_react2.default.createElement(
						'button',
						{ 'class': 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
						_react2.default.createElement('span', { 'class': 'navbar-toggler-icon' })
					),
					_react2.default.createElement(
						'div',
						{ 'class': 'collapse navbar-collapse', id: 'navbarNav' },
						_react2.default.createElement(
							'ul',
							{ 'class': 'navbar-nav' },
							_react2.default.createElement(
								'li',
								{ 'class': 'nav-item active' },
								_react2.default.createElement(
									'a',
									{ 'class': 'nav-link', href: '#' },
									'Home ',
									_react2.default.createElement(
										'span',
										{ 'class': 'sr-only' },
										'(current)'
									)
								)
							),
							_react2.default.createElement(
								'li',
								{ 'class': 'nav-item' },
								_react2.default.createElement(
									'a',
									{ 'class': 'nav-link', href: '#' },
									'Features'
								)
							),
							_react2.default.createElement(
								'li',
								{ 'class': 'nav-item' },
								_react2.default.createElement(
									'a',
									{ 'class': 'nav-link', href: '#' },
									'Pricing'
								)
							),
							_react2.default.createElement(
								'li',
								{ 'class': 'nav-item' },
								_react2.default.createElement(
									'a',
									{ 'class': 'nav-link disabled', href: '#' },
									'Disabled'
								)
							)
						)
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