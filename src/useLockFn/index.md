---
title: useLockFn
toc: content
group:
  title: Effect # 注意缩进
---

# useLockFn

用于给一个异步函数增加竞态锁，防止并发执行。

## 代码演示

### 基础用法

<code src="./example.tsx"></code>

## API

```ts
function useLockFn<P extends any[] = any[], V = any>(
  fn: (...args: P) => Promise<V>
): fn: (...args: P) => Promise<V | undefined>;
```

### Params

| 参数 | 说明               | 类型                               | 默认值 |
| ---- | ------------------ | ---------------------------------- | ------ |
| fn   | 增加了竞态锁的函数 | `(...args: any[]) => Promise<any>` |

### Result

| 参数 | 说明                 | 类型                               |
| ---- | -------------------- | ---------------------------------- |
| fn   | 需要增加竞态锁的函数 | `(...args: any[]) => Promise<any>` |
