(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[477],{52191:function(o,c,t){"use strict";var h;t.r(c),t.d(c,{demos:function(){return g}});var r=t(17061),f=t.n(r),R=t(17156),d=t.n(R),v=t(67294),x=t(62062),I=t(96180),g={"src-use-resize-demo-example":{component:v.memo(v.lazy(function(){return Promise.all([t.e(107),t.e(764),t.e(683),t.e(433)]).then(t.bind(t,54589))})),asset:{type:"BLOCK",id:"src-use-resize-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(23864).Z},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u5143\u7D20\u5C3A\u5BF8\u663E\u793A",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:h||(h=t.t(v,2)),"use-hooks":I},renderOpts:{compile:function(){var y=d()(f()().mark(function p(){var b,S=arguments;return f()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([t.e(764),t.e(335)]).then(t.bind(t,37335));case 2:return E.abrupt("return",(b=E.sent).default.apply(b,S));case 3:case"end":return E.stop()}},p)}));function m(){return y.apply(this,arguments)}return m}()}}}},96180:function(o,c,t){"use strict";t.r(c),t.d(c,{useBoolean:function(){return h.useBoolean},useClickOutside:function(){return f},useCreation:function(){return d},useCssVar:function(){return v},useIntersection:function(){return m},useLatest:function(){return p},useLockFn:function(){return L},useMap:function(){return w},useMount:function(){return K},useReactive:function(){return H},useResize:function(){return V},useSafeState:function(){return $},useUnMountedRef:function(){return k},useUnmount:function(){return G},useUpdate:function(){return B}});var h=t(86908),r=t(67294),f=function(e,n){(0,r.useEffect)(function(){var u=function(l){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(l.target))&&(n==null||n())};return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}},[e,n])};function R(i,e){if(i===e)return!0;if(i.length!==e.length)return!1;for(var n=0;n<i.length;n++)if(!Object.is(i[n],e[n]))return!1;return!0}var d=function(e,n){var u=(0,r.useRef)({deps:n,val:void 0,initialized:!1}),a=u.current;return(!a.initialized||!R(a.deps,n))&&(a.initialized=!0,a.val=e(),a.deps=n),a.val},v=function(e){var n=function(l,s){e.current&&e.current.style.setProperty(l,s)},u=function(l){if(e.current)return getComputedStyle(e.current).getPropertyValue(l).trim()};return[u,n]},x=t(74704),I=t.n(x),g=new WeakMap,y=new IntersectionObserver(function(i){var e=I()(i),n;try{for(e.s();!(n=e.n()).done;){var u=n.value,a=g.get(u.target);a==null||a(u,y)}}catch(l){e.e(l)}finally{e.f()}}),m=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return y.observe(n.current),function(){y.unobserve(n.current)}},[]),(0,r.useEffect)(function(){g.set(n.current,e)},[e]),n},p=function(e){var n=(0,r.useRef)(e);return n.current=e,n},b=t(17061),S=t.n(b),P=t(17156),E=t.n(P),L=function(e){var n=(0,r.useRef)(!1);return(0,r.useCallback)(E()(S()().mark(function u(){var a=arguments;return S()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!n.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,n.current=!0,s.next=6,e.apply(void 0,a);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,n.current=!1,s.finish(7);case 10:case"end":return s.stop()}},u,null,[[2,,7,10]])})),[e])},U=t(861),D=t.n(U),W=t(27424),C=t.n(W),w=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,r.useState)(new Map(e)),u=C()(n,2),a=u[0],l=u[1],s=(0,r.useRef)(e),A=(0,r.useCallback)(function(M,O){l(function(Y){return new Map([].concat(D()(Y),[[M,O]]))})},[]),N=(0,r.useCallback)(function(M){l(function(O){return O.delete(M),new Map(O)})},[]),Z=(0,r.useCallback)(function(){l(new Map(s.current))},[]),J=(0,r.useCallback)(function(M){return a.get(M)},[a]),Q=(0,r.useCallback)(function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l(new Map(M))},[]),X=(0,r.useCallback)(function(){l(new Map)},[]);return(0,r.useMemo)(function(){return{value:a,set:A,remove:N,reset:Z,get:J,clear:X,setAll:Q}},[a])},K=function(e){(0,r.useEffect)(function(){e==null||e()},[])},j=t(18698),F=t.n(j);function T(i,e){return new Proxy(i,{get:function(u,a,l){var s=Reflect.get(u,a,l);return F()(s)==="object"?T(s,e):Reflect.get(u,a)},set:function(u,a,l){var s=Reflect.set(u,a,l);return e(),s},deleteProperty:function(u,a){var l=Reflect.deleteProperty(u,a);return e(),l}})}var H=function(e){var n=B(),u=d(function(){return T(e,n)},[]);return u},z=new WeakMap,_=new ResizeObserver(function(i){var e=I()(i),n;try{for(e.s();!(n=e.n()).done;){var u=n.value,a=z.get(u.target);a==null||a(u)}}catch(l){e.e(l)}finally{e.f()}}),V=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return _.observe(n.current),function(){_.unobserve(n.current)}},[]),(0,r.useEffect)(function(){z.set(n.current,e)},[e]),n};function $(i){var e=k(),n=(0,r.useState)(i),u=C()(n,2),a=u[0],l=u[1],s=(0,r.useCallback)(function(A){e.current||l(A)},[]);return[a,s]}var G=function(e){var n=p(e);(0,r.useEffect)(function(){return function(){var u;(u=n.current)===null||u===void 0||u.call(n)}},[])},k=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},B=function(){var e=(0,r.useState)({}),n=C()(e,2),u=n[1];return(0,r.useCallback)(function(){return u({})},[])}},86908:function(o,c,t){"use strict";t.r(c),t.d(c,{useBoolean:function(){return R}});var h=t(27424),r=t.n(h),f=t(67294),R=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,x=(0,f.useState)(!!v),I=r()(x,2),g=I[0],y=I[1],m=(0,f.useCallback)(function(){return y(function(b){return!b})},[]),p=[{value:g,toggle:m},y];return p}},69514:function(o,c,t){"use strict";t.r(c),t.d(c,{texts:function(){return r}});var h=t(62062);const r=[{value:"\u7528\u4E8E\u5143\u7D20 resize \u540E\u8FDB\u884C\u64CD\u4F5C\u7684 hook\u3002\u4F7F\u7528",paraId:0,tocIndex:0},{value:"ResizeObserver",paraId:0,tocIndex:0},{value:" API",paraId:0,tocIndex:0},{value:`const domRef: MutableRefObject = useResize(
  cb: (entry: ResizeObserverEntry) => void,
);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"cb",paraId:2,tocIndex:5},{value:"\u5143\u7D20\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\u7684\u56DE\u8C03",paraId:2,tocIndex:5},{value:"(entry: ResizeObserverEntry) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"domRef",paraId:3,tocIndex:6},{value:"\u9700\u8981\u6302\u8F7D\u5230 dom \u5143\u7D20\u4E0A\u7684 ref",paraId:3,tocIndex:6},{value:"MutableRefObject",paraId:3,tocIndex:6},{value:"\u53C2\u8003\u5B98\u65B9\u6587\u6863-",paraId:4,tocIndex:7},{value:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry",paraId:4,tocIndex:7}]},23864:function(o,c){"use strict";c.Z=`import React, { useState } from 'react';
import { useResize } from 'use-hooks';

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [height1, setHeight1] = useState(0);
  const domRef = useResize((entry) => {
    setWidth(entry.borderBoxSize[0].inlineSize);
    setHeight(entry.borderBoxSize[0].blockSize);
  });
  const domRef1 = useResize((entry) => {
    setWidth1(entry.borderBoxSize[0].inlineSize);
    setHeight1(entry.borderBoxSize[0].blockSize);
  });
  return (
    <div>
      <div
        ref={domRef}
        style={{
          resize: 'both',
          width: '200px',
          height: '200px',
          border: '1px solid',
          overflow: 'auto',
        }}
      >
        observing
      </div>

      <div>width: {width}</div>
      <div>height: {height}</div>

      <div
        ref={domRef1}
        style={{
          resize: 'both',
          width: '200px',
          height: '200px',
          border: '1px solid',
          overflow: 'auto',
        }}
      >
        observing
      </div>

      <div>width: {width1}</div>
      <div>height: {height1}</div>
    </div>
  );
};
`},63405:function(o,c,t){var h=t(73897);function r(f){if(Array.isArray(f))return h(f)}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},74704:function(o,c,t){var h=t(86116);function r(f,R){var d=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(!d){if(Array.isArray(f)||(d=h(f))||R&&f&&typeof f.length=="number"){d&&(f=d);var v=0,x=function(){};return{s:x,n:function(){return v>=f.length?{done:!0}:{done:!1,value:f[v++]}},e:function(p){throw p},f:x}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I=!0,g=!1,y;return{s:function(){d=d.call(f)},n:function(){var p=d.next();return I=p.done,p},e:function(p){g=!0,y=p},f:function(){try{!I&&d.return!=null&&d.return()}finally{if(g)throw y}}}}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},79498:function(o){function c(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports},42281:function(o){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports},861:function(o,c,t){var h=t(63405),r=t(79498),f=t(86116),R=t(42281);function d(v){return h(v)||r(v)||f(v)||R()}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
