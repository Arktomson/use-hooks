---
title: useLatest
toc: content
group:
  title: Extra # 注意缩进
---

# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

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
