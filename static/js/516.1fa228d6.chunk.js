"use strict";(self.webpackChunktest_task_goit=self.webpackChunktest_task_goit||[]).push([[516],{5335:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,o,i,a,s,l,p,c,u,d,f,x,g,h=t(4165),b=t(5861),w=t(9439),m=t(7689),Z=t(2791),v=t(9135),j=t(5264),y=t(168),k=t(5706),S=k.Z.li(r||(r=(0,y.Z)(["\n  position: relative;\n  width: 380px;\n  min-width: 380px;\n  height: 464px;\n  margin-bottom: 36px;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  border-radius: 20px;\n\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),O=k.Z.div(o||(o=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 28px;\n"]))),N=k.Z.div(i||(i=(0,y.Z)(["\n  margin-bottom: 76px;\n"]))),I=k.Z.img(a||(a=(0,y.Z)(["\n  position: absolute;\n  top: 20;\n  left: 20;\n  transform: translateY(-50%);\n"]))),J=k.Z.div(s||(s=(0,y.Z)(["\n  position: absolute;\n  width: 380px;\n  height: 8px;\n  left: 0px;\n  top: 226px;\n\n  overflow: hidden;\n\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),U=k.Z.div(l||(l=(0,y.Z)(["\n  position: absolute;\n  top: 198px;\n  left: 158px;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgb(87 54 163);\n"]))),z=k.Z.img(p||(p=(0,y.Z)(["\n  position: absolute;\n  top: -6px;\n  left: -9px;\n  z-index: 1;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n"]))),C=k.Z.img(c||(c=(0,y.Z)(["\n  width: 62px;\n  height: 62px;\n  object-fit: cover;\n  border-radius: 50%;\n"]))),T=k.Z.ul(u||(u=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 26px;\n"]))),_=k.Z.button(d||(d=(0,y.Z)(["\n  width: 196px;\n  height: 50px;\n  margin: 0 auto;\n  background: #ebd8ff;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &:hover {\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  }\n"]))),F=k.Z.button(f||(f=(0,y.Z)(["\n  width: 196px;\n  height: 50px;\n  margin: 0 auto;\n  background: #5cd3a8;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n\n  &:hover {\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  }\n"]))),E=k.Z.li(x||(x=(0,y.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 8px;\n  }\n"]))),L=k.Z.p(g||(g=(0,y.Z)(["\n  color: #ffc318;\n"])));var R,A,B,H,M,Y=t.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg",q=t.p+"static/media/picturebgr.ecde5c9dfbe42e4d5b8e.png",D=t.p+"static/media/ellipse.fb24b248239efd196758.png",G=t(184),K=function(n){var e,t=n.name,r=n.tweets,o=n.followers,i=n.avatar,a=n.userId,s=(null!==(e=JSON.parse(localStorage.getItem("user".concat(a))))&&void 0!==e&&e).following,l=(0,Z.useState)(s),p=(0,w.Z)(l,2),c=p[0],u=p[1],d=function(n){var e={userId:n,following:!c};localStorage.setItem("user".concat(n),JSON.stringify(e));var t=JSON.parse(localStorage.getItem("user".concat(n)));u(t.following);var r=JSON.parse(localStorage.getItem("followingUsers"));if(c&&JSON.parse(localStorage.getItem("followingUsers")).includes(n)){var o=r.indexOf(n);r.splice(o,1);var i=Array.from(new Set(r));localStorage.setItem("followingUsers",JSON.stringify(i))}else r.push(n),localStorage.setItem("followingUsers",JSON.stringify(r))},f=function(n){var e=n.toString().split("");return e.length>6&&e.splice(-6,0,","),e.splice(-3,0,","),e.join(""),e};return(0,G.jsx)(S,{children:(0,G.jsxs)(O,{children:[(0,G.jsxs)(N,{children:[(0,G.jsx)(I,{src:Y,alt:"logo",width:"76",height:"20"}),(0,G.jsx)("img",{src:q,alt:"background",width:"308",height:"168"})]}),(0,G.jsx)(J,{}),(0,G.jsxs)(U,{children:[(0,G.jsx)(z,{src:D,alt:"circle"}),(0,G.jsx)(C,{src:i,alt:"avatar"})]}),(0,G.jsxs)(T,{children:[(0,G.jsx)(E,{children:(0,G.jsx)(L,{children:t})}),(0,G.jsx)(E,{children:(0,G.jsxs)("p",{children:[r," Tweets"]})}),(0,G.jsx)(E,{children:(0,G.jsxs)("p",{children:[f(c?o+1:o)," ","Followers"]})})]}),c?(0,G.jsx)(F,{onClick:function(){return d(a)},children:"Following"}):(0,G.jsx)(_,{type:"button",onClick:function(){return d(a)},children:"Follow"})]})})},P=t(1087),Q=(0,k.Z)(P.rU)(R||(R=(0,y.Z)(["\n  position: fixed;\n  top: 136px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  left: 15px;\n  width: 80px;\n  height: 30px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  color: #ebd8ff;\n  padding: 6px 8px;\n  border-radius: 28px;\n\n  &:hover {\n    color: #ffc318;\n  }\n"]))),V=k.Z.ul(A||(A=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),W=k.Z.div(B||(B=(0,y.Z)(["\n  position: relative;\n  padding: 0 86px 72px 86px;\n"]))),X=k.Z.button(H||(H=(0,y.Z)(["\n  display: block;\n  margin: 0 auto;\n  width: 196px;\n  height: 50px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #ebd8ff;\n\n  &:hover {\n    color: #ffc318;\n  }\n"]))),$=k.Z.h1(M||(M=(0,y.Z)(["\n  width: 600px;\n  margin-left: auto;\n  margin-right: 60px;\n  color: #ebd8ff;\n"]))),nn=t(1243),en=t(1686),tn=t.n(en);nn.Z.defaults.baseURL="https://647de603af984710854a90c6.mockapi.io/";var rn=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,nn.Z.get("/users");case 3:return(e=n.sent)||tn().Notify("Oops, something went wrong"),n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),on=function(){var n,e,t=(0,Z.useState)([]),r=(0,w.Z)(t,2),o=r[0],i=r[1],a=(0,Z.useState)([]),s=(0,w.Z)(a,2),l=s[0],p=s[1],c=(0,Z.useState)(!1),u=(0,w.Z)(c,2),d=u[0],f=u[1],x=(0,Z.useState)(3),g=(0,w.Z)(x,2),y=g[0],k=g[1],S=(0,Z.useState)(!1),O=(0,w.Z)(S,2),N=O[0],I=O[1],J=(0,Z.useState)([]),U=(0,w.Z)(J,2),z=U[0],C=U[1],T=(0,m.TH)(),_=(0,Z.useRef)(null!==(n=null===(e=T.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,Z.useEffect)((function(){try{var n=function(){var n=(0,b.Z)((0,h.Z)().mark((function n(){var e,t,r,a;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,rn();case 2:if(e=n.sent,(t=e.data).length){n.next=7;break}return j.Notify.error("Oops, something went wrong."),n.abrupt("return");case 7:if(C(t),r=t.slice(0,y),(a=F(r)).length){n.next=13;break}return j.Notify.error("Oops, There's no tweets"),n.abrupt("return");case 13:i(a),y!==t.length?f(!0):o.length===t.length?f(!1):(f(!1),j.Notify.info("Oops! There's no more tweets"));case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){j.Notify.error("Oops, something went wrong."),console.log(e.message)}}),[y]),(0,Z.useEffect)((function(){I(!1),f(!0),p(o),o.length<z.length-1?f(!0):f(!1)}),[o,z]);var F=function(n){return n.map((function(n){return{id:n.id,user:n.user,tweets:n.tweets,followers:n.followers,avatar:n.avatar}}))};return(0,G.jsxs)(W,{children:[(0,G.jsxs)(Q,{to:_.current,children:[(0,G.jsx)(v.bUI,{}),"Back"]}),(0,G.jsx)(V,{children:l.map((function(n){var e=n.id,t=n.user,r=n.tweets,o=n.followers,i=n.avatar;return(0,G.jsx)(K,{name:t,followers:o,tweets:r,avatar:i,userId:e},e)}))}),d&&(0,G.jsx)(X,{type:"button",onClick:function(){k((function(n){return n+3}))},children:"Load More"}),N&&(0,G.jsx)($,{children:"Oops, it seems you still follow nobody."})]})}}}]);
//# sourceMappingURL=516.1fa228d6.chunk.js.map