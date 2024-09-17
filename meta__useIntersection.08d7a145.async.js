(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[225],{97610:function(s,u,t){"use strict";t.r(u),t.d(u,{demos:function(){return B}});var d={};t.r(d),t.d(d,{Axios:function(){return A},AxiosError:function(){return x},AxiosHeaders:function(){return U},Cancel:function(){return F},CancelToken:function(){return f},CanceledError:function(){return y},HttpStatusCode:function(){return j},VERSION:function(){return T},all:function(){return S},default:function(){return c.Z},formToJSON:function(){return V},getAdapter:function(){return W},isAxiosError:function(){return z},isCancel:function(){return C},mergeConfig:function(){return k},spread:function(){return H},toFormData:function(){return N}});var m=t(17061),r=t.n(m),E=t(17156),h=t.n(E),p=t(67294),g=t.t(p,2),I=t(67274),c=t(54683),A=c.Z.Axios,x=c.Z.AxiosError,y=c.Z.CanceledError,C=c.Z.isCancel,f=c.Z.CancelToken,T=c.Z.VERSION,S=c.Z.all,F=c.Z.Cancel,z=c.Z.isAxiosError,H=c.Z.spread,N=c.Z.toFormData,U=c.Z.AxiosHeaders,j=c.Z.HttpStatusCode,V=c.Z.formToJSON,W=c.Z.getAdapter,k=c.Z.mergeConfig,O=t(23067),B={"src-use-intersection-demo-example":{component:p.memo(p.lazy(function(){return Promise.all([t.e(107),t.e(764),t.e(683),t.e(433)]).then(t.bind(t,93))})),asset:{type:"BLOCK",id:"src-use-intersection-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(42359).Z},axios:{type:"NPM",value:"1.7.7"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u56FE\u7247\u61D2\u52A0\u8F7D",title:"\u57FA\u7840\u7528\u6CD5"},context:{axios:d,react:g,"use-hooks":O},renderOpts:{compile:function(){var L=h()(r()().mark(function G(){var P,$=arguments;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,t.e(335).then(t.bind(t,37335));case 2:return R.abrupt("return",(P=R.sent).default.apply(P,$));case 3:case"end":return R.stop()}},G)}));function w(){return L.apply(this,arguments)}return w}()}}}},23067:function(s,u,t){"use strict";t.r(u),t.d(u,{useBoolean:function(){return E},useClickOutside:function(){return h},useCreation:function(){return g},useCssVar:function(){return I},useIntersection:function(){return C},useLatest:function(){return f},useLockFn:function(){return H},useMap:function(){return j},useMount:function(){return V},useReactive:function(){return B},useResize:function(){return G},useSafeState:function(){return P},useThrottle:function(){return $},useUnMountedRef:function(){return R},useUnmount:function(){return J},useUpdate:function(){return K}});var d=t(27424),m=t.n(d),r=t(67294),E=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=(0,r.useState)(!!e),a=m()(n,2),o=a[0],v=a[1],i=(0,r.useCallback)(function(){return v(function(D){return!D})},[]),b=[{value:o,toggle:i},v];return b},h=function(e,n){(0,r.useEffect)(function(){console.log("\u66F4\u65B0");var a=function(v){var i;e!=null&&e.current&&!(e!=null&&(i=e.current)!==null&&i!==void 0&&i.contains(v.target))&&(n==null||n())};return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}},[e,n])};function p(l,e){if(l===e)return!0;if(l.length!==e.length)return!1;for(var n=0;n<l.length;n++)if(!Object.is(l[n],e[n]))return!1;return!0}var g=function(e,n){var a=(0,r.useRef)({deps:n,val:void 0,initialized:!1}),o=a.current;return(!o.initialized||!p(o.deps,n))&&(o.initialized=!0,o.val=e(),o.deps=n),o.val},I=function(e){var n=function(v,i){e.current&&e.current.style.setProperty(v,i)},a=function(v){if(e.current)return getComputedStyle(e.current).getPropertyValue(v).trim()};return[a,n]},c=t(74704),A=t.n(c),x=new WeakMap,y=new IntersectionObserver(function(l){var e=A()(l),n;try{for(e.s();!(n=e.n()).done;){var a=n.value,o=x.get(a.target);o==null||o(a,y)}}catch(v){e.e(v)}finally{e.f()}}),C=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return y.observe(n.current),function(){y.unobserve(n.current)}},[]),(0,r.useEffect)(function(){x.set(n.current,e)},[e]),n},f=function(e){var n=(0,r.useRef)(e);return n.current=e,n},T=t(17061),S=t.n(T),F=t(17156),z=t.n(F),H=function(e){var n=(0,r.useRef)(!1);return(0,r.useCallback)(z()(S()().mark(function a(){var o=arguments;return S()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!n.current){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,n.current=!0,i.next=6,e.apply(void 0,o);case 6:return i.abrupt("return",i.sent);case 7:return i.prev=7,n.current=!1,i.finish(7);case 10:case"end":return i.stop()}},a,null,[[2,,7,10]])})),[e])},N=t(861),U=t.n(N),j=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,r.useState)(new Map(e)),a=m()(n,2),o=a[0],v=a[1],i=(0,r.useRef)(e),b=(0,r.useCallback)(function(M,Z){v(function(_){return new Map([].concat(U()(_),[[M,Z]]))})},[]),D=(0,r.useCallback)(function(M){v(function(Z){return Z.delete(M),new Map(Z)})},[]),Q=(0,r.useCallback)(function(){v(new Map(i.current))},[]),X=(0,r.useCallback)(function(M){return o.get(M)},[o]),Y=(0,r.useCallback)(function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];v(new Map(M))},[]),q=(0,r.useCallback)(function(){v(new Map)},[]);return(0,r.useMemo)(function(){return{value:o,set:b,remove:D,reset:Q,get:X,clear:q,setAll:Y}},[o])},V=function(e){(0,r.useEffect)(function(){e==null||e()},[])},W=t(18698),k=t.n(W);function O(l,e){return new Proxy(l,{get:function(a,o,v){var i=Reflect.get(a,o,v);return k()(i)==="object"?O(i,e):Reflect.get(a,o)},set:function(a,o,v){var i=Reflect.set(a,o,v);return e(),i},deleteProperty:function(a,o){var v=Reflect.deleteProperty(a,o);return e(),v}})}var B=function(e){var n=K(),a=g(function(){return O(e,n)},[]);return a},L=new WeakMap,w=new ResizeObserver(function(l){var e=A()(l),n;try{for(e.s();!(n=e.n()).done;){var a=n.value,o=L.get(a.target);o==null||o(a)}}catch(v){e.e(v)}finally{e.f()}}),G=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return w.observe(n.current),function(){w.unobserve(n.current)}},[]),(0,r.useEffect)(function(){L.set(n.current,e)},[e]),n};function P(l){var e=R(),n=(0,r.useState)(l),a=m()(n,2),o=a[0],v=a[1],i=(0,r.useCallback)(function(b){e.current||v(b)},[]);return[o,i]}var $=function(e){function n(){}return{}},J=function(e){var n=f(e);(0,r.useEffect)(function(){return function(){var a;(a=n.current)===null||a===void 0||a.call(n)}},[])},R=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},K=function(){var e=(0,r.useState)({}),n=m()(e,2),a=n[1];return(0,r.useCallback)(function(){return a({})},[])}},78516:function(s,u,t){"use strict";t.r(u),t.d(u,{texts:function(){return m}});var d=t(67274);const m=[{value:"\u5C01\u88C5\u4E86 IntersectionObserver \u7684 Hook\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u76D1\u542C\u5143\u7D20\u7684\u53EF\u89C1\u6027\u53D8\u5316\u3002",paraId:0,tocIndex:0},{value:`useLatest(fn: () => void );
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"fn",paraId:2,tocIndex:5},{value:"mount \u65F6\u6267\u884C\u7684\u51FD\u6570",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},34155:function(s){var u=s.exports={},t,d;function m(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?t=setTimeout:t=m}catch(f){t=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=r}catch(f){d=r}})();function E(f){if(t===setTimeout)return setTimeout(f,0);if((t===m||!t)&&setTimeout)return t=setTimeout,setTimeout(f,0);try{return t(f,0)}catch(T){try{return t.call(null,f,0)}catch(S){return t.call(this,f,0)}}}function h(f){if(d===clearTimeout)return clearTimeout(f);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(f);try{return d(f)}catch(T){try{return d.call(null,f)}catch(S){return d.call(this,f)}}}var p=[],g=!1,I,c=-1;function A(){!g||!I||(g=!1,I.length?p=I.concat(p):c=-1,p.length&&x())}function x(){if(!g){var f=E(A);g=!0;for(var T=p.length;T;){for(I=p,p=[];++c<T;)I&&I[c].run();c=-1,T=p.length}I=null,g=!1,h(f)}}u.nextTick=function(f){var T=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)T[S-1]=arguments[S];p.push(new y(f,T)),p.length===1&&!g&&E(x)};function y(f,T){this.fun=f,this.array=T}y.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={};function C(){}u.on=C,u.addListener=C,u.once=C,u.off=C,u.removeListener=C,u.removeAllListeners=C,u.emit=C,u.prependListener=C,u.prependOnceListener=C,u.listeners=function(f){return[]},u.binding=function(f){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(f){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},42359:function(s,u){"use strict";u.Z=`import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useIntersection } from 'use-hooks';
interface IProps {
  src: string;
}
async function fetchPic() {
  const res = await axios.get(
    'https://api.vvhan.com/api/wallpaper/acg?type=json',
  );
  return res.data.url;
}
const LazyLoadImage = ({ src }: IProps) => {
  const imgRef = useIntersection<HTMLImageElement>((entry, observer) => {
    if (entry.isIntersecting) {
      const src = imgRef.current.dataset.src;
      if (src) {
        imgRef.current.src = src;
        observer.unobserve(imgRef.current);
      }
    }
  });

  return (
    <img
      ref={imgRef}
      data-src={src}
      className="lazy"
      style={{ width: '45%', height: '40%' }}
    />
  );
};
const Demo = () => {
  const [pic, setPic] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const execArr: any = [];
      for (let i = 0; i < 16; i++) {
        execArr.push(fetchPic());
      }
      const res = await Promise.all(execArr);
      setPic(res);
    })();
  }, []);
  return (
    <div
      style={{
        height: '600px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        rowGap: '10px',
        overflow: 'auto',
      }}
    >
      {pic.map((item) => (
        <LazyLoadImage key={item} src={item} />
      ))}
    </div>
  );
};
export default Demo;
`},63405:function(s,u,t){var d=t(73897);function m(r){if(Array.isArray(r))return d(r)}s.exports=m,s.exports.__esModule=!0,s.exports.default=s.exports},74704:function(s,u,t){var d=t(86116);function m(r,E){var h=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!h){if(Array.isArray(r)||(h=d(r))||E&&r&&typeof r.length=="number"){h&&(r=h);var p=0,g=function(){};return{s:g,n:function(){return p>=r.length?{done:!0}:{done:!1,value:r[p++]}},e:function(y){throw y},f:g}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I=!0,c=!1,A;return{s:function(){h=h.call(r)},n:function(){var y=h.next();return I=y.done,y},e:function(y){c=!0,A=y},f:function(){try{!I&&h.return!=null&&h.return()}finally{if(c)throw A}}}}s.exports=m,s.exports.__esModule=!0,s.exports.default=s.exports},79498:function(s){function u(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},42281:function(s){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},861:function(s,u,t){var d=t(63405),m=t(79498),r=t(86116),E=t(42281);function h(p){return d(p)||m(p)||r(p)||E()}s.exports=h,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
