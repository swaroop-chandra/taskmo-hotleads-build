(this.webpackJsonptaskmo_admin=this.webpackJsonptaskmo_admin||[]).push([[0],{191:function(e,t,a){},192:function(e,t,a){},198:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},226:function(e,t,a){},238:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),r=a.n(o),s=(a(191),a(21)),i=(a(192),a(8)),l=a(110),d=a.n(l),j=(a(198),a(27)),u=a(121),m=a.n(u),b=a(2);Object(l.createTheme)("solarized",{text:{primary:"black",secondary:"#a2a2a2"},background:{default:"#fff"},boxshadow:{default:"5px 5px 30px red"},context:{background:"#fff",text:"#121212"},divider:{default:"#f2f2f2"},action:{button:"rgba(0,0,0,.54)",hover:"rgba(0,0,0,.08)",disabled:"rgba(0,0,0,.12)"}});var h=Object(j.b)((function(e){return{totalData:e.totalData,acceptedData:e.totalData.accepted,deniedData:e.totalData.denied}}))((function(e,t){t.api,t.admin;var a=Object(n.useState)(!0),c=Object(s.a)(a,2),o=c[0],r=c[1],l=[{name:"Customer ID",selector:"customer_id",sortable:!0,center:!0,cell:function(e){return Object(b.jsx)("div",{children:e.customer_id})}},{name:"Merchant Number",selector:"merchant_number",cell:function(e){return Object(b.jsx)("div",{children:e.merchant_number})},sortable:!0,center:!0},{name:"Store Name",selector:"shop_name",cell:function(e){return Object(b.jsx)("div",{children:e.shop_name})},sortable:!0,center:!0},{name:"Order Id",selector:"order_id",cell:function(e){return Object(b.jsx)("div",{children:"null"===e.order_id?"-":e.order_id})},sortable:!0,center:!0}],j=[{name:"Customer ID",selector:"customer_id",cell:function(e){return Object(b.jsx)("div",{children:e.customer_id})},sortable:!0,center:!0},{name:"Merchant Number",selector:"merchant_number",cell:function(e){return Object(b.jsx)("div",{children:e.merchant_number})},ordering:!0,sortable:!0,center:!0},{name:"Reason",selector:"reason",cell:function(e){return Object(b.jsx)("div",{children:e.reason})},sortable:!0,center:!0}],u={columns:l,data:e.acceptedData},h={columns:j,data:e.deniedData};return Object(b.jsxs)("div",{className:"table_data",children:[Object(b.jsxs)("div",{className:"menu-container",children:[Object(b.jsx)("h1",{style:o?{color:"#4858e9"}:{color:"#979797"},onClick:function(){r(!0)},children:"Accepted"}),Object(b.jsx)("h1",{style:o?{color:"#979797",marginLeft:"130px"}:{color:"#ff968d",marginLeft:"130px"},onClick:function(){r(!1)},children:"Denied"})]}),o?Object(b.jsx)("div",{className:"card_table",id:"card_table_accepted",children:Object(b.jsx)(m.a,Object(i.a)(Object(i.a)({},u),{},{filterPlaceholder:"Search",children:Object(b.jsx)(d.a,{columns:l,data:e.acceptedData,defaultSortFieldId:1,pagination:!0,theme:"solarized"})}))}):Object(b.jsx)("div",{className:"card_table",id:"card_table_denied",children:Object(b.jsx)(m.a,Object(i.a)(Object(i.a)({},h),{},{filterPlaceholder:"Search",children:Object(b.jsx)(d.a,{columns:j,data:e.deniedData,defaultSortFieldId:1,pagination:!0,theme:"solarized"})}))})]})})),p=a(26),g=a.n(p),O=a(36),f=a(92),v=a(93),_=a(105),x=a(104),y=(a(207),a(156)),N=a.n(y),w="https://nodeapi.taskmo.com/v1/hotleads/check_email",k=function(e){return{type:"GET_ACCESS_PIN",payload:e}},T=function(e){return function(t){(function(){var a=Object(O.a)(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{console.log(e,"inside date"),t(k(e))}catch(n){console.error(n)}case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},D=function(e){Object(_.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).responseGoogle=function(t){if(t.accessToken){var a=t.profileObj.email;(function(){var n=Object(O.a)(g.a.mark((function n(){var c,o;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(w,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:a})});case 2:if(!(c=n.sent).ok){n.next=11;break}return n.next=6,c.json();case 6:o=n.sent,console.log(o,"response"),o.email_status?(e.props.loginFunc(t),console.log("login email true"),e.props.dispatch(T(o.userObj.project)),localStorage.setItem("project",o.userObj.project),e.props.setLoginError("")):(console.log("login email false"),e.props.logoutFunc(),e.props.setLoginError("You don't have access, please contact admin")),n.next=14;break;case 11:console.log("login email false"),e.props.logoutFunc(),e.props.setLoginError("You don't have access, please contact admin");case 14:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}else e.props.logoutFunc()},e}return Object(v.a)(a,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(N.a,{clientId:"800470593510-v53lbqn11rmr50tjjk4ah19vqhskutau.apps.googleusercontent.com",buttonText:"Sign In With Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"})})}}]),a}(n.Component),S=Object(j.b)((function(e){return{loggedin:e.loggedin}}))(D),E=function(e){return function(t){var a=e;t(a?{type:"GET_LOGIN"}:{type:"GET_LOGOUT"})}};a(208);var F=Object(j.b)((function(e){return{loggedin:e.loggedin}}))((function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1];return Object(b.jsxs)("div",{className:"p_login",children:[Object(b.jsx)("div",{className:"log_col1",children:Object(b.jsx)("img",{src:window.location.origin+"/images/hot_lead_login.png",alt:"login",className:"login_bg"})}),Object(b.jsxs)("div",{className:"log_col2",children:[Object(b.jsx)("h1",{className:"log_name",children:"Taskmo HOT-Leads"}),Object(b.jsx)("div",{className:"login_button",children:Object(b.jsx)(S,{loginFunc:function(t){localStorage.setItem("asm_token",t.accessToken),localStorage.setItem("asm_token_email",t.profileObj.email),e.dispatch(E(!0))},logoutFunc:function(){e.dispatch(E(!1)),localStorage.removeItem("asm_token"),localStorage.removeItem("asm_token_email"),localStorage.removeItem("project")},setLoginError:o})}),Object(b.jsx)("div",{style:{marginTop:"10px"},children:c})]})]})})),I=a(19),C=a(281),M=a(284),L=a(285),Y=a(279),A=a(282),P=a(270),G=a(164),H=a(24),R=a(280),W=a(157),B=a.n(W).a.create({baseURL:"https://nodeapi.taskmo.com/v1/hotleads"}),J=function(e){return{type:"GET_TOTAL_DATA",payload:e}},z=function(e,t){return function(a){(function(){var n=Object(O.a)(g.a.mark((function n(){var c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.get("lead_stats?date=".concat(e,"&project_name=").concat(t));case 3:c=n.sent,a(J(c.data.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}})()()}},U=a(53),q=a.n(U);a(226);var K=Object(j.b)((function(e){return{projName:e.projName}}))((function(e){var t=c.a.useState(new Date),a=Object(s.a)(t,2),n=a[0],o=a[1];return Object(b.jsx)(H.a,{utils:G.a,children:Object(b.jsx)(P.a,{container:!0,justifyContent:"space-around",children:Object(b.jsx)(R.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:n,onChange:function(t){o(t);var a={date:q()(t).format("DD/MM/YYYY")},n=e.projName;e.dispatch(function(e,t){return function(a){!function(){var n=Object(O.a)(g.a.mark((function n(){var c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{c=e.date,a(z(c,t))}catch(o){console.error(o)}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}}(a,n))},KeyboardButtonProps:{"aria-label":"change date"}})})})})),Q=a(162),V=(a(236),a(237),a(80)),X=a(124),Z=(a(238),function(e){return{type:"FROM_TO_DATA",payload:e}}),$=function(e){return function(t){var a=e;t(a?{type:"SHOW_ON"}:{type:"SHOW_OFF"})}};var ee=Object(j.b)((function(e){return{projName:e.projName,show:e.show}}))((function(e){var t=Object(n.useState)([{startDate:new Date,endDate:new Date,key:"selection"}]),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),l=(i[0],i[1]),d=function(){e.dispatch($(!1))};return console.log(e.show,"show"),Object(b.jsx)("div",{className:"modal_form",children:Object(b.jsxs)(V.a,{show:e.show,onHide:d,children:[Object(b.jsx)(V.a.Header,{closeButton:!0,children:Object(b.jsx)(V.a.Title,{children:"Calender"})}),Object(b.jsx)(V.a.Body,{children:Object(b.jsx)(Q.DateRangePicker,{onChange:function(e){return o([e.selection])},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,months:2,ranges:c,direction:"horizontal"})}),Object(b.jsxs)(V.a.Footer,{children:[Object(b.jsx)(X.a,{variant:"secondary",onClick:d,children:"Close"}),Object(b.jsx)(X.a,{variant:"primary",onClick:function(t){var a={start:q()(c[0].startDate).format("DD/MM/YYYY"),end:q()(c[0].endDate).format("DD/MM/YYYY")},n=e.projName;e.dispatch(function(e,t){return function(a){!function(){var n=Object(O.a)(g.a.mark((function n(){var c,o,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,c={data:e.start},e.start!==e.end){n.next=10;break}return n.next=5,B.get("lead_stats?date=".concat(e.start,"&project_name=").concat(t));case 5:o=n.sent,a(J(o.data.data)),a(Z(c)),n.next=15;break;case 10:return n.next=12,B.get("lead_stats_range?from_date=".concat(e.start,"&to_date=").concat(e.end,"&project_name=").concat(t));case 12:r=n.sent,a(J(r.data.data)),a(Z(e));case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.error(n.t0);case 20:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(){return n.apply(this,arguments)}}()()}}(a,n)),l(!1)},children:"Save Changes"})]})]})})})),te=a(273),ae=function(e){return{type:"GET_PROJECT_NAME",payload:e}},ne=function(e){return function(t){t(ae(e?e:""))}},ce=a(275),oe=Object(te.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var re=Object(j.b)((function(e){return{totalData:e.totalData,dateData:e.dateData,loggedin:e.loggedin,projName:e.projName,fromTo:e.fromTo,accessPin:e.accessPin}}))((function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(!0),i=Object(s.a)(r,2),l=i[0],d=i[1],j=Object(n.useState)(!0),u=Object(s.a)(j,2),m=u[0],p=u[1];Object(n.useEffect)((function(){var t=new Date,a=q()(t).format("DD/MM/YYYY"),n=localStorage.getItem("project");e.dispatch(T(n)),"admin"===n?e.dispatch(z(a,"ninjacart")):(e.dispatch(ne(n)),e.dispatch(z(a,n)))}),[]);var g=!1,O=oe();return g=!!localStorage.getItem("asm_token"),console.log(e.projName,"props-proj"),console.log(e.fromTo,"props-total-data"),console.log(e.accessPin,"from_to"),Object(b.jsx)("div",{className:"App",children:g?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("img",{style:{height:"48px"},src:window.location.origin+"/images/logo/TaskmoOTTFinal.svg",alt:"ott",className:"ottLogo"}),Object(b.jsx)("h3",{className:"project_name",style:{color:"#673695"},children:"Hot Leads"}),Object(b.jsxs)("div",{className:"logout_box",onClick:function(){return localStorage.removeItem("asm_token"),localStorage.removeItem("asm_token_email"),void e.dispatch(E(!1))},children:[Object(b.jsx)("img",{src:window.location.origin+"/images/logo/logout_black.svg",alt:"ott",className:"logout_ott"}),"Logout"]})]}),Object(b.jsxs)("div",{className:"hot_row1",children:["admin"===e.accessPin?Object(b.jsx)("div",{children:Object(b.jsx)(C.a,{sx:{minWidth:120},children:Object(b.jsxs)(Y.a,{variant:"outlined",className:O.formControl,children:[Object(b.jsx)(M.a,{id:"demo-simple-select-label1",children:m?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:window.location.origin+"/images/logo/ninjacart.svg",alt:"ott",className:"logo_drop"}),"Ninjacart"]}):"Project"}),Object(b.jsxs)(A.a,{labelId:"demo-simple-select-label1",id:"demo-simple-select",value:c,label:"project",onChange:function(t){o(t.target.value);var a=t.target.value;e.dispatch(ne(a));var n=new Date,c=q()(n).format("DD/MM/YYYY");e.dispatch(z(c,a)),p(!1),d(!0),e.dispatch({type:"RESET_FROM_TO"})},children:[Object(b.jsxs)(L.a,{value:"ninjacart",children:[Object(b.jsx)("img",{src:window.location.origin+"/images/logo/ninjacart.svg",alt:"ott",className:"logo_drop"}),"Ninjacart"]}),Object(b.jsxs)(L.a,{value:"jiomart",children:[Object(b.jsx)("img",{src:window.location.origin+"/images/logo/jio_mart_logo.svg",alt:"ott",className:"logo_drop"}),"JioMart"]})]})]})})}):"ninjacart"===e.accessPin?Object(b.jsxs)("div",{className:"box_project",children:[Object(b.jsx)("img",{src:window.location.origin+"/images/logo/ninjacart.svg",alt:"ott",className:"logo_drop"}),"Ninjacart"]}):Object(b.jsxs)("div",{className:"box_project",children:[Object(b.jsx)("img",{src:window.location.origin+"/images/logo/jio_mart_logo.svg",alt:"ott",className:"logo_drop"}),"JioMart"]}),Object(b.jsxs)("div",{id:"date_selector",children:[Object.keys(e.fromTo).length>1?Object(b.jsxs)("div",{id:"show_range_dates",className:"show_range_dates",children:[Object(b.jsx)("p",{className:"show_start",children:e.fromTo.start}),Object(b.jsx)("p",{className:"show_start",children:"-"}),Object(b.jsx)("p",{className:"show_start",children:e.fromTo.end})]}):1===Object.keys(e.fromTo).length?Object(b.jsx)("div",{id:"show_range_dates",className:"show_range_dates",children:Object(b.jsx)("p",{className:"show_start",children:e.fromTo.data})}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)(C.a,{sx:{minWidth:120,marginTop:"20px"},onBlur:function(){var e=document.getElementById("MyForm_id");"block"===e.style.display&&(e.style.display="none")},children:Object(b.jsx)(ce.a,{variant:"outlined",onClick:function(t){d(!1),e.dispatch($(!0))},children:l?"Today":"Select Date"})}),Object(b.jsx)("div",{id:"MyForm_id",style:{display:"none"},children:Object(b.jsx)(K,{})}),Object(b.jsx)("div",{id:"formMy_id",style:{display:"none"},children:Object(b.jsx)(ee,{})})]})]}),Object(b.jsxs)("div",{className:"hot_row1",children:[Object(b.jsxs)("div",{className:"hot_card1",style:{backgroundImage:"url(".concat(window.location.origin+"/images/HotLeadDashboard/purple.svg",")")},children:[Object(b.jsx)("div",{className:"round_back",children:Object(b.jsx)("p",{className:"hot_p2",children:e.totalData.total_visited})}),Object(b.jsx)("p",{className:"hot_p1",children:"Total visited stores"})]}),Object(b.jsxs)("div",{className:"hot_card1",style:{backgroundImage:"url(".concat(window.location.origin+"/images/HotLeadDashboard/blue.svg",")")},children:[Object(b.jsx)("div",{className:"round_back",children:Object(b.jsx)("p",{className:"hot_p2",style:{color:"#64abdd"},children:e.totalData.total_checkins?e.totalData.total_checkins:"NA"})}),Object(b.jsx)("p",{className:"hot_p1",children:"Total checkins"})]}),Object(b.jsxs)("div",{className:"hot_card1",style:{backgroundImage:"url(".concat(window.location.origin+"/images/HotLeadDashboard/green.svg",")")},children:[Object(b.jsx)("div",{className:"round_back",children:Object(b.jsx)("p",{className:"hot_p2",style:{color:"#00a88b"},children:e.totalData.total_accepted})}),Object(b.jsx)("p",{className:"hot_p1",children:"Total orders"})]}),Object(b.jsxs)("div",{className:"hot_card1",style:{backgroundImage:"url(".concat(window.location.origin+"/images/HotLeadDashboard/red.svg",")")},children:[Object(b.jsx)("div",{className:"round_back",children:Object(b.jsx)("p",{className:"hot_p2",style:{color:"#d93535"},children:e.totalData.total_denied})}),Object(b.jsx)("p",{className:"hot_p1",children:"Total denied"})]})]}),Object(b.jsx)(I.a,{to:"/dashboard",children:Object(b.jsx)(h,{})})]}):Object(b.jsx)(I.a,{to:"/login",children:Object(b.jsx)(F,{})})})})),se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,290)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))},ie=a(118),le=a(111),de=a(163),je=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_LOGIN":return!0;case"GET_LOGOUT":default:return!1}},ue={},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOTAL_DATA":return Object(i.a)({},t.payload);default:return Object(i.a)({},e)}},be={},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATE_DATA":return Object(i.a)({},t.payload);default:return Object(i.a)({},e)}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECT_NAME":return t.payload.slice();default:return e.slice()}},ge={},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FROM_TO_DATA":return Object(i.a)({},t.payload);case"RESET_FROM_TO":return{};default:return Object(i.a)({},e)}},fe=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SHOW_ON":return!0;case"SHOW_OFF":default:return!1}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ACCESS_PIN":return t.payload.slice();default:return e.slice()}},_e=function(){return Object(le.c)(Object(le.b)({loggedin:je,totalData:me,dateData:he,projName:pe,fromTo:Oe,show:fe,accessPin:ve}),Object(le.a)(de.a))}(),xe=Object(b.jsx)(j.a,{store:_e,children:Object(b.jsx)(ie.a,{children:Object(b.jsx)(re,{to:"/login"})})});r.a.render(xe,document.getElementById("root")),se()}},[[242,1,2]]]);
//# sourceMappingURL=main.84498b33.chunk.js.map