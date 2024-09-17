---
title: useIntersection
toc: content
group:
  title: Scene # 注意缩进
---

# useIntersection

封装了 IntersectionObserver 的 Hook，可以方便地监听元素的可见性变化。

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
useLatest(fn: () => void );
```

### Params

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | mount 时执行的函数 | `() => void` | -      |
