(this["webpackJsonprest-c"]=this["webpackJsonprest-c"]||[]).push([[0],{110:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(38),r=n.n(s),i=(n(110),n(181)),o=n(180),l=n(183),j=n(184),x=n(2);function b(){return Object(x.jsx)(o.a,{sx:{flexGrow:1},children:Object(x.jsx)(i.a,{position:"static",sx:{boxShadow:4,bgcolor:"#fff"},children:Object(x.jsx)(l.a,{children:Object(x.jsx)(j.a,{variant:"h6",component:"div",sx:{color:"#000",fontFamily:"Roboto",fontWeight:700,fontSize:"25px",flexGrow:1,textAlign:"start",pl:5},children:"Where in the world?"})})})})}var d=n(33),h=n.n(d),u=n(46),p=n(13),O=n(182),f=n(186),m=n(86),g=n.n(m),v=n(185),y=n(176),w=n(174),S=n(187),C=n(171),W=n(188),k=n(178),A=n(192),D=n(172),I=n(191),z=n(190),B=n(189),L=n(88),P=n.n(L),T=n(175),E=n(193),F=n(44),R=function(){var e=Object(a.useState)("https://restcountries.com/v3/all"),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(p.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(!1),b=Object(p.a)(l,2),d=b[0],m=b[1],L=Object(a.useState)(!1),R=Object(p.a)(L,2),M=R[0],G=R[1],J=Object(a.useState)(1),N=Object(p.a)(J,2),H=N[0],K=N[1],q=Object(a.useState)(12),Q=Object(p.a)(q,2),U=Q[0],V=(Q[1],Object(a.useState)("")),X=Object(p.a)(V,2),Y=X[0],Z=X[1],$=function(){var e=Object(u.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a),m(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){$()}),[n]);var _=function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==Y){e.next=5;break}G(!0),console.log("err"),e.next=9;break;case 5:return m(!1),c("https://restcountries.com/v3/name/".concat(Y)),e.next=9,setTimeout((function(){m(!0)}),600);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(u.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=12;break}if(""!==Y){e.next=7;break}G(!0),t.preventDefault(),console.log("err"),e.next=12;break;case 7:return m(!1),t.preventDefault(),c("https://restcountries.com/v3/name/".concat(Y)),e.next=12,setTimeout((function(){m(!0)}),600);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=H*U,ne=te-U,ae=[];return 404===i.status?window.location.reload(!0):ae=i.slice(ne,te),Object(x.jsxs)(v.a,{sx:{mt:"30px",width:"100vw",height:"100vh"},children:[Object(x.jsxs)(O.a,{sx:{boxShadow:"none",display:"flex",ml:"50px",gap:"50px",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"row",alignItems:"center"},children:[Object(x.jsxs)(O.a,{elevation:2,component:"form",sx:{border:"1px solid #C4C4C4",boxShadow:"none",p:"2px 4px",display:"flex",alignItems:"center",width:400},children:[Object(x.jsx)(f.a,{onClick:_,sx:{p:"10px"},"aria-label":"search",children:Object(x.jsx)(g.a,{})}),Object(x.jsx)(T.a,{sx:{ml:1,flex:1},placeholder:"Search for a country",variant:"standard",error:M,id:"outlined-error-helper-text",onChange:function(e){Z(e.target.value)},onKeyDown:ee,value:Y,inputProps:{"aria-label":"Search for a country"}})]}),Object(x.jsxs)(S.a,{sx:{width:"190px"},children:[Object(x.jsx)(y.a,{id:"demo-simple-select-label",children:"Filter by continent"}),Object(x.jsxs)(C.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,label:"Filter by continent",onChange:function(e){m(!1),c(e.target.value)},children:[Object(x.jsx)(w.a,{value:"https://restcountries.com/v3/all",children:"All"}),Object(x.jsx)(w.a,{value:"https://restcountries.com/v3/region/africa",children:"Africa"}),Object(x.jsx)(w.a,{value:"https://restcountries.com/v3/region/americas",children:"Americas"}),Object(x.jsx)(w.a,{value:"https://restcountries.com/v3/region/asia",children:"Asia"}),Object(x.jsx)(w.a,{value:"https://restcountries.com/v3/region/europe",children:"Europe"}),Object(x.jsx)(w.a,{value:"https://restcountries.com/v3/region/oceania",children:"Oceania"})]})]})]}),Object(x.jsxs)(v.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",boxShadow:"none"},component:O.a,py:3,children:[d?Object(x.jsx)(k.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"100%",mt:"50px"},children:ae.map((function(e,t){return Object(x.jsx)(k.a,{item:!0,xs:8,sm:3,sx:{m:"15px"},children:Object(x.jsxs)(W.a,{variant:"outlined",sx:{maxWidth:"445px",maxHeight:"2750px"},children:[Object(x.jsx)(B.a,{component:"img",height:"140",image:e.flags[0],alt:e.name.common}),Object(x.jsxs)(z.a,{children:[Object(x.jsx)(j.a,{sx:{textAlign:"start",fontSize:"16px",fontWeight:"bold"},children:e.name.common}),Object(x.jsxs)(j.a,{variant:"body2",color:"#000",sx:{textAlign:"start"},children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Population: "}),e.population.toLocaleString().replace(/,/g," ")]}),Object(x.jsxs)(j.a,{variant:"body2",color:"#000",sx:{textAlign:"start"},children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Region: "}),e.region]}),Object(x.jsxs)(j.a,{variant:"body2",color:"#000",sx:{textAlign:"start"},children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Capital: "}),e.capital]})]}),Object(x.jsx)(I.a,{children:Object(x.jsx)(F.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(e.region,"/").concat(e.name.common)},children:Object(x.jsxs)(A.a,{sx:{ml:"5px",mb:"5px"},size:"small",children:["Learn More ",Object(x.jsx)(P.a,{})]})})})]})},t)}))}):Object(x.jsx)(O.a,{sx:{mt:"200px",display:"flex",boxShadow:"none"},children:Object(x.jsx)(E.a,{})}),Object(x.jsx)(D.a,{sx:{pt:"90px",mt:"10px",mb:"30px"},count:Math.round(i.length/U),color:"secondary",variant:"outline",shape:"rounded",hideNextButton:!0,hidePrevButton:!0,defaultPage:H,onChange:function(e){return t=e.target.textContent,m(!1),void setTimeout((function(){m(!0),K(t)}),400);var t}})]})]})},M=n(16),G=n(170),J=n(89),N=n.n(J),H=function(){var e=Object(M.f)().handle,t=Object(a.useState)(e),n=Object(p.a)(t,2),c=n[0],s=(n[1],Object(a.useState)("https://restcountries.com/v3/name/".concat(c,"?fullText=true"))),r=Object(p.a)(s,2),i=r[0],l=(r[1],Object(a.useState)([])),b=Object(p.a)(l,2),d=b[0],O=b[1],f=Object(a.useState)(!1),m=Object(p.a)(f,2),g=(m[0],m[1]),y=function(){var e=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,O(n),g(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(G.a,{sx:{ml:"60px",mt:"100px"},spacing:2,direction:"row",children:Object(x.jsx)(F.b,{style:{textDecoration:"none"},to:"/",children:Object(x.jsxs)(A.a,{variant:"text",children:[Object(x.jsx)(N.a,{sx:{mb:"2px",fontSize:"large"}}),"Back"]})})}),Object(x.jsx)(v.a,{sx:{width:"100vw",height:"65vh",display:"flex",alignItems:"center",justifyContent:"center"},children:d.map((function(e,t){return Object(x.jsxs)(o.a,{sx:{display:"flex"},children:[Object(x.jsx)(B.a,{component:"img",height:"370",image:e.flags[0],alt:"green iguana"}),Object(x.jsxs)(v.a,{children:[Object(x.jsx)(j.a,{sx:{ml:"45px"},variant:"h2",children:e.name.common}),Object(x.jsxs)(v.a,{sx:{display:"flex",mt:"30px"},children:[Object(x.jsxs)(v.a,{sx:{textAlign:"start"},children:[Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Population: "}),e.population.toLocaleString().replace(/,/g," ")]}),Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Region: "}),e.region]}),Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Sub Region: "}),e.subregion]}),Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Capital: "}),e.capital]})]}),Object(x.jsxs)(v.a,{children:[Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Top Level Domain:"}),e.tld]}),Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Currencies:"}),Object.values(e.currencies)[0].name]}),Object(x.jsxs)(j.a,{variant:"body2",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Languages: "}),Object.values(e.languages).map((function(e){return e})).join(", ")]})]})]}),Object(x.jsx)(v.a,{sx:{mt:"30px"},children:Object(x.jsxs)(j.a,{variant:"body2",sx:{ml:"25px",display:"flex",gap:"10px"},children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"Border Countries: "}),void 0===e.borders?Object(x.jsx)("span",{children:"No border contries"}):Object.values(e.borders).map((function(e,t){return Object(x.jsx)(I.a,{children:Object(x.jsx)(A.a,{sx:{ml:"5px",mb:"5px"},size:"small",children:e})},t)}))]})})]})]},t)}))})]})};var K=function(){return Object(x.jsxs)(F.a,{children:[Object(x.jsx)(b,{}),Object(x.jsxs)(M.c,{children:[Object(x.jsx)(M.a,{path:"/:region/:handle",children:Object(x.jsx)(H,{})}),Object(x.jsx)(M.a,{path:"/",children:Object(x.jsx)(R,{})})]})]})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(K,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.4ec049e7.chunk.js.map