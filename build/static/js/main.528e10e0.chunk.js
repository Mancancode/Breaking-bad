(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(3),u=a.n(i),s=a(14),m=a(2),o=a(15),d=a.n(o),E=a.p+"static/media/Bbadlog.9e95c1da.png",g=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:E,alt:"logo_img"}))},p=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status)))))},f=a.p+"static/media/spinner.155fa329.gif",b=function(){return r.a.createElement("img",{src:f,style:{width:"200px",margin:"auto",display:"block",alt:"Loading"}})},h=function(e){var t=e.items;return e.isLoading?r.a.createElement(b,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(p,{key:e.char_id,item:e})})))},v=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement("section",{style:{padding:"10px"}},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Characters",value:l,onChange:function(e){return a=e.target.value,i(a),void t(a);var a},autoFocus:!0})))},y=(a(39),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],E=i[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),b=f[0],y=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://www.breakingbadapi.com/api/characters?name=".concat(b));case 2:t=e.sent,c(t.data),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(v,{getQuery:function(e){return y(e)}}),r.a.createElement(h,{isLoading:o,items:a}))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.528e10e0.chunk.js.map