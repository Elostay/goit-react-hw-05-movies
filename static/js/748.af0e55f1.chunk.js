"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{368:function(n,t,e){e.d(t,{O:function(){return i}});var r=e(214),a=e(689),c=e(114),u=e(184),i=function(n){var t=n.movies,e=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.aV,{className:"text-xl text-whiteMy",children:[t.map((function(n){return(0,u.jsx)(r.ck,{children:(0,u.jsxs)(r.yX,{to:"/movies/".concat(n.id),state:e,children:[(0,u.jsx)(u.Fragment,{children:n.poster_path?(0,u.jsx)(r.Ei,{width:"100",height:"100",src:"".concat("https://image.tmdb.org/t/p/w300").concat(n.poster_path),alt:"poster"}):(0,u.jsx)(r.Uc,{width:"100",height:"100",src:c,alt:"404"})}),(0,u.jsx)("p",{children:n.title})||(0,u.jsx)("p",{children:n.name})]},n.id)},n.id)})),0===t.length&&(0,u.jsx)("p",{children:"Not found"})]})})}},591:function(n,t,e){e.d(t,{K9:function(){return s},XI:function(){return f},a9:function(){return l},ex:function(){return o},hq:function(){return p}});var r=e(861),a=e(687),c=e.n(a),u=e(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"ca07cfa0a72b49d166a90c6c0253cddf"};var i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,u.Z.get(t,{params:e});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,i("trending/movie/day");case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie",n.next=3,i("search/movie",{query:t});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t),n.next=3,i(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits"),n.next=3,i(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews"),n.next=3,i(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},214:function(n,t,e){e.d(t,{Dx:function(){return d},Ei:function(){return m},Uc:function(){return v},aV:function(){return l},ck:function(){return x},yX:function(){return h}});var r,a,c,u,i,s,o=e(168),p=e(686),f=e(87),l=p.Z.ul(r||(r=(0,o.Z)(["\n  margin-top: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),d=p.Z.p(a||(a=(0,o.Z)(["\n  font-size: 40px;\n  color: wheat;\n"]))),x=p.Z.li(c||(c=(0,o.Z)(["\n  width: calc((100% - 40px) / 5);\n\n  text-align: center;\n"]))),h=(0,p.Z)(f.rU)(u||(u=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),m=p.Z.img(i||(i=(0,o.Z)(["\n  width: 200px;\n  border-radius: 20px;\n"]))),v=p.Z.img(s||(s=(0,o.Z)(["\n  width: 200px;\n  height: 300px;\n  border-radius: 20px;\n"])))},748:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,u=e(861),i=e(439),s=e(687),o=e.n(s),p=e(791),f=e(87),l=e(591),d=e(368),x=e(168),h=e(686),m=h.Z.input(r||(r=(0,x.Z)(["\n  color: #212121;\n  border: 1px solid #212121;\n  border-radius: 20px;\n  width: 400px;\n"]))),v=h.Z.button(a||(a=(0,x.Z)(["\n  display: block;\n\n  font-size: 20px;\n  max-width: 120px;\n  background-color: #ae445a;\n  padding: 10px;\n  border-radius: 20px;\n  color: #e8bcb9;\n"]))),w=h.Z.form(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),Z=e(184),g=function(){var n=(0,f.lr)(),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)([]),c=(0,i.Z)(a,2),s=c[0],x=c[1],h=(0,p.useCallback)(function(){var n=(0,u.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.ex)(t);case 3:e=n.sent,x(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),[]);(0,p.useEffect)((function(){var n=e.get("search");n&&h(n)}),[h,e]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(w,{className:"flex  ",onSubmit:function(n){n.preventDefault();var t=n.target.search.value.trim().toLowerCase();t&&r({search:t})},children:[(0,Z.jsx)(m,{placeholder:"Enter movie name",className:"",type:"text",name:"search"}),(0,Z.jsx)(v,{className:"bg-sky-500 max-w-xl",type:"submit",children:"Submit"})]}),(0,Z.jsx)(d.O,{movies:s})]})}},114:function(n,t,e){n.exports=e.p+"static/media/oops.d3658eada76a0e9c015e.jpg"}}]);
//# sourceMappingURL=748.af0e55f1.chunk.js.map