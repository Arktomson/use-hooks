(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[477],{52191:function(o,f,n){"use strict";var h;n.r(f),n.d(f,{demos:function(){return E}});var d=n(17061),r=n.n(d),I=n(17156),c=n.n(I),v=n(67294),x=n(62062),b=n(75831),E={"src-use-resize-demo-example":{component:v.memo(v.lazy(function(){return Promise.all([n.e(107),n.e(764),n.e(683),n.e(433)]).then(n.bind(n,54589))})),asset:{type:"BLOCK",id:"src-use-resize-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(23864).Z},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u5143\u7D20\u5C3A\u5BF8\u663E\u793A",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:h||(h=n.t(v,2)),"use-hooks":b},renderOpts:{compile:function(){var g=c()(r()().mark(function p(){var S,C=arguments;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return y.abrupt("return",(S=y.sent).default.apply(S,C));case 3:case"end":return y.stop()}},p)}));function m(){return g.apply(this,arguments)}return m}()}}}},75831:function(o,f,n){"use strict";n.r(f),n.d(f,{useBoolean:function(){return I},useClickOutside:function(){return c},useCreation:function(){return x},useCssVar:function(){return b},useIntersection:function(){return S},useLatest:function(){return C},useLockFn:function(){return B},useMap:function(){return K},useMount:function(){return F},useReactive:function(){return $},useResize:function(){return G},useSafeState:function(){return N},useUnMountedRef:function(){return L},useUnmount:function(){return Z},useUpdate:function(){return U}});var h=n(27424),d=n.n(h),r=n(67294),I=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=(0,r.useState)(!!e),u=d()(t,2),a=u[0],i=u[1],s=(0,r.useCallback)(function(){return i(function(z){return!z})},[]),M=[{value:a,toggle:s},i];return M},c=function(e,t){(0,r.useEffect)(function(){var u=function(i){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(i.target))&&(t==null||t())};return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}},[e,t])};function v(l,e){if(l===e)return!0;if(l.length!==e.length)return!1;for(var t=0;t<l.length;t++)if(!Object.is(l[t],e[t]))return!1;return!0}var x=function(e,t){var u=(0,r.useRef)({deps:t,val:void 0,initialized:!1}),a=u.current;return(!a.initialized||!v(a.deps,t))&&(a.initialized=!0,a.val=e(),a.deps=t),a.val},b=function(e){var t=function(i,s){e.current&&e.current.style.setProperty(i,s)},u=function(i){if(e.current)return getComputedStyle(e.current).getPropertyValue(i).trim()};return[u,t]},E=n(74704),g=n.n(E),m=new WeakMap,p=new IntersectionObserver(function(l){var e=g()(l),t;try{for(e.s();!(t=e.n()).done;){var u=t.value,a=m.get(u.target);a==null||a(u,p)}}catch(i){e.e(i)}finally{e.f()}}),S=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return p.observe(t.current),function(){p.unobserve(t.current)}},[]),(0,r.useEffect)(function(){m.set(t.current,e)},[e]),t},C=function(e){var t=(0,r.useRef)(e);return t.current=e,t},A=n(17061),y=n.n(A),W=n(17156),w=n.n(W),B=function(e){var t=(0,r.useRef)(!1);return(0,r.useCallback)(w()(y()().mark(function u(){var a=arguments;return y()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,t.current=!0,s.next=6,e.apply(void 0,a);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,t.current=!1,s.finish(7);case 10:case"end":return s.stop()}},u,null,[[2,,7,10]])})),[e])},D=n(861),j=n.n(D),K=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=(0,r.useState)(new Map(e)),u=d()(t,2),a=u[0],i=u[1],s=(0,r.useRef)(e),M=(0,r.useCallback)(function(R,O){i(function(Y){return new Map([].concat(j()(Y),[[R,O]]))})},[]),z=(0,r.useCallback)(function(R){i(function(O){return O.delete(R),new Map(O)})},[]),_=(0,r.useCallback)(function(){i(new Map(s.current))},[]),J=(0,r.useCallback)(function(R){return a.get(R)},[a]),Q=(0,r.useCallback)(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];i(new Map(R))},[]),X=(0,r.useCallback)(function(){i(new Map)},[]);return(0,r.useMemo)(function(){return{value:a,set:M,remove:z,reset:_,get:J,clear:X,setAll:Q}},[a])},F=function(e){(0,r.useEffect)(function(){e==null||e()},[])},H=n(18698),V=n.n(H);function P(l,e){return new Proxy(l,{get:function(u,a,i){var s=Reflect.get(u,a,i);return V()(s)==="object"?P(s,e):Reflect.get(u,a)},set:function(u,a,i){var s=Reflect.set(u,a,i);return e(),s},deleteProperty:function(u,a){var i=Reflect.deleteProperty(u,a);return e(),i}})}var $=function(e){var t=U(),u=x(function(){return P(e,t)},[]);return u},T=new WeakMap,k=new ResizeObserver(function(l){var e=g()(l),t;try{for(e.s();!(t=e.n()).done;){var u=t.value,a=T.get(u.target);a==null||a(u)}}catch(i){e.e(i)}finally{e.f()}}),G=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return k.observe(t.current),function(){k.unobserve(t.current)}},[]),(0,r.useEffect)(function(){T.set(t.current,e)},[e]),t};function N(l){var e=L(),t=(0,r.useState)(l),u=d()(t,2),a=u[0],i=u[1],s=(0,r.useCallback)(function(M){e.current||i(M)},[]);return[a,s]}var Z=function(e){var t=C(e);(0,r.useEffect)(function(){return function(){var u;(u=t.current)===null||u===void 0||u.call(t)}},[])},L=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},U=function(){var e=(0,r.useState)({}),t=d()(e,2),u=t[1];return(0,r.useCallback)(function(){return u({})},[])}},69514:function(o,f,n){"use strict";n.r(f),n.d(f,{texts:function(){return d}});var h=n(62062);const d=[{value:"\u7528\u4E8E\u5143\u7D20 resize \u540E\u8FDB\u884C\u64CD\u4F5C\u7684 hook\u3002\u4F7F\u7528",paraId:0,tocIndex:0},{value:"ResizeObserver",paraId:0,tocIndex:0},{value:" API",paraId:0,tocIndex:0},{value:`const domRef: MutableRefObject = useResize(
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
`},63405:function(o,f,n){var h=n(73897);function d(r){if(Array.isArray(r))return h(r)}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports},74704:function(o,f,n){var h=n(86116);function d(r,I){var c=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!c){if(Array.isArray(r)||(c=h(r))||I&&r&&typeof r.length=="number"){c&&(r=c);var v=0,x=function(){};return{s:x,n:function(){return v>=r.length?{done:!0}:{done:!1,value:r[v++]}},e:function(p){throw p},f:x}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,E=!1,g;return{s:function(){c=c.call(r)},n:function(){var p=c.next();return b=p.done,p},e:function(p){E=!0,g=p},f:function(){try{!b&&c.return!=null&&c.return()}finally{if(E)throw g}}}}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports},79498:function(o){function f(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}o.exports=f,o.exports.__esModule=!0,o.exports.default=o.exports},42281:function(o){function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=f,o.exports.__esModule=!0,o.exports.default=o.exports},861:function(o,f,n){var h=n(63405),d=n(79498),r=n(86116),I=n(42281);function c(v){return h(v)||d(v)||r(v)||I()}o.exports=c,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
