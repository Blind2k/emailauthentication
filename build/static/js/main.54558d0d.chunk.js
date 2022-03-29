(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,n){e.exports={header:"MainNavigation_header__VtfOg",nav:"MainNavigation_nav__1emo9",active:"MainNavigation_active__16ziw",logo_top:"MainNavigation_logo_top__3ebFT"}},12:function(e,t,n){e.exports={overlay:"Popup_overlay__3fRsX",wrapper:"Popup_wrapper__3ef1r",modal:"Popup_modal__1R3Pb",modalclosebutton:"Popup_modalclosebutton__2Qas4","logo-error":"Popup_logo-error__2uz_Y"}},13:function(e,t,n){e.exports={auth:"AuthForm_auth__2YYrg",control:"AuthForm_control__1gv-Q",actions:"AuthForm_actions__mlbFH",toggle:"AuthForm_toggle__cW_Oc"}},21:function(e,t,n){e.exports={profile:"UserProfile_profile__2Q-lt"}},22:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__30ZXf"}},23:function(e,t,n){e.exports={starting:"StartingPageContent_starting__2OZly"}},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o,c=n(15),r=n.n(c),i=n(8),a=(n(28),n(1)),s=n.n(a),l=n(2),j=n(11),u=n.n(j),d=n.p+"static/media/logo.5bf39f11.png",b=n(4),O=n(0),h=s.a.createContext({token:"",isLogged:!1,login:function(e){},logout:function(){}}),m=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},g=function(e){var t,n=function(){var e=localStorage.getItem("verificationToken"),t=localStorage.getItem("verificationTime"),n=m(t);return n<=3600||n<=0?(localStorage.removeItem("verificationToken"),localStorage.removeItem("verificationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(a.useState)(t),r=Object(b.a)(c,2),i=r[0],s=r[1],l=!!i,j=Object(a.useCallback)((function(){s(null),localStorage.removeItem("verificationToken"),localStorage.removeItem("verificationTime"),o&&clearTimeout(o)}),[]);Object(a.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(j,n.duration))}),[n,j]);var u={token:i,isLogged:l,login:function(e,t){s(e),localStorage.setItem("verificationToken",e),localStorage.setItem("verificationTime",t);var n=m(t);o=setTimeout(j,n)},logout:j};return Object(O.jsx)(h.Provider,{value:u,children:e.children})},f=h,p=function(){var e=Object(a.useContext)(f),t=e.isLogged;return Object(O.jsxs)("header",{className:u.a.header,children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:d,className:u.a.logo_top,alt:"Our logo"})})}),Object(O.jsx)("nav",{className:u.a.nav,children:Object(O.jsxs)("ul",{children:[!t&&Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{activeClassName:u.a.active,to:"/auth",children:"Login"})}),t&&Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{activeClassName:u.a.active,to:"/profile",children:"Profile"})}),t&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:e.logout,children:Object(O.jsx)(i.b,{to:"/",children:"Logout"})})})]})})]})},x=function(e){return Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(p,{}),Object(O.jsx)("main",{children:e.children})]})},v=n(9),_=n.n(v),S=n(12),w=n.n(S),N=document.getElementById("overlays"),k=function(e){var t=e.isShowing,n=e.setHide,o=e.errorMessage;return t?r.a.createPortal(Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("div",{className:w.a.overlay,onClick:n}),Object(O.jsx)("div",{className:w.a.wrapper,"aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog",onClick:n,children:Object(O.jsxs)("div",{className:w.a.modal,children:[Object(O.jsxs)("header",{className:"modal-header",children:[Object(O.jsx)("img",{src:d,className:"logo-error",alt:"Our logo"}),Object(O.jsx)("button",{type:"button",className:w.a.modalclosebutton,"data-dismiss":"modal","aria-label":"Close",children:Object(O.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(O.jsx)("p",{className:w.a.p,children:o})]})})]}),N):null},T=function(){var e=Object(l.g)(),t=Object(a.useRef)(),n=Object(a.useContext)(f),o=Object(a.useState)(!1),c=Object(b.a)(o,2),r=c[0],i=c[1],s=Object(a.useState)(!1),j=Object(b.a)(s,2),u=j[0],d=j[1],h=Object(a.useState)(),m=Object(b.a)(h,2),g=m[0],p=m[1];return Object(O.jsxs)("form",{className:_.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;" "!==c.trim()&&fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC6dGNwU02TWzTJrXdA14s88P5FqjPH45g",{method:"POST",body:JSON.stringify({idToken:n.token,password:c,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();e.json().then((function(e){d(!0),p(e.error.message)}))})).then((function(t){i(!0),n.token=t.idToken,setTimeout((function(){e.replace("/")}),2e3)})).catch((function(e){console.log(e)}))},children:[r&&Object(O.jsx)(k,{errorMessage:"Password Change",setHide:function(){i((function(e){return!e}))},isShowing:r}),u&&Object(O.jsx)(k,{errorMessage:g,setHide:function(){d((function(e){return!e}))},isShowing:u}),Object(O.jsxs)("div",{className:_.a.control,children:[Object(O.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(O.jsx)("input",{type:"password",id:"new-password",ref:t})]}),Object(O.jsx)("div",{className:_.a.action,children:Object(O.jsx)("button",{children:"Change Password"})})]})},y=function(){var e=Object(l.g)(),t=Object(a.useRef)(),n=Object(a.useContext)(f),o=Object(a.useState)(!1),c=Object(b.a)(o,2),r=c[0],i=c[1],s=Object(a.useState)(),j=Object(b.a)(s,2),u=j[0],d=j[1];return Object(O.jsxs)("form",{className:_.a.form,onSubmit:function(o){o.preventDefault();var c=t.current.value;""!==c.trim()&&fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC6dGNwU02TWzTJrXdA14s88P5FqjPH45g",{method:"POST",body:JSON.stringify({idToken:n.token,email:c,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();e.json().then((function(e){i(!0),d(e.error.message)}))})).then((function(t){n.token=t.idToken,e.replace("/")})).catch((function(e){console.log(e)}))},children:[r&&Object(O.jsx)(k,{errorMessage:u,setHide:function(){i((function(e){return!e}))},isShowing:r}),Object(O.jsxs)("div",{className:_.a.control,children:[Object(O.jsx)("label",{htmlFor:"new-email",children:"New Email address"}),Object(O.jsx)("input",{type:"email",id:"new-email",ref:t})]}),Object(O.jsx)("div",{className:_.a.action,children:Object(O.jsx)("button",{children:"Change email"})})]})},P=n(21),C=n.n(P),F=function(){return Object(O.jsxs)("section",{className:C.a.profile,children:[Object(O.jsx)("h1",{children:"Your User Profile"}),Object(O.jsx)(T,{}),Object(O.jsx)(y,{})]})},I=n(22),A=n.n(I),H=function(){return Object(O.jsx)("div",{className:A.a.spinner})},z=n(13),L=n.n(z),M=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),r=Object(b.a)(c,2),i=r[0],s=r[1],j=Object(a.useState)(!1),u=Object(b.a)(j,2),d=u[0],h=u[1],m=Object(a.useState)(!1),g=Object(b.a)(m,2),p=g[0],x=g[1],v=Object(a.useRef)(),_=Object(a.useRef)(),S=Object(a.useContext)(f),w=Object(l.g)();return Object(O.jsxs)("section",{className:L.a.auth,children:[n&&Object(O.jsx)(k,{errorMessage:i,setHide:function(){o((function(e){return!e}))},isShowing:n}),Object(O.jsx)("h1",{children:d?"Login":"Sign Up"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(!0);var t,n=v.current.value,c=_.current.value;" "!==n.trim()&&(" "!==c.trim()&&(t=d?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6dGNwU02TWzTJrXdA14s88P5FqjPH45g":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6dGNwU02TWzTJrXdA14s88P5FqjPH45g",fetch(t,{method:"POST",body:JSON.stringify({email:n,password:c,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){if(x(!1),e.ok)return console.log("succed"),e.json();e.json().then((function(e){o(!0),s(e.error.message),console.log(e)}))})).then((function(e){var t=new Date((new Date).getTime()+1e3*+e.expiresIn);S.login(e.idToken,t.toISOString()),w.replace("/")})).catch((function(e){console.log("catch"+e)}))))},children:[Object(O.jsxs)("div",{className:L.a.control,children:[Object(O.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(O.jsx)("input",{ref:v,type:"email",id:"email",required:!0})]}),Object(O.jsxs)("div",{className:L.a.control,children:[Object(O.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(O.jsx)("input",{ref:_,type:"password",id:"password",required:!0})]}),p?Object(O.jsx)(H,{}):Object(O.jsxs)("div",{className:L.a.actions,children:[Object(O.jsx)("button",{children:d?"Login":"Create Account"}),Object(O.jsx)("button",{type:"button",className:L.a.toggle,onClick:function(){h((function(e){return!e}))},children:d?"Create new account":"Login with existing account"})]})]})]})},J=function(){return Object(O.jsx)(M,{})},U=n(23),D=n.n(U),W=function(){return Object(O.jsx)("section",{className:D.a.starting,children:Object(O.jsx)("h1",{children:"Welcome on Board!"})})},q=function(){return Object(O.jsx)(W,{})};var R=function(){var e=Object(a.useContext)(f);return Object(O.jsx)(x,{children:Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)("div",{children:Object(O.jsx)(H,{})}),children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{path:"/",exact:!0,children:Object(O.jsx)(q,{})}),Object(O.jsx)(l.b,{path:"/auth",children:Object(O.jsx)(J,{})}),Object(O.jsx)(l.b,{path:"/profile",children:e.isLogged?Object(O.jsx)(F,{}):Object(O.jsx)(l.a,{to:"auth"})}),Object(O.jsx)(l.b,{path:"*",children:Object(O.jsx)(l.a,{to:"/"})})]})})})};r.a.render(Object(O.jsxs)(g,{children:[Object(O.jsx)(i.a,{children:Object(O.jsx)(R,{})}),","]}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ProfileForm_form__3u3TM",control:"ProfileForm_control__UN0nv",action:"ProfileForm_action__BtH0Q"}}},[[38,1,2]]]);
//# sourceMappingURL=main.54558d0d.chunk.js.map