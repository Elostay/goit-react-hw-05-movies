"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[667],{28:function(e,t,r){r.d(t,{O:function(){return o}});var n,a=r(168),u=r(686).Z.ul(n||(n=(0,a.Z)(["\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),c=r(689),s=r(87),i=r(184),o=function(e){var t=e.movies,r=(0,c.TH)();return(0,i.jsx)(u,{className:"text-xl text-whiteMy",children:t.map((function(e){var t;return(0,i.jsxs)(s.rU,{className:"block max-w-xs",to:"/movies/".concat(e.id),state:r,children:["+ ",null!==(t=e.title)&&void 0!==t?t:e.name]},e.id)}))})}},591:function(e,t,r){r.d(t,{K9:function(){return i},XI:function(){return f},a9:function(){return l},ex:function(){return o},hq:function(){return p}});var n=r(861),a=r(687),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"ca07cfa0a72b49d166a90c6c0253cddf"};var s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,c.Z.get(t,{params:r});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day",e.next=3,s("trending/movie/day");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"search/movie",e.next=3,s("search/movie",{query:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t),e.next=3,s(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/credits"),e.next=3,s(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/reviews"),e.next=3,s(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},667:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(687),c=r.n(u),s=r(791),i=r(87),o=r(591),p=r(28),f=r(184);t.default=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,s.useState)([]),v=(0,a.Z)(l,2),m=v[0],x=v[1],h=(0,s.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.ex)(t);case 3:r=e.sent,x(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);(0,s.useEffect)((function(){var e=r.get("search");e&&h(e)}),[h,r]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:"flex gap-10 text-xl ",onSubmit:function(e){e.preventDefault();var t=e.target.search.value.trim().toLowerCase();t&&u({search:t})},children:[(0,f.jsx)("input",{className:"",type:"text",name:"search"}),(0,f.jsx)("button",{className:"bg-sky-500 max-w-xl",type:"submit",children:"Submit"})]}),(0,f.jsx)(p.O,{movies:m})]})}}}]);
//# sourceMappingURL=667.ef14bcf6.chunk.js.map