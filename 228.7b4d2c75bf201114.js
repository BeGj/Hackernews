"use strict";(self.webpackChunkhackernews=self.webpackChunkhackernews||[]).push([[228],{1228:(B,h,i)=>{i.r(h),i.d(h,{TopStoriesComponent:()=>M});var d=i(5093),T=i(4599),p=i(1676),g=i(7292),v=i(808),x=i(4318),$=i(2177),L=i(6173),S=i(812),Z=i(8366),C=i(3756),I=i(2799),U=i(909),J=i(9927),j=i(4273),w=i(103),m=i(1292),t=i(4023);let N=(()=>{class o{transform(e){try{return new URL(e).hostname}catch{return""}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"urlPreview",type:o,pure:!0,standalone:!0}),o})();var Y=i(6038);let Q=(()=>{class o{constructor(){this.localStorageKey="saved-stories",this.savedStoriesCache$=new g.X([]),this.savedStoriesCache$.next(this.loadSavedStoriesFromLocalStorage())}saveStory(e){const s=this.savedStoriesCache$.value;s.push(e.id),this.saveStoriesToLocalStorage(s)}unSaveStory(e){this.saveStoriesToLocalStorage(this.savedStoriesCache$.value.filter(r=>r!==e.id))}getSavedStories$(){return this.savedStoriesCache$.pipe()}loadSavedStoriesFromLocalStorage(){let e=[];const s=localStorage.getItem(this.localStorageKey);return s&&(e=JSON.parse(s)),this.savedStoriesCache$.next(e),e}saveStoriesToLocalStorage(e){this.savedStoriesCache$.next(e),localStorage.setItem(this.localStorageKey,JSON.stringify(e))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function F(o,n){if(1&o&&(t.TgZ(0,"span",5),t._uU(1),t.qZA()),2&o){const e=n.ngIf;t.xp6(1),t.hij("(",0===e?"loading...":e,")")}}function P(o,n){1&o&&(t.TgZ(0,"p",6),t._uU(1," Loading stories... "),t.qZA())}function O(o,n){1&o&&(t.TgZ(0,"p",6),t._uU(1," Loading stories info... "),t.qZA())}function K(o,n){if(1&o&&(t.TgZ(0,"a",18),t._uU(1),t.TgZ(2,"span",19),t._uU(3),t.ALo(4,"urlPreview"),t.qZA()()),2&o){const e=t.oxw().$implicit;t.Q6J("href",e.url,t.LSH),t.xp6(1),t.hij(" ",e.title," "),t.xp6(2),t.hij("(",t.lcZ(4,3,e.url),")")}}const y=function(o){return["/stories",o]};function X(o,n){if(1&o&&(t.TgZ(0,"a",20),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(2,y,e.id)),t.xp6(1),t.hij(" ",e.title," ")}}function V(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"span",21),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.savedStories.unSaveStory(r))}),t._uU(1," Unsave story. "),t.qZA()}}function z(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"span",21),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.savedStories.saveStory(r))}),t._uU(1," Save story. "),t.qZA()}}const E=function(o){return["/user",o]};function H(o,n){if(1&o&&(t.TgZ(0,"div",9)(1,"div",10)(2,"p",11),t._uU(3),t.qZA()(),t.TgZ(4,"div",12),t.YNc(5,K,5,5,"a",13),t.YNc(6,X,2,4,"a",14),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"date"),t.TgZ(10,"a",16),t._uU(11),t.qZA()(),t.TgZ(12,"p",15)(13,"a",16),t._uU(14),t.qZA(),t.YNc(15,V,2,0,"span",17),t.YNc(16,z,2,0,"span",17),t.qZA()()()),2&o){const e=n.$implicit,s=n.index;t.xp6(3),t.hij(" ",s+1,". "),t.xp6(2),t.Q6J("ngIf",e.url),t.xp6(1),t.Q6J("ngIf",!e.url),t.xp6(2),t.AsE(" ",e.score," point posted at ",t.xi3(9,11,1e3*e.time,"medium")," by "),t.xp6(2),t.Q6J("routerLink",t.VKq(14,E,e.by)),t.xp6(1),t.Oqu(e.by),t.xp6(2),t.Q6J("routerLink",t.VKq(16,y,e.id)),t.xp6(1),t.hij(" ",e.descendants," comments. "),t.xp6(1),t.Q6J("ngIf",!0===e.saved),t.xp6(1),t.Q6J("ngIf",!1===e.saved)}}function D(o,n){if(1&o&&(t.TgZ(0,"section",7),t.YNc(1,H,17,18,"div",8),t.qZA()),2&o){const e=n.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}let M=(()=>{class o{set storiesPageType(e){this.triggerStoriesLoad$.next(e)}constructor(e,s){this.hnService=e,this.savedStories=s,this.triggerStoriesLoad$=new T.t,this.pageTitle$=this.triggerStoriesLoad$.pipe((0,p.U)(r=>"saved-stories"===r?"You saved stories":"Top stories")),this.firstStoryIndex$=new g.X(0),this.lastStoryIndex$=new g.X(50),this.storiesLoading$=new g.X(!0),this.storiesContentLoading$=new g.X(!1),this.storyIds$=this.triggerStoriesLoad$.pipe((0,v.b)(()=>{this.storiesLoading$.next(!0),this.storiesContentLoading$.next(!0)}),(0,x.b)(r=>{switch(r){case"saved-stories":return this.savedStories.getSavedStories$();case"top-stories":return this.hnService.fetchTopStories();default:return console.log("Error. No StoriesPageType"),(0,$.of)([])}}),function A(...o){const n=(0,U.jO)(o);return(0,L.e)((e,s)=>{const r=o.length,a=new Array(r);let c=o.map(()=>!1),u=!1;for(let l=0;l<r;l++)(0,Z.Xf)(o[l]).subscribe((0,S.x)(s,f=>{a[l]=f,!u&&!c[l]&&(c[l]=!0,(u=c.every(C.y))&&(c=null))},I.Z));e.subscribe((0,S.x)(s,l=>{if(u){const f=[l,...a];s.next(n?n(...f):f)}}))})}(this.firstStoryIndex$,this.lastStoryIndex$),(0,p.U)(([r,a,c])=>r.slice(a,c)),(0,v.b)(()=>{this.storiesLoading$.next(!1)})),this.stories$=(0,J.a)([this.storyIds$.pipe((0,x.b)(r=>(0,j.D)(r.map(a=>this.hnService.fetchStory(a)))),(0,p.U)(r=>r.filter(a=>["story"].includes(a.type)))),this.savedStories.getSavedStories$()]).pipe((0,p.U)(([r,a])=>r.map(c=>({...c,saved:a.includes(c.id)}))),(0,v.b)(()=>{this.storiesContentLoading$.next(!1)})),this.storiesCount$=(0,w.T)(this.storyIds$.pipe((0,p.U)(r=>r.length)),this.stories$.pipe((0,p.U)(r=>r.length)))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Y.c),t.Y36(Q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-top-stories"]],inputs:{storiesPageType:"storiesPageType"},standalone:!0,features:[t.jDz],decls:12,vars:15,consts:[[1,"mb-2"],[1,"text-xl"],["class","text-gray-600",4,"ngIf"],["class","text-gray-700",4,"ngIf"],["class","flex flex-col space-y-2",4,"ngIf"],[1,"text-gray-600"],[1,"text-gray-700"],[1,"flex","flex-col","space-y-2"],["class","flex flex-row px-2 space-x-2",4,"ngFor","ngForOf"],[1,"flex","flex-row","px-2","space-x-2"],[1,"flex","flex-row","justify-center","w-4","place-content-center"],[1,"my-auto","font-mono","text-xl","font-bold","text-gray-600"],[1,"flex-1"],["class","text-lg font-semibold transition-colors hover:text-orange-600 visited:text-gray-400 visited:hover:text-gray-600",3,"href",4,"ngIf"],["class","text-lg font-semibold transition-colors hover:text-orange-600 visited:text-gray-400 visited:hover:text-gray-600",3,"routerLink",4,"ngIf"],[1,"text-sm","text-gray-600"],[1,"hover:underline","underline-offset-2","decoration-orange-600",3,"routerLink"],["class","cursor-pointer hover:underline underline-offset-2 decoration-orange-600",3,"click",4,"ngIf"],[1,"text-lg","font-semibold","transition-colors","hover:text-orange-600","visited:text-gray-400","visited:hover:text-gray-600",3,"href"],[1,"text-xs","text-gray-400"],[1,"text-lg","font-semibold","transition-colors","hover:text-orange-600","visited:text-gray-400","visited:hover:text-gray-600",3,"routerLink"],[1,"cursor-pointer","hover:underline","underline-offset-2","decoration-orange-600",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"section",0)(1,"p",1),t._uU(2),t.ALo(3,"async"),t.YNc(4,F,2,1,"span",2),t.ALo(5,"async"),t.qZA(),t.YNc(6,P,2,0,"p",3),t.ALo(7,"async"),t.YNc(8,O,2,0,"p",3),t.ALo(9,"async"),t.qZA(),t.YNc(10,D,2,1,"section",4),t.ALo(11,"async")),2&e&&(t.xp6(2),t.hij(" ",t.lcZ(3,5,s.pageTitle$)," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,7,s.storiesCount$)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(7,9,s.storiesLoading$)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(9,11,s.storiesContentLoading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(11,13,s.stories$)))},dependencies:[d.ez,d.sg,d.O5,d.Ov,d.uU,m.Bz,m.rH,N],changeDetection:0}),o})()}}]);