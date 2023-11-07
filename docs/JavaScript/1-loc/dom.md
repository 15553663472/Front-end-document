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
