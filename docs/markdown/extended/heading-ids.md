# 标题编号

许多 Markdown 处理器支持[标题](/markdown/basic/headings)的自定义 ID - 一些 Markdown 处理器会自动添加它们。添加自定义 ID 允许您直接链接到标题并使用 CSS 对其进行修改。要添加自定义标题 ID，请在与标题相同的行上用大括号括起该自定义 ID。

```
### My Great Heading {#custom-id}
```

HTML 看起来像这样：

```HTML
<h3 id="custom-id">My Great Heading</h3>
```

## 链接到标题 ID (#headid)

通过创建带有数字符号（`#`）和自定义标题 ID 的`[标准链接](/basic-syntax/links.html)`，可以链接到文件中具有自定义 ID 的标题。

| Markdown                      | HTML                                     | 预览效果                    |
| ----------------------------- | ---------------------------------------- | --------------------------- |
| `[Heading IDs](#heading-ids)` | `<a href="#heading-ids">Heading IDs</a>` | [Heading IDs](#heading-ids) |

其他网站可以通过将自定义标题 ID 添加到网页的完整 URL（例如`[Heading IDs](https://markdown.com.cn/extended-syntax/heading-ids.html#headid)`）来链接到标题。
