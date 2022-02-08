(()=>{"use strict";var e,t={373:()=>{},957:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return u(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(294)),c=r(935),f=l(r(277)),d=l(r(97)),p=function(e){function t(t){var r=e.call(this,t)||this;return r.state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},r}return o(t,e),t.prototype.handleClick=function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();(0,d.default)(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))},t.prototype.jumpTo=function(e){this.setState({stepNumber:e,xIsNext:e%2==0})},t.prototype.render=function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],o=(0,d.default)(n.squares),a=r.map((function(e,r){var n=r?"Go to move #".concat(r):"Go to game start";return s.default.createElement("li",{key:r},s.default.createElement("button",{onClick:function(){return t.jumpTo(r)}},n))}));return e=o?"Winner: ".concat(o):"Next player: ".concat(this.state.xIsNext?"X":"O"),s.default.createElement("div",{className:"game"},s.default.createElement(f.default,{squares:n.squares,onClick:function(e){return t.handleClick(e)}}),s.default.createElement("div",{className:"game-board"}),s.default.createElement("div",{className:"game-info"},s.default.createElement("div",null,e),s.default.createElement("ol",null,a)))},t}(s.Component);(0,c.render)(s.default.createElement(p,null),document.getElementById("root"))},277:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return u(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(294)),c=l(r(974)),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.renderSquare=function(e){var t=this;return s.default.createElement(c.default,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})},t.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),s.default.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),s.default.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))},t}(s.Component);t.default=f},974:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(294));t.default=function(e){return o.default.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}},97:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=t[r],o=n[0],a=n[1],u=n[2];if(e[o]&&e[o]===e[a]&&e[o]===e[u])return e[o]}return null}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var u=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],i=!0,l=0;l<r.length;l++)(!1&a||u>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[u,i,l]=r,s=0;if(u.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(r);s<u.length;s++)a=u[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunklearn_webpack_mini=self.webpackChunklearn_webpack_mini||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[935],(()=>n(957)));var o=n.O(void 0,[935],(()=>n(373)));o=n.O(o)})();