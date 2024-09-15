---
title: useBoolean
toc: content
group:
  title: State # 注意缩进
---

# useBoolean

优雅的管理 boolean 状态的 Hook。

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
const [state, setState] = useBoolean(
  val?: boolean,
);
```

### Params

| 参数 | 说明                     | 类型      | 默认值  |
| ---- | ------------------------ | --------- | ------- |
| val  | 可选项，传入默认的状态值 | `boolean` | `false` |

### Result

| 参数     | 说明                 | 类型                     |
| -------- | -------------------- | ------------------------ |
| state    | 状态集合             | `State`                  |
| setState | val 的 setState 函数 | `(val: boolean) => void` |

### State

| 参数   | 说明             | 类型         |
| ------ | ---------------- | ------------ |
| value  | 状态值           | boolean      |
| toggle | 切换状态值的函数 | `() => void` |
