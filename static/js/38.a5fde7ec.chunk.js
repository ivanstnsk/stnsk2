(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[38,12,29,30,31,60,61,62,91,92,93,94],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"selectProjects",(function(){return i})),n.d(t,"selectProject",(function(){return a}));var r=n(57),i=function(e){return e.projects},a=function(e){return Object(r.a)([i],(function(t){return t.find((function(t){return t.id===e}))}))}},103:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return p}));var r=n(11),i=n(0),a=n.n(i),o=n(3),c=n(178),l=n(8),s=n(1),u=n(49),f=n(50),m=n(109),d={compact:[[40,1/0]]},p=function(e){var t=e.offsetSize,n=e.lastProject,i=Object(s.a)(d),p=Object(r.a)(i,2),x=p[0],g=p[1],b=Object(o.h)().projectId,h=Object(u.useState)(b||n).data,E=Object(m.useStyles)(),y=!!b;if(!h)return a.a.createElement(c.a,{in:y,timeout:300,unmountOnExit:!0},(function(e){return a.a.createElement(l.t,{transitionState:e,offsetSize:t},a.a.createElement("div",{className:E.wrapper},a.a.createElement(f.EmptyHeader,null),a.a.createElement(l.m,null)))}));var v=h.title,j=h.subTitle,C=h.tags,S=h.team,w=h.dates,O=h.technologies,z=h.workResults,H=h.achievements;return a.a.createElement(c.a,{in:y,timeout:300,unmountOnExit:!0},(function(e){return a.a.createElement(l.t,{transitionState:e,offsetSize:t},a.a.createElement("div",{className:E.wrapper},h?a.a.createElement(a.a.Fragment,null,a.a.createElement(f.Header,{size:x,title:v,subTitle:j,tags:C}),a.a.createElement(l.o,{onScroll:g},a.a.createElement(l.e,null,a.a.createElement(l.q,{iconType:"work-result",title:"Work results",lines:[z]}),a.a.createElement(l.q,{iconType:"achievements",title:"Achievements",lines:[H]}),a.a.createElement(l.q,{iconType:"schedule",title:"Project schedule",ContentComponent:a.a.createElement(l.g,{from:w.from,to:w.to})}),a.a.createElement(l.q,{iconType:"team",title:"Team",ContentComponent:a.a.createElement(l.n,{rows:S})}),a.a.createElement(l.q,{iconType:"tech",title:"Technologies",lines:[O]})))):a.a.createElement(a.a.Fragment,null,a.a.createElement(f.EmptyHeader,null),a.a.createElement(l.m,null))))}))}},109:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(1),i=function(e){var t=e.colors.primary,n=t.bgContent;return{wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,borderWidth:0,borderTopWidth:1,borderStyle:"solid",boxSizing:"border-box",borderColor:t.underline,backgroundColor:n,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}},a=function(){return Object(r.f)(i)}},45:function(e,t,n){"use strict";n.r(t);var r=n(92);n.d(t,"Header",(function(){return r.Header}))},46:function(e,t,n){"use strict";n.r(t);var r=n(93);n.d(t,"EmptyHeader",(function(){return r.EmptyHeader}))},49:function(e,t,n){"use strict";n.r(t);var r=n(95);n.d(t,"useState",(function(){return r.useState}))},50:function(e,t,n){"use strict";n.r(t);var r=n(45);n.d(t,"Header",(function(){return r.Header}));var i=n(46);n.d(t,"EmptyHeader",(function(){return i.EmptyHeader}))},92:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return s}));var r=n(0),i=n.n(r),a=n(3),o=n(8),c=n(6),l=n(97),s=function(e){var t=e.size,n=void 0===t?"normal":t,s=e.title,u=e.subTitle,f=e.tags,m=Object(a.f)(),d=Object(l.useStyles)({size:n}),p=Object(r.useCallback)((function(){m.push(c.b.PROJECTS)}),[m]);return i.a.createElement("div",{className:d.wrapper},i.a.createElement("div",{className:d.container},i.a.createElement("div",{className:d.innerContainer},i.a.createElement("div",{className:d.photo}),i.a.createElement("div",{className:d.midContainer},i.a.createElement("div",{className:d.titleContainer},i.a.createElement("div",{className:d.title},s),f.map((function(e){return i.a.createElement(o.c,{key:e,type:e,label:e})}))),i.a.createElement("div",{className:d.subTitle},u)))),i.a.createElement("div",{className:d.rightContainer},i.a.createElement(o.d,{onClick:p})))}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"EmptyHeader",(function(){return s}));var r=n(0),i=n.n(r),a=n(3),o=n(8),c=n(6),l=n(98),s=function(){var e=Object(a.f)(),t=Object(l.useStyles)(),n=Object(r.useCallback)((function(){e.push(c.b.PROJECTS)}),[e]);return i.a.createElement("div",{className:t.wrapper},i.a.createElement("div",{className:t.rightContainer},i.a.createElement(o.d,{onClick:n})))}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return a}));var r=n(20),i=n(100),a=function(e){return{data:Object(r.b)(Object(i.selectProject)(e))}}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return o}));var r=n(14),i=n(1),a=function(e){var t=e.colors.primary.greyUltralight,n=e.sizes,i=n.content,a=i.maxWidth,o=i.offsetHorizontal,c=n.menu.width;return{wrapper:function(e){var t=e.size;return Object(r.a)({display:"flex",boxSizing:"border-box",paddingLeft:o,paddingRight:o},function(e){return"compact"===e?{height:"80px",maxHeight:"80px"}:{height:"230px",maxHeight:"230px"}}(t),{transition:"all 0.4s ease"})},container:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},innerContainer:{display:"flex",flex:1,width:"100%",maxWidth:a,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box"},midContainer:{display:"flex",flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:50},titleContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:t,marginRight:30},subTitle:function(e){var n=e.size;return Object(r.a)({fontSize:18,fontWeight:"normal",lineHeight:"22px",color:t},function(e){return"compact"===e?{opacity:"0",height:"0px",marginTop:"0px"}:{opacity:"1",height:"auto",marginTop:"20px"}}(n),{transition:"all 0.2s ease"})},photo:function(e){var t=e.size;return Object(r.a)({backgroundImage:"url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:10},function(e){return"compact"===e?{height:"60px",width:"60px",minHeight:"60px",minWidth:"60px"}:{height:"160px",width:"160px",minHeight:"160px",minWidth:"160px"}}(t),{transition:"all 0.4s ease"})},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60},rightContainer:function(e){var t=e.size;return Object(r.a)({height:"100%",display:"flex",width:c,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box"},function(e){return"compact"===e?{alignItems:"center",paddingTop:"0px"}:{alignItems:"flex-start",paddingTop:"40px"}}(t),{transition:"all 0.4s ease"})}}},o=function(e){return Object(i.f)(a,e)}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(1),i=function(e){var t=e.sizes.content.offsetHorizontal;return{wrapper:{display:"flex",boxSizing:"border-box",paddingLeft:t,paddingRight:t},rightContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box",paddingTop:40}}},a=function(){return Object(r.f)(i)}}}]);
//# sourceMappingURL=38.a5fde7ec.chunk.js.map