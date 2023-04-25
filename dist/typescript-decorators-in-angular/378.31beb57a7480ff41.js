"use strict";(self.webpackChunktypescript_decorators_in_angular=self.webpackChunktypescript_decorators_in_angular||[]).push([[378],{7378:(x,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>C});var c=r(269),n=r(8256),u=r(9300),d=r(4736),h=r(6895),s=r(433);function m(i,g){1&i&&(n.TgZ(0,"span",9),n._uU(1,"Invalid inputs"),n.qZA())}const M=[{path:"",component:(()=>{class i{constructor(t,e){this.authService=t,this.router=e,this.validEmailRegex=/^[A-Za-z0-9!#$%&'*+/=?^_{|}()~-]+(\.[_A-Za-z0-9!#$%&'*+/=?^_{|}()~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,15})$/}ngOnInit(){}signUp(t,e){this.authService.signup(t,e).then(o=>{}).catch(o=>{})}googleAuth(){this.authService.sigupWithGoogle().then(t=>{c.hJ.credentialFromResult(t)}).catch(t=>{c.hJ.credentialFromError(t)})}githubAuth(){this.authService.sigupWithGithub().then(t=>{c.GH.credentialFromResult(t)}).catch(t=>{c.GH.credentialFromError(t)})}signIn(t,e){t&&e&&this.validEmailRegex.test(t)?(this.hasErrors=!1,this.authService.signin(t,e).then(o=>{this.router.navigate(["/profile"])}).catch(o=>{})):this.hasErrors=!0}signOut(){this.authService.signout().then(()=>{}).catch(t=>{})}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(u.e),n.Y36(d.F0))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-auth"]],decls:29,vars:3,consts:[["role","banner",1,"toolbar"],["width","40","alt","Angular Logo","src","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="],["role","main",1,"content"],[1,"card-container"],["for","email",1,"input-field-label"],["type","email","placeholder","Enter email",1,"input-field",3,"ngModel","ngModelChange"],["type","password","placeholder","Enter password",1,"input-field",3,"ngModel","ngModelChange"],["class","error-messages",4,"ngIf"],["tabindex","0",1,"card","card-small",3,"click"],[1,"error-messages"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"img",1),n.TgZ(2,"span"),n._uU(3,"Firebase Authentication in Angular"),n.qZA()(),n.TgZ(4,"div",2)(5,"h2"),n._uU(6,"Welcome!"),n.qZA(),n.TgZ(7,"div",3)(8,"label",4),n._uU(9,"Email"),n.qZA(),n.TgZ(10,"div")(11,"input",5),n.NdJ("ngModelChange",function(a){return e.email=a}),n.qZA()(),n.TgZ(12,"label",4),n._uU(13,"Password"),n.qZA(),n.TgZ(14,"div")(15,"input",6),n.NdJ("ngModelChange",function(a){return e.password=a}),n.qZA()(),n.YNc(16,m,2,0,"span",7),n.TgZ(17,"button",8),n.NdJ("click",function(){return e.signUp(e.email,e.password)}),n.TgZ(18,"span"),n._uU(19,"Sign up"),n.qZA()(),n.TgZ(20,"button",8),n.NdJ("click",function(){return e.signIn(e.email,e.password)}),n.TgZ(21,"span"),n._uU(22,"Sign in"),n.qZA()(),n.TgZ(23,"button",8),n.NdJ("click",function(){return e.googleAuth()}),n.TgZ(24,"span"),n._uU(25,"Google"),n.qZA()(),n.TgZ(26,"button",8),n.NdJ("click",function(){return e.githubAuth()}),n.TgZ(27,"span"),n._uU(28,"Github "),n.qZA()()()()),2&t&&(n.xp6(11),n.Q6J("ngModel",e.email),n.xp6(4),n.Q6J("ngModel",e.password),n.xp6(1),n.Q6J("ngIf",e.hasErrors))},dependencies:[h.O5,s.Fj,s.JJ,s.On],styles:['@charset "UTF-8";[_nghost-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-size:14px;color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:8px 0}p[_ngcontent-%COMP%]{margin:0}.spacer[_ngcontent-%COMP%]{flex:1}.toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;height:60px;display:flex;align-items:center;background-color:#1976d2;color:#fff;font-weight:600}.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]{height:40px;margin:0 8px}.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]{height:40px;margin:0 16px}.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover{opacity:.8}.content[_ngcontent-%COMP%]{display:flex;margin:82px auto 32px;padding:0 16px;max-width:960px;flex-direction:column;align-items:center}svg.material-icons[_ngcontent-%COMP%]{height:24px;width:auto}svg.material-icons[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#888}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:16px}svg#rocket[_ngcontent-%COMP%]{width:80px;position:absolute;left:-10px;top:-24px}svg#rocket-smoke[_ngcontent-%COMP%]{height:calc(100vh - 95px);position:absolute;top:10px;right:180px;z-index:-10}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover{color:#1976d2;text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#125699}.terminal[_ngcontent-%COMP%]{position:relative;width:80%;max-width:600px;border-radius:6px;padding-top:45px;margin-top:8px;overflow:hidden;background-color:#0f0f10}.terminal[_ngcontent-%COMP%]:before{content:"\\2022\\2022\\2022";position:absolute;top:0;left:0;height:4px;background:rgb(58,58,58);color:#c2c3c4;width:100%;font-size:2rem;line-height:0;padding:14px 0;text-indent:4px}.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:#fff;padding:0 1rem 1rem;margin:0}.circle-link[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:40px;margin:8px;background-color:#fff;border:1px solid #eeeeee;display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:1s ease-out}.circle-link[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px #0003}footer[_ngcontent-%COMP%]{margin-top:8px;display:flex;align-items:center;line-height:20px}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}.github-star-badge[_ngcontent-%COMP%]{color:#24292e;display:flex;align-items:center;font-size:12px;padding:3px 10px;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-image:linear-gradient(-180deg,#fafbfc,#eff3f6 90%);margin-left:4px;font-weight:600}.github-star-badge[_ngcontent-%COMP%]:hover{background-image:linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);border-color:#1b1f2359;background-position:-.5em}.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{height:16px;width:16px;margin-right:4px}svg#clouds[_ngcontent-%COMP%]{position:fixed;bottom:-160px;left:-230px;z-index:-10;width:1920px}@media screen and (max-width: 767px){.card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]:not(.highlight-card){height:16px;margin:8px 0}.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:72px}svg#rocket-smoke[_ngcontent-%COMP%]{right:120px;transform:rotate(-5deg)}}@media screen and (max-width: 575px){svg#rocket-smoke[_ngcontent-%COMP%]{display:none;visibility:hidden}}.input-field[_ngcontent-%COMP%]{margin:15px 5px;font-size:26px;padding:17px 15px}.input-field-label[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.error-messages[_ngcontent-%COMP%]{color:red}']}),i})()}];let C=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[h.ez,s.u5,d.Bz.forChild(M)]}),i})()}}]);