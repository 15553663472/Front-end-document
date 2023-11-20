# 杂项

## 解码 JWT token

##### JavaScript

```javascript
const decode = token =>
	decodeURIComponent(
		atob(token.split(".")[1].replace("-", "+").replace("_", "/"))
			.split("")
			.map(c => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
			.join(""),
	)
```

##### TypeScript

```typescript
const decode = (token: string): string =>
	decodeURIComponent(
		atob(token.split(".")[1].replace("-", "+").replace("_", "/"))
			.split("")
			.map(c => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
			.join(""),
	)
```

##### Example

```javascript
decode(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`)

// { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
```

## 将 rgb 颜色转换为 hex

##### JavaScript

```javascript
const rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`

// Or
const rgbToHex = (red, green, blue) => `#${[red, green, blue].map(v => v.toString(16).padStart(2, "0")).join("")}`
```

##### TypeScript

```typescript
const rgbToHex = (red: number, green: number, blue: number): string =>
	`#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`

// Or
const rgbToHex = (red: number, green: number, blue: number): string =>
	`#${[red, green, blue].map(v => v.toString(16).padStart(2, "0")).join("")}`
```

##### Example

```javascript
rgbToHex(0, 255, 255) // '#00ffff'
```

## 将 hex 颜色转换为 rgb

##### JavaScript

```javascript
const hexToRgb = hex =>
	hex
		.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
		.substring(1)
		.match(/.{2}/g)
		.map(x => parseInt(x, 16))
```

##### TypeScript

```typescript
const hexToRgb = (hex: string): string =>
	hex
		.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
		.substring(1)
		.match(/.{2}/g)
		.map(x => parseInt(x, 16))
```

##### Example

```javascript
hexToRgb("#00ffff") // [0, 255, 255]
hexToRgb("#0ff") // [0, 255, 255]
```

## 判断一个数字是否是偶数

##### JavaScript

```javascript
const isEven = number => !(number << -1)

// Or
const isEven = number => !!(number & 1)
```

##### TypeScript

```typescript
const isEven = (number: number): boolean => !(number << -1)

// Or
const isEven = (number: number): boolean => !!(number & 1)
```

##### Example

```javascript
isEven(0) // true
isEven(10) // true
isEven(11) // false
```
