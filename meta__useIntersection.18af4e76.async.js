(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[225],{97610:function(s,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return B}});var d={};e.r(d),e.d(d,{Axios:function(){return A},AxiosError:function(){return x},AxiosHeaders:function(){return U},Cancel:function(){return z},CancelToken:function(){return f},CanceledError:function(){return h},HttpStatusCode:function(){return j},VERSION:function(){return I},all:function(){return S},default:function(){return c.Z},formToJSON:function(){return V},getAdapter:function(){return W},isAxiosError:function(){return H},isCancel:function(){return C},mergeConfig:function(){return k},spread:function(){return F},toFormData:function(){return N}});var m=e(17061),r=e.n(m),E=e(17156),y=e.n(E),p=e(67294),g=e.t(p,2),T=e(67274),c=e(54683),A=c.Z.Axios,x=c.Z.AxiosError,h=c.Z.CanceledError,C=c.Z.isCancel,f=c.Z.CancelToken,I=c.Z.VERSION,S=c.Z.all,z=c.Z.Cancel,H=c.Z.isAxiosError,F=c.Z.spread,N=c.Z.toFormData,U=c.Z.AxiosHeaders,j=c.Z.HttpStatusCode,V=c.Z.formToJSON,W=c.Z.getAdapter,k=c.Z.mergeConfig,O=e(75831),B={"src-use-intersection-demo-example":{component:p.memo(p.lazy(function(){return Promise.all([e.e(107),e.e(764),e.e(683),e.e(433)]).then(e.bind(e,93))})),asset:{type:"BLOCK",id:"src-use-intersection-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42359).Z},axios:{type:"NPM",value:"1.7.7"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u56FE\u7247\u61D2\u52A0\u8F7D",title:"\u57FA\u7840\u7528\u6CD5"},context:{axios:d,react:g,"use-hooks":O},renderOpts:{compile:function(){var L=y()(r()().mark(function G(){var P,$=arguments;return r()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(335).then(e.bind(e,37335));case 2:return R.abrupt("return",(P=R.sent).default.apply(P,$));case 3:case"end":return R.stop()}},G)}));function w(){return L.apply(this,arguments)}return w}()}}}},75831:function(s,u,e){"use strict";e.r(u),e.d(u,{useBoolean:function(){return E},useClickOutside:function(){return y},useCreation:function(){return g},useCssVar:function(){return T},useIntersection:function(){return C},useLatest:function(){return f},useLockFn:function(){return F},useMap:function(){return j},useMount:function(){return V},useReactive:function(){return B},useResize:function(){return G},useSafeState:function(){return P},useUnMountedRef:function(){return D},useUnmount:function(){return $},useUpdate:function(){return R}});var d=e(27424),m=e.n(d),r=e(67294),E=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=(0,r.useState)(!!t),a=m()(n,2),o=a[0],l=a[1],i=(0,r.useCallback)(function(){return l(function(J){return!J})},[]),b=[{value:o,toggle:i},l];return b},y=function(t,n){(0,r.useEffect)(function(){var a=function(l){var i;t!=null&&t.current&&!(t!=null&&(i=t.current)!==null&&i!==void 0&&i.contains(l.target))&&(n==null||n())};return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}},[t,n])};function p(v,t){if(v===t)return!0;if(v.length!==t.length)return!1;for(var n=0;n<v.length;n++)if(!Object.is(v[n],t[n]))return!1;return!0}var g=function(t,n){var a=(0,r.useRef)({deps:n,val:void 0,initialized:!1}),o=a.current;return(!o.initialized||!p(o.deps,n))&&(o.initialized=!0,o.val=t(),o.deps=n),o.val},T=function(t){var n=function(l,i){t.current&&t.current.style.setProperty(l,i)},a=function(l){if(t.current)return getComputedStyle(t.current).getPropertyValue(l).trim()};return[a,n]},c=e(74704),A=e.n(c),x=new WeakMap,h=new IntersectionObserver(function(v){var t=A()(v),n;try{for(t.s();!(n=t.n()).done;){var a=n.value,o=x.get(a.target);o==null||o(a,h)}}catch(l){t.e(l)}finally{t.f()}}),C=function(t){if(typeof t!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return h.observe(n.current),function(){h.unobserve(n.current)}},[]),(0,r.useEffect)(function(){x.set(n.current,t)},[t]),n},f=function(t){var n=(0,r.useRef)(t);return n.current=t,n},I=e(17061),S=e.n(I),z=e(17156),H=e.n(z),F=function(t){var n=(0,r.useRef)(!1);return(0,r.useCallback)(H()(S()().mark(function a(){var o=arguments;return S()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!n.current){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,n.current=!0,i.next=6,t.apply(void 0,o);case 6:return i.abrupt("return",i.sent);case 7:return i.prev=7,n.current=!1,i.finish(7);case 10:case"end":return i.stop()}},a,null,[[2,,7,10]])})),[t])},N=e(861),U=e.n(N),j=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=(0,r.useState)(new Map(t)),a=m()(n,2),o=a[0],l=a[1],i=(0,r.useRef)(t),b=(0,r.useCallback)(function(M,Z){l(function(q){return new Map([].concat(U()(q),[[M,Z]]))})},[]),J=(0,r.useCallback)(function(M){l(function(Z){return Z.delete(M),new Map(Z)})},[]),K=(0,r.useCallback)(function(){l(new Map(i.current))},[]),Q=(0,r.useCallback)(function(M){return o.get(M)},[o]),X=(0,r.useCallback)(function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l(new Map(M))},[]),Y=(0,r.useCallback)(function(){l(new Map)},[]);return(0,r.useMemo)(function(){return{value:o,set:b,remove:J,reset:K,get:Q,clear:Y,setAll:X}},[o])},V=function(t){(0,r.useEffect)(function(){t==null||t()},[])},W=e(18698),k=e.n(W);function O(v,t){return new Proxy(v,{get:function(a,o,l){var i=Reflect.get(a,o,l);return k()(i)==="object"?O(i,t):Reflect.get(a,o)},set:function(a,o,l){var i=Reflect.set(a,o,l);return t(),i},deleteProperty:function(a,o){var l=Reflect.deleteProperty(a,o);return t(),l}})}var B=function(t){var n=R(),a=g(function(){return O(t,n)},[]);return a},L=new WeakMap,w=new ResizeObserver(function(v){var t=A()(v),n;try{for(t.s();!(n=t.n()).done;){var a=n.value,o=L.get(a.target);o==null||o(a)}}catch(l){t.e(l)}finally{t.f()}}),G=function(t){if(typeof t!="function")throw new TypeError("The parameter should be a callback function");var n=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!n.current)throw new TypeError('"The parameter 1 should be of type Element');return w.observe(n.current),function(){w.unobserve(n.current)}},[]),(0,r.useEffect)(function(){L.set(n.current,t)},[t]),n};function P(v){var t=D(),n=(0,r.useState)(v),a=m()(n,2),o=a[0],l=a[1],i=(0,r.useCallback)(function(b){t.current||l(b)},[]);return[o,i]}var $=function(t){var n=f(t);(0,r.useEffect)(function(){return function(){var a;(a=n.current)===null||a===void 0||a.call(n)}},[])},D=function(){var t=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return t.current=!1,function(){t.current=!0}},[]),t},R=function(){var t=(0,r.useState)({}),n=m()(t,2),a=n[1];return(0,r.useCallback)(function(){return a({})},[])}},78516:function(s,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return m}});var d=e(67274);const m=[{value:"\u5C01\u88C5\u4E86 IntersectionObserver \u7684 Hook\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u76D1\u542C\u5143\u7D20\u7684\u53EF\u89C1\u6027\u53D8\u5316\u3002",paraId:0,tocIndex:0},{value:`useLatest(fn: () => void );
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"fn",paraId:2,tocIndex:5},{value:"mount \u65F6\u6267\u884C\u7684\u51FD\u6570",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},34155:function(s){var u=s.exports={},e,d;function m(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=m}catch(f){e=m}try{typeof clearTimeout=="function"?d=clearTimeout:d=r}catch(f){d=r}})();function E(f){if(e===setTimeout)return setTimeout(f,0);if((e===m||!e)&&setTimeout)return e=setTimeout,setTimeout(f,0);try{return e(f,0)}catch(I){try{return e.call(null,f,0)}catch(S){return e.call(this,f,0)}}}function y(f){if(d===clearTimeout)return clearTimeout(f);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(f);try{return d(f)}catch(I){try{return d.call(null,f)}catch(S){return d.call(this,f)}}}var p=[],g=!1,T,c=-1;function A(){!g||!T||(g=!1,T.length?p=T.concat(p):c=-1,p.length&&x())}function x(){if(!g){var f=E(A);g=!0;for(var I=p.length;I;){for(T=p,p=[];++c<I;)T&&T[c].run();c=-1,I=p.length}T=null,g=!1,y(f)}}u.nextTick=function(f){var I=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)I[S-1]=arguments[S];p.push(new h(f,I)),p.length===1&&!g&&E(x)};function h(f,I){this.fun=f,this.array=I}h.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={};function C(){}u.on=C,u.addListener=C,u.once=C,u.off=C,u.removeListener=C,u.removeAllListeners=C,u.emit=C,u.prependListener=C,u.prependOnceListener=C,u.listeners=function(f){return[]},u.binding=function(f){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(f){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},42359:function(s,u){"use strict";u.Z=`import axios from 'axios';
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
`},63405:function(s,u,e){var d=e(73897);function m(r){if(Array.isArray(r))return d(r)}s.exports=m,s.exports.__esModule=!0,s.exports.default=s.exports},74704:function(s,u,e){var d=e(86116);function m(r,E){var y=typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!y){if(Array.isArray(r)||(y=d(r))||E&&r&&typeof r.length=="number"){y&&(r=y);var p=0,g=function(){};return{s:g,n:function(){return p>=r.length?{done:!0}:{done:!1,value:r[p++]}},e:function(h){throw h},f:g}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T=!0,c=!1,A;return{s:function(){y=y.call(r)},n:function(){var h=y.next();return T=h.done,h},e:function(h){c=!0,A=h},f:function(){try{!T&&y.return!=null&&y.return()}finally{if(c)throw A}}}}s.exports=m,s.exports.__esModule=!0,s.exports.default=s.exports},79498:function(s){function u(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},42281:function(s){function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},861:function(s,u,e){var d=e(63405),m=e(79498),r=e(86116),E=e(42281);function y(p){return d(p)||m(p)||r(p)||E()}s.exports=y,s.exports.__esModule=!0,s.exports.default=s.exports}}]);
