(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[41],{24503:function(o,f,n){"use strict";var p;n.r(f),n.d(f,{demos:function(){return h}});var r=n(17061),i=n.n(r),M=n(17156),d=n.n(M),v=n(67294),E=n(55077),y=n(22280),x=n(96180),h={"src-use-map-demo-example":{component:v.memo(v.lazy(function(){return Promise.all([n.e(107),n.e(764),n.e(683),n.e(433)]).then(n.bind(n,81135))})),asset:{type:"BLOCK",id:"src-use-map-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(59429).Z},antd:{type:"NPM",value:"5.20.6"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u4F7F\u7528\u65B9\u6CD5\u64CD\u4F5Cmap",title:"\u57FA\u7840\u7528\u6CD5"},context:{antd:y,react:p||(p=n.t(v,2)),"use-hooks":x},renderOpts:{compile:function(){var I=d()(i()().mark(function R(){var S,b=arguments;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return g.abrupt("return",(S=g.sent).default.apply(S,b));case 3:case"end":return g.stop()}},R)}));function m(){return I.apply(this,arguments)}return m}()}}}},96180:function(o,f,n){"use strict";n.r(f),n.d(f,{useBoolean:function(){return p.useBoolean},useClickOutside:function(){return i},useCreation:function(){return d},useCssVar:function(){return v},useIntersection:function(){return I},useLatest:function(){return m},useLockFn:function(){return g},useMap:function(){return V},useMount:function(){return z},useReactive:function(){return H},useResize:function(){return N},useSafeState:function(){return $},useUnMountedRef:function(){return L},useUnmount:function(){return w},useUpdate:function(){return D}});var p=n(86908),r=n(67294),i=function(e,t){(0,r.useEffect)(function(){var a=function(c){var s;e!=null&&e.current&&!(e!=null&&(s=e.current)!==null&&s!==void 0&&s.contains(c.target))&&(t==null||t())};return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}},[e,t])};function M(l,e){if(l===e)return!0;if(l.length!==e.length)return!1;for(var t=0;t<l.length;t++)if(!Object.is(l[t],e[t]))return!1;return!0}var d=function(e,t){var a=(0,r.useRef)({deps:t,val:void 0,initialized:!1}),u=a.current;return(!u.initialized||!M(u.deps,t))&&(u.initialized=!0,u.val=e(),u.deps=t),u.val},v=function(e){var t=function(c,s){e.current&&e.current.style.setProperty(c,s)},a=function(c){if(e.current)return getComputedStyle(e.current).getPropertyValue(c).trim()};return[a,t]},E=n(74704),y=n.n(E),x=new WeakMap,h=new IntersectionObserver(function(l){var e=y()(l),t;try{for(e.s();!(t=e.n()).done;){var a=t.value,u=x.get(a.target);u==null||u(a,h)}}catch(c){e.e(c)}finally{e.f()}}),I=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return h.observe(t.current),function(){h.unobserve(t.current)}},[]),(0,r.useEffect)(function(){x.set(t.current,e)},[e]),t},m=function(e){var t=(0,r.useRef)(e);return t.current=e,t},R=n(17061),S=n.n(R),b=n(17156),P=n.n(b),g=function(e){var t=(0,r.useRef)(!1);return(0,r.useCallback)(P()(S()().mark(function a(){var u=arguments;return S()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!t.current){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,t.current=!0,s.next=6,e.apply(void 0,u);case 6:return s.abrupt("return",s.sent);case 7:return s.prev=7,t.current=!1,s.finish(7);case 10:case"end":return s.stop()}},a,null,[[2,,7,10]])})),[e])},K=n(861),U=n.n(K),W=n(27424),k=n.n(W),V=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=(0,r.useState)(new Map(e)),a=k()(t,2),u=a[0],c=a[1],s=(0,r.useRef)(e),O=(0,r.useCallback)(function(C,A){c(function(Y){return new Map([].concat(U()(Y),[[C,A]]))})},[]),G=(0,r.useCallback)(function(C){c(function(A){return A.delete(C),new Map(A)})},[]),Z=(0,r.useCallback)(function(){c(new Map(s.current))},[]),J=(0,r.useCallback)(function(C){return u.get(C)},[u]),Q=(0,r.useCallback)(function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];c(new Map(C))},[]),X=(0,r.useCallback)(function(){c(new Map)},[]);return(0,r.useMemo)(function(){return{value:u,set:O,remove:G,reset:Z,get:J,clear:X,setAll:Q}},[u])},z=function(e){(0,r.useEffect)(function(){e==null||e()},[])},j=n(18698),F=n.n(j);function T(l,e){return new Proxy(l,{get:function(a,u,c){var s=Reflect.get(a,u,c);return F()(s)==="object"?T(s,e):Reflect.get(a,u)},set:function(a,u,c){var s=Reflect.set(a,u,c);return e(),s},deleteProperty:function(a,u){var c=Reflect.deleteProperty(a,u);return e(),c}})}var H=function(e){var t=D(),a=d(function(){return T(e,t)},[]);return a},B=new WeakMap,_=new ResizeObserver(function(l){var e=y()(l),t;try{for(e.s();!(t=e.n()).done;){var a=t.value,u=B.get(a.target);u==null||u(a)}}catch(c){e.e(c)}finally{e.f()}}),N=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return _.observe(t.current),function(){_.unobserve(t.current)}},[]),(0,r.useEffect)(function(){B.set(t.current,e)},[e]),t};function $(l){var e=L(),t=(0,r.useState)(l),a=k()(t,2),u=a[0],c=a[1],s=(0,r.useCallback)(function(O){e.current||c(O)},[]);return[u,s]}var w=function(e){var t=m(e);(0,r.useEffect)(function(){return function(){var a;(a=t.current)===null||a===void 0||a.call(t)}},[])},L=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},D=function(){var e=(0,r.useState)({}),t=k()(e,2),a=t[1];return(0,r.useCallback)(function(){return a({})},[])}},86908:function(o,f,n){"use strict";n.r(f),n.d(f,{useBoolean:function(){return M}});var p=n(27424),r=n.n(p),i=n(67294),M=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,E=(0,i.useState)(!!v),y=r()(E,2),x=y[0],h=y[1],I=(0,i.useCallback)(function(){return h(function(R){return!R})},[]),m=[{value:x,toggle:I},h];return m}},77715:function(o,f,n){"use strict";n.r(f),n.d(f,{texts:function(){return r}});var p=n(55077);const r=[{value:"\u4F18\u96C5\u7684\u4F7F\u7528 map \u6570\u636E\u7ED3\u6784",paraId:0,tocIndex:0},{value:`const map = useMap<K, V>(initialValue);
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"initialState",paraId:2,tocIndex:5},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684 Map \u53C2\u6570",paraId:2,tocIndex:5},{value:"Iterable<[K, V]>boolean",paraId:2,tocIndex:5},{value:"[]",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"map",paraId:3,tocIndex:6},{value:"\u5C01\u88C5\u7684 map \u5BF9\u8C61",paraId:3,tocIndex:6},{value:"Map",paraId:3,tocIndex:6},{value:"\u53C2\u6570",paraId:4,tocIndex:7},{value:"\u8BF4\u660E",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"value",paraId:4,tocIndex:7},{value:"\u539F\u59CB map \u5BF9\u8C61",paraId:4,tocIndex:7},{value:"Map<K, V>",paraId:4,tocIndex:7},{value:"set",paraId:4,tocIndex:7},{value:"\u6DFB\u52A0\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K, value: V) => void",paraId:4,tocIndex:7},{value:"get",paraId:4,tocIndex:7},{value:"\u83B7\u53D6\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K) => V | void",paraId:4,tocIndex:7},{value:"remove",paraId:4,tocIndex:7},{value:"\u79FB\u9664\u5143\u7D20",paraId:4,tocIndex:7},{value:"(key: K) => void",paraId:4,tocIndex:7},{value:"reset",paraId:4,tocIndex:7},{value:"\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"clear",paraId:4,tocIndex:7},{value:"\u6E05\u9664\u6240\u6709\u6570\u636E",paraId:4,tocIndex:7},{value:"() => void",paraId:4,tocIndex:7},{value:"setAll",paraId:4,tocIndex:7},{value:"\u751F\u6210\u4E00\u4E2A\u65B0\u7684 Map \u5BF9\u8C61",paraId:4,tocIndex:7},{value:"(newMap: Iterable<[K, V]>) => void",paraId:4,tocIndex:7}]},59429:function(o,f){"use strict";f.Z=`import { Button, InputNumber, Space } from 'antd';
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
`},63405:function(o,f,n){var p=n(73897);function r(i){if(Array.isArray(i))return p(i)}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},74704:function(o,f,n){var p=n(86116);function r(i,M){var d=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!d){if(Array.isArray(i)||(d=p(i))||M&&i&&typeof i.length=="number"){d&&(i=d);var v=0,E=function(){};return{s:E,n:function(){return v>=i.length?{done:!0}:{done:!1,value:i[v++]}},e:function(m){throw m},f:E}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=!0,x=!1,h;return{s:function(){d=d.call(i)},n:function(){var m=d.next();return y=m.done,m},e:function(m){x=!0,h=m},f:function(){try{!y&&d.return!=null&&d.return()}finally{if(x)throw h}}}}o.exports=r,o.exports.__esModule=!0,o.exports.default=o.exports},79498:function(o){function f(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}o.exports=f,o.exports.__esModule=!0,o.exports.default=o.exports},42281:function(o){function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=f,o.exports.__esModule=!0,o.exports.default=o.exports},861:function(o,f,n){var p=n(63405),r=n(79498),i=n(86116),M=n(42281);function d(v){return p(v)||r(v)||i(v)||M()}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
