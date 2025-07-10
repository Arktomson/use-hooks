"use strict";(self.webpackChunkuse_hooks=self.webpackChunkuse_hooks||[]).push([[904],{23762:function(u,o,n){n.r(o),n.d(o,{demos:function(){return s}});var t=n(67294),e=n(53277),s={}},38534:function(u,o,n){n.r(o),n.d(o,{demos:function(){return s}});var t=n(67294),e=n(41600),s={}},11171:function(u,o,n){n.r(o),n.d(o,{demos:function(){return s}});var t=n(67294),e=n(68537),s={}},54133:function(u,o,n){var t;n.r(o),n.d(o,{demos:function(){return d}});var e=n(17061),s=n.n(e),l=n(17156),v=n.n(l),_=n(67294),P=n(21572),r=n(22280),m=n(86908),d={"docs-playground-demo-playground":{component:_.memo(_.lazy(function(){return Promise.all([n.e(107),n.e(764),n.e(683),n.e(433)]).then(n.bind(n,8546))})),asset:{type:"BLOCK",id:"docs-playground-demo-playground",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(87398).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.6"},"../useBoolean.ts":{type:"FILE",value:n(31897).Z}},entry:"index.tsx"},context:{react:t||(t=n.t(_,2)),antd:r,"/home/runner/work/use-hooks/use-hooks/src/useBoolean/index.ts":m},renderOpts:{compile:function(){var h=v()(s()().mark(function c(){var M,O=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([n.e(764),n.e(335)]).then(n.bind(n,37335));case 2:return a.abrupt("return",(M=a.sent).default.apply(M,O));case 3:case"end":return a.stop()}},c)}));function E(){return h.apply(this,arguments)}return E}()}}}},86908:function(u,o,n){n.r(o),n.d(o,{useBoolean:function(){return l}});var t=n(27424),e=n.n(t),s=n(67294),l=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,P=(0,s.useState)(!!_),r=e()(P,2),m=r[0],d=r[1],h=(0,s.useCallback)(function(){return d(function(c){return!c})},[]),E=[{value:m,toggle:h},d];return E}},36192:function(u,o,n){n.r(o),n.d(o,{texts:function(){return e}});var t=n(53277);const e=[{value:"\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8",paraId:0,tocIndex:0}]},27367:function(u,o,n){n.r(o),n.d(o,{texts:function(){return e}});var t=n(41600);const e=[]},51446:function(u,o,n){n.r(o),n.d(o,{texts:function(){return e}});var t=n(68537);const e=[]},5012:function(u,o,n){n.r(o),n.d(o,{texts:function(){return e}});var t=n(21572);const e=[{value:"\u5728\u8FD9\u91CC\u6D4B\u8BD5\u4F60\u7684 Hooks\u3002",paraId:0,tocIndex:0}]},87398:function(u,o){o.Z=`import React from 'react';
import { useBoolean } from '../useBoolean'; // \u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u5BFC\u5165
import { Button, Space } from 'antd';

export default () => {

  const [{ value: state, toggle }, setState] = useBoolean(false);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return (
    <Space>
      <p>State: {String(state)}</p>
      <Button onClick={toggle}>Toggle</Button>
      <Button onClick={setTrue}>Set True</Button>
      <Button onClick={setFalse}>Set False</Button>
    </Space>
  );
};`},31897:function(u,o){o.Z=`import { useState, useCallback } from 'react';

type useBooleanReturnType = [
  { value: boolean; toggle: () => void },
  (val: boolean) => void,
];
export const useBoolean = (val: boolean = false) => {
  const [state, setState] = useState(!!val);
  const toggle = useCallback(
    () => setState((latestState) => !latestState),
    [],
  );
  const returnvalue: useBooleanReturnType = [
    { value: state, toggle },
    setState,
  ];
  return returnvalue;
};
`}}]);
