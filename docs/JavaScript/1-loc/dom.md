# DOM

## 从一段文本中剥离 HTML

##### JavaScript

```javascript
const stripHtml = html => new DOMParser().parseFromString(html, "text/html").body.textContent || ""
```

##### TypeScript

```typescript
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, "text/html").body.textContent || ""
```

##### Example

```javascript
stripHtml("<div>Test Text</div>") // Test Text
```

## 获取选中的文本

##### JavaScript

```javascript
const getSelectedText = () => window.getSelection().toString()
```

##### TypeScript

```typescript
const getSelectedText = (): string => window.getSelection().toString()
```

## 检查元素是否聚焦

##### JavaScript

```javascript
const hasFocus = ele => ele === document.activeElement
```

##### TypeScript

```typescript
const hasFocus = (ele: Node): boolean => ele === document.activeElement
```
