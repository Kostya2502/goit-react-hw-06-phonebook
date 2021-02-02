(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(e,t,n){e.exports={item:"ContactList_item__2iMe1",button:"ContactList_button__2FNUW",enter:"ContactList_enter__33Ria",enterActive:"ContactList_enterActive__3In4F",exit:"ContactList_exit__1_xgR",exitActive:"ContactList_exitActive__2az2k"}},25:function(e,t,n){e.exports={enter:"Filter_enter__3uBWi",enterActive:"Filter_enterActive__1vE2r",exit:"Filter_exit__GRUOu",exitActive:"Filter_exitActive__3NgGk"}},26:function(e,t,n){e.exports={appear:"App_appear__DpWep",appearActive:"App_appearActive__79qHY"}},37:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(12),i=n.n(r),o=(n(37),n(11)),s=n(9),u=n.n(s),l=n(29),b=n(8),j=n(10),m=n(50),p=Object(j.b)("contact/add",(function(e,t){return{payload:{id:Object(m.a)(),name:e,number:t}}})),d=Object(j.b)("contact/delete"),O=Object(j.b)("contact/changeFilter");function _(){var e=Object(l.a)(),t=e.register,n=e.handleSubmit,r=e.errors,i=Object(a.useState)(""),s=Object(o.a)(i,2),j=s[0],m=s[1],d=Object(a.useState)(""),O=Object(o.a)(d,2),_=O[0],f=O[1],h=Object(b.c)(),x=Object(b.d)((function(e){return e.contacts.items})),v=function(){m(""),f("")},C=function(e){e.preventDefault();var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":m(c);break;case"number":f(c)}};return Object(c.jsxs)("form",{onSubmit:n((function(){if(x.map((function(e){return e.name.toLocaleLowerCase()})).includes(j.toLocaleLowerCase()))return v(),alert("".concat(j," is already in contacts!"));h(p(j,_)),v()})),className:u.a.form,children:[Object(c.jsxs)("label",{className:u.a.label,children:["Name:",Object(c.jsx)("input",{type:"text",name:"name",value:j,placeholder:"enter name",onChange:C,className:u.a.input,ref:t({required:!0})})]}),r.name&&"required"===r.name.type&&Object(c.jsx)("p",{className:u.a.warn,children:"This is required "}),Object(c.jsxs)("label",{className:u.a.label,children:["Number:",Object(c.jsx)("input",{type:"tel",name:"number",value:_,placeholder:"enter number",ref:t({required:!0,pattern:/^[0-9]+$/gm}),onChange:C,className:u.a.input})]}),r.number&&"required"===r.number.type&&Object(c.jsx)("p",{className:u.a.warn,children:"This is required "}),r.number&&"pattern"===r.number.type&&Object(c.jsx)("p",{className:u.a.warn,children:"There must be numbers"}),Object(c.jsx)("button",{type:"submit",className:u.a.button,children:"Add contact"})]})}var f,h=n(51),x=n(49),v=n(18),C=n.n(v),N=(n(44),function(){var e=Object(b.c)(),t=Object(b.d)((function(e){return function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))}(e.contacts.items,e.contacts.filter)}));return Object(c.jsx)(h.a,{component:"ul",children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(c.jsx)(x.a,{timeout:400,classNames:C.a,children:Object(c.jsxs)("li",{className:C.a.item,children:[Object(c.jsxs)("p",{children:[a,": ",r]}),Object(c.jsx)("button",{type:"button",onClick:function(){return function(t){return e(d(t))}(n)},className:C.a.button,children:"Delete"})]},n)},n)}))})}),g=n(25),y=n.n(g),F=Object(b.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{OnFilterContacts:function(t){return e(O(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.OnFilterContacts;return Object(c.jsx)("div",{classNames:y.a,children:Object(c.jsxs)("label",{children:["Find contacts by name:",Object(c.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"Search contact"})]})})})),A=n(26),L=n.n(A),w=Object(b.b)((function(e){return{value:e.contacts.filter,contacts:e.contacts.items}}))((function(e){var t=e.value,n=e.contacts;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{in:!0,classNames:L.a,appear:!0,timeout:1e3,unmountOnExit:!0,children:Object(c.jsx)("h1",{children:"Phonebook"})}),Object(c.jsx)(_,{}),Object(c.jsx)("h2",{children:"Contacts"}),(t.length>0||n.length>1)&&Object(c.jsx)(F,{}),Object(c.jsx)(N,{})]})})),k=n(27),q=n(7),S=n(2),T=n(3),E=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"}],(f={},Object(q.a)(f,p,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(q.a)(f,d,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),f)),R=Object(j.c)("",Object(q.a)({},O,(function(e,t){return t.payload}))),D=Object(T.c)({items:E,filter:R}),I=n(23),W=n(28),B={key:"contacts",storage:n.n(W).a,blacklist:["filter"]},G=Object(j.a)({reducer:{contacts:Object(I.a)(B,D)}}),H=Object(I.b)(G);i.a.render(Object(c.jsx)(b.a,{store:G,children:Object(c.jsx)(k.a,{loading:null,persistor:H,children:Object(c.jsx)(w,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ContactForm_form__3IEtN",label:"ContactForm_label__iApTQ",input:"ContactForm_input__1sL8X",button:"ContactForm_button__3nAOu",warn:"ContactForm_warn__10uxp"}}},[[47,1,2]]]);
//# sourceMappingURL=main.360fdf2d.chunk.js.map