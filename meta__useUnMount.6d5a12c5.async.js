"use strict";(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[913],{35309:function(R,l,t){var d;t.r(l),t.d(l,{demos:function(){return E}});var f=t(17061),a=t.n(f),I=t(17156),C=t.n(I),m=t(67294),S=t(41511),O=t(22280),P=t(75831),E={"src-use-un-mount-demo-example":{component:m.memo(m.lazy(function(){return Promise.all([t.e(107),t.e(764),t.e(683),t.e(433)]).then(t.bind(t,35799))})),asset:{type:"BLOCK",id:"src-use-un-mount-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(1893).Z},antd:{type:"NPM",value:"5.20.6"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\uFF0C\u6267\u884C\u65B9\u6CD5\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:O,react:d||(d=t.t(m,2)),"use-hooks":P},renderOpts:{compile:function(){var M=C()(a()().mark(function T(){var p,U=arguments;return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([t.e(764),t.e(335)]).then(t.bind(t,37335));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,U));case 3:case"end":return i.stop()}},T)}));function h(){return M.apply(this,arguments)}return h}()}}}},75831:function(R,l,t){t.r(l),t.d(l,{useBoolean:function(){return I},useClickOutside:function(){return C},useCreation:function(){return S},useCssVar:function(){return O},useIntersection:function(){return T},useLatest:function(){return p},useLockFn:function(){return z},useMap:function(){return j},useMount:function(){return w},useReactive:function(){return $},useResize:function(){return G},useSafeState:function(){return N},useUnMountedRef:function(){return W},useUnmount:function(){return Z},useUpdate:function(){return K}});var d=t(27424),f=t.n(d),a=t(67294),I=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=(0,a.useState)(!!e),r=f()(n,2),u=r[0],o=r[1],s=(0,a.useCallback)(function(){return o(function(L){return!L})},[]),g=[{value:u,toggle:s},o];return g},C=function(e,n){(0,a.useEffect)(function(){var r=function(o){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(o.target))&&(n==null||n())};return document.addEventListener("click",r),function(){document.removeEventListener("click",r)}},[e,n])};function m(c,e){if(c===e)return!0;if(c.length!==e.length)return!1;for(var n=0;n<c.length;n++)if(!Object.is(c[n],e[n]))return!1;return!0}var S=function(e,n){var r=(0,a.useRef)({deps:n,val:void 0,initialized:!1}),u=r.current;return(!u.initialized||!m(u.deps,n))&&(u.initialized=!0,u.val=e(),u.deps=n),u.val},O=function(e){var n=function(o,s){e.current&&e.current.style.setProperty(o,s)},r=function(o){if(e.current)return getComputedStyle(e.current).getPropertyValue(o).trim()};return[r,n]},P=t(74704),E=t.n(P),M=new WeakMap,h=new IntersectionObserver(function(c){var e=E()(c),n;try{for(e.s();!(n=e.n()).done;){var r=n.value,u=M.get(r.target);u==null||u(r,h)}}catch(o){e.e(o)}finally{e.f()}}),T=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,a.useRef)(null);return(0,a.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return h.observe(n.current),function(){h.unobserve(n.current)}},[]),(0,a.useEffect)(function(){M.set(n.current,e)},[e]),n},p=function(e){var n=(0,a.useRef)(e);return n.current=e,n},U=t(17061),k=t.n(U),i=t(17156),x=t.n(i),z=function(e){var n=(0,a.useRef)(!1);return(0,a.useCallback)(x()(k()().mark(function r(){var u=arguments;return k()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!n.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,n.current=!0,s.next=6,e.apply(void 0,u);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,n.current=!1,s.finish(7);case 10:case"end":return s.stop()}},r,null,[[2,,7,10]])})),[e])},b=t(861),F=t.n(b),j=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,a.useState)(new Map(e)),r=f()(n,2),u=r[0],o=r[1],s=(0,a.useRef)(e),g=(0,a.useCallback)(function(v,y){o(function(_){return new Map([].concat(F()(_),[[v,y]]))})},[]),L=(0,a.useCallback)(function(v){o(function(y){return y.delete(v),new Map(y)})},[]),J=(0,a.useCallback)(function(){o(new Map(s.current))},[]),Q=(0,a.useCallback)(function(v){return u.get(v)},[u]),X=(0,a.useCallback)(function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];o(new Map(v))},[]),Y=(0,a.useCallback)(function(){o(new Map)},[]);return(0,a.useMemo)(function(){return{value:u,set:g,remove:L,reset:J,get:Q,clear:Y,setAll:X}},[u])},w=function(e){(0,a.useEffect)(function(){e==null||e()},[])},H=t(18698),V=t.n(H);function A(c,e){return new Proxy(c,{get:function(r,u,o){var s=Reflect.get(r,u,o);return V()(s)==="object"?A(s,e):Reflect.get(r,u)},set:function(r,u,o){var s=Reflect.set(r,u,o);return e(),s},deleteProperty:function(r,u){var o=Reflect.deleteProperty(r,u);return e(),o}})}var $=function(e){var n=K(),r=S(function(){return A(e,n)},[]);return r},B=new WeakMap,D=new ResizeObserver(function(c){var e=E()(c),n;try{for(e.s();!(n=e.n()).done;){var r=n.value,u=B.get(r.target);u==null||u(r)}}catch(o){e.e(o)}finally{e.f()}}),G=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,a.useRef)(null);return(0,a.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return D.observe(n.current),function(){D.unobserve(n.current)}},[]),(0,a.useEffect)(function(){B.set(n.current,e)},[e]),n};function N(c){var e=W(),n=(0,a.useState)(c),r=f()(n,2),u=r[0],o=r[1],s=(0,a.useCallback)(function(g){e.current||o(g)},[]);return[u,s]}var Z=function(e){var n=p(e);(0,a.useEffect)(function(){return function(){var r;(r=n.current)===null||r===void 0||r.call(n)}},[])},W=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},K=function(){var e=(0,a.useState)({}),n=f()(e,2),r=n[1];return(0,a.useCallback)(function(){return r({})},[])}},35617:function(R,l,t){t.r(l),t.d(l,{texts:function(){return f}});var d=t(41511);const f=[{value:"\u53EA\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u6267\u884C\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`useUnMount(fn: () => void );
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"fn",paraId:2,tocIndex:5},{value:"unMount \u65F6\u6267\u884C\u7684\u51FD\u6570",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},1893:function(R,l){l.Z=`import { Button, message, Space } from 'antd';
import React, { useState } from 'react';
import { useUnmount } from 'use-hooks';

const Header = () => {
  const [cnt, setCnt] = useState(0);

  useUnmount(() => {
    message.info('destoryed: ' + cnt);
  });
  return (
    <Space>
      <div>{cnt}</div>
      <Button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        \u6309\u94AE
      </Button>
    </Space>
  );
};
export default () => {
  const [isShow, setIshow] = useState(true);

  return (
    <>
      <Space direction="vertical">
        {isShow && <Header />}
        <button
          onClick={() => {
            setIshow(isShow ? false : true);
          }}
          type="button"
        >
          \u70B9\u51FBtoggle
        </button>
      </Space>
    </>
  );
};
`}}]);
