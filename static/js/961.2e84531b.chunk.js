"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{591:function(e,t,n){n.d(t,{X:function(){return o}});var r=n(861),c=n(687),a=n.n(c),s=n(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"",e.next=3,s.Z.get("".concat(t,"?api_key=ca07cfa0a72b49d166a90c6c0253cddf").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},961:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(687),s=n.n(a),o=n(591),i=n(791),u=n(689),p=n(87),h=n(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,i.useState)({}),n=(0,c.Z)(t,2),a=n[0],f=n[1],l=(0,i.useState)([]),d=(0,c.Z)(l,2),v=d[0],m=d[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.X)("movie/".concat(e));case 3:n=t.sent,console.log("description",n),f(n),m(n.genres),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{type:"button",children:"Go back"}),(0,h.jsx)("img",{width:"100",height:"100",src:"".concat("https://image.tmdb.org/t/p/w300").concat(a.poster_path),alt:""}),(0,h.jsx)("h2",{children:a.title}),(0,h.jsxs)("p",{children:["Overview: ",a.overview]}),v.map((function(e){return(0,h.jsx)("p",{children:e.name},e.id)})),(0,h.jsx)(p.rU,{to:"cast",children:"Cast"}),(0,h.jsx)(p.rU,{to:"reviews",children:"Reviews"}),(0,h.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=961.2e84531b.chunk.js.map