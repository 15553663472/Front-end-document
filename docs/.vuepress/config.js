module.exports = {
	title: "FrontEnd Technology",
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
					],
				},
			],
			"/markdown/": [
				{
					title: "Markdown语法速查表",
					collapsable: false,
					children: ["/markdown/"],
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
