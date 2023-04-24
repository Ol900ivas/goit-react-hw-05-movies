"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{957:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(5861),a=t(9439),s=t(4687),c=t.n(s),o=t(2791),u=t(7689),i=t(1087),l=t(1713),p=t(7540),v=t(184),d=function(e){var r=e.poster,t=e.title,n=e.date,a=e.vote,s=e.overview,c=e.genres,o=Math.round(10*a),u=new Date(n).getFullYear();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w300/").concat(r):p,alt:t,width:360}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:[t," (",u,")"]}),(0,v.jsxs)("p",{children:["User score: ",o,"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:s}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("ul",{children:c&&c.map((function(e){var r=e.id,t=e.name;return(0,v.jsx)("li",{children:t},r)}))})]})]})},f=t(8924),h=function(){var e,r,t=(0,o.useState)(""),s=(0,a.Z)(t,2),p=s[0],h=s[1],x=(0,u.UO)().movieId,m=(0,u.TH)(),w=(0,o.useRef)(null!==(e=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies");(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Mc)(x);case 2:r=e.sent,h(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]);var g=p.poster_path,j=p.title,k=p.release_date,Z=p.vote_average,b=p.overview,y=p.genres;return(0,v.jsxs)("main",{children:[(0,v.jsx)(i.rU,{to:w.current,children:"Go back"}),(0,v.jsxs)("h1",{children:["Movie details: ",x]}),(0,v.jsx)(d,{poster:g,title:j,date:k,vote:Z,overview:b,genres:y}),(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(o.Suspense,{fallback:(0,v.jsx)(f.Z,{}),children:(0,v.jsx)(u.j3,{})})]})}},1713:function(e,r,t){t.d(r,{Bt:function(){return v},E3:function(){return i},Mc:function(){return l},Tg:function(){return u},sQ:function(){return o},y:function(){return p}});var n=t(5861),a=t(4687),s=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"91d51c28e9627ca3e06710d14d157b60"};var o="https://image.tmdb.org/t/p/w300/",u=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day");case 3:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie",{params:{query:r}});case 3:return t=e.sent,n=t.data.results,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r));case 3:return t=e.sent,n=t.data,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/credits"));case 3:return t=e.sent,n=t.data.cast,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/reviews"));case 3:return t=e.sent,n=t.data.results,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}()},7540:function(e,r,t){e.exports=t.p+"static/media/defaultPoster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=957.8c498f73.chunk.js.map