"use strict";(self.webpackChunkhackernews=self.webpackChunkhackernews||[]).push([[228],{1228:(G,S,r)=>{r.r(S),r.d(S,{TopStoriesComponent:()=>D});var g=r(5093),T=r(4599),u=r(1676),p=r(7292),L=r(9927),v=r(808),h=r(4318),C=r(2177),Z=r(6173),m=r(812),I=r(8366),$=r(3756),A=r(2799),U=r(909);function J(...o){const i=(0,U.jO)(o);return(0,Z.e)((e,n)=>{const s=o.length,a=new Array(s);let c=o.map(()=>!1),d=!1;for(let l=0;l<s;l++)(0,I.Xf)(o[l]).subscribe((0,m.x)(n,f=>{a[l]=f,!d&&!c[l]&&(c[l]=!0,(d=c.every($.y))&&(c=null))},A.Z));e.subscribe((0,m.x)(n,l=>{if(d){const f=[l,...a];n.next(i?i(...f):f)}}))})}var N=r(4273),F=r(8730),x=r(1292),t=r(2509);let Y=(()=>{class o{transform(e,...n){try{return new URL(e).hostname}catch(s){return console.error(s,e),"ERROR CREATING URL PREVIEW"}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"urlPreview",type:o,pure:!0,standalone:!0}),o})();var P=r(6038);let Q=(()=>{class o{constructor(){this.localStorageKey="saved-stories",this.savedStoriesCache$=new p.X([]),this.savedStoriesCache$.next(this.getSavedStoriesFromLocalStorage())}saveStory(e){const n=this.getSavedStoriesFromLocalStorage();n.push(e.id),this.saveStoriesToLocalStorage(n)}unSaveStory(e){const n=this.getSavedStoriesFromLocalStorage();this.saveStoriesToLocalStorage(n.filter(s=>s!==e.id))}getSavedStories$(){return this.savedStoriesCache$.pipe()}getSavedStoriesFromLocalStorage(){let e=[];const n=localStorage.getItem(this.localStorageKey);return n&&(e=JSON.parse(n)),this.savedStoriesCache$.next(e),e}saveStoriesToLocalStorage(e){this.savedStoriesCache$.next(e),localStorage.setItem(this.localStorageKey,JSON.stringify(e))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function j(o,i){if(1&o&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&o){const e=i.ngIf;t.xp6(1),t.hij("(",0===e?"loading...":e,")")}}function w(o,i){1&o&&(t.TgZ(0,"p",5),t._uU(1," Loading...\n"),t.qZA())}function O(o,i){1&o&&(t.TgZ(0,"p",5),t._uU(1," Loading content...\n"),t.qZA())}function R(o,i){if(1&o&&(t.TgZ(0,"a",15),t._uU(1),t.TgZ(2,"span",16),t._uU(3),t.ALo(4,"urlPreview"),t.qZA()()),2&o){const e=t.oxw().$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.hij(" ",e.title," "),t.xp6(2),t.Oqu(t.lcZ(4,3,e.url))}}const y=function(o){return["/stories",o]};function E(o,i){if(1&o&&(t.TgZ(0,"a",17),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(2,y,e.id)),t.xp6(1),t.hij(" ",e.title," ")}}function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"span",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.savedStories.unSaveStory(s))}),t._uU(1," Unsave story. "),t.qZA()}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"span",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.savedStories.saveStory(s))}),t._uU(1," Save story. "),t.qZA()}}const V=function(o){return["/user",o]};function z(o,i){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,R,5,5,"a",9),t.YNc(2,E,2,4,"a",10),t.TgZ(3,"div",11)(4,"p",12),t._uU(5),t.ALo(6,"date"),t.TgZ(7,"a",13),t._uU(8),t.qZA()(),t.TgZ(9,"div")(10,"a",13),t._uU(11),t.qZA(),t.YNc(12,K,2,0,"span",14),t.YNc(13,X,2,0,"span",14),t.qZA()()()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.url),t.xp6(1),t.Q6J("ngIf",!e.url),t.xp6(3),t.AsE(" ",e.score," point posted at ",t.xi3(6,10,1e3*e.time,"medium")," by "),t.xp6(2),t.Q6J("routerLink",t.VKq(13,V,e.by)),t.xp6(1),t.Oqu(e.by),t.xp6(2),t.Q6J("routerLink",t.VKq(15,y,e.id)),t.xp6(1),t.hij(" ",e.descendants," comments. "),t.xp6(1),t.Q6J("ngIf",!0===e.saved),t.xp6(1),t.Q6J("ngIf",!1===e.saved)}}function H(o,i){if(1&o&&(t.TgZ(0,"section",6),t.YNc(1,z,14,17,"div",7),t.qZA()),2&o){const e=i.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}let D=(()=>{class o{set storiesPageType(e){this.triggerStoriesLoad.next(e)}constructor(e,n){this.hnService=e,this.savedStories=n,this.triggerStoriesLoad=new T.t,this.pageTitle$=this.triggerStoriesLoad.pipe((0,u.U)(s=>"saved-stories"===s?"You saved stories":"Top stories")),this.firstStoryIndex$=new p.X(0),this.lastStoryIndex$=new p.X(50),this.storiesCount$=new p.X(0),this.storiesLoading=new p.X(!0),this.storiesContentLoading=new p.X(!1),this.stories$=(0,L.a)([this.triggerStoriesLoad.pipe((0,v.b)(()=>{this.storiesContentLoading.next(!0)}),(0,h.b)(s=>{switch(s){case"saved-stories":return this.savedStories.getSavedStories$();case"top-stories":return this.hnService.fetchTopStories();default:return console.log("Error. No StoriesPageType"),(0,C.of)([])}}),(0,v.b)(s=>{this.storiesLoading.next(!1),this.storiesCount$.next(s.length)}),J(this.firstStoryIndex$,this.lastStoryIndex$),(0,h.b)(([s,a,c])=>(0,N.D)(s.slice(a,c).map(d=>this.hnService.fetchStory(d)))),(0,u.U)(s=>s.filter(a=>["story"].includes(a.type))),(0,v.b)(()=>{this.storiesLoading.next(!1),this.storiesContentLoading.next(!1)}),(0,F.d)()),this.hnService.fetchTopStories()]).pipe((0,u.U)(([s,a])=>s.map(c=>({...c,saved:a.includes(c.id)}))))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(P.c),t.Y36(Q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-top-stories"]],inputs:{storiesPageType:"storiesPageType"},standalone:!0,features:[t.jDz],decls:11,vars:15,consts:[[1,"text-xl"],["class","text-gray-600",4,"ngIf"],["class","text-gray-700",4,"ngIf"],["class","flex flex-col",4,"ngIf"],[1,"text-gray-600"],[1,"text-gray-700"],[1,"flex","flex-col"],["class","mx-2 my-2",4,"ngFor","ngForOf"],[1,"mx-2","my-2"],["class","text-lg font-semibold transition-colors hover:text-orange-600",3,"href",4,"ngIf"],["class","text-lg font-semibold transition-colors hover:text-orange-600",3,"routerLink",4,"ngIf"],[1,"text-sm","text-gray-600"],[1,""],[1,"hover:underline","underline-offset-2","decoration-orange-600",3,"routerLink"],["class","cursor-pointer hover:underline underline-offset-2 decoration-orange-600",3,"click",4,"ngIf"],[1,"text-lg","font-semibold","transition-colors","hover:text-orange-600",3,"href"],[1,"text-xs","text-gray-500"],[1,"text-lg","font-semibold","transition-colors","hover:text-orange-600",3,"routerLink"],[1,"cursor-pointer","hover:underline","underline-offset-2","decoration-orange-600",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"p",0),t._uU(1),t.ALo(2,"async"),t.YNc(3,j,2,1,"span",1),t.ALo(4,"async"),t.qZA(),t.YNc(5,w,2,0,"p",2),t.ALo(6,"async"),t.YNc(7,O,2,0,"p",2),t.ALo(8,"async"),t.YNc(9,H,2,1,"section",3),t.ALo(10,"async")),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,5,n.pageTitle$)," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,7,n.storiesCount$)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(6,9,n.storiesLoading)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(8,11,n.storiesContentLoading)),t.xp6(2),t.Q6J("ngIf",t.lcZ(10,13,n.stories$)))},dependencies:[g.ez,g.sg,g.O5,g.Ov,g.uU,x.Bz,x.rH,Y],changeDetection:0}),o})()}}]);