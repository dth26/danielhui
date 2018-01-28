webpackHotUpdate(0,{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _header = __webpack_require__(27);

var _header2 = _interopRequireDefault(_header);

var _body = __webpack_require__(28);

var _body2 = _interopRequireDefault(_body);

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
        { className: 'container' },
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'border large' },
          _react2.default.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut metus viverra purus dignissim accumsan. Donec at eros vitae leo ultrices fermentum. Morbi id fringilla erat. Quisque sit amet auctor metus. Curabitur id feugiat ipsum. Phasellus cursus libero quis vehicula dictum. Donec molestie sodales velit eu iaculis. Pellentesque quis mi sed arcu eleifend vulputate et id diam. Aenean molestie, turpis sit amet commodo interdum, dolor velit mattis odio, a tincidunt diam ante eu purus. Fusce vestibulum laoreet eros eu dapibus. Cras eget purus tempor, pellentesque ex a, mollis mi. Donec eu molestie velit. Ut vehicula sed orci at bibendum. Donec ex quam, laoreet sit amet maximus at, commodo id nulla. In malesuada posuere lectus, vehicula feugiat turpis varius vel. Nulla feugiat a sem nec aliquam. In hac habitasse platea dictumst. Etiam faucibus viverra ex, sit amet aliquet elit pellentesque non. Aliquam a tortor nec ligula sollicitudin volutpat et at nisi. Etiam tincidunt mi sed auctor iaculis. Maecenas blandit tortor vel vulputate consequat. Mauris lectus ipsum, sagittis id dui et, gravida viverra tellus. Aenean rhoncus, nunc non viverra rutrum, massa elit pellentesque nunc, sit amet cursus ante mi faucibus augue. Morbi vitae augue quam. Pellentesque rutrum malesuada velit, eget pretium sapien tincidunt cursus. Phasellus malesuada, orci consequat maximus sagittis, risus nisi efficitur ante, eu dictum nulla ex ac lacus. Suspendisse potenti. Duis aliquet nibh velit, sit amet facilisis odio pretium vel. Integer varius condimentum felis, eu semper justo placerat quis. Mauris feugiat nunc eu interdum aliquam. Maecenas tincidunt ante ac lacus accumsan efficitur a suscipit leo. Proin in laoreet tortor, vel ullamcorper dui. Aenean sit amet nibh accumsan, molestie massa quis, mollis orci. Pellentesque nec mi ac enim rutrum imperdiet. Nulla facilisi. Pellentesque euismod id nulla sit amet dignissim. Phasellus euismod, justo sed commodo gravida, ante turpis tincidunt justo, in egestas magna nisi eu quam. Donec mattis mauris at mauris facilisis pretium. Nunc mauris dui, ultrices eget vehicula at, facilisis at risus. Duis eu neque aliquet, malesuada ante a, vulputate urna. Vestibulum pulvinar lorem quis nisl tincidunt, et malesuada odio blandit. Mauris commodo ut elit ac vestibulum. In luctus leo libero, ac elementum purus fermentum vitae. Proin euismod, nulla nec commodo pharetra, neque nunc tempus mauris, mollis facilisis orci erat at justo. Sed sodales odio ullamcorper varius porta. Nunc in leo est. Ut eget ipsum id odio ornare viverra sed sed odio. Nunc eu mi quis nunc volutpat pellentesque sit amet quis nisi. Cras finibus justo elementum ipsum volutpat tempus. Maecenas a viverra sem. Nullam non ex nec ligula tempus commodo. Sed quis ante id nunc viverra vulputate. Pellentesque non libero sagittis, bibendum felis vel, hendrerit metus. Proin vitae cursus augue. Nunc blandit purus et ligula tincidunt lacinia.'
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('react-app'));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hui/Documents/apps/dan/src/js/entry.jsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hui/Documents/apps/dan/src/js/entry.jsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})