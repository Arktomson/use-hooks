---
title: useCreation
toc: content
group:
  title: Extra # 注意缩进
---

# useCreation

`useCreation` 用于对 useMemo 以及 useRef 作补充优化

因为 `useMemo` 不能保证被 memo 的值一定不会被重新计算，而 `useCreation` 可以保证这一点。以下为 React 官方文档中的介绍：

> You may rely on useMemo as a performance optimization, not as a semantic guarantee. In the future, React may choose to “forget” some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. Write your code so that it still works without useMemo — and then add it to optimize performance.

而相比于 `useRef`，你可以使用 `useCreation` 创建一些常量，这些常量和 `useRef` 创建出来的 ref 有很多使用场景上的相似，但对于复杂常量的创建，`useRef` 却容易出现潜在的性能隐患。

```ts
const a = useRef(new Subject()); // 每次重渲染，都会执行实例化 Subject 的过程，即便这个实例立刻就被扔掉了
const b = useCreation(() => new Subject(), []); // 通过 factory 函数，可以避免性能隐患
```

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
function useCreation<T>(fn: () => T, deps: any[]): T;
```

### Params

| 参数 | 说明                   | 类型        | 默认值 |
| ---- | ---------------------- | ----------- | ------ |
| fn   | 用来创建所需对象的函数 | `() => any` | -      |
| deps | 传入依赖变化的对象     | `any[]`     | -      |
