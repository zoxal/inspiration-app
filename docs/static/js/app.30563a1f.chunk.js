(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/11.c17049e9.png"},137:function(e,t,n){e.exports=n(175)},153:function(e,t,n){e.exports=n.p+"static/media/12.ad62d5b5.png"},154:function(e,t,n){e.exports=n.p+"static/media/gomer.ecc1665c.png"},155:function(e,t,n){e.exports=n.p+"static/media/1.e6e41e39.png"},156:function(e,t,n){e.exports=n.p+"static/media/2.8473aac4.png"},157:function(e,t,n){e.exports=n.p+"static/media/3.76e4dc5b.png"},175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(132),o=n(185),c=n(184),s=n(183),l=n(6),g=n.n(l),u=n(3),b={selectedCategory:void 0,selectedGoal:void 0},d=r.a.createContext(b),j=function(e){var t=e.children,n=Object(a.useState)(b),r=g()(n,2),i=r[0],o=r[1];return Object(u.jsx)(d.Provider,{value:[i,o],children:t})},p=n(5),f=n.n(p),m=n(71),x=n(182),O=n(4),h=n(2),v=n(18),y=n(73),S=n(16),w=function(e){var t=e.name,n=e.img,r=e.selectedItem,i=e.setSelectedItem,o=t===r,c=r&&!o,s=Object(a.useRef)(new S.a.Value(1)).current;return o?S.a.timing(s,{toValue:1.5,duration:150,useNativeDriver:!0}).start():S.a.timing(s,{toValue:1,duration:150,useNativeDriver:!0}).start(),Object(u.jsxs)(y.a,{style:[C.container,{opacity:o||!c?1:.6}],onPress:function(){console.log(t),i(o?null:t)},children:[Object(u.jsx)(S.a.Image,{style:[C.image,{transform:[{scale:s}]}],source:n}),Object(u.jsx)(v.a,{style:C.text,children:t})]})},C=h.a.create({container:{minWidth:"30%",maxWidth:"33%",justifyContent:"flex-start",alignItems:"center",width:0,flex:1},image:{width:"50%",aspectRatio:1},text:{textAlign:"center",fontSize:12,fontWeight:"500"}}),D=n(84),P=function(e){var t=e.header,n=e.subHeader,a=e.navigation,r=e.children,i=null!=a.navigateNext,o=null!=a.navigatePrev,c=a.navigateNextLabel||"\u0414\u0430\u043b\u0435\u0435";return console.log(),Object(u.jsxs)(O.a,{style:T.container,children:[Object(u.jsx)(v.a,{style:T.header,children:t}),Object(u.jsx)(v.a,{style:T.subHeader,children:n}),r,Object(u.jsxs)(O.a,{style:T.buttonsContainer,children:[o&&Object(u.jsx)(D.a,{style:[T.button,T.buttonBack],onPress:a.navigatePrev,children:Object(u.jsx)(v.a,{style:[T.buttonText,T.buttonBackText],children:"\u041d\u0430\u0437\u0430\u0434"})}),i&&Object(u.jsx)(D.a,{disabled:a.navigateNextDisabled,style:[T.button,a.navigateNextDisabled&&T.buttonDisabled],onPress:a.navigateNext,children:Object(u.jsx)(v.a,{style:T.buttonText,children:c})})]})]})},T=h.a.create({container:{flex:1,padding:20},header:{marginTop:30,fontSize:18,textAlign:"center",fontWeight:"500"},subHeader:{marginVertical:30,fontSize:16,textAlign:"center",fontWeight:"400"},button:{backgroundColor:"#64ACFF",borderRadius:10,margin:10,paddingVertical:13,shadowColor:"rgba(0, 0, 0, 0.15)",shadowRadius:5,shadowOffset:{width:1,height:5},flex:1},buttonBack:{backgroundColor:"white",borderColor:"#64ACFF",borderWidth:2},buttonDisabled:{backgroundColor:"#B2D6FF"},buttonText:{color:"white",textAlign:"center",fontSize:15,fontWeight:"500"},buttonBackText:{color:"#64ACFF"},buttonsContainer:{flexDirection:"row"}}),N=function(e){var t=e.header,n=e.subHeader,a=e.items,r=e.navigation;return Object(u.jsx)(P,{header:t,subHeader:n,navigation:r,children:Object(u.jsx)(O.a,{style:k.items,children:a.all.map((function(e){return Object(u.jsx)(w,{name:e.name,img:e.img,selectedItem:a.selected,setSelectedItem:a.setSelected},e.name)}))})})},k=h.a.create({items:{flexWrap:"wrap",flexDirection:"row",flexGrow:1,flexBasis:"0px",flexShrink:1}}),H=[{name:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",img:n(90)},{name:"\u042d\u043a\u043e\u043b\u043e\u0433\u0438\u044f",img:n(91)},{name:"\u0411\u0443\u0434\u0443\u0449\u0435\u0435",img:n(92)},{name:"\u041d\u043e\u0432\u044b\u0435 \u043c\u0435\u0434\u0438\u0430",img:n(93)},{name:"\u0421\u043f\u043e\u0440\u0442",img:n(94)},{name:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430",img:n(95)},{name:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",img:n(96)},{name:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",img:n(97)},{name:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f",img:n(98)},{name:"\u0421\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u043e",img:n(99)},{name:"\u041f\u0440\u0435\u0434\u043f\u0440\u0435\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e",img:n(100)}];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.navigation,n=Object(a.useContext)(d),r=g()(n,2),i=r[0],o=r[1],c={all:H,selected:i.selectedCategory,setSelected:function(e){return o((function(t){return G(G({},t),{},{selectedCategory:e})}))}},s={navigateNext:function(){return t.navigate("SelectGoal")}};return Object(u.jsx)(N,{header:"\u0428\u0430\u0433 1 \u0438\u0437 5",subHeader:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",navigation:s,items:c})},W=[{name:"\u041f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435",img:n(90)},{name:"\u041f\u0440\u043e\u0447\u0435\u0441\u0442\u044c \u043a\u043d\u0438\u0433\u0443",img:n(91)},{name:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u0435\u043d\u0435\u0433",img:n(92)},{name:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u0430\u0448\u0438\u043d\u0443",img:n(93)},{name:"\u041f\u0440\u044b\u0433\u043d\u0443\u0442\u044c \u0441 \u043f\u0430\u0440\u0430\u0448\u044e\u0442\u043e\u043c",img:n(94)},{name:"\u0417\u0430\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0442\u0438\u043a\u0430",img:n(95)},{name:"\u041f\u043e\u043a\u0443\u0448\u0430\u0442\u044c \u0431\u043e\u0440\u0449",img:n(96)},{name:"\u041f\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0437\u0443\u0431\u044b",img:n(97)},{name:"\u041a\u0443\u043f\u0438\u0442\u044c \u0445\u043b\u0435\u0431",img:n(98)},{name:"\u041f\u043e\u0441\u0442\u0438\u0440\u0430\u0442\u044c \u043d\u043e\u0441\u043e\u0447\u043a\u0438",img:n(99)},{name:"\u041a\u0443\u043f\u0438\u0442\u044c \u0434\u043e\u043c",img:n(100)},{name:"\u0421\u0432\u043e\u044f \u0446\u0435\u043b\u044c",img:n(153)}];function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){var t=e.navigation,n=Object(a.useContext)(d),r=g()(n,2),i=r[0],o=r[1],c={all:W,selected:i.selectedGoal,setSelected:function(e){return o((function(t){return I(I({},t),{},{selectedGoal:e})}))}},s={navigateNextDisabled:null==i.selectedGoal,navigateNext:function(){return t.navigate("DescribeGoal")},navigatePrev:function(){return t.navigate("SelectCategory")}};return Object(u.jsx)(N,{header:"\u0428\u0430\u0433 2 \u0438\u0437 5",subHeader:"\u041a\u0430\u043a\u0430\u044f \u0443 \u0442\u0435\u0431\u044f \u0446\u0435\u043b\u044c?",navigation:s,items:c})},B=n(60);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.navigation,n=Object(a.useContext)(d),r=g()(n,2),i=r[0],o=r[1],c=i.goalDescription&&i.goalCriteria&&i.goalDeadline&&i.goalReason;console.log(i);var s={navigateNextDisabled:!c,navigateNext:function(){return t.navigate("GoalConfigurationFinished")},navigatePrev:function(){return t.navigate("SelectGoal")}};return Object(u.jsx)(P,{header:"\u0428\u0430\u0433 3 \u0438\u0437 5",subHeader:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0446\u0435\u043b\u0438",navigation:s,children:Object(u.jsxs)(O.a,{style:J.container,children:[Object(u.jsx)(B.a,{style:J.input,placeholder:"\u041a\u0430\u043a\u0430\u044f \u0443 \u0442\u0435\u0431\u044f \u0446\u0435\u043b\u044c?",onChangeText:function(e){return o(V(V({},i),{},{goalDescription:e}))},value:i.goalDescription}),Object(u.jsx)(B.a,{style:J.input,placeholder:"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u0440\u0438\u0442\u044c \u0443\u0441\u043f\u0435\u0445?",onChangeText:function(e){return o(V(V({},i),{},{goalCriteria:e}))},value:i.goalCriteria}),Object(u.jsx)(B.a,{style:J.input,placeholder:"\u041f\u043e\u0441\u0442\u0430\u0432\u044c \u0441\u0435\u0431\u0435 \u0434\u0435\u0434\u043b\u0430\u0439\u043d",onChangeText:function(e){return o(V(V({},i),{},{goalDeadline:e}))},value:i.goalDeadline}),Object(u.jsx)(B.a,{style:J.input,placeholder:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u0442\u0435\u0431\u0435 \u0434\u043e\u0431\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0446\u0435\u043b\u0438?",onChangeText:function(e){return o(V(V({},i),{},{goalReason:e}))},value:i.goalReason})]})})},J=h.a.create({container:{flex:1,justifyContent:"flex-start"},input:{textAlign:"left",borderWidth:2,borderColor:"#DFEFFD",borderRadius:25,paddingLeft:20,paddingVertical:15,flex:1,marginBottom:20,maxHeight:60}}),M=n(28),q=function(e){var t=e.navigation,r=Object(a.useContext)(d),i=g()(r,2),o=i[0];i[1];console.log("finish: "+JSON.stringify(o));var c={navigateNext:function(){t.navigate("SelectCategory")},navigateNextLabel:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043a\u0430\u043d\u0430\u043b\u0430\u043c"};return Object(u.jsx)(P,{header:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!",subHeader:"\u0426\u0435\u043b\u044c \u0441\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0430, \u0447\u0435\u0440\u0435\u0437 2\u0435 \u0441\u0443\u0442\u043e\u043a \u0441 \u0442\u043e\u0431\u043e\u0439 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043c\u0435\u043d\u0442\u043e\u0440",navigation:c,children:Object(u.jsxs)(O.a,{style:K.imageContainer,children:[Object(u.jsx)(M.a,{style:K.image,source:n(154)}),Object(u.jsxs)(v.a,{style:K.smallText,children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",o.selectedCategory]}),Object(u.jsxs)(v.a,{style:K.smallText,children:["\u0426\u0435\u043b\u044c: ",o.selectedGoal]}),Object(u.jsxs)(v.a,{style:K.smallText,children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",o.goalDescription]}),Object(u.jsxs)(v.a,{style:K.smallText,children:["\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f: ",o.goalCriteria]}),Object(u.jsxs)(v.a,{style:K.smallText,children:["\u0414\u0435\u0434\u043b\u0430\u0439\u043d: ",o.goalDeadline]}),Object(u.jsxs)(v.a,{style:K.smallText,children:["\u0417\u0430\u0447\u0435\u043c: ",o.goalReason]}),Object(u.jsx)(O.a,{style:K.textContainer,children:Object(u.jsx)(v.a,{style:K.text,children:"\u041f\u043e\u043a\u0430 \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u0430\u043d\u0430\u043b\u044b \u043f\u043e \u0441\u0432\u043e\u0435\u0439 \u0442\u0435\u043c\u0435"})})]})})},K=h.a.create({imageContainer:{flex:1,flexDirection:"column",justifyContent:"space-between",alignItems:"center"},image:{width:250,height:200,marginLeft:50},textContainer:{justifyContent:"flex-end",alignItems:"flex-end"},text:{textAlign:"center",fontSize:16,fontWeight:"400"},smallText:{textAlign:"left",fontSize:8}}),Q=function(e){var t=e.navigation,n=e.subHeader,a=e.image,r=e.nextScreen,i={navigateNext:function(){return t.navigate(r)}};return Object(u.jsx)(P,{header:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0434\u043e\u0440\u043e\u0433\u043e\u0439 \u0434\u0440\u0443\u0433!",subHeader:n,navigation:i,children:Object(u.jsx)(M.a,{source:a,style:Z.image})})};function U(e){var t=e.navigation;return Object(u.jsx)(Q,{subHeader:"\u041e\u0442\u0441\u044e\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0442\u0432\u043e\u044f \u0438\u0433\u0440\u0430 \u043f\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044e \u0437\u0430\u0432\u0435\u0442\u043d\u043e\u0439 \u0446\u0435\u043b\u0438.",navigation:t,image:n(155),nextScreen:"SecondScreen"})}function X(e){var t=e.navigation;return Object(u.jsx)(Q,{subHeader:"\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0448\u0430\u0433\u0435. \u0422\u044b \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0448\u044c \u043c\u043e\u043d\u0435\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0432 \u0441\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442\u0435 \u0438\u0434\u0435\u0439.",navigation:t,image:n(156),nextScreen:"ThirdScreen"})}function Y(e){var t=e.navigation;return Object(u.jsx)(Q,{subHeader:"\u0414\u043e\u0431\u0435\u0439\u0441\u044f \u0441\u0432\u043e\u0435\u0439 \u0446\u0435\u043b\u0438. \u041c\u044b \u0432\u0435\u0440\u0438\u043c \u0432 \u0442\u0435\u0431\u044f!",navigation:t,image:n(157),nextScreen:"SelectCategory"})}var Z=h.a.create({image:{width:250,height:250,marginBottom:"50px",resizeMode:"contain",alignSelf:"center",flex:1,alignItems:"flex-start"}});function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=Object(s.a)(),te=_(_({},m.a),{},{colors:_(_({},m.a.colors),{},{background:"white"})}),ne=function(){return Object(u.jsx)(x.a,{theme:te,children:Object(u.jsxs)(ee.Navigator,{screenOptions:{headerShown:!1},children:[Object(u.jsx)(ee.Screen,{name:"FirstScreen",component:U,options:{headerShown:!1}}),Object(u.jsx)(ee.Screen,{name:"SecondScreen",component:X,options:{headerShown:!1}}),Object(u.jsx)(ee.Screen,{name:"ThirdScreen",component:Y,options:{headerShown:!1}}),Object(u.jsx)(ee.Screen,{name:"SelectCategory",component:A}),Object(u.jsx)(ee.Screen,{name:"SelectGoal",component:R}),Object(u.jsx)(ee.Screen,{name:"DescribeGoal",component:L}),Object(u.jsx)(ee.Screen,{name:"GoalConfigurationFinished",component:q})]})})};Object(s.a)();Object(c.a)((function(){return Object(u.jsxs)(o.b,{children:[Object(u.jsx)(j,{children:Object(u.jsx)(ne,{})}),Object(u.jsx)(i.a,{})]})}))},90:function(e,t,n){e.exports=n.p+"static/media/1.4ef15d43.png"},91:function(e,t,n){e.exports=n.p+"static/media/2.c261a0d2.png"},92:function(e,t,n){e.exports=n.p+"static/media/3.a1928266.png"},93:function(e,t,n){e.exports=n.p+"static/media/4.12a7f8d6.png"},94:function(e,t,n){e.exports=n.p+"static/media/5.c28b749a.png"},95:function(e,t,n){e.exports=n.p+"static/media/6.e24c0b0e.png"},96:function(e,t,n){e.exports=n.p+"static/media/7.e202d3ef.png"},97:function(e,t,n){e.exports=n.p+"static/media/8.b3692b78.png"},98:function(e,t,n){e.exports=n.p+"static/media/9.ad468d65.png"},99:function(e,t,n){e.exports=n.p+"static/media/10.0fa3a093.png"}},[[137,1,2]]]);
//# sourceMappingURL=app.30563a1f.chunk.js.map