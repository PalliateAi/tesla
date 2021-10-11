(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{32:function(e,n,t){},33:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r,i,c,o,a,s,l,d=t(0),j=t.n(d),x=t(10),b=t.n(x),h=(t(32),t(33),t(3)),g=t(26),p=t(4),O=t(24),u=t.n(O),f=t(25),m=t.n(f),v=t(13),w=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),y=function(e){return e.car.cars},k=w.reducer,T=t(12),B=t(2);var I,M,S,C,N,D,E,L=function(){var e=Object(d.useState)(!1),n=Object(g.a)(e,2),t=n[0],r=n[1],i=Object(T.b)(y);return console.log(i),Object(B.jsxs)(z,{children:[Object(B.jsx)("a",{children:Object(B.jsx)("img",{src:"/images/logo.svg",alt:"Tesla Logo",style:{height:"25px",width:"130px"}})}),Object(B.jsx)(A,{children:i&&i.map((function(e,n){return Object(B.jsx)("a",{href:"#",children:e},n)}))}),Object(B.jsxs)(R,{children:[Object(B.jsx)("a",{href:"#",children:"Shop"}),Object(B.jsx)("a",{href:"#",children:"Tesla Account"}),Object(B.jsx)(X,{onClick:function(){return r(!0)}})]}),Object(B.jsxs)(J,{show:t,children:[Object(B.jsx)(P,{children:Object(B.jsx)(W,{onClick:function(){return r(!1)}})}),i&&i.map((function(e,n){return Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:e})},n)})),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Used Inventory"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Trade-in"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Cybertruck"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Roadster"})}),Object(B.jsx)("li",{children:Object(B.jsx)("a",{href:"#",children:"Semi"})})]})]})},z=p.a.div(r||(r=Object(h.a)(["\n  min-height: 60px;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  top: 0;\n  left: 0;\n  right: 0%;\n  z-index: 1;\n"]))),A=p.a.div(i||(i=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: center;\n\n  a {\n    font-weight: 500;\n    text-transform: uppercase;\n    padding: 0 10px;\n    flex-wrap: nowrap;\n  }\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),R=p.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  a {\n    font-weight: 500;\n    text-transform: uppercase;\n    margin-right: 10px;\n\n    @media(max-width:400px) {\n    display: none;\n  }\n  }\n\n\n"]))),X=Object(p.a)(u.a)(o||(o=Object(h.a)(["\n  cursor: pointer;\n"]))),J=p.a.div(a||(a=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: white;\n  width: 300px;\n  z-index: 10;\n  list-style: none;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n  transform: ",";\n  transition: transform 0.2s ease-in-out;\n  li {\n    padding: 15px 0;\n    border-bottom: 1px solid rgba(0, 0, 0.2);\n\n    a {\n      font-weight: 500;\n    }\n  }\n"])),(function(e){return e.show?"translateX(0)":"translateX(100%)"})),P=p.a.div(s||(s=Object(h.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),W=Object(p.a)(m.a)(l||(l=Object(h.a)(["\n  cursor: pointer;\n"]))),Y=t(15),U=t.n(Y);var $,q=function(e){var n=e.title,t=e.description,r=e.leftBtnText,i=e.rightBtnText,c=e.backgroundImg;return Object(B.jsxs)(F,{bgImage:c,children:[Object(B.jsx)(U.a,{bottom:!0,children:Object(B.jsxs)(G,{children:[Object(B.jsx)("h1",{children:n}),Object(B.jsx)("p",{children:t})]})}),Object(B.jsx)(Z,{children:Object(B.jsxs)(U.a,{bottom:!0,children:[Object(B.jsxs)(H,{children:[Object(B.jsx)(K,{children:r}),i&&Object(B.jsx)(Q,{children:i})]}),Object(B.jsx)(V,{src:"/images/down-arrow.svg"})]})})]})},F=p.a.div(I||(I=Object(h.a)(['\n  width: 100vw;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  /* background-image: url("/images/backgroundImg"); */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-image: ',";\n"])),(function(e){return'url("/images/'.concat(e.bgImage,'")')})),G=p.a.div(M||(M=Object(h.a)(["\n  padding-top: 15vh;\n  text-align: center;\n"]))),H=p.a.div(S||(S=Object(h.a)(["\n  display: flex;\n  margin-bottom: 30px;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),K=p.a.div(C||(C=Object(h.a)(["\n  background-color: rgba(23, 26, 32, 0.8);\n  height: 40px;\n  width: 256px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  opacity: 0.85;\n  text-transform: uppercase;\n  font-size: 12px;\n  cursor: pointer;\n  margin: 8px;\n"]))),Q=Object(p.a)(K)(N||(N=Object(h.a)(["\n  background-color: white;\n  overflow: 0.65;\n  color: black;\n"]))),V=p.a.img(D||(D=Object(h.a)(["\n  height: 40px;\n  overflow-x: hidden;\n  animation: animateDown infinite 1.5s;\n"]))),Z=p.a.div(E||(E=Object(h.a)([""])));var _=function(){return Object(B.jsxs)(ee,{children:[Object(B.jsx)(q,{title:"Model S",description:"Order Online for Touchless Delivery",backgroundImg:"model-s.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Model Y",description:"Order Online for Touchless Delivery",backgroundImg:"model-y.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Model 3",description:"Order Online for Touchless Delivery",backgroundImg:"model-3.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Model X",description:"Order Online for Touchless Delivery",backgroundImg:"model-x.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Lowest Cost Solar Panels in America",description:"Money-back guarantee",backgroundImg:"solar-panel.jpg",leftBtnText:"Order Now",rightBtnText:"Learn More"}),Object(B.jsx)(q,{title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New Roof Solar Panels",backgroundImg:"solar-roof.jpg",leftBtnText:"Order Now",rightBtnText:"Learn More"}),Object(B.jsx)(q,{title:"Accessories",description:"",backgroundImg:"accessories.jpg",leftBtnText:"Shop Now"})]})},ee=p.a.div($||($=Object(h.a)(["\n  height: 100vh;\n"])));var ne=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(L,{}),Object(B.jsx)(_,{})]})},te=Object(v.a)({reducer:{car:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(T.a,{store:te,children:Object(B.jsx)(ne,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.6a81455e.chunk.js.map