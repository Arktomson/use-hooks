---
title: useCssVar
toc: content
group:
  title: State # 注意缩进
---

# useCssVar

优雅的操作 css 变量

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
const [get, set] = useCssVar(domRef: React.RefObject<HTMLElement>);
```

### Params

| 参数   | 说明                | 类型                           | 默认值 |
| ------ | ------------------- | ------------------------------ | ------ |
| domRef | 操作 CSS 变量的元素 | `React.RefObject<HTMLElement>` | -      |

### Result

| 参数 | 说明       | 类型                                    |
| ---- | ---------- | --------------------------------------- |
| get  | 获取变量值 | `(key: string) => string \| undefined ` |
| set  | 设置变量值 | `(key: string, val: string) => void`    |
