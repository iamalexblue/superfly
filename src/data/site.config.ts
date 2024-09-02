interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'AlexBlue', // Site author
	title: '从今夜白', // Site title.
	description: '你的气质里，藏着你读过的书、走过的路和爱过的人。', // Description to display in the meta tags
	lang: 'zh-CN',
	ogLocale: 'zh-CN',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
