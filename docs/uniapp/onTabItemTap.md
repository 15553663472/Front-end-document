# 底部导航点击监听

当点击底部当前导航时，进行刷新，类似抖音刷视频时候的操作

使用 `onTabItemTap` 来监听页面 Tabbar 点击事件

Vue 2:

```javascript
onTabItemTap(options) {
	console.log(options)
}
```

Vue 3:

```javascript
import { onTabItemTap } from "@dcloudio/uni-app"

onTabItemTap(options => {
	console.log(options)
})
```

参数 (options) 类型:

```json
{
	"index": 0, // tabbar 下标, 从 0 开始
	"text": "首页", // pages.json 中定义的 tabbar 名称
	"pagePath": "pages/index/index" // 页面地址
}
```

> 注意, 每次 tabbar 被点击都会触发该事件, 所以如果想要实现跳转页面不刷新, 在页面内点击刷新的话, 需要配合 `onLoad` / `onShow` 事件  
> 生命周期触发顺序为: `onLoad` -> `onShow` -> `onTabItemTap`
