(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[1,3,10,13,16,31,32,39,45,62,63,92,93,94,95],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"selectProjects",(function(){return i})),n.d(t,"selectProject",(function(){return o}));var r=n(58),i=function(e){return e.projects},o=function(e){return Object(r.a)([i],(function(t){return t.find((function(t){return t.id===e}))}))}},104:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return m}));var r=n(11),i=n(0),o=n.n(i),a=n(3),c=n(179),s=n(8),l=n(1),u=n(50),d=n(51),f=n(110),p={compact:[[40,1/0]]},m=function(e){var t=e.offsetSize,n=Object(l.a)(p),i=Object(r.a)(n,2),m=i[0],g=i[1],b=Object(a.h)().projectId,h=Object(u.useState)(b).data,x=Object(f.useStyles)(),v=!!b;return o.a.createElement(c.a,{in:v,timeout:300,unmountOnExit:!0},(function(e){return o.a.createElement(s.s,{transitionState:e,offsetSize:t},o.a.createElement("div",{className:x.wrapper},h?o.a.createElement(o.a.Fragment,null,o.a.createElement(d.Header,{size:m,title:h.title,subTitle:h.subTitle}),o.a.createElement(s.n,{onScroll:g},o.a.createElement(s.d,null,o.a.createElement(s.p,{iconType:"work-result",title:"Work results",lines:["Reviwed the work of the other React Native developer","Created iOS and Android dev & production builds","Configured Apple AppStore & Testflight and Google Play Market"]}),o.a.createElement(s.p,{iconType:"achievements",title:"Achievements",lines:["Reviwed the work of the other React Native developer","Created iOS and Android dev & production builds","Configured Apple AppStore & Testflight and Google Play Market"]}),o.a.createElement(s.p,{iconType:"schedule",title:"Project schedule",ContentComponent:o.a.createElement(s.f,{from:["2019","October"],to:["2019","October"]})}),o.a.createElement(s.p,{iconType:"team",title:"Team",ContentComponent:o.a.createElement(s.m,{rows:[["Dev","6"],["QA","2"],["PM","1"],["UI/UX","1"]]})}),o.a.createElement(s.p,{iconType:"tech",title:"Technologies",lines:["react-native, react, redux, redux-saga, styled-components, react-navigation, react-router-dom, react-native-fbsdk, react-native-google-login, react-native-twitter-sigin, react-native-maps, google maps, google directions API, react-native-compass, geolib, react-native-video, mapbox modules, ios in app purchase"]})))):o.a.createElement(s.l,null)))}))}},110:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return o}));var r=n(1),i=function(e){var t=e.colors.primary,n=t.bgContent;return{wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,borderWidth:0,borderTopWidth:1,borderStyle:"solid",boxSizing:"border-box",borderColor:t.underline,backgroundColor:n,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}},o=function(){return Object(r.f)(i)}},44:function(e,t,n){"use strict";n.r(t);var r=n(92);n.d(t,"CloseButton",(function(){return r.CloseButton}))},46:function(e,t,n){"use strict";n.r(t);var r=n(95);n.d(t,"Header",(function(){return r.Header}))},48:function(e,t,n){"use strict";n.r(t);var r=n(44);n.d(t,"CloseButton",(function(){return r.CloseButton}))},50:function(e,t,n){"use strict";n.r(t);var r=n(97);n.d(t,"useState",(function(){return r.useState}))},51:function(e,t,n){"use strict";n.r(t);var r=n(46);n.d(t,"Header",(function(){return r.Header}))},54:function(e,t,n){"use strict";n.r(t);var r=n(104);n.d(t,"Project",(function(){return r.Project}))},61:function(e,t,n){"use strict";n.r(t);var r=n(54);n.d(t,"Project",(function(){return r.Project}))},92:function(e,t,n){"use strict";n.r(t),n.d(t,"CloseButton",(function(){return c}));var r=n(0),i=n.n(r),o=n(8),a=n(93),c=Object(r.memo)((function(e){var t=e.onClick,n=Object(a.useStyles)();return i.a.createElement("button",{className:n.button,onClick:t},i.a.createElement(o.q,{type:"close",width:30,height:30,color:"rgba(255,255,255,0.6)"}))}))},93:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return o}));var r=n(1),i=function(){return{button:{width:40,height:40,border:"none",outline:"none",background:"transparent",cursor:"pointer",padding:0}}},o=function(){return Object(r.f)(i)}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return u}));var r=n(0),i=n.n(r),o=n(3),a=n(8),c=n(6),s=n(48),l=n(99),u=function(e){var t=e.size,n=void 0===t?"normal":t,u=e.title,d=e.subTitle,f=Object(o.f)(),p=Object(l.useStyles)({size:n}),m=Object(r.useCallback)((function(){f.push(c.b.PROJECTS)}),[f]);return i.a.createElement("div",{className:p.wrapper},i.a.createElement("div",{className:p.container},i.a.createElement("div",{className:p.innerContainer},i.a.createElement("div",{className:p.photo}),i.a.createElement("div",{className:p.midContainer},i.a.createElement("div",{className:p.titleContainer},i.a.createElement("div",{className:p.title},u),i.a.createElement(a.c,{type:"web",label:"Web"})),i.a.createElement("div",{className:p.subTitle},d)))),i.a.createElement("div",{className:p.rightContainer},i.a.createElement(s.CloseButton,{onClick:m})))}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return o}));var r=n(20),i=n(101),o=function(e){return{data:Object(r.b)(Object(i.selectProject)(e))}}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return a}));var r=n(14),i=n(1),o=function(e){var t=e.colors.primary.greyUltralight,n=e.sizes,i=n.content,o=i.maxWidth,a=i.offsetHorizontal,c=n.menu.width;return{wrapper:function(e){var t=e.size;return Object(r.a)({display:"flex",boxSizing:"border-box",paddingLeft:a,paddingRight:a},function(e){return"compact"===e?{height:"80px",maxHeight:"80px"}:{height:"230px",maxHeight:"230px"}}(t),{transition:"all 0.4s ease"})},container:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},innerContainer:{display:"flex",flex:1,width:"100%",maxWidth:o,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box"},midContainer:{display:"flex",flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:50},titleContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:t,marginRight:30},subTitle:function(e){var n=e.size;return Object(r.a)({fontSize:18,fontWeight:"normal",lineHeight:"22px",color:t},function(e){return"compact"===e?{opacity:"0",height:"0px",marginTop:"0px"}:{opacity:"1",height:"auto",marginTop:"20px"}}(n),{transition:"all 0.2s ease"})},photo:function(e){var t=e.size;return Object(r.a)({backgroundImage:"url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:10},function(e){return"compact"===e?{height:"60px",width:"60px",minHeight:"60px",minWidth:"60px"}:{height:"160px",width:"160px",minHeight:"160px",minWidth:"160px"}}(t),{transition:"all 0.4s ease"})},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60},rightContainer:function(e){var t=e.size;return Object(r.a)({height:"100%",display:"flex",width:c,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box"},function(e){return"compact"===e?{alignItems:"center",paddingTop:"0px"}:{alignItems:"flex-start",paddingTop:"40px"}}(t),{transition:"all 0.4s ease"})}}},a=function(e){return Object(i.f)(o,e)}}}]);
//# sourceMappingURL=1.9472e503.chunk.js.map