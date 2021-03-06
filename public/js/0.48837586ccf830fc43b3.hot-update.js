webpackHotUpdate(0,{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _skillsData = __webpack_require__(80);

var _skillsData2 = _interopRequireDefault(_skillsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Skill = function (_React$Component) {
	_inherits(Skill, _React$Component);

	function Skill() {
		_classCallCheck(this, Skill);

		return _possibleConstructorReturn(this, (Skill.__proto__ || Object.getPrototypeOf(Skill)).apply(this, arguments));
	}

	_createClass(Skill, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-12' },
						_skillsData2.default.map(function (dict) {
							return _react2.default.createElement(
								'div',
								{ className: 'row', key: _.uniqueId() },
								_react2.default.createElement(
									'div',
									{ className: 'col-4' },
									_react2.default.createElement(
										'h6',
										null,
										dict['skillset']
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-6' },
									dict['values'].map(function (vals) {
										return _react2.default.createElement(
											'span',
											{ key: _.uniqueId() },
											vals
										);
									})
								)
							);
						})
					)
				)
			);
		}
	}]);

	return Skill;
}(_react2.default.Component);

exports.default = Skill;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/skill.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/skill.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = [{"skillset":"Front-end","values":["Webpack","ReactJS","CSS","HTML","Sass","ES6","Bootstrap"]},{"skillset":"Back-end Languages and Frameworks","values":["Python","Java","Flask","CodeIgniter","PHP","MySQL"]},{"skillset":"Infrastructure and Build Automation","values":["Jenkins","Red Hat 7","Mac OS","Vagrant","Docker","VirtualBox","Nexus","Maven","Systems Administration","Packer"]},{"skillset":"Certifications","values":["Red Hat Certified System Administrator (RHEL 7)","AWS Certified SysOps Administrator – Associate","AWS Certified Developer – Associate","AWS Certified Solutions Architect – Associate "]}]

/***/ })

})