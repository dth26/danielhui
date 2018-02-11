webpackHotUpdate(0,{

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _header = __webpack_require__(37);

var _header2 = _interopRequireDefault(_header);

var _body = __webpack_require__(36);

var _body2 = _interopRequireDefault(_body);

var _reactRouterDom = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container', id: 'bootstrap-override' },
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'container-fluid body-container' },
              _react2.default.createElement(
                'div',
                { className: ' ' },
                _react2.default.createElement(
                  'ul',
                  { className: 'navbar-nav', id: 'body-navbar-ul' },
                  _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/projects', className: 'nav-link' },
                      'Projects'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/skills', className: 'nav-link' },
                      'Skills'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/resume', className: 'nav-link' },
                      'Resume'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/about', className: 'nav-link' },
                      'About'
                    )
                  )
                )
              ),
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Project }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/projects', component: Project }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: Project }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/resume', component: Project }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/skills', component: Project })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('react-app'));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/entry.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/entry.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})