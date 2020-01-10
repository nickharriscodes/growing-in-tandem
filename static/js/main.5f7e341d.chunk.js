(this["webpackJsonpgrowing-in-tandem"]=this["webpackJsonpgrowing-in-tandem"]||[]).push([[0],{48:function(e,t,a){},70:function(e,t,a){e.exports=a(81)},75:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(75),a(26)),i=a(18),s=(a(48),a(11)),m=a(24),u=a(53),d=a(116),p=a(107),h=function(e){var t=e.waterToday,a=e.date;function n(e){return l.a.createElement("li",{"data-testid":"plant-name",key:e},e)}return l.a.createElement("div",{className:"message"},0===t.length?l.a.createElement(p.a,{variant:"h5",component:"h1",className:"no-watering"},"No plants need watering today!",l.a.createElement("br",null)," Enjoy some you time."):l.a.createElement(p.a,{variant:"h5",component:"h1"},l.a.createElement("strong",null,"To water on ",a.slice(0,10)),l.a.createElement("ol",null,t.map(n))))};var E=function(e){var t=e.toggleAddingPlant,a=Object(n.useState)(),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(),m=Object(i.a)(s,2),u=m[0],d=m[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),g=E[0],f=E[1],v=function(e,t){fetch("https://calm-cliffs-46733.herokuapp.com/plants",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,days:t})}).then((function(e){return e.json()})).then((function(e){Array.isArray(e)?console.log(e):console.log("failure")})).catch((function(e){return console.log(e)}))};return l.a.createElement("div",{className:"add-plant-form"},l.a.createElement(p.a,{variant:"h5",component:"h1"},l.a.createElement("strong",null,"Add Plant")),l.a.createElement("div",null,l.a.createElement("div",{className:"plant-name"},l.a.createElement("label",{htmlFor:"name-input"},"Plant Name",l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:function(e){return t=e.target.value,void d(t);var t},value:u||"",id:"name-input"}))),l.a.createElement("br",null),l.a.createElement("div",{className:"watering-freq"},l.a.createElement("label",{htmlFor:"days-input"},"Watering Frequency (Days)",l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:function(e){return t=e.target.value,void o(t);var t},value:c||"",id:"days-input"}))),l.a.createElement("br",null),g?l.a.createElement("p",{className:"error"},"Please enter plant name and a number of days"):null),l.a.createElement("button",{className:"submit-btn",type:"button",onClick:function(){var e=parseInt(c);Number.isInteger(e)?""===u||" "===u?f(!0):(v(u,c),d(""),o(""),f(!1),t(!0)):f(!0)}},"Submit"))},g=Object(m.e)((function(e){var t=e.allPlants,a=e.toggleAddingPlant,r=e.addingPlant,c=Object(n.useState)(new Date),s=Object(i.a)(c,2),m=s[0],u=s[1],p=Object(n.useState)([]),g=Object(i.a)(p,2),f=g[0],v=g[1],b=m.toString(),y=m.getTime(),w=Math.abs(158381634e4-y),N=Math.floor(w/864e5),j=m.getDay(),O=84-N,k=0===j||6===j;return Object(n.useEffect)((function(){!function(e){for(var t=[],a=0;a<=e.length-1;a++){var n=e[a].days,l=e[a].name,r=Number(n);O%r===0&&1===j?t.push(l):(3!==j&&5!==j&&1!==j||2!==r)&&(4!==j&&1!==j||3!==r)?1===j&&O%r===1&&2!==r&&3!==r?t.push(l):O%r!==0||2===r||3===r||Number.isInteger(r/7)||k?5===j&&O%r===r-1&&2!==r&&3!==r&&t.push(l):t.push(l):t.push(l)}console.log(t),v(t)}(t),a(!1)}),[m,t,r]),l.a.createElement("div",null,l.a.createElement("div",{className:"calendar-container"},l.a.createElement("div",null,l.a.createElement(E,{toggleAddingPlant:a})),l.a.createElement("div",{className:"date-picker-container"},l.a.createElement(d.a,{autoOk:!0,color:"secondary",orientation:"portrait",variant:"static",openTo:"date",value:m,onChange:u,"data-testid":"date-picker"})),l.a.createElement("div",null,f&&b?l.a.createElement(h,{waterToday:f,date:b}):null)),l.a.createElement("div",{className:"link-container"},l.a.createElement(o.b,{to:"/allplants",className:"link-component"},l.a.createElement("p",{className:"link"},"View All Plants"))))})),f=a(54),v=a(27),b=a.n(v),y=a(113),w=a(114),N=a(112),j=a(111),O=Object(m.e)((function(e){var t=e.allPlants,a=e.toggleAddingPlant,n=function(e){window.confirm("Delete plant?")&&fetch("https://calm-cliffs-46733.herokuapp.com/plants",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).then(a(!0)).catch((function(e){return console.log(e)}))};return l.a.createElement("div",null,l.a.createElement("div",{className:"link-container"},l.a.createElement(o.b,{to:"/",className:"link-component"},l.a.createElement("p",{className:"link"},"View Calendar"))),l.a.createElement("div",{className:"all-plants-container"},l.a.createElement("div",{className:"all-plants"},l.a.createElement(p.a,{variant:"h5",component:"h1"},l.a.createElement("strong",null,"All Plants"),l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(w.a,null,t?t.map((function(e,t){return l.a.createElement("div",{"data-testid":"plant-name",key:t},l.a.createElement(j.a,null,l.a.createElement(N.a,{align:"left"},l.a.createElement("p",{class:"cell-content"},e.name)),l.a.createElement(N.a,null,l.a.createElement("p",{className:"cell-content"},e.days," days")),l.a.createElement(N.a,null,l.a.createElement("button",{className:"delete-btn",type:"button",onClick:function(){return n(e.id)}},"X"))))})):null)))))))})),k=Object(f.a)({palette:{primary:b.a,secondary:b.a}});var P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),d=o[0],h=o[1],E=function(){fetch("https://calm-cliffs-46733.herokuapp.com/plants").then((function(e){return e.json()})).then((function(e){r(e)})).then(console.log("api has been hit",a)).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){E(),h(!1)}),[d]),l.a.createElement(s.a,{utils:u.a},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"heading"},l.a.createElement(p.a,{variant:"h2",component:"h1"},"Growing In Tandem"),l.a.createElement(p.a,{variant:"h6",component:"h1",className:"sub-heading"},l.a.createElement("i",null,"Lush office greenery is ",l.a.createElement("a",{href:"https://www.exeter.ac.uk/news/featurednews/title_409094_en.html",target:"_blank",rel:"noopener noreferrer",className:"study-link"},"proven")," to promote happiness and productivity amongst workers. Inspire personal growth by watering the plants on a regular basis!"),l.a.createElement("hr",null))),l.a.createElement("div",null,l.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(g,Object.assign({},e,{theme:k,allPlants:a,hitApi:E,toggleAddingPlant:h,addingPlant:d}))}})),l.a.createElement("div",null,l.a.createElement(m.a,{path:"/allplants",render:function(e){return l.a.createElement(O,Object.assign({},e,{theme:k,allPlants:a,toggleAddingPlant:h}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(115),S=Object(f.a)({palette:{primary:b.a,secondary:{main:b.a[300]}}}),C=l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(A.a,{theme:S},l.a.createElement(P,null))));c.a.render(C,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.5f7e341d.chunk.js.map