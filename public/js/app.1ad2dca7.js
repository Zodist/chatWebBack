(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],m=0,d=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"0845":function(t,e,o){},"0e31":function(t,e,o){"use strict";o("3771")},1:function(t,e){},3771:function(t,e,o){},"4ac4":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",[o("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),o("v-toolbar-title",[t._v(t._s(t.title))]),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:t.loginOrLogout}},[t.existUserId?o("v-icon",[t._v("mdi-logout")]):o("v-icon",[t._v("mdi-login")])],1)],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.inChatRoomList,expression:"inChatRoomList"}]},[o("v-toolbar",{attrs:{dark:""}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.flag_newChatRoom=!0}}},[o("v-icon",[t._v("mdi-plus")])],1),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.flag_availChatRoomList=!0}}},[o("v-icon",[t._v("mdi-magnify")])],1)],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.inChatRoom,expression:"inChatRoom"}]},[o("v-toolbar",{attrs:{dark:""}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.moveTo("ChatRoomList")}}},[o("v-icon",[t._v("mdi-arrow-left")])],1),o("div",[t._v(" "+t._s(t.$route.params.roomName)+" ")]),o("v-spacer"),t._v(" 접속자: "+t._s(t.userCnt)+"명 ")],1)],1),o("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{nav:""}},[o("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[o("v-list-item",{on:{click:function(e){return t.moveTo("Home")}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-home")])],1),o("v-list-item-title",[t._v("Home")])],1),o("v-list-item",{on:{click:function(e){return t.moveTo("AccountInfo")}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account")])],1),o("v-list-item-title",[t._v("Account")])],1),o("v-list-item",{on:{click:function(e){return t.moveTo("ChatRoomList")}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-chat")])],1),o("v-list-item-title",[t._v("Chat")])],1)],1)],1)],1),o("v-main",[o("v-container",{attrs:{fluid:"","fill-height":"",aacontainer:""}},[o("router-view",{staticClass:"child-view"})],1)],1),o("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackBarFlag,callback:function(e){t.snackBarFlag=e},expression:"snackBarFlag"}},[t._v(" "+t._s(t.snackBarText)+" ")]),o("new-chat-room",{attrs:{dialog:t.flag_newChatRoom},on:{close:function(e){t.flag_newChatRoom=!1}}}),o("avail-chat-room-list",{attrs:{dialog:t.flag_availChatRoomList},on:{close:function(e){t.flag_availChatRoomList=!1}}})],1)},s=[],i=(o("4de4"),o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("New ChatRoom")])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Chat Name",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.makeRoom(e)}},model:{value:t.roomName,callback:function(e){t.roomName=e},expression:"roomName"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.clockDialog}},[t._v(" Close ")]),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.makeRoom}},[t._v(" Make ")])],1)],1)],1)}),r=[],l={name:"NewChatRoom",props:{dialog:Boolean},data:function(){return{roomName:""}},components:{},computed:{},watch:{},mounted:function(){},created:function(){},destroyed:function(){},methods:{makeRoom:function(){this.$socket.emit("join",{roomName:this.roomName}),this.roomName="",this.$store.commit("onGlobalAlert","방이 생성되었습니다"),this.clockDialog()},clockDialog:function(){this.$emit("close")}}},c=l,u=o("2877"),m=o("6544"),d=o.n(m),f=o("8336"),v=o("b0af"),p=o("99d9"),g=o("62ad"),h=o("a523"),b=o("169a"),y=o("0fd9"),x=o("2fa4"),k=o("8654"),_=Object(u["a"])(c,i,r,!1,null,null,null),C=_.exports;d()(_,{VBtn:f["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:g["a"],VContainer:h["a"],VDialog:b["a"],VRow:y["a"],VSpacer:x["a"],VTextField:k["a"]});var R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:t.clockDialog}},[o("v-icon",[t._v("mdi-close")])],1),o("v-toolbar-title",[t._v("Available Chat Room")])],1),o("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,n){return[e.header?o("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?o("v-divider",{key:n,attrs:{inset:e.inset}}):o("v-list-item",{key:e.title,staticStyle:{"min-width":"375px"},on:{click:function(o){return t.enterChatRoom(e.title)}}},[o("v-list-item-avatar",[o("v-icon",[t._v("mdi-account-multiple")])],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.title+" ("+e.userCnt+")")}}),o("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2)],1)],1)},w=[],V={name:"AvailChatRoomList",props:{dialog:Boolean},data:function(){return{}},components:{},computed:{items:function(){return this.$store.getters.getAvailableRooms}},watch:{dialog:function(t){t&&this.$socket.emit("getAvailableRoom")}},mounted:function(){},created:function(){},destroyed:function(){},methods:{enterChatRoom:function(t){this.$emit("close"),this.$router.push({name:"ChatRoom",params:{roomName:t}})},clockDialog:function(){this.$emit("close")}}},$=V,I=o("ce7e"),N=o("132d"),L=o("8860"),S=o("da13"),A=o("8270"),O=o("5d23"),M=o("e0c7"),j=o("71d9"),D=o("2a7f"),T=Object(u["a"])($,R,w,!1,null,null,null),U=T.exports;d()(T,{VBtn:f["a"],VCard:v["a"],VDialog:b["a"],VDivider:I["a"],VIcon:N["a"],VList:L["a"],VListItem:S["a"],VListItemAvatar:A["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VSubheader:M["a"],VToolbar:j["a"],VToolbarTitle:D["a"]});var B={name:"App",components:{AvailChatRoomList:U,NewChatRoom:C},data:function(){return{drawer:null,group:null,transitionName:"",timeout:1500,flag_newChatRoom:!1,flag_availChatRoomList:!1}},watch:{$route:function(t,e){"ChatRoomList"===e.name&&"ChatRoom"===t.name&&(this.transitionName="slide-right"),"ChatRoom"===e.name&&"ChatRoomList"===t.name&&(this.transitionName="slide-left")}},computed:{snackBarFlag:{get:function(){return this.$store.getters.getFlag},set:function(t){console.log("snackBarFlag",t),this.$store.commit("offGlobalAlert")}},snackBarText:function(){return this.$store.getters.getText},inChatRoom:function(){return"ChatRoom"===this.$route.name},inChatRoomList:function(){return"ChatRoomList"===this.$route.name},title:function(){return this.$route.name},existUserId:function(){return""!==this.$store.state.userInfo.userInfo&&""!==this.$store.state.userInfo.userInfo.id},userCnt:function(){var t=this;if(0===this.$store.getters.getJoinedRooms.length)return 0;var e=this.$store.getters.getJoinedRooms.filter((function(e){return e.title===t.$route.params.roomName}));return 0!==e.length?e[0].userCnt:0}},methods:{loginOrLogout:function(){var t=this;this.existUserId?this.$http.get("/api/logout").then((function(e){console.log(e),t.$store.commit("setUserId",{id:"",password:"",name:""}),t.$router.push({name:"Home"}),t.$store.commit("onGlobalAlert","로그아웃되었습니다"),t.$socket.disconnect()})).catch((function(t){console.log(t)})):this.$router.push({name:"Login"})},moveTo:function(t){this.$router.push({name:t})}}},E=B,F=(o("034f"),o("7496")),P=o("40dc"),G=o("5bc1"),H=o("1baa"),J=o("34c3"),q=o("f6c4"),W=o("f774"),z=o("2db4"),K=Object(u["a"])(E,a,s,!1,null,null,null),Q=K.exports;d()(K,{VApp:F["a"],VAppBar:P["a"],VAppBarNavIcon:G["a"],VBtn:f["a"],VContainer:h["a"],VIcon:N["a"],VList:L["a"],VListItem:S["a"],VListItemGroup:H["a"],VListItemIcon:J["a"],VListItemTitle:O["c"],VMain:q["a"],VNavigationDrawer:W["a"],VSnackbar:z["a"],VSpacer:x["a"],VToolbar:j["a"],VToolbarTitle:D["a"]});var X=o("f309");n["a"].use(X["a"]);var Y=new X["a"]({}),Z=o("8c4f"),tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{xs12:"",sm6:""}},[o("div",{staticStyle:{"text-align":"center",margin:"10px"}},[t._v(" 채팅 프로그램에 오신 것을 환영합니다. "),o("br"),t._v(" 접속 정보입니다. ")]),o("v-divider"),o("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("속성")]),o("th",{staticClass:"text-left"},[t._v("값")])])]),o("tbody",t._l(t.items,(function(e){return o("tr",{key:e.name},[o("td",[t._v(t._s(e.property))]),o("td",[t._v(t._s(e.value))])])})),0)]},proxy:!0}])})],1)],1)},et=[],ot=(o("c975"),{data:function(){return{items:[]}},computed:{},created:function(){this.items.push({property:"운영체제",value:navigator.platform}),this.items.push({property:"메모리 용량",value:navigator.deviceMemory});var t="";t=-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?"Opera":-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Safari")?"Safari":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":-1!=navigator.userAgent.indexOf("MSIE")||1==!!document.documentMode?"IE":"unknown",this.items.push({property:"웹브라우져",value:t})},methods:{}}),nt=ot,at=o("0e8f"),st=o("a722"),it=o("1f4f"),rt=Object(u["a"])(nt,tt,et,!1,null,null,null),lt=rt.exports;d()(rt,{VDivider:I["a"],VFlex:at["a"],VLayout:st["a"],VSimpleTable:it["a"]});var ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{xs12:"",sm6:""}},[o("v-text-field",{ref:"id",attrs:{label:"ID",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),o("v-text-field",{ref:"password",attrs:{type:"password",label:"PASSWORD",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("div",{staticClass:"text-xs-center"},[o("v-btn",{attrs:{disabled:t.nameValidation,rounded:"",color:"primary"},on:{click:t.onSubmit}},[t._v("LOGIN")]),o("v-divider",{staticClass:"mx-1",attrs:{vertical:""}}),o("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:t.signUp}},[t._v("SIGN UP")])],1),o("div",[o("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.showAlert,expression:"showAlert"}],attrs:{type:"error"}},[t._v(" "+t._s(t.alertMessage)+" ")])],1)],1)],1)},ut=[],mt={data:function(){return{id:"",password:"",showAlert:!1,alertMessage:""}},computed:{nameValidation:function(){return""===this.id&&""===this.password}},created:function(){},methods:{onSubmit:function(){var t=this,e=this.id,o=this.password;this.$http.post("api/login",{id:e,password:o},{"Content-Type":"application-json"}).then((function(e){e.data.user?(t.$store.commit("onGlobalAlert","로그인되었습니다"),t.$connectWS().then((function(){console.log("socket connceted")})),t.$store.commit("setUserId",e.data.user),t.$router.push({name:"Home"})):e.data.message&&(t.showAlert=!0,t.alertMessage=e.data.message)})).catch((function(t){console.error(t)}))},signUp:function(){this.$router.push({name:"SignUp"})}}},dt=mt,ft=o("0798"),vt=Object(u["a"])(dt,ct,ut,!1,null,null,null),pt=vt.exports;d()(vt,{VAlert:ft["a"],VBtn:f["a"],VDivider:I["a"],VFlex:at["a"],VLayout:st["a"],VTextField:k["a"]});var gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{xs12:"",sm6:""}},[o("v-text-field",{ref:"id",attrs:{label:"ID",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),o("v-text-field",{ref:"password",attrs:{type:"password",label:"PASSWORD",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-text-field",{ref:"name",attrs:{label:"NAME",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),o("div",{staticClass:"text-xs-center"},[o("v-btn",{attrs:{rounded:"",color:"primary"},on:{click:t.onSubmit}},[t._v("SIGN UP")])],1)],1)],1)},ht=[],bt={data:function(){return{id:"",password:"",name:""}},created:function(){},methods:{onSubmit:function(){var t=this,e=this.id,o=this.password,n=this.name;this.$http.post("api/signup",{id:e,password:o,name:n},{"Content-Type":"application-json"}).then((function(e){console.log(e),t.$router.push({name:"Login"})})).catch((function(t){console.error(t)}))}}},yt=bt,xt=Object(u["a"])(yt,gt,ht,!1,null,null,null),kt=xt.exports;d()(xt,{VBtn:f["a"],VFlex:at["a"],VLayout:st["a"],VTextField:k["a"]});var _t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{"align-center":"","justify-center":""}},[o("v-flex",{attrs:{xs12:"",sm6:""}},[o("form",[o("v-text-field",{attrs:{disabled:"",label:"ID"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),o("v-text-field",{attrs:{disabled:"",label:"PASSWORD"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),o("v-text-field",{attrs:{disabled:"",label:"NAME"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)])],1)},Ct=[],Rt={data:function(){return{}},computed:{id:function(){return this.$store.state.userInfo.userInfo.id},password:function(){return this.$store.state.userInfo.userInfo.password},name:function(){return this.$store.state.userInfo.userInfo.name}},created:function(){},methods:{}},wt=Rt,Vt=Object(u["a"])(wt,_t,Ct,!1,null,null,null),$t=Vt.exports;d()(Vt,{VFlex:at["a"],VLayout:st["a"],VTextField:k["a"]});var It=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inner-wrap",attrs:{fluid:"","fill-height":"","inner-wrap":""}},[o("Message-List",{staticClass:"msg-list",attrs:{msgs:t.msgDatas}}),o("Message-From",{staticClass:"msg-form",on:{submitMessage:t.sendMessage}})],1)},Nt=[],Lt=o("5530"),St=o("2f62"),At=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-list",{directives:[{name:"auto-bottom",rawName:"v-auto-bottom",value:t.msgs,expression:"msgs"}],ref:"msgList"},t._l(t.msgs,(function(e,n){return o("div",{key:n},[o("v-list-item",{staticStyle:{"align-items":"unset"},attrs:{"two-line":""}},[o("v-list-item-action",{directives:[{name:"show",rawName:"v-show",value:"나"!==e.from.name,expression:"msg.from.name !== '나'"}],staticStyle:{"align-self":"unset","justify-content":"unset"}},[o("span",[t._v(t._s(e.from.name))]),o("v-avatar",{attrs:{color:"primary",size:"56"}})],1),o("v-list-item-content",{style:"나"===e.from.name?"text-align:right;":""},[t._l(e.msg,(function(e,n){return o("v-list-item-title",{key:n,staticStyle:{"white-space":"none !important","margin-bottom":"5px"}},[o("v-sheet",{staticStyle:{display:"inline-block"},attrs:{rounded:"",color:"cyan lighten-5"}},[o("div",{staticStyle:{margin:"10px"}},[t._v(t._s(e.content))])])],1)})),o("v-list-item-subtitle",[t._v(t._s(e.time))])],2)],1)],1)})),0)],1)},Ot=[],Mt={name:"MessageList",props:["msgs"],created:function(){},mounted:function(){document.getElementsByClassName("msg-list")[0].scrollTop=document.getElementsByClassName("msg-list")[0].scrollHeight}},jt=Mt,Dt=(o("f6f4"),o("8212")),Tt=o("1800"),Ut=o("8dd9"),Bt=Object(u["a"])(jt,At,Ot,!1,null,null,null),Et=Bt.exports;d()(Bt,{VAvatar:Dt["a"],VList:L["a"],VListItem:S["a"],VListItemAction:Tt["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VSheet:Ut["a"]});var Ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inner-wrap"},[o("v-text-field",{attrs:{placeholder:"보낼 메세지를 입력하세요.",solo:""},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.submitMessageFunc(e):null}},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1)},Pt=[],Gt={name:"MessageForm",data:function(){return{msg:""}},methods:{submitMessageFunc:function(){return 0!==this.msg.length&&(this.$emit("submitMessage",this.msg),this.msg="",!0)}}},Ht=Gt,Jt=Object(u["a"])(Ht,Ft,Pt,!1,null,null,null),qt=Jt.exports;d()(Jt,{VTextField:k["a"]});var Wt={name:"ChatRoom",data:function(){return{datas:[]}},components:{"Message-List":Et,"Message-From":qt},computed:Object(Lt["a"])({msgDatas:function(){return this.$store.getters.getMsgByRoomName(this.$route.params.roomName)},userName:function(){return this.$store.getters.getUserName}},Object(St["b"])({msgState:function(t){return t.socket.msgDatas}})),watch:{msgState:{deep:!0,handler:function(){this.$store.commit("readMsgs",this.$route.params.roomName)}}},mounted:function(){},created:function(){this.$socket.emit("join",{roomName:this.$route.params.roomName}),this.$store.commit("readMsgs",this.$route.params.roomName)},destroyed:function(){},methods:{sendMessage:function(t){var e=new Date,o=e.getHours()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes();this.$store.commit("pushMsgData",{from:{name:"나"},msg:[t],roomName:this.$route.params.roomName,time:o}),this.$sendMessage({name:this.userName,msg:t,roomName:this.$route.params.roomName})}}},zt=Wt,Kt=(o("0e31"),Object(u["a"])(zt,It,Nt,!1,null,null,null)),Qt=Kt.exports,Xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{"justify-center":""}},[o("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,n){return[e.header?o("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?o("v-divider",{key:n,attrs:{inset:e.inset}}):o("v-list-item",{key:e.title,staticStyle:{"min-width":"375px"},on:{click:function(o){return t.enterChatRoom(e.title)}}},[o("v-list-item-avatar",[o("v-icon",[t._v("mdi-account-multiple")])],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.title+" ("+e.userCnt+")")}}),o("v-list-item-subtitle",[t._v(" "+t._s(t.$store.getters.getLastMsgByRoomName(e.title))+" ")])],1),o("v-list-item-action",[o("div",{staticStyle:{"font-size":"small"}},[t._v(" "+t._s(t.$store.getters.getLastMsgDateByRoomName(e.title))+" ")]),o("v-list-item-avatar",{directives:[{name:"show",rawName:"v-show",value:0!==t.$store.getters.getUnReadMsgCntByRoomName(e.title),expression:"\n              $store.getters.getUnReadMsgCntByRoomName(item.title) !== 0\n            "}],attrs:{color:"light-blue lighten-4"}},[t._v(" "+t._s(t.$store.getters.getUnReadMsgCntByRoomName(e.title))+" ")])],1)],1)]}))],2)],1)},Yt=[],Zt={name:"ChatRoomList",data:function(){return{}},components:{},computed:{items:function(){return this.$store.getters.getJoinedRooms},userName:function(){return this.$store.getters.getUserName}},mounted:function(){},created:function(){},destroyed:function(){},methods:{enterChatRoom:function(t){this.$router.push({name:"ChatRoom",params:{roomName:t}})}}},te=Zt,ee=Object(u["a"])(te,Xt,Yt,!1,null,null,null),oe=ee.exports;d()(ee,{VDivider:I["a"],VIcon:N["a"],VLayout:st["a"],VList:L["a"],VListItem:S["a"],VListItemAction:Tt["a"],VListItemAvatar:A["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VSubheader:M["a"]});o("4160"),o("159b");var ne,ae,se=o("ade3"),ie={PUSH_MSG_DATA:"pushMsgData"},re={msgDatas:[],joinedRooms:[],availableRooms:[]},le={getLastMsgDateByRoomName:function(t){return function(e){var o=t.msgDatas.filter((function(t){return t.roomName===e}));if(0===o.length)return"";var n=o[o.length-1];return n.time}},getLastMsgByRoomName:function(t){return function(e){var o=t.msgDatas.filter((function(t){return t.roomName===e}));if(0===o.length)return"";var n=o[o.length-1].msg;return n[n.length-1].content}},getUnReadMsgCntByRoomName:function(t){return function(e){for(var o=t.msgDatas.filter((function(t){return t.roomName===e})),n=0,a=0;a<o.length;a++)for(var s=0;s<o[a].msg.length;s++)o[a].msg[s].read||n++;return n}},getMsgByRoomName:function(t){return function(e){return t.msgDatas.filter((function(t){return t.roomName===e}))}},getJoinedRooms:function(t){return t.joinedRooms},getAvailableRooms:function(t){return t.availableRooms}},ce=(ne={},Object(se["a"])(ne,ie.PUSH_MSG_DATA,(function(t,e){var o=t.commit;o([ie.PUSH_MSG_DATA],e)})),Object(se["a"])(ne,"setJoinedRooms",(function(t,e){var o=t.commit;o("setJoinedRooms",e)})),Object(se["a"])(ne,"setAvailableRooms",(function(t,e){var o=t.commit;o("setAvailableRooms",e)})),Object(se["a"])(ne,"updateUserCntInRoom",(function(t,e){var o=t.commit;o("updateUserCntInRoom",e)})),Object(se["a"])(ne,"readMsgs",(function(t,e){var o=t.commit;o("updateUserCntInRoom",e)})),ne),ue=(ae={},Object(se["a"])(ae,ie.PUSH_MSG_DATA,(function(t,e){if(0!==t.msgDatas.length&&t.msgDatas[t.msgDatas.length-1].from.name===e.from.name&&t.msgDatas[t.msgDatas.length-1].time===e.time)t.msgDatas[t.msgDatas.length-1].msg.push({content:e.msg[0],read:!1});else{var o={from:e.from,msg:[{content:e.msg[0],read:!1}],time:e.time,roomName:e.roomName};t.msgDatas.push(o)}})),Object(se["a"])(ae,"setJoinedRooms",(function(t,e){t.joinedRooms=e})),Object(se["a"])(ae,"setAvailableRooms",(function(t,e){t.availableRooms=e})),Object(se["a"])(ae,"updateUserCntInRoom",(function(t,e){for(var o=0;o<t.joinedRooms.length;o++)if(t.joinedRooms[o].title===e.roomName){t.joinedRooms[o].userCnt=e.userCnt;break}})),Object(se["a"])(ae,"readMsgs",(function(t,e){t.msgDatas.forEach((function(t){t.roomName===e&&t.msg.forEach((function(t){t.read=!0}))}))})),ae),me={state:re,getters:le,actions:ce,mutations:ue},de={userInfo:{id:"",password:"",name:""}},fe={getUserId:function(t){return t.userInfo.id},getUserName:function(t){return t.userInfo.name}},ve={setUserId:function(t,e){var o=t.commit;o("setUserId",e)}},pe={setUserId:function(t,e){t.userInfo=e}},ge={state:de,getters:fe,actions:ve,mutations:pe},he={flag:!1,text:""},be={getFlag:function(t){return t.flag},getText:function(t){return t.text}},ye={onGlobalAlert:function(t,e){var o=t.commit;o("showGlobalAlert",e)},offGlobalAlert:function(t){var e=t.commit;e("showGlobalAlert")}},xe={onGlobalAlert:function(t,e){t.text=e,t.flag=!0},offGlobalAlert:function(t){t.flag=!1}},ke={state:he,getters:be,actions:ye,mutations:xe};n["a"].use(St["a"]);var _e=!1,Ce=new St["a"].Store({modules:{socket:me,userInfo:ge,globalAlert:ke},strict:_e}),Re=o("bc3a"),we=o.n(Re);n["a"].use(Z["a"]);var Ve=new Z["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:lt},{path:"/Login",name:"Login",component:pt},{path:"/SignUp",name:"SignUp",component:kt},{path:"/AccountInfo",name:"AccountInfo",component:$t},{path:"/ChatRoom",name:"ChatRoom",component:Qt},{path:"/ChatRoomList",name:"ChatRoomList",component:oe}]});Ve.beforeEach((function(t,e,o){""!==Ce.state.userInfo.userInfo.id||"AccountInfo"!==t.name&&"ChatRoom"!==t.name&&"ChatRoomList"!==t.name||we.a.get("/api/login").then((function(t){var e=t.data.user;if(!e)return console.log("=== navigation guard On ==="),void o("/Login");Ce.commit("setUserId",t.data.user)})).catch((function(t){console.error(t)})),"Login"==t.name&&we.a.get("/api/login").then((function(t){var e=t.data.user;if(e)return console.log("=== navigation guard On ==="),Ce.commit("setUserId",t.data.user),void o("/")})).catch((function(t){console.error(t)})),o()}));var $e,Ie=Ve,Ne=(o("d3b7"),o("8055")),Le=o.n(Ne),Se="http://ec2-3-84-249-206.compute-1.amazonaws.com:3001",Ae={install:function(t){t.mixin({}),t.prototype.$sendMessage=function(t){$e.emit("chat",{msg:t.msg,name:t.name,roomName:t.roomName})},t.prototype.$connectWS=function(){return $e=Le()(Se),$e.on("chat",(function(t){Ce.commit("pushMsgData",t)})),$e.on("joinedRooms",(function(t){var e=[];t.forEach((function(t){e.push({avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:t.roomName,userCnt:t.userCnt,subtitle:""}),e.push({divider:!0,inset:!0})})),Ce.commit("setJoinedRooms",e)})),$e.on("availableRooms",(function(t){var e=[];t.forEach((function(t){e.push({avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:t.roomName,userCnt:t.userCnt,subtitle:""}),e.push({divider:!0,inset:!0})})),Ce.commit("setAvailableRooms",e)})),$e.on("updateUserCntInRoom",(function(t){Ce.commit("updateUserCntInRoom",t)})),t.prototype.$socket=$e,Promise.resolve()},t.prototype.$socket=$e}};n["a"].use(Ae);var Oe=o("88e5"),Me=o.n(Oe);o("4ac4");n["a"].config.productionTip=!1,n["a"].use(Me.a),n["a"].prototype.$http=we.a,new n["a"]({router:Ie,vuetify:Y,store:Ce,render:function(t){return t(Q)}}).$mount("#app")},"85ec":function(t,e,o){},"88e5":function(t,e){t.exports=function(t){t.directive("auto-bottom",{update:function(t){setTimeout((function(){t.scrollTop=t.scrollHeight}),0)}})}},f6f4:function(t,e,o){"use strict";o("0845")}});
//# sourceMappingURL=app.1ad2dca7.js.map