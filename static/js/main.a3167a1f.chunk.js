(this.webpackJsonptnc_interview=this.webpackJsonptnc_interview||[]).push([[0],{214:function(e,a,t){e.exports=t(224)},219:function(e,a,t){},224:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(41),i=t.n(r),c=(t(219),t(192)),o=t(308),m=t(309),s=t(43),u=t(179),d=Object(n.createContext)(),p=Object(n.createContext)(),E=function(e,a){switch(a.type){case"TOGGLE_THEME":return Object(u.a)(Object(u.a)({},e),{},{currentTheme:a.theme});default:throw new Error("Unhandled action type: ".concat(a.type))}},h=function(e){var a=e.children,t=Object(n.useReducer)(E,{currentTheme:null==window.localStorage.getItem("theme")?"light":window.localStorage.getItem("theme")}),r=Object(s.a)(t,2),i=r[0],c=r[1];return l.a.createElement(p.Provider,{value:c},l.a.createElement(d.Provider,{value:i},a))},g=function(){return Object(n.useContext)(d)},f=t(284),b=t(269),w=t(267),v=t(37),y=t(17),P=t(315),C=t(271),L=t(180),N=t.n(L),O=t(181),x=t.n(O),j=t(272),k=t(226),T=t(273),S=t(274),R=t(191),H=t.n(R),A=t(190),B=t.n(A),I=Object(w.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(v.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1})}})),F=function(){var e,a,t=I(),r=Object(n.useState)(!1),i=Object(s.a)(r,2),c=i[0],o=i[1],m=Object(n.useContext)(p),u=g().currentTheme;return l.a.createElement(P.a,{variant:"permanent",className:Object(y.a)(t.drawer,(e={},Object(v.a)(e,t.drawerOpen,c),Object(v.a)(e,t.drawerClose,!c),e)),classes:{paper:Object(y.a)((a={},Object(v.a)(a,t.drawerOpen,c),Object(v.a)(a,t.drawerClose,!c),a))}},l.a.createElement(C.a,null),l.a.createElement(j.a,null,l.a.createElement(k.a,{button:!0,onClick:function(){o(!c)}},l.a.createElement(T.a,null,l.a.createElement(B.a,null)),l.a.createElement(S.a,{primary:"Minimize Drawer"})),l.a.createElement(k.a,{button:!0,onClick:function(){m("dark"===u?{type:"TOGGLE_THEME",theme:"light"}:{type:"TOGGLE_THEME",theme:"dark"})}},l.a.createElement(T.a,null,l.a.createElement(H.a,null)),l.a.createElement(S.a,{primary:"Toggle Theme"})),l.a.createElement(C.a,null),["item1","item2","item3","item4"].map((function(e,a){return l.a.createElement(k.a,{button:!0,key:e},l.a.createElement(T.a,null,a%2===0?l.a.createElement(N.a,null):l.a.createElement(x.a,null)),l.a.createElement(S.a,{primary:e}))}))),l.a.createElement(C.a,null),l.a.createElement(j.a,null,["item5","item6","item7"].map((function(e,a){return l.a.createElement(k.a,{button:!0,key:e},l.a.createElement(T.a,null,a%2===0?l.a.createElement(N.a,null):l.a.createElement(x.a,null)),l.a.createElement(S.a,{primary:e}))}))))},z=t(276),M=t(277),D=t(278),G=t(279),Y=t(319),U=t(316),V=t(275),X=Object(w.a)((function(e){return{table:{"& tbody td":{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},"& tbody tr:hover":{backgroundColor:"light"===e.palette.type?"#191736 !important":"#303030 !important",cursor:"pointer"},"& tbody tr:nth-child(odd)":{backgroundColor:"light"===e.palette.type?"#191736 !important":"#303030 !important"},"& th":{borderBottom:"none"}}}}));function _(e,a,t){var r=X(),i=Object(n.useState)(),c=Object(s.a)(i,2),o=c[0],m=c[1],u=Object(n.useState)(),d=Object(s.a)(u,2),p=d[0],E=d[1];function h(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}return{TblContainer:function(e){return l.a.createElement(V.a,null,l.a.createElement(z.a,{className:r.table},e.children))},TblHead:function(e){return l.a.createElement(M.a,null,l.a.createElement(D.a,null,a.map((function(e){return l.a.createElement(G.a,{key:e.id,sortDirection:p===e.id&&o},e.disableSorting?e.label:l.a.createElement(Y.a,{active:!0,direction:p===e.id?o:"asc",onClick:function(){var a;a=e.id,m(p===a&&"asc"===o?"desc":"asc"),E(a)}},e.label))}))))},TblPagination:function(){return l.a.createElement(U.a,{component:"div",count:e.length})},recordsAfterPagingAndSorting:function(){return function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(t.fn(e),function(e,a){return"desc"===e?function(e,t){return h(e,t,a)}:function(e,t){return-h(e,t,a)}}(o,p))}}}var W=t(287),$=t(227),J=t(286),K=t(313),Q=t(285),q=t(288),Z=t(289),ee=t(290),ae=t(291),te=t(292),ne=t(293),le=t(172),re=Object(w.a)((function(e){return{searchInput:{width:"50%",margin:"0"},buttonGroup:{backgroundColor:e.palette.background.default,padding:e.spacing(1)},title:{marginBottom:e.spacing(1)},centered:{display:"flex",alignItems:"center"}}})),ie=[{id:"name",label:"Name"},{id:"price",label:"Price"},{id:"change",label:"Change"}],ce=[{id:1,name:"BTC",price:"1232.00",change:"1.82",gainLoss:"up",favorite:!0},{id:2,name:"ETH",price:"1334.00",change:"0.52",gainLoss:"down",favorite:!0},{id:3,name:"LSK",price:"1234.00",change:"0",gainLoss:"same",favorite:!1},{id:4,name:"DASH",price:"4353.00",change:"2",gainLoss:"up",favorite:!1},{id:5,name:"XRP",price:"1341.00",change:"12",gainLoss:"up",favorite:!0},{id:6,name:"ETH",price:"141.00",change:"11",gainLoss:"up",favorite:!0},{id:7,name:"LSK",price:"15345.00",change:"9",gainLoss:"up",favorite:!1},{id:8,name:"DASH",price:"1323.00",change:"6.4",gainLoss:"up",favorite:!0}],oe=function(){var e=re(),a=Object(n.useState)("PLN"),t=Object(s.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)({fn:function(e){return e}}),o=Object(s.a)(c,2),m=o[0],u=o[1],d=_(ce,ie,m),p=d.TblContainer,E=d.TblHead,h=d.recordsAfterPagingAndSorting;return l.a.createElement(l.a.Fragment,null,l.a.createElement(le.a,{className:e.title,variant:"h5",component:"h5"},"Markets: ETH/",r),l.a.createElement(f.a,{container:!0,spacing:1,alignItems:"flex-end"},l.a.createElement(f.a,{item:!0,sm:1},l.a.createElement(Q.a,null)),l.a.createElement(f.a,{item:!0,sm:4},l.a.createElement(K.a,{onChange:function(e){var a=e.target;u({fn:function(e){return""===a.value?e:e.filter((function(e){return e.name.toLowerCase().includes(a.value)}))}})},label:"Search.."})),l.a.createElement(f.a,{item:!0,sm:7},l.a.createElement(J.a,{className:e.buttonGroup,color:"primary",variant:"text",disableElevation:!0},l.a.createElement($.a,{onClick:function(){return i("PLN")},variant:"PLN"===r&&"contained"},"PLN"),l.a.createElement($.a,{onClick:function(){return i("EUR")},variant:"EUR"===r&&"contained"},"EUR"),l.a.createElement($.a,{onClick:function(){return i("USD")},variant:"USD"===r&&"contained"},"USD"),l.a.createElement($.a,{onClick:function(){return i("BTC")},variant:"BTC"===r&&"contained"},"BTC")))),l.a.createElement(p,null,l.a.createElement(E,null),l.a.createElement(W.a,null,h().map((function(a){return l.a.createElement(D.a,{key:a.id},l.a.createElement(G.a,null,l.a.createElement("span",{className:e.centered},l.a.createElement(q.a,{color:"primary",fontSize:"small",style:{marginRight:"5px"}})," ",a.name)),l.a.createElement(G.a,null,a.price),l.a.createElement(G.a,null,l.a.createElement("span",{className:e.centered},"up"===a.gainLoss?l.a.createElement(Z.a,{style:{marginRight:"5px",color:"#008000"}}):"down"===a.gainLoss?l.a.createElement(ee.a,{color:"error",style:{marginRight:"5px"}}):l.a.createElement(ae.a,{color:"disabled",style:{marginRight:"5px"}}),a.change," %")),l.a.createElement(G.a,null,a.favorite?l.a.createElement(te.a,{style:{color:"#E2D002"},fontSize:"small"}):l.a.createElement(ne.a,{fontSize:"small"})))})))))},me=t(317),se=t(294),ue=t(295),de=Object(w.a)((function(e){return{titleContainer:{display:"flex",justifyContent:"space-between"},descriptionContainer:{display:"flex",justifyContent:"space-between",margin:"5px auto"},title:{marginBottom:e.spacing(1)},centered:{display:"flex",alignItems:"center"}}})),pe=[{id:"rate",label:"Rate"},{id:"amountEth",label:"Amount ETH"},{id:"pricePln",label:"Price PLN"}],Ee=[{id:1,rate:"0.31242",amountEth:"29.13214",pricePln:"2.3542",gainLoss:"up"},{id:2,rate:"0.123314",amountEth:"21.3131",pricePln:"5.62",gainLoss:"down"},{id:3,rate:"0.85434",amountEth:"12.12324",pricePln:"1.23",gainLoss:"up"},{id:4,rate:"0.12341",amountEth:"12.12324",pricePln:"1.23",gainLoss:"up"},{id:5,rate:"0.45352",amountEth:"14.12324",pricePln:"2.23",gainLoss:"up"},{id:6,rate:"0.64735",amountEth:"42.2341",pricePln:"6.23",gainLoss:"same"}],he=function(){var e=de(),a=_(Ee,pe,{fn:function(e){return e}}),t=a.TblContainer,n=a.TblHead,r=a.recordsAfterPagingAndSorting;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:e.titleContainer},l.a.createElement(le.a,{className:e.title,variant:"h5",component:"h5"},"MyOrders"),l.a.createElement(me.a,{clickable:!0,label:"View All"})),l.a.createElement(t,null,l.a.createElement(n,null),l.a.createElement(W.a,null,r().map((function(a){return l.a.createElement(D.a,{key:a.id},l.a.createElement(G.a,null,l.a.createElement("span",{className:e.centered},"up"===a.gainLoss?l.a.createElement(se.a,{fontSize:"small",style:{marginRight:"5px"}}):"down"===a.gainLoss?l.a.createElement(ae.a,{fontSize:"small",style:{marginRight:"5px"}}):l.a.createElement(ae.a,{fontSize:"small",color:"disabled",style:{marginRight:"5px"}}),a.rate)),l.a.createElement(G.a,null,a.amountEth),l.a.createElement(G.a,null,l.a.createElement("span",{className:e.centered},a.pricePln)),l.a.createElement(G.a,null,l.a.createElement(ue.a,{fontSize:"small"})))})))),l.a.createElement("div",{className:e.descriptionContainer},l.a.createElement($.a,{variant:"text",className:e.centered},l.a.createElement(ae.a,{fontSize:"small"}),"Limit Offer"),l.a.createElement($.a,{variant:"text",className:e.centered},l.a.createElement(se.a,{fontSize:"small"}),"Stop Offer")))},ge=Object(w.a)((function(e){return{titleContainer:{display:"flex",justifyContent:"space-between"},descriptionContainer:{display:"flex",justifyContent:"space-between",margin:"5px auto"},title:{marginBottom:e.spacing(1)},centered:{display:"flex",alignItems:"center"}}})),fe=[{id:"ratePln",label:"Rate PLN"},{id:"amountEth",label:"Amount ETH"},{id:"when",label:"When"}],be=[{id:1,ratePln:"2314.66",amountEth:"0.036734",when:"37 sec",gainLoss:"up"},{id:2,ratePln:"3452.42",amountEth:"0.012734",when:"12 sec",gainLoss:"down"},{id:3,ratePln:"1634.24",amountEth:"0.098734",when:"41 sec",gainLoss:"same"},{id:4,ratePln:"6634.24",amountEth:"0.098734",when:"41 sec",gainLoss:"up"},{id:5,ratePln:"4634.24",amountEth:"0.048734",when:"11 sec",gainLoss:"up"},{id:6,ratePln:"3634.24",amountEth:"0.058734",when:"21 sec",gainLoss:"up"},{id:7,ratePln:"9834.24",amountEth:"0.098734",when:"51 sec",gainLoss:"down"}],we=function(){var e=ge(),a=_(be,fe,{fn:function(e){return e}}),t=a.TblContainer,n=a.TblHead,r=a.recordsAfterPagingAndSorting;return l.a.createElement(l.a.Fragment,null,l.a.createElement(le.a,{className:e.title,variant:"h5",component:"h5"},"Latest Transactions"),l.a.createElement(t,null,l.a.createElement(n,null),l.a.createElement(W.a,null,r().map((function(a){return l.a.createElement(D.a,{key:a.id},l.a.createElement(G.a,null,l.a.createElement("span",{className:e.centered},"up"===a.gainLoss?l.a.createElement(Z.a,{style:{marginRight:"5px",color:"#008000"}}):"down"===a.gainLoss?l.a.createElement(ee.a,{color:"error",style:{marginRight:"5px"}}):l.a.createElement(ae.a,{color:"disabled",style:{marginRight:"5px"}}),a.ratePln)),l.a.createElement(G.a,null,a.amountEth),l.a.createElement(G.a,null,a.when))})))))},ve=t(296),ye=Object(w.a)((function(e){return{titleContainer:{display:"flex",justifyContent:"space-between"},descriptionContainer:{display:"flex",justifyContent:"space-between",margin:"5px auto"},title:{marginBottom:e.spacing(1)},centered:{display:"flex",alignItems:"center"}}})),Pe=[{id:"ratePln",label:"Rate PLN"},{id:"amountEth",label:"Amount ETH"},{id:"pricePln",label:"Price PLN"}],Ce=[{id:1,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:2,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:3,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:4,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:5,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:6,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:7,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"}],Le=function(){var e=ye(),a=_(Ce,Pe,{fn:function(e){return e}}),t=a.TblContainer,n=a.TblHead,r=a.recordsAfterPagingAndSorting;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:e.titleContainer},l.a.createElement(le.a,{className:e.title,variant:"h5",component:"h5"},"Buy Orders"),l.a.createElement("span",null,"Total: ",l.a.createElement("b",null,"8782.223")," ETH")),l.a.createElement(t,null,l.a.createElement(n,null),l.a.createElement(W.a,null,r().map((function(e){return l.a.createElement(D.a,{key:e.id},l.a.createElement(G.a,{style:{color:"#008000"}},e.ratePln),l.a.createElement(G.a,null,e.amountEth),l.a.createElement(G.a,null,e.pricePln),l.a.createElement(G.a,null,l.a.createElement(ve.a,{fontSize:"small"})))})))))},Ne=Object(w.a)((function(e){return{titleContainer:{display:"flex",justifyContent:"space-between"},descriptionContainer:{display:"flex",justifyContent:"space-between",margin:"5px auto"},title:{marginBottom:e.spacing(1)},centered:{display:"flex",alignItems:"center"}}})),Oe=[{id:"ratePln",label:"Rate PLN"},{id:"amountEth",label:"Amount ETH"},{id:"pricePln",label:"Price PLN"}],xe=[{id:1,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:2,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:3,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:4,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:5,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:6,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"},{id:7,ratePln:"2345.67",amountEth:"0.05234",pricePln:"12345.67",gainLoss:"up"}],je=function(){var e=Ne(),a=_(xe,Oe,{fn:function(e){return e}}),t=a.TblContainer,n=a.TblHead,r=a.recordsAfterPagingAndSorting;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:e.titleContainer},l.a.createElement(le.a,{className:e.title,variant:"h5",component:"h5"},"Sell Orders"),l.a.createElement("span",null,"Total: ",l.a.createElement("b",null,"12331.223")," ETH")),l.a.createElement(t,null,l.a.createElement(n,null),l.a.createElement(W.a,null,r().map((function(e){return l.a.createElement(D.a,{key:e.id},l.a.createElement(G.a,{style:{color:"#F44336"}},e.ratePln),l.a.createElement(G.a,null,e.amountEth),l.a.createElement(G.a,null,e.pricePln),l.a.createElement(G.a,null,l.a.createElement(ve.a,{fontSize:"small"})))})))))},ke=t(297),Te=t(298),Se=t(299),Re=t(280),He=t(193),Ae=t(281),Be=Object(w.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",alignItems:"center"},dataContainer:{display:"flex",justifyContent:"center",alignItems:"center",margin:e.spacing(0,2)},dataContainerRight:{marginLeft:e.spacing(2)},paper:{padding:e.spacing(2,1),backgroundColor:e.palette.background.default}}})),Ie=["menu item 1","menu item 2","menu item 3","menu item 4"],Fe=function(){var e=Be(),a=l.a.useState(null),t=Object(s.a)(a,2),n=t[0],r=t[1],i=Boolean(n),c=function(){r(null)};return l.a.createElement("div",{className:e.container},l.a.createElement("div",{className:e.dataContainer},l.a.createElement(q.a,null),l.a.createElement("div",{className:e.dataContainerRight},l.a.createElement("span",null,l.a.createElement("b",null,"2.3453534.123 PLN"))," ",l.a.createElement("br",null),l.a.createElement("small",null,"Last Trade Price"))),l.a.createElement("div",{className:e.dataContainer},l.a.createElement(ke.a,null),l.a.createElement("div",{className:e.dataContainerRight},l.a.createElement("span",{style:{color:"#008000"}},l.a.createElement("b",null,"+24.78%"))," ",l.a.createElement("br",null),l.a.createElement("small",null,"Price (24h)"))),l.a.createElement("div",{className:e.dataContainer},l.a.createElement(Te.a,null),l.a.createElement("div",{className:e.dataContainerRight},l.a.createElement("span",null,l.a.createElement("b",null,"6.76325313 ETH"))," ",l.a.createElement("br",null),l.a.createElement("small",null,"Volume (24h)"))),l.a.createElement(b.a,{className:e.paper,style:{marginLeft:"auto",marginRight:"1rem"}},l.a.createElement("div",{className:e.dataContainer},l.a.createElement(Te.a,null),l.a.createElement("div",{className:e.dataContainerRight},l.a.createElement("span",null,l.a.createElement("b",null,"6.76325313")," ETH")," ",l.a.createElement("br",null),l.a.createElement("b",null,"840.13")," PLN"))),l.a.createElement(b.a,{className:e.paper},l.a.createElement("div",{className:e.dataContainer},l.a.createElement(Se.a,null),l.a.createElement("div",{className:e.dataContainerRight},l.a.createElement("b",null,"Mateusz Piatek")," ",l.a.createElement("br",null),l.a.createElement("b",{style:{color:"#008000"}},"Verified")),l.a.createElement(Re.a,{"aria-label":"more","aria-controls":"menu-dropdown","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},l.a.createElement(ee.a,null)),l.a.createElement(He.a,{id:"menu-dropdown",anchorEl:n,keepMounted:!0,open:i,onClose:c},Ie.map((function(e){return l.a.createElement(Ae.a,{key:e,onClick:c},e)}))))))},ze=t(14),Me=t(301),De=t(302),Ge=t(311),Ye=t(300),Ue=t(310),Ve=Object(w.a)((function(e){return{root:{marginBottom:e.spacing(2)},infoContainer:{margin:e.spacing(3,3)},paper:{padding:e.spacing(2),margin:"0"},chip:{backgroundColor:e.palette.background.default,color:"#fff"}}}));function Xe(e){var a=e.children,t=e.value,n=e.index,r=Object(ze.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),t===n&&l.a.createElement(Ue.a,null,a))}var _e=function(){var e=Ve(),a=l.a.useState(0),t=Object(s.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",{className:e.root},l.a.createElement("div",null,l.a.createElement(Ge.a,{value:n,onChange:function(e,a){r(a)},indicatorColor:"primary",textColor:"primary"},l.a.createElement(Ye.a,{label:"Market Order"}),l.a.createElement(Ye.a,{label:"Limit Order"}),l.a.createElement(Ye.a,{label:"Stop Market"}))),l.a.createElement(b.a,null,l.a.createElement(Xe,{value:n,index:0},l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,md:6},l.a.createElement(b.a,{className:e.paper},l.a.createElement(le.a,{component:"h5",variant:"h5",style:{marginBottom:"1rem"}},l.a.createElement(Me.a,{style:{marginRight:"1rem"}}),"Quick Buy"),l.a.createElement(f.a,{container:!0,style:{marginBottom:"1rem"}},l.a.createElement(f.a,{item:!0,md:3},"I want to buy"," "),l.a.createElement(f.a,{item:!0,md:3},l.a.createElement(me.a,{label:"6.5345342",className:e.chip})),l.a.createElement(f.a,{item:!0,md:3},"ETH")),l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,md:3},"I will pay"),l.a.createElement(f.a,{item:!0,md:3},l.a.createElement(me.a,{label:"234.52342",className:e.chip})),l.a.createElement(f.a,{item:!0,md:3},"PLN"),l.a.createElement(f.a,{item:!0,md:3},l.a.createElement($.a,{variant:"contained",color:"primary"},"BUY"))))),l.a.createElement(f.a,{item:!0,md:6},l.a.createElement(b.a,{className:e.paper},l.a.createElement(le.a,{component:"h5",variant:"h5",style:{marginBottom:"1rem"}},l.a.createElement(De.a,{style:{marginRight:"1rem"}}),"Quick Sell"),l.a.createElement(f.a,{container:!0,style:{marginBottom:"1rem"}},l.a.createElement(f.a,{item:!0,md:3},"I want to sell"," "),l.a.createElement(f.a,{item:!0,md:3},l.a.createElement(me.a,{label:"6.5345342",className:e.chip})),l.a.createElement(f.a,{item:!0,md:3},"ETH")),l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,md:3},"I want to receive"),l.a.createElement(f.a,{item:!0,md:3},l.a.createElement(me.a,{label:"234.52342",className:e.chip})),l.a.createElement(f.a,{item:!0,md:3},"PLN"),l.a.createElement(f.a,{item:!0,md:3},l.a.createElement($.a,{variant:"contained"},"SELL"))))))),l.a.createElement(Xe,{value:n,index:1},"tab two"),l.a.createElement(Xe,{value:n,index:2},"tab Three")))},We=t(303),$e=t(304),Je=t(305),Ke=t(306),Qe=t(307),qe=t(167),Ze=t(97),ea=t(195),aa=t(194),ta=t(182),na=t(99),la=t(196);ta.b(la.a);var ra=[{date:"2011-08-01",open:"136.65",high:"136.96",low:"134.15",close:"136.49"},{date:"2011-08-02",open:"135.26",high:"135.95",low:"131.50",close:"131.85"},{date:"2011-08-05",open:"132.90",high:"135.27",low:"128.30",close:"135.25"},{date:"2011-08-06",open:"134.94",high:"137.24",low:"132.63",close:"135.03"},{date:"2011-08-07",open:"136.76",high:"136.86",low:"132.00",close:"134.01"},{date:"2011-08-08",open:"131.11",high:"133.00",low:"125.09",close:"126.39"},{date:"2011-08-09",open:"123.12",high:"127.75",low:"120.30",close:"125.00"},{date:"2011-08-12",open:"128.32",high:"129.35",low:"126.50",close:"127.79"},{date:"2011-08-13",open:"128.29",high:"128.30",low:"123.71",close:"124.03"},{date:"2011-08-14",open:"122.74",high:"124.86",low:"119.65",close:"119.90"},{date:"2011-08-15",open:"117.01",high:"118.50",low:"111.62",close:"117.05"},{date:"2011-08-16",open:"122.01",high:"123.50",low:"119.82",close:"122.06"},{date:"2011-08-19",open:"123.96",high:"124.50",low:"120.50",close:"122.22"},{date:"2011-08-20",open:"122.21",high:"128.96",low:"121.00",close:"127.57"},{date:"2011-08-21",open:"131.22",high:"132.75",low:"130.33",close:"132.51"},{date:"2011-08-22",open:"133.09",high:"133.34",low:"129.76",close:"131.07"},{date:"2011-08-23",open:"130.53",high:"135.37",low:"129.81",close:"135.30"},{date:"2011-08-26",open:"133.39",high:"134.66",low:"132.10",close:"132.25"},{date:"2011-08-27",open:"130.99",high:"132.41",low:"126.63",close:"126.82"},{date:"2011-08-28",open:"129.88",high:"134.18",low:"129.54",close:"134.08"},{date:"2011-08-29",open:"132.67",high:"138.25",low:"132.30",close:"136.25"},{date:"2011-08-30",open:"139.49",high:"139.65",low:"137.41",close:"138.48"},{date:"2011-09-03",open:"139.94",high:"145.73",low:"139.84",close:"144.16"},{date:"2011-09-04",open:"144.97",high:"145.84",low:"136.10",close:"136.76"},{date:"2011-09-05",open:"135.56",high:"137.57",low:"132.71",close:"135.01"},{date:"2011-09-06",open:"132.01",high:"132.30",low:"130.00",close:"131.77"},{date:"2011-09-09",open:"136.99",high:"138.04",low:"133.95",close:"136.71"},{date:"2011-09-10",open:"137.90",high:"138.30",low:"133.75",close:"135.49"},{date:"2011-09-11",open:"135.99",high:"139.40",low:"135.75",close:"136.85"},{date:"2011-09-12",open:"138.83",high:"139.00",low:"136.65",close:"137.20"},{date:"2011-09-13",open:"136.57",high:"138.98",low:"136.20",close:"138.81"},{date:"2011-09-16",open:"138.99",high:"140.59",low:"137.60",close:"138.41"},{date:"2011-09-17",open:"139.06",high:"142.85",low:"137.83",close:"140.92"},{date:"2011-09-18",open:"143.02",high:"143.16",low:"139.40",close:"140.77"},{date:"2011-09-19",open:"140.15",high:"141.79",low:"139.32",close:"140.31"},{date:"2011-09-20",open:"141.14",high:"144.65",low:"140.31",close:"144.15"},{date:"2011-09-23",open:"146.73",high:"149.85",low:"146.65",close:"148.28"},{date:"2011-09-24",open:"146.84",high:"153.22",low:"146.82",close:"153.18"},{date:"2011-09-25",open:"154.47",high:"155.00",low:"151.25",close:"152.77"},{date:"2011-09-26",open:"153.77",high:"154.52",low:"152.32",close:"154.50"},{date:"2011-09-27",open:"153.44",high:"154.60",low:"152.75",close:"153.47"},{date:"2011-09-30",open:"154.63",high:"157.41",low:"152.93",close:"156.34"},{date:"2011-10-01",open:"156.55",high:"158.59",low:"155.89",close:"158.45"},{date:"2011-10-02",open:"157.78",high:"159.18",low:"157.01",close:"157.92"},{date:"2011-10-03",open:"158.00",high:"158.08",low:"153.50",close:"156.24"},{date:"2011-10-04",open:"158.37",high:"161.58",low:"157.70",close:"161.45"},{date:"2011-10-07",open:"163.49",high:"167.91",low:"162.97",close:"167.91"},{date:"2011-10-08",open:"170.20",high:"171.11",low:"166.68",close:"167.86"},{date:"2011-10-09",open:"167.55",high:"167.88",low:"165.60",close:"166.79"},{date:"2011-10-10",open:"169.49",high:"171.88",low:"153.21",close:"162.23"},{date:"2011-10-11",open:"163.01",high:"167.28",low:"161.80",close:"167.25"},{date:"2011-10-14",open:"167.98",high:"169.57",low:"163.50",close:"166.98"},{date:"2011-10-15",open:"165.54",high:"170.18",low:"165.15",close:"169.58"},{date:"2011-10-16",open:"172.69",high:"173.04",low:"169.18",close:"172.75"}],ia=function(e){Object(ea.a)(t,e);var a=Object(aa.a)(t);function t(){return Object(qe.a)(this,t),a.apply(this,arguments)}return Object(Ze.a)(t,[{key:"componentDidMount",value:function(){var e=ta.a("chartdiv",na.e);e.paddingRight=20,e.data=ra,e.dateFormatter.inputDateFormat="yyyy-MM-dd";var a=e.xAxes.push(new na.b);a.renderer.grid.template.location=0,a.renderer.labels.template.fill="#fff";var t=e.yAxes.push(new na.d);t.tooltip.disabled=!0,t.renderer.labels.template.fill="#fff";var n=e.series.push(new na.a);n.dataFields.dateX="date",n.dataFields.valueY="close",n.dataFields.openValueY="open",n.dataFields.lowValueY="low",n.dataFields.highValueY="high",n.simplifiedProcessing=!0,n.tooltipText="Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}",e.cursor=new na.g;var l=e.series.push(new na.c);l.dataFields.dateX="date",l.dataFields.valueY="close",l.defaultState.properties.visible=!1,l.hiddenInLegend=!0,l.fillOpacity=.5,l.strokeOpacity=.5;var r=new na.f;r.series.push(l),e.scrollbarX=r,this.chart=e}},{key:"componentWillUnmount",value:function(){this.chart&&this.chart.dispose()}},{key:"render",value:function(){return l.a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"500px"}})}}]),t}(n.Component),ca=Object(w.a)((function(e){return{topItemsContainer:{display:"flex",flexWrap:"wrap"},buttonGroup:{backgroundColor:e.palette.background.default,padding:e.spacing(1)},dataContainer:{display:"flex",alignItems:"center",height:"100%",marginLeft:e.spacing(1)},centered:{display:"flex",justifyContent:"center",alignItems:"center"}}})),oa=["1h","3h","1d","3d","7d","1m","all"],ma=function(){var e=ca(),a=Object(n.useState)("1d"),t=Object(s.a)(a,2),r=t[0],i=t[1];return l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,sm:12},l.a.createElement(f.a,{container:!0,spacing:1},l.a.createElement(f.a,{item:!0},l.a.createElement(Re.a,{color:"default"},l.a.createElement(We.a,null))),l.a.createElement(f.a,{item:!0},l.a.createElement(J.a,{className:e.buttonGroup,color:"primary",variant:"text",size:"small",disableElevation:!0},oa.map((function(e){return l.a.createElement($.a,{key:e,onClick:function(){return i(e)},variant:r===e&&"contained"},e)})))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.dataContainer},l.a.createElement("span",null,"Open: ",l.a.createElement("b",null,"2456.5")))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.dataContainer},l.a.createElement("span",null,"High: ",l.a.createElement("b",null,"2756.5")))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.dataContainer},l.a.createElement("span",null,"Low: ",l.a.createElement("b",null,"1456.5")))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.dataContainer},l.a.createElement("span",null,"Close: ",l.a.createElement("b",null,"1156.5")))),l.a.createElement(f.a,{item:!0,style:{marginLeft:"auto"}},l.a.createElement("div",{className:e.centered}),l.a.createElement(Re.a,{color:"default"},l.a.createElement($e.a,null),l.a.createElement(ee.a,null))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.centered}),l.a.createElement(Re.a,{color:"default"},l.a.createElement(Je.a,null))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.centered}),l.a.createElement(Re.a,{color:"default"},l.a.createElement(Ke.a,null))),l.a.createElement(f.a,{item:!0},l.a.createElement("div",{className:e.centered}),l.a.createElement(Re.a,{color:"default"},l.a.createElement(Qe.a,null))))),l.a.createElement(f.a,{item:!0,sm:12},l.a.createElement(ia,null)))},sa=Object(w.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(1,3)},paper:{padding:e.spacing(3),display:"flex",flexDirection:"column",marginBottom:e.spacing(3)}}})),ua=function(){var e=sa();return l.a.createElement("div",{className:e.root},l.a.createElement(F,null),l.a.createElement("main",{className:e.content},l.a.createElement(f.a,{container:!0,spacing:3},l.a.createElement(f.a,{item:!0,md:4},l.a.createElement(b.a,{className:e.paper},l.a.createElement(oe,null)),l.a.createElement(b.a,{className:e.paper},l.a.createElement(he,null)),l.a.createElement(b.a,{className:e.paper},l.a.createElement(we,null))),l.a.createElement(f.a,{item:!0,md:8},l.a.createElement(b.a,{className:e.paper},l.a.createElement(Fe,null)),l.a.createElement(b.a,{className:e.paper},l.a.createElement(ma,null)),l.a.createElement(_e,null),l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,md:6},l.a.createElement(b.a,{className:e.paper},l.a.createElement(Le,null))),l.a.createElement(f.a,{item:!0,md:6},l.a.createElement(b.a,{className:e.paper},l.a.createElement(je,null))))))))};var da=function(){var e=g().currentTheme,a=Object(c.a)({palette:{type:e,primary:{light:"#25E8A7",dark:"#25E8A7",main:"#25E8A7"},background:{paper:"light"===e?"#242041":"#424242",default:"light"===e?"#1A1736":"#303030"},text:{primary:"#fff",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",action:{active:"rgba(255, 255, 255, 0.7)"}}});return l.a.createElement(o.a,{theme:a},l.a.createElement(m.a,null),l.a.createElement(ua,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null,l.a.createElement(da,null))),document.getElementById("root"))}},[[214,1,3]]]);
//# sourceMappingURL=main.a3167a1f.chunk.js.map