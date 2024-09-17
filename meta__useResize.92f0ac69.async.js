(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[477],{52191:function(o,f,n){"use strict";var h;n.r(f),n.d(f,{demos:function(){return E}});var v=n(17061),r=n.n(v),I=n(17156),c=n.n(I),d=n(67294),x=n(62062),b=n(23067),E={"src-use-resize-demo-example":{component:d.memo(d.lazy(function(){return Promise.all([n.e(107),n.e(764),n.e(683),n.e(433)]).then(n.bind(n,54589))})),asset:{type:"BLOCK",id:"src-use-resize-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(23864).Z},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u5143\u7D20\u5C3A\u5BF8\u663E\u793A",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:h||(h=n.t(d,2)),"use-hooks":b},renderOpts:{compile:function(){var g=c()(r()().mark(function p(){var S,C=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return y.abrupt("return",(S=y.sent).default.apply(S,C));case 3:case"end":return y.stop()}},p)}));function m(){return g.apply(this,arguments)}return m}()}}}},23067:function(o,f,n){"use strict";n.r(f),n.d(f,{useBoolean:function(){return I},useClickOutside:function(){return c},useCreation:function(){return x},useCssVar:function(){return b},useIntersection:function(){return S},useLatest:function(){return C},useLockFn:function(){return B},useMap:function(){return j},useMount:function(){return K},useReactive:function(){return $},useResize:function(){return G},useSafeState:function(){return N},useThrottle:function(){return Z},useUnMountedRef:function(){return L},useUnmount:function(){return _},useUpdate:function(){return U}});var h=n(27424),v=n.n(h),r=n(67294),I=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=(0,r.useState)(!!e),u=v()(t,2),a=u[0],l=u[1],s=(0,r.useCallback)(function(){return l(function(z){return!z})},[]),M=[{value:a,toggle:s},l];return M},c=function(e,t){(0,r.useEffect)(function(){console.log("\u66F4\u65B0");var u=function(l){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(l.target))&&(t==null||t())};return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}},[e,t])};function d(i,e){if(i===e)return!0;if(i.length!==e.length)return!1;for(var t=0;t<i.length;t++)if(!Object.is(i[t],e[t]))return!1;return!0}var x=function(e,t){var u=(0,r.useRef)({deps:t,val:void 0,initialized:!1}),a=u.current;return(!a.initialized||!d(a.deps,t))&&(a.initialized=!0,a.val=e(),a.deps=t),a.val},b=function(e){var t=function(l,s){e.current&&e.current.style.setProperty(l,s)},u=function(l){if(e.current)return getComputedStyle(e.current).getPropertyValue(l).trim()};return[u,t]},E=n(74704),g=n.n(E),m=new WeakMap,p=new IntersectionObserver(function(i){var e=g()(i),t;try{for(e.s();!(t=e.n()).done;){var u=t.value,a=m.get(u.target);a==null||a(u,p)}}catch(l){e.e(l)}finally{e.f()}}),S=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return p.observe(t.current),function(){p.unobserve(t.current)}},[]),(0,r.useEffect)(function(){m.set(t.current,e)},[e]),t},C=function(e){var t=(0,r.useRef)(e);return t.current=e,t},T=n(17061),y=n.n(T),W=n(17156),w=n.n(W),B=function(e){var t=(0,r.useRef)(!1);return(0,r.useCallback)(w()(y()().mark(function u(){var a=arguments;return y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,t.current=!0,s.next=6,e.apply(void 0,a);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,t.current=!1,s.finish(7);case 10:case"end":return s.stop()}},u,null,[[2,,7,10]])})),[e])},D=n(861),F=n.n(D),j=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=(0,r.useState)(new Map(e)),u=v()(t,2),a=u[0],l=u[1],s=(0,r.useRef)(e),M=(0,r.useCallback)(function(R,O){l(function(q){return new Map([].concat(F()(q),[[R,O]]))})},[]),z=(0,r.useCallback)(function(R){l(function(O){return O.delete(R),new Map(O)})},[]),J=(0,r.useCallback)(function(){l(new Map(s.current))},[]),Q=(0,r.useCallback)(function(R){return a.get(R)},[a]),X=(0,r.useCallback)(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l(new Map(R))},[]),Y=(0,r.useCallback)(function(){l(new Map)},[]);return(0,r.useMemo)(function(){return{value:a,set:M,remove:z,reset:J,get:Q,clear:Y,setAll:X}},[a])},K=function(e){(0,r.useEffect)(function(){e==null||e()},[])},H=n(18698),V=n.n(H);function A(i,e){return new Proxy(i,{get:function(u,a,l){var s=Reflect.get(u,a,l);return V()(s)==="object"?A(s,e):Reflect.get(u,a)},set:function(u,a,l){var s=Reflect.set(u,a,l);return e(),s},deleteProperty:function(u,a){var l=Reflect.deleteProperty(u,a);return e(),l}})}var $=function(e){var t=U(),u=x(function(){return A(e,t)},[]);return u},P=new WeakMap,k=new ResizeObserver(function(i){var e=g()(i),t;try{for(e.s();!(t=e.n()).done;){var u=t.value,a=P.get(u.target);a==null||a(u)}}catch(l){e.e(l)}finally{e.f()}}),G=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return k.observe(t.current),function(){k.unobserve(t.current)}},[]),(0,r.useEffect)(function(){P.set(t.current,e)},[e]),t};function N(i){var e=L(),t=(0,r.useState)(i),u=v()(t,2),a=u[0],l=u[1],s=(0,r.useCallback)(function(M){e.current||l(M)},[]);return[a,s]}var Z=function(e){function t(){}return{}},_=function(e){var t=C(e);(0,r.useEffect)(function(){return function(){var u;(u=t.current)===null||u===void 0||u.call(t)}},[])},L=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},U=function(){var e=(0,r.useState)({}),t=v()(e,2),u=t[1];return(0,r.useCallback)(function(){return u({})},[])}},69514:function(o,f,n){"use strict";n.r(f),n.d(f,{texts:function(){return v}});var h=n(62062);const v=[{value:"\u7528\u4E8E\u5143\u7D20 resize \u540E\u8FDB\u884C\u64CD\u4F5C\u7684 hook\u3002\u4F7F\u7528",paraId:0,tocIndex:0},{value:"ResizeObserver",paraId:0,tocIndex:0},{value:" API",paraId:0,tocIndex:0},{value:`const domRef: MutableRefObject = useResize(
  cb: (entry: ResizeObserverEntry) => void,
);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"cb",paraId:2,tocIndex:5},{value:"\u5143\u7D20\u5C3A\u5BF8\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\u7684\u56DE\u8C03",paraId:2,tocIndex:5},{value:"(entry: ResizeObserverEntry) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"domRef",paraId:3,tocIndex:6},{value:"\u9700\u8981\u6302\u8F7D\u5230 dom \u5143\u7D20\u4E0A\u7684 ref",paraId:3,tocIndex:6},{value:"MutableRefObject",paraId:3,tocIndex:6},{value:"\u53C2\u8003\u5B98\u65B9\u6587\u6863-",paraId:4,tocIndex:7},{value:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry",paraId:4,tocIndex:7}]},23864:function(o,f){"use strict";f.Z=`import React, { useState } from 'react';
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
`},63405:function(o,f,n){var h=n(73897);function v(r){if(Array.isArray(r))return h(r)}o.exports=v,o.exports.__esModule=!0,o.exports.default=o.exports},74704:function(o,f,n){var h=n(86116);function v(r,I){var c=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!c){if(Array.isArray(r)||(c=h(r))||I&&r&&typeof r.length=="number"){c&&(r=c);var d=0,x=function(){};return{s:x,n:function(){return d>=r.length?{done:!0}:{done:!1,value:r[d++]}},e:function(p){throw p},f:x}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,E=!1,g;return{s:function(){c=c.call(r)},n:function(){var p=c.next();return b=p.done,p},e:function(p){E=!0,g=p},f:function(){try{!b&&c.return!=null&&c.return()}finally{if(E)throw g}}}}o.exports=v,o.exports.__esModule=!0,o.exports.default=o.exports},79498:function(o){function f(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}o.exports=f,o.exports.__esModule=!0,o.exports.default=o.exports},42281:function(o){function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=f,o.exports.__esModule=!0,o.exports.default=o.exports},861:function(o,f,n){var h=n(63405),v=n(79498),r=n(86116),I=n(42281);function c(d){return h(d)||v(d)||r(d)||I()}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
