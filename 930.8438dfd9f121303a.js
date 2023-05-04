"use strict";(self.webpackChunkangular16=self.webpackChunkangular16||[]).push([[930],{5930:(N,d,n)=>{n.r(d),n.d(d,{TopStoriesComponent:()=>Y});var l=n(5093),T=n(4599),p=n(7292),u=n(808),x=n(4318),v=n(6173),m=n(812),S=n(8366),L=n(3756),Z=n(2799),C=n(909),I=n(4273),y=n(2523),t=n(2509);let $=(()=>{class o{transform(e,...r){return new URL(e).hostname}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"urlPreview",type:o,pure:!0,standalone:!0}),o})();var U=n(6038);function j(o,s){if(1&o&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&o){const e=s.ngIf;t.xp6(1),t.hij("(",0===e?"loading...":e,")")}}function J(o,s){1&o&&(t.TgZ(0,"p",5),t._uU(1," Loading...\n"),t.qZA())}function O(o,s){1&o&&(t.TgZ(0,"p",5),t._uU(1," Loading content...\n"),t.qZA())}const P=function(o){return["/user",o]},Q=function(o){return["/stories",o]};function F(o,s){if(1&o&&(t.TgZ(0,"div",8)(1,"a",9),t._uU(2),t.TgZ(3,"span",10),t._uU(4),t.ALo(5,"urlPreview"),t.qZA()(),t.TgZ(6,"div",11)(7,"p",12),t._uU(8),t.ALo(9,"date"),t.TgZ(10,"a",13),t._uU(11),t.qZA()(),t.TgZ(12,"a",13),t._uU(13),t.qZA()()()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("href",e.url,t.LSH),t.xp6(1),t.hij(" ",e.title," "),t.xp6(2),t.Oqu(t.lcZ(5,9,e.url)),t.xp6(4),t.AsE(" ",e.score," point posted at ",t.xi3(9,11,1e3*e.time,"medium")," by "),t.xp6(2),t.Q6J("routerLink",t.VKq(14,P,e.by)),t.xp6(1),t.Oqu(e.by),t.xp6(1),t.Q6J("routerLink",t.VKq(16,Q,e.id)),t.xp6(1),t.hij(" ",e.descendants," comments ")}}function X(o,s){if(1&o&&(t.TgZ(0,"section",6),t.YNc(1,F,14,18,"div",7),t.qZA()),2&o){const e=s.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}let Y=(()=>{class o{constructor(e){this.hn=e,this.triggerTopStoriesLoad$=new T.t,this.firstStoryIndex$=new p.X(0),this.lastStoryIndex$=new p.X(50),this.storiesCount$=new p.X(0),this.storiesLoading=new p.X(!0),this.storiesContentLoading=new p.X(!1),this.fetchTopStoryIds$=this.hn.fetchTopStories().pipe((0,u.b)(r=>{this.storiesLoading.next(!1),this.storiesCount$.next(r.length)})),this.topStories$=this.triggerTopStoriesLoad$.pipe((0,x.b)(()=>this.fetchTopStoryIds$),(0,u.b)(()=>{this.storiesContentLoading.next(!0)}),function A(...o){const s=(0,C.jO)(o);return(0,v.e)((e,r)=>{const c=o.length,f=new Array(c);let a=o.map(()=>!1),h=!1;for(let i=0;i<c;i++)(0,S.Xf)(o[i]).subscribe((0,m.x)(r,g=>{f[i]=g,!h&&!a[i]&&(a[i]=!0,(h=a.every(L.y))&&(a=null))},Z.Z));e.subscribe((0,m.x)(r,i=>{if(h){const g=[i,...f];r.next(s?s(...g):g)}}))})}(this.firstStoryIndex$,this.lastStoryIndex$),(0,x.b)(([r,c,f])=>(0,I.D)(r.slice(c,f).map(a=>this.hn.fetchStory(a)))),(0,u.b)(()=>{this.storiesLoading.next(!1),this.storiesContentLoading.next(!1)})),this.triggerTopStoriesLoad$.next(!0)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(U.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-top-stories"]],standalone:!0,features:[t.jDz],decls:10,vars:12,consts:[[1,"text-xl"],["class","text-gray-600",4,"ngIf"],["class","text-gray-700",4,"ngIf"],["class","flex flex-col",4,"ngIf"],[1,"text-gray-600"],[1,"text-gray-700"],[1,"flex","flex-col"],["class","mx-2 my-2",4,"ngFor","ngForOf"],[1,"mx-2","my-2"],[1,"text-lg","font-semibold","transition-colors","hover:text-orange-600",3,"href"],[1,"text-xs","text-gray-500"],[1,"text-sm","text-gray-600"],[1,""],[1,"hover:underline","underline-offset-2","decoration-orange-600",3,"routerLink"]],template:function(e,r){1&e&&(t.TgZ(0,"p",0),t._uU(1," Top stories "),t.YNc(2,j,2,1,"span",1),t.ALo(3,"async"),t.qZA(),t.YNc(4,J,2,0,"p",2),t.ALo(5,"async"),t.YNc(6,O,2,0,"p",2),t.ALo(7,"async"),t.YNc(8,X,2,1,"section",3),t.ALo(9,"async")),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,r.storiesCount$)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(5,6,r.storiesLoading)),t.xp6(2),t.Q6J("ngIf",!0===t.lcZ(7,8,r.storiesContentLoading)),t.xp6(2),t.Q6J("ngIf",t.lcZ(9,10,r.topStories$)))},dependencies:[l.ez,l.sg,l.O5,l.Ov,l.uU,y.Bz,y.rH,$],changeDetection:0}),o})()}}]);