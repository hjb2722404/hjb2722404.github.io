(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{525:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"富文本编辑器开发系列-textrange对象api详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#富文本编辑器开发系列-textrange对象api详解"}},[t._v("#")]),t._v(" 富文本编辑器开发系列——"),s("code",[t._v("textRange")]),t._v("对象"),s("code",[t._v("API")]),t._v("详解")]),t._v(" "),s("h2",{attrs:{id:"textrange对象简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textrange对象简介"}},[t._v("#")]),t._v(" textRange对象简介")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("IE9")]),t._v("浏览器和更早版本的浏览器中，是没有提供用来表示选区的"),s("code",[t._v("Range")]),t._v("对象的"),s("code",[t._v("API")]),t._v("的，但是它们依旧有可编辑区域的相关能力，是因为它们提供了另一个对象接口："),s("code",[t._v("textRange")]),t._v("对象")]),t._v(" "),s("h2",{attrs:{id:"textrange对象属性与api概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textrange对象属性与api概览"}},[t._v("#")]),t._v(" textRange对象属性与API概览")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/hjb2722404/tuchuang/raw/master/img/20201210162002.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"textrange-属性详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textrange-属性详解"}},[t._v("#")]),t._v(" textRange 属性详解")]),t._v(" "),s("p",[t._v("我们先直观地看一下这些属性。")]),t._v(" "),s("p",[t._v("我们有下面一段代码：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onscroll")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("scroll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Select some content within this field."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("The coordinates of the selected content's boundary rectangle"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("are visible in the field below"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("再来看页面中选中一个选区后各个属性所指向的")]),t._v(" "),s("p",[t._v("从上面的思维导图中，我们可以看到这些属性的简要介绍。但是还有一些要注意的点")]),t._v(" "),s("h3",{attrs:{id:"祖先元素中离它最近的定位元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#祖先元素中离它最近的定位元素"}},[t._v("#")]),t._v(" 祖先元素中离它最近的定位元素")]),t._v(" "),s("p",[t._v("这其实指的就是的元素的"),s("code",[t._v("offsetParent")]),t._v(" 属性指向的元素，也就是说对于当前选中区域所在的"),s("code",[t._v("textRange")]),t._v("对象，会一层一层往上找它的祖先元素，遇到的第一个定位元素。")]),t._v(" "),s("p",[t._v("我们可以这样理解，获取到包含元素A的所有祖先元素，然后去除掉这些元素中的非定位元素，剩下的嵌套结构中元素A的父级元素就是它的 "),s("code",[t._v("offsetParent")]),t._v(" 属性所指向的元素。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\t\t\t\t "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n              \t\t这个是元素A  \n             \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n// 去除非定位元素\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n              \t\t这个是元素A  \n             \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n// 元素A的 offsetParent 指向的元素就是 className为 “5”的元素\n\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("p",[t._v("这个属性，有以下原则：")]),t._v(" "),s("ul",[s("li",[t._v("如果元素自身的定位方式为"),s("code",[t._v("fixed")]),t._v(" 或者"),s("code",[t._v("display")]),t._v("为"),s("code",[t._v("node")]),t._v("，则它的"),s("code",[t._v("offsetParent")]),t._v("为 "),s("code",[t._v("null")]),t._v("；")]),t._v(" "),s("li",[t._v("如果元素的祖先元素里没有定位元素，并且元素本身没有定位，此时元素的"),s("code",[t._v("offsetParent")]),t._v(" 为最近的"),s("code",[t._v("table/td/th或body")]),t._v("元素")]),t._v(" "),s("li",[t._v("如果元素的祖先元素里没有定位元素，而元素定位为"),s("code",[t._v("absolute")]),t._v("或"),s("code",[t._v("relative")]),t._v(" ，分两种情况：\n"),s("ul",[s("li",[s("code",[t._v("IE7")]),t._v("以上和其它现代浏览器中，此时元素的"),s("code",[t._v("offsetParent")]),t._v(" 为 最近的"),s("code",[t._v("table/td/th或body")]),t._v("元素；")]),t._v(" "),s("li",[s("code",[t._v("IE7")]),t._v(" 以下版本浏览器中，此时元素的 "),s("code",[t._v("offsetParent")]),t._v(" 为最近的"),s("code",[t._v("table/td/th或html")]),t._v("元素；")])])]),t._v(" "),s("li",[t._v("如果元素的祖先元素里有定位元素，而元素自身不是"),s("code",[t._v("fixed")]),t._v("定位，则元素的"),s("code",[t._v("offsetParent")]),t._v(" 为离它最近的有定位的祖先元素。")])]),t._v(" "),s("p",[t._v("知道了以上规则，我们就更好理解"),s("code",[t._v("textRange")]),t._v("对象的"),s("code",[t._v("offsetLeft")]),t._v("属性与"),s("code",[t._v("offsetTop")]),t._v("属性了。")]),t._v(" "),s("p",[t._v("下面来看下这些属性的表现。")]),t._v(" "),s("p",[s("strong",[t._v("本文以下代码示例全部需要在IE9以下版本浏览器中才能正常运行")])]),t._v(" "),s("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/textrangeproperty-b52pk?fontsize=14&hidenavigation=1&theme=dark",title:"textRange_property",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}}),t._v(" "),s("p",[t._v("运行效果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/hjb2722404/tuchuang/raw/master/img/20201210162024.gif",alt:""}})]),t._v(" "),s("p",[t._v("我们拖动后选择的拖蓝区域形成了一个矩形区域，而"),s("code",[t._v("textRange")]),t._v(" 对象的几个属性都和这个矩形区域有关：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("boundingLeft")]),t._v("： 矩形区域左端到父窗口左边框右侧的坐标距离")]),t._v(" "),s("li",[s("code",[t._v("boundingTop")]),t._v("：矩形区域上端到父窗口上边框下侧的坐标距离")]),t._v(" "),s("li",[s("code",[t._v("boundingWidth")]),t._v(" ： 矩形区域的宽度")]),t._v(" "),s("li",[s("code",[t._v("boundingHeight")]),t._v("： 矩形区域的高度")]),t._v(" "),s("li",[s("code",[t._v("offsetLeft")]),t._v("： 矩形区域左端到它最近的定位父级元素的左边框的右侧的距离（这里也是body，所以与left值相等）")]),t._v(" "),s("li",[s("code",[t._v("offsetTop")]),t._v("： 矩形区域上端到它最近的定位父级元素的上边框的下侧的距离（这里也是Body, 所以与 top值相等）")])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"collapse-start-闭合拖蓝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collapse-start-闭合拖蓝"}},[t._v("#")]),t._v(" "),s("code",[t._v("collapse(start)")]),t._v("  闭合拖蓝")]),t._v(" "),s("p",[t._v("将拖蓝范围的起点移动到终点，反之亦然，同"),s("code",[t._v("range")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/hjb2722404/tuchuang/raw/master/img/20201210162045.gif",alt:""}})]),t._v(" "),s("p",[t._v("示例说明：")]),t._v(" "),s("p",[t._v("我们选中了一个选区‘button is released’，当我们释放鼠标时触发了事件，该事件调用了"),s("code",[t._v("collapse")]),t._v("方法将选区向终点闭合了，为了证明，我们在调用方法后，立即插入了一个按钮的内容，证明插入位置是选区终点处。")]),t._v(" "),s("h3",{attrs:{id:"compareendpoints-比较拖蓝与指定对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compareendpoints-比较拖蓝与指定对象"}},[t._v("#")]),t._v(" "),s("code",[t._v("compareEndPoints")]),t._v("  比较拖蓝与指定对象")]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("object.compareEndPoints(type, rangeToCompare);")])]),t._v(" "),s("p",[t._v("说明：比较另一个拖蓝对象与该拖蓝对象的两个端点的位置关系")]),t._v(" "),s("p",[t._v("参数：")]),t._v(" "),s("ul",[s("li",[t._v("type： 比较哪两个端点\n"),s("ul",[s("li",[t._v("EndToEnd:  当前拖蓝的终点与目标对象的终点\n"),s("ul",[s("li",[t._v("EndToStart: 当前拖蓝的终点与目标对象的起点")]),t._v(" "),s("li",[t._v("StartToEnd：当前拖蓝的起点与目标对象的终点")]),t._v(" "),s("li",[t._v("StartToStart：当前拖蓝的起点与目标对象的起点")])])])])]),t._v(" "),s("li",[t._v("rangeToCompare：要比较的目标拖蓝对象")])]),t._v(" "),s("p",[t._v("返回值：")]),t._v(" "),s("ul",[s("li",[t._v("-1：第一个点在第二个点前面")]),t._v(" "),s("li",[t._v("0：两个点在同一个位置")]),t._v(" "),s("li",[t._v("1：第一个点在第二个点后面")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/floral-shape-dn89k?fontsize=14&hidenavigation=1&theme=dark",title:"floral-shape-dn89k",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}}),t._v(" "),s("p",[t._v("示例说明： 我们的目标对象是文本中加粗的部分 ‘bold text’ ，而当前拖蓝对象就是我们鼠标拖动选区的范围，每一次选取，都会触发比较端点的方法，根据该方法返回的值，我们就可以判断出当前拖蓝与目标对象的位置关系。")]),t._v(" "),s("h3",{attrs:{id:"duplicate-克隆拖蓝副本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-克隆拖蓝副本"}},[t._v("#")]),t._v(" "),s("code",[t._v("duplicate()")]),t._v("  克隆拖蓝副本")]),t._v(" "),s("p",[t._v("语法： "),s("code",[t._v("object.duplicate();")])]),t._v(" "),s("p",[t._v("说明：返回一个当前拖蓝对象的副本，同 "),s("code",[t._v("range")]),t._v("对象的 "),s("code",[t._v("cloneRange")]),t._v("方法")]),t._v(" "),s("p",[t._v("相关示例请移步"),s("RouterLink",{attrs:{to:"/programlife/"}},[t._v("rangeAPI")])],1),t._v(" "),s("blockquote",[s("p",[t._v("由于IE已经事实上出于死亡状态（截止写本文时，微软的Eage浏览器已经使用了谷歌的内核），以下IE下的API不再探讨。只供读者在阅读某些较旧的编辑器源码时当做参考用。")])]),t._v(" "),s("h3",{attrs:{id:"execcommand-在当前拖蓝上执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execcommand-在当前拖蓝上执行命令"}},[t._v("#")]),t._v(" "),s("code",[t._v("execCommand()")]),t._v(" 在当前拖蓝上执行命令")]),t._v(" "),s("h3",{attrs:{id:"expand-扩展拖蓝范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expand-扩展拖蓝范围"}},[t._v("#")]),t._v(" "),s("code",[t._v("expand")]),t._v("  扩展拖蓝范围")]),t._v(" "),s("h3",{attrs:{id:"findtext-搜索原先拖蓝内的指定文本-并调整拖蓝使其包含第一次匹配的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findtext-搜索原先拖蓝内的指定文本-并调整拖蓝使其包含第一次匹配的内容"}},[t._v("#")]),t._v(" "),s("code",[t._v("findText")]),t._v(" 搜索原先拖蓝内的指定文本，并调整拖蓝使其包含第一次匹配的内容")]),t._v(" "),s("h3",{attrs:{id:"getbookmark-保存当前拖蓝的端点位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getbookmark-保存当前拖蓝的端点位置"}},[t._v("#")]),t._v(" "),s("code",[t._v("getBookmark")]),t._v("  保存当前拖蓝的端点位置")]),t._v(" "),s("h3",{attrs:{id:"getboundingclientrect-返回拖蓝矩形对象相对于浏览器的位置大小信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getboundingclientrect-返回拖蓝矩形对象相对于浏览器的位置大小信息"}},[t._v("#")]),t._v(" "),s("code",[t._v("getBoundingClientRect")]),t._v(" 返回拖蓝矩形对象相对于浏览器的位置大小信息")]),t._v(" "),s("h3",{attrs:{id:"getclientrects-返回当前拖蓝矩形对象形状信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getclientrects-返回当前拖蓝矩形对象形状信息"}},[t._v("#")]),t._v(" "),s("code",[t._v("getClientRects")]),t._v("  返回当前拖蓝矩形对象形状信息")]),t._v(" "),s("h3",{attrs:{id:"inrange-返回当前拖蓝是否包含指定拖蓝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inrange-返回当前拖蓝是否包含指定拖蓝"}},[t._v("#")]),t._v(" "),s("code",[t._v("inRange")]),t._v(" 返回当前拖蓝是否包含指定拖蓝")]),t._v(" "),s("h3",{attrs:{id:"isequal-返回当前拖蓝是否与指定拖蓝相等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isequal-返回当前拖蓝是否与指定拖蓝相等"}},[t._v("#")]),t._v(" "),s("code",[t._v("isEqual")]),t._v(" 返回当前拖蓝是否与指定拖蓝相等")]),t._v(" "),s("h3",{attrs:{id:"move-将拖蓝闭合-并将空白区域移动指定单位数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#move-将拖蓝闭合-并将空白区域移动指定单位数"}},[t._v("#")]),t._v(" "),s("code",[t._v("move")]),t._v("  将拖蓝闭合，并将空白区域移动指定单位数")]),t._v(" "),s("h3",{attrs:{id:"moveend-将拖蓝结束位置移动指定单位数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#moveend-将拖蓝结束位置移动指定单位数"}},[t._v("#")]),t._v(" "),s("code",[t._v("moveEnd")]),t._v("  将拖蓝结束位置移动指定单位数")]),t._v(" "),s("h3",{attrs:{id:"movestart-将拖蓝的开始位置移动指定单位数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#movestart-将拖蓝的开始位置移动指定单位数"}},[t._v("#")]),t._v(" "),s("code",[t._v("moveStart")]),t._v(" 将拖蓝的开始位置移动指定单位数")]),t._v(" "),s("h3",{attrs:{id:"movetobookmark-获取保存的拖蓝位置信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#movetobookmark-获取保存的拖蓝位置信息"}},[t._v("#")]),t._v(" "),s("code",[t._v("moveToBookMark")]),t._v("  获取保存的拖蓝位置信息")]),t._v(" "),s("h3",{attrs:{id:"movetoelementtext-使拖蓝包含指定元素的文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#movetoelementtext-使拖蓝包含指定元素的文本"}},[t._v("#")]),t._v(" "),s("code",[t._v("moveToElementText")]),t._v(" 使拖蓝包含指定元素的文本")]),t._v(" "),s("h3",{attrs:{id:"movetopoint-移动当前拖蓝的起点和终点到指定位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#movetopoint-移动当前拖蓝的起点和终点到指定位置"}},[t._v("#")]),t._v(" "),s("code",[t._v("moveToPoint")]),t._v("  移动当前拖蓝的起点和终点到指定位置")]),t._v(" "),s("h3",{attrs:{id:"parentelement-返回拖蓝父元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parentelement-返回拖蓝父元素"}},[t._v("#")]),t._v(" "),s("code",[t._v("parentElement")]),t._v("  返回拖蓝父元素")]),t._v(" "),s("h3",{attrs:{id:"pastehtml-将html粘贴入给定的拖蓝-并替换拖蓝内原先的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pastehtml-将html粘贴入给定的拖蓝-并替换拖蓝内原先的内容"}},[t._v("#")]),t._v(" "),s("code",[t._v("pasteHTML")]),t._v("  将HTML粘贴入给定的拖蓝，并替换拖蓝内原先的内容")]),t._v(" "),s("h3",{attrs:{id:"querycommandenabled-返回表明指定命令是否可用于给定文档当前状态下使用-exexcommand-命令成功事项的布尔值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querycommandenabled-返回表明指定命令是否可用于给定文档当前状态下使用-exexcommand-命令成功事项的布尔值"}},[t._v("#")]),t._v(" "),s("code",[t._v("queryCommandEnabled")]),t._v("  返回表明指定命令是否可用于给定文档当前状态下使用 "),s("code",[t._v("exexCommand")]),t._v(" 命令成功事项的布尔值")]),t._v(" "),s("h3",{attrs:{id:"querycommandstate-返回表明指定命令当前状态的布尔值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querycommandstate-返回表明指定命令当前状态的布尔值"}},[t._v("#")]),t._v(" "),s("code",[t._v("queryCommandState")]),t._v("  返回表明指定命令当前状态的布尔值")]),t._v(" "),s("h3",{attrs:{id:"querycommandvalue-返回表明指定命令当前值的domstring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querycommandvalue-返回表明指定命令当前值的domstring"}},[t._v("#")]),t._v(" "),s("code",[t._v("queryCommandValue")]),t._v("  返回表明指定命令当前值的"),s("code",[t._v("DOMString")])]),t._v(" "),s("h3",{attrs:{id:"scrollintoview-将拖蓝滚动到可视范围内"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollintoview-将拖蓝滚动到可视范围内"}},[t._v("#")]),t._v(" "),s("code",[t._v("scrollIntoView")]),t._v(" 将拖蓝滚动到可视范围内")]),t._v(" "),s("h3",{attrs:{id:"select-将当前拖蓝选中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select-将当前拖蓝选中"}},[t._v("#")]),t._v(" "),s("code",[t._v("select")]),t._v("  将当前拖蓝选中")]),t._v(" "),s("h3",{attrs:{id:"setendpoint-根据其它拖蓝的端点设置当前拖蓝的结束点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setendpoint-根据其它拖蓝的端点设置当前拖蓝的结束点"}},[t._v("#")]),t._v(" "),s("code",[t._v("setEndPoint")]),t._v("  根据其它拖蓝的端点设置当前拖蓝的结束点")])])}),[],!1,null,null,null);a.default=e.exports}}]);