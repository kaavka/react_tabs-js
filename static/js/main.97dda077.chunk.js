(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),r=n(0),o=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=e.some((function(t){return n===t.id}))?n:e[0].id;return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var e=t.title,n=t.id,i=a===n;return Object(r.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":i}),children:Object(r.jsx)("a",{href:"#".concat(n),"data-cy":"TabLink",onClick:function(){return i?null:c(t)},children:e})},n)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:e.find((function(t){return a===t.id})).content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(l[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(l.find((function(t){return n===t.id})).title)}),Object(r.jsx)(o,{tabs:l,onTabSelected:function(t){return c(t.id)},selectedTabId:n})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.97dda077.chunk.js.map