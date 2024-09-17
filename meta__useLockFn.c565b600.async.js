"use strict";(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[334],{59331:function(R,l,t){var d;t.r(l),t.d(l,{demos:function(){return y}});var f=t(17061),a=t.n(f),M=t(17156),C=t.n(M),m=t(67294),P=t(79320),O=t(22280),S=t(23067),y={"src-use-lock-fn-demo-example":{component:m.memo(m.lazy(function(){return Promise.all([t.e(107),t.e(764),t.e(683),t.e(433)]).then(t.bind(t,8811))})),asset:{type:"BLOCK",id:"src-use-lock-fn-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(97359).Z},antd:{type:"NPM",value:"5.20.6"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u573A\u666F\u793A\u4F8B",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:O,react:d||(d=t.t(m,2)),"use-hooks":S},renderOpts:{compile:function(){var I=C()(a()().mark(function T(){var h,k=arguments;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([t.e(764),t.e(335)]).then(t.bind(t,37335));case 2:return i.abrupt("return",(h=i.sent).default.apply(h,k));case 3:case"end":return i.stop()}},T)}));function p(){return I.apply(this,arguments)}return p}()}}}},23067:function(R,l,t){t.r(l),t.d(l,{useBoolean:function(){return M},useClickOutside:function(){return C},useCreation:function(){return P},useCssVar:function(){return O},useIntersection:function(){return T},useLatest:function(){return h},useLockFn:function(){return W},useMap:function(){return V},useMount:function(){return j},useReactive:function(){return N},useResize:function(){return w},useSafeState:function(){return H},useThrottle:function(){return Z},useUnMountedRef:function(){return F},useUnmount:function(){return J},useUpdate:function(){return b}});var d=t(27424),f=t.n(d),a=t(67294),M=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=(0,a.useState)(!!e),r=f()(n,2),u=r[0],c=r[1],s=(0,a.useCallback)(function(){return c(function(A){return!A})},[]),g=[{value:u,toggle:s},c];return g},C=function(e,n){(0,a.useEffect)(function(){console.log("\u66F4\u65B0");var r=function(c){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(c.target))&&(n==null||n())};return document.addEventListener("click",r),function(){document.removeEventListener("click",r)}},[e,n])};function m(o,e){if(o===e)return!0;if(o.length!==e.length)return!1;for(var n=0;n<o.length;n++)if(!Object.is(o[n],e[n]))return!1;return!0}var P=function(e,n){var r=(0,a.useRef)({deps:n,val:void 0,initialized:!1}),u=r.current;return(!u.initialized||!m(u.deps,n))&&(u.initialized=!0,u.val=e(),u.deps=n),u.val},O=function(e){var n=function(c,s){e.current&&e.current.style.setProperty(c,s)},r=function(c){if(e.current)return getComputedStyle(e.current).getPropertyValue(c).trim()};return[r,n]},S=t(74704),y=t.n(S),I=new WeakMap,p=new IntersectionObserver(function(o){var e=y()(o),n;try{for(e.s();!(n=e.n()).done;){var r=n.value,u=I.get(r.target);u==null||u(r,p)}}catch(c){e.e(c)}finally{e.f()}}),T=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,a.useRef)(null);return(0,a.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return p.observe(n.current),function(){p.unobserve(n.current)}},[]),(0,a.useEffect)(function(){I.set(n.current,e)},[e]),n},h=function(e){var n=(0,a.useRef)(e);return n.current=e,n},k=t(17061),L=t.n(k),i=t(17156),B=t.n(i),W=function(e){var n=(0,a.useRef)(!1);return(0,a.useCallback)(B()(L()().mark(function r(){var u=arguments;return L()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!n.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,n.current=!0,s.next=6,e.apply(void 0,u);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,n.current=!1,s.finish(7);case 10:case"end":return s.stop()}},r,null,[[2,,7,10]])})),[e])},K=t(861),z=t.n(K),V=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,a.useState)(new Map(e)),r=f()(n,2),u=r[0],c=r[1],s=(0,a.useRef)(e),g=(0,a.useCallback)(function(v,E){c(function(q){return new Map([].concat(z()(q),[[v,E]]))})},[]),A=(0,a.useCallback)(function(v){c(function(E){return E.delete(v),new Map(E)})},[]),Q=(0,a.useCallback)(function(){c(new Map(s.current))},[]),X=(0,a.useCallback)(function(v){return u.get(v)},[u]),Y=(0,a.useCallback)(function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];c(new Map(v))},[]),_=(0,a.useCallback)(function(){c(new Map)},[]);return(0,a.useMemo)(function(){return{value:u,set:g,remove:A,reset:Q,get:X,clear:_,setAll:Y}},[u])},j=function(e){(0,a.useEffect)(function(){e==null||e()},[])},$=t(18698),G=t.n($);function U(o,e){return new Proxy(o,{get:function(r,u,c){var s=Reflect.get(r,u,c);return G()(s)==="object"?U(s,e):Reflect.get(r,u)},set:function(r,u,c){var s=Reflect.set(r,u,c);return e(),s},deleteProperty:function(r,u){var c=Reflect.deleteProperty(r,u);return e(),c}})}var N=function(e){var n=b(),r=P(function(){return U(e,n)},[]);return r},D=new WeakMap,x=new ResizeObserver(function(o){var e=y()(o),n;try{for(e.s();!(n=e.n()).done;){var r=n.value,u=D.get(r.target);u==null||u(r)}}catch(c){e.e(c)}finally{e.f()}}),w=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,a.useRef)(null);return(0,a.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return x.observe(n.current),function(){x.unobserve(n.current)}},[]),(0,a.useEffect)(function(){D.set(n.current,e)},[e]),n};function H(o){var e=F(),n=(0,a.useState)(o),r=f()(n,2),u=r[0],c=r[1],s=(0,a.useCallback)(function(g){e.current||c(g)},[]);return[u,s]}var Z=function(e){function n(){}return{}},J=function(e){var n=h(e);(0,a.useEffect)(function(){return function(){var r;(r=n.current)===null||r===void 0||r.call(n)}},[])},F=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},b=function(){var e=(0,a.useState)({}),n=f()(e,2),r=n[1];return(0,a.useCallback)(function(){return r({})},[])}},4993:function(R,l,t){t.r(l),t.d(l,{texts:function(){return f}});var d=t(79320);const f=[{value:"\u7528\u4E8E\u7ED9\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u589E\u52A0\u7ADE\u6001\u9501\uFF0C\u9632\u6B62\u5E76\u53D1\u6267\u884C\u3002",paraId:0,tocIndex:0},{value:`function useLockFn<P extends any[] = any[], V = any>(
  fn: (...args: P) => Promise<V>
): fn: (...args: P) => Promise<V | undefined>;
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"fn",paraId:2,tocIndex:5},{value:"\u589E\u52A0\u4E86\u7ADE\u6001\u9501\u7684\u51FD\u6570",paraId:2,tocIndex:5},{value:"(...args: any[]) => Promise<any>",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"fn",paraId:3,tocIndex:6},{value:"\u9700\u8981\u589E\u52A0\u7ADE\u6001\u9501\u7684\u51FD\u6570",paraId:3,tocIndex:6},{value:"(...args: any[]) => Promise<any>",paraId:3,tocIndex:6}]},97359:function(R,l){l.Z=`import { message } from 'antd';
import React, { useState } from 'react';
import { useLockFn } from 'use-hooks';

function mockApiRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default () => {
  const [count, setCount] = useState(0);

  const submit = useLockFn(async () => {
    message.info('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    message.success('Submit finished');
  });

  return (
    <>
      <p>Submit count: {count}</p>
      <button
        type="button"
        onClick={() => {
          submit();
        }}
      >
        Submit
      </button>
    </>
  );
};
`}}]);
