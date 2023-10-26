# 图片语法

要添加图像，请使用感叹号 (`!`), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片 Markdown 语法代码：`![图片alt](图片链接 "图片title")`。

对应的 HTML 代码：`<img src="图片链接" alt="图片alt" title="图片title">`

```
![这是图片](/assets/images/deer.png "The deer")
```

渲染效果如下：

![这是图片](/assets/images/deer.png "The deer")

### 链接图片

---

给图片增加链接，请将图像的 Markdown 括在方括号中，然后将链接添加在圆括号中。

```
[![这是图片](/assets/images/deer.png "The deer")](https://markdown.com.cn)
```

渲染效果如下：

[![这是图片](/assets/images/deer.png "The deer")](https://markdown.com.cn)
