!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,(function(){return function(){"use strict";var e={491:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},946:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},33:function(e){function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},837:function(e){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},323:function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t,o){var r=o(596);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},424:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},579:function(e,t,o){var r=o(924).default;function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(Object.prototype.hasOwnProperty.call(e,f)){var s=u?Object.getOwnPropertyDescriptor(e,f):null;s&&(s.get||s.set)?Object.defineProperty(o,f,s):o[f]=e[f]}return o.default=e,t&&t.set(e,o),o},e.exports.default=e.exports,e.exports.__esModule=!0},246:function(e,t,o){var r=o(924).default,n=o(491);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?n(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},596:function(e){function t(o,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,t(o,r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},924:function(e){function t(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(o)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},297:function(e){e.exports=require("react")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,o),u.exports}var r={};return function(){var e=r,t=o(579),n=o(424);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(o(837)),f=n(o(946)),s=n(o(33)),i=n(o(22)),p=n(o(246)),c=n(o(323)),l=t(o(297));function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){(0,u.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var x=function(e){(0,i.default)(n,e);var t,o,r=(t=n,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.default)(t);if(o){var n=(0,c.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,p.default)(this,e)});function n(e){var t;return(0,f.default)(this,n),(t=r.call(this,e)).state={},t.boxRefTop=l.default.createRef(),t}return(0,s.default)(n,[{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;this.props.addCloseListener((function(){e.boxRefTop.current.style.bottom=-e.height+"px"})),setTimeout((function(){e.boxRefTop.current.style.bottom=0}),10)}},{key:"height",get:function(){return"undefined"!=typeof window&&Number.isInteger(window.innerHeight)?window.innerHeight>400?400:window.innerHeight:400}},{key:"render",value:function(){return l.default.createElement("div",{ref:this.boxRefTop,style:d(d({},{boxShadow:"0px 1px 7px -2px rgba(51,51,51,1)",position:"absolute",bottom:"0",backgroundColor:"#FFF",width:"100%",minHeight:"100px",transition:"0.2s"}),{},{height:this.height+"px",bottom:-this.height+"px"}),className:this.props.className},this.props.children)}}]),n}(l.Component);e.default=x}(),r}()}));