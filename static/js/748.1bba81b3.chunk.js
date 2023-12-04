"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{98:function(n,t,e){e.d(t,{Ei:function(){return f},dh:function(){return p},ds:function(){return s},es:function(){return l}});var r,a,c,i,u=e(168),o=e(686),s=o.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  row-gap: 50px;\n"]))),p=o.Z.li(a||(a=(0,u.Z)(["\n  width: calc((100% - 20px) / 3);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  gap: 20px;\n  font-weight: 500;\n  @media (max-width: 650px) {\n    width: calc((100% - 10px) / 2);\n  }\n"]))),f=o.Z.img(c||(c=(0,u.Z)(["\n  width: 200px;\n  border-radius: 20px;\n"]))),l=o.Z.h2(i||(i=(0,u.Z)(["\n  display: inline-block;\n  padding: 10px;\n  border-radius: 20px;\n  color: #662549;\n  margin-bottom: 20px;\n  font-size: 20px;\n  background-color: #e8bcb9;\n"])))},368:function(n,t,e){e.d(t,{O:function(){return o}});var r=e(214),a=e(689),c=e(114),i=e(98),u=e(184),o=function(n){var t=n.movies,e=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.aV,{className:"text-xl text-whiteMy",children:[t.map((function(n){var t;return(0,u.jsx)(r.ck,{children:(0,u.jsxs)(r.yX,{to:"/movies/".concat(n.id),state:e,children:[(0,u.jsx)(u.Fragment,{children:n.poster_path?(0,u.jsx)(i.Ei,{width:"100",height:"100",src:"".concat("https://image.tmdb.org/t/p/w300").concat(n.poster_path),alt:"poster"}):(0,u.jsx)(i.Ei,{width:"100",height:"100",src:c,alt:"404"})}),null!==(t=n.title)&&void 0!==t?t:n.name]},n.id)},n.id)})),0===t.length&&(0,u.jsx)("p",{children:"Not found"})]})})}},591:function(n,t,e){e.d(t,{K9:function(){return o},XI:function(){return f},a9:function(){return l},ex:function(){return s},hq:function(){return p}});var r=e(861),a=e(687),c=e.n(a),i=e(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"ca07cfa0a72b49d166a90c6c0253cddf"};var u=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,i.Z.get(t,{params:e});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,u("trending/movie/day");case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie",n.next=3,u("search/movie",{query:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t),n.next=3,u(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits"),n.next=3,u(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews"),n.next=3,u(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},214:function(n,t,e){e.d(t,{Dx:function(){return f},aV:function(){return p},ck:function(){return l},yX:function(){return d}});var r,a,c,i,u=e(168),o=e(686),s=e(87),p=o.Z.ul(r||(r=(0,u.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),f=o.Z.p(a||(a=(0,u.Z)(["\n  font-size: 40px;\n  color: wheat;\n"]))),l=o.Z.li(c||(c=(0,u.Z)(["\n  width: calc((100% - 40px) / 5);\n\n  text-align: center;\n"]))),d=(0,o.Z)(s.rU)(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n"])))},748:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,i=e(861),u=e(439),o=e(687),s=e.n(o),p=e(791),f=e(87),l=e(591),d=e(368),x=e(168),h=e(686),m=h.Z.input(r||(r=(0,x.Z)(["\n  color: #212121;\n  border: 1px solid #212121;\n  border-radius: 20px;\n  width: 400px;\n"]))),v=h.Z.button(a||(a=(0,x.Z)(["\n  display: block;\n\n  font-size: 20px;\n  max-width: 120px;\n  background-color: #ae445a;\n  padding: 10px;\n  border-radius: 20px;\n  color: #e8bcb9;\n"]))),w=h.Z.form(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),g=e(184),b=function(){var n=(0,f.lr)(),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)([]),c=(0,u.Z)(a,2),o=c[0],x=c[1],h=(0,p.useCallback)(function(){var n=(0,i.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.ex)(t);case 3:e=n.sent,x(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),[]);(0,p.useEffect)((function(){var n=e.get("search");n&&h(n)}),[h,e]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(w,{className:"flex  ",onSubmit:function(n){n.preventDefault();var t=n.target.search.value.trim().toLowerCase();t&&r({search:t})},children:[(0,g.jsx)(m,{placeholder:"Enter movie name",className:"",type:"text",name:"search"}),(0,g.jsx)(v,{className:"bg-sky-500 max-w-xl",type:"submit",children:"Submit"})]}),(0,g.jsx)(d.O,{movies:o})]})}},114:function(n,t,e){n.exports=e.p+"static/media/oops.d3658eada76a0e9c015e.jpg"}}]);
//# sourceMappingURL=748.1bba81b3.chunk.js.map