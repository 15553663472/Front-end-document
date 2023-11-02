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
				text: "CSS问题",
				link: "/CSS/",
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
					children: ["/regexp/", "/regexp/metachar", "/regexp/operator", "/regexp/example"],
				},
			],
			"/markdown/basic": [
				{
					title: "Markdown 基本语法",
					collapsable: false,
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
					children: ["/CSS/basic/tabular-nums"],
				},
			],
		},
		sidebarDepth: 0,
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
