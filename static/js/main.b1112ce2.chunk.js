(this["webpackJsonpreact-hw-two"]=this["webpackJsonpreact-hw-two"]||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),s=t.n(c),l=(t(15),t(1)),o=t(2),i=t(4),m=t(3),u=t(9),h=t(5),f=t.n(h),p=t(8),d=(t(17),[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}]),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[].concat(d),filtred:[].concat(d),search:""},e.handleSearchChange=function(){var a=Object(p.a)(f.a.mark((function a(t){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({search:t.target.value});case 2:e.qwe();case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.qwe=function(){e.setState((function(){var a=e.state.search.toLowerCase(),t=e.state.contacts.filter((function(e){return e.firstName.toLowerCase().includes(a)||e.lastName.toLowerCase().includes(a)||e.phone.toLowerCase().includes(a)}));return{filtred:Object(u.a)(t)}}))},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"osnova"},r.a.createElement("div",{className:"head"},r.a.createElement("h1",{className:"h1"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement("input",{className:"search__btn",type:"search",placeholder:"Search...",value:this.state.search,onChange:this.handleSearchChange}),r.a.createElement("div",{className:"profile"},r.a.createElement("img",{className:"photo",src:""}),r.a.createElement("div",null,r.a.createElement("h3",null,"Pasha Kharkavchyk ",r.a.createElement("br",null)))),this.state.filtred.map((function(e){return r.a.createElement("div",{className:"contactHead"},r.a.createElement("span",{className:"contactName"},"  ",e.firstName,r.a.createElement("br",null)),r.a.createElement("span",{className:"contactName"},"  ",e.lastName),r.a.createElement("span",null,"    (",e.phone,")"),r.a.createElement("span",null,"    ",e.gender," ",r.a.createElement("hr",null)))}))))}}]),t}(n.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.b1112ce2.chunk.js.map