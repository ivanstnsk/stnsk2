(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[37,4,7,12,41,43,45,84,86],{102:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return i}));var r=n(1),o=function(t){var e=t.colors.primary;return{container:function(){return{backgroundColor:e.bg,display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}}},i=function(){return Object(r.f)(o)}},118:function(t,e,n){"use strict";n.r(e),n.d(e,"Home",(function(){return l}));var r=n(11),o=n(0),i=n.n(o),a=n(6),c=n(48),s=n(102),l=function(t){var e=t.onNavigateAbout,n=Object(s.useStyles)(),l=Object(o.useState)(!0),u=Object(r.a)(l,2),f=u[0],p=u[1],b=Object(o.useCallback)((function(){p(!1),setTimeout((function(){e()}),1200)}),[p,e]);return i.a.createElement("div",{className:n.container},i.a.createElement(a.i,{id:"laptop-gradient-bg"},i.a.createElement(c.CircleButtonsLayout,{showMode:f,onButtonClick:b}),i.a.createElement(a.j,{id:"main-circle",showMode:f})),i.a.createElement(a.h,null))}},168:function(t,e,n){t.exports=n.p+"static/media/cv-icon.4216a356.svg"},169:function(t,e,n){t.exports=n.p+"static/media/projects-icon.d9de3a0b.svg"},170:function(t,e,n){t.exports=n.p+"static/media/skills-icon.1116bb0d.svg"},171:function(t,e,n){t.exports=n.p+"static/media/contacts-icon.868e8806.svg"},38:function(t,e,n){"use strict";n.r(e);var r=n(86);n.d(e,"MainCircleButton",(function(){return r.MainCircleButton}))},42:function(t,e,n){"use strict";n.r(e);var r=n(90);n.d(e,"CircleButtonsLayout",(function(){return r.CircleButtonsLayout}))},48:function(t,e,n){"use strict";n.r(e);var r=n(38);n.d(e,"MainCircleButton",(function(){return r.MainCircleButton}));var o=n(42);n.d(e,"CircleButtonsLayout",(function(){return o.CircleButtonsLayout}))},86:function(t,e,n){"use strict";n.r(e),n.d(e,"MainCircleButton",(function(){return a}));var r=n(0),o=n.n(r),i=n(89),a=Object(r.memo)((function(t){var e=t.innerRef,n=t.type,a=t.label,c=t.onClick,s=Object(i.useStyles)({type:n}),l=Object(r.useCallback)((function(){c&&c(n)}),[c,n]);return o.a.createElement("button",{className:s.button,onClick:l,ref:e},o.a.createElement("svg",{className:s.svg,width:134,height:134,viewBox:"0 0 ".concat(134," ").concat(134),fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeDasharray:"0"},o.a.createElement("circle",{cx:67,cy:67,r:65,stroke:"#81AF65",strokeWidth:"0"})),o.a.createElement("div",{className:s.icon}),o.a.createElement("div",{className:s.label},a))}))},89:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return d}));var r=n(1),o=n(168),i=n.n(o),a=n(169),c=n.n(a),s=n(170),l=n.n(s),u=n(171),f=n.n(u),p=function(){return function(t){var e=function(t){switch(t){case"cv":return i.a;case"projects":return c.a;case"skills":return l.a;case"contacts":return f.a;default:return i.a}}(t.type);return{width:"54px",height:"54px",display:"block",backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}}},b=function(t){var e=t.colors.primary,n=e.bg,r=e.greyUltralight,o=t.sizes.buttons.mainCircleButtonSize;return{"@keyframes dash":{from:{strokeDashoffset:0},to:{strokeDashoffset:24}},button:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",width:o,height:o,border:"none",borderRadius:"50%",backgroundColor:n,color:r,filter:"drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.3))",outline:"none",cursor:"pointer",transition:"transform 0.3s ease",opacity:0,"&:hover":{transform:"scaleX(1.1) scaleY(1.1)",transition:"transform 0.3s ease"},"&:hover $label":{opacity:1,transition:"opacity 0.3s ease"},"&:hover $svg":{"& circle":{strokeWidth:2.5},animation:"$dash 2s linear infinite"}},svg:{boxSizing:"border-box",position:"absolute",left:0,right:0,top:0,bottom:0,strokeDasharray:4},icon:p(),label:{position:"absolute",left:0,bottom:-30,display:"flex",justifyContent:"center",alignItems:"center",width:o,height:"auto",color:r,fontSize:18,opacity:0,transition:"opacity 0.3s ease"}}},d=function(t){return Object(r.f)(b,t)}},90:function(t,e,n){"use strict";n.r(e),n.d(e,"CircleButtonsLayout",(function(){return u}));var r=n(0),o=n.n(r),i=n(10),a=n(38),c=n(96),s=[[420,-67],[-554,-67],[378,140],[-512,140]],l=function(t,e,n){var r=window.innerWidth/2,o=window.innerHeight/2;n?t.current&&new i.a(t).delay(1e3).style("display","visible").style("left","".concat(r+s[e][0],"px")).style("top","".concat(o+s[e][1],"px")).style("opacity","1").style("transition","all 0.6s ease").apply():t.current&&new i.a(t).style("left","".concat(r-67,"px")).style("top","".concat(o-67,"px")).style("opacity","0").style("transition","all 0.6s ease").apply()},u=function(t){var e=t.showMode,n=void 0!==e&&e,i=t.onButtonClick,s=Object(c.useStyles)(),u=Object(r.useRef)(null),f=Object(r.useRef)(null),p=Object(r.useRef)(null),b=Object(r.useRef)(null);return Object(r.useEffect)((function(){l(u,0,n),l(f,1,n),l(b,2,n),l(p,3,n)}),[n]),o.a.createElement("div",{className:s.container},o.a.createElement(a.MainCircleButton,{type:"projects",label:"Projects",innerRef:u,onClick:i}),o.a.createElement(a.MainCircleButton,{type:"cv",label:"Curriculum vitae",innerRef:f,onClick:i}),o.a.createElement(a.MainCircleButton,{type:"skills",label:"My skills",innerRef:b,onClick:i}),o.a.createElement(a.MainCircleButton,{type:"contacts",label:"Contacts",innerRef:p,onClick:i}))}},96:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return i}));var r=n(1),o=function(){return{container:{position:"absolute",left:0,right:0,top:0,bottom:0,width:"100%",height:"100%",display:"flex",flex:1,justifyContent:"center",alignItems:"center",background:"transparent",boxSizing:"border-box"}}},i=function(){return Object(r.f)(o)}}}]);
//# sourceMappingURL=37.c1f18b61.chunk.js.map