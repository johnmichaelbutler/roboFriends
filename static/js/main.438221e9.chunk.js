(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=n(4),s=n(2),l=n(11),u=n(12),h=(n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var f="CHANGE_SEARCH_FIELD",b="FETCH_ROBOTS_START",g="FETCH_ROBOTS_SUCCESS",m="FETCH_ROBOTS_FAILURE",v=function(){return function(e){var t;e({type:b}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e(p(t))})).catch((function(t){return e(E(t))}))}},p=function(e){return{type:g,payload:e}},E=function(e){return{type:m,payload:e}},w=o.a.memo((function(){return o.a.createElement("h1",{className:"f1"},"RoboFriends")})),y=(n(28),function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))}),F=function(e){var t=e.robots;return console.log("Cardlist"),o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(y,{key:t,id:e.id,name:e.name,email:e.email})})))},O=function(e){var t=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},j=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px"}},e.children)},R=n(13),C=n(14),S=n(16),k=n(15),T=function(e){Object(S.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(R.a)(this,n),(r=t.call(this)).state={hasError:!1},r}return Object(C.a)(n,[{key:"componentDidCatch",value:function(e){console.log(e)}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(o.a.Component),A=(n(29),Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isFetching:e.requestRobots.isFetching,errorMessage:e.requestRobots.errorMessage}}),(function(e){return{setSearchField:function(t){return e((n=t.target.value,{type:f,payload:n}));var n},onFetchRobots:function(){return e(v())}}}))((function(e){var t=e.searchField,n=e.setSearchField,a=e.onFetchRobots,c=e.robots,i=e.isFetching;Object(r.useEffect)((function(){a()}),[a]);var s=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return i?o.a.createElement("h1",{className:"f1 tc"},"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(w,null),o.a.createElement(O,{searchField:t,searchChange:n}),o.a.createElement(j,null,o.a.createElement(T,null,o.a.createElement(F,{robots:s}))))}))),N=n(1),W={searchField:""},_={robots:[],isFetching:!1,errorMessaage:null},L=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object(N.a)(Object(N.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object(N.a)(Object(N.a)({},e),{},{isFetching:!0});case g:return Object(N.a)(Object(N.a)({},e),{},{robots:t.payload,isFetching:!1});case m:return Object(N.a)(Object(N.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}}}),x=Object(s.d)(L,Object(s.a)(u.a,l.logger));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:x},o.a.createElement(A,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/roboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/roboFriends","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.438221e9.chunk.js.map