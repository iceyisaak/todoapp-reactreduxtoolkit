(this["webpackJsonptodoapp-reactreduxtoolkit"]=this["webpackJsonptodoapp-reactreduxtoolkit"]||[]).push([[0],[,,,function(t,e,n){t.exports={h1:"Home_h1__1ZKCY",h4:"Home_h4__Z_nc1",header:"Home_header__TduQC",main:"Home_main__13HyB",container:"Home_container__3HKK4","btn-delall":"Home_btn-delall__2jHf0","btn-container":"Home_btn-container__ks1Iw"}},,,function(t,e,n){t.exports={form:"TaskForm_form__tU7LQ",input:"TaskForm_input__2FMyz",btn:"TaskForm_btn__28cx9","btn-text":"TaskForm_btn-text__DGnuN"}},function(t,e,n){t.exports={TaskItem:"TaskItem_TaskItem__35owO","task-name":"TaskItem_task-name__1ERD9","item-btn":"TaskItem_item-btn__1wd6B"}},,,function(t,e,n){t.exports={TaskList:"TaskList_TaskList__1PUZ7","no-task":"TaskList_no-task__3DlMB"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),i=n.n(s),o=n(12),r=n(5),l=n(21),d=n(0),u=Object(a.createContext)(),m=function(t){var e=t.children,n=JSON.parse(localStorage.getItem("tasks"))||[],c=Object(a.useState)(n),s=Object(r.a)(c,2),i=s[0],m=s[1],j=Object(a.useState)(null),b=Object(r.a)(j,2),k=b[0],_=b[1];Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(i))}),[i]);return Object(d.jsx)(u.Provider,{value:{addTask:function(t){m([].concat(Object(o.a)(i),[{taskEntry:t,id:Object(l.a)()}]))},tasks:i,deleteTask:function(t){window.confirm("Delete this task?")&&m(i.filter((function(e){return e.id!==t})))},editTask:function(t,e){var n=i.map((function(n){return n.id===e?{taskEntry:t,id:e}:n}));m(n),_(null)},deleteAllTasks:function(){window.confirm("Delete All Tasks?")&&m([])},findItem:function(t){var e=i.find((function(e){return e.id===t}));_(e)},editItem:k},children:e})},j=function(){return Object(a.useContext)(u)},b=n(2),k=n(6),_=n.n(k),f=function(){var t=j(),e=t.addTask,n=t.editTask,c=t.editItem,s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){l(c?c.taskEntry:"")}),[c]),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c?n(o,c.id):(e(o),l(""))},className:"".concat(_.a.form),children:[Object(d.jsx)("input",{type:"text",onChange:function(t){l(t.target.value)},placeholder:"e.g. Shopping",value:o,required:!0,className:"".concat(_.a.input),maxLength:25}),Object(d.jsx)("button",{className:"".concat(_.a.btn),children:Object(d.jsx)(b.a,{className:"".concat(_.a["btn-text"]," ","pointer")})})]})},x=n(7),O=n.n(x),h=function(t){var e=t.task,n=j(),a=n.deleteTask,c=n.findItem;return Object(d.jsxs)("li",{className:"".concat(O.a.TaskItem),children:[Object(d.jsx)("span",{className:"".concat(O.a["task-name"]),children:e.taskEntry}),Object(d.jsx)(b.d,{onClick:function(){c(e.id)},className:"pointer".concat(" ",O.a["item-btn"])}),Object(d.jsx)(b.c,{onClick:function(){a(e.id)},className:"pointer".concat(" ",O.a["item-btn"])})]})},p=n(10),T=n.n(p),N=function(){var t=j().tasks;return Object(d.jsxs)("div",{className:"".concat(T.a.TaskList),children:[0===t.length&&Object(d.jsx)("p",{className:"".concat(T.a["no-task"]),children:"+++ Task List is Empty +++"}),Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)(h,{task:t},t.id)}))})]})},v=n(3),I=n.n(v),g=function(){var t=j().deleteAllTasks;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"".concat(I.a.container),children:Object(d.jsxs)("main",{className:"".concat(I.a.main),children:[Object(d.jsx)(b.b,{onClick:t,className:"pointer".concat(" ",I.a["btn-delall"])}),Object(d.jsxs)("header",{className:"".concat(I.a.header),children:[Object(d.jsx)("h1",{className:"".concat(I.a.h1),children:"TodoApp"}),Object(d.jsx)("h4",{className:"".concat(I.a.h4),children:"React Redux Tookit"})]}),Object(d.jsx)(f,{}),Object(d.jsx)(N,{})]})})})};n(18);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{children:Object(d.jsx)(g,{})})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ff9a6228.chunk.js.map