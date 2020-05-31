(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[0,2,3,12,14,28,29,30,31,36,38,59,60,61,62,90,91,92,93,94,95],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"selectProjects",(function(){return a})),n.d(t,"selectProject",(function(){return i}));var r=n(57),a=function(e){return e.projects},i=function(e){return Object(r.a)([a],(function(t){return t.find((function(t){return t.id===e}))}))}},103:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return p}));var r=n(11),a=n(0),i=n.n(a),o=n(3),c=n(178),s=n(8),l=n(1),u=n(49),f=n(50),m=n(109),d={compact:[[40,1/0]]},p=function(e){var t=e.offsetSize,n=e.lastProject,a=Object(l.a)(d),p=Object(r.a)(a,2),b=p[0],g=p[1],x=Object(o.h)().projectId,h=Object(u.useState)(x||n).data,v=Object(m.useStyles)(),y=!!x;if(!h)return i.a.createElement(c.a,{in:y,timeout:300,unmountOnExit:!0},(function(e){return i.a.createElement(s.t,{transitionState:e,offsetSize:t},i.a.createElement("div",{className:v.wrapper},i.a.createElement(f.EmptyHeader,null),i.a.createElement(s.m,null)))}));var j=h.title,E=h.subTitle,C=h.tags,w=h.team,k=h.dates,S=h.technologies,O=h.workResults,z=h.achievements;return i.a.createElement(c.a,{in:y,timeout:300,unmountOnExit:!0},(function(e){return i.a.createElement(s.t,{transitionState:e,offsetSize:t},i.a.createElement("div",{className:v.wrapper},h?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.Header,{size:b,title:j,subTitle:E,tags:C}),i.a.createElement(s.o,{onScroll:g},i.a.createElement(s.e,null,i.a.createElement(s.q,{iconType:"work-result",title:"Work results",lines:[O]}),i.a.createElement(s.q,{iconType:"achievements",title:"Achievements",lines:[z]}),i.a.createElement(s.q,{iconType:"schedule",title:"Project schedule",ContentComponent:i.a.createElement(s.g,{from:k.from,to:k.to})}),i.a.createElement(s.q,{iconType:"team",title:"Team",ContentComponent:i.a.createElement(s.n,{rows:w})}),i.a.createElement(s.q,{iconType:"tech",title:"Technologies",lines:[S]})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(f.EmptyHeader,null),i.a.createElement(s.m,null))))}))}},104:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectCard",(function(){return c}));var r=n(0),a=n.n(r),i=n(8),o=n(110),c=function(e){var t=e.data,n=e.onClick,c=Object(o.useStyles)(),s=t.id,l=t.title,u=t.tags,f=Object(r.useCallback)((function(){n&&n(s)}),[n,s]);return a.a.createElement("button",{className:c.button,onClick:f},a.a.createElement("div",{className:c.imageContainer},a.a.createElement(i.s,{type:"virtual-tours",color:"rgba(255,255,255,0.5)",width:80,height:80})),a.a.createElement("div",{className:c.text},l),a.a.createElement("div",{className:c.labelsContainer},u.map((function(e){return a.a.createElement(i.c,{key:"".concat(s).concat(e),type:e,label:e,size:"small"})}))),a.a.createElement("svg",{className:c.svg,width:266,height:268,viewBox:"0 0 ".concat(266," ",268),fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeDasharray:"0"},a.a.createElement("rect",{x:"2",y:"2",width:262,height:264,rx:"10",stroke:"#81AF65",strokeWidth:"2"})))}},109:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(e){var t=e.colors.primary,n=t.bgContent;return{wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,borderWidth:0,borderTopWidth:1,borderStyle:"solid",boxSizing:"border-box",borderColor:t.underline,backgroundColor:n,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}},i=function(){return Object(r.f)(a)}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(e){var t=e.colors.primary;return{"@keyframes dash":{from:{strokeDashoffset:0},to:{strokeDashoffset:28}},button:{position:"relative",backgroundColor:t.bgContent,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",width:266,height:268,border:"none",borderRadius:10,boxSizing:"border-box",boxShadow:"0px 0px 15px rgba(0, 0, 0, 0.25)",outline:"none",cursor:"pointer",textDecoration:"none",margin:15,padding:0,transition:"transform 0.4s ease","&:hover":{transform:"scaleX(1.05) scaleY(1.05)",transition:"transform 0.4s ease"},"&:active svg path":{stroke:"blue"}},imageContainer:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(255,255,255,0.05)",borderTopRightRadius:10,borderTopLeftRadius:10},text:{width:"100%",height:70,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:300,lineHeight:"22px",color:t.greyUltralight,fontFamily:"Quicksand, sans-serif"},labelsContainer:{position:"absolute",right:6,top:6,display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-start"},svg:{position:"absolute",left:0,right:0,top:0,bottom:0,opacity:0,"&:hover":{strokeDasharray:7,animation:"$dash 1s linear infinite",opacity:1}}}},i=function(){return Object(r.f)(a)}},119:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(){return{cardsWrapper:{width:"100%",overflow:"visible",marginBottom:70},cardsContainer:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",flexWrap:"wrap",margin:-15}}},i=function(){return Object(r.f)(a)}},135:function(e,t,n){"use strict";n.r(t),n.d(t,"Projects",(function(){return p}));var r=n(11),a=n(0),i=n.n(a),o=n(3),c=n(8),s=n(1),l=n(6),u=n(60),f=n(61),m=n(119),d={compact:[[40,1/0]]},p=Object(a.memo)((function(e){var t=e.commercial,n=e.personal,p=Object(a.useState)(void 0),b=Object(r.a)(p,2),g=b[0],x=b[1],h=Object(s.a)(d),v=Object(r.a)(h,2),y=v[0],j=v[1],E=Object(o.f)(),C=Object(m.useStyles)(),w=Object(a.useCallback)((function(e){x(e),E.push("".concat(l.b.PROJECTS,"/").concat(e))}),[x,E]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.f,{title:"Projects",subTitle:"My commercial and not really projects",size:y}),i.a.createElement(c.o,{onScroll:j},i.a.createElement(c.e,null,i.a.createElement(c.p,null,"Personal projects"),i.a.createElement("div",{className:C.cardsWrapper},i.a.createElement("div",{className:C.cardsContainer},n.map((function(e){return i.a.createElement(f.ProjectCard,{key:e.id,data:e,onClick:w})})))),i.a.createElement(c.p,null,"Commercial projects under NDA"),i.a.createElement("div",{className:C.cardsWrapper},i.a.createElement("div",{className:C.cardsContainer},t.map((function(e){return i.a.createElement(f.ProjectCard,{key:e.id,data:e,onClick:w})})))))),i.a.createElement(u.Project,{offsetSize:y,lastProject:g}))}))},45:function(e,t,n){"use strict";n.r(t);var r=n(92);n.d(t,"Header",(function(){return r.Header}))},46:function(e,t,n){"use strict";n.r(t);var r=n(93);n.d(t,"EmptyHeader",(function(){return r.EmptyHeader}))},49:function(e,t,n){"use strict";n.r(t);var r=n(95);n.d(t,"useState",(function(){return r.useState}))},50:function(e,t,n){"use strict";n.r(t);var r=n(45);n.d(t,"Header",(function(){return r.Header}));var a=n(46);n.d(t,"EmptyHeader",(function(){return a.EmptyHeader}))},53:function(e,t,n){"use strict";n.r(t);var r=n(103);n.d(t,"Project",(function(){return r.Project}))},54:function(e,t,n){"use strict";n.r(t);var r=n(104);n.d(t,"ProjectCard",(function(){return r.ProjectCard}))},60:function(e,t,n){"use strict";n.r(t);var r=n(53);n.d(t,"Project",(function(){return r.Project}))},61:function(e,t,n){"use strict";n.r(t);var r=n(54);n.d(t,"ProjectCard",(function(){return r.ProjectCard}))},69:function(e,t,n){"use strict";n.r(t);var r=n(135);n.d(t,"default",(function(){return r.Projects}))},92:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return l}));var r=n(0),a=n.n(r),i=n(3),o=n(8),c=n(6),s=n(97),l=function(e){var t=e.size,n=void 0===t?"normal":t,l=e.title,u=e.subTitle,f=e.tags,m=Object(i.f)(),d=Object(s.useStyles)({size:n}),p=Object(r.useCallback)((function(){m.push(c.b.PROJECTS)}),[m]);return a.a.createElement("div",{className:d.wrapper},a.a.createElement("div",{className:d.container},a.a.createElement("div",{className:d.innerContainer},a.a.createElement("div",{className:d.photo}),a.a.createElement("div",{className:d.midContainer},a.a.createElement("div",{className:d.titleContainer},a.a.createElement("div",{className:d.title},l),f.map((function(e){return a.a.createElement(o.c,{key:e,type:e,label:e})}))),a.a.createElement("div",{className:d.subTitle},u)))),a.a.createElement("div",{className:d.rightContainer},a.a.createElement(o.d,{onClick:p})))}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"EmptyHeader",(function(){return l}));var r=n(0),a=n.n(r),i=n(3),o=n(8),c=n(6),s=n(98),l=function(){var e=Object(i.f)(),t=Object(s.useStyles)(),n=Object(r.useCallback)((function(){e.push(c.b.PROJECTS)}),[e]);return a.a.createElement("div",{className:t.wrapper},a.a.createElement("div",{className:t.rightContainer},a.a.createElement(o.d,{onClick:n})))}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return i}));var r=n(20),a=n(100),i=function(e){return{data:Object(r.b)(Object(a.selectProject)(e))}}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return o}));var r=n(14),a=n(1),i=function(e){var t=e.colors.primary.greyUltralight,n=e.sizes,a=n.content,i=a.maxWidth,o=a.offsetHorizontal,c=n.menu.width;return{wrapper:function(e){var t=e.size;return Object(r.a)({display:"flex",boxSizing:"border-box",paddingLeft:o,paddingRight:o},function(e){return"compact"===e?{height:"80px",maxHeight:"80px"}:{height:"230px",maxHeight:"230px"}}(t),{transition:"all 0.4s ease"})},container:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},innerContainer:{display:"flex",flex:1,width:"100%",maxWidth:i,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box"},midContainer:{display:"flex",flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:50},titleContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},title:{fontSize:34,fontWeight:300,lineHeight:"42px",color:t,fontFamily:"Quicksand, sans-serif",marginRight:30},subTitle:function(e){var n=e.size;return Object(r.a)({fontSize:18,fontWeight:300,lineHeight:"22px",color:t,fontFamily:"Quicksand, sans-serif"},function(e){return"compact"===e?{opacity:"0",height:"0px",marginTop:"0px"}:{opacity:"1",height:"auto",marginTop:"20px"}}(n),{transition:"all 0.2s ease"})},photo:function(e){var t=e.size;return Object(r.a)({backgroundImage:"url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:10},function(e){return"compact"===e?{height:"60px",width:"60px",minHeight:"60px",minWidth:"60px"}:{height:"160px",width:"160px",minHeight:"160px",minWidth:"160px"}}(t),{transition:"all 0.4s ease"})},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60},rightContainer:function(e){var t=e.size;return Object(r.a)({height:"100%",display:"flex",width:c,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box"},function(e){return"compact"===e?{alignItems:"center",paddingTop:"0px"}:{alignItems:"flex-start",paddingTop:"40px"}}(t),{transition:"all 0.4s ease"})}}},o=function(e){return Object(a.f)(i,e)}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(1),a=function(e){var t=e.sizes.content.offsetHorizontal;return{wrapper:{display:"flex",boxSizing:"border-box",paddingLeft:t,paddingRight:t},rightContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box",paddingTop:40}}},i=function(){return Object(r.f)(a)}}}]);
//# sourceMappingURL=0.99c8977a.chunk.js.map