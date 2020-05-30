(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[0,2,3,12,14,28,29,30,31,36,38,59,60,61,62,90,91,92,93,94,95],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"selectProjects",(function(){return a})),n.d(t,"selectProject",(function(){return i}));var r=n(57),a=function(e){return e.projects},i=function(e){return Object(r.a)([a],(function(t){return t.find((function(t){return t.id===e}))}))}},103:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return p}));var r=n(11),a=n(0),i=n.n(a),o=n(3),c=n(178),l=n(8),s=n(1),u=n(49),d=n(50),f=n(109),m={compact:[[40,1/0]]},p=function(e){var t=e.offsetSize,n=e.lastProject,a=Object(s.a)(m),p=Object(r.a)(a,2),b=p[0],g=p[1],h=Object(o.h)().projectId,x=Object(u.useState)(h||n).data,v=Object(f.useStyles)(),j=!!h;return i.a.createElement(c.a,{in:j,timeout:300,unmountOnExit:!0},(function(e){return i.a.createElement(l.t,{transitionState:e,offsetSize:t},i.a.createElement("div",{className:v.wrapper},x?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.Header,{size:b,title:x.title,subTitle:x.subTitle}),i.a.createElement(l.o,{onScroll:g},i.a.createElement(l.e,null,i.a.createElement(l.q,{iconType:"work-result",title:"Work results",lines:["Reviwed the work of the other React Native developer","Created iOS and Android dev & production builds","Configured Apple AppStore & Testflight and Google Play Market"]}),i.a.createElement(l.q,{iconType:"achievements",title:"Achievements",lines:["Reviwed the work of the other React Native developer","Created iOS and Android dev & production builds","Configured Apple AppStore & Testflight and Google Play Market"]}),i.a.createElement(l.q,{iconType:"schedule",title:"Project schedule",ContentComponent:i.a.createElement(l.g,{from:["2019","October"],to:["2019","October"]})}),i.a.createElement(l.q,{iconType:"team",title:"Team",ContentComponent:i.a.createElement(l.n,{rows:[["Dev","6"],["QA","2"],["PM","1"],["UI/UX","1"]]})}),i.a.createElement(l.q,{iconType:"tech",title:"Technologies",lines:["react-native, react, redux, redux-saga, styled-components, react-navigation, react-router-dom, react-native-fbsdk, react-native-google-login, react-native-twitter-sigin, react-native-maps, google maps, google directions API, react-native-compass, geolib, react-native-video, mapbox modules, ios in app purchase"]})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.EmptyHeader,null),i.a.createElement(l.m,null))))}))}},104:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectCard",(function(){return c}));var r=n(0),a=n.n(r),i=n(8),o=n(110),c=function(e){var t=e.id,n=e.onClick,c=Object(o.useStyles)(),l=Object(r.useCallback)((function(){n&&n(t)}),[n,t]);return a.a.createElement("button",{className:c.button,onClick:l},a.a.createElement("div",{className:c.imageContainer},a.a.createElement(i.s,{type:"virtual-tours",color:"rgba(255,255,255,0.5)",width:80,height:80})),a.a.createElement("div",{className:c.text},"Virtual Tours App"),a.a.createElement("div",{className:c.labelsContainer},a.a.createElement(i.c,{type:"mobile",label:"Mobile",size:"small"})),a.a.createElement("svg",{className:c.svg,width:266,height:268,viewBox:"0 0 ".concat(266," ",268),fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeDasharray:"0"},a.a.createElement("rect",{x:"2",y:"2",width:262,height:264,rx:"10",stroke:"#81AF65",strokeWidth:"2"})))}},109:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(e){var t=e.colors.primary,n=t.bgContent;return{wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,borderWidth:0,borderTopWidth:1,borderStyle:"solid",boxSizing:"border-box",borderColor:t.underline,backgroundColor:n,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}},i=function(){return Object(r.f)(a)}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(e){var t=e.colors.primary;return{"@keyframes dash":{from:{strokeDashoffset:0},to:{strokeDashoffset:28}},button:{position:"relative",backgroundColor:t.bgContent,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",width:266,height:268,border:"none",borderRadius:10,boxSizing:"border-box",boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.25)",outline:"none",cursor:"pointer",textDecoration:"none",margin:15,padding:0,transition:"transform 0.4s ease","&:hover":{transform:"scaleX(1.05) scaleY(1.05)",transition:"transform 0.4s ease"},"&:active svg path":{stroke:"blue"}},imageContainer:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(255,255,255,0.05)",borderTopRightRadius:10,borderTopLeftRadius:10},text:{width:"100%",height:70,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:300,lineHeight:"22px",color:t.greyUltralight},labelsContainer:{position:"absolute",right:6,top:6,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-start"},svg:{position:"absolute",left:0,right:0,top:0,bottom:0,opacity:0,"&:hover":{strokeDasharray:7,animation:"$dash 1s linear infinite",opacity:1}}}},i=function(){return Object(r.f)(a)}},119:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(){return{cardsWrapper:{width:"100%",overflow:"visible",marginBottom:70},cardsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",flexWrap:"wrap",margin:-15}}},i=function(){return Object(r.f)(a)}},135:function(e,t,n){"use strict";n.r(t),n.d(t,"Projects",(function(){return p}));var r=n(11),a=n(0),i=n.n(a),o=n(3),c=n(8),l=n(1),s=n(6),u=n(60),d=n(61),f=n(119),m={compact:[[40,1/0]]},p=Object(a.memo)((function(e){var t=e.commercial,n=e.personal,p=Object(a.useState)(void 0),b=Object(r.a)(p,2),g=b[0],h=b[1],x=Object(l.a)(m),v=Object(r.a)(x,2),j=v[0],y=v[1],C=Object(o.f)(),E=Object(f.useStyles)(),w=Object(a.useCallback)((function(e){h(e),C.push("".concat(s.b.PROJECTS,"/").concat(e))}),[h,C]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.f,{title:"Projects",subTitle:"My commercial and not really projects",size:j}),i.a.createElement(c.o,{onScroll:y},i.a.createElement(c.e,null,i.a.createElement(c.p,null,"Personal projects"),i.a.createElement("div",{className:E.cardsWrapper},i.a.createElement("div",{className:E.cardsContainer},n.map((function(e){return i.a.createElement(d.ProjectCard,{key:e.id,id:e.id,onClick:w})})),i.a.createElement(d.ProjectCard,{id:"1254234",onClick:w}))),i.a.createElement(c.p,null,"Commercial projects under NDA"),i.a.createElement("div",{className:E.cardsWrapper},i.a.createElement("div",{className:E.cardsContainer},t.map((function(e){return i.a.createElement(d.ProjectCard,{key:e.id,id:e.id,onClick:w})})))))),i.a.createElement(u.Project,{offsetSize:j,lastProject:g}))}))},45:function(e,t,n){"use strict";n.r(t);var r=n(92);n.d(t,"Header",(function(){return r.Header}))},46:function(e,t,n){"use strict";n.r(t);var r=n(93);n.d(t,"EmptyHeader",(function(){return r.EmptyHeader}))},49:function(e,t,n){"use strict";n.r(t);var r=n(95);n.d(t,"useState",(function(){return r.useState}))},50:function(e,t,n){"use strict";n.r(t);var r=n(45);n.d(t,"Header",(function(){return r.Header}));var a=n(46);n.d(t,"EmptyHeader",(function(){return a.EmptyHeader}))},53:function(e,t,n){"use strict";n.r(t);var r=n(103);n.d(t,"Project",(function(){return r.Project}))},54:function(e,t,n){"use strict";n.r(t);var r=n(104);n.d(t,"ProjectCard",(function(){return r.ProjectCard}))},60:function(e,t,n){"use strict";n.r(t);var r=n(53);n.d(t,"Project",(function(){return r.Project}))},61:function(e,t,n){"use strict";n.r(t);var r=n(54);n.d(t,"ProjectCard",(function(){return r.ProjectCard}))},69:function(e,t,n){"use strict";n.r(t);var r=n(135);n.d(t,"default",(function(){return r.Projects}))},92:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return s}));var r=n(0),a=n.n(r),i=n(3),o=n(8),c=n(6),l=n(97),s=function(e){var t=e.size,n=void 0===t?"normal":t,s=e.title,u=e.subTitle,d=Object(i.f)(),f=Object(l.useStyles)({size:n}),m=Object(r.useCallback)((function(){d.push(c.b.PROJECTS)}),[d]);return a.a.createElement("div",{className:f.wrapper},a.a.createElement("div",{className:f.container},a.a.createElement("div",{className:f.innerContainer},a.a.createElement("div",{className:f.photo}),a.a.createElement("div",{className:f.midContainer},a.a.createElement("div",{className:f.titleContainer},a.a.createElement("div",{className:f.title},s),a.a.createElement(o.c,{type:"web",label:"Web"})),a.a.createElement("div",{className:f.subTitle},u)))),a.a.createElement("div",{className:f.rightContainer},a.a.createElement(o.d,{onClick:m})))}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"EmptyHeader",(function(){return s}));var r=n(0),a=n.n(r),i=n(3),o=n(8),c=n(6),l=n(98),s=function(){var e=Object(i.f)(),t=Object(l.useStyles)(),n=Object(r.useCallback)((function(){e.push(c.b.PROJECTS)}),[e]);return a.a.createElement("div",{className:t.wrapper},a.a.createElement("div",{className:t.rightContainer},a.a.createElement(o.d,{onClick:n})))}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return i}));var r=n(20),a=n(100),i=function(e){return{data:Object(r.b)(Object(a.selectProject)(e))}}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return o}));var r=n(14),a=n(1),i=function(e){var t=e.colors.primary.greyUltralight,n=e.sizes,a=n.content,i=a.maxWidth,o=a.offsetHorizontal,c=n.menu.width;return{wrapper:function(e){var t=e.size;return Object(r.a)({display:"flex",boxSizing:"border-box",paddingLeft:o,paddingRight:o},function(e){return"compact"===e?{height:"80px",maxHeight:"80px"}:{height:"230px",maxHeight:"230px"}}(t),{transition:"all 0.4s ease"})},container:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},innerContainer:{display:"flex",flex:1,width:"100%",maxWidth:i,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box"},midContainer:{display:"flex",flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:50},titleContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:t,marginRight:30},subTitle:function(e){var n=e.size;return Object(r.a)({fontSize:18,fontWeight:"normal",lineHeight:"22px",color:t},function(e){return"compact"===e?{opacity:"0",height:"0px",marginTop:"0px"}:{opacity:"1",height:"auto",marginTop:"20px"}}(n),{transition:"all 0.2s ease"})},photo:function(e){var t=e.size;return Object(r.a)({backgroundImage:"url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:10},function(e){return"compact"===e?{height:"60px",width:"60px",minHeight:"60px",minWidth:"60px"}:{height:"160px",width:"160px",minHeight:"160px",minWidth:"160px"}}(t),{transition:"all 0.4s ease"})},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60},rightContainer:function(e){var t=e.size;return Object(r.a)({height:"100%",display:"flex",width:c,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box"},function(e){return"compact"===e?{alignItems:"center",paddingTop:"0px"}:{alignItems:"flex-start",paddingTop:"40px"}}(t),{transition:"all 0.4s ease"})}}},o=function(e){return Object(a.f)(i,e)}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(e){var t=e.sizes.content.offsetHorizontal;return{wrapper:{display:"flex",boxSizing:"border-box",paddingLeft:t,paddingRight:t},rightContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box",paddingTop:40}}},i=function(){return Object(r.f)(a)}}}]);
//# sourceMappingURL=0.7bbdcc34.chunk.js.map