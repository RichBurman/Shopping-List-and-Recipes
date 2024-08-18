import{a as C,b as A}from"./chunk-CQTXO324.js";import{a as ge}from"./chunk-X6DMM5FF.js";import"./chunk-TV4Y3OAU.js";import{a as ie}from"./chunk-OTPWLP7M.js";import{a as ne,b as h,c as oe,d as pe,e as V,g,i as ce,j as ae,k as me,l as se,m as le,n as de,o as ue,p as fe,t as ve,v as he}from"./chunk-6LTLCDXA.js";import{$ as J,A as E,B as a,Ba as Se,C as d,G as R,I as s,K as p,L as o,M as m,N as P,O as v,P as q,Q as O,U as K,V as c,W as b,X,Z as H,aa as Q,ba as W,d as $,ga as F,h as B,ia as Y,m as T,n as M,p as w,qa as I,r as f,ra as Z,s as j,sa as x,ta as ee,ua as te,v as _,w as D,wa as N,xa as re}from"./chunk-MY5YCN2Y.js";import"./chunk-5FZOKLP6.js";var Ie=t=>[t],ye=(()=>{let e=class e{ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,n){i&1&&(p(0,"a",0)(1,"div",1)(2,"h4",2),c(3),o(),p(4,"p",3),c(5),o()(),p(6,"span",4),m(7,"img",5),o()()),i&2&&(s("routerLink",J(5,Ie,n.index)),a(3),b(n.recipe.name),a(2),b(n.recipe.description),a(2),O("alt",n.recipe.name),s("src",n.recipe.imagePath,E))},dependencies:[ee,te]});let t=e;return t})();function Ne(t,e){if(t&1&&m(0,"app-recipe-item",5),t&2){let u=e.$implicit,r=e.index;s("recipe",u)("index",r)}}var Ce=(()=>{let e=class e{constructor(r,i,n,l){this.recipeService=r,this.dataStorageService=i,this.router=n,this.route=l,this.recipes=[]}ngOnInit(){this.dataStorageService.fetchRecipes().subscribe(r=>{this.recipes=r},r=>{console.error("Error fetching recipes:",r)}),this.subscription=this.recipeService.recipesChanged.subscribe(r=>{this.recipes=r})}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(d(C),d(A),d(x),d(I))},e.\u0275cmp=f({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"class","btn","btn-success",3,"click"],[1,"col-md-7"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"div",1)(2,"button",2),v("click",function(){return n.onNewRecipe()}),c(3,"New Recipe"),o()()(),m(4,"hr"),p(5,"div",0)(6,"div",3),R(7,Ne,1,2,"app-recipe-item",4),o()()),i&2&&(a(7),s("ngForOf",n.recipes))},dependencies:[F,ye]});let t=e;return t})();var Re=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"div",1),m(2,"app-recipe-list"),o(),p(3,"div",2),m(4,"router-outlet"),o()())},dependencies:[Z,Ce]});let t=e;return t})();function Te(t,e){if(t&1&&(p(0,"li",11),c(1),o()),t&2){let u=e.$implicit;a(),H(" ",u.name," - ",u.amount," (",u.type,") ")}}var be=(()=>{let e=class e{constructor(r,i,n){this.recipeService=r,this.route=i,this.router=n}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients,this.recipe.name)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}};e.\u0275fac=function(i){return new(i||e)(d(C),d(I),d(x))},e.\u0275cmp=f({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col","xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],[1,"col-xs-12"],["appDropDown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"div",1),m(2,"img",2),o()(),p(3,"div",0)(4,"div",3)(5,"h1"),c(6),o()()(),p(7,"div",0)(8,"div",3)(9,"div",4)(10,"button",5),c(11,"Manage Recipe "),m(12,"span",6),o(),p(13,"ul",7)(14,"li")(15,"a",8),v("click",function(){return n.onAddToShoppingList()}),c(16,"To Shopping List"),o()(),p(17,"li")(18,"a",8),v("click",function(){return n.onEditRecipe()}),c(19,"Edit Recipe"),o()(),p(20,"li")(21,"a",8),v("click",function(){return n.onDeleteRecipe()}),c(22,"Delete Recipe"),o()()()()()(),p(23,"div",0)(24,"div",3),c(25),o()(),p(26,"div",0)(27,"div",3)(28,"ul",9),R(29,Te,2,3,"li",10),o()()()),i&2&&(a(2),O("alt",n.recipe.name),s("src",n.recipe.imagePath,E),a(4),b(n.recipe.name),a(19),X(" ",n.recipe.description," "),a(4),s("ngForOf",n.recipe.ingredients))},dependencies:[re,F]});let t=e;return t})();var we=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){i&1&&(p(0,"h3"),c(1,"Please select a recipe!"),o())}});let t=e;return t})();function Me(t,e){if(t&1&&(p(0,"option",26),c(1),o()),t&2){let u=e.$implicit;s("value",u.value),a(),b(u.value)}}function je(t,e){if(t&1){let u=P();p(0,"div",18)(1,"div",19),m(2,"input",20),o(),p(3,"div",21),m(4,"input",22),o(),p(5,"div",23)(6,"select",24),R(7,Me,2,2,"option",25),Q(8,"keyvalue"),o()(),p(9,"div",21)(10,"button",5),v("click",function(){let i=_(u).index,n=q();return D(n.onDeleteIngredient(i))}),c(11,"X"),o()()()}if(t&2){let u=e.index,r=q();s("formGroupName",u),a(7),s("ngForOf",W(8,2,r.types))}}var U=(()=>{let e=class e{constructor(r,i,n){this.route=r,this.recipeService=i,this.router=n,this.editMode=!1,this.types=ge}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.editMode=r.id!=null,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}get controls(){return this.recipeForm.get("ingredients").controls}onAddIngredient(){this.recipeForm.get("ingredients").push(new V({name:new g(null,h.required),amount:new g(null,[h.required]),type:new g(null,h.required)}))}onDeleteIngredient(r){this.recipeForm.get("ingredients").removeAt(r)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let r="",i="",n="",l=new ve([]);if(this.editMode){let y=this.recipeService.getRecipe(this.id);if(r=y.name,i=y.imagePath,n=y.description,y.ingredients)for(let L of y.ingredients)l.push(new V({name:new g(L.name,h.required),amount:new g(L.amount,[h.required]),type:new g(L.type,h.required)}))}this.recipeForm=new V({name:new g(r,h.required),imagePath:new g(i,h.required),description:new g(n,h.required),ingredients:l})}};e.\u0275fac=function(i){return new(i||e)(d(I),d(C),d(x))},e.\u0275cmp=f({type:e,selectors:[["app-recipe-edit"]],decls:38,vars:4,consts:[["imagePath",""],[1,"row"],[1,"col-xs-12"],[3,"ngSubmit","formGroup"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","col-xs-12"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","text","formControlName","amount",1,"form-control"],[1,"col-xs-3"],["formControlName","type",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(i,n){if(i&1){let l=P();p(0,"div",1)(1,"div",2)(2,"form",3),v("ngSubmit",function(){return _(l),D(n.onSubmit())}),p(3,"div",1)(4,"div",2)(5,"button",4),c(6,"Save"),o(),p(7,"button",5),v("click",function(){return _(l),D(n.onCancel())}),c(8,"Cancel"),o()()(),p(9,"div",1)(10,"div",2)(11,"div",6)(12,"label",7),c(13,"Name"),o(),m(14,"input",8),o()()(),p(15,"div",1)(16,"div",2)(17,"div",6)(18,"label",9),c(19,"Image URL"),o(),m(20,"input",10,0),o()()(),p(22,"div",1)(23,"div",2),m(24,"img",11),o()(),p(25,"div",1)(26,"div",2)(27,"div",6)(28,"label",12),c(29,"Description"),o(),m(30,"textarea",13),o()()(),p(31,"div",1)(32,"div",14),R(33,je,12,4,"div",15),m(34,"hr"),p(35,"div",16)(36,"button",17),v("click",function(){return _(l),D(n.onAddIngredient())}),c(37,"Add Ingredient"),o()()()()()()()}if(i&2){let l=K(21);a(2),s("formGroup",n.recipeForm),a(3),s("disabled",!n.recipeForm.valid),a(19),s("src",l.value,E),a(9),s("ngForOf",n.controls)}},dependencies:[F,ce,ue,fe,ne,de,oe,pe,ae,le,me,se,Y],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]});let t=e;return t})();var Ee=(()=>{let e=class e{constructor(r,i){this.authService=r,this.router=i}canActivate(r,i){return this.authService.user.pipe(B(1),$(n=>n?!0:this.router.createUrlTree(["/auth"])))}};e.\u0275fac=function(i){return new(i||e)(w(ie),w(x))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var z=(()=>{let e=class e{constructor(r,i){this.dataStorageService=r,this.recipesService=i}resolve(r,i){let n=this.recipesService.getRecipes();return n.length===0?this.dataStorageService.fetchRecipes():n}};e.\u0275fac=function(i){return new(i||e)(w(A),w(C))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Oe=[{path:"",component:Re,canActivate:[Ee],children:[{path:"",component:we},{path:"new",component:U},{path:":id",component:be,resolve:[z]},{path:":id/edit",component:U,resolve:[z]}]}],Fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=j({type:e}),e.\u0275inj=M({imports:[N.forChild(Oe),N]});let t=e;return t})();var St=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=j({type:e}),e.\u0275inj=M({imports:[N,Se,he,Fe]});let t=e;return t})();export{St as RecipesModule};