(this["webpackJsonpstartup-competition"]=this["webpackJsonpstartup-competition"]||[]).push([[0],{24:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(17),i=t.n(s),r=t(9),a=t(2),o=t(10),l=t.n(o),d=(t(24),t(0)),j=function(e){var n=e.data,t=e.num,s=n.name,i=n.achievments,r=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=function(){r.current.classList.toggle("not-in-view",!function(){var e=r.current.getBoundingClientRect();return e.top+e.height/2>=0&&e.bottom-e.height/2<=(window.innerHeight||document.documentElement.clientHeight)}())};return e(),window.addEventListener("scroll",l.a.throttle(e,550,{trailing:!0,leading:!0})),window.addEventListener("resize",l.a.throttle(e,550,{trailing:!0,leading:!0})),function(){window.removeEventListener("scroll",l.a.throttle(e,550,{trailing:!0,leading:!0})),window.removeEventListener("resize",l.a.throttle(e,550,{trailing:!0,leading:!0}))}}),[]);var a=i.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("h3",{children:e})})})),o=s.split(" ")[0];return Object(d.jsxs)("section",{ref:r,class:"box not-in-view",id:"card--".concat(t),children:[Object(d.jsxs)("section",{class:"box__side front",children:[Object(d.jsx)("section",{class:"box__image image--".concat(o),children:"\xa0"}),Object(d.jsx)("h3",{class:"box__heading",children:Object(d.jsx)("span",{className:"box__heading-span span--".concat(t),children:s})})]}),Object(d.jsx)("section",{class:"box__side back back--".concat(t),children:Object(d.jsx)("section",{class:"card__information",children:Object(d.jsx)("ul",{children:a})})})]})},h=(t(26),function(){return Object(d.jsx)("section",{className:"founders-container",children:Object(d.jsxs)("section",{style:{marginTop:"10rem"},children:[Object(d.jsx)("h3",{className:"heading__founders founders",children:"Founders Of Book-Shala"}),Object(d.jsxs)("section",{className:"flex__cards",children:[Object(d.jsx)(j,{data:{name:"Vihaan Verma",achievments:["Likes Web Development and playing sports","Built the business model","Helped in Web Development"]},num:"1"}),Object(d.jsx)(j,{data:{name:"Suyash Handa",achievments:["Likes Physics and Chemistry","Thought of Book Shala","Helped in Web Development"]},num:"2"}),Object(d.jsx)(j,{data:{name:"Ananya Mukherjee",achievments:["Likes Web Development and playing sports","Built the business model","Helped in Web Development"]},num:"3"})]})]})})}),u=(t(27),function(){var e=Object(c.useRef)(null),n=function(){var n=(window.pageYOffset|document.body.scrollTop)>50;e.current.classList.toggle("scrolling-active",n)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),Object(d.jsx)("header",{ref:e,class:"ui secondary pointing menu",children:Object(d.jsxs)("nav",{className:"navLarge",children:[Object(d.jsx)(r.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"",alt:"Logo"})}),Object(d.jsxs)("div",{class:"right menu",children:[Object(d.jsx)(r.b,{to:"/founders",class:"item",children:"Founders"}),Object(d.jsx)("a",{class:"item",children:"Messages"}),Object(d.jsx)("a",{class:"item",children:"Friends"}),Object(d.jsx)("a",{class:"item",children:"Logout"})]})]})})}),b=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("input",{class:"menu-icon",type:"checkbox",id:"menu-icon",name:"menu-icon"}),Object(d.jsx)("label",{for:"menu-icon"}),Object(d.jsx)("nav",{class:"nav",children:Object(d.jsxs)("ul",{class:"pt-5",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Our Team"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Other"})})]})})]})},m=(t(32),function(){var e=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>425?Object(d.jsx)(u,{}):Object(d.jsx)(b,{});return Object(c.useEffect)((function(){setTimeout((function(){document.querySelector(".loadingContainer").classList.add("load--hide")}),300)}),[]),Object(d.jsx)("div",{style:{height:"100%"},children:Object(d.jsxs)(r.a,{children:[e,Object(d.jsx)(a.c,{children:Object(d.jsx)(a.a,{path:"/founders",exact:!0,component:function(){return Object(d.jsx)(h,{})}})})]})})});i.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.01c74cbd.chunk.js.map