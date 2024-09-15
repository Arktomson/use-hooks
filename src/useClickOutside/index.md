---
title: useClickOutside
toc: content
group:
  title: Scene # 注意缩进
---

# useClickOutside

点击选定外部区域时触发事件

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
useClickOutside(
  dom: RefObject<HTMLElement>,
  fn: () => void,
);
```

## Params

| 参数 | 说明                        | 类型                     | 默认值 |
| ---- | --------------------------- | ------------------------ | ------ |
| dom  | 需要监听点击事件的 dom 元素 | `RefObject<HTMLElement>` | -      |
| fn   | 点击外部区域时执行的回调    | `() => void`             | -      |
