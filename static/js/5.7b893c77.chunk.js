(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{19:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"error"})}},20:function(e,t,c){"use strict";var n=c(21),r=c.n(n),a=c(22),s=c(4),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],n=t[1];return{request:Object(i.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),n("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:c,setProcess:n}}(),t=e.request,c=e.clearError,n=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=0f63933eef0210b8256f2966cbc48725",j=210,h=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(d));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",d(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t="";return t=e.description?e.description.length>190?"".concat(e.description.slice(0,190)," ..."):e.description:"There is no description for this character",{name:e.name,id:e.id,description:t,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},m=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>0&&void 0!==a[0]?a[0]:j,e.next=3,t("".concat(l,"comics?limit=8&offset=").concat(c,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(r.a.mark((function e(c){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",p(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return{id:e.id,title:e.title,url:e.urls[0].url,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,name:e.series.name,price:e.prices[0].price,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us"}};return{process:n,setProcess:o,clearError:c,getAllCharacters:h,getCharacter:b,getAllComicses:m,getComics:f}}},24:function(e,t,c){"use strict";var n=c(9),r=c(19),a=(c(26),c(0)),s=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(a.jsx)(s,{});case"loading":return Object(a.jsx)(n.a,{});case"confirmed":return Object(a.jsx)(t,{data:c});case"error":return Object(a.jsx)(r.a,{});default:throw new Error("Unexpected process state")}}},26:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c(1),a=c(23),s=(c(35),c(20)),i=c.p+"static/media/mjolnir.61f31e18.png",o=c(24),l=c(0),u=function(e){var t=e.data,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(e){var t=Object(r.useState)({}),c=Object(n.a)(t,2),a=c[0],j=c[1],h=Object(s.a)(),b=h.getCharacter,d=h.clearError,m=h.process,f=h.setProcess;Object(r.useEffect)((function(){O()}),[]);var p=function(e){j(e)},O=function(){d();var e=Math.floor(400*Math.random()+1011e3);b(e).then(p).then((function(){return f("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(o.a)(m,u,a),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",children:Object(l.jsx)("div",{className:"inner",onClick:O,children:"try it"})}),Object(l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(27),b=(c(36),c(9)),d=c(19),m=function(e){var t=Object(r.useState)([]),c=Object(n.a)(t,2),a=c[0],i=c[1],o=Object(r.useState)(!1),u=Object(n.a)(o,2),j=u[0],m=u[1],f=Object(r.useState)(210),p=Object(n.a)(f,2),O=p[0],v=p[1],x=Object(r.useState)(!1),_=Object(n.a)(x,2),g=_[0],N=_[1],k=Object(s.a)(),w=k.getAllCharacters,y=k.process,C=k.setProcess;Object(r.useEffect)((function(){E(O,!0)}),[]);var E=function(e,t){m(!t),w(e).then(S).then((function(){return C("confirmed")}))},S=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),m((function(e){return!1})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(r.useRef)([]),P=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var M=Object(r.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(b.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(b.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(d.a,{});default:throw new Error("Unexpected process state")}}(y,(function(){return function(t){console.log("goooo");var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),P(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),P(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(a)}),j)}),[y]);return Object(l.jsxs)("div",{className:"char__list",children:[M,Object(l.jsx)("button",{className:"button button__main button__long",disabled:j,style:{display:g?"none":"block"},onClick:function(){return E(O)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},f=(c(37),function(e){var t=e.data,c=t.name,n=t.description,r=t.thumbnail,a=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:a,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"Homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"WiKi"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),p=function(e){var t=Object(r.useState)(null),c=Object(n.a)(t,2),a=c[0],i=c[1],u=Object(s.a)(),j=u.getCharacter,h=u.clearError,b=u.process,d=u.setProcess;Object(r.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(h(),j(t).then(p).then((function(){return d("confirmed")})))},p=function(e){i(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(o.a)(b,f,a)})},O=c(38),v=c(39),x=c(44),_=c(43),g=function(e){Object(x.a)(c,e);var t=Object(_.a)(c);function c(){var e;Object(O.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(v.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(d.a,{}):this.props.children}}]),c}(r.Component),N=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(a.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(g,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(g,{children:Object(l.jsx)(m,{onCharSelected:function(e){s(e)}})}),Object(l.jsx)(g,{children:Object(l.jsx)(p,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.7b893c77.chunk.js.map