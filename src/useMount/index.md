---
title: useMount
toc: content
group:
  title: LifeCycle # 注意缩进
---

# useMount

只在组件初始化时执行的 Hook。

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
useMount(fn: () => void );
```

### Params

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | mount 时执行的函数 | `() => void` | -      |
