(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[9],{147:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(1),r(39)),i=r(3),c=r(34),a=r.n(c),l=r(4);t.default=function(){var e=Object(i.g)().id,t=o.filter((function(t){return t.id==e}))[0];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)(a.a,{children:[Object(l.jsx)("title",{children:t.tags.map((function(e){return e.title})).join(", ")}),Object(l.jsx)("meta",{id:"og-title",property:"og:title",content:t.tags.map((function(e){return e.title})).join(", ")}),Object(l.jsx)("meta",{id:"og-type",property:"og:type",content:"article"}),Object(l.jsx)("meta",{id:"meta-description",name:"og:description",content:t.content}),Object(l.jsx)("meta",{id:"og-image-alt",name:"og:image:alt",content:t.content}),null!=t.files?Object(l.jsx)("meta",{id:"og-image",property:"og:image",content:t.files[0]}):Object(l.jsx)("div",{}),Object(l.jsx)("meta",{id:"og-image-w",property:"og:image:width",content:"550"}),Object(l.jsx)("meta",{id:"og-image-h",property:"og:image:height",content:"550"}),Object(l.jsx)("meta",{content:Object(i.e)(),property:"og:url"})]})}),Object(l.jsx)(n.u,{children:Object(l.jsx)(n.j,{xs:"auto",md:{offset:2,size:7},children:Object(l.jsx)("div",{className:"bg-light p-2 border",children:Object(l.jsx)(n.e,{children:Object(l.jsxs)(n.f,{className:"p-4",children:[Object(l.jsx)(n.i,{tag:"h5",children:t.title}),Object(l.jsx)(n.g,{className:"text-primary",children:t.tags.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"#/games/".concat(e.title),children:e.title+"("+e.count+")"})})}))}),Object(l.jsx)(n.h,{className:"mt-3",children:Object(l.jsx)("div",{className:"mt-3",dangerouslySetInnerHTML:{__html:t.content}})})]})})})})}),Object(l.jsx)(n.u,{className:"mt-3",children:Object(l.jsx)(n.j,{xs:"auto",md:{offset:2,size:7},children:Object(l.jsx)("div",{children:null!=t.videos?Object(l.jsx)("iframe",{width:"100%",height:"315",src:"".concat(t.videos),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):Object(l.jsx)("div",{})})})}),Object(l.jsx)(n.u,{className:"mt-3",children:Object(l.jsx)(n.j,{xs:"auto",md:{offset:2,size:7},children:Object(l.jsx)("div",{className:"bg-light p-2 border",children:null!=t.files?Object(l.jsx)(n.x,{className:"img-fluid",interval:!1,items:t.files.map((function(e,t){return{key:t,src:e}}))}):Object(l.jsx)("div",{})})})})]})}},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1));function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var f=(0,n.createContext)({});t.MetaContext=f;var s=function(e){function t(){return i(this,t),a(this,l(t).apply(this,arguments))}var r,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(f.Provider,{value:{extract:this.props.extract}},n.Children.only(this.props.children))}}])&&c(r.prototype,o),s&&c(r,s),t}(n.Component),p=s;t.default=p},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=(n=r(6))&&n.__esModule?n:{default:n},c=r(35),a=r(32);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}var y=function(e){function t(){return u(this,t),s(this,p(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&i.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=o.default.createElement("div",{className:"react-head-temp"},t);i.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,i=o.innerHTML;(n=(n=n.filter((function(e){return-1===i.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(o,r)}else if(e.id){var n=(0,c.getDuplicateElementById)(e);n&&(0,c.removeChild)(o,n)}else if("meta"===t){var i=(0,c.getDuplicateMeta)(e);i&&(0,c.removeChild)(o,i)}else if("link"===t&&"canonical"===e.rel){var a=(0,c.getDuplicateCanonical)(e);a&&(0,c.removeChild)(o,a)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(r.prototype,n),a&&f(r,a),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(y,"contextType",a.MetaContext);var b=y;t.default=b,e.exports=t.default},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var n=c(r(32)),o=c(r(33)),i=c(r(36));function c(e){return e&&e.__esModule?e:{default:e}}var a=o.default;t.default=a},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var o=e.type,i=e.props;"title"===o?t=e:"link"===o&&"canonical"===i.rel?r=e:"meta"===o?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};i.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],a=c.props.id;(a?!t.id[a]:0===o.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),i.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return n.reduce((function(r,n){var o,i=e.getAttribute(n);return i?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(i,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),i=o.concat(["id"])},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=(n=r(33))&&n.__esModule?n:{default:n};function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var p=function(e){function t(){return a(this,t),u(this,f(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return o.default.createElement(i.default,null,o.default.createElement("title",null,this.props.title))}}])&&l(r.prototype,n),c&&l(r,c),t}(o.Component),d=p;t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=9.7a1acc15.chunk.js.map