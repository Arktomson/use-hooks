(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[41],{24503:function(f,n,e){"use strict";var o;e.r(n),e.d(n,{demos:function(){return c}});var a=e(17061),s=e.n(a),t=e(17156),r=e.n(t),_=e(67294),d=e(55077),u=e(22280),l=e(31081),i=e.n(l),c={"src-use-map-demo-example":{component:_.memo(_.lazy(function(){return Promise.all([e.e(107),e.e(764),e.e(683),e.e(433)]).then(e.bind(e,81135))})),asset:{type:"BLOCK",id:"src-use-map-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59429).Z},antd:{type:"NPM",value:"5.20.6"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u4F7F\u7528\u65B9\u6CD5\u64CD\u4F5Cmap",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:u,react:o||(o=e.t(_,2)),"use-hooks":l},renderOpts:{compile:function(){var m=r()(s()().mark(function I(){var M,P=arguments;return s()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(764),e.e(335)]).then(e.bind(e,37335));case 2:return E.abrupt("return",(M=E.sent).default.apply(M,P));case 3:case"end":return E.stop()}},I)}));function v(){return m.apply(this,arguments)}return v}()}}}},31081:function(f,n,e){var o=e(17247);o.keys().forEach(function(a){a!=="./index.ts"&&Object.keys(o(a)).forEach(function(s){s!=="default"&&(n[s]=o(a)[s])})})},86908:function(f,n,e){"use strict";e.r(n),e.d(n,{useBoolean:function(){return t}});var o=e(27424),a=e.n(o),s=e(67294),t=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,d=(0,s.useState)(!!_),u=a()(d,2),l=u[0],i=u[1],c=(0,s.useCallback)(function(){return i(function(v){return!v})},[]),m=[{value:l,toggle:c},i];return m}},55846:function(f,n,e){"use strict";e.r(n),e.d(n,{useClickOutside:function(){return a}});var o=e(67294),a=function(t,r){(0,o.useEffect)(function(){console.log("\u66F4\u65B0");var _=function(u){var l;t!=null&&t.current&&!(t!=null&&(l=t.current)!==null&&l!==void 0&&l.contains(u.target))&&(r==null||r())};return document.addEventListener("click",_),function(){document.removeEventListener("click",_)}},[t,r])}},47743:function(f,n,e){"use strict";e.r(n),e.d(n,{useCreation:function(){return s}});var o=e(67294);function a(t,r){if(t===r)return!0;if(t.length!==r.length)return!1;for(var _=0;_<t.length;_++)if(!Object.is(t[_],r[_]))return!1;return!0}var s=function(r,_){var d=(0,o.useRef)({deps:_,val:void 0,initialized:!1}),u=d.current;return(!u.initialized||!a(u.deps,_))&&(u.initialized=!0,u.val=r(),u.deps=_),u.val}},91775:function(f,n,e){"use strict";e.r(n),e.d(n,{useCssVar:function(){return o}});var o=function(s){var t=function(d,u){s.current&&s.current.style.setProperty(d,u)},r=function(d){if(s.current)return getComputedStyle(s.current).getPropertyValue(d).trim()};return[r,t]}},65749:function(f,n,e){"use strict";e.r(n),e.d(n,{useIntersection:function(){return _}});var o=e(74704),a=e.n(o),s=e(67294),t=new WeakMap,r=new IntersectionObserver(function(d){var u=a()(d),l;try{for(u.s();!(l=u.n()).done;){var i=l.value,c=t.get(i.target);c==null||c(i,r)}}catch(m){u.e(m)}finally{u.f()}}),_=function(u){if(typeof u!="function")throw new TypeError("The parameter should be a callback function");var l=(0,s.useRef)(null);return(0,s.useEffect)(function(){if(!l.current)throw new TypeError('"The parameter 1 should be of type Element');return r.observe(l.current),function(){r.unobserve(l.current)}},[]),(0,s.useEffect)(function(){t.set(l.current,u)},[u]),l}},91121:function(f,n,e){"use strict";e.r(n),e.d(n,{useLatest:function(){return a}});var o=e(67294),a=function(t){var r=(0,o.useRef)(t);return r.current=t,r}},8356:function(f,n,e){"use strict";e.r(n),e.d(n,{useLockFn:function(){return _}});var o=e(17061),a=e.n(o),s=e(17156),t=e.n(s),r=e(67294),_=function(u){var l=(0,r.useRef)(!1);return(0,r.useCallback)(t()(a()().mark(function i(){var c=arguments;return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!l.current){v.next=2;break}return v.abrupt("return");case 2:return v.prev=2,l.current=!0,v.next=6,u.apply(void 0,c);case 6:return v.abrupt("return",v.sent);case 7:return v.prev=7,l.current=!1,v.finish(7);case 10:case"end":return v.stop()}},i,null,[[2,,7,10]])})),[u])}},25343:function(f,n,e){"use strict";e.r(n),e.d(n,{useMap:function(){return _}});var o=e(861),a=e.n(o),s=e(27424),t=e.n(s),r=e(67294),_=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=(0,r.useState)(new Map(u)),i=t()(l,2),c=i[0],m=i[1],v=(0,r.useRef)(u),I=(0,r.useCallback)(function(h,O){m(function(p){return new Map([].concat(a()(p),[[h,O]]))})},[]),M=(0,r.useCallback)(function(h){m(function(O){return O.delete(h),new Map(O)})},[]),P=(0,r.useCallback)(function(){m(new Map(v.current))},[]),D=(0,r.useCallback)(function(h){return c.get(h)},[c]),E=(0,r.useCallback)(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];m(new Map(h))},[]),C=(0,r.useCallback)(function(){m(new Map)},[]);return(0,r.useMemo)(function(){return{value:c,set:I,remove:M,reset:P,get:D,clear:C,setAll:E}},[c])}},32908:function(f,n,e){"use strict";e.r(n),e.d(n,{useMount:function(){return a}});var o=e(67294),a=function(t){(0,o.useEffect)(function(){t==null||t()},[])}},67593:function(f,n,e){"use strict";e.r(n),e.d(n,{useReactive:function(){return _}});var o=e(18698),a=e.n(o),s=e(31081),t=e.n(s);function r(d,u){return new Proxy(d,{get:function(i,c,m){var v=Reflect.get(i,c,m);return a()(v)==="object"?r(v,u):Reflect.get(i,c)},set:function(i,c,m){var v=Reflect.set(i,c,m);return u(),v},deleteProperty:function(i,c){var m=Reflect.deleteProperty(i,c);return u(),m}})}var _=function(u){var l=(0,s.useUpdate)(),i=(0,s.useCreation)(function(){return r(u,l)},[]);return i}},60773:function(f,n,e){"use strict";e.r(n),e.d(n,{a:function(){return o}});var o=10},70326:function(f,n,e){"use strict";e.r(n),e.d(n,{useResize:function(){return _}});var o=e(74704),a=e.n(o),s=e(67294),t=new WeakMap,r=new ResizeObserver(function(d){var u=a()(d),l;try{for(u.s();!(l=u.n()).done;){var i=l.value,c=t.get(i.target);c==null||c(i)}}catch(m){u.e(m)}finally{u.f()}}),_=function(u){if(typeof u!="function")throw new TypeError("The parameter should be a callback function");var l=(0,s.useRef)(null);return(0,s.useEffect)(function(){if(!l.current)throw new TypeError('"The parameter 1 should be of type Element');return r.observe(l.current),function(){r.unobserve(l.current)}},[]),(0,s.useEffect)(function(){t.set(l.current,u)},[u]),l}},2500:function(f,n,e){"use strict";e.r(n),e.d(n,{useSafeState:function(){return _}});var o=e(27424),a=e.n(o),s=e(67294),t=e(31081),r=e.n(t);function _(d){var u=(0,t.useUnMountedRef)(),l=(0,s.useState)(d),i=a()(l,2),c=i[0],m=i[1],v=(0,s.useCallback)(function(I){u.current||m(I)},[]);return[c,v]}},59373:function(f,n,e){"use strict";e.r(n),e.d(n,{useThrottle:function(){return o}});var o=function(s){function t(){}return{}}},92169:function(f,n,e){"use strict";e.r(n),e.d(n,{useTitle:function(){return o}});var o=function(){}},1963:function(f,n,e){"use strict";e.r(n),e.d(n,{useUnmount:function(){return t}});var o=e(67294),a=e(31081),s=e.n(a),t=function(_){var d=(0,a.useLatest)(_);(0,o.useEffect)(function(){return function(){var u;(u=d.current)===null||u===void 0||u.call(d)}},[])}},43214:function(f,n,e){"use strict";e.r(n),e.d(n,{useUnMountedRef:function(){return a}});var o=e(67294),a=function(){var t=(0,o.useRef)(!1);return(0,o.useEffect)(function(){return t.current=!1,function(){t.current=!0}},[]),t}},41087:function(f,n,e){"use strict";e.r(n),e.d(n,{useUpdate:function(){return t}});var o=e(27424),a=e.n(o),s=e(67294),t=function(){var _=(0,s.useState)({}),d=a()(_,2),u=d[1];return(0,s.useCallback)(function(){return u({})},[])}},77715:function(f,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return a}});var o=e(55077);const a=[{value:"\u4F18\u96C5\u7684\u4F7F\u7528 map \u6570\u636E\u7ED3\u6784",paraId:0,tocIndex:0},{value:`const map = useMap<K, V>(initialValue);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"initialState",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684 Map \u53C2\u6570",paraId:2,tocIndex:5},{value:"Iterable<[K, V]>boolean",paraId:2,tocIndex:5},{value:"[]",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"map",paraId:3,tocIndex:6},{value:"\u5C01\u88C5\u7684 map \u5BF9\u8C61",paraId:3,tocIndex:6},{value:"Map",paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"value",paraId:4,tocIndex:7},{value:"\u539F\u59CB map \u5BF9\u8C61",paraId:4,tocIndex:7},{value:"Map<K, V>",paraId:4,tocIndex:7},{value:"set",paraId:4,tocIndex:7},{value:"\u6DFB\u52A0\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K, value: V) => void",paraId:4,tocIndex:7},{value:"get",paraId:4,tocIndex:7},{value:"\u83B7\u53D6\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K) => V | void",paraId:4,tocIndex:7},{value:"remove",paraId:4,tocIndex:7},{value:"\u79FB\u9664\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K) => void",paraId:4,tocIndex:7},{value:"reset",paraId:4,tocIndex:7},{value:"\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"clear",paraId:4,tocIndex:7},{value:"\u6E05\u9664\u6240\u6709\u6570\u636E",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"setAll",paraId:4,tocIndex:7},{value:"\u751F\u6210\u4E00\u4E2A\u65B0\u7684 Map \u5BF9\u8C61",paraId:4,tocIndex:7},{value:"(newMap: Iterable<[K, V]>) => void",paraId:4,tocIndex:7}]},59429:function(f,n){"use strict";n.Z=`import { Button, InputNumber, Space } from 'antd';
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
`},17247:function(f,n,e){var o={"./index.ts":31081,"./useBoolean/index.ts":86908,"./useClickOutside/index.ts":55846,"./useCreation/index.ts":47743,"./useCssVar/index.ts":91775,"./useIntersection/index.ts":65749,"./useLatest/index.ts":91121,"./useLockFn/index.ts":8356,"./useMap/index.ts":25343,"./useMount/index.ts":32908,"./useReactive/index.ts":67593,"./useRequest/index.ts":60773,"./useResize/index.ts":70326,"./useSafeState/index.ts":2500,"./useThrottle/index.ts":59373,"./useTitle/index.ts":92169,"./useUnMount/index.ts":1963,"./useUnMountedRef/index.ts":43214,"./useUpdate/index.ts":41087};function a(t){var r=s(t);return e(r)}function s(t){if(!e.o(o,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=s,f.exports=a,a.id=17247}}]);
