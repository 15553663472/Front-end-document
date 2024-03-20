# toString 用法

JS 中所有类型都拥有 `toString` 方法

### Number

---

`number` 时 `toString` 拥有参数 `radix` ( 进制 )

```javascript
var a = 9

a.toString() // '9' 默认转换为 - 10 进制
a.toString(2) // '1001' - 2 进制
a.toString(8) // '11' - 8 进制

// 可以使用大于 1 的其他进制方式
a.toString(7) // '12' - 7 进制
```

### Boolean | Date

---

等价于

```javascript
;(boolean | Date) + ""
```

例子:

```javascript
false.toString() // 'false'
true.toString() // 'true'

new Date().toString() // 'Wed Mar 20 2024 10:05:08 GMT+0800 (中国标准时间)'
```

### Array

---

等价于

```javascript
array.join(",")
array + ""
```

例子:

```javascript
var a = [1, 2, 3]
a.toString() // 1,2,3
```

### Error

---

等价于

```javascript
error + ""

// 注意, 返回的值会输出 Error 的文本
var err = new Error("test")
err.toString() // 'Error: test'
err + "" // 'Error: test'
```

### RegExp

---

等价于

```javascript
RegExp + ""

// 注意, 无论那种形式创建的正则, 返回的值都会携带两侧的斜杠
/a/.toString() // '/a/'
new RegExp('a').toString() // '/a/'
```

### Function

---

等价于

```javascript
Function + ""

// 会将函数的内容直接原格式转换为字符串后返回
var a = () => {
	console.log(2)
}
// '() => {\n\tconsole.log(2)\n}'

function b(a) {
	return a
}
// 'function b(a) {\n\treturn a\n}'

new Function("a", "return a") // 'function anonymous(a\n) {\nreturn a\n}'
```

<!--
Function (anything whose typeof returns "function")
-->
