(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[225],{97610:function(M,u,n){"use strict";n.r(u),n.d(u,{demos:function(){return b}});var v={};n.r(v),n.d(v,{Axios:function(){return C},AxiosError:function(){return x},AxiosHeaders:function(){return O},Cancel:function(){return z},CancelToken:function(){return i},CanceledError:function(){return I},HttpStatusCode:function(){return D},VERSION:function(){return h},all:function(){return T},default:function(){return s.Z},formToJSON:function(){return H},getAdapter:function(){return j},isAxiosError:function(){return B},isCancel:function(){return m},mergeConfig:function(){return V},spread:function(){return F},toFormData:function(){return N}});var r=n(17061),y=n.n(r),R=n(17156),A=n.n(R),d=n(67294),g=n.t(d,2),p=n(67274),s=n(54683),C=s.Z.Axios,x=s.Z.AxiosError,I=s.Z.CanceledError,m=s.Z.isCancel,i=s.Z.CancelToken,h=s.Z.VERSION,T=s.Z.all,z=s.Z.Cancel,B=s.Z.isAxiosError,F=s.Z.spread,N=s.Z.toFormData,O=s.Z.AxiosHeaders,D=s.Z.HttpStatusCode,H=s.Z.formToJSON,j=s.Z.getAdapter,V=s.Z.mergeConfig,L=n(96180),b={"src-use-intersection-demo-example":{component:d.memo(d.lazy(function(){return Promise.all([n.e(107),n.e(764),n.e(683),n.e(433)]).then(n.bind(n,93))})),asset:{type:"BLOCK",id:"src-use-intersection-demo-example",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(42359).Z},axios:{type:"NPM",value:"1.7.7"},react:{type:"NPM",value:"18.3.1"},"use-hooks":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"\u56FE\u7247\u61D2\u52A0\u8F7D",title:"\u57FA\u7840\u7528\u6CD5"},context:{axios:v,react:g,"use-hooks":L},renderOpts:{compile:function(){var P=A()(y()().mark(function W(){var U,k=arguments;return y()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,n.e(335).then(n.bind(n,37335));case 2:return E.abrupt("return",(U=E.sent).default.apply(U,k));case 3:case"end":return E.stop()}},W)}));function Z(){return P.apply(this,arguments)}return Z}()}}}},96180:function(M,u,n){"use strict";n.r(u),n.d(u,{useBoolean:function(){return v.useBoolean},useClickOutside:function(){return y},useCreation:function(){return A},useCssVar:function(){return d},useIntersection:function(){return x},useLatest:function(){return I},useLockFn:function(){return z},useMap:function(){return D},useMount:function(){return H},useReactive:function(){return b},useResize:function(){return W},useSafeState:function(){return U},useUnMountedRef:function(){return G},useUnmount:function(){return k},useUpdate:function(){return E}});var v=n(86908),r=n(67294),y=function(e,t){(0,r.useEffect)(function(){var a=function(l){var c;e!=null&&e.current&&!(e!=null&&(c=e.current)!==null&&c!==void 0&&c.contains(l.target))&&(t==null||t())};return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}},[e,t])};function R(f,e){if(f===e)return!0;if(f.length!==e.length)return!1;for(var t=0;t<f.length;t++)if(!Object.is(f[t],e[t]))return!1;return!0}var A=function(e,t){var a=(0,r.useRef)({deps:t,val:void 0,initialized:!1}),o=a.current;return(!o.initialized||!R(o.deps,t))&&(o.initialized=!0,o.val=e(),o.deps=t),o.val},d=function(e){var t=function(l,c){e.current&&e.current.style.setProperty(l,c)},a=function(l){if(e.current)return getComputedStyle(e.current).getPropertyValue(l).trim()};return[a,t]},g=n(74704),p=n.n(g),s=new WeakMap,C=new IntersectionObserver(function(f){var e=p()(f),t;try{for(e.s();!(t=e.n()).done;){var a=t.value,o=s.get(a.target);o==null||o(a,C)}}catch(l){e.e(l)}finally{e.f()}}),x=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return C.observe(t.current),function(){C.unobserve(t.current)}},[]),(0,r.useEffect)(function(){s.set(t.current,e)},[e]),t},I=function(e){var t=(0,r.useRef)(e);return t.current=e,t},m=n(17061),i=n.n(m),h=n(17156),T=n.n(h),z=function(e){var t=(0,r.useRef)(!1);return(0,r.useCallback)(T()(i()().mark(function a(){var o=arguments;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!t.current){c.next=2;break}return c.abrupt("return");case 2:return c.prev=2,t.current=!0,c.next=6,e.apply(void 0,o);case 6:return c.abrupt("return",c.sent);case 7:return c.prev=7,t.current=!1,c.finish(7);case 10:case"end":return c.stop()}},a,null,[[2,,7,10]])})),[e])},B=n(861),F=n.n(B),N=n(27424),O=n.n(N),D=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=(0,r.useState)(new Map(e)),a=O()(t,2),o=a[0],l=a[1],c=(0,r.useRef)(e),K=(0,r.useCallback)(function(S,w){l(function(q){return new Map([].concat(F()(q),[[S,w]]))})},[]),$=(0,r.useCallback)(function(S){l(function(w){return w.delete(S),new Map(w)})},[]),J=(0,r.useCallback)(function(){l(new Map(c.current))},[]),Q=(0,r.useCallback)(function(S){return o.get(S)},[o]),X=(0,r.useCallback)(function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l(new Map(S))},[]),Y=(0,r.useCallback)(function(){l(new Map)},[]);return(0,r.useMemo)(function(){return{value:o,set:K,remove:$,reset:J,get:Q,clear:Y,setAll:X}},[o])},H=function(e){(0,r.useEffect)(function(){e==null||e()},[])},j=n(18698),V=n.n(j);function L(f,e){return new Proxy(f,{get:function(a,o,l){var c=Reflect.get(a,o,l);return V()(c)==="object"?L(c,e):Reflect.get(a,o)},set:function(a,o,l){var c=Reflect.set(a,o,l);return e(),c},deleteProperty:function(a,o){var l=Reflect.deleteProperty(a,o);return e(),l}})}var b=function(e){var t=E(),a=A(function(){return L(e,t)},[]);return a},P=new WeakMap,Z=new ResizeObserver(function(f){var e=p()(f),t;try{for(e.s();!(t=e.n()).done;){var a=t.value,o=P.get(a.target);o==null||o(a)}}catch(l){e.e(l)}finally{e.f()}}),W=function(e){if(typeof e!="function")throw new TypeError("The parameter should be a callback function");var t=(0,r.useRef)(null);return(0,r.useEffect)(function(){if(!t.current)throw new TypeError('"The parameter 1 should be of type Element');return Z.observe(t.current),function(){Z.unobserve(t.current)}},[]),(0,r.useEffect)(function(){P.set(t.current,e)},[e]),t};function U(f){var e=G(),t=(0,r.useState)(f),a=O()(t,2),o=a[0],l=a[1],c=(0,r.useCallback)(function(K){e.current||l(K)},[]);return[o,c]}var k=function(e){var t=I(e);(0,r.useEffect)(function(){return function(){var a;(a=t.current)===null||a===void 0||a.call(t)}},[])},G=function(){var e=(0,r.useRef)(!1);return(0,r.useEffect)(function(){return e.current=!1,function(){e.current=!0}},[]),e},E=function(){var e=(0,r.useState)({}),t=O()(e,2),a=t[1];return(0,r.useCallback)(function(){return a({})},[])}},86908:function(M,u,n){"use strict";n.r(u),n.d(u,{useBoolean:function(){return R}});var v=n(27424),r=n.n(v),y=n(67294),R=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,g=(0,y.useState)(!!d),p=r()(g,2),s=p[0],C=p[1],x=(0,y.useCallback)(function(){return C(function(m){return!m})},[]),I=[{value:s,toggle:x},C];return I}},78516:function(M,u,n){"use strict";n.r(u),n.d(u,{texts:function(){return r}});var v=n(67274);const r=[{value:"\u5C01\u88C5\u4E86 IntersectionObserver \u7684 Hook\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u76D1\u542C\u5143\u7D20\u7684\u53EF\u89C1\u6027\u53D8\u5316\u3002",paraId:0,tocIndex:0},{value:`useLatest(fn: () => void );
`,paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"fn",paraId:2,tocIndex:5},{value:"mount \u65F6\u6267\u884C\u7684\u51FD\u6570",paraId:2,tocIndex:5},{value:"() => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5}]},34155:function(M){var u=M.exports={},n,v;function r(){throw new Error("setTimeout has not been defined")}function y(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?n=setTimeout:n=r}catch(i){n=r}try{typeof clearTimeout=="function"?v=clearTimeout:v=y}catch(i){v=y}})();function R(i){if(n===setTimeout)return setTimeout(i,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(i,0);try{return n(i,0)}catch(h){try{return n.call(null,i,0)}catch(T){return n.call(this,i,0)}}}function A(i){if(v===clearTimeout)return clearTimeout(i);if((v===y||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(i);try{return v(i)}catch(h){try{return v.call(null,i)}catch(T){return v.call(this,i)}}}var d=[],g=!1,p,s=-1;function C(){!g||!p||(g=!1,p.length?d=p.concat(d):s=-1,d.length&&x())}function x(){if(!g){var i=R(C);g=!0;for(var h=d.length;h;){for(p=d,d=[];++s<h;)p&&p[s].run();s=-1,h=d.length}p=null,g=!1,A(i)}}u.nextTick=function(i){var h=new Array(arguments.length-1);if(arguments.length>1)for(var T=1;T<arguments.length;T++)h[T-1]=arguments[T];d.push(new I(i,h)),d.length===1&&!g&&R(x)};function I(i,h){this.fun=i,this.array=h}I.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={};function m(){}u.on=m,u.addListener=m,u.once=m,u.off=m,u.removeListener=m,u.removeAllListeners=m,u.emit=m,u.prependListener=m,u.prependOnceListener=m,u.listeners=function(i){return[]},u.binding=function(i){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(i){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},42359:function(M,u){"use strict";u.Z=`import axios from 'axios';
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
`}}]);
