(this.webpackJsonpheroes=this.webpackJsonpheroes||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/no.4b57a28e.svg"},19:function(e,t,n){e.exports=n.p+"static/media/gb.49e28de8.svg"},25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(30),n(11)),l=n(18),s=n.n(l),u=n(19),m=n.n(u),f=(n(14),n(15)),p=n.n(f),h=n(20),g=n(16),E=n.n(g),d=(n(21),function(){var e=Object(h.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||"en-gb",e.abrupt("return",E.a.api("https://my-heroes.cdn.prismic.io/api/v2").then((function(e){return e.query(E.a.Predicates.at("document.type",t),{lang:n}).then((function(e){if(e)return e.results.map((function(e){return e.data}))}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=n(52);var b=function(e){return r.a.createElement("div",{className:"Hero"},r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement("img",{className:"Picture",src:e.img,alt:"hero"})),r.a.createElement(v.a,{item:!0,xs:8},r.a.createElement("h4",null,e.name),r.a.createElement("p",null,e.power&&e.power.name[0].text))))};var w=function(e){var t=r.a.useState(null),n=Object(i.a)(t,2),c=n[0],o=n[1];Object(a.useEffect)((function(){d("superhero").then((function(e){return console.log(e),o(e)}))}),[]);var l=r.a.useState(null),s=Object(i.a)(l,2),u=s[0],m=s[1];Object(a.useEffect)((function(){d("power",e.lang).then((function(e){return console.log(e),m(e)}))}),[e.lang]);var f=r.a.useState(null),p=Object(i.a)(f,2),h=p[0],g=p[1];return Object(a.useEffect)((function(){d("title",e.lang).then((function(e){return console.log(e),g(e)}))}),[e.lang]),r.a.createElement("div",{className:"HeroList"},r.a.createElement("h1",null,null!=h&&h[0].title),c&&c.map((function(e,t){var n=u.find((function(t){return e.power.uid===t.iid}));return r.a.createElement(b,{hero:e,name:e.name[0].text,img:e.picture.url,power:n,key:t})})))},x=n(53);var j=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,xs:7},r.a.createElement("h5",null,"Prismic demo 2020")),r.a.createElement(v.a,{item:!0,xs:3},r.a.createElement(x.a,{onClick:function(){return a(!n)}},n?r.a.createElement("img",{src:s.a,alt:"no",className:"Flag"}):r.a.createElement("img",{src:m.a,alt:"gb",className:"Flag"}))))),r.a.createElement(v.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(v.a,{item:!0,xs:5},r.a.createElement(w,{lang:n?"no":"en-gb"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.55cd1f8a.chunk.js.map