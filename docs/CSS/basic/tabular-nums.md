# 数字不等宽问题

对于数字来说，每个数字的宽度都不一定是相等的。  
比如说对于 1 和 2 来说，从 1 变成 2 的时候宽度一定会发生变化。如果此时周围有元素的话，就会造成元素位置的偏移。  
当遇到这种情况时，我们可以通过 `font-variant-numeric` 属性来实现数字的等宽。  
`font-variant-numeric` CSS 属性控制数字，分数和序号标记的替代字形的使用。  
`tabular-nums` 启用表格数字显示。使数字等宽，易于像表格那样对齐。等同于 OpenType 特性 `tnum`。  
除了这个属性之外，我们也可以通过 `font-feature-settings: "tnum"` 来实现相同的功能。这个属性的兼容性会更好

```css
font-feature-settings: "tnum"; /* 注意: 这里的引号不能省 */

font-variant-numeric: tabular-nums;
```
