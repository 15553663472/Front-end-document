# 自动网址链接

许多 Markdown 处理器会自动将 URL 转换为链接。这意味着如果您输入http://www.example.com，即使您未使用[方括号](/markdown/basic/links)，您的Markdown处理器也会自动将其转换为链接。

```
http://www.example.com
```

呈现的输出如下所示：

[http://www.example.com](http://www.example.com)

### 禁用自动 URL 链接

---

如果您不希望自动链接 URL，则可以通过将 URL 表示为带反引号的代码来删除该链接。

```
`http://www.example.com`
```

呈现的输出如下所示：

`http://www.example.com`
