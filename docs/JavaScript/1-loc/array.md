# 数组

## 创建笛卡尔乘积

##### JavaScript

```javascript
const cartesian = (...sets) => sets.reduce((acc, set) => acc.flatMap(x => set.map(y => [...x, y])), [[]])
```

##### TypeScript

```typescript
const cartesian<T> = (...sets: T[][]):T[][] => sets.reduce((acc:T[][], set:T[]) => acc.flatMap((x: T[]) => set.map((y: T) => [...x, y])), [[]])
```

##### Example

```javascript
cartesian([1, 2], [3, 4]) // [ [1, 3], [1, 4], [2, 3], [2, 4] ]

/*
       3       4
   ---------------
1 | [1, 3]  [1, 4]
  |
2 | [2, 3]  [2, 4]

*/
```

## 展平数组

##### JavaScript

```javascript
const flat = arr =>
	[].concat.apply(
		[],
		arr.map(a => (Array.isArray(a) ? flat(a) : a)),
	)

// Or
const flat = arr => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), [])

// Or
// 查看浏览器兼容性 https://caniuse.com/#feat=array-flat
const flat = arr => arr.flat()

// Or
// 注: 如果数组内容中含有 ',' 则会出现意外情况
const flat = arr => ("" + arr).split(",")
```

##### Example

```javascript
flat(["cat", ["lion", "tiger"]]) // ['cat', 'lion', 'tiger']
```

## 查找数组的最小项

```javascript
const min = arr => Math.min(...arr)

// 如果数组项是对象的话
const min = arr => Math.min(...arr.map(item => item.key))
```

##### TypeScript

```typescript
const min = (arr: number[]): number => Math.min(...arr)

// 如果数组项是对象的话
const min = (arr: object[]): number => Math.min(...arr.key)
```

##### Example

```javascript
min([1, 3, 5]) // 1
```

## 查找数组的最大项

```javascript
const max = arr => Math.max(...arr)

// 如果数组项是对象的话
const max = arr => Math.max(...arr.map(item => item.key))
```

##### TypeScript

```typescript
const max = (arr: number[]): number => Math.max(...arr)

// 如果数组项是对象的话
const max = (arr: object[]): number => Math.max(...arr.key)
```

##### Example

```javascript
max([1, 3, 5]) // 1
```
