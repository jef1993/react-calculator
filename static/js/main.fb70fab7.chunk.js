(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{28:function(e,t,c){},38:function(e,t){},39:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c(20),a=c.n(s),i=(c(28),c(6)),l=c(40),u=c(15),m=c(3),r=function e(t,c){Object(u.a)(this,e),this.name=t,this.symbol=c},o=[["cancel","C"],["delete","DEL"],["divide","/"],["multiply","*"],["num-7",7],["num-8",8],["num-9",9],["minus","-"],["num-4",4],["num-5",5],["num-6",6],["plus","+"],["num-1",1],["num-2",2],["num-3",3],["equal","="],["num-0",0],["decimal","."]].map((function(e){return new r(e[0],e[1])})),j=function(e){return Object(m.jsx)("button",{className:e.class,onClick:e.click,children:e.content})};var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),u=Object(i.a)(a,2),r=u[0],b=u[1],d=function(e){var t=e.target.innerHTML;if("C"===t)s(c.slice(0,-1));else if("DEL"===t)s(""),b("");else if("="===t){var n=Object(l.a)(c[c.length-1].match(/\D/)?c.slice(0,-1):c).toString();s(n),b(n)}else t.match(/\D/)&&c.slice(-1).match(/\D/)?(s(c.slice(0,-1)+t),t.match(/[*/]/)&&1===c.length&&s(c)):s(t.match(/[*/]/)&&""===c?"":c+t)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"monitor",children:[Object(m.jsx)("div",{className:"monitor__input",children:c}),Object(m.jsx)("div",{className:"monitor__output",children:r})]}),Object(m.jsx)("div",{className:"buttons",children:o.map((function(e,t){return Object(m.jsx)(j,{class:e.name,content:e.symbol,click:d},t)}))})]})})};a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fb70fab7.chunk.js.map