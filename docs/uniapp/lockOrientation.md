# 锁定屏幕方向

有时我们 app 需要禁止旋转，可以使用以下方法。  
打开项目根目录下的 App.vue，添加如下代码即可

```js
// #ifdef APP-PLUS
plus.screen.lockOrientation("portrait-primary")
// #endif
```

### 参数简介

---

| 参数                | 参数说明                                       |
| ------------------- | ---------------------------------------------- |
| portrait-primary    | 竖屏正方向                                     |
| portrait-secondary  | 竖屏反方向，屏幕正方向按顺时针旋转 180°        |
| landscape-primary   | 横屏正方向，屏幕正方向按顺时针旋转 90°         |
| landscape-secondary | 横屏方向，屏幕正方向按顺时针旋转 270°          |
| portrait            | 竖屏正方向或反方向，根据设备重力感应器自动调整 |
| landscape           | 横屏正方向或反方向，根据设备重力感应器自动调整 |
