(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[5,10,13,16,31,39,44,61,90,91,92],{35:function(e,t,n){"use strict";n.r(t);var r=n(82);n.d(t,"CloseButton",(function(){return r.CloseButton}))},37:function(e,t,n){"use strict";n.r(t);var r=n(85);n.d(t,"Header",(function(){return r.Header}))},39:function(e,t,n){"use strict";n.r(t);var r=n(35);n.d(t,"CloseButton",(function(){return r.CloseButton}))},41:function(e,t,n){"use strict";n.r(t);var r=n(37);n.d(t,"Header",(function(){return r.Header}))},44:function(e,t,n){"use strict";n.r(t);var r=n(92);n.d(t,"Project",(function(){return r.Project}))},82:function(e,t,n){"use strict";n.r(t),n.d(t,"CloseButton",(function(){return o}));var r=n(0),a=n.n(r),l=n(7),i=n(83),o=Object(r.memo)((function(e){var t=e.onClick,n=Object(i.useStyles)();return a.a.createElement("button",{className:n.button,onClick:t},a.a.createElement(l.m,{type:"close",width:40,height:40,color:"rgba(255,255,255,0.6)"}))}))},83:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return l}));var r=n(1),a=function(){return{button:{width:40,height:40,border:"none",outline:"none",background:"transparent",cursor:"pointer",padding:0}}},l=function(){return Object(r.f)(a)}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return u}));var r=n(0),a=n.n(r),l=n(3),i=n(5),o=n(39),c=n(88),u=function(e){var t=e.size,n=void 0===t?"normal":t,u=Object(l.f)(),s=Object(c.useStyles)({size:n}),m=Object(r.useCallback)((function(){u.push(i.b.PROJECTS)}),[u]);return a.a.createElement("div",{className:s.wrapper},a.a.createElement("div",{className:s.container},a.a.createElement("div",{className:s.innerContainer},a.a.createElement("div",{className:s.photo}),a.a.createElement("div",{className:s.titleContainer},a.a.createElement("div",{className:s.title},"Virtual Tours"),a.a.createElement("div",{className:s.subTitle},"The marketplace for creating, celling and",a.a.createElement("br",null),"purchasing virtual tours in the city (virtual guidance).",a.a.createElement("br",null),"Includes mobile app and the website.")))),a.a.createElement("div",{className:s.rightContainer},a.a.createElement(o.CloseButton,{onClick:m})))}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var r=n(14),a=n(1),l=function(e){var t=e.colors.primary.greyUltralight,n=e.sizes,a=n.content,l=a.maxWidth,i=a.offsetHorizontal,o=n.menu.width;return{wrapper:function(e){var t=e.size;return Object(r.a)({display:"flex",boxSizing:"border-box",paddingLeft:i,paddingRight:i},function(e){return"compact"===e?{height:"80px",maxHeight:"80px"}:{height:"230px",maxHeight:"230px"}}(t),{transition:"all 0.4s ease"})},container:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"},innerContainer:{display:"flex",flex:1,width:"100%",maxWidth:l,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",boxSizing:"border-box"},titleContainer:{display:"flex",flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:50},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:t},subTitle:function(e){var n=e.size;return Object(r.a)({fontSize:18,fontWeight:"normal",lineHeight:"22px",color:t},function(e){return"compact"===e?{opacity:"0",height:"0px",marginTop:"0px"}:{opacity:"1",height:"auto",marginTop:"20px"}}(n),{transition:"all 0.2s ease"})},photo:function(e){var t=e.size;return Object(r.a)({backgroundImage:"url(https://www.tonincasa.it/public/crop/1200-660/110718-122443-virtualtour.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:10},function(e){return"compact"===e?{height:"60px",width:"60px",minHeight:"60px",minWidth:"60px"}:{height:"160px",width:"160px",minHeight:"160px",minWidth:"160px"}}(t),{transition:"all 0.4s ease"})},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60},rightContainer:function(e){var t=e.size;return Object(r.a)({height:"100%",display:"flex",width:o,flexDirection:"row",justifyContent:"flex-end",boxSizing:"border-box"},function(e){return"compact"===e?{alignItems:"center",paddingTop:"0px"}:{alignItems:"flex-start",paddingTop:"40px"}}(t),{transition:"all 0.4s ease"})}}},i=function(e){return Object(a.f)(l,e)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"Project",(function(){return h}));var r=n(13),a=n(0),l=n.n(a),i=n(3),o=n(167),c=n(7),u=n(1),s=n(41),m=n(98),f={compact:[[40,1/0]]},h=function(e){var t=e.offsetSize,n=Object(u.a)(f),a=Object(r.a)(n,2),h=a[0],d=a[1],p=Object(i.h)().projectId,b=Object(m.useStyles)(),g=!!p;return l.a.createElement(o.a,{in:g,timeout:300,unmountOnExit:!0},(function(e){return l.a.createElement(c.o,{transitionState:e,offsetSize:t},l.a.createElement("div",{className:b.wrapper},l.a.createElement(s.Header,{size:h}),l.a.createElement(c.k,{onScroll:d},l.a.createElement(c.c,null,l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here"),l.a.createElement(c.l,null,"Content here")))))}))}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return l}));var r=n(1),a=function(e){var t=e.colors.primary,n=t.bgContent;return{wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,borderWidth:0,borderTopWidth:1,borderStyle:"solid",boxSizing:"border-box",borderColor:t.underline,backgroundColor:n,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}},l=function(){return Object(r.f)(a)}}}]);
//# sourceMappingURL=5.fe59d10a.chunk.js.map