(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[0,1,3,10,13,15,16,30,31,32,37,39,45,61,62,63,91,92,93,94,95,96],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"selectProjects",(function(){return i})),n.d(t,"selectProject",(function(){return a}));var r=n(58),i=function(e){return e.projects},a=function(e){return Object(r.a)([i],(function(t){return t.find((function(t){return t.id===e}))}))}},104:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return p}));var r=n(11),i=n(0),a=n.n(i),o=n(3),c=n(179),s=n(8),l=n(1),u=n(50),d=n(51),f=n(110),m={compact:[[40,1/0]]},p=function(e){var t=e.offsetSize,n=Object(l.a)(m),i=Object(r.a)(n,2),p=i[0],b=i[1],h=Object(o.h)().projectId,g=Object(u.useState)(h).data,x=Object(f.useStyles)(),v=!!h;return a.a.createElement(c.a,{in:v,timeout:300,unmountOnExit:!0},(function(e){return a.a.createElement(s.s,{transitionState:e,offsetSize:t},a.a.createElement("div",{className:x.wrapper},g?a.a.createElement(a.a.Fragment,null,a.a.createElement(d.Header,{size:p,title:g.title,subTitle:g.subTitle}),a.a.createElement(s.n,{onScroll:b},a.a.createElement(s.d,null,a.a.createElement(s.p,{iconType:"schedule",title:"Project schedule",ContentComponent:a.a.createElement(s.f,{from:["2019","October"],to:["2019","October"]})}),a.a.createElement(s.p,{iconType:"work-result",title:"Work results",lines:["Reviwed the work of the other React Native developer","Created iOS and Android dev & production builds","Configured Apple AppStore & Testflight and Google Play Market"]}),a.a.createElement(s.p,{iconType:"achievements",title:"Achievements",lines:["Reviwed the work of the other React Native developer","Created iOS and Android dev & production builds","Configured Apple AppStore & Testflight and Google Play Market"]}),a.a.createElement(s.p,{iconType:"team",title:"Team",ContentComponent:a.a.createElement(s.m,{rows:[["Dev","6"],["QA","2"],["PM","1"],["UI/UX","1"]]})})))):a.a.createElement(s.l,null)))}))}},105:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectCard",(function(){return l}));var r=n(0),i=n.n(r),a=n(29),o=n(8),c=n(6),s=n(111),l=function(e){var t=e.id,n=Object(s.useStyles)();return i.a.createElement(a.b,{className:n.button,to:"".concat(c.b.PROJECTS,"/").concat(t)},i.a.createElement("div",{className:n.imageContainer},i.a.createElement(o.r,{type:"virtual-tours",color:"rgba(255,255,255,0.5)",width:80,height:80})),i.a.createElement("div",{className:n.text},"Virtual Tours App"),i.a.createElement("div",{className:n.labelsContainer},i.a.createElement(o.c,{type:"mobile",label:"Mobile",size:"small"})),i.a.createElement("svg",{className:n.svg,width:266,height:268,viewBox:"0 0 ".concat(266," ",268),fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeDasharray:"0"},i.a.createElement("rect",{x:"2",y:"2",width:262,height:264,rx:"10",stroke:"#81AF65",strokeWidth:"2"})))}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(1),i=function(e){var t=e.colors.primary,n=t.bgContent;return{wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,borderWidth:0,borderTopWidth:1,borderStyle:"solid",boxSizing:"border-box",borderColor:t.underline,backgroundColor:n,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}},a=function(){return Object(r.f)(i)}},111:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(1),i=function(e){var t=e.colors.primary;return{"@keyframes dash":{from:{strokeDashoffset:0},to:{strokeDashoffset:28}},button:{position:"relative",backgroundColor:t.bgContent,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",width:266,height:268,border:"none",borderRadius:10,boxSizing:"border-box",boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.25)",outline:"none",cursor:"pointer",textDecoration:"none",margin:15,padding:0,transition:"transform 0.4s ease","&:hover":{transform:"scaleX(1.05) scaleY(1.05)",transition:"transform 0.4s ease"},"&:active svg path":{stroke:"blue"}},imageContainer:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(255,255,255,0.05)",borderTopRightRadius:10,borderTopLeftRadius:10},text:{width:"100%",height:70,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:300,lineHeight:"22px",color:t.greyUltralight},labelsContainer:{position:"absolute",right:6,top:6,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-start"},svg:{position:"absolute",left:0,right:0,top:0,bottom:0,opacity:0,"&:hover":{strokeDasharray:7,animation:"$dash 1s linear infinite",opacity:1}}}},a=function(){return Object(r.f)(i)}},120:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(1),i=function(){return{cardsWrapper:{width:"100%",overflow:"visible",marginBottom:70},cardsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",flexWrap:"wrap",margin:-15}}},a=function(){return Object(r.f)(i)}},136:function(e,t,n){"use strict";n.r(t),n.d(t,"Projects",(function(){return f}));var r=n(11),i=n(0),a=n.n(i),o=n(8),c=n(1),s=n(61),l=n(62),u=n(120),d={compact:[[40,1/0]]},f=Object(i.memo)((function(e){var t=e.commercial,n=e.personal,i=Object(c.a)(d),f=Object(r.a)(i,2),m=f[0],p=f[1],b=Object(u.useStyles)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.e,{title:"Projects",subTitle:"My commercial and not really projects",size:m}),a.a.createElement(o.n,{onScroll:p},a.a.createElement(o.d,null,a.a.createElement(o.o,null,"Personal projects"),a.a.createElement("div",{className:b.cardsWrapper},a.a.createElement("div",{className:b.cardsContainer},n.map((function(e){return a.a.createElement(l.ProjectCard,{key:e.id,id:e.id})})))),a.a.createElement(o.o,null,"Commercial projects under NDA"),a.a.createElement("div",{className:b.cardsWrapper},a.a.createElement("div",{className:b.cardsContainer},t.map((function(e){return a.a.createElement(l.ProjectCard,{key:e.id,id:e.id})})))))),a.a.createElement(s.Project,{offsetSize:m}))}))},44:function(e,t,n){"use strict";n.r(t);var r=n(92);n.d(t,"CloseButton",(function(){return r.CloseButton}))},46:function(e,t,n){"use strict";n.r(t);var r=n(95);n.d(t,"Header",(function(){return r.Header}))},48:function(e,t,n){"use strict";n.r(t);var r=n(44);n.d(t,"CloseButton",(function(){return r.CloseButton}))},50:function(e,t,n){"use strict";n.r(t);var r=n(97);n.d(t,"useState",(function(){return r.useState}))},51:function(e,t,n){"use strict";n.r(t);var r=n(46);n.d(t,"Header",(function(){return r.Header}))},54:function(e,t,n){"use strict";n.r(t);var r=n(104);n.d(t,"Project",(function(){return r.Project}))},55:function(e,t,n){"use strict";n.r(t);var r=n(105);n.d(t,"ProjectCard",(function(){return r.ProjectCard}))},61:function(e,t,n){"use strict";n.r(t);var r=n(54);n.d(t,"Project",(function(){return r.Project}))},62:function(e,t,n){"use strict";n.r(t);var r=n(55);n.d(t,"ProjectCard",(function(){return r.ProjectCard}))},70:function(e,t,n){"use strict";n.r(t);var r=n(136);n.d(t,"default",(function(){return r.Projects}))},92:function(e,t,n){"use strict";n.r(t),n.d(t,"CloseButton",(function(){return c}));var r=n(0),i=n.n(r),a=n(8),o=n(93),c=Object(r.memo)((function(e){var t=e.onClick,n=Object(o.useStyles)();return i.a.createElement("button",{className:n.button,onClick:t},i.a.createElement(a.q,{type:"close",width:30,height:30,color:"rgba(255,255,255,0.6)"}))}))},93:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(1),i=function(){return{button:{width:40,height:40,border:"none",outline:"none",background:"transparent",cursor:"pointer",padding:0}}},a=function(){return Object(r.f)(i)}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return u}));var r=n(0),i=n.n(r),a=n(3),o=n(8),c=n(6),s=n(48),l=n(99),u=function(e){var t=e.size,n=void 0===t?"normal":t,u=e.title,d=e.subTitle,f=Object(a.f)(),m=Object(l.useStyles)({size:n}),p=Object(r.useCallback)((function(){f.push(c.b.PROJECTS)}),[f]);return i.a.createElement("div",{className:m.wrapper},i.a.createElement("div",{className:m.container},i.a.createElement("div",{className:m.innerContainer},i.a.createElement("div",{className:m.photo}),i.a.createElement("div",{className:m.midContainer},i.a.createElement("div",{className:m.titleContainer},i.a.createElement("div",{className:m.title},u),i.a.createElement(o.c,{type:"web",label:"Web"})),i.a.createElement("div",{className:m.subTitle},d)))),i.a.createElement("div",{className:m.rightContainer},i.a.createElement(s.CloseButton,{onClick:p})))}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return a}));var r=n(20),i=n(101),a=function(e){return{data:Object(r.b)(Object(i.selectProject)(e))}}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return o}));var r=n(14),i=n(1),a=function(e){var t=e.colors.primary.greyUltralight,n=e.sizes,i=n.content,a=i.maxWidth,o=i.offsetHorizontal,c=n.menu.width;return{wrapper:function(e){var t=e.size;return Object(r.a)({display:"flex",boxSizing:"border-box",paddingLeft:o,paddingRight:o},function(e){return"compact"===e?{height:"80px",maxHeight:"80px"}:{height:"230px",maxHeight:"230px"}}(t),{transition:"all 0.4s ease"})},container:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},innerContainer:{display:"flex",flex:1,width:"100%",maxWidth:a,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box"},midContainer:{display:"flex",flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:50},titleContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:t,marginRight:30},subTitle:function(e){var n=e.size;return Object(r.a)({fontSize:18,fontWeight:"normal",lineHeight:"22px",color:t},function(e){return"compact"===e?{opacity:"0",height:"0px",marginTop:"0px"}:{opacity:"1",height:"auto",marginTop:"20px"}}(n),{transition:"all 0.2s ease"})},photo:function(e){var t=e.size;return Object(r.a)({backgroundImage:"url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:10},function(e){return"compact"===e?{height:"60px",width:"60px",minHeight:"60px",minWidth:"60px"}:{height:"160px",width:"160px",minHeight:"160px",minWidth:"160px"}}(t),{transition:"all 0.4s ease"})},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60},rightContainer:function(e){var t=e.size;return Object(r.a)({height:"100%",display:"flex",width:c,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box"},function(e){return"compact"===e?{alignItems:"center",paddingTop:"0px"}:{alignItems:"flex-start",paddingTop:"40px"}}(t),{transition:"all 0.4s ease"})}}},o=function(e){return Object(i.f)(a,e)}}}]);
//# sourceMappingURL=0.676fd039.chunk.js.map