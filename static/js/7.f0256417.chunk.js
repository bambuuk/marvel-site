(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{24:function(e,c,s){"use strict";var t=s(9),n=s(19),a=(s(26),s(0)),i=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})};c.a=function(e,c,s){switch(e){case"waiting":return Object(a.jsx)(i,{});case"loading":return Object(a.jsx)(t.a,{});case"confirmed":return Object(a.jsx)(c,{data:s});case"error":return Object(a.jsx)(n.a,{});default:throw new Error("Unexpected process state")}}},26:function(e,c,s){},42:function(e,c,s){},46:function(e,c,s){"use strict";s.r(c);var t=s(4),n=s(2),a=s(5),i=s(1),l=s(23),r=s(20),j=s(24),o=s(28),m=(s(42),s(0)),b=function(e){var c=e.data,s=c.title,t=c.description,n=c.pageCount,i=c.thumbnail,r=c.language,j=c.price;return Object(m.jsxs)("div",{className:"single-comic",children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)("meta",{name:"description",content:"".concat(s," comics book")}),Object(m.jsx)("title",{children:s})]}),Object(m.jsx)("img",{src:i,alt:s,className:"single-comic__img"}),Object(m.jsxs)("div",{className:"single-comic__info",children:[Object(m.jsx)("h2",{className:"single-comic__name",children:s}),Object(m.jsx)("p",{className:"single-comic__descr",children:t}),Object(m.jsx)("p",{className:"single-comic__descr",children:n}),Object(m.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),Object(m.jsxs)("div",{className:"single-comic__price",children:[j,"$"]})]}),Object(m.jsx)(a.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};c.default=function(){var e=Object(n.g)().comicId,c=Object(i.useState)(null),s=Object(t.a)(c,2),a=s[0],l=s[1],d=Object(r.a)(),u=d.getComics,O=d.clearError,_=d.process,x=d.setProcess;Object(i.useEffect)((function(){h()}),[e]);var h=function(){O(),u(e).then(p).then((function(){return x("confirmed")}))},p=function(e){l(e)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{}),Object(j.a)(_,b,a)]})}}}]);
//# sourceMappingURL=7.f0256417.chunk.js.map