(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{114:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(11),r=i.n(c),o=(i(88),i(8)),s=i(73),l=i(122),d=i(121),j=i(139),m=i(141),b={rootUrl:"",isDevelopment:!1};b.isDevelopment||(b.rootUrl="/DngPortfolio");var x=b,h=i(137),p=i(138),u=(i(89),i(63)),O=i(143),g=i(1),f=function(e){var t=Object(l.a)((function(t){return Object(d.a)({root:{paddingTop:t.spacing(2),paddingRight:t.spacing(2),paddingLeft:t.spacing(2),fontSize:e.fontSize,color:"aliceblue"}})}))(),i="string"!==typeof e.effectHook,n=(e.isGlobal?x.rootUrl:"")+e.linkTo;return"none"===e.linkTo&&(n=""),Object(g.jsx)(m.a,{children:Object(g.jsx)(u.a,{style:i?{transition:"none"}:{},in:!i||e.effectHook,children:Object(g.jsxs)(O.a,{disableRipple:!0,href:n,onClick:function(){e.clickAction()},className:t.root+" animatedButton",children:[">","\xa0",e.linkName]})})})};f.defaultProps={effectHook:"none",linkTo:"none",isGlobal:!0,clickAction:function(){}};var k=f,y=Object(l.a)((function(e){return Object(d.a)({buttons:{marginRight:"5vw"},bar:{top:"auto",bottom:0,backgroundColor:"black",borderTop:"0.25vh solid aliceblue"}})})),v=function(e){var t=y(),i=e.pages.map((function(e,i){return Object(g.jsx)(h.a,{item:!0,className:t.buttons,children:Object(g.jsx)(k,{linkName:e.name,linkTo:e.link,fontSize:"1rem"})},i)}));return Object(g.jsx)(p.a,{className:t.bar,children:Object(g.jsx)(h.a,{container:!0,direction:"row",justify:"center",children:i})})},w=(i(95),i(38)),N=Object(w.a)({props:{MuiTextField:{variant:"outlined"}},palette:{primary:{light:"#83D1F7",main:"#83D1F7",dark:"#83D1F7"},secondary:{main:"#5DCF96"}},typography:{button:{textTransform:"none"}}}),S=i(20),C=i(70),z=i(59),T=i(39),B=i(29),A=i(75),D=i(74),P={fontSize:"1rem",padding:2,effectHook:"none",wrapOnXs:!1,defaultWrap:!1,xs:3,sm:!1,md:!1,lg:!1,xl:!1},R=function(e){if("boolean"===typeof e)return e;if("auto"===e)return"auto";var t=e;if(t<=0||12<=t)throw new Error("invalid grid num");return 12-t},H=function(e){var t=Object(l.a)((function(t){return Object(d.a)({root:{fontSize:e.fontSize,padding:t.spacing(e.padding)},title:{},titleColor:{color:t.palette.secondary.main},colon:{textAlign:"center"}})}))(),i=e.propKeyword.map((function(t,i){return Object(g.jsx)(m.a,{marginLeft:1,children:t+(i!==e.propKeyword.length-1?",":"")},i)})),n={xs:e.xs,sm:e.sm,md:e.md,lg:e.lg,xl:e.xl},a={xs:R(n.xs),sm:R(n.sm),md:R(n.md),lg:R(n.lg),xl:R(n.xl)},c="string"!==typeof e.effectHook;if(e.wrapOnXs&&(n.xs=11,a.xs=12),e.defaultWrap)for(var r in Object.keys(n)){a[Object.keys(n)[r]]=12}return Object(g.jsxs)(h.a,{container:!0,alignItems:"flex-start",className:t.root,children:[Object(g.jsx)(u.a,{style:c?{transition:"none"}:{},in:!c||e.effectHook,children:Object(g.jsxs)(h.a,{item:!0,xs:n.xs,sm:n.sm,md:n.md,lg:n.lg,xl:n.xl,className:t.title,children:[Object(g.jsx)("span",{className:t.titleColor,children:e.propName})," :"]})}),Object(g.jsx)(u.a,{style:c?{transition:"none"}:{},in:!c||e.effectHook,children:Object(g.jsx)(h.a,{item:!0,xs:a.xs,sm:a.sm,md:a.md,lg:a.lg,xl:a.xl,container:!0,alignItems:"flex-start",children:Object(g.jsx)(m.a,{display:"flex",flexWrap:"wrap",alignItems:"flex-start",children:i})})})]})};H.defaultProps=P;var E=H,F=function(e){Object(A.a)(i,e);var t=Object(D.a)(i);function i(){return Object(T.a)(this,i),t.apply(this,arguments)}return Object(B.a)(i,[{key:"render",value:function(){var e=this.props,t={marginLeft:e.indent},i=e.info,n=Object.keys(i),a=[];for(var c in n){var r=[],o=i[n[c]];if("string"===typeof o)r.push(o);else{if(!(Array.isArray(o)&&o.length>0&&"string"===typeof o[0]))throw new Error("props can only be string or Array<string>");r=o}a.push(Object(g.jsx)(h.a,{item:!0,xs:12,children:Object(g.jsx)(E,{propName:n[c],propKeyword:r,fontSize:e.fontSize,padding:e.padding,effectHook:e.effectHook,wrapOnXs:e.wrapOnXs,defaultWrap:e.defaultWrap,xs:e.xs,sm:e.sm,md:e.md,lg:e.lg,xl:e.xl})},c))}return Object(g.jsx)(m.a,{style:t,children:a})}}]),i}(a.a.Component);F.defaultProps=P;var L=F,M=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(3),fontSize:"1.5rem"},heading:{color:e.palette.primary.main,fontSize:"5rem"},bracket:{fontSize:"2.5rem"}})})),W="2.5rem",I="10vw",U=function(e){var t=M(),i=Object(n.useRef)(null),a=Object(n.useState)(!1),c=Object(S.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){Object(z.a)(i.current),Object(C.a)(i.current,{showCursor:!1,strings:["Dango"],loop:!1,disableBackTyping:!0,onFinished:function(){setTimeout((function(){o(!0),Object(z.b)(i.current)}),500)}})}),[i]),Object(g.jsxs)(h.a,{container:!0,direction:"row",className:t.root,alignItems:"center",children:[Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,alignItems:"center",children:[Object(g.jsx)(h.a,{item:!0,className:t.heading,id:"#Home1",ref:i}),Object(g.jsx)(u.a,{in:r,children:Object(g.jsxs)(h.a,{item:!0,className:t.bracket,children:["\xa0= ","{"]})})]}),Object(g.jsx)(L,{info:e.info,fontSize:W,indent:I,effectHook:r,wrapOnXs:!0,xs:6,sm:6,md:4}),Object(g.jsx)(u.a,{in:r,children:Object(g.jsx)(h.a,{item:!0,xs:12,children:Object(g.jsx)(m.a,{className:t.bracket,children:"}"})})}),Object(g.jsx)(k,{linkName:"more",linkTo:"/profile",fontSize:"2rem",effectHook:r})]})},G=i(71),J=i(72),V=i.n(J),K=i(144),X=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(2),fontSize:"1.5rem",position:"relative",height:"60vh"},title:{color:e.palette.primary.main,fontSize:"2rem",overflowWrap:"break-word",marginRight:"1rem"},imgSet:{width:"100%",height:"100%",objectFit:"cover"},grids:{paddingLeft:e.spacing(2)},itemTitle:{marginBottom:e.spacing(1)}})})),Z=function(e){var t=X(),i=e.work,n={about:i.about,keyword:i.keyword};return Object(g.jsx)(m.a,{className:t.root,alignItems:"center",children:Object(g.jsxs)(h.a,{container:!0,direction:"row",alignItems:"stretch",children:[Object(g.jsx)(h.a,{item:!0,xs:6,className:t.grids,children:Object(g.jsx)("img",{src:i.imgLink,alt:i.about,className:t.imgSet})}),Object(g.jsxs)(h.a,{item:!0,xs:6,container:!0,direction:"column",className:t.grids,children:[Object(g.jsx)(h.a,{item:!0,className:t.itemTitle,children:Object(g.jsx)("span",{className:t.title,children:i.name})}),Object(g.jsxs)(h.a,{item:!0,children:[" = {",Object(g.jsx)(L,{info:n,padding:.5,indent:"2rem",fontSize:"1.25rem",defaultWrap:!0}),"}"]}),Object(g.jsx)(h.a,{item:!0,children:Object(g.jsx)(k,{linkName:"moreAboutThis",clickAction:function(){e.onClicked()},fontSize:"1.5rem"})})]})]})})},Y=i(140),_=Object(l.a)((function(e){return Object(d.a)({root:{width:"95%",height:"95%",position:"relative"},imgSet:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:"0",left:"0"},bar:{width:"100%",backgroundColor:"rgba(10, 10, 10, 0.8)",position:"absolute",bottom:"0",left:"0"},barGrid:{padding:e.spacing(2)},title:{color:e.palette.primary.main,overflowWrap:"break-word",fontSize:"1rem",fontFamily:"JetBrains Mono"},aboutText:{color:e.palette.secondary.main,overflowWrap:"break-word"},about:{fontSize:"1rem",fontFamily:"JetBrains Mono"},titleGrid:{marginBottom:"1rem"},moreFade:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},morePaper:{backgroundColor:"rgba(0,0,0,0.8)",textAlign:"center",fontSize:"5rem",width:"100%",height:"100%",alignItems:"center"}})})),q=function(e){var t=_(),i=a.a.useState(!1),n=Object(S.a)(i,2),c=n[0],r=n[1],o=e.work,s=void 0!==o.detailComponent;return Object(g.jsxs)(m.a,{className:t.root,onMouseOver:function(){s&&r(!0)},onMouseLeave:function(){r(!1)},onClick:function(){e.onClicked()},children:[Object(g.jsx)("img",{src:o.imgLink,alt:o.name,className:t.imgSet}),Object(g.jsx)(m.a,{className:t.bar,children:Object(g.jsxs)(h.a,{container:!0,direction:"column",className:t.barGrid,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.titleGrid,children:Object(g.jsx)(Y.a,{className:t.title,children:o.name})}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,className:t.about,children:[Object(g.jsx)(h.a,{item:!0,children:"=\xa0"}),Object(g.jsx)(h.a,{item:!0,className:t.aboutText,xs:11,children:o.about})]})]})}),Object(g.jsx)(m.a,{className:t.moreFade,children:Object(g.jsx)(u.a,{in:c,children:Object(g.jsx)(m.a,{className:t.morePaper,display:"flex",alignContent:"center",justifyContent:"center",children:Object(g.jsxs)(m.a,{children:[">","\xa0more"]})})})})]})},Q=i(142),$=Object(l.a)((function(e){return Object(d.a)({root:{},detailWindow:{height:"90vh",width:"90vw",position:"absolute",top:"5vh",left:"5vw",backgroundColor:"black",borderRadius:"10px",overflowY:"auto",outline:"none"}})})),ee=function(e){var t=e.clicked,i=e.work,n=$(),c=i.detailComponent;return Object(g.jsx)(m.a,{className:n.root,children:Object(g.jsx)(Q.a,{open:t,onClose:function(){e.outClick()},closeAfterTransition:!0,"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:Object(g.jsx)(u.a,{in:t,children:Object(g.jsx)(m.a,{className:n.detailWindow,children:a.a.createElement(c)})})})})},te=Object(l.a)((function(e){return Object(d.a)({root:{width:"100%",height:"100%"},nodeRoot:{height:"50vh",width:"100%",paddingLeft:"2.5%",paddingTop:"2.5%"}})}));function ie(e){var t=e.work,i=te(),a=Object(n.useState)(!1),c=Object(S.a)(a,2),r=c[0],o=c[1],s=function(){o(!0)};return Object(g.jsxs)(m.a,{className:i.root,justifyContent:"center",children:[Object(g.jsx)(K.a,{smDown:!0,children:Object(g.jsx)(Z,{work:t,onClicked:s})}),Object(g.jsx)(K.a,{mdUp:!0,children:Object(g.jsx)(m.a,{className:i.nodeRoot,justifyContent:"center",children:Object(g.jsx)(q,{work:t,onClicked:s})})}),Object(g.jsx)(ee,{work:t,clicked:r,outClick:function(){o(!1)}})]})}var ne=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(2),fontSize:"1.5rem"}})})),ae=function(e){var t=ne(),i=e.works.map((function(e,t){return Object(g.jsx)(m.a,{children:Object(g.jsx)(ie,{work:e},t)})}));return Object(g.jsxs)(h.a,{container:!0,className:t.root,direction:"column",children:[Object(g.jsx)(h.a,{item:!0,xs:12,children:Object(g.jsx)(V.a,{children:i})}),Object(g.jsx)(h.a,{item:!0,xs:12,children:Object(g.jsx)(k,{linkName:"more",linkTo:"/works",fontSize:"2rem"})})]})},ce=i.p+"static/media/TMRC.27b4c799.png",re=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(4)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},block:{padding:e.spacing(2),paddingBottom:e.spacing(4)},pala:{paddingBottom:e.spacing(1)},subtitle:{fontSize:"2rem",color:e.palette.secondary.main,paddingBottom:e.spacing(1)},movie:{padding:e.spacing(1),minHeight:"50vh"}})}));var oe=i.p+"static/media/MZSystem.48ada898.png",se=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(4)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},block:{padding:e.spacing(2),paddingBottom:e.spacing(4)},subtitle:{fontSize:"2rem",color:e.palette.secondary.main,paddingBottom:e.spacing(1)},movie:{padding:e.spacing(2),minHeight:"50vh"},imgSet:{width:"100%",height:"100%",objectFit:"contain"}})}));var le=i.p+"static/media/MovingZabuton.91f28696.png",de=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(4)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},block:{padding:e.spacing(2),paddingBottom:e.spacing(4)},blockPadLess:{padding:e.spacing(2)},subtitle:{fontSize:"2rem",color:e.palette.secondary.main,paddingBottom:e.spacing(1)},movie:{padding:e.spacing(2),minHeight:"50vh"},imgSet:{width:"100%",height:"100%",objectFit:"contain"}})}));var je=i.p+"static/media/Locomodachi.47af7fdb.jpg",me=i.p+"static/media/KEJS.1e05ff81.png",be=i.p+"static/media/KEJSystem.9568a26a.png",xe=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(4)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},block:{padding:e.spacing(2),paddingBottom:e.spacing(4)},subtitle:{fontSize:"2rem",color:e.palette.secondary.main,paddingBottom:e.spacing(1)},description:{padding:e.spacing(1)},movie:{padding:e.spacing(2),minHeight:"50vh"},imgSet:{width:"100%",height:"100%",objectFit:"contain"}})}));var he={works:[{name:"Moving Zabuton",about:"AI\u3092\u4f7f\u3063\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e04D\u4f53\u611f\u5ea7\u5e03\u56e3",imgLink:le,keyword:["Python","C/C++","Arduino","ML","Hardware","4D"],detailComponent:function(){var e=se();return Object(g.jsxs)(h.a,{container:!0,className:e.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:e.title,children:"Moving Zabuton"}),Object(g.jsxs)(h.a,{item:!0,xs:12,className:e.block,container:!0,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u300c\u30e0\u30fc\u30d3\u30f3\u30b0\u5ea7\u5e03\u56e3\u300d\u3068\u306f\uff0cAI\u306b\u3088\u3063\u3066\u4eca\u6620\u3063\u3066\u3044\u308b\u52d5\u753b\u304c\u3069\u3093\u306a\u30b7\u30fc\u30f3\u304b\u3092\u628a\u63e1\u3057\uff0c\u305d\u308c\u306b\u5408\u308f\u305b\u3066\u5ea7\u5e03\u56e3\u304c\u9707\u3048\u305f\u308a\uff0c\u6c34\u304c\u51fa\u305f\u308a\u3057\u30664D\uff08\u4f53\u611f\u578b\u6620\u753b\uff09\u98a8\u306b\u76db\u308a\u4e0a\u3052\u3066\u304f\u308c\u308b\u30c7\u30d0\u30a4\u30b9\u3067\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u5ea7\u5e03\u56e3\u3084\u6c34\u306e\u307f\u306a\u3089\u305a\uff0c\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u306e\u5f8c\u308d\u304c\u5149\u3063\u305f\u308a\uff0c\u305d\u3070\u306b\u3042\u308b\u6247\u98a8\u6a5f\u3092\u52d5\u3044\u305f\u308a\u3068\uff0c\u6620\u753b\u9928\u3067\u306f\u3067\u304d\u306a\u3044\uff0c\u5bb6\u306e\u4e2d\u306a\u3089\u3067\u306f\u306e\u8868\u73fe\u3082\u884c\u3063\u3066\u3044\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fGitHub\u3067\u914d\u5e03\u3057\u3066\u3044\u307e\u3059\u3002\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u7684\u306b\u306f\u6620\u753b\u306e\u30b7\u30fc\u30f3\u306b\u5408\u308f\u305b\u3066\u30b7\u30ea\u30a2\u30eb\u4fe1\u53f7\u3092\u767a\u4fe1\u3059\u308b\u3060\u3051\u306a\u306e\u3067\uff0c\u4fe1\u53f7\u306b\u5bfe\u5fdc\u3057\u305f\u30cf\u30fc\u30c9\u3092\u81ea\u4f5c\u3059\u308b\u3053\u3068\u3067\uff0c\u8ab0\u3067\u3082\u30aa\u30ea\u30b8\u30ca\u30eb\u306e\u30e0\u30fc\u30d3\u30f3\u30b0\u5ea7\u5e03\u56e3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"})]}),Object(g.jsx)(h.a,{item:!0,xs:12,md:6,className:e.movie,children:Object(g.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/OjxnwR7rCn8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"\u30e0\u30fc\u30d3\u30f3\u30b0\u5ea7\u5e03\u56e3"})})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,className:e.block,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:12,md:6,className:e.movie,children:Object(g.jsx)("img",{src:oe,alt:"\u30b7\u30b9\u30c6\u30e0",className:e.imgSet})}),Object(g.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u4ed5\u7d44\u307f\u3068\u3057\u3066\u306f\uff0cTV\u7b49\u306e\u6620\u50cf\u6a5f\u5668\u304b\u308910\u79d2\u9593\u9694\u3067\u300c\u97f3\u300d\u3092\u5165\u529b\u3057\uff0c\u305d\u308c\u3092\u5b66\u7fd2\u6e08\u30e2\u30c7\u30eb(AI)\u306b\u901a\u3059\u3053\u3068\u3067\uff0c\u97f3\u3092\u300c\u6c34\u300d\u300c\u885d\u6483\u300d\u300c\u305d\u308c\u4ee5\u5916\u300d\u306b\u5206\u985e\u3057\u307e\u3059\u3002\u3053\u306e\u5224\u5b9a\u7d50\u679c\u3092\u30b7\u30fc\u30f3\u306e\u72b6\u6cc1\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u5224\u5b9a\u304c\u3067\u304d\u305f\u3089\uff0c\u7d50\u679c\u3092\u30b7\u30ea\u30a2\u30eb\u901a\u4fe1(USB\u7b49)\u3067Arduino\u306b\u9001\u308a\u307e\u3059\u3002Arduino\u306b\u7d44\u307e\u308c\u305f\u4fe1\u53f7\u51e6\u7406\u30d7\u30ed\u30b0\u30e9\u30e0\u3088\u3063\u3066\uff0c\u5404\u7a2e\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u304c\u5236\u5fa1\u3055\u308c\uff0c4D\u4f53\u9a13\u3092\u751f\u307f\u51fa\u3057\u307e\u3059\u3002"})]})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:e.subtitle,children:"\u88fd\u4f5c\u6982\u8981"}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,direction:"column",className:e.block,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u88fd\u4f5c\u4eba\u6570"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"4\u4eba"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u4f7f\u7528\u6280\u8853"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"Python(TensorFlow), Arduino(C/C++)"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u62c5\u5f53\u90e8\u5206"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"\u5b66\u7fd2\u30e2\u30c7\u30eb\u4f5c\u6210\uff0c\u672c\u756a\u74b0\u5883\u3067\u306eAI\u7d44\u307f\u8fbc\u307f"})]})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:e.block,children:"\u203b\u7d39\u4ecb\u52d5\u753b\u306f\u51fa\u6f14\u8005\u306b\u8a31\u53ef\u3092\u5f97\u3066\u63b2\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"})]})}},{name:"Tofu Micon Real Cart 4D+VR ~Dead or Alive~",about:"VR\u3068\u73fe\u5b9f\u3067\u5354\u529b\u3057\u3066\u884c\u30464D\u30ec\u30fc\u30b9\u30b2\u30fc\u30e0",imgLink:ce,keyword:["Unity","C/C++","Arduino","VR","Hardware","4D"],detailComponent:function(){var e=re();return Object(g.jsxs)(h.a,{container:!0,className:e.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:e.title,children:"Tofu Micon Real Cart 4D+VR ~Dead or Alive~"}),Object(g.jsxs)(h.a,{item:!0,xs:12,className:e.block,container:!0,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,md:6,className:e.movie,children:[Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"VR\u30b4\u30fc\u30b0\u30eb\u306eOclus Go\u3068Arduino\u3067\u81ea\u4f5c\u3057\u305f\u5c02\u7528\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\uff0c\u53ca\u3073\u89e6\u899a\u30c7\u30d0\u30a4\u30b9\u3092\u7528\u3044\u305fVR\u30ec\u30fc\u30b9\u30b2\u30fc\u30e0\u3067\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"VR\u30b4\u30fc\u30b0\u30eb\u3092\u88ab\u3063\u3066\u8d70\u884c\u59a8\u5bb3\u3092\u3057\u3066\u304f\u308b\u6575\u3092\u5012\u3057\u3066\u3044\u304f\u300c\u30b7\u30e5\u30fc\u30bf\u30fc\u300d\u3068\uff0c\u30ea\u30a2\u30eb\u306e\u30c7\u30a3\u30b9\u30d7\u30ec\u30a4\u3092\u898b\u306a\u304c\u3089\u904b\u8ee2\u3059\u308b\u300c\u30c9\u30e9\u30a4\u30d0\u30fc\u300d\u306e\u4e8c\u4eba\u5354\u529b\u30d7\u30ec\u30a4\u3092\u884c\u3048\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u300c\u30b7\u30e5\u30fc\u30bf\u30fc\u300d\u306fVR\u30b4\u30fc\u30b0\u30eb\u306e\u307f\u306a\u3089\u305a\uff0c\u30b2\u30fc\u30e0\u5185\u3067\u5742\u3092\u767b\u308b\u3068\u6905\u5b50\u304c\u50be\u3044\u305f\u308a\uff0c\u901f\u5ea6\u306b\u3088\u3063\u3066\u6247\u98a8\u6a5f\u306b\u3088\u3063\u3066\u98a8\u3092\u611f\u3058\u305f\u308a\uff0c \u6575\u306b\u3076\u3064\u304b\u308b\u3068\u6905\u5b50\u306b\u4ed5\u8fbc\u307e\u308c\u305f\u30de\u30c3\u30b5\u30fc\u30b8\u6a5f\u304c\u9707\u3048\u305f\u308a\uff0c\u3068\u3044\u3046\u3088\u3046\u306a\u6f14\u51fa\u306b\u3088\u308a\uff0c\u3088\u308a\u30ea\u30a2\u30eb\u306a\u4f53\u9a13\u3092\u5f97\u3089\u308c\u307e\u3059\u3002"})]}),Object(g.jsx)(h.a,{item:!0,xs:12,md:6,className:e.movie,children:Object(g.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/lhPLyWS9gKk",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"TMRC"})})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:e.subtitle,children:"\u88fd\u4f5c\u6982\u8981"}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,direction:"column",className:e.block,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,md:1,xs:2,children:"\u88fd\u4f5c\u4eba\u6570"}),Object(g.jsx)(h.a,{item:!0,md:11,xs:10,children:"2\u4eba"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,md:1,xs:2,children:"\u4f7f\u7528\u6280\u8853"}),Object(g.jsx)(h.a,{item:!0,md:11,xs:10,children:"Unity, Arduino(C/C++)"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,md:1,xs:2,children:"\u62c5\u5f53\u90e8\u5206"}),Object(g.jsx)(h.a,{item:!0,md:11,xs:10,children:"Unity\u30b2\u30fc\u30e0\u88fd\u4f5c\uff08Arduino\u3078\u306e\u30b7\u30ea\u30a2\u30eb\u4fe1\u53f7\u9001\u4fe1\u307e\u3067\uff09"})]})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:e.block,children:"\u203b\u7d39\u4ecb\u52d5\u753b\u306e\u88fd\u4f5c\u8005\u306fDango\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\uff0c\u88fd\u4f5c\u8005\u3068\u51fa\u6f14\u8005\u306b\u8a31\u53ef\u3092\u5f97\u3066\u63b2\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"})]})}},{name:"Locomodachi",about:"\u30b9\u30de\u30db\u3067\u52d5\u304b\u305b\u308b\u84b8\u6c17\u6a5f\u95a2\u8eca",imgLink:je,keyword:["Unity","C/C++","ESP32","Hardware","MobileApp","Mobility"],detailComponent:function(e){var t=de();return Object(g.jsxs)(h.a,{className:t.root,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.title,children:"Locomodachi"}),Object(g.jsxs)(h.a,{item:!0,xs:12,className:t.block,container:!0,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,md:6,container:!0,children:[Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"Locomodachi\u306f\uff0c\u4e57\u8eca\u53ef\u80fd\u3067\u30b9\u30de\u30db\u3067\u5236\u5fa1\u3067\u304d\u308b\u30df\u30cb\u84b8\u6c17\u6a5f\u95a2\u8eca\u3067\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u30df\u30cb\u84b8\u6c17\u6a5f\u95a2\u8eca\u5185\u306e\u4ed5\u7d44\u307f\u306f\u5b9f\u969b\u306e\u84b8\u6c17\u6a5f\u95a2\u8eca\u3068\u540c\u69d8\u306e\u3082\u306e\u306b\u306a\u3063\u3066\u304a\u308a\uff0c\u958b\u767a\u30e1\u30f3\u30d0\u30fc\u304c\u8cfc\u5165\u3057\u305f\u3082\u306e\u3092\u4fee\u7406\u3057\u305f\u3082\u306e\u3092\u96fb\u5b50\u7684\u306b\u64cd\u4f5c\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u30b9\u30de\u30db\u306b\u3088\u3063\u3066\u64cd\u4f5c\u3067\u304d\u308b\u3060\u3051\u3067\u306a\u304f\uff0c\u901f\u5ea6\u8a08\u30fb\u5727\u529b\u8a08\u3082\u5099\u3048\u3066\u3044\u307e\u3059\u3002 \u307e\u305f\uff0c\u84b8\u6c17\u6a5f\u95a2\u8eca\u306e\u52d5\u304f\u4ed5\u7d44\u307f\u3092\u5b66\u7fd2\u3067\u304d\u308b\u3088\u3046\u306b\uff0c\u5185\u90e8\u306e\u84b8\u6c17\u3084\u6a5f\u95a2\u306e\u52d5\u304d\u3092\u898b\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u6280\u8853\u7684\u306b\u306f\uff0c\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u306fUnity\u3092\u7528\u3044\u3066\u958b\u767a\u3057\uff0cBLE\u901a\u4fe1\u3067ESP32\u30de\u30a4\u30b3\u30f3\u306b\u5236\u5fa1\u4fe1\u53f7\u3092\u9001\u3063\u3066\u3044\u307e\u3059\u3002 \u9001\u3089\u308c\u305f\u5236\u5fa1\u4fe1\u53f7\u3092\u3082\u3068\u306b\uff0c\u30b5\u30fc\u30dc\u30e2\u30fc\u30bf\u7b49\u3067\u84b8\u6c17\u6a5f\u95a2\u8eca\u306e\u5404\u7a2e\u64cd\u4f5c\u5f01\u3092\u76f4\u63a5\u64cd\u4f5c\u3057\u3066\u3044\u307e\u3059\u3002 \u307e\u305f\uff0c\u901f\u5ea6\u8a08\u30fb\u5727\u529b\u8a08\u306e\u30c7\u30fc\u30bf\u3082\u540c\u69d8\u306bBLE\u901a\u4fe1\u3067\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u3061\u306a\u307f\u306b\uff0c\u84b8\u6c17\u306e\u5727\u529b\u3092\u6700\u5927\u306b\u3059\u308c\u3070\uff0c\u5408\u8a08150kg\u7a0b\u5ea6\u3092\u8f62\u3044\u3066\u8d70\u884c\u3067\u304d\u307e\u3057\u305f\u3002"})]}),Object(g.jsx)(h.a,{item:!0,xs:12,md:6,className:t.movie,children:Object(g.jsx)("iframe",{title:"Locomodachi",width:"100%",height:"100%",src:"https://www.youtube.com/embed/psbCic9E-XE",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:t.subtitle,children:"\u88fd\u4f5c\u6982\u8981"}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,direction:"column",className:t.block,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u88fd\u4f5c\u4eba\u6570"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"5\u4eba"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u4f7f\u7528\u6280\u8853"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"ESP32(C/C++), Unity(C#)"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u62c5\u5f53\u90e8\u5206"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u4f5c\u6210\uff0c\u30de\u30a4\u30b3\u30f3\u5236\u5fa1\u30d7\u30ed\u30b0\u30e9\u30e0\u4f5c\u6210"})]})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:t.block,children:"\u203b\u7d39\u4ecb\u52d5\u753b\u306e\u88fd\u4f5c\u8005\u306fDango\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\uff0c\u88fd\u4f5c\u8005\u3068\u51fa\u6f14\u8005\u306b\u8a31\u53ef\u3092\u5f97\u3066\u63b2\u8f09\u3057\u3066\u3044\u307e\u3059\u3002"})]})}},{name:"Robot Referee of KENDO",about:"\u5263\u9053\u306e\u96fb\u5b50\u5be9\u5224\u6a5f",imgLink:me,keyword:["Unity","C/C++","ESP32","Hardware","Sports"],detailComponent:function(e){var t=xe();return Object(g.jsxs)(h.a,{container:!0,className:t.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.title,children:"Robot Referee of KENDO"}),Object(g.jsxs)(h.a,{item:!0,xs:12,className:t.block,container:!0,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,md:6,className:t.description,children:[Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"Robot Referee of KENDO\u306f\uff0c\u5263\u9053\u306b\u304a\u3051\u308b\u5be9\u5224\u3092\u88dc\u52a9\u3059\u308b\u30c7\u30d0\u30a4\u30b9\u3067\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u5c0f\u624b\u3084\u80f4\u306e\u9632\u5177\u306b\u3064\u3051\u3089\u308c\u305f\u5727\u529b\u30bb\u30f3\u30b5\u3068\uff0c\u7af9\u5200\u306b\u3064\u3051\u3089\u308c\u305f\u5727\u529b\u30bb\u30f3\u30b5\u304b\u3089\u5f97\u3089\u308c\u305f\u60c5\u5831\u3092\u7528\u3044\u3066\uff0c\u5341\u5206\u306a\u5f37\u3055\u3067\u9069\u5207\u306a\u5834\u6240\u3092\u6253\u7a81\u3067\u304d\u305f\u304b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u5224\u5b9a\u7d50\u679c\u306fPC\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084Web\u30a2\u30d7\u30ea\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\uff0c\u898b\u3084\u3059\u3044\u5f62\u3067\u89b3\u5ba2\u3084\u5be9\u5224\u306b\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"})]}),Object(g.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(g.jsx)("img",{src:me,alt:"KEJS",className:t.imgSet})})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,className:t.block,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(g.jsx)("img",{src:be,alt:"system",className:t.imgSet})}),Object(g.jsxs)(h.a,{item:!0,xs:12,md:6,className:t.description,children:[Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u6280\u8853\u7684\u306a\u8a73\u7d30\u3068\u3057\u3066\u306f\uff0c\u9632\u5177\u30fb\u7af9\u5200\u305d\u308c\u305e\u308c\u306b\u4e00\u3064\u305a\u3064ESP32\uff0c\u3055\u3089\u306bPC\u5074\u306b\u53d7\u4fe1\u6a5f\u3068\u3057\u3066\u3082\u3046\u4e00\u3064ESP32\u304c\u4ed8\u3051\u3089\u308c\u3066\u304a\u308a\uff0c\u305d\u308c\u3089\u304c\u5354\u8abf\u3057\u3066\u52d5\u4f5c\u3057\u3066\u3044\u307e\u3059\u3002"}),Object(g.jsx)(Y.a,{variant:"body1",align:"justify",paragraph:!0,children:"\u7af9\u5200\u3084\u9632\u5177\u306e\u5727\u529b\u30bb\u30f3\u30b5\u306e\u5024\u304c\u898f\u5b9a\u5024\u3092\u8d85\u3048\u305f\u5834\u5408\uff0cESP32\u304b\u3089ESP-NOW\u306b\u3088\u3063\u3066\u53d7\u4fe1\u6a5f\u306b\u4fe1\u53f7\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002 \u53d7\u4fe1\u6a5f\u5074\u306f\uff0c\u4fe1\u53f7\u3092\u53d7\u3051\u53d6\u3063\u305f\u6642\u9593\u304c\u898f\u5b9a\u5024\u4ee5\u5185\u306a\u3089PC\u3084\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u6253\u7a81\u60c5\u5831\u3092\u9001\u4fe1\u3057\uff0c\u5404\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u6253\u7a81\u6f14\u51fa\u3092\u304a\u3053\u306a\u3044\u307e\u3059\u3002"})]})]}),Object(g.jsx)(h.a,{item:!0,xs:12,className:t.subtitle,children:"\u88fd\u4f5c\u6982\u8981"}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,direction:"column",className:t.block,children:[Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u88fd\u4f5c\u4eba\u6570"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"5\u4eba"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u4f7f\u7528\u6280\u8853"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"ESP32(C/C++), Unity(C#)"})]}),Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,children:[Object(g.jsx)(h.a,{item:!0,xs:2,md:1,children:"\u62c5\u5f53\u90e8\u5206"}),Object(g.jsx)(h.a,{item:!0,xs:10,md:11,children:"\u30de\u30a4\u30b3\u30f3\u5236\u5fa1\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u4f5c\u6210\uff0cPC\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210"})]})]})]})}}],isMaking:!0},pe=Object(l.a)((function(e){return Object(d.a)({root:{},top:{paddingTop:"10vh",marginBottom:"25vh"},worksPreview:{paddingBottom:"15vh"}})})),ue=function(e){var t=pe();return Object(g.jsxs)("div",{children:[Object(g.jsx)(m.a,{className:t.top,children:Object(g.jsx)(U,{info:G})}),Object(g.jsx)(m.a,{className:t.worksPreview,children:Object(g.jsx)(ae,{works:he.works})})]})},Oe=Object(l.a)((function(e){return Object(d.a)({root:{fontSize:"1.5rem",padding:e.spacing(2)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},bracket:{marginTop:"1rem"}})})),ge="1.5rem",fe="10vw",ke=function(e){var t=Oe(),i=e.info;return Object(g.jsxs)(h.a,{container:!0,direction:"row",className:t.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.title,children:"Dango.info"}),Object(g.jsx)(h.a,{item:!0,xs:12,className:t.bracket,children:"{"}),Object(g.jsx)(h.a,{item:!0,xs:12,children:Object(g.jsx)(L,{info:i,fontSize:ge,indent:fe,xs:4,sm:3,md:2})}),Object(g.jsx)(h.a,{item:!0,xs:12,children:"}"})]})},ye=Object(l.a)((function(e){return Object(d.a)({root:{fontSize:"1.5rem",padding:e.spacing(2)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},descArea:{padding:e.spacing(2)}})})),ve=function(e){var t=ye(),i=e.desc.map((function(e,t){return Object(g.jsxs)(h.a,{xs:12,item:!0,children:["\xa0\xa0",e]},t)}));return Object(g.jsxs)(h.a,{item:!0,xs:12,container:!0,direction:"row",className:t.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.title,children:" Dango.profile "}),Object(g.jsx)(h.a,{item:!0,xs:12,container:!0,className:t.descArea,children:i})]})},we=i(52),Ne="2rem",Se=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(2),fontSize:"1.5rem"},content:{padding:e.spacing(2)},buttonGrid:{marginTop:e.spacing(2)},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"}})})),Ce=function(e){var t=Se(),i=e.sns.map((function(e,i){return Object(g.jsx)(h.a,{item:!0,xs:6,sm:4,md:3,className:t.buttonGrid,children:Object(g.jsx)(k,{linkName:e.name,linkTo:e.link,fontSize:Ne})},i)}));return Object(g.jsxs)(h.a,{container:!0,className:t.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.title,children:"Dango.contact"}),Object(g.jsx)(h.a,{item:!0,xs:12,container:!0,direction:"row",className:t.content,children:i})]})},ze=Object(l.a)((function(e){return Object(d.a)({root:{paddingBottom:"10vh"}})})),Te=function(e){var t=ze();return Object(g.jsxs)(h.a,{container:!0,className:t.root,children:[Object(g.jsx)(ke,{info:we.info}),Object(g.jsx)(ve,{desc:we.profile}),Object(g.jsx)(Ce,{sns:we.contact})]})},Be=i(65),Ae=i(64),De=Object(Be.a)((function(e){return Object(Ae.a)({root:{width:"100%",height:"100%"}})})),Pe=function(e){var t=De(),i=e.work,a=Object(n.useState)(!1),c=Object(S.a)(a,2),r=c[0],o=c[1];return Object(g.jsxs)(m.a,{className:t.root,children:[Object(g.jsx)(q,{work:i,onClicked:function(){o(!0)}}),Object(g.jsx)(ee,{work:i,clicked:r,outClick:function(){o(!1)}})]})},Re=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(2)},workGrid:{height:"50vh"}})})),He=function(e){var t=Re(),i=e.works.map((function(e,i){return Object(g.jsx)(h.a,{item:!0,xs:12,md:6,className:t.workGrid,children:Object(g.jsx)(Pe,{work:e})},i)}));return Object(g.jsx)(h.a,{container:!0,direction:"row",className:t.root,children:i})},Ee=Object(l.a)((function(e){return Object(d.a)({root:{padding:e.spacing(2),fontSize:"1.5rem"},title:{fontSize:"3rem",color:e.palette.primary.main,borderBottom:"0.5vh solid aliceblue"},comingSoon:{textAlign:"center",paddingBottom:e.spacing(2)}})})),Fe=function(e){var t=Ee(),i=Object(g.jsx)(h.a,{item:!0,xs:12,className:t.comingSoon,children:e.isMaking?"More works are coming soon...":""});return Object(g.jsxs)(h.a,{container:!0,className:t.root,children:[Object(g.jsx)(h.a,{item:!0,xs:12,className:t.title,children:"Works"}),Object(g.jsx)(h.a,{item:!0,xs:12,children:Object(g.jsx)(He,{works:e.works})}),i]})},Le=[{name:"Home",link:"/",component:ue,exact:!0},{name:"Profile",link:"/profile",component:Te,exact:!1},{name:"Works",link:"/works",component:function(e){var t=he.works;return Object(g.jsx)(m.a,{children:Object(g.jsx)(Fe,{works:t,isMaking:he.isMaking})})},exact:!1}],Me=Object(l.a)((function(e){return Object(d.a)({root:{backgroundColor:"#282c34"}})}));var We=function(){var e=Me(),t=Le.map((function(e,t){return Object(g.jsx)(o.b,{exact:e.exact,path:e.link,component:e.component},t)}));return Object(g.jsx)(m.a,{className:"App "+e.root,children:Object(g.jsxs)(j.a,{theme:N,children:[Object(g.jsx)(m.a,{minHeight:"100vh",children:Object(g.jsx)(s.a,{basename:x.isDevelopment?"":"/DngPortfolio",children:Object(g.jsxs)(o.d,{children:[t,Object(g.jsx)(o.a,{to:"/"})]})})}),Object(g.jsx)(v,{pages:Le})]})})},Ie=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,146)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(We,{})}),document.getElementById("root")),Ie()},52:function(e){e.exports=JSON.parse('{"info":{"hs":"Tokyo Tech High School of Science and Technology","univ":"keio SFC / Environment and Information","lang":["C/C++","C#","Java","JS","Python"],"skill":["Arduino","Unity","TensorFlow","Vue.js","React"],"hobby":["Anime","Game","Programming"]},"profile":["\u3044\u308d\u3093\u306aIT\u6280\u8853\u3092\u5e83\u304f\u6d45\u304f\u3084\u3063\u3066\u307e\u3059\u3002AI+\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u307f\u305f\u3044\u306b\u3044\u308d\u3093\u306a\u6280\u8853\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3082\u306e\u3065\u304f\u308a\u3092\u3059\u308b\u306e\u304c\u597d\u304d\u3002","\u5c06\u6765\u7684\u306b\u3082\u3063\u3068\u624b\u8efd\u306b\u3082\u306e\u3065\u304f\u308a\u3092\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u308a\uff0c\u30e6\u30fc\u30b6\u304b\u3089\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u304c\u53d7\u3051\u3084\u3059\u3044\u3082\u306e\u3065\u304f\u308a\u306e\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3092\u4f5c\u308a\u305f\u3044\u3002","\u73fe\u5728Web\u7cfb\u3092\u5b66\u7fd2\u4e2d\u3002\u8fd1\u65e5\u4e2d\u306b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u30a4\u30f3\u30d5\u30e9\u7cfb\u3092\u52c9\u5f37\u4e88\u5b9a\u3002\u3042\u3089\u304b\u305f\u4f7f\u3048\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3089Flutter\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u3084\u308a\u305f\u3044\u3002"],"history":[["\u5c0f4","JS\u3067\u521d\u3081\u3066\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306b\u89e6\u308c\u308b"],["\u4e2d1","\u72ec\u5b66\u3067Java\u3092\u59cb\u3081\uff0c\u6cbc\u306b\u306f\u307e\u308b"],["\u4e2d2","\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b9\u30af\u30fc\u30eb\u3067Unity\u3092\u59cb\u3081\uff0c\u3055\u3089\u306b\u6cbc\u306b\u306f\u307e\u308b"],["\u9ad81","Arduino\u3067\u96fb\u5b50\u5de5\u4f5c\u306e\u6cbc\u306b\u306f\u307e\u308b\u3002"],["\u9ad82","\u97d3\u56fd\u3068\u30bf\u30a4\u3067\u7814\u7a76\u767a\u8868\u3002\u3064\u3044\u3067\u306bVR\u306b\u3061\u3087\u3063\u3068\u624b\u3092\u51fa\u3059\u3002"],["\u9ad83\u524d\u534a","\u8ab2\u984c\u7814\u7a76\u3067\u6a5f\u68b0\u5b66\u7fd2(AI)\u306b\u624b\u3092\u51fa\u3059\u3002Yahoo!Japan\u4e3b\u50ac\u306eOpen Hack U 2020 Online Vol.1\u3067Happy Hacking\u8cde\u3092\u53d7\u8cde\u3002"],["\u9ad83\u5f8c\u534a","\u53d7\u9a13\u7d42\u4e86\u5f8c\uff0cWeb\u7cfb(\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9)\u306b\u624b\u3092\u51fa\u3059\u3002"]],"contact":[{"name":"Twitter","icon":"send","link":"https://twitter.com/publicClassMain"},{"name":"GitHub","icon":"git_hub","link":"https://github.com/NV7150"}]}')},71:function(e){e.exports=JSON.parse('{"jobs":["Student","Engineer"],"keywords":["Web","VR","4D","Games","ML","Electronics"]}')},88:function(e,t,i){},89:function(e,t,i){},95:function(e,t,i){}},[[114,1,2]]]);
//# sourceMappingURL=main.be671de6.chunk.js.map