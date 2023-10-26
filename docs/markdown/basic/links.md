# 链接语法

链接文本放在中括号内，链接地址放在后面的括号中，链接 title 可选。

超链接 Markdown 语法代码：`[超链接显示名](超链接地址 "超链接title")`

对应的 HTML 代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`

```
这是一个链接 [Markdown语法](http://localhost:8082/markdown/basic/links.html)。
```

渲染效果如下：

这是一个链接 [Markdown 语法](http://localhost:8082/markdown/basic/links.html)。

### 给链接增加 Title

---

链接 title 是当鼠标悬停在链接上时会出现的文字，这个 title 是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

```
这是一个链接 [Markdown语法](http://localhost:8082/markdown/basic/links.html "你好")。
```

渲染效果如下：

这是一个链接 [Markdown 语法](http://localhost:8082/markdown/basic/links.html "你好")。

### 网址和 Email 地址

---

使用尖括号可以很方便地把 URL 或者 email 地址变成可点击的链接。

```
<https://markdown.com.cn>
<fake@example.com>
```

渲染效果如下：

<https://markdown.com.cn>  
<fake@example.com>

### 带格式化的链接

---

[强调](/markdown/basic/emphasis.html)链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

```
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```

渲染效果如下：

I love supporting the **[EFF](https://eff.org)**.  
This is the _[Markdown Guide](https://www.markdownguide.org)_.  
See the section on [`code`](#code).

### 链接最佳实践

---

不同的 Markdown 应用程序处理 URL 中间的空格方式不一样。为了兼容性，请尽量使用`%20`代替空格。
