# 日期时间

## 获取月份中的第一天

##### JavaScript

```javascript
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1)
```

##### TypeScript

```typescript
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1)
```

## 获取月份中的最后一天

##### JavaScript

```javascript
const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0)
```

##### TypeScript

```typescript
const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0)
```

## 以秒为单位获取时间戳

##### JavaScript

```javascript
const ts = () => (new Date().getTime() / 1000) | 0
```

##### TypeScript

```typescript
const ts = (): number => (new Date().getTime() / 1000) | 0
```

## 将日期转换为 YYYY-MM-DD hh:mm:ss 格式

##### JavaScript

```javascript
// `date` is a `Date` object
const formatYmd = date => date.toISOString().slice(0, 19).replace("T", " ")
```

##### TypeScript

```typescript
const formatYmd = (date: Date): string => date.toISOString().slice(0, 19).replace("T", " ")
```

##### Example

```javascript
formatYmd(new Date()) // 2023-05-06
```

## 从日期中提取年、月、日、小时、分钟、秒和毫秒

##### JavaScript

```javascript
// `date` is a `Date` object
const extract = date =>
	date
		.toISOString()
		.split(/[^0-9]/)
		.slice(0, -1)

// `extract` is an array of [year, month, day, hour, minute, second, millisecond]
```

##### TypeScript

```typescript
const extract = (date: Date): string[] =>
	date
		.toISOString()
		.split(/[^0-9]/)
		.slice(0, -1)
```

##### Example

```javascript
extract(new Date()) // ['2023', '11', '08', '02', '15', '33', '665']
```
