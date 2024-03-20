module.exports = {
	title: "文档中心",
	themeConfig: {
		nav: [
			{
				text: "正则表达式",
				link: "/regexp/",
			},
			{
				text: "Markdown",
				link: "/markdown/",
			},
			{
				text: "前端问题",
				items: [
					{
						text: "CSS问题",
						link: "/CSS/",
					},
					{
						text: "JS问题",
						link: "/JavaScript/",
					},
					{
						text: "UniApp问题",
						link: "/uniapp/",
					},
					{
						text: "SVG问题",
						link: "/svg/",
					},
				],
			},
			{
				text: "提问的智慧",
				link: "/How-To-Ask-Questions/",
			},
			{
				text: "程序员延寿指南",
				link: "/HowToLiveLonger/",
			},
		],
		sidebar: {
			"/regexp/": [
				{
					title: "正则表达式",
					collapsable: false,
					sidebarDepth: 2,
					children: ["/regexp/", "/regexp/metachar", "/regexp/operator", "/regexp/example"],
				},
			],
			"/markdown/basic": [
				{
					title: "Markdown 基本语法",
					collapsable: false,
					sidebarDepth: 2,
					children: [
						"/markdown/basic/headings",
						"/markdown/basic/line-break",
						"/markdown/basic/emphasis",
						"/markdown/basic/blockquotes",
						"/markdown/basic/list",
						"/markdown/basic/code",
						"/markdown/basic/horizontal-rules",
						"/markdown/basic/links",
						"/markdown/basic/images",
						"/markdown/basic/escaping-characters",
						"/markdown/basic/html",
					],
				},
			],
			"/markdown/extended": [
				{
					title: "Markdown 扩展语法",
					sidebarDepth: 2,
					collapsable: false,
					children: [
						"/markdown/extended/availability",
						"/markdown/extended/table",
						"/markdown/extended/heading-ids",
						"/markdown/extended/definition-lists",
						"/markdown/extended/strikethrough",
						"/markdown/extended/task-lists",
						"/markdown/extended/emoji",
						"/markdown/extended/automatic-url-linking",
					],
				},
			],
			"/CSS/": [
				{
					title: "CSS 基础问题",
					collapsable: false,
					sidebarDepth: 2,
					children: [["/CSS/", "CSS问题"], "/CSS/basic/tabular-nums"],
				},
			],
			"/uniapp/": [
				{
					title: "uniapp 问题集合",
					children: ["/uniapp/lockOrientation", "/uniapp/onTabItemTap"],
				},
			],
			"/JavaScript/1-loc": [
				{
					title: "JavaScript 实用程序",
					sidebarDepth: 2,
					collapsable: false,
					children: [
						"/JavaScript/1-loc/array",
						"/JavaScript/1-loc/dom",
						"/JavaScript/1-loc/date-time",
						"/JavaScript/1-loc/misc",
					],
				},
			],
			"/JavaScript/common": [
				{
					title: "JavaScript 常用知识",
					sidebarDepth: 2,
					collapsable: false,
					children: ["/JavaScript/common/toString"],
				},
			],
			"/svg/": [
				{
					title: "SVG",
					collapsable: false,
					sidebarDepth: 2,
					children: ["/svg/teach"],
				},
			],
		},
		sidebarDepth: 2,
		lastUpdated: "Last Updated",
		smoothScroll: true,
	},
	plugins: [
		[
			"vuepress-plugin-code-copy",
			{
				color: "#3eaf7c",
				backgroundTransition: true,
				align: "top",
				staticIcon: false,
			},
		],
	],
}
