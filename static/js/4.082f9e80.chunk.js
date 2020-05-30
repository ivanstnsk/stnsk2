(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[4,8,9,14,17,40,43,47,48,66,68,103],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"Header",(function(){return l}));var a=n(0),r=n.n(a),i=n(49),o=n(109),l=function(){var e=Object(o.useStyles)();return r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.photo}),r.a.createElement("div",{className:e.titleContainer},r.a.createElement("div",{className:e.title},"Ivan Stinsky"),r.a.createElement("div",{className:e.subTitle},"Software Engineer",r.a.createElement("br",null),"with focus on JavaScript")),r.a.createElement("div",{className:e.iconsContainer},r.a.createElement(i.MainSkillIcon,{type:"web",tooltip:"Web development"}),r.a.createElement(i.MainSkillIcon,{type:"mobile",tooltip:"Mobile development"}),r.a.createElement(i.MainSkillIcon,{type:"design",tooltip:"UI design"}),r.a.createElement(i.MainSkillIcon,{type:"backend",tooltip:"Experience in backend"})))}},109:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return l}));var a=n(1),r=n(175),i=n.n(r),o=function(e){var t=e.colors.primary.greyUltralight;return{container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},titleContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",marginLeft:50},title:{fontSize:34,fontWeight:"normal",lineHeight:"42px",color:t},subTitle:{fontSize:18,fontWeight:"normal",lineHeight:"22px",color:t,marginTop:20},photo:{width:160,height:160,minHeight:160,minWidth:160,backgroundImage:"url(".concat(i.a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",borderRadius:80},iconsContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:60}}},l=function(){return Object(a.f)(o)}},117:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var a=n(1),r=function(e){var t=e.colors.primary;return{container:{position:"absolute",width:"100%",height:"100%",display:"flex",flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",backgroundColor:t.bgContent,overflow:"hidden"},colsContainer:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start",marginTop:70},colText:{display:"flex",flex:1,fontSize:18,fontWeight:300,lineHeight:"22px",color:t.greyUltralight},colRight:{marginLeft:60}}},i=function(){return Object(a.f)(r)}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"About",(function(){return c}));var a=n(0),r=n.n(a),i=n(8),o=n(60),l=n(117),c=function(){var e=Object(l.useStyles)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.e,{title:"About me",subTitle:"Everything about my skills"}),r.a.createElement(i.n,null,r.a.createElement(i.d,null,r.a.createElement(o.Header,null),r.a.createElement("div",{className:e.colsContainer},r.a.createElement("div",{className:e.colText},"My name is Ivan and currently I live in Ukraine. I am a Software Engineer with the overall experience in 3.5 years.",r.a.createElement("br",null),r.a.createElement("br",null),"I have a strong technical skillset with range UI/UX experience and focusing on providing the best experience of using UI for users. I pay attention to details and aim to achieve both speed & performance in applications."),r.a.createElement("div",{className:"".concat(e.colText," ").concat(e.colRight)},"I coordinate with team members and different streams within a project account to have a wide understanding of software development processes.",r.a.createElement("br",null),r.a.createElement("br",null),"To continue growing as a Software Developer I work on many pet projects in my free time and take internal & external courses.",r.a.createElement("br",null),r.a.createElement("br",null),"Also interested in backend and game development & gamification.")))))}},175:function(e,t,n){e.exports=n.p+"static/media/photo.c0998b20.jpg"},45:function(e,t,n){"use strict";n.r(t);var a=n(94);n.d(t,"MainSkillIcon",(function(){return a.MainSkillIcon}))},49:function(e,t,n){"use strict";n.r(t);var a=n(45);n.d(t,"MainSkillIcon",(function(){return a.MainSkillIcon}))},53:function(e,t,n){"use strict";n.r(t);var a=n(103);n.d(t,"Header",(function(){return a.Header}))},60:function(e,t,n){"use strict";n.r(t);var a=n(53);n.d(t,"Header",(function(){return a.Header}))},67:function(e,t,n){"use strict";n.r(t);var a=n(133);n.d(t,"default",(function(){return a.About}))},94:function(e,t,n){"use strict";n.r(t),n.d(t,"MainSkillIcon",(function(){return c}));var a=n(11),r=n(0),i=n.n(r),o=n(8),l=n(98),c=Object(r.memo)((function(e){var t=e.type,n=e.tooltip,c=Object(r.useState)(!1),s=Object(a.a)(c,2),u=s[0],f=s[1],d=Object(l.useStyles)({active:u}),m=u?"#7FAB63":"rgba(255,255,255,0.4)",p=Object(r.useCallback)((function(e){return function(){f(e)}}),[f]);return i.a.createElement("div",{className:d.container},i.a.createElement("div",{onMouseEnter:p(!0),onMouseLeave:p(!1)},i.a.createElement(o.q,{type:t,width:60,height:60,color:m})),i.a.createElement("div",{className:d.tooltip},n))}))},98:function(e,t,n){"use strict";n.r(t),n.d(t,"useStyles",(function(){return i}));var a=n(1),r=function(e){var t=e.colors,n=t.primary.bgInfo,a=t.typography.text;return{container:function(e){var t=e.active;return{marginLeft:40,position:"relative",transform:"translateY(".concat(t?-10:0,"px)"),transition:"transform 0.4s ease"}},tooltip:function(e){var t=e.active;return{position:"absolute",left:-30,top:80,width:120,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",paddingTop:6,paddingBottom:6,borderRadius:8,backgroundColor:n,color:a,opacity:t?1:0,zIndex:20,transition:"opacity 0.4s ease","&:before":{position:"absolute",top:-5,content:'""',display:"block",width:10,height:10,backgroundColor:n,transform:"rotateZ(45deg)",zIndex:18}}}}},i=function(e){return Object(a.f)(r,e)}}}]);
//# sourceMappingURL=4.082f9e80.chunk.js.map