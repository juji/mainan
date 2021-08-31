(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{5614:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return j}});var a=e(168),r=e(7294),s=e(9008),i=e(1664),l=e(9163),u=e(9103);var o=function(n,t){var e=.5*(1-n/(t+n));return Math.round(1e5*e)/1e3};var h=[2,3,4,5,6,7,8,9,10];function c(){var n=(0,r.useState)(),t=n[0],e=n[1],a=(0,r.useState)(),s=a[0],i=a[1];return(0,r.useEffect)((function(){i(t?function(n){return h.map((function(t){return{shaft:n-t,point:t,foc:o(n-t,t)}}))}(t):null)}),[t]),{arrowGr:t,onArrowGrChange:function(n){return e(1*n.target.value)},focPair:s}}var d=[2,3,4,5,6,7,8,9,10];function f(){var n=(0,r.useState)(),t=n[0],e=n[1],a=(0,r.useState)(),s=a[0],i=a[1];return(0,r.useEffect)((function(){i(t?function(n){return d.map((function(t){return{point:t,foc:o(n,t)}}))}(t):null)}),[t]),{shaftGr:t,onShaftGrChange:function(n){return e(1*n.target.value)},focPair:s}}var p,x=e(5893),g=l.ZP.div(p||(p=(0,a.Z)(["\n\n  .box{\n    padding: 34px;\n    border: 1px solid #aeaeae;\n    border-radius: 5px;\n    margin-bottom: 21px;\n\n    .input{\n      margin-bottom: 13px;\n    }\n\n  }\n\n  .table{\n\n    th,td{\n      padding: 8px;\n      text-align: left;\n    }\n\n    th{\n      border-bottom: 1px solid #aeaeae;\n    }\n\n  }\n"])));function j(){var n=function(){var n=(0,r.useState)(),t=n[0],e=n[1],a=(0,r.useState)(),s=a[0],i=a[1],l=(0,r.useState)(),u=l[0],h=l[1],c=(0,r.useState)(),d=c[0],f=c[1];return(0,r.useEffect)((function(){t&&s&&f(o(t,s))}),[s,t]),{foc:d,shaftGr:t,pointGr:s,arrowIn:u,onShaftGrChange:function(n){return e(1*n.target.value)},onArrowInChange:function(n){return h(1*n.target.value)},onpointGrChange:function(n){return i(1*n.target.value)}}}(),t=n.foc,e=n.shaftGr,a=n.pointGr,l=n.onShaftGrChange,h=n.onpointGrChange,d=c(),p=d.arrowGr,j=d.onArrowGrChange,m=d.focPair,b=f(),v=b.shaftGr,C=b.onShaftGrChange,N=b.focPair;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.default,{children:(0,x.jsx)("title",{children:"Ngitung FOC"})}),(0,x.jsxs)(g,{children:[(0,x.jsxs)("div",{className:"title",children:[(0,x.jsx)(i.default,{href:"/",children:(0,x.jsx)("a",{children:"< home"})}),(0,x.jsx)("h1",{children:"Ngitung FOC"})]}),(0,x.jsxs)("div",{className:"box",children:[(0,x.jsx)("h3",{children:"Kasus Pertama"}),(0,x.jsxs)("p",{children:["Dengan berat shaft dan berat point ",(0,x.jsx)("i",{children:"sekian"}),", FOC nya berapa?"]}),(0,x.jsx)(u.Z,{value:e,onChange:l,inputProps:{type:"number",step:"0.01"},classes:{root:"input"},fullWidth:!0,variant:"outlined",helperText:"tanpa poin, dalam gram",label:"Berat shaft"}),(0,x.jsx)(u.Z,{value:a,onChange:h,inputProps:{type:"number",step:"0.01"},classes:{root:"input"},fullWidth:!0,variant:"outlined",helperText:"dalam gram",label:"Berat point"}),(0,x.jsx)("div",{className:"result",children:(0,x.jsxs)("h3",{children:["Estimasi FOC: ",t?"".concat(t,"%"):"ngga tau"]})})]}),(0,x.jsxs)("div",{className:"box",children:[(0,x.jsx)("h3",{children:"Kasus Kedua"}),(0,x.jsxs)("p",{children:["Saya pengen punya arrow dengan berat total ",(0,x.jsx)("i",{children:"sekian"})," gram. Untuk dapet FOC yang saya mau, berapa berat point dan shaft?"]}),(0,x.jsx)(u.Z,{value:p,onChange:j,inputProps:{type:"number",step:"0.01"},classes:{root:"input"},fullWidth:!0,variant:"outlined",helperText:"dalam gram",label:"Berat arrow total"}),(0,x.jsxs)("div",{className:"result",children:[(0,x.jsxs)("h3",{children:["Estimasi FOC menurut kombinasi shaft+point: ",m?"":"ngga tau"]}),m&&m.length?(0,x.jsxs)("table",{className:"table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Shaft (gr)"}),(0,x.jsx)("th",{children:"Point (gr)"}),(0,x.jsx)("th",{children:"FOC %"})]})}),(0,x.jsx)("tbody",{children:m.map((function(n){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n.shaft}),(0,x.jsx)("td",{children:n.point}),(0,x.jsx)("td",{children:n.foc})]},"".concat(JSON.stringify(n)))}))})]}):null]})]}),(0,x.jsxs)("div",{className:"box",children:[(0,x.jsx)("h3",{children:"Kasus Ketiga"}),(0,x.jsxs)("p",{children:["Saya punya shaft ",(0,x.jsx)("i",{children:"sekian"})," gram. Untuk FOC ",(0,x.jsx)("i",{children:"sekian"}),", pointnya berapa gram?"]}),(0,x.jsx)(u.Z,{value:v,onChange:C,inputProps:{type:"number",step:"0.01"},classes:{root:"input"},fullWidth:!0,variant:"outlined",helperText:"tanpa poin, dalam gram",label:"Berat shaft"}),(0,x.jsxs)("div",{className:"result",children:[(0,x.jsxs)("h3",{children:["Estimasi FOC menurut point: ",N?"":"ngga tau"]}),N&&N.length?(0,x.jsxs)("table",{className:"table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Point (gr)"}),(0,x.jsx)("th",{children:"FOC %"})]})}),(0,x.jsx)("tbody",{children:N.map((function(n){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:n.point}),(0,x.jsx)("td",{children:n.foc})]},"".concat(JSON.stringify(n)))}))})]}):null]})]})]})]})}},9608:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ngitung-foc",function(){return e(5614)}])}},function(n){n.O(0,[774,408,888,179],(function(){return t=9608,n(n.s=t);var t}));var t=n.O();_N_E=t}]);