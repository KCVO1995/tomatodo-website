(this.webpackJsonptomatode=this.webpackJsonptomatode||[]).push([[0],{165:function(e,t,a){e.exports=a(305)},174:function(e,t,a){},195:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},226:function(e,t,a){},256:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},275:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),i=a(15),s=a(55),l=a(47),u=function(e,t){switch(e=e||[],t.type){case"ADD_TODO":return[t.payload].concat(Object(l.a)(e));case"INIT_TODOS":return Object(l.a)(t.payload);case"UPDATE_TODO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"EDIT_TODO":return e.map((function(e){return e.id===t.payload?Object.assign({},e,{editing:!0}):Object.assign({},e,{editing:!1})}));default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_TOMATO":return[t.payload].concat(Object(l.a)(e));case"INIT_TOMATOES":return t.payload;case"UPDATE_TOMATO":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"EDIT_TOMATO":return console.log("edit"),e.map((function(e){return e.id===t.payload?Object.assign({},e,{editing:!0}):Object.assign({},e,{editing:!1})}));default:return e}},m=Object(s.b)({todos:u,tomatoes:d}),p=Object(s.c)(m),f=(a(174),a(49),a(14)),E=a(6),v=a.n(E),h=a(11),T=a(313),b=a(42),y=a(45),O=a(137),g=a.n(O),w=a(19),j=g.a.create({baseURL:"https://gp-server.hunger-valley.com/",headers:{"t-app-id":"syzDKSikpvth7UQxVZjHadf2","t-app-secret":"fozkv4EKRftwyuSCTiiFdnLc"}});j.interceptors.request.use((function(e){var t=localStorage.getItem("x-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return console.error(e),Promise.reject(e)})),j.interceptors.response.use((function(e){return e.headers["x-token"]&&localStorage.setItem("x-token",e.headers["x-token"]),e}),(function(e){return 401===e.response.status&&Object(w.b)().push("/login"),Promise.reject(e)}));var k,N=j,D=(a(195),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(h.a)(c,2),s=i[0],l=i[1],u=Object(b.f)();return o.a.createElement("div",{className:"sign-up"},o.a.createElement("h1",null,"\u6b22\u8fce\u767b\u9646 Tomatodo"),o.a.createElement(f.a,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",prefix:o.a.createElement(T.a,null),onChange:function(e){r(e.target.value)}}),o.a.createElement(f.a.Password,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:function(e){l(e.target.value)}}),o.a.createElement("button",{onClick:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:N.post("sign_in/user",{account:a,password:s}).then((function(){console.log("\u767b\u9646\u6210\u529f"),u.push("/")}),(function(e){throw new Error(e)}));case 1:case"end":return e.stop()}}))},className:"login-button"},"\u767b\u9646"),"\u5982\u679c\u6ca1\u6709\u8d26\u53f7\uff0c\u8bf7\u7acb\u523b",o.a.createElement(y.b,{to:"/signUp",className:"link"},"\u6ce8\u518c"))}),C=(a(221),function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(h.a)(c,2),s=i[0],l=i[1],u=Object(n.useState)(""),d=Object(h.a)(u,2),m=d[0],p=d[1],E=Object(b.f)();return o.a.createElement("div",{className:"sign-up"},o.a.createElement("h1",null,"\u6b22\u8fce\u6ce8\u518c Tomatodo"),o.a.createElement(f.a,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",prefix:o.a.createElement(T.a,null),onChange:function(e){r(e.target.value)}}),o.a.createElement(f.a.Password,{size:"large",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:function(e){l(e.target.value)}}),o.a.createElement(f.a.Password,{size:"large",placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801",onChange:function(e){p(e.target.value)}}),o.a.createElement("button",{onClick:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:N.post("sign_up/user",{account:a,password:s,password_confirmation:m}).then((function(){console.log("\u6ce8\u518c\u6210\u529f"),E.push("/login")}),(function(e){throw new Error(e)}));case 1:case"end":return e.stop()}}))},className:"login-button"},"\u6ce8\u518c"),"\u5982\u679c\u5df2\u7ecf\u6709\u8d26\u53f7\uff0c\u8bf7\u7acb\u523b",o.a.createElement(y.b,{to:"/login",className:"link"},"\u767b\u9646"))}),x=a(26),_=a(309),S=a(310),M=a(317),I=(a(222),function(e){return{type:"INIT_TODOS",payload:e}}),A=function(e){return{type:"UPDATE_TODO",payload:e}},G=(a(223),a(224),a(162)),P=a(1),H=a.n(P),z=(a(226),a(314)),U=a(315),B={updateTodo:A,editTodo:function(e){return{type:"EDIT_TODO",payload:e}}},W=Object(i.b)((function(e,t){var a=e.todos;return Object(x.a)({todos:a},t)}),B)((function(e){var t=Object(n.useState)(e.todo.description),a=Object(h.a)(t,2),r=a[0],c=a[1],i=function(){s(""!==r?{description:r}:{deleted:!0})},s=function(t){var a,n;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.todo.id,o.prev=1,o.next=4,v.a.awrap(N.put("todos/".concat(a),t));case 4:n=o.sent,e.updateTodo(n.data.resource),o.next=11;break;case 8:throw o.prev=8,o.t0=o.catch(1),new Error(o.t0);case 11:case"end":return o.stop()}}),null,null,[[1,8]])},l=o.a.createElement("span",{onDoubleClick:function(){return t=e.todo.id,void e.editTodo(t);var t}},e.todo.description),u=o.a.createElement("div",{className:"editing"},o.a.createElement(f.a,{placeholder:"\u6309\u56de\u8f66\u952e\u786e\u8ba4\u5220\u9664\u8fd9\u4e2a\u4efb\u52a1",value:r,onChange:function(e){return c(e.target.value)},onPressEnter:i,autoFocus:!0}),o.a.createElement("div",{className:"iconWrapper"},o.a.createElement(z.a,{onClick:i}),o.a.createElement(U.a,{onClick:function(){return s({deleted:!0})}}))),d=H()({"input-todos":!0,editing:e.todo.editing,completed:e.todo.completed});return o.a.createElement("div",{className:d},o.a.createElement(G.a,{checked:e.todo.completed,onChange:function(e){s({completed:e.target.checked,completed_at:new Date})}}),e.todo.editing?u:l)})),F={addTodo:function(e){return{type:"ADD_TODO",payload:e}}},K=Object(i.b)((function(e){return Object(x.a)({},e)}),F)((function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),r=a[0],c=a[1],i=function(){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(""===r){a.next=14;break}return a.prev=1,a.next=4,v.a.awrap(N.post("todos",{description:r}));case 4:t=a.sent,e.addTodo(t.data.resource),c(""),a.next=12;break;case 9:throw a.prev=9,a.t0=a.catch(1),new Error(a.t0);case 12:a.next=15;break;case 14:alert("\u8bf7\u6307\u5b9a\u4e00\u4e2atodo");case 15:case"end":return a.stop()}}),null,null,[[1,9]])};return o.a.createElement("div",{className:"todo-input"},o.a.createElement(f.a,{size:"large",placeholder:"\u6dfb\u52a0\u65b0\u4efb\u52a1",suffix:r?o.a.createElement(z.a,{onClick:i}):o.a.createElement("span",null),onChange:function(e){return c(e.target.value)},onPressEnter:i,value:r}))})),R={initTodos:I},L=Object(i.b)((function(e,t){return Object(x.a)({},t)}),R)((function(e){return o.a.createElement("div",{className:"todos"},o.a.createElement(K,null),o.a.createElement("main",{className:"todoList"},e.unCompleted.map((function(e){return o.a.createElement(W,{key:e.id,todo:e})})),e.completed.map((function(e){return o.a.createElement(W,{key:e.id,todo:e})}))))})),J=function(e){return{type:"UPDATE_TOMATO",payload:e}},q=(a(256),a(87),a(18)),Q=(a(257),a(161)),V=a(145),Z=a(146),$=a(163),X=a(147),Y=a(164),ee=(a(259),function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object($.a)(this,Object(X.a)(t).call(this,e))).startCountDown=function(){k=setInterval((function(){var e=a.state.restTime;a.setState({restTime:e-1e3}),document.title="".concat(a.clock," - \u6709\u4e00\u4e2a\u756a\u8304\u6b63\u5728\u8fdb\u884c"),e<1e3&&(a.onTimeOver(),document.title="Tomatodo")}),1e3)},a.onTimeOver=function(){a.props.onfinish(),clearInterval(k)},a.state={restTime:a.props.timer},a}return Object(Y.a)(t,e),Object(Z.a)(t,[{key:"componentDidMount",value:function(){this.startCountDown()}},{key:"componentWillUnmount",value:function(){this.onTimeOver()}},{key:"render",value:function(){var e=1-this.state.restTime/this.props.duration;return o.a.createElement("div",{className:"countdown"},o.a.createElement("span",null,this.clock),o.a.createElement("div",{className:"progress",style:{width:"".concat(100*e,"%")}}))}},{key:"clock",get:function(){var e=Math.floor(this.state.restTime/1e3/60),t=Math.floor(this.state.restTime/1e3%60);return"".concat(e.toString().padStart(2,"0"),":").concat(t.toString().padStart(2,"0"))}}]),t}(o.a.Component)),te=a(316),ae=(a(260),function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),r=a[0],c=a[1],i=function(){var t=e.unfinishedTomato.id;e.updateTomato(t,{description:r,ended_at:new Date}),setTimeout((function(){c("")}),500)},s=function(){c(" "),c("")},l=Q.a.confirm,u=function(){l({title:"\u60a8\u76ee\u524d\u6b63\u5728\u4e00\u4e2a\u756a\u8304\u5de5\u4f5c\u65f6\u95f4\u4e2d\uff0c\u8981\u653e\u5f03\u8fd9\u4e2a\u756a\u8304\u5417\uff1f",width:500,mask:!0,keyboard:!0,onOk:function(){!function(){var t=e.unfinishedTomato.id;e.updateTomato(t,{aborted:!0})}()},onCancel:function(){}})};return o.a.createElement("div",{className:"tomato-action"},function(){if(!e.unfinishedTomato)return o.a.createElement(q.a,{onClick:e.startTomato,className:"startTomato"},"\u5f00\u59cb\u4e00\u4e2a\u756a\u8304");var t=e.unfinishedTomato,a=Date.parse(new Date),n=Date.parse(t.started_at),l=t.duration;return a-n<=l?o.a.createElement("div",{className:"timer-wrapper"},o.a.createElement(ee,{timer:l-a+n,onfinish:s,duration:l}),o.a.createElement(te.a,{className:"abort",onClick:u})):a-n>l?o.a.createElement("div",{className:"input-wrapper"},o.a.createElement(f.a,{value:r,placeholder:"\u4f60\u521a\u521a\u5b8c\u6210\u4e86\u4ec0\u4e48\u5de5\u4f5c\uff1f",onChange:function(e){return c(e.target.value)},onPressEnter:i}),o.a.createElement(te.a,{className:"abort",onClick:u})):void 0}())}),ne=a(308),oe=(a(275),function(e){return o.a.createElement("div",{className:"item"},o.a.createElement("span",{className:"duration"},Object(ne.a)(new Date(e.tomato.started_at),"HH:mm"),"-",Object(ne.a)(new Date(e.tomato.ended_at),"HH:mm")),o.a.createElement("span",{className:"description"},e.tomato.description))}),re=function(e){var t=Object.keys(e.finishedTomatoGroup).sort((function(e,t){return Date.parse(t)-Date.parse(e)})).splice(0,3).map((function(t){var a=e.finishedTomatoGroup[t];return o.a.createElement("div",{key:t,className:"tomato"},o.a.createElement("div",{className:"title"},o.a.createElement("span",{className:"date"},Object(ne.a)(new Date(t),"M\u6708d\u65e5")),o.a.createElement("span",{className:"finished"},"\u5b8c\u6210\u4e86",a.length,"\u4e2a\u756a\u8304")),a.map((function(e){return o.a.createElement(oe,{key:e.id,tomato:e})})))}));return o.a.createElement("div",{className:"tomato-list"},t)},ce={startTomato:function(e){return{type:"START_TOMATO",payload:e}},updateTomato:J},ie=Object(i.b)((function(e,t){return Object(x.a)({},t)}),ce)((function(e){return o.a.createElement("div",{className:"tomatoes"},o.a.createElement(ae,{startTomato:function(){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v.a.awrap(N.post("tomatoes",{duration:15e5}));case 3:t=a.sent,e.startTomato(t.data.resource),a.next=10;break;case 7:throw a.prev=7,a.t0=a.catch(0),new Error(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},unfinishedTomato:e.unfinishedTomatoes[0],updateTomato:function(t,a){var n;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,v.a.awrap(N.put("tomatoes/".concat(t),a));case 3:n=o.sent,e.updateTomato(n.data.resource),o.next=10;break;case 7:throw o.prev=7,o.t0=o.catch(0),new Error(o.t0);case 10:case"end":return o.stop()}}),null,null,[[0,7]])}}),o.a.createElement(re,{finishedTomatoGroup:e.finishedTomatoGroup}))})),se=a(58),le=a.n(se),ue=(a(277),a(278),function(e){return o.a.createElement("div",{className:"polygon"},o.a.createElement("svg",null,o.a.createElement("polygon",{fill:"rgba(215,78,78,0.1)",stroke:"rgba(215,78,78,0.5)",strokeWidth:"1",points:function(){var t=Object.keys(e.dailyTodo).sort((function(e,t){return Date.parse(e)-Date.parse(t)})),a=Date.parse(t[0])-864e5;if(a){var n=(new Date).getTime()-a,o=0,r=t.map((function(t){var r=(Date.parse(t)-a)/n*240;0===n&&(r=240);var c=60*(1-(o+=e.dailyTodo[t].length)/e.totalCompleted);return"".concat(r,",").concat(c)}));return["0,60"].concat(Object(l.a)(r),["240,0","240,60"]).join(" ")}return"0,60 240,60"}()})))}),de=(a(279),a(84)),me=a(312),pe=a(307),fe=(a(281),a(282),{updateTodo:A,updateTomato:J,editTomato:function(e){return{type:"EDIT_TOMATO",payload:e}}}),Ee=Object(i.b)((function(e,t){return Object(x.a)({},t)}),fe)((function(e){var t=Object(n.useState)(e.data.description),a=Object(h.a)(t,2),r=a[0],c=a[1],i=function(){l(""!==r?{description:r}:{aborted:!0})},s=function(t){var a,n;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=e.data.id,o.prev=1,o.next=4,v.a.awrap(N.put("todos/".concat(a),t));case 4:n=o.sent,e.updateTodo(n.data.resource),o.next=11;break;case 8:throw o.prev=8,o.t0=o.catch(1),new Error(o.t0);case 11:case"end":return o.stop()}}),null,null,[[1,8]])},l=function(t){var a,n;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(1),a=e.data.id,o.prev=2,o.next=5,v.a.awrap(N.put("tomatoes/".concat(a),t));case 5:n=o.sent,e.updateTomato(n.data.resource),o.next=12;break;case 9:throw o.prev=9,o.t0=o.catch(2),new Error(o.t0);case 12:case"end":return o.stop()}}),null,null,[[2,9]])};return o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"detail"},"completed"===e.itemType?o.a.createElement("span",{className:"time"},Object(ne.a)(new Date(e.data.updated_at),"HH:mm")):"deleted"===e.itemType?o.a.createElement("span",{className:"time"},Object(ne.a)(new Date(e.data.updated_at),"M\u6708d\u65e5")):"finishedToamto"===e.itemType?o.a.createElement("span",{className:"time"},Object(ne.a)(new Date(e.data.started_at),"HH:mm"),"-",Object(ne.a)(new Date(e.data.ended_at),"HH:mm")):"abortTomato"===e.itemType?o.a.createElement("span",{className:"time"},Object(ne.a)(new Date(e.data.started_at),"M\u6708d\u65e5")):void 0,"finishedToamto"!==e.itemType&&"abortTomato"!==e.itemType||!e.data.editing?o.a.createElement("span",null,e.data.description||"\u8fd9\u662f\u4e00\u4e2a\u6ca1\u6709\u63cf\u8ff0\u7684\u756a\u8304"):o.a.createElement(f.a,{placeholder:"\u6309\u56de\u8f66\u952e\u786e\u8ba4\u5220\u9664\u8fd9\u4e2a\u4efb\u52a1",value:r,onChange:function(e){return c(e.target.value)},onPressEnter:i,autoFocus:!0})),"completed"===e.itemType?o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){return s({completed:!1})}},"\u6062\u590d "),o.a.createElement("span",{onClick:function(){return s({deleted:!0})}},"\u5220\u9664")):"deleted"===e.itemType?o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){return s({deleted:!1})}},"\u6062\u590d")):"finishedToamto"===e.itemType?e.data.editing?o.a.createElement("div",{className:"action editing"},o.a.createElement("span",{onClick:i},"\u63d0\u4ea4 "),o.a.createElement("span",{onClick:function(){return l({editing:!1})}},"\u53d6\u6d88")):o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){return e.editTomato(e.data.id)}},"\u7f16\u8f91 "),o.a.createElement("span",{onClick:function(){return l({aborted:!0})}},"\u5220\u9664")):"abortTomato"===e.itemType?e.data.editing?o.a.createElement("div",{className:"action editing"},o.a.createElement("span",{onClick:i},"\u63d0\u4ea4 "),o.a.createElement("span",{onClick:function(){return l({editing:!1})}},"\u53d6\u6d88")):o.a.createElement("div",{className:"action"},o.a.createElement("span",{onClick:function(){return e.editTomato(e.data.id)}},"\u7f16\u8f91 ")):void 0)})),ve=de.a.TabPane,he=function(e){var t=function(){return le.a.groupBy(e.completed,(function(e){return Object(ne.a)(new Date(e.updated_at),"yyyy-MM-d")}))},a=function(e){return Object.keys(e).sort((function(e,t){return Date.parse(t)-Date.parse(e)}))},n=a(t()).map((function(e){var a=t()[e];return o.a.createElement("div",{key:e,className:"list"},o.a.createElement("div",{className:"title"},o.a.createElement("div",null,o.a.createElement("span",{className:"date"},Object(ne.a)(new Date(e),"M\u6708d\u65e5")),o.a.createElement("span",null,Object(ne.a)(new Date(e),"E"))),o.a.createElement("span",null,"\u5b8c\u6210\u4e86 ",a.length," \u4e2a\u4efb\u52a1")),o.a.createElement("div",{className:"items"},a.map((function(e){return o.a.createElement(Ee,{data:e,key:e.id,itemType:"completed"})}))))})),r=e.deleted.map((function(e){return o.a.createElement(Ee,{data:e,key:e.id,itemType:"deleted"})})),c=a(e.finishedTomatoGroup).map((function(t){var a=e.finishedTomatoGroup[t],n=0;a.forEach((function(e){n+=Object(me.a)(Object(pe.a)(e.ended_at.toString()),Object(pe.a)(e.started_at.toString()))}));var r=Math.floor(n/60)<1?"":" ".concat(Math.floor(n/60)," \u5c0f\u65f6");return o.a.createElement("div",{key:t,className:"list"},o.a.createElement("div",{className:"title"},o.a.createElement("div",null,o.a.createElement("span",{className:"date"},Object(ne.a)(new Date(t),"M\u6708d\u65e5")),o.a.createElement("span",null,Object(ne.a)(new Date(t),"E"))),o.a.createElement("div",null,"\u5b8c\u6210\u4e86 ",a.length," \u4e2a\u756a\u8304"),o.a.createElement("span",null,"\u603b\u8ba1",r," ".concat(n%60," \u5206\u949f"))),o.a.createElement("div",{className:"items"},a.map((function(e){return o.a.createElement(Ee,{data:e,key:e.id,itemType:"finishedToamto"})}))))})),i=e.abortTomatoes.map((function(e){return o.a.createElement(Ee,{data:e,key:e.id,itemType:"abortTomato"})}));return o.a.createElement(o.a.Fragment,null,"todo"===e.historyType?(console.log(1),o.a.createElement("div",{className:"todo-history"},o.a.createElement(de.a,{defaultActiveKey:"1"},o.a.createElement(ve,{tab:"\u5df2\u5b8c\u6210\u4efb\u52a1",key:"1"},n),o.a.createElement(ve,{tab:"\u5df2\u5220\u9664\u4efb\u52a1",key:"2"},r)))):"tomato"===e.historyType?o.a.createElement("div",{className:"todo-history"},o.a.createElement(de.a,{defaultActiveKey:"1"},o.a.createElement(ve,{tab:"\u5b8c\u6210\u7684\u756a\u8304",key:"1"},c),o.a.createElement(ve,{tab:"\u88ab\u6253\u65ad\u7684\u756a\u8304",key:"2"},i))):void 0)},Te=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),r=a[0],c=a[1];return o.a.createElement("div",{className:"statistics"},o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){return c("tomato")},className:"tomato"===r?"active":""},o.a.createElement("div",{className:"text"},o.a.createElement("span",{className:"title"},"\u756a\u8304\u5386\u53f2"),o.a.createElement("span",null,"\u7d2f\u8ba1\u5b8c\u6210\u756a\u8304"),o.a.createElement("span",{className:"count"},e.finishedTomatoes.length)),o.a.createElement(ue,{dailyTodo:e.finishedTomatoGroup,totalCompleted:e.finishedTomatoes.length})),o.a.createElement("li",{onClick:function(){return c("todo")},className:"todo"===r?"active":""},o.a.createElement("div",{className:"text"},o.a.createElement("span",{className:"title"},"\u4efb\u52a1\u5386\u53f2"),o.a.createElement("span",null,"\u7d2f\u8ba1\u5b8c\u6210\u4efb\u52a1"),o.a.createElement("span",{className:"count"},e.completed.length)),o.a.createElement(ue,{dailyTodo:le.a.groupBy(e.completed,(function(e){return Object(ne.a)(new Date(e.updated_at),"yyyy-MM-d")})),totalCompleted:e.completed.length}))),r?o.a.createElement(he,{finishedTomatoGroup:e.finishedTomatoGroup,abortTomatoes:e.abortTomatoes,completed:e.completed,deleted:e.deleted,historyType:r}):o.a.createElement("span",null))},be={initTodos:I,initTomatoes:function(e){return{type:"INIT_TOMATOES",payload:e}}},ye=Object(i.b)((function(e,t){var a=e.todos,n=a.filter((function(e){return e.deleted})),o=a.filter((function(e){return!e.deleted})),r=o.filter((function(e){return e.completed}))||[],c=o.filter((function(e){return!e.completed}))||[],i=e.tomatoes,s=e.tomatoes.filter((function(e){return e.aborted&&!e.ended_at})),l=e.tomatoes.filter((function(e){return!e.description&&!e.ended_at&&!e.aborted})),u=e.tomatoes.filter((function(e){return e.description&&e.ended_at&&!e.aborted})),d=le.a.groupBy(u,(function(e){return Object(ne.a)(new Date(e.started_at),"yyyy-MM-d")}));return Object(x.a)({todos:a,deleted:n,completed:r,unCompleted:c,tomatoes:i,unfinishedTomatoes:l,finishedTomatoGroup:d,finishedTomatoes:u,abortTomatoes:s},t)}),be)((function(e){var t=Object(b.f)(),a=Object(n.useState)({}),r=Object(h.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)((function(){!function(){var e;v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(N.get("/me"));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}))}(),function(){var t,a;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(N.get("todos"));case 3:t=n.sent,a=t.data.resources.map((function(e){return Object.assign({},e,{editing:!1})})),e.initTodos(a),n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}(),function(){var t,a;v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(N.get("tomatoes"));case 3:t=n.sent,a=t.data.resources.map((function(e){return Object.assign({},e,{editing:!1})})),console.log(a),e.initTomatoes(a),n.next=12;break;case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0);case 12:case"end":return n.stop()}}),null,null,[[0,9]])}()}),[]);var s=o.a.createElement(_.a,null,o.a.createElement(_.a.Item,{key:"1"},o.a.createElement("span",null,"\u504f\u597d\u8bbe\u7f6e")),o.a.createElement(_.a.Item,{key:"2",onClick:function(){localStorage.setItem("x-token",""),t.push("/login")}},o.a.createElement("span",null,"\u767b\u51fa")));return o.a.createElement("div",{className:"index"},o.a.createElement("header",null,o.a.createElement("h1",null,"Tomatodo"),o.a.createElement(S.a,{overlay:s,trigger:["click"]},o.a.createElement("a",{href:" ",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},o.a.createElement("span",null,c.account),o.a.createElement(M.a,null)))),o.a.createElement("main",null,o.a.createElement(ie,{finishedTomatoGroup:e.finishedTomatoGroup,unfinishedTomatoes:e.unfinishedTomatoes}),o.a.createElement(L,{completed:e.completed,unCompleted:e.unCompleted})),o.a.createElement(Te,{completed:e.completed,deleted:e.deleted,finishedTomatoGroup:e.finishedTomatoGroup,finishedTomatoes:e.finishedTomatoes,abortTomatoes:e.abortTomatoes}))})),Oe=function(){return o.a.createElement(y.a,null,o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/login"},o.a.createElement(D,null)),o.a.createElement(b.a,{path:"/signUp"},o.a.createElement(C,null)),o.a.createElement(b.a,{exact:!0,path:"/"},o.a.createElement(ye,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(i.a,{store:p},o.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[165,1,2]]]);
//# sourceMappingURL=main.16080184.chunk.js.map