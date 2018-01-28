webpackHotUpdate(0,{

/***/ 28:
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

$(document).ready(function () {
	var headerWidth = $('.header').width();
	console.log(headerWidth);
	$('.body-container').css('width');
	$('.navbar-body').css('width', headerWidth);
});

var Body = function (_React$Component) {
	_inherits(Body, _React$Component);

	function Body() {
		_classCallCheck(this, Body);

		return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
	}

	_createClass(Body, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container body-container border ' },
				_react2.default.createElement(
					'nav',
					{ className: 'container navbar navbar-body sticky-top  navbar-toggleable-md navbar-light bg-faded' },
					_react2.default.createElement(
						'div',
						{ className: 'container padding-none' },
						_react2.default.createElement(
							'button',
							{ className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNav', 'aria-controls': 'navbarNav', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
							_react2.default.createElement('span', { className: 'navbar-toggler-icon' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'collapse navbar-collapse', id: 'navbarNav' },
							_react2.default.createElement(
								'ul',
								{ className: 'navbar-nav' },
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
										'Features'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: 'nav-item' },
									_react2.default.createElement(
										'a',
										{ className: 'nav-link', href: '#' },
										'Pricing'
									)
								),
								_react2.default.createElement(
									'li',
									{ className: 'nav-item' },
									_react2.default.createElement(
										'a',
										{ className: 'nav-link disabled', href: '#' },
										'Disabled'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'p',
					null,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna tellus, sodales quis lectus ut, tincidunt rutrum ligula. Duis non ipsum tortor. Curabitur rhoncus lobortis metus. Integer eu magna non nisl varius tincidunt eu quis arcu. Suspendisse bibendum dictum tortor, at commodo urna dignissim a. Nullam egestas, nisl et dignissim luctus, sapien tortor pellentesque augue, et congue nunc magna aliquet est. Sed euismod blandit tempor. In non nibh neque. Aliquam fermentum non felis quis elementum. Proin vitae pretium orci. Etiam congue efficitur augue, non efficitur ipsum molestie nec. Vestibulum eu turpis nisi. Vestibulum in augue eros. Mauris aliquet faucibus purus, vel malesuada risus mollis ut. Ut iaculis ipsum in tristique maximus. Fusce nec nisi urna. Proin eget arcu posuere, maximus diam sed, facilisis orci. Ut id ex feugiat, tempus magna eget, consequat libero. Nunc pulvinar ligula quis volutpat bibendum. Pellentesque nec ligula venenatis, ultricies elit in, porttitor metus. Vestibulum ligula enim, eleifend eget lacus in, vehicula congue felis. Duis cursus risus nisi, eget aliquet tortor laoreet at. Fusce at facilisis augue. Vestibulum massa mi, lobortis sed nisi sit amet, pretium suscipit mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis efficitur accumsan arcu quis eleifend. Mauris sodales tellus vitae orci euismod vestibulum. Sed tristique nisl gravida diam vestibulum, et cursus diam viverra. Donec finibus, erat eu auctor porttitor, ligula lectus rutrum arcu, nec accumsan purus turpis et orci. Donec elementum mollis nulla eu pulvinar. Maecenas rutrum, tortor vitae placerat faucibus, lorem nunc commodo nibh, nec varius nisl felis id velit. Proin vel commodo purus. Fusce volutpat quis eros in tristique. Maecenas ut eros risus. Donec viverra viverra lacus. Nulla viverra iaculis metus quis posuere. Nunc viverra venenatis lacus vel molestie. Phasellus vitae turpis mollis, vulputate augue ac, sagittis magna. Proin justo est, pretium in ex a, molestie suscipit massa. Sed nec magna sed lectus ullamcorper ullamcorper finibus in turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. Vivamus erat dolor, vestibulum quis urna non, iaculis varius sem. Fusce tristique turpis sapien. Mauris imperdiet nisi sed faucibus aliquam. Cras luctus porttitor mi, sit amet molestie arcu faucibus vulputate. Phasellus scelerisque vel ante vel congue. In malesuada pretium sodales. Phasellus ut blandit neque. Aliquam erat volutpat. Nulla rutrum sit amet mi a fermentum. Vivamus lobortis, ligula id lacinia tempor, neque ante fringilla tellus, eu convallis libero lorem id odio. Pellentesque aliquam, diam id dapibus consectetur, lorem lacus porttitor purus, sed efficitur massa augue id mi. Sed eget ante nisl. Donec non lorem cursus, suscipit lorem eget, eleifend libero. Integer fermentum lacus at quam blandit, a eleifend purus hendrerit. Vestibulum vel vehicula lorem, eu mollis quam. Vivamus egestas orci vel tellus porttitor scelerisque. Nulla quis consectetur ex. Nullam tincidunt suscipit rhoncus. Vestibulum nec eros laoreet, maximus massa vitae, cursus nulla. Morbi blandit lectus viverra, euismod nunc quis, finibus est.'
				)
			);
		}
	}]);

	return Body;
}(_react2.default.Component);

exports.default = Body;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/body.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/body.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})