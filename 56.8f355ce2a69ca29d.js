"use strict";(self.webpackChunkhackernews=self.webpackChunkhackernews||[]).push([[56],{2056:(x,c,n)=>{n.r(c),n.d(c,{UserViewComponent:()=>U});var o=n(5093),d=n(4599),p=n(4318),u=n(808),l=n(8730),e=n(4023),m=n(6038),_=n(3779);function h(t,i){if(1&t&&e._UZ(0,"p",7),2&t){const s=e.oxw().ngIf,r=e.oxw();e.Q6J("innerHTML",r.sanitizer.bypassSecurityTrustHtml(s.about),e.oJD)}}function g(t,i){if(1&t&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&t){const s=i.$implicit;e.xp6(2),e.hij("id: ",s,"")}}function f(t,i){if(1&t&&(e.TgZ(0,"div",2)(1,"div")(2,"h1",3),e._uU(3),e.qZA(),e.TgZ(4,"p",4),e._uU(5),e.ALo(6,"date"),e.qZA()(),e.TgZ(7,"div")(8,"h1"),e._uU(9),e.qZA(),e.YNc(10,h,1,1,"p",5),e.qZA(),e.TgZ(11,"div")(12,"h1"),e._uU(13,"Contributions (work in progress)"),e.qZA(),e.YNc(14,g,3,1,"div",6),e.qZA()()),2&t){const s=i.ngIf;e.xp6(3),e.hij(" ",s.id," "),e.xp6(2),e.lnq(" Joined at ",e.xi3(6,7,1e3*s.created,"medium")," and has since then reached ",s.karma," karma by contributing to the community ",s.submitted.length," times "),e.xp6(4),e.hij("About ",s.id,""),e.xp6(1),e.Q6J("ngIf",s.about),e.xp6(4),e.Q6J("ngForOf",s.submitted.slice(0,50))}}let U=(()=>{class t{set userId(s){this.userIdChanged$.next(s)}constructor(s,r,v){this.hn=s,this.sanitizer=r,this.title=v,this.userIdChanged$=new d.t,this.user$=this.userIdChanged$.pipe((0,p.b)(a=>this.hn.fetchUser(a)),(0,u.b)(a=>{this.title.setTitle(`User: ${a.id} (${a.karma})`)}),(0,l.d)())}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(m.c),e.Y36(_.H7),e.Y36(_.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-view"]],inputs:{userId:"userId"},standalone:!0,features:[e.jDz],decls:3,vars:3,consts:[[1,""],["class","flex flex-col space-y-5",4,"ngIf"],[1,"flex","flex-col","space-y-5"],[1,"text-lg"],[1,"text-sm","text-gray-700"],["class","ml-2 prose-sm prose",3,"innerHTML",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ml-2","prose-sm","prose",3,"innerHTML"]],template:function(s,r){1&s&&(e.TgZ(0,"section",0),e.YNc(1,f,15,10,"div",1),e.ALo(2,"async"),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,r.user$)))},dependencies:[o.ez,o.sg,o.O5,o.Ov,o.uU],changeDetection:0}),t})()}}]);