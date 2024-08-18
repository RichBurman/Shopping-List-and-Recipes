import{a as B,b as q}from"./chunk-CQTXO324.js";import{a as O}from"./chunk-FPBGKOGJ.js";import{a as P}from"./chunk-TV4Y3OAU.js";import{a as u}from"./chunk-OTPWLP7M.js";import{B as d,Ba as G,C as m,G as f,I as h,K as o,L as n,M as v,N as w,O as b,P as g,V as a,h as y,ha as D,i as k,ka as A,m as M,ma as E,n as p,na as R,oa as T,p as L,pa as j,r as _,ra as H,s as l,ta as N,ua as F,v as x,va as V,w as C,wa as I,xa as z}from"./chunk-MY5YCN2Y.js";import"./chunk-5FZOKLP6.js";function ee(t,e){t&1&&(o(0,"a",11),a(1,"Recipes"),n())}function te(t,e){t&1&&(o(0,"a",12),a(1,"Authenticate"),n())}function ie(t,e){if(t&1){let s=w();o(0,"li")(1,"a",19),b("click",function(){x(s);let i=g(2);return C(i.onLogout())}),a(2,"Logout"),n()()}}function re(t,e){if(t&1){let s=w();o(0,"ul",13),f(1,ie,3,0,"li",14),o(2,"li",15)(3,"a",16),a(4,"Manage "),v(5,"span",17),n(),o(6,"ul",18)(7,"li")(8,"a",19),b("click",function(){x(s);let i=g();return C(i.onSaveData())}),a(9,"Save Data"),n()(),o(10,"li")(11,"a",19),b("click",function(){x(s);let i=g();return C(i.onFetchData())}),a(12,"Fetch Data"),n()()()()()}if(t&2){let s=g();d(),h("ngIf",s.isAuthenticated)}}var K=(()=>{let e=class e{constructor(r,i){this.dataStorageService=r,this.authService=i,this.isAuthenticated=!1}ngOnInit(){this.userSub=this.authService.user.subscribe(r=>{this.isAuthenticated=!!r,console.log(!r),console.log(!!r)})}onSaveData(){this.dataStorageService.storeRecipes()}onFetchData(){this.dataStorageService.fetchRecipes().subscribe()}onLogout(){this.authService.logout()}ngOnDestroy(){this.userSub.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(m(q),m(u))},e.\u0275cmp=_({type:e,selectors:[["app-header"]],decls:15,vars:3,consts:[[1,"navbar","navbar-default"],[1,"container-fluid"],[1,"navbar-header"],["href","#",1,"navbar-brand"],[1,"collapse","navbar-collapse"],[1,"nav","navbar-nav"],["routerLinkActive","active"],["routerLink","/recipes",4,"ngIf"],["routerLink","/auth",4,"ngIf"],["routerLink","/shopping-list"],["class","nav navbar-nav navbar-right",4,"ngIf"],["routerLink","/recipes"],["routerLink","/auth"],[1,"nav","navbar-nav","navbar-right"],[4,"ngIf"],["appDropDown","",1,"dropdown"],["role","button",1,"dropdown-toggle",2,"cursor","pointer"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"]],template:function(i,c){i&1&&(o(0,"nav",0)(1,"div",1)(2,"div",2)(3,"a",3),a(4,"Recipe Book"),n()(),o(5,"div",4)(6,"ul",5)(7,"li",6),f(8,ee,2,0,"a",7),n(),o(9,"li",6),f(10,te,2,0,"a",8),n(),o(11,"li",6)(12,"a",9),a(13,"Shopping List"),n()()(),f(14,re,13,1,"ul",10),n()()()),i&2&&(d(8),h("ngIf",c.isAuthenticated),d(2),h("ngIf",!c.isAuthenticated),d(4),h("ngIf",c.isAuthenticated))},dependencies:[D,N,F,z],encapsulation:2});let t=e;return t})();var Q=(()=>{let e=class e{constructor(r,i){this.authService=r,this.loggingService=i}ngOnInit(){this.authService.autoLogin(),this.loggingService.printLog("Hello from AppComponent ngOnInit")}};e.\u0275fac=function(i){return new(i||e)(m(u),m(O))},e.\u0275cmp=_({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12"]],template:function(i,c){i&1&&(v(0,"app-header"),o(1,"div",0)(2,"div",1)(3,"div",2),v(4,"router-outlet"),n()()())},dependencies:[H,K]});let t=e;return t})();var ne=[{path:"",redirectTo:"/recipes",pathMatch:"full"},{path:"recipes",loadChildren:()=>import("./chunk-D36NXWDV.js").then(t=>t.RecipesModule)},{path:"shopping-list",loadChildren:()=>import("./chunk-J754EMNY.js").then(t=>t.ShoppingListModule)},{path:"auth",loadChildren:()=>import("./chunk-T3WYAF3X.js").then(t=>t.AuthModule)}],U=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=p({imports:[I.forRoot(ne,{preloadingStrategy:V}),I]});let t=e;return t})();var W=(()=>{let e=class e{constructor(r){this.authService=r}intercept(r,i){return this.authService.user.pipe(y(1),k(c=>{if(!c)return i.handle(r);let Z=r.clone({params:new A().set("auth",c.token)});return i.handle(Z)}))}};e.\u0275fac=function(i){return new(i||e)(L(u))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})();var X=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=p({providers:[P,B,{provide:E,useClass:W,multi:!0}]});let t=e;return t})();var Y=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e,bootstrap:[Q]}),e.\u0275inj=p({imports:[j,R,U,G,X]});let t=e;return t})();T().bootstrapModule(Y).catch(t=>console.error(t));
