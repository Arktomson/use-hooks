---
title: useMap
toc: content
group:
  title: State # 注意缩进
---

# useBoolean

优雅的使用 map 数据结构

## 代码演示

### 基础用法

<code src="./example"></code>

## API

```ts
const map = useMap<K, V>(initialValue);
```

### Params

| 参数         | 说明                        | 类型                      | 默认值 |
| ------------ | --------------------------- | ------------------------- | ------ |
| initialState | 可选项，传入默认的 Map 参数 | `Iterable<[K, V]>boolean` | `[]`   |

### Result

| 参数 | 说明            | 类型  |
| ---- | --------------- | ----- |
| map  | 封装的 map 对象 | `Map` |

### Map

| 参数   | 说明                  | 类型                                 |
| ------ | --------------------- | ------------------------------------ |
| value  | 原始 map 对象         | `Map<K, V>`                          |
| set    | 添加元素              | `(key: K, value: V) => void`         |
| get    | 获取元素              | `(key: K) => V \| void`              |
| remove | 移除元素              | `(key: K) => void`                   |
| reset  | 重置为默认值          | `() => void`                         |
| clear  | 清除所有数据          | `() => void`                         |
| setAll | 生成一个新的 Map 对象 | `(newMap: Iterable<[K, V]>) => void` |
