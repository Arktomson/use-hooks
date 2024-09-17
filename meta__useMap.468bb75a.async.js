"use strict";(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[41],{24503:function(E,c,t){var f;t.r(c),t.d(c,{demos:function(){return g}});var i=t(17061),u=t.n(i),C=t(17156),R=t.n(C),p=t(67294),x=t(55077),k=t(22280),S=t(23067),g={"src-use-map-demo-example":{component:p.memo(p.lazy(function(){return Promise.all([t.e(107),t.e(764),t.e(683),t.e(433)]).then(t.bind(t,81135))})),asset:{type:"BLOCK",id:"src-use-map-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(59429).Z},antd:{type:"NPM",value:"5.20.6"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u4F7F\u7528\u65B9\u6CD5\u64CD\u4F5Cmap",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:k,react:f||(f=t.t(p,2)),"use-hooks":S},renderOpts:{compile:function(){var M=R()(u()().mark(function O(){var I,P=arguments;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(764),t.e(335)]).then(t.bind(t,37335));case 2:return v.abrupt("return",(I=v.sent).default.apply(I,P));case 3:case"end":return v.stop()}},O)}));function m(){return M.apply(this,arguments)}return m}()}}}},23067:function(E,c,t){t.r(c),t.d(c,{useBoolean:function(){return C},useClickOutside:function(){return R},useCreation:function(){return x},useCssVar:function(){return k},useIntersection:function(){return O},useLatest:function(){return I},useLockFn:function(){return V},useMap:function(){return F},useMount:function(){return j},useReactive:function(){return G},useResize:function(){return H},useSafeState:function(){return Z},useThrottle:function(){return w},useUnMountedRef:function(){return U},useUnmount:function(){return J},useUpdate:function(){return b}});var f=t(27424),i=t.n(f),u=t(67294),C=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=(0,u.useState)(!!e),r=i()(n,2),a=r[0],l=r[1],o=(0,u.useCallback)(function(){return l(function(T){return!T})},[]),h=[{value:a,toggle:o},l];return h},R=function(e,n){(0,u.useEffect)(function(){console.log("\u66F4\u65B0");var r=function(l){var o;e!=null&&e.current&&!(e!=null&&(o=e.current)!==null&&o!==void 0&&o.contains(l.target))&&(n==null||n())};return document.addEventListener("click",r),function(){document.removeEventListener("click",r)}},[e,n])};function p(s,e){if(s===e)return!0;if(s.length!==e.length)return!1;for(var n=0;n<s.length;n++)if(!Object.is(s[n],e[n]))return!1;return!0}var x=function(e,n){var r=(0,u.useRef)({deps:n,val:void 0,initialized:!1}),a=r.current;return(!a.initialized||!p(a.deps,n))&&(a.initialized=!0,a.val=e(),a.deps=n),a.val},k=function(e){var n=function(l,o){e.current&&e.current.style.setProperty(l,o)},r=function(l){if(e.current)return getComputedStyle(e.current).getPropertyValue(l).trim()};return[r,n]},S=t(74704),g=t.n(S),M=new WeakMap,m=new IntersectionObserver(function(s){var e=g()(s),n;try{for(e.s();!(n=e.n()).done;){var r=n.value,a=M.get(r.target);a==null||a(r,m)}}catch(l){e.e(l)}finally{e.f()}}),O=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,u.useRef)(null);return(0,u.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return m.observe(n.current),function(){m.unobserve(n.current)}},[]),(0,u.useEffect)(function(){M.set(n.current,e)},[e]),n},I=function(e){var n=(0,u.useRef)(e);return n.current=e,n},P=t(17061),B=t.n(P),v=t(17156),D=t.n(v),V=function(e){var n=(0,u.useRef)(!1);return(0,u.useCallback)(D()(B()().mark(function r(){var a=arguments;return B()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!n.current){o.next=2;break}return o.abrupt("return");case 2:return o.prev=2,n.current=!0,o.next=6,e.apply(void 0,a);case 6:return o.abrupt("return",o.sent);case 7:return o.prev=7,n.current=!1,o.finish(7);case 10:case"end":return o.stop()}},r,null,[[2,,7,10]])})),[e])},W=t(861),z=t.n(W),F=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,u.useState)(new Map(e)),r=i()(n,2),a=r[0],l=r[1],o=(0,u.useRef)(e),h=(0,u.useCallback)(function(d,y){l(function(q){return new Map([].concat(z()(q),[[d,y]]))})},[]),T=(0,u.useCallback)(function(d){l(function(y){return y.delete(d),new Map(y)})},[]),Q=(0,u.useCallback)(function(){l(new Map(o.current))},[]),X=(0,u.useCallback)(function(d){return a.get(d)},[a]),Y=(0,u.useCallback)(function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l(new Map(d))},[]),_=(0,u.useCallback)(function(){l(new Map)},[]);return(0,u.useMemo)(function(){return{value:a,set:h,remove:T,reset:Q,get:X,clear:_,setAll:Y}},[a])},j=function(e){(0,u.useEffect)(function(){e==null||e()},[])},N=t(18698),$=t.n(N);function A(s,e){return new Proxy(s,{get:function(r,a,l){var o=Reflect.get(r,a,l);return $()(o)==="object"?A(o,e):Reflect.get(r,a)},set:function(r,a,l){var o=Reflect.set(r,a,l);return e(),o},deleteProperty:function(r,a){var l=Reflect.deleteProperty(r,a);return e(),l}})}var G=function(e){var n=b(),r=x(function(){return A(e,n)},[]);return r},K=new WeakMap,L=new ResizeObserver(function(s){var e=g()(s),n;try{for(e.s();!(n=e.n()).done;){var r=n.value,a=K.get(r.target);a==null||a(r)}}catch(l){e.e(l)}finally{e.f()}}),H=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,u.useRef)(null);return(0,u.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return L.observe(n.current),function(){L.unobserve(n.current)}},[]),(0,u.useEffect)(function(){K.set(n.current,e)},[e]),n};function Z(s){var e=U(),n=(0,u.useState)(s),r=i()(n,2),a=r[0],l=r[1],o=(0,u.useCallback)(function(h){e.current||l(h)},[]);return[a,o]}var w=function(e){function n(){}return{}},J=function(e){var n=I(e);(0,u.useEffect)(function(){return function(){var r;(r=n.current)===null||r===void 0||r.call(n)}},[])},U=function(){var e=(0,u.useRef)(!1);return(0,u.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},b=function(){var e=(0,u.useState)({}),n=i()(e,2),r=n[1];return(0,u.useCallback)(function(){return r({})},[])}},77715:function(E,c,t){t.r(c),t.d(c,{texts:function(){return i}});var f=t(55077);const i=[{value:"\u4F18\u96C5\u7684\u4F7F\u7528 map \u6570\u636E\u7ED3\u6784",paraId:0,tocIndex:0},{value:`const map = useMap<K, V>(initialValue);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"initialState",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684 Map \u53C2\u6570",paraId:2,tocIndex:5},{value:"Iterable<[K, V]>boolean",paraId:2,tocIndex:5},{value:"[]",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"map",paraId:3,tocIndex:6},{value:"\u5C01\u88C5\u7684 map \u5BF9\u8C61",paraId:3,tocIndex:6},{value:"Map",paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"value",paraId:4,tocIndex:7},{value:"\u539F\u59CB map \u5BF9\u8C61",paraId:4,tocIndex:7},{value:"Map<K, V>",paraId:4,tocIndex:7},{value:"set",paraId:4,tocIndex:7},{value:"\u6DFB\u52A0\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K, value: V) => void",paraId:4,tocIndex:7},{value:"get",paraId:4,tocIndex:7},{value:"\u83B7\u53D6\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K) => V | void",paraId:4,tocIndex:7},{value:"remove",paraId:4,tocIndex:7},{value:"\u79FB\u9664\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K) => void",paraId:4,tocIndex:7},{value:"reset",paraId:4,tocIndex:7},{value:"\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"clear",paraId:4,tocIndex:7},{value:"\u6E05\u9664\u6240\u6709\u6570\u636E",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"setAll",paraId:4,tocIndex:7},{value:"\u751F\u6210\u4E00\u4E2A\u65B0\u7684 Map \u5BF9\u8C61",paraId:4,tocIndex:7},{value:"(newMap: Iterable<[K, V]>) => void",paraId:4,tocIndex:7}]},59429:function(E,c){c.Z=`import { Button, InputNumber, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useMap } from 'use-hooks';

export default () => {
  const map = useMap<number, string>([
    [1, Math.random().toString().substring(0, 5)],
    [2, Math.random().toString().substring(0, 5)],
    [3, Math.random().toString().substring(0, 5)],
  ]);

  const [key, setKey] = useState<number | null>(null);
  const [val, setVal] = useState<string | null>(null);

  const generate = useCallback(() => {
    return [...map.value].map((it) => (
      <Space direction="horizontal" key={it[0]}>
        <div>{it[0]}</div>
        <div>{it[1]}</div>
      </Space>
    ));
  }, [map]);

  return (
    <>
      <Space direction="vertical">
        <InputNumber
          value={key}
          onChange={(value) => {
            setKey(value);
          }}
        />
        <Button>{val || 'null'}</Button>
        <Space>
          <Button
            onClick={() =>
              key && map.set(key, String(Math.random()).substring(0, 5))
            }
          >
            set
          </Button>
          <Button onClick={() => key && map.remove(key)}>delete</Button>
          <Button onClick={() => map.reset()}>reset</Button>
          <Button onClick={() => map.clear()}>clear</Button>
          <Button
            onClick={() => {
              if (key) {
                const val = map.get(key);
                setVal(val || 'undefined');
                return;
              }
            }}
          >
            get
          </Button>
          <Button
            onClick={() => {
              map.setAll([
                [1, 'setAll'],
                [2, 'setAll'],
              ]);
            }}
          >
            setAll
          </Button>
        </Space>
        {generate()}
      </Space>
    </>
  );
};
`}}]);
