"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{591:function(e,t,n){n.d(t,{X:function(){return o}});var r=n(861),a=n(687),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",e.next=3,u.Z.get("".concat(t,"?api_key=ca07cfa0a72b49d166a90c6c0253cddf").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},667:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(687),u=n.n(c),o=n(791),s=n(87),i=n(591),f=n(184);t.default=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=n.get("query"),p=(0,o.useState)([]),v=(0,a.Z)(p,2),h=v[0],d=v[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==l){var t=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.X)("search/movie","&query=".concat(l));case 3:t=e.sent,d(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();t()}},children:[(0,f.jsx)("input",{type:"text",name:"search",value:null!==l&&void 0!==l?l:"",onChange:function(e){return c({query:e.target.value})}}),(0,f.jsx)("button",{type:"submit",children:"Submit"})]}),(0,f.jsx)("div",{children:h.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)(s.rU,{to:"movies/".concat(t),children:n},t)}))})]})}}}]);
//# sourceMappingURL=667.ae05e015.chunk.js.map