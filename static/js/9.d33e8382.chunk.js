(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[9,14,17,42,46,47,64,100],{163:function(t,e,n){t.exports=n.p+"static/media/photo.c0998b20.jpg"},36:function(t,e,n){"use strict";n.r(e);var i=n(84);n.d(e,"MainSkillIcon",(function(){return i.MainSkillIcon}))},40:function(t,e,n){"use strict";n.r(e);var i=n(36);n.d(e,"MainSkillIcon",(function(){return i.MainSkillIcon}))},43:function(t,e,n){"use strict";n.r(e);var i=n(91);n.d(e,"Header",(function(){return i.Header}))},84:function(t,e,n){"use strict";n.r(e),n.d(e,"MainSkillIcon",(function(){return l}));var i=n(13),a=n(0),r=n.n(a),o=n(7),c=n(87),l=Object(a.memo)((function(t){var e=t.type,n=t.tooltip,l=Object(a.useState)(!1),s=Object(i.a)(l,2),u=s[0],f=s[1],d=Object(c.useStyles)({active:u}),p=u?"#7FAB63":"rgba(255,255,255,0.4)",m=Object(a.useCallback)((function(t){return function(){f(t)}}),[f]);return r.a.createElement("div",{className:d.container},r.a.createElement("div",{onMouseEnter:m(!0),onMouseLeave:m(!1)},r.a.createElement(o.m,{type:e,width:60,height:60,color:p})),r.a.createElement("div",{className:d.tooltip},n))}))},87:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return r}));var i=n(1),a=function(t){var e=t.colors,n=e.primary.bgInfo,i=e.typography.text;return{container:function(t){var e=t.active;return{marginLeft:40,position:"relative",transform:"translateY(".concat(e?-10:0,"px)"),transition:"transform 0.4s ease"}},tooltip:function(t){var e=t.active;return{position:"absolute",left:-30,top:80,width:120,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",paddingTop:6,paddingBottom:6,borderRadius:8,backgroundColor:n,color:i,opacity:e?1:0,zIndex:20,transition:"opacity 0.4s ease","&:before":{position:"absolute",top:-5,content:'""',display:"block",width:10,height:10,backgroundColor:n,transform:"rotateZ(45deg)",zIndex:18}}}}},r=function(t){return Object(i.f)(a,t)}},91:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return c}));var i=n(0),a=n.n(i),r=n(40),o=n(97),c=function(){var t=Object(o.useStyles)();return a.a.createElement("div",{className:t.container},a.a.createElement("div",{className:t.photo}),a.a.createElement("div",{className:t.titleContainer},a.a.createElement("div",{className:t.title},"Ivan Stinsky"),a.a.createElement("div",{className:t.subTitle},"Software Engineer",a.a.createElement("br",null),"with focus on JavaScript")),a.a.createElement("div",{className:t.iconsContainer},a.a.createElement(r.MainSkillIcon,{type:"web",tooltip:"Web development"}),a.a.createElement(r.MainSkillIcon,{type:"mobile",tooltip:"Mobile development"}),a.a.createElement(r.MainSkillIcon,{type:"design",tooltip:"UI design"}),a.a.createElement(r.MainSkillIcon,{type:"backend",tooltip:"Experience in backend"})))}},97:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return c}));var i=n(1),a=n(163),r=n.n(a),o=function(t){var e=t.colors.primary.greyUltralight;return{container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},titleContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",marginLeft:50},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:e},subTitle:{fontSize:18,fontWeight:"normal",lineHeight:"22px",color:e,marginTop:20},photo:{width:160,height:160,minHeight:160,minWidth:160,backgroundImage:"url(".concat(r.a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",borderRadius:80},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60}}},c=function(){return Object(i.f)(o)}}}]);
//# sourceMappingURL=9.d33e8382.chunk.js.map