(this.webpackJsonpstnsk=this.webpackJsonpstnsk||[]).push([[40,11,24,25,54,55,77,79,81],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return o}));var r=n(1),a=function(t){var e=t.colors,n=e.typography.title;return{button:{backgroundColor:"transparent",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",border:"none",outline:"none",cursor:"pointer",transition:"all 0.4s ease",marginBottom:40,"&:hover":{transform:"scaleX(1.05) scaleY(1.05)",transition:"all 0.4s ease"},"&:hover $text":{color:e.primary.greenMedium}},text:{fontSize:18,fontWeight:"normal",lineHeight:"22px",color:n,marginLeft:30}}},o=function(){return Object(r.f)(a)}},101:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return o}));var r=n(1),a=function(){return{container:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",transition:"all 0.4s ease"},button:{marginTop:30},icon:function(t){return{transform:t.hovered?"scaleX(1.1) scaleY(1.1)":"scaleX(1) scaleY(1)",transition:"all 0.4s ease"}}}},o=function(t){return Object(r.f)(a,t)}},111:function(t,e,n){"use strict";n.r(e),n.d(e,"useStyles",(function(){return o}));var r=n(1),a=function(t){var e=t.colors.primary,n=e.greyUltralight;return{title:{color:e.greenMedium,fontSize:50,fontWeight:500,marginBottom:16},text:{color:n,fontSize:18,fontWeight:300,fontStyle:"normal"},innerContainer:{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",paddingRight:120,paddingBottom:156},innerContent:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start","& > *":{marginLeft:150},"& *:first-child":{marginLeft:0}},contentCol:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},contentColRight:{marginLeft:150},socialContent:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start","& > *":{marginLeft:40,marginBottom:40},"& *:first-child":{marginLeft:0}}}},o=function(){return Object(r.f)(a)}},127:function(t,e,n){"use strict";n.r(e),n.d(e,"Contacts",(function(){return l}));var r=n(0),a=n.n(r),o=n(7),i=n(52),c=n(111),l=function(){var t=Object(c.useStyles)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{title:"Contacts",subTitle:"In case you want to get in touch with me"}),a.a.createElement(o.k,null,a.a.createElement(o.c,null,a.a.createElement("div",{className:t.innerContainer},a.a.createElement("div",{className:t.innerContent},a.a.createElement("div",{className:t.contentCol},a.a.createElement(o.l,null,"Job offers"),a.a.createElement(i.ContactButton,{type:"mail",text:"ivan.stnsk@gmail.com"}),a.a.createElement(i.ContactButton,{type:"skype",text:"ivan.stnsk"})),a.a.createElement("div",{className:t.contentCol},a.a.createElement(o.l,null,"Social pages"),a.a.createElement("div",{className:t.socialContent},a.a.createElement(i.SocialButton,{type:"linkedin"}),a.a.createElement(i.SocialButton,{type:"github"}),a.a.createElement(i.SocialButton,{type:"instagram"}))))))))}},46:function(t,e,n){"use strict";n.r(e);var r=n(94);n.d(e,"ContactButton",(function(){return r.ContactButton}))},47:function(t,e,n){"use strict";n.r(e);var r=n(95);n.d(e,"SocialButton",(function(){return r.SocialButton}))},52:function(t,e,n){"use strict";n.r(e);var r=n(46);n.d(e,"ContactButton",(function(){return r.ContactButton}));var a=n(47);n.d(e,"SocialButton",(function(){return a.SocialButton}))},94:function(t,e,n){"use strict";n.r(e),n.d(e,"ContactButton",(function(){return l}));var r=n(13),a=n(0),o=n.n(a),i=n(7),c=n(100),l=function(t){var e=t.type,n=t.text,l=t.onClick,s=Object(a.useState)(!1),u=Object(r.a)(s,2),f=u[0],m=u[1],g=Object(c.useStyles)(),d=f?"#81AF65":"rgba(255,255,255,0.4)",y=Object(a.useCallback)((function(t){return function(){m(t)}}),[m]);return o.a.createElement("button",{className:g.button,onClick:l,onMouseEnter:y(!0),onMouseLeave:y(!1)},o.a.createElement(i.m,{type:e,width:60,height:60,color:d}),o.a.createElement("span",{className:g.text},n))}},95:function(t,e,n){"use strict";n.r(e),n.d(e,"SocialButton",(function(){return s}));var r=n(13),a=n(0),o=n.n(a),i=n(7),c=n(1),l=n(101),s=function(t){var e=t.type,n=t.onClick,a=Object(c.c)(),s=Object(r.a)(a,2),u=s[0],f=s[1],m=Object(l.useStyles)({hovered:f}),g=f?"#81AF65":"rgba(255,255,255,0.4)";return o.a.createElement("div",{ref:u,className:m.container,onClick:n},o.a.createElement(i.m,{className:m.icon,type:e,width:60,height:60,color:g}),o.a.createElement(i.a,{className:m.button,text:"Open",width:110,onClick:n}))}}}]);
//# sourceMappingURL=40.025d09bb.chunk.js.map