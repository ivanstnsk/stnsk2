(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[7,11,41,43,44,85],{101:function(t,e,n){"use strict";n.r(e),n.d(e,"CircleButtonsLayout",(function(){return u}));var o=n(0),i=n.n(o),r=n(10),a=n(47),s=n(107),c=[[420,-67],[-554,-67],[378,140],[-512,140]],l=function(t,e,n){var o=window.innerWidth/2,i=window.innerHeight/2;n?t.current&&new r.a(t).delay(1e3).style("display","visible").style("left","".concat(o+c[e][0],"px")).style("top","".concat(i+c[e][1],"px")).style("opacity","1").style("transition","all 0.6s ease").apply():t.current&&new r.a(t).style("left","".concat(o-67,"px")).style("top","".concat(i-67,"px")).style("opacity","0").style("transition","all 0.6s ease").apply()},u=function(t){var e=t.showMode,n=void 0!==e&&e,r=t.onButtonClick,c=Object(s.useStyles)(),u=Object(o.useRef)(null),f=Object(o.useRef)(null),p=Object(o.useRef)(null),b=Object(o.useRef)(null);return Object(o.useEffect)((function(){l(u,0,n),l(f,1,n),l(b,2,n),l(p,3,n)}),[n]),i.a.createElement("div",{className:c.container},i.a.createElement(a.MainCircleButton,{type:"projects",label:"Projects",innerRef:u,onClick:r}),i.a.createElement(a.MainCircleButton,{type:"cv",label:"Curriculum vitae",innerRef:f,onClick:r}),i.a.createElement(a.MainCircleButton,{type:"skills",label:"My skills",innerRef:b,onClick:r}),i.a.createElement(a.MainCircleButton,{type:"contacts",label:"Contacts",innerRef:p,onClick:r}))}},107:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return r}));var o=n(1),i=function(){return{container:{position:"absolute",left:0,right:0,top:0,bottom:0,width:"100%",height:"100%",display:"flex",flex:1,justifyContent:"center",alignItems:"center",background:"transparent",boxSizing:"border-box"}}},r=function(){return Object(o.f)(i)}},179:function(t,e,n){t.exports=n.p+"static/media/cv-icon.4216a356.svg"},180:function(t,e,n){t.exports=n.p+"static/media/projects-icon.d9de3a0b.svg"},181:function(t,e,n){t.exports=n.p+"static/media/skills-icon.1116bb0d.svg"},182:function(t,e,n){t.exports=n.p+"static/media/contacts-icon.868e8806.svg"},47:function(t,e,n){"use strict";n.r(e);var o=n(94);n.d(e,"MainCircleButton",(function(){return o.MainCircleButton}))},51:function(t,e,n){"use strict";n.r(e);var o=n(101);n.d(e,"CircleButtonsLayout",(function(){return o.CircleButtonsLayout}))},94:function(t,e,n){"use strict";n.r(e),n.d(e,"MainCircleButton",(function(){return a}));var o=n(0),i=n.n(o),r=n(99),a=Object(o.memo)((function(t){var e=t.innerRef,n=t.type,a=t.label,s=t.onClick,c=Object(r.useStyles)({type:n}),l=Object(o.useCallback)((function(){s&&s(n)}),[s,n]);return i.a.createElement("button",{className:c.button,onClick:l,ref:e},i.a.createElement("svg",{className:c.svg,width:134,height:134,viewBox:"0 0 ".concat(134," ").concat(134),fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeDasharray:"0"},i.a.createElement("circle",{cx:67,cy:67,r:65,stroke:"#81AF65",strokeWidth:"0"})),i.a.createElement("div",{className:c.icon}),i.a.createElement("div",{className:c.label},a))}))},99:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return d}));var o=n(1),i=n(179),r=n.n(i),a=n(180),s=n.n(a),c=n(181),l=n.n(c),u=n(182),f=n.n(u),p=function(){return function(t){var e=function(t){switch(t){case"cv":return r.a;case"projects":return s.a;case"skills":return l.a;case"contacts":return f.a;default:return r.a}}(t.type);return{width:"54px",height:"54px",display:"block",backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}}},b=function(t){var e=t.colors.primary,n=e.bg,o=e.greyUltralight,i=t.sizes.buttons.mainCircleButtonSize;return{"@keyframes dash":{from:{strokeDashoffset:0},to:{strokeDashoffset:24}},button:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:i,height:i,border:"none",borderRadius:"50%",backgroundColor:n,color:o,filter:"drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3))",outline:"none",cursor:"pointer",transition:"transform 0.3s ease",opacity:0,"&:hover":{transform:"scaleX(1.1) scaleY(1.1)",transition:"transform 0.3s ease"},"&:hover $label":{opacity:1,transition:"opacity 0.3s ease"},"&:hover $svg":{"& circle":{strokeWidth:2.5},animation:"$dash 2s linear infinite"}},svg:{boxSizing:"border-box",position:"absolute",left:0,right:0,top:0,bottom:0,strokeDasharray:4},icon:p(),label:{position:"absolute",left:0,bottom:-30,display:"flex",justifyContent:"center",alignItems:"center",width:i,height:"auto",color:o,fontSize:18,opacity:0,transition:"opacity 0.3s ease"}}},d=function(t){return Object(o.f)(b,t)}}}]);
//# sourceMappingURL=7.10eac066.chunk.js.map