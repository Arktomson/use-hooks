(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[913],{35309:function(o,c,t){"use strict";var p;t.r(c),t.d(c,{demos:function(){return y}});var r=t(17061),i=t.n(r),M=t(17156),v=t.n(M),d=t(67294),C=t(41511),E=t(22280),I=t(96180),y={"src-use-un-mount-demo-example":{component:d.memo(d.lazy(function(){return Promise.all([t.e(107),t.e(764),t.e(683),t.e(433)]).then(t.bind(t,35799))})),asset:{type:"BLOCK",id:"src-use-un-mount-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(1893).Z},antd:{type:"NPM",value:"5.20.6"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u5728\u7EC4\u4EF6\u5378\u8F7D\u65F6\uFF0C\u6267\u884C\u65B9\u6CD5\u3002",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:E,react:p||(p=t.t(d,2)),"use-hooks":I},renderOpts:{compile:function(){var h=v()(i()().mark(function S(){var O,T=arguments;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([t.e(764),t.e(335)]).then(t.bind(t,37335));case 2:return g.abrupt("return",(O=g.sent).default.apply(O,T));case 3:case"end":return g.stop()}},S)}));function m(){return h.apply(this,arguments)}return m}()}}}},96180:function(o,c,t){"use strict";t.r(c),t.d(c,{useBoolean:function(){return p.useBoolean},useClickOutside:function(){return i},useCreation:function(){return v},useCssVar:function(){return d},useIntersection:function(){return h},useLatest:function(){return m},useLockFn:function(){return g},useMap:function(){return j},useMount:function(){return z},useReactive:function(){return H},useResize:function(){return V},useSafeState:function(){return $},useUnMountedRef:function(){return B},useUnmount:function(){return G},useUpdate:function(){return D}});var p=t(86908),r=t(67294),i=function(e,n){(0,r.useEffect)(function(){var u=function(f){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(f.target))&&(n==null||n())};return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}},[e,n])};function M(l,e){if(l===e)return!0;if(l.length!==e.length)return!1;for(var n=0;n<l.length;n++)if(!Object.is(l[n],e[n]))return!1;return!0}var v=function(e,n){var u=(0,r.useRef)({deps:n,val:void 0,initialized:!1}),a=u.current;return(!a.initialized||!M(a.deps,n))&&(a.initialized=!0,a.val=e(),a.deps=n),a.val},d=function(e){var n=function(f,s){e.current&&e.current.style.setProperty(f,s)},u=function(f){if(e.current)return getComputedStyle(e.current).getPropertyValue(f).trim()};return[u,n]},C=t(74704),E=t.n(C),I=new WeakMap,y=new IntersectionObserver(function(l){var e=E()(l),n;try{for(e.s();!(n=e.n()).done;){var u=n.value,a=I.get(u.target);a==null||a(u,y)}}catch(f){e.e(f)}finally{e.f()}}),h=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return y.observe(n.current),function(){y.unobserve(n.current)}},[]),(0,r.useEffect)(function(){I.set(n.current,e)},[e]),n},m=function(e){var n=(0,r.useRef)(e);return n.current=e,n},S=t(17061),O=t.n(S),T=t(17156),b=t.n(T),g=function(e){var n=(0,r.useRef)(!1);return(0,r.useCallback)(b()(O()().mark(function u(){var a=arguments;return O()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!n.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,n.current=!0,s.next=6,e.apply(void 0,a);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,n.current=!1,s.finish(7);case 10:case"end":return s.stop()}},u,null,[[2,,7,10]])})),[e])},k=t(861),W=t.n(k),K=t(27424),A=t.n(K),j=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,r.useState)(new Map(e)),u=A()(n,2),a=u[0],f=u[1],s=(0,r.useRef)(e),x=(0,r.useCallback)(function(R,P){f(function(Y){return new Map([].concat(W()(Y),[[R,P]]))})},[]),N=(0,r.useCallback)(function(R){f(function(P){return P.delete(R),new Map(P)})},[]),Z=(0,r.useCallback)(function(){f(new Map(s.current))},[]),J=(0,r.useCallback)(function(R){return a.get(R)},[a]),Q=(0,r.useCallback)(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];f(new Map(R))},[]),X=(0,r.useCallback)(function(){f(new Map)},[]);return(0,r.useMemo)(function(){return{value:a,set:x,remove:N,reset:Z,get:J,clear:X,setAll:Q}},[a])},z=function(e){(0,r.useEffect)(function(){e==null||e()},[])},F=t(18698),w=t.n(F);function _(l,e){return new Proxy(l,{get:function(u,a,f){var s=Reflect.get(u,a,f);return w()(s)==="object"?_(s,e):Reflect.get(u,a)},set:function(u,a,f){var s=Reflect.set(u,a,f);return e(),s},deleteProperty:function(u,a){var f=Reflect.deleteProperty(u,a);return e(),f}})}var H=function(e){var n=D(),u=v(function(){return _(e,n)},[]);return u},U=new WeakMap,L=new ResizeObserver(function(l){var e=E()(l),n;try{for(e.s();!(n=e.n()).done;){var u=n.value,a=U.get(u.target);a==null||a(u)}}catch(f){e.e(f)}finally{e.f()}}),V=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return L.observe(n.current),function(){L.unobserve(n.current)}},[]),(0,r.useEffect)(function(){U.set(n.current,e)},[e]),n};function $(l){var e=B(),n=(0,r.useState)(l),u=A()(n,2),a=u[0],f=u[1],s=(0,r.useCallback)(function(x){e.current||f(x)},[]);return[a,s]}var G=function(e){var n=m(e);(0,r.useEffect)(function(){return function(){var u;(u=n.current)===null||u===void 0||u.call(n)}},[])},B=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},D=function(){var e=(0,r.useState)({}),n=A()(e,2),u=n[1];return(0,r.useCallback)(function(){return u({})},[])}},86908:function(o,c,t){"use strict";t.r(c),t.d(c,{useBoolean:function(){return M}});var p=t(27424),r=t.n(p),i=t(67294),M=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,C=(0,i.useState)(!!d),E=r()(C,2),I=E[0],y=E[1],h=(0,i.useCallback)(function(){return y(function(S){return!S})},[]),m=[{value:I,toggle:h},y];return m}},35617:function(o,c,t){"use strict";t.r(c),t.d(c,{texts:function(){return r}});var p=t(41511);const r=[{value:"\u53EA\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u6267\u884C\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`useUnMount(fn: () => void );
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"fn",paraId:2,tocIndex:5},{value:"unMount \u65F6\u6267\u884C\u7684\u51FD\u6570",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},1893:function(o,c){"use strict";c.Z=`import { Button, message, Space } from 'antd';
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
`},63405:function(o,c,t){var p=t(73897);function r(i){if(Array.isArray(i))return p(i)}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},74704:function(o,c,t){var p=t(86116);function r(i,M){var v=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!v){if(Array.isArray(i)||(v=p(i))||M&&i&&typeof i.length=="number"){v&&(i=v);var d=0,C=function(){};return{s:C,n:function(){return d>=i.length?{done:!0}:{done:!1,value:i[d++]}},e:function(m){throw m},f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,I=!1,y;return{s:function(){v=v.call(i)},n:function(){var m=v.next();return E=m.done,m},e:function(m){I=!0,y=m},f:function(){try{!E&&v.return!=null&&v.return()}finally{if(I)throw y}}}}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},79498:function(o){function c(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports},42281:function(o){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports},861:function(o,c,t){var p=t(63405),r=t(79498),i=t(86116),M=t(42281);function v(d){return p(d)||r(d)||i(d)||M()}o.exports=v,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
