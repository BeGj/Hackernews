"use strict";(self.webpackChunkhackernews=self.webpackChunkhackernews||[]).push([[241],{4599:(b,w,s)=>{s.d(w,{t:()=>x});var i=s(2313);const y={now:()=>(y.delegate||Date).now(),delegate:void 0};class x extends i.x{constructor(o=1/0,a=1/0,d=y){super(),this._bufferSize=o,this._windowTime=a,this._timestampProvider=d,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=a===1/0,this._bufferSize=Math.max(1,o),this._windowTime=Math.max(1,a)}next(o){const{isStopped:a,_buffer:d,_infiniteTimeWindow:c,_timestampProvider:h,_windowTime:l}=this;a||(d.push(o),!c&&d.push(h.now()+l)),this._trimBuffer(),super.next(o)}_subscribe(o){this._throwIfClosed(),this._trimBuffer();const a=this._innerSubscribe(o),{_infiniteTimeWindow:d,_buffer:c}=this,h=c.slice();for(let l=0;l<h.length&&!o.closed;l+=d?1:2)o.next(h[l]);return this._checkFinalizedStatuses(o),a}_trimBuffer(){const{_bufferSize:o,_timestampProvider:a,_buffer:d,_infiniteTimeWindow:c}=this,h=(c?1:2)*o;if(o<1/0&&h<d.length&&d.splice(0,d.length-h),!c){const l=a.now();let C=0;for(let v=1;v<d.length&&d[v]<=l;v+=2)C=v;C&&d.splice(0,C+1)}}}},8730:(b,w,s)=>{s.d(w,{d:()=>x});var i=s(4599),y=s(2375);function x(f,o,a){let d,c=!1;return f&&"object"==typeof f?({bufferSize:d=1/0,windowTime:o=1/0,refCount:c=!1,scheduler:a}=f):d=f??1/0,(0,y.B)({connector:()=>new i.t(d,o,a),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:c})}},2285:(b,w,s)=>{s.d(w,{eJ:()=>$,_N:()=>z,pP:()=>H,fM:()=>G});var i=s(4023),y=s(2726),x=s(9927),f=s(5860),o=s(2820),a=s(4599),d=s(4262),c=s(9262),h=s(3756),l=s(6173),C=s(812);function v(e,n=h.y){return e=e??D,(0,l.e)((t,r)=>{let p,m=!0;t.subscribe((0,C.x)(r,u=>{const R=n(u);(m||!e(p,R))&&(m=!1,p=R,r.next(u))}))})}function D(e,n){return e===n}var P=s(808),V=s(5653);let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Yz7({token:e,factory:function(){return function L(e){return e instanceof i.R0b}((0,i.f3M)(i.R0b))?new E:(0,i.f3M)(T)},providedIn:"root"}),e})(),T=(()=>{class e extends M{constructor(t){super(),this.appRef=t,this.isScheduled=!1}schedule(){this.isScheduled||(this.isScheduled=!0,requestAnimationFrame(()=>{this.appRef.tick(),this.isScheduled=!1}))}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(i.z2F))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class E extends M{schedule(){}}let g=(()=>{class e{constructor(t,r){this.cdRef=t,this.tickScheduler=r}schedule(){this.cdRef.markForCheck(),this.tickScheduler.schedule()}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(i.sBO),i.LFG(M))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac}),e})();function S(e){const n=function O(e){return n=>e[n.type]?.(n)}(e),t=new a.t(1);return{nextPotentialObservable(r){t.next(r)},handlePotentialObservableChanges:()=>t.pipe(v(),function B(){return(0,d.z)((0,V.w)(e=>{const n=function j(e){return(0,y.b)(e)?e:function k(e){return function A(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}(e)&&Object.keys(e).length>0&&Object.values(e).every(y.b)}(e)?(0,x.a)(function Y(e){return Object.keys(e).reduce((n,t)=>({...n,[t]:e[t].pipe(v())}),{})}(e)):function I(e){return"function"==typeof e?.then}(e)?(0,f.D)(e):new o.y(n=>{n.next(e)})}(e);let t=!0,r=!0;return new o.y(p=>{const m=n.subscribe({next(u){p.next({type:"next",value:u,reset:t,synchronous:r}),t=!1},error(u){p.next({type:"error",error:u,reset:t,synchronous:r}),t=!1},complete(){p.next({type:"complete",reset:t,synchronous:r}),t=!1}});return t&&(p.next({type:"suspense",reset:t,synchronous:!0}),t=!1),r=!1,m})}))}(),v(W),(0,P.b)(n))}}function W(e,n){return e.type===n.type&&e.reset===n.reset&&("next"===n.type?e.value===n.value:"error"!==n.type||e.error===n.error)}let $=(()=>{class e{constructor(t,r,p,m){this.mainTemplateRef=t,this.viewContainerRef=r,this.errorHandler=p,this.renderScheduler=m,this.isMainViewCreated=!1,this.isSuspenseViewCreated=!1,this.viewContext={$implicit:void 0,ngrxLet:void 0,error:void 0,complete:!1},this.renderEventManager=S({suspense:()=>{this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0,this.viewContext.complete=!1,this.renderSuspenseView()},next:u=>{this.viewContext.$implicit=u.value,this.viewContext.ngrxLet=u.value,u.reset&&(this.viewContext.error=void 0,this.viewContext.complete=!1),this.renderMainView(u.synchronous)},error:u=>{this.viewContext.error=u.error,u.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.complete=!1),this.renderMainView(u.synchronous),this.errorHandler.handleError(u.error)},complete:u=>{this.viewContext.complete=!0,u.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0),this.renderMainView(u.synchronous)}}),this.subscription=new c.w0}set ngrxLet(t){this.renderEventManager.nextPotentialObservable(t)}static ngTemplateContextGuard(t,r){return!0}ngOnInit(){this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}renderMainView(t){this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!1,this.viewContainerRef.clear()),this.isMainViewCreated||(this.isMainViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.mainTemplateRef,this.viewContext)),t||this.renderScheduler.schedule()}renderSuspenseView(){this.isMainViewCreated&&(this.isMainViewCreated=!1,this.viewContainerRef.clear()),this.suspenseTemplateRef&&!this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.Rgc),i.Y36(i.s_b),i.Y36(i.qLn),i.Y36(g))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngrxLet",""]],inputs:{ngrxLet:"ngrxLet",suspenseTemplateRef:["ngrxLetSuspenseTpl","suspenseTemplateRef"]},features:[i._Bn([g])]}),e})(),z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e})(),G=(()=>{class e{constructor(t){this.errorHandler=t,this.renderScheduler=function F(){return new g((0,i.f3M)(i.sBO),(0,i.f3M)(M))}(),this.renderEventManager=S({suspense:r=>this.setRenderedValue(void 0,r.synchronous),next:r=>this.setRenderedValue(r.value,r.synchronous),error:r=>{r.reset&&this.setRenderedValue(void 0,r.synchronous),this.errorHandler.handleError(r.error)},complete:r=>{r.reset&&this.setRenderedValue(void 0,r.synchronous)}}),this.subscription=this.renderEventManager.handlePotentialObservableChanges().subscribe()}transform(t){return this.renderEventManager.nextPotentialObservable(t),this.renderedValue}ngOnDestroy(){this.subscription.unsubscribe()}setRenderedValue(t,r){t!==this.renderedValue&&(this.renderedValue=t,r||this.renderScheduler.schedule())}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.qLn,16))},e.\u0275pipe=i.Yjl({name:"ngrxPush",type:e,pure:!1}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({}),e})()}}]);