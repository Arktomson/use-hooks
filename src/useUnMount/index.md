---
title: useUnMount
toc: content
group:
  title: LifeCycle # 注意缩进
---

# useUnMount

只在组件销毁时执行的 Hook。

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
useUnMount(fn: () => void );
```

### Params

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | unMount 时执行的函数 | `() => void` | -      |
