(window["webpackJsonpm3-ev-intermedia-ana"]=window["webpackJsonpm3-ev-intermedia-ana"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),c=t.n(r),m=t(3),l=t(4),s=t(6),u=t(5),i=t(7),p=function(){return fetch("./pokemon-data.json").then((function(e){return e.json()})).then((function(e){return console.log(e),e.map((function(e){return{url:e.url,name:e.name,types:e.types}}))})).catch((function(e){console.log(e)}))},k=function(e){return a.a.createElement("li",null,a.a.createElement("img",{src:e.pokemon.url,alt:e.pokemon.name,title:e.pokemon.name}),a.a.createElement("div",{className:"pokemon__card"},a.a.createElement("h2",{className:"pokemon__name"},e.pokemon.name),a.a.createElement("ul",{className:"pokemon__types"},function(e){return e.pokemon.types.map((function(e,n){return a.a.createElement("li",{key:n},e)}))}(e))))},f=function(e){return a.a.createElement("ul",{className:"pokemon__list"},function(e){return console.log(e),e.pokemons.map((function(e,n){return a.a.createElement(k,{key:n,pokemon:e})}))}(e))},d=(t(13),function(e){function n(){var e;return Object(m.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).state={pokemons:[]},p().then((function(n){e.setState({pokemons:n})})),e}return Object(i.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.state.pokemons;return console.log(e),console.log("Rendering..."),a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"title"},"Mi lista de Pokemon"),a.a.createElement(f,{pokemons:e}))}}]),n}(a.a.Component));c.a.render(a.a.createElement(d,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.daec4030.chunk.js.map