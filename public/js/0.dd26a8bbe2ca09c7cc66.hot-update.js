webpackHotUpdate(0,{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _projectsData = __webpack_require__(78);

var _projectsData2 = _interopRequireDefault(_projectsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
		key: 'loadModal',
		value: function loadModal(modalID) {
			console.log('clicked');
			$("#" + modalID).modal("show");
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'col-xs-1 col-sm-1 col-md-2 col-lg-3' },
				_react2.default.createElement(
					'button',
					{ type: 'button', className: 'btn-project-modal', 'data-toggle': 'modal', 'data-target': "#" + this.props.modalID },
					_react2.default.createElement(
						'div',
						{ className: 'card project-card' },
						_react2.default.createElement('img', { className: 'card-img-top', src: "public/images/site-screenshots/" + this.props.image, alt: 'Card image cap' }),
						_react2.default.createElement(
							'div',
							{ className: 'card-block' },
							_react2.default.createElement(
								'h6',
								{ className: 'card-title card-header' },
								this.props.projectName
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'card-block card-block-text' },
							_react2.default.createElement(
								'p',
								{ className: 'card-text' },
								this.props.projectDesc
							),
							_react2.default.createElement(
								'p',
								null,
								this.props.projectTools.map(function (tag) {
									return _react2.default.createElement(
										'span',
										{ key: _.uniqueId(), className: 'tag' },
										tag
									);
								})
							),
							_react2.default.createElement(
								'a',
								{ target: '_blank', href: this.props.github, className: 'card-link' },
								_react2.default.createElement(
									'i',
									{ className: 'fa fa-github fa-lg' },
									_react2.default.createElement(
										'span',
										{ className: 'fa-text' },
										'\xA0Source'
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'modal fade', id: this.props.modalID, tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true' },
					_react2.default.createElement(
						'div',
						{ className: 'modal-dialog  modal-lg', role: 'document' },
						_react2.default.createElement(
							'div',
							{ className: 'modal-content' },
							_react2.default.createElement('img', { className: 'modal-img', src: "public/images/site-screenshots/" + this.props.image, alt: 'Card image cap' }),
							_react2.default.createElement(
								'div',
								{ className: 'modal-footer' },
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'btn btn-secondary', 'data-dismiss': 'modal' },
									'Close'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

var Project = function (_React$Component2) {
	_inherits(Project, _React$Component2);

	function Project() {
		_classCallCheck(this, Project);

		return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
	}

	_createClass(Project, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_projectsData2.default.map(function (dict) {
						return _react2.default.createElement(Card, { key: _.uniqueId(), image: dict['image'], modalID: dict['modalID'], projectName: dict['name'], projectDesc: dict['desc'], projectTools: dict['tools'], github: dict['github'] });
					})
				)
			);
		}
	}]);

	return Project;
}(_react2.default.Component);

exports.default = Project;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/project.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/project.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})