---
title: useResize
toc: content
group:
  title: Scene # 注意缩进
---

# useResize

用于元素 resize 后进行操作的 hook。使用`ResizeObserver` API

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
const domRef: MutableRefObject = useResize(
  cb: (entry: ResizeObserverEntry) => void,
);
```

## Params

| 参数 | 说明                         | 类型                                   | 默认值 |
| ---- | ---------------------------- | -------------------------------------- | ------ |
| cb   | 元素尺寸发生变化时执行的回调 | `(entry: ResizeObserverEntry) => void` | -      |

## Result

| 参数   | 说明                        | 类型               |
| ------ | --------------------------- | ------------------ |
| domRef | 需要挂载到 dom 元素上的 ref | `MutableRefObject` |

### ResizeObserverEntry

参考官方文档-https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry
